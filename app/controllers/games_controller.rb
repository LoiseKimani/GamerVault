class GamesController < ApplicationController
    before_action :require_login, only: [:create, :destroy]
    
    def index
      games = Game.all
      render json: games
    end
      
    def show
      game = Game.find(params[:id])
      render json: game
    end
  
    def create
      game = Game.new(game_params)
  
      if game.save
        render json: game, status: :created, location: game
      else
        render json: game.errors, status: :unprocessable_entity
      end
    end
    
    def destroy
      game = Game.find(params[:id])
      game.destroy
      head :no_content
    end
  
    private
  
    def game_params
      params.require(:game).permit(:game_name, :game_image, :release_date)
    end
    
    def require_login
      unless session[:user_id]
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
end
  
