Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :destroy]
  resources :games, only: [:index, :show, :create]
  resources :reviews, only: [:index, :show, :create, :destroy]

  #use the match method instead of get to allow other HTTP methods (e.g. POST, PUT, DELETE) for  custom routes.
  match "/login", to: "sessions#create", via: [:post]
  match "/logout", to: "sessions#destroy", via: [:delete]
  get "/me", to: "users#show"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
