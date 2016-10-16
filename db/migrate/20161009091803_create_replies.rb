class CreateReplies < ActiveRecord::Migration
    def change
        create_table :replies do |t|
            # Table Relations & User Info
            t.integer   :post_id
            t.integer   :user_id
            t.string    :user_name
      
            # Kind Of Reply
            # => List
            t.integer :option_num           #   :option_num => {
                                            #       0 = Op.media,
                                            #       1 = Op.link,
                                            #       2 = Op.infoText,
                                            #       3 = Op.emotion  
                                            #   }
            
            # => Common
            # location pointer
            # => Op.media
            
            t.text      :content
            t.integer   :like_count
            t.integer   :unlike_count
            t.string    :img_url
            t.timestamps null: false
        end
    end
end
