require "bundler/setup"
# DB = SQLite3::Database.new("db/development.db")
# DB.results_as_hash = true

ENV["RACK_ENV"] ||= "development"

<<<<<<< HEAD
require 'bundler/setup'
=======
>>>>>>> b7a4eb3bc5dc35c01f059ec41a0bcb865fcdcc18
Bundler.require(:default, ENV["RACK_ENV"])

require_all "app"

