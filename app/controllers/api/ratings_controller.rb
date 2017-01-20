class Api::RatingsController < ApplicationController

  def create
    @user_id = current_user.id
    @bar_id = rating_params[:bar_id]
    @rating = current_user.ratings.find_by(bar_id: @bar_id)

    if @rating
      new_rating = params[:rating]
      
      if @rating.update(rating_params)
        render :show
      else
        render json: @rating, status: :unprocessable_entity
      end
    else
      @rating = Rating.new(rating_params)
      @rating.user = current_user
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
