class Comment < ApplicationRecord
  validates :body, :user_id, :bar_id, presence: true

  belongs_to :user
  belongs_to :bar
end
