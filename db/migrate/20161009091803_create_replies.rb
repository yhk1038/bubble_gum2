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
                                            #       1 = Op.infoText,
                                            #       2 = Op.link,
                                            #       3 = Op.emotion  
                                            #   }
            
            # => Common
            # location pointer
            # => Op.media
            t.string    :link
            t.string    :location_text
            t.text      :location
            t.text      :content
            t.integer   :like_count,         default: 0
            t.integer   :unlike_count,       default: 0
            t.string    :img_url
            t.timestamps null: false
        end
    end
end
