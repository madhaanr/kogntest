json.array!(@tests) do |test|
  json.extract! test, :id, :name, :year
  json.url test_url(test, format: :json)
end
