class ReplyController < ApplicationController
  def create
    reply = Reply.new
    reply.post_id = params[:post_id]
    reply.user_id = params[:user_id]
    reply.user_name = User.find(params[:user_id]).name
    reply.option_num = params[:option_num]
    reply.content = params[:content] unless params[:content].nil?
    reply.img_url = params[:img_url] unless params[:img_url].nil?
    reply.save
    render json: { 
                  Reply:          Reply.all,
                  current_reply:  reply,
                  current_post:   Post.find(params[:post_id]),
                  current_user:   User.find(params[:user_id])
                 }
  end

  def read
  end

  def count_update
    num = Reply.find(params[:reply_id]).like_count + 1
    Reply.find(params[:reply_id]).increment(:like_count, num)
    render json: { count: num }
  end

  def delete
  end
end