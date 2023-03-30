class ReviewsController < ApplicationController
    before_action :authenticate_user!
    
    def index
      reviews = Review.all
      render json: reviews
    end
    
    def show
      review = Review.find(params[:id])
      render json: review
    end
  
    def create
      review = current_user.reviews.build(review_params)
      
      if review.save
        render json: review, status: :created
      else
        render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
    def destroy
      review = current_user.reviews.find(params[:id])
      review.destroy
      head :no_content
    end
    
    private
    
    def review_params
      params.require(:review).permit(:game_id, :user_id, :rating, :comment)
    end
end
  