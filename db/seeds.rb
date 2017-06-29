
User.create!(email: 'demo', username: 'demo', password: 'password')
User.create!(email: 'ashley12@test.com', username: 'ashley12', password: 'password')
User.create!(email: 'amillz@test.com', username: 'amillz', password: 'password')
User.create!(email: 'stevie@test.com', username: 'stevie', password: 'password')
User.create!(email: 'brandon34@test.com', username: 'brandon34', password: 'password')
User.create!(email: 'xtina5@test.com', username: 'xtina5', password: 'password')
User.create!(email: 'jenny42@test.com', username: 'jenny42', password: 'password')
User.create!(email: 'nick12@test.com', username: 'nick12', password: 'password')
User.create!(email: 'dandk@test.com', username: 'dandk', password: 'password')
User.create!(email: 'hunter@test.com', username: 'hunter45', password: 'password')
User.create!(email: 'nikki@test.com', username: 'nikki', password: 'password')

# zeitgeist, infusion, smugglers,

Bar.create!(name: 'Dada Bar',
            address: '65 Post St',
            lat: 37.7888479,
            lng: -122.4052969,
            image: "https://res.cloudinary.com/ddp4q9jnr/image/upload/v1498712453/dada_sbtp7g.jpg")

Bar.create!(name: 'Benders',
            address: '806 S Van Ness Ave',
            lat: 37.7601718,
            lng: -122.419518,
            image: "https://res.cloudinary.com/ddp4q9jnr/image/upload/v1497311784/venues/benders.jpg")

Bar.create!(name: "The Cigar Bar \& Grill",
            address: '850 Montgomery St',
            lat: 37.7915624,
            lng: -122.4207866,
            image: "https://res.cloudinary.com/ddp4q9jnr/image/upload/v1498712452/cigar_bar_vw4iew.jpg")

Bar.create!(name: 'Library Bar',
            address: '562 Sutter St',
            lat: 37.7893385,
            lng: -122.4119542,
            image: "https://res.cloudinary.com/ddp4q9jnr/image/upload/v1498712453/library_bar_hl9uw6.jpg")

Bar.create!(name: 'Infusion Loung',
            address: '124 Ellis St',
            lat: 37.7855668,
            lng: -122.4105829,
            image: "https://res.cloudinary.com/ddp4q9jnr/image/upload/v1497311784/venues/infusion.jpg")

Bar.create!(name: 'Zeitgeist',
            address: '199 Valencia St',
            lat: 37.7700323,
            lng: -122.424292,
            image: "https://res.cloudinary.com/ddp4q9jnr/image/upload/v1498712453/zeitgeist_zypbch.jpg")

Bar.create!(name: '724Hookah',
            address: '724 Geary St',
            lat: 37.7866522,
            lng: -122.4174318,
            image: "https://res.cloudinary.com/ddp4q9jnr/image/upload/v1498712453/724hookah_qcjy6f.jpg")

Bar.create!(name: "Jillian\'s",
            address: 'Metreon, 175 4th St',
            lat: 37.7838403,
            lng: -122.4051866,
            image: "https://res.cloudinary.com/ddp4q9jnr/image/upload/v1498712453/jillians_dit5a7.jpg")

Bar.create!(name: "Golden Gate Tap Room",
            address: '449 Powell St',
            lat: 37.7857057,
            lng: -122.4089846,
            image: "https://res.cloudinary.com/ddp4q9jnr/image/upload/v1497311783/venues/ggtr.jpg")

Bar.create!(name: "Elixir",
            address: '3200 16th St',
            lat: 37.7665234,
            lng: -122.4238977,
            image: "https://res.cloudinary.com/ddp4q9jnr/image/upload/v1497311783/venues/elixer.jpg")

Bar.create!(name: "Monarch",
            address: '101 6th St',
            lat: 37.7809868,
            lng: -122.4106163,
            image: "https://res.cloudinary.com/ddp4q9jnr/image/upload/v1497328564/monarch_xtbzeq.jpg")

Bar.create!(name: "Temple",
            address: '540 Howard St',
            lat: 37.7879758,
            lng: -122.3994039,
            image: "https://res.cloudinary.com/ddp4q9jnr/image/upload/v1497328577/temple_wq0fmx.png")

Tag.create!(name: 'dive') # 1
Tag.create!(name: 'club') # 2
Tag.create!(name: 'lounge') # 3
Tag.create!(name: 'hookah') # 4
Tag.create!(name: 'live music') # 5
Tag.create!(name: 'food') # 6
Tag.create!(name: 'casual') # 7
Tag.create!(name: 'sports') # 8
Tag.create!(name: 'hipster') # 9
Tag.create!(name: 'biker') # 10
Tag.create!(name: 'pool') # 11

