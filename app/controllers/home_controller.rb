class HomeController < ApplicationController
  def index
  end

  def entering
  end

  def list
  end

  def howto
  end

  def main
    @post = Post.last
    unless params[:id].nil?
      @post = Post.find(params[:id])
    end
  end

  def hanseuly
  end
end
