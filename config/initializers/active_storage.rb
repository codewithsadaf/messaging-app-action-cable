Rails.application.config.to_prepare do
  ActiveStorage::Current.url_options = Rails.application.config.action_mailer.default_url_options
end
