class Comment < ApplicationRecord
  validates :comment, presence: true

  has_many :bar_comments
end
