class CreateSpecials < ActiveRecord::Migration
  def change
    create_table :specials do |t|
      t.date :begin
      t.date :end
      t.string :title
      t.string :content

      t.timestamps null: false
    end
  end
end
