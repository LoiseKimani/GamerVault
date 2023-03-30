class Review < ApplicationRecord
 belongs_to :game
 belongs_to :user
  
 validates :rating, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
 validates :comment, presence: true
 validates :user_id, uniqueness: { scope: :game_id, message: "has already reviewed this game" }
end
