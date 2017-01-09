## Component Hierarchy

**SessionFormContainer**
 - SessionForm

**HomeContainer**
 - Sidebar
 - Map
 - Header

**Headerr**
- SearchBar

**Sidebar**
- Logo
- SearchInstr or BarInfo

**SearchResultsContainer**
 - Search
 - FilterForm
 - BarItem

**BarShowContainer**
 - BarShow
 - BarDetail
 - RatingSelect
 - CommentButton
 - CommentsIndex


**CommentFormContainer**
 - CommentForm

**NewCommentContainer**
 - NewComment

**Search**

**NewTag**
 - NewTag

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "App" |
| "/sign-up" | "SessionFormContainer" |
| "/sign-in" | "SessionFormContainer" |
| "/bar/:barId" | "BarShowContainer" |
| "/bars/:barId/comment | CommentFormContainer |
