class Post < ActiveRecord::Base
    has_many :replies
    belongs_to :user
    
    def self.create_permitted_attr(exclude)
        
        x = ['id', 'created_at', 'updated_at'] + exclude
        return Post.attribute_names - x
    end
end
