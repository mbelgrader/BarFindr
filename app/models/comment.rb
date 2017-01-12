class Comment < ApplicationRecord
  validates :name, presence: true

  has_many :bar_comments
end
