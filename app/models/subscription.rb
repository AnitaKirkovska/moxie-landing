class Subscription < ApplicationRecord
	validates :email, presence: true
	validates :name, presence: true
	validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create, :message => "Не смее да е празно"
end
