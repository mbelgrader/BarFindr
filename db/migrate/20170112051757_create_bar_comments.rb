class CreateBarComments < ActiveRecord::Migration[5.0]
  def change
    create_table :bar_comments do |t|

      t.timestamps
    end
  end
end
