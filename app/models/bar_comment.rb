class BarComment < ApplicationRecord
  validates :user_id, :bar_id, :comment_id, presence: true

  belongs_to :user, :bar, :comment
end
