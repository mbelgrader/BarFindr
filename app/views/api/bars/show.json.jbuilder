json.extract! @bar, :id, :name, :address, :tags

json.comments do
  json.array! @bar.comments do |comment|
    json.body comment.body
    json.username comment.user.username
  end
end
