Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :bars, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resource :comments, only: [:create, :destroy]
    resource :ratings, only: [:create, :update]
  end
end
