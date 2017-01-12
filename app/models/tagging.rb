class Tagging < ApplicationRecord
  validates :bar_id, :tag_id, presence: true
  validates :bar_id, uniqueness: { scope: :tag_id}
  belongs_to :tag, :bar
end
