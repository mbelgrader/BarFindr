class BarComment < ApplicationRecord
  validates :user_id, :bar_id, :comment_id, presence: true

  belongs_to :user
  belongs_to :bar
  belongs_to :comment
end
