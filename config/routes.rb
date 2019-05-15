Rails.application.routes.draw do
  get 'home/index'
  get 'home/hello'
  get 'users/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #
  #
  root 'home#index'
end
