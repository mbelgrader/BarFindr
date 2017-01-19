json.extract! @comment, :id, :body, :user_id, :bar_id

json.username @comment.user.username
