json.extract! @bar,
              :id,
              :name,
              :address,
              :tags,
              :image,
              :average_rating
              # :user_rating

json.comments do
  json.array! @bar.comments do |comment|
    json.id comment.id
    json.body comment.body
    json.username comment.user.username
  end
end
