
{
  session: {
    currentUser: {
      id: 1,
      username: 'example'
    },
    errors: []
  },

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createComment: {errors: ["body can't be blank"]}
  },

  bars: {
    1: {
      lat: 37.7888521,
      lng: -122.4053022,
    }
  },

  barDetail: {
      name: 'Dada',
      average_rating: 5,
      address: '65 Post St, San Francisco 94107',
      image: "image_url",
      comments: [
        { username: 'example', comment: 'great place' },
        { username: 'example2', comment: 'good drinks' }
      ]
  },

  filters: {
    tagFilter: 'bar'
  }
}




default state:
{
  session: {
    currentUser: null,
    errors: ["Invalid credentials"]
  }
}
