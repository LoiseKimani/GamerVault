class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :game_image
      t.string :game_name
      t.integer :release_date

      t.timestamps
    end
  end
end
