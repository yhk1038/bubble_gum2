class CreateViewcounts < ActiveRecord::Migration
  def change
    create_table :viewcounts do |t|
      t.integer :count

      t.timestamps null: false
    end
  end
end
