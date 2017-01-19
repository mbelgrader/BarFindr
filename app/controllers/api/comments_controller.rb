class Api::CommentsController < ApplicationController
  # before_action :require_logged_in, only: [:create]

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render json: @comment
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :bar_id, :user_id)
  end
end
