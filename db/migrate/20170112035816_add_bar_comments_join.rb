class AddBarCommentsJoin < ActiveRecord::Migration[5.0]
  def change
    create_table :bar_comments do |t|
      t.integer :user_id, null: false
      t.integer :bar_id, null: false
      t.integer :comment_id, null: false
      t.timestamps
    end
    add_index :bar_comments, [:user_id, :bar_id, :comment_id]
  end
end
