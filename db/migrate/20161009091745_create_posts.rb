class CreatePosts < ActiveRecord::Migration
    def change
        create_table :posts do |t|
            # Table Relations & User Info
            t.integer :user_id
            t.string  :reporter_name
            t.string  :reporter_mail
            t.string  :reporter_phone
            
            t.string  :title
            t.text    :content
            t.string  :written_at
            t.string  :editor_name
            t.string  :editor_email
            t.string  :img_url
            t.timestamps null: false
        end
    end
end
