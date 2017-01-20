# BarFindr

www.barfindrsf.com

BarFindr has an easy to use map interface that allows you to find bars around the city.
Search by vibe (club, lounge, dive, hipster, etc.) or by something specific you are look for such as live music, pool tables, or food.

# Design

The minimalistic design allows users to find what they're look for without being overwhelmed by un-related information.

The react front-end allow you to search seamlessly without full page reloads. There are only a few main components. The Search component holds the SearchBar and Map. By default the sidebar will display the Guide which provides information on how to user the application. If a location marker is clicked, the sidebar will display the relevant information. Allowing options for the user to comment or add a rating.

If the user has never rated the location, the average star rating will be displayed. Once a user chooses a rating based on their experience, it will update the average in the database and display their personal rating.

Redux stores the state of the application, making the code clean and easily maintainable.

# Future Additions

### Map Icons

Map icons based on location will add to the user experience. Beer icons for locations that specialize in craft beer. Martini glasses for craft cocktail lounges. Turntables for nightclubs.

### Colorized map
A customized map color scheme to match the theme.

### Geolocation
Utilize the geolocation api to display the current users location.

### Up/Down Vote
Allow users to up or down vote other users comments. This can help filter out inaccurate reviews.
