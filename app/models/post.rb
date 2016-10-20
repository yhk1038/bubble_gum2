class Post < ActiveRecord::Base
    has_many :replies
    has_many :viewcounts
    belongs_to :user
    
    def self.create_permitted_attr(exclude)
        
        x = ['id', 'created_at', 'updated_at'] + exclude
        return Post.attribute_names - x
    end
    
    def content_to_split_span_block
        content = self.content
        content2 = content.gsub("<p class=\"post_content\">",'').gsub("</p>",'').gsub("<br>"," <br> ")
        content2 = content2.split
        arr = []
        i = 1
        limit = 20
        loop do
            break if content2[(limit * (i - 1))..((limit * i)-1)].nil?
            arr << content2[(limit * (i - 1))..((limit * i)-1)]
            i += 1
        end
        arr2 = []
        arr.each do |e|
            arr2 << e.join(' ')
        end
        arr3 = []
        j = 1
        arr2.each do |f|
            arr3 << "<span class=\"span_block\" id=\"block#{j}\">" + f + "</span>&nbsp;"
            j += 1
        end
        
        k = 1
        self.replies.reorder("like_count desc").each do |reply|
            arr3.each do |block|
                if block.include?(reply.location)
                    block.gsub!("#{reply.location_text.strip}", "<span class=\"ggum_ddak_ji #{"most_best" if k == 1}\" id=\"#{reply.id}\">#{reply.location_text}</span>")
                end
            end
            k += 1
        end
        content3 = arr3.join
        return content3
    end
    
    # kind_of = "img" or "information" or "news" or "blahblah"
    def gum_count(kind_of)
        
        if kind_of == "img"
            num = 0
        elsif kind_of == "information"
            num = 1
        elsif kind_of == "news"
            num = 2
        elsif kind_of == "blahblah"
            num = 3
        end
        
        return self.replies.where(option_num: num)
    end
    # To Use this Method ::
    # @post = Post.first
    # @post.gum_count("img").count
    
    def view_count_plus
        post = self
        v = Viewcount.new
        v.post_id = post.id
        v.save
        
        return post.viewcounts.count
    end
end
