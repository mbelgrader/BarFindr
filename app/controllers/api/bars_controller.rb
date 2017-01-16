class Api::BarsController < ApplicationController
  def index
    @bars = bounds ? Bar.in_bounds(bounds) : Bar.all
    # debugger
    if tag != ''
      # @bars = @bars.includes(:tags).where("'club' IN tags")

      # @bars = @bars.where("tags INCLUDES ?", "%#{params[:tag]}%")
      # @bars = @bars.includes(:tags).where("tags INCLUDES ?", "%#{params[:tag]}%")
      @bars = Bar.includes(:tags).where("tags.name = ?", "#{params[:tag]}").references(:tags)
      # @bars = @bars.includes(:tags).where("tags INCLUDES #{params[:tag]} ")
      # @bars = @bars.where(:tags).includes("#{params[:tag]}")
    end
    render :index
  end

  def create
    @bar = Bar.create!(bar_params)
    render :show
  end

  def show
    @bar = Bar.find(params[:id])
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
