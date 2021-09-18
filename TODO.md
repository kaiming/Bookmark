---------------------------------
Login Page
---------------------------------

UI Components (top to bottom):
- Email field
- Password field
- Log in button
    - When clicked, try authenticate
    - If success, move to home page and sign in user profile
    - If failure, show some type of error message
- Create account button
    - When clicked, go to create account page

---------------------------------
Create Account Page
---------------------------------

UI Components (top to bottom):
- Email field
- Password field
- Name field
- Create account button
    - When clicked, try create account
    - If success, move to log in page
    - If failure, show some type of error message

---------------------------------
All Signed In Pages
---------------------------------

Bottom nav bar -> 2 Items:   (1) Home (Search)   (2) Profile

---------------------------------
Home (Search) Page
---------------------------------

UI Components (top to bottom):
- Enter code field
- Search button
    - When clicked, try to match code with existing listing
    - If success, move to bookmark page
    - If failure, show some type of error message

---------------------------------
Bookmark Page
---------------------------------

UI Components (top to bottom):
- “Name of Location” text label
- “# of People signed” text label

- Like button
    - When clicked, add to user’s “Liked” list
- New button
    - When clicked, bring up new bookmark page

- Sort button
    - When clicked, bring up pop up sort page
    - Sort options: sort by date (ascending), sort by date (descending), sort by proximity
- Filter button
    - When clicked, bring up pop up filter page
    - Filter options: Only in past year, Only in past month, Asia, Africa, Europe, North America, South America, Oceania

- Table of cells
    - Num of cells = # of guests signed to that bookmark
    - Within each cell:
        - “Name of Guest & Date” text label in top left
        - “Review” text label underneath
            - Contains the text that the user has added to that guest book

---------------------------------
New Bookmark Page
---------------------------------

UI Components (top to bottom):
- “New Bookmark” text label
- “Name of Location” text label

- “Month of stay” text field
- “Year of stay” text field
- “Message” text field (limit to 200 characters)

- Submit button
    - Adds bookmark to guestbook, shows success message
    - Pushes user back to guestbook page (make sure new bookmark gets added here)

---------------------------------
Profile Page
---------------------------------

UI Components (top to bottom):
- “Name” text label
- “Email” text label
- “History” button
    - When clicked, go to history page
- “Liked” button
    - When clicked, go to liked page
- “Log out” button
    - When clicked, sign out user and go back to home page

---------------------------------
Liked Page
---------------------------------

UI Components (top to bottom):
- “Liked” text label
- Sort button
    - When clicked, bring up pop up sort page
    - Sort options: sort by date (ascending), sort by date (descending), sort by proximity
- Filter button
    - When clicked, bring up pop up filter page
    - Filter options: Only in past year, Only in past month, Asia, Africa, Europe, North America, South America, Oceania
- Table of cells
    - Num of cells = # of liked places
    - Within each cell:
        - “Name of Guest & Date” text label in top left
        - “Review” text label underneath
            - Contains the text that the user has added to that guest book

---------------------------------
History Page
---------------------------------

Same as Liked Page but slight differences

UI Components (top to bottom):
- “Liked” text label
- Sort button
    - When clicked, bring up pop up sort page
    - Sort options: sort by date (ascending), sort by date (descending), sort by proximity
- Filter button
    - When clicked, bring up pop up filter page
    - Filter options: Only in past year, Only in past month, Asia, Africa, Europe, North America, South America, Oceania
- Table of cells
    - Num of cells = # of total signed places
    - Within each cell:
        - “Name of Guest & Date” text label in top left
        - “Review” text label underneath
            - Contains the text that the user has added to that guest book
