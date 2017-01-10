class Api::BarsController < ApplicationController
  def index
    @bars = Bar.all
    render :index
  end

  def create
    @bar = Bar.create!(bar_params)
    render :show
  end

  private

  def bar_params
    params.require(:bench).permit(:name, :address, :lat, :lng)
  end

end
