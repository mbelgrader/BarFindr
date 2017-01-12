@bars.each do |bar|
  json.set! bar.id do
    json.extract! bar, :id, :lat, :lng
  end
end
