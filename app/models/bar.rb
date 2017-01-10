class Bar < ApplicationRecord
  validates :name, :address, :lat, :lng, presence: true
end
