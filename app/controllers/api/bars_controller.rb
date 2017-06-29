class Api::BarsController < ApplicationController
  def index
    @bars = bounds ? Bar.in_bounds(bounds) : Bar.all

    if params[:tags]
      @bars = []
      params[:tags].each do |tag|
        @bars.concat(Bar.includes(:tags).where("tags.name = ?", "#{tag}").references(:tags))
      end
    end
    render :index
  end

  def create
    @bar = Bar.create!(bar_params)
    render :show
  end

  def show
    @bar = Bar.find(params[:id])

    @user_rating = 0
    if current_user
      @user_rating = @bar.ratings.where(user_id: current_user.id)
    end
  end

  private

  def bar_params
    params.require(:bar).permit(:name, :address, :lat, :lng, :tags, :image)
  end

  def bounds
    params[:bounds]
  end

end
