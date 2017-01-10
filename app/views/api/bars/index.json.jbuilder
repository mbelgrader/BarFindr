@bars.each do |bar|
  json.set! bar.id do
    json.extract! bar, :id, :name, :address, :lat, :lng
  end
end
