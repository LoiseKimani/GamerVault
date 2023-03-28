class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :game_image
      t.string :game_name
      t.integer :rating
      t.string :review

      t.timestamps
    end
  end
end
