class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :game_image, :game_name, :rating, :review

  def game_name
    object.game.name
  end

  def user_name
    object.user.name
  end
end