# Dada
Tagging.create!(bar_id: 1, tag_id: 3)
Tagging.create!(bar_id: 1, tag_id: 7)
Tagging.create!(bar_id: 1, tag_id: 8)

# Benders
Tagging.create!(bar_id: 2, tag_id: 1)
Tagging.create!(bar_id: 2, tag_id: 5)
Tagging.create!(bar_id: 2, tag_id: 6)
Tagging.create!(bar_id: 2, tag_id: 7)
Tagging.create!(bar_id: 2, tag_id: 10)
Tagging.create!(bar_id: 2, tag_id: 11)

# Cigar
Tagging.create!(bar_id: 3, tag_id: 3)
Tagging.create!(bar_id: 3, tag_id: 5)
Tagging.create!(bar_id: 3, tag_id: 6)
Tagging.create!(bar_id: 3, tag_id: 7)
Tagging.create!(bar_id: 3, tag_id: 11)

# Library
Tagging.create!(bar_id: 4, tag_id: 3)
Tagging.create!(bar_id: 4, tag_id: 6)
Tagging.create!(bar_id: 4, tag_id: 7)
Tagging.create!(bar_id: 4, tag_id: 9)
Tagging.create!(bar_id: 4, tag_id: 11)

# Infusion
Tagging.create!(bar_id: 5, tag_id: 2)

# Zeitgeist
Tagging.create!(bar_id: 6, tag_id: 1)
Tagging.create!(bar_id: 6, tag_id: 6)
Tagging.create!(bar_id: 6, tag_id: 7)
Tagging.create!(bar_id: 6, tag_id: 11)

# 724 hookah
Tagging.create!(bar_id: 7, tag_id: 4)
Tagging.create!(bar_id: 7, tag_id: 7)

# Jillians
Tagging.create!(bar_id: 8, tag_id: 3)
Tagging.create!(bar_id: 8, tag_id: 6)
Tagging.create!(bar_id: 8, tag_id: 7)
Tagging.create!(bar_id: 8, tag_id: 8)
Tagging.create!(bar_id: 8, tag_id: 11)

# Tap Room
Tagging.create!(bar_id: 9, tag_id: 3)
Tagging.create!(bar_id: 9, tag_id: 6)
Tagging.create!(bar_id: 9, tag_id: 7)
Tagging.create!(bar_id: 9, tag_id: 8)
Tagging.create!(bar_id: 9, tag_id: 11)

# Elixir
Tagging.create!(bar_id: 10, tag_id: 3)
Tagging.create!(bar_id: 10, tag_id: 7)
Tagging.create!(bar_id: 10, tag_id: 9)

# Monarch
Tagging.create!(bar_id: 11, tag_id: 2)

# Temple
Tagging.create!(bar_id: 12, tag_id: 2)

# Dada
Comment.create!(body: 'Really cool modern art', user_id: 6, bar_id: 1)
Comment.create!(body: 'Beautiful interior', user_id: 6, bar_id: 1)
Comment.create!(body: 'Amazing bartenders', user_id: 6, bar_id: 1)
Comment.create!(body: 'Stylish venue', user_id: 6, bar_id: 1)
Comment.create!(body: 'New place is amazing', user_id: 6, bar_id: 1)
Comment.create!(body: 'Love the mezzanine', user_id: 6, bar_id: 1)
Comment.create!(body: 'Cool art display', user_id: 6, bar_id: 1)
Comment.create!(body: 'Great place', user_id: 5, bar_id: 1)

# Benders
Comment.create!(body: 'Cheap drinks', user_id: 5, bar_id: 2)
Comment.create!(body: 'Cool bands', user_id: 10, bar_id: 2)
Comment.create!(body: 'Everyone is really friendly', user_id: 9, bar_id: 2)
Comment.create!(body: "Burger is amazing", user_id: 8, bar_id: 2)
Comment.create!(body: "There\'s a juke box and photobooth", user_id: 7, bar_id: 2)
Comment.create!(body: 'decent beer selection', user_id: 6, bar_id: 2)
Comment.create!(body: 'pool tables!', user_id: 4, bar_id: 2)
Comment.create!(body: 'Live bands!!!!', user_id: 3, bar_id: 2)
Comment.create!(body: 'Awesome bartenders', user_id: 2, bar_id: 2)

