# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Add three more seed data.
puts "🛫 Seeding..."

#Seed Users

user1 = User.create!(name: "Jasmine Brown", email: "john.doe@example.com", password: "1234", password_confirmation: "1234")
user2 = User.create!(name: "Natasha Lyonne", email: "jane.doe@example.com", password: "abcd", password_confirmation: "abcd")
user3 = User.create!(name: "Clark Bane", email: "testuser@example.com", password: "12ab", password_confirmation: "12ab")


#Seed Games

game1 = Game.create!(game_image: "/client/Logo suggestions/God of War PS4 Hits Game.jpeg", game_name: "God of War Ragnarok", release_date: "2022")
game2 = Game.create!(game_image: "/client/Logo suggestions/Grand Theft Auto V_ Premium Online Edition Game for PS4.jpeg", game_name: "Grand Theft Auto V", release_date: "2018")
game3 = Game.create!(game_image: "/client/Logo suggestions/Call of Duty_ Modern Warfare II - PlayStation 5.jpeg", game_name: "Call of Duty:Modernwarfare", release_date: "2019")

#Seed Reviews

review1 = Review.create!(game: game1, user: user1, rating: 4, comment: "This game is a classic and I love it!")
review2 = Review.create!(game: game2, user: user2, rating: 5, comment: "This is one of my favorite games of all time. The music is amazing!")
review3 = Review.create!(game: game3, user: user3, rating: 3, comment: "I enjoyed playing this game series as a kid, but it hasn't aged very well.")

puts "🛬 Done seeding!"
