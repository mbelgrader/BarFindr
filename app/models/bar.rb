class Bar < ApplicationRecord
  validates :name, :address, :lat, :lng, presence: true

  has_many :taggings
  has_many :tags, through: :taggings, source: :tag
  has_many :ratings
  has_many :comments

  def average_rating
    self.ratings.average(:rating).to_f
  end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

end
