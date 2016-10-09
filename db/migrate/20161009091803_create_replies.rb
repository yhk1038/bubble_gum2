class CreateReplies < ActiveRecord::Migration
  def change
    create_table :replies do |t|
      t.integer   :post_id
      t.integer   :user_id
      t.string    :user_name
      
      t.text      :content
      t.integer   :like_count
      t.integer   :unlike_count
      t.string    :img_url
      t.timestamps null: false
    end
  end
end
