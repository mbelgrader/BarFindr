class CreateRatingsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :ratings do |t|
      t.integer :bar_id, null: false
      t.integer :user_id, null: false
      t.integer :rating, null: false

      t.timestamps
    end
    add_index :ratings, [:bar_id, :user_id]
  end
end
