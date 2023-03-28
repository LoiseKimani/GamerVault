Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :games, only: [:index, :show]
  resources :reviews, only: [:show]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end