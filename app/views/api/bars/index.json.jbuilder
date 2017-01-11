@bars.each do |bar|
  json.set! bar.id do
    json.partial! '/api/bars/bar', bar: bar
  end
end