# Cigar
Comment.create!(body: 'Really good cigars', user_id: 7, bar_id: 3)
Comment.create!(body: 'Food takes a long time and not that great', user_id: 6, bar_id: 3)
Comment.create!(body: 'Ahi poke and cheese/meat plate are really good', user_id: 5, bar_id: 3)
Comment.create!(body: 'Fun place to hang out on a nice day', user_id: 4, bar_id: 3)
Comment.create!(body: 'Great place to day drink with a cigar', user_id: 3, bar_id: 3)
Comment.create!(body: 'Cool outdoor patio space', user_id: 2, bar_id: 3)

# Library
Comment.create!(body: 'Quiet place to relax', user_id: 4, bar_id: 4)
Comment.create!(body: 'Cozy place', user_id: 6, bar_id: 4)
Comment.create!(body: 'Expert cocktails', user_id: 5, bar_id: 4)
Comment.create!(body: 'Great food', user_id: 2, bar_id: 4)
Comment.create!(body: 'Cool spot', user_id: 3, bar_id: 4)

# Infusion
Comment.create!(body: 'Too crowded', user_id: 7, bar_id: 5)
Comment.create!(body: 'Not easy finding parking..', user_id: 2, bar_id: 5)
Comment.create!(body: 'Really pricey', user_id: 6, bar_id: 5)
Comment.create!(body: 'VIP is on point', user_id: 3, bar_id: 5)
Comment.create!(body: 'Really long line on a weeknight', user_id: 5, bar_id: 5)
Comment.create!(body: 'They play top 40/hip hop', user_id: 8, bar_id: 5)

# Zeitgeist
Comment.create!(body: 'Nice outdoor area', user_id: 5, bar_id: 6)
Comment.create!(body: 'Great place to hang and daydrink', user_id: 4, bar_id: 6)
Comment.create!(body: 'Cheap drinks!', user_id: 6, bar_id: 6)
Comment.create!(body: 'They have a pool table', user_id: 7, bar_id: 6)
Comment.create!(body: 'Cool spot', user_id: 8, bar_id: 6)

#724 hookah
Comment.create!(body: 'Best hookah place in SF', user_id: 2, bar_id: 7)
Comment.create!(body: 'meh', user_id: 3, bar_id: 7)
Comment.create!(body: 'pricey', user_id: 4, bar_id: 7)
Comment.create!(body: 'This place is legit. Worth checking out', user_id: 8, bar_id: 7)
Comment.create!(body: 'Too crowded', user_id: 7, bar_id: 7)

# Jillians
Comment.create!(body: 'Huge projector screens', user_id: 7, bar_id: 8)
Comment.create!(body: 'sports sports sports', user_id: 9, bar_id: 8)
Comment.create!(body: 'great wings!', user_id: 9, bar_id: 8)
Comment.create!(body: 'food is okay', user_id: 2, bar_id: 8)
Comment.create!(body: 'Wall of tvs', user_id: 3, bar_id: 8)
Comment.create!(body: 'A lot of tvs..', user_id: 4, bar_id: 8)
Comment.create!(body: 'Great to watch sports', user_id: 5, bar_id: 8)
Comment.create!(body: 'Staff is awesome', user_id: 6, bar_id: 8)
Comment.create!(body: 'Good range of beers', user_id: 10, bar_id: 8)
Comment.create!(body: 'Very good vibes', user_id: 11, bar_id: 8)

# Tap room
Comment.create!(body: 'Very good vibes', user_id: 3, bar_id: 9)
Comment.create!(body: 'Crowd was pretty cool', user_id: 4, bar_id: 9)
Comment.create!(body: 'Beer, wings, game', user_id: 5, bar_id: 9)
Comment.create!(body: 'Really loud', user_id: 11, bar_id: 9)
Comment.create!(body: 'Great sports bar', user_id: 7, bar_id: 9)
Comment.create!(body: 'good food', user_id: 10, bar_id: 9)
Comment.create!(body: 'Games games games', user_id: 10, bar_id: 9)
Comment.create!(body: 'Staff is very friendly', user_id: 9, bar_id: 9)
Comment.create!(body: 'Very spacious', user_id: 6, bar_id: 9)

# Elixir
Comment.create!(body: 'Cool victorian feel', user_id: 7, bar_id: 10)
Comment.create!(body: 'Awesome cocktails', user_id: 9, bar_id: 10)
Comment.create!(body: 'Friendly crowd', user_id: 6, bar_id: 10)
Comment.create!(body: 'Array of seating', user_id: 8, bar_id: 10)
Comment.create!(body: 'old fashioned but classy', user_id: 10, bar_id: 10)

