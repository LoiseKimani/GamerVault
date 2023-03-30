class Game < ApplicationRecord
 has_many :reviews
 has_many :users, through: :reviews
  
 validates :game_name, presence: true
 validates :release_date, presence: true
end
