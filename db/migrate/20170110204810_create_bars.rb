class CreateBars < ActiveRecord::Migration[5.0]
  def change
    create_table :bars do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
  end
end
