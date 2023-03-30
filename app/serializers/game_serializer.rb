class GameSerializer < ActiveModel::Serializer
  attributes :id, :game_image, :game_name, :release_date
end