# Monarch
Comment.create!(body: 'so much fun!', user_id: 7, bar_id: 11)
Comment.create!(body: 'cover is pricey', user_id: 8, bar_id: 11)
Comment.create!(body: 'arobatics realy cool to watch', user_id: 6, bar_id: 11)
Comment.create!(body: 'good house music', user_id: 9, bar_id: 11)
Comment.create!(body: 'cocktails are really good', user_id: 5, bar_id: 11)
Comment.create!(body: 'photobooth is cool', user_id: 4, bar_id: 11)

# Temple
Comment.create!(body: 'long line on weekends', user_id: 4, bar_id: 12)
Comment.create!(body: 'good music', user_id: 2, bar_id: 12)
Comment.create!(body: 'bottle service is on point', user_id: 3, bar_id: 12)
Comment.create!(body: 'always crowded', user_id: 8, bar_id: 12)

# Dada
Rating.create!(bar_id: 1, user_id: 2, rating: 5)
Rating.create!(bar_id: 1, user_id: 3, rating: 5)
Rating.create!(bar_id: 1, user_id: 4, rating: 5)
Rating.create!(bar_id: 1, user_id: 5, rating: 5)

# Benders
Rating.create!(bar_id: 2, user_id: 2, rating: 4)
Rating.create!(bar_id: 2, user_id: 3, rating: 4)
Rating.create!(bar_id: 2, user_id: 4, rating: 4)
Rating.create!(bar_id: 2, user_id: 5, rating: 4)

# Cigar
Rating.create!(bar_id: 3, user_id: 2, rating: 3.5)
Rating.create!(bar_id: 3, user_id: 3, rating: 3.5)
Rating.create!(bar_id: 3, user_id: 4, rating: 3.5)
Rating.create!(bar_id: 3, user_id: 5, rating: 3.5)

# Library
Rating.create!(bar_id: 4, user_id: 2, rating: 4)
Rating.create!(bar_id: 4, user_id: 3, rating: 4)
Rating.create!(bar_id: 4, user_id: 4, rating: 4)
Rating.create!(bar_id: 4, user_id: 5, rating: 4)

# Infusion
Rating.create!(bar_id: 5, user_id: 2, rating: 3.5)
Rating.create!(bar_id: 5, user_id: 3, rating: 3.5)
Rating.create!(bar_id: 5, user_id: 4, rating: 3.5)
Rating.create!(bar_id: 5, user_id: 5, rating: 3.5)

# Zeitgeist
Rating.create!(bar_id: 6, user_id: 2, rating: 4)
Rating.create!(bar_id: 6, user_id: 3, rating: 5)
Rating.create!(bar_id: 6, user_id: 4, rating: 5)
Rating.create!(bar_id: 6, user_id: 5, rating: 4)

# 724 hookah
Rating.create!(bar_id: 7, user_id: 2, rating: 4)
Rating.create!(bar_id: 7, user_id: 3, rating: 4)
Rating.create!(bar_id: 7, user_id: 4, rating: 4)
Rating.create!(bar_id: 7, user_id: 5, rating: 4)

# Jillians
Rating.create!(bar_id: 8, user_id: 2, rating: 2.5)
Rating.create!(bar_id: 8, user_id: 3, rating: 2.5)
Rating.create!(bar_id: 8, user_id: 4, rating: 2.5)
Rating.create!(bar_id: 8, user_id: 5, rating: 2.5)

# tap room
Rating.create!(bar_id: 9, user_id: 2, rating: 3.5)
Rating.create!(bar_id: 9, user_id: 3, rating: 3.5)
Rating.create!(bar_id: 9, user_id: 4, rating: 3.5)
Rating.create!(bar_id: 9, user_id: 5, rating: 3.5)

# Elixir
Rating.create!(bar_id: 10, user_id: 2, rating: 3.5)
Rating.create!(bar_id: 10, user_id: 3, rating: 3.5)
Rating.create!(bar_id: 10, user_id: 4, rating: 3.5)
Rating.create!(bar_id: 10, user_id: 5, rating: 3.5)

# Monarch
Rating.create!(bar_id: 11, user_id: 2, rating: 3.5)
Rating.create!(bar_id: 11, user_id: 3, rating: 3.5)
Rating.create!(bar_id: 11, user_id: 4, rating: 3.5)
Rating.create!(bar_id: 11, user_id: 5, rating: 3.5)

# Temple
Rating.create!(bar_id: 12, user_id: 2, rating: 3)
Rating.create!(bar_id: 12, user_id: 3, rating: 3)
Rating.create!(bar_id: 12, user_id: 4, rating: 3)
Rating.create!(bar_id: 12, user_id: 5, rating: 3)
