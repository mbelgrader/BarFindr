class Api::RatingsController < ApplicationController

  def create
    @user_id = current_user.id
    @bar_id = params[:bar_id]
    @rating = current_user.ratings.where(bar_id: @bar_id).first

    if @rating
      new_rating = params[:rating]
      debugger
      @rating = Rating.find(@user_id)
      if @rating.update_attribute(:rating, new_rating)
        render :show
      else
        render json: @rating, status: :unprocessable_entity
      end
    else
      @rating = Rating.create(rating_params)
      if @rating.save
        render :show
      else
        render json: @rating, status: :unprocessable_entity
      end
    end
  end

  def update
  end

  private

  def rating_params
    params.require(:rating).permit(:rating, :user_id, :bar_id)
  end
end
