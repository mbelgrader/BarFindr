## Component Hierarchy

**SessionFormContainer**
 - SessionForm

**SearchContainer**
 - Search
    - Map
    - Sidebar
      - BarDetails
    - Header


**BarShowContainer**
 - BarShow
 - BarDetail
 - RatingSelect
 - CommentButton
 - CommentsIndex

**CommentFormContainer**
 - CommentForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "App" |
| "/" | "SearchContainer"
| "/sign-up" | "SessionFormContainer" |
| "/sign-in" | "SessionFormContainer" |
| "/bars/:barId" | "BarShowContainer" |
| "/bars/:barId/comment | CommentFormContainer |
