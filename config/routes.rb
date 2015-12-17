Rails.application.routes.draw do

# Contact
  get "Contact", to: 'contact#index'
  #get 'contact/index'

# Media
  get "Media", to: 'media#index'
  #get 'media/index'

# Home Page
  get "", to: 'home#index'
  #get 'home/index'
  root 'home#index'
  
  get "UnderConstruction", to: 'home#construction'
  #get 'home/construction'

# Database
  get 'data/specials'
end
