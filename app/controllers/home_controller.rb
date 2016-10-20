class HomeController < ApplicationController

  def login
  end

  def index
  end

  def entering
  end

  def list
    @post = Post.last
    unless params[:id].nil?
      @post = Post.find(params[:id])
    end
  end

  def howto
  end

  def listpre
    @post = Post.last
    unless params[:id].nil?
      @post = Post.find(params[:id])
    end
  end

  def main_pre
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
