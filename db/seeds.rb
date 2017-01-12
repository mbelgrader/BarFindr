
User.create!(email: 'demo', password: 'password')
User.create!(email: 'test1', password: 'password')
User.create!(email: 'test2', password: 'password')
User.create!(email: 'test3', password: 'password')
User.create!(email: 'test4', password: 'password')
User.create!(email: 'test5', password: 'password')

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

Tagging.create!(bar_id: 1, tag_id: 3)
Tagging.create!(bar_id: 1, tag_id: 7)
Tagging.create!(bar_id: 1, tag_id: 8)

Tagging.create!(bar_id: 2, tag_id: 1)
Tagging.create!(bar_id: 2, tag_id: 5)
Tagging.create!(bar_id: 3, tag_id: 6)
Tagging.create!(bar_id: 2, tag_id: 7)
Tagging.create!(bar_id: 2, tag_id: 10)

Tagging.create!(bar_id: 3, tag_id: 3)
Tagging.create!(bar_id: 3, tag_id: 5)
Tagging.create!(bar_id: 3, tag_id: 6)
Tagging.create!(bar_id: 3, tag_id: 7)
Tagging.create!(bar_id: 3, tag_id: 11)

Tagging.create!(bar_id: 4, tag_id: 3)
Tagging.create!(bar_id: 4, tag_id: 6)
Tagging.create!(bar_id: 4, tag_id: 7)
Tagging.create!(bar_id: 4, tag_id: 9)
Tagging.create!(bar_id: 3, tag_id: 11)

Comment.create!(comment: 'Great place') # 1
Comment.create!(comment: 'Cheap drinks') # 2
Comment.create!(comment: 'Awesome bartenders') # 3
Comment.create!(comment: 'Live bands!!!!') # 4
Comment.create!(comment: 'Quiet place to relax') # 5
Comment.create!(comment: 'Really good cigars') # 6
Comment.create!(comment: 'Cool art display') # 7
Comment.create!(comment: 'Cool spot') # 8
Comment.create!(comment: 'They have a pool table!') # 9

BarComment.create!(user_id: 1, bar_id: 1, comment_id: 2)
BarComment.create!(user_id: 5, bar_id: 1, comment_id: 3)
BarComment.create!(user_id: 4, bar_id: 1, comment_id: 1)
BarComment.create!(user_id: 2, bar_id: 1, comment_id: 2)
BarComment.create!(user_id: 3, bar_id: 1, comment_id: 7)

BarComment.create!(user_id: 2, bar_id: 2, comment_id: 1)
BarComment.create!(user_id: 3, bar_id: 2, comment_id: 2)
BarComment.create!(user_id: 1, bar_id: 2, comment_id: 8)
BarComment.create!(user_id: 5, bar_id: 2, comment_id: 9)
BarComment.create!(user_id: 4, bar_id: 2, comment_id: 3)
BarComment.create!(user_id: 5, bar_id: 2, comment_id: 4)

BarComment.create!(user_id: 2, bar_id: 3, comment_id: 8)
BarComment.create!(user_id: 3, bar_id: 3, comment_id: 6)

BarComment.create!(user_id: 1, bar_id: 4, comment_id: 8)
BarComment.create!(user_id: 1, bar_id: 4, comment_id: 1)
BarComment.create!(user_id: 1, bar_id: 4, comment_id: 5)
