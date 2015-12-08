Rails.application.routes.draw do

# Home Page
  get 'home/index'
  root 'home#index'
  
  get 'home/construction'
  
end
