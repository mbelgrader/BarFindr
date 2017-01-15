
User.create!(email: 'demo', username: 'demo', password: 'password')
User.create!(email: 'ashley12@test.com', username: 'ashley12', password: 'password')
User.create!(email: 'amillz@test.com', username: 'amillz', password: 'password')
User.create!(email: 'stevie@test.com', username: 'stevie', password: 'password')
User.create!(email: 'brandon34@test.com', username: 'brandon34', password: 'password')
User.create!(email: 'xtina5@test.com', username: 'xtina5', password: 'password')
User.create!(email: 'jenny42@test.com', username: 'jenny42', password: 'password')
User.create!(email: 'nick12@test.com', username: 'nick12', password: 'password')
User.create!(email: 'dandk@test.com', username: 'dandk', password: 'password')

# zeitgeist, infusion, smugglers,

Bar.create!(name: 'Dada Bar',
            address: '65 Post St',
            lat: 37.7888479,
            lng: -122.4052969,
            image: "http://ww4.hdnux.com/photos/56/05/71/12082763/5/920x1240.jpg")

Bar.create!(name: 'Benders',
            address: '806 S Van Ness Ave',
            lat: 37.7601718,
            lng: -122.419518,
            image: "http://cdn.shopify.com/s/files/1/0750/2079/files/dzr-sf-bar-report-02_cf116450-2673-45cd-98c4-3792a44bde47.jpg?1822377684330399469")
            # "https://irs0.4sqi.net/img/general/600x600/26378902_dhZ3ItUCRWNy9mQnaA5dhOBfDfgMcHOkt1wOg7-iVOQ.jpg"

Bar.create!(name: "The Cigar Bar \& Grill",
            address: '850 Montgomery St',
            lat: 37.7915624,
            lng: -122.4207866,
            image: "http://ww2.hdnux.com/photos/12/21/03/2691321/6/1024x1024.jpg")

Bar.create!(name: 'Library Bar',
            address: '562 Sutter St',
            lat: 37.7893385,
            lng: -122.4119542,
            image: "http://uploads.jdvhotels.com/2014/06/REX_LibraryBar_Overview-1200x800.jpg")

Bar.create!(name: 'Infusion Loung',
            address: '124 Ellis St',
            lat: 37.7855668,
            lng: -122.4105829,
            image: "https://static1.squarespace.com/static/5327c2b2e4b097bd81745542/53eca270e4b0eecc91fb29ee/53eca27ce4b063ce92890272/1408017022207/Infusion+Lounge+SF+Dance+Floor_HYVEmag.jpg")

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

Tagging.create!(bar_id: 5, tag_id: 2)

# Dada
Comment.create!(body: 'Great place', user_id: 5, bar_id: 1)
Comment.create!(body: 'Cool art display', user_id: 6, bar_id: 1)

# Benders
Comment.create!(body: 'Cheap drinks', user_id: 5, bar_id: 2)
Comment.create!(body: 'Awesome bartenders', user_id: 2, bar_id: 2)
Comment.create!(body: 'Live bands!!!!', user_id: 3, bar_id: 2)
Comment.create!(body: 'pool tables!', user_id: 4, bar_id: 2)

# Cigar
Comment.create!(body: 'Really good cigars', user_id: 7, bar_id: 3)

# Library
Comment.create!(body: 'Quiet place to relax', user_id: 4, bar_id: 4)
Comment.create!(body: 'Cool spot', user_id: 8, bar_id: 4)

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
