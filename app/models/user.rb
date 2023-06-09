class User < ApplicationRecord
 has_many :reviews
 has_many :games, through: :reviews
  
 has_secure_password
  
 validates :name, presence: true
 validates :email, presence: true
end
