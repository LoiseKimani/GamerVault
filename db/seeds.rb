# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🛫 Seeding..."

#Seed Users

User.create(name: "Jasmine Brown", picture: "/client/Logo suggestions/f5429a8e-2f06-4448-8604-bc669e3a3819.jpeg")
User.create(name: "Natasha Lyonne", picture: "/client/Logo suggestions/bb2212ef-892e-43f6-bda8-6ca21783b28a.jpeg")
User.create(name: "Clark Bane", picture: "/client/Logo suggestions/Gaming Heartbeat Gift for Gamer Video Game Lovers by TastefulTees _ Redbubble.png")

#Seed Games

Game.create(name: "God of War Ragnarok", release_date: "2022-09-13")
Game.create(name: "Grand Theft Auto V", release_date: "2018-02-21")
Game.create(name: "Call of Duty:Modernwarfare", release_date: "2019-02-27")

#Seed Reviews

Review.create(picture: "/client/Logo suggestions/God of War PS4 Hits Game.jpeg",game_name: "God of War Ragnarok",  rating: 4, review: "This game is a classic and I love it!")
Review.create(picture: "/client/Logo suggestions/Grand Theft Auto V_ Premium Online Edition Game for PS4.jpeg", game_name: "Grand Theft Auto V", rating: 5, review: "This is one of my favorite games of all time. The music is amazing!")
Review.create(picture: "/client/Logo suggestions/Call of Duty_ Modern Warfare II - PlayStation 5.jpeg", game_name: "Call of Duty:Modernwarfare", rating: 3, review: "I enjoyed playing this game series as a kid, but it hasn't aged very well.")

puts "🛬 Done seeding!"