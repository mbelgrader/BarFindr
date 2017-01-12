class Bar < ApplicationRecord
  validates :name, :address, :lat, :lng, presence: true

  has_many :taggings, :bar_comments, :ratings
end
