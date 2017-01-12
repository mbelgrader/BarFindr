class Bar < ApplicationRecord
  validates :name, :address, :lat, :lng, presence: true

  has_many :taggings
  has_many :bar_comments
  has_many :ratings
end
