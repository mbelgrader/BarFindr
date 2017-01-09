# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `DELETE /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Bars

- `GET /api/bars`
  - Bars index/search
  - accepts `tag_name` query param to list bars by tag
  - accepts pagination params (if I get there)
- `POST /api/bars`
- `GET /api/bars/:id`

### Tags

- `GET /api/tags`
  - includes query param for typeahead suggestions (if I get there)

### Comments

- `POST /api/comments`
- `PATCH /api/comments`
- `DELETE /api/comments`

### Ratings

- `GET /api/ratings`
