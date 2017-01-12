class Rating < ApplicationRecord
  validates :bar_id, :user_id, :rating, presence: true

  belongs_to :bar
  belongs_to :user
end
