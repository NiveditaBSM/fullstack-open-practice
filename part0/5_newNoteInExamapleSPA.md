sequenceDiagram
participant browser
participant server

    Note right of browser: User enters a new note and clicks "Save"

    Note right of browser: Browser adds the new note to the local list and re-renders the notes without reloading

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note { "content": "User's note" }
    activate server
    server-->>browser: 201 Created (Note saved confirmation)
    deactivate server
