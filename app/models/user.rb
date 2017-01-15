class User < ApplicationRecord
  validates :email, :password, :session_token, :username, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :email, uniqueness: true

  has_many :comments
  has_many :ratings

  after_initialize :ensure_session_token
  attr_reader :password


  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

  def ensure_session_token
    self.session_token ||= SecureRandom.base64
  end

  def reset_session_token
    self.session_token = SecureRandom.base64
    self.save
    self.session_token
  end
end
