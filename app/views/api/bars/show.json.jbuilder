json.extract! @bar, :id, :name, :address, :tags

json.comments do
  json.array! @bar.comments do |comment|
    json.comment comment.body

    json.user do |user|
      json.user comment.user.username
    end
  end
end
