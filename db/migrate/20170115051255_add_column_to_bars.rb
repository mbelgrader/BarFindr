class AddColumnToBars < ActiveRecord::Migration[5.0]
  def change
    add_column :bars, :image, :string
  end
end
