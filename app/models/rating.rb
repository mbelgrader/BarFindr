class Rating < ApplicationRecord
  validates :bar_id, :user_id, :rating

  belongs_to :bar, :user
end
