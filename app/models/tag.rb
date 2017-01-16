class Tag < ApplicationRecord
  validates :name, presence: true

  has_many :taggings
  has_many :bars, through: :taggings, source: :bars
end
