
User.create!(email: 'demo', username: 'demo', password: 'password')
User.create!(email: 'test1', username: 'test1', password: 'password')
User.create!(email: 'test2', username: 'test2', password: 'password')
User.create!(email: 'test3', username: 'test3', password: 'password')
User.create!(email: 'test4', username: 'test4', password: 'password')
User.create!(email: 'test5', username: 'test5', password: 'password')
User.create!(email: 'test6', username: 'test6', password: 'password')
User.create!(email: 'test7', username: 'test7', password: 'password')
User.create!(email: 'test8', username: 'test8', password: 'password')

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

# Dada
Comment.create!(body: 'Great place', user_id: 1, bar_id: 1)
Comment.create!(body: 'Cool art display', user_id: 1, bar_id: 1)

# Benders
Comment.create!(body: 'Cheap drinks', user_id: 1, bar_id: 2)
Comment.create!(body: 'Awesome bartenders', user_id: 2, bar_id: 2)
Comment.create!(body: 'Live bands!!!!', user_id: 3, bar_id: 2)
Comment.create!(body: 'They have a pool table!', user_id: 4, bar_id: 2)

# Cigar
Comment.create!(body: 'Really good cigars', user_id: 2, bar_id: 3)

# Library
Comment.create!(body: 'Quiet place to relax', user_id: 4, bar_id: 4)
Comment.create!(body: 'Cool spot', user_id: 1, bar_id: 4)

# Dada
Rating.create!(bar_id: 1, user_id: 1, rating: 5)
Rating.create!(bar_id: 1, user_id: 2, rating: 5)
Rating.create!(bar_id: 1, user_id: 3, rating: 5)
Rating.create!(bar_id: 1, user_id: 4, rating: 5)

# Benders
Rating.create!(bar_id: 2, user_id: 1, rating: 4)
Rating.create!(bar_id: 2, user_id: 2, rating: 4)
Rating.create!(bar_id: 2, user_id: 3, rating: 4)
Rating.create!(bar_id: 2, user_id: 4, rating: 4)

# Cigar
Rating.create!(bar_id: 3, user_id: 1, rating: 3)
Rating.create!(bar_id: 3, user_id: 2, rating: 4)
Rating.create!(bar_id: 3, user_id: 3, rating: 2)
Rating.create!(bar_id: 3, user_id: 4, rating: 5)

# Library
Rating.create!(bar_id: 4, user_id: 1, rating: 4)
Rating.create!(bar_id: 4, user_id: 2, rating: 4)
Rating.create!(bar_id: 4, user_id: 3, rating: 5)
Rating.create!(bar_id: 4, user_id: 4, rating: 5)
