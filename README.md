# Purpose
Learn typescript and MaterialUI by creating a medium complexity to do list app.

## To-Do
- [ ] General
    - [ ] Create basic app structure
        - [ ] Add a symbol select option for new list form
            - [ ] Decide if symbol goes at the list level or at the action level
    - [x] Export named exports from New List directory.
- [x] Styling
    - [x] Style InputLabel with Override
    - [x] Finish styling AppBar
    - [ ] Make todo lists a little more sleek
- [ ] State Management
    - [x] Implement state at the NewListForm level
        - [x] Generate ids for components
        - [x] Implement handleChange on NewListForm for title and description
        - [x] Create to do list functionality
    - [ ] Add save functionality
        - [x] Pass callback to NewListForm to save the form and create a list card
        - [x] Create functionality for renderCards
        - [ ] Clear form on state save
        - [ ] Can update an existing list
        - [ ] Can check off completed tasks
    - [ ] Create reducer at the top level