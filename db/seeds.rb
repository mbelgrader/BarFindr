
User.create!(email: 'test', password: 'password')
User.create!(email: 'demo', password: 'password')

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
