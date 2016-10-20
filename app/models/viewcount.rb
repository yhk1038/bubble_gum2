class Viewcount < ActiveRecord::Base
    belongs_to :post
    belongs_to :reply
end
