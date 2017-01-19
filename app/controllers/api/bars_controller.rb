class Api::BarsController < ApplicationController
  def index
    @bars = bounds ? Bar.in_bounds(bounds) : Bar.all

    if tag != ''
      @bars = Bar.includes(:tags).where("tags.name = ?", "#{params[:tag]}").references(:tags)
    end
    render :index
  end

  def create
    @bar = Bar.create!(bar_params)
    render :show
  end

  def show
    @bar = Bar.find(params[:id])
    # @user_rating = current_user.ratings.where(bar_id: @bar.id)
    # @rating = @bar.average_rating
    # if current_user
    #   @rating = @bar.ratings.where(user_id: current_user.id)
    #   @rating = @bar.average_rating if @rating.nil?
    # else
    #   @rating = @bar.average_rating
    # end
    @average_rating = @bar.average_rating
  end

  private

  def bar_params
    params.require(:bar).permit(:name, :address, :lat, :lng, :tags, :image)
  end

  def bounds
    params[:bounds]
  end

  def tag
    params[:tag]
  end
end
