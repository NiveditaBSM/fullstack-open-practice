sequenceDiagram
participant browser
participant server

    Note right of browser: User enters a new note and clicks "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note { "content": "User's note"}
    activate server
    server-->>browser: 201 Created (Note saved confirmation)
    deactivate server

    Note right of browser: The browser fetches the updated list of notes

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [ { "content": "User's note"}, ... ]
    deactivate server

    Note right of browser: The browser renders the updated list of notes
