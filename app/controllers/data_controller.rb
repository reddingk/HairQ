class DataController < ApplicationController
  def specials
    @specials = Special.all
    render json: @specials
  end
  
## END Controller  
end