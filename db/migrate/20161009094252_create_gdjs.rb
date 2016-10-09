class CreateGdjs < ActiveRecord::Migration
  def change
    create_table :gdjs do |t|
      t.integer :post_id

      t.timestamps null: false
    end
  end
end
