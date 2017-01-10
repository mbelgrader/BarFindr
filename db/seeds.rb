# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Bar.create!(name: 'Dada Bar',
            address: '65 Post St',
            lat: 37.7888479,
            lng: -122.4052969)

Bar.create!(name: 'Benders',
            address: '806 S Van Ness Ave',
            lat: 37.7601718,
            lng: -122.419518)

Bar.create!(name: "The Cigar Bar \& Grill",
            address: '850 Montgomery St',
            lat: 37.7915624,
            lng: -122.4207866)

Bar.create!(name: 'Library Bar',
            address: '562 Sutter St',
            lat: 37.7893385,
            lng: -122.4119542)
