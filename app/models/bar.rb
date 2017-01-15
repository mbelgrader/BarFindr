class Bar < ApplicationRecord
  validates :name, :address, :lat, :lng, presence: true

  has_many :taggings
  has_many :tags, through: :taggings, source: :tag
  has_many :ratings
  has_many :comments
end
