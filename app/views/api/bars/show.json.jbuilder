json.extract! @bar, :id, :name, :address

json.comments do
  json.array! @bar.comments do |comment|
    json.comment comment
  end
end
