json.array!(@details) do |detail|
  json.extract! detail, :id, :name, :year
  json.url detail_url(detail, format: :json)
end
