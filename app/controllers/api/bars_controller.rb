class Api::BarsController < ApplicationController
  def index
    @bars = bounds ? Bar.in_bounds(bounds) : Bar.all

    if tag
      # @bars = @bars.where(params[:tags].inlcudes(tag))
      @bars = @bars.where(name: 'Benders')
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
