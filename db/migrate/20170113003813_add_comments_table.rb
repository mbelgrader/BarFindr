class AddCommentsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :bar_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :comments, [:bar_id, :user_id]
  end
end
