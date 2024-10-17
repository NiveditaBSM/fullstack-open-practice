sequenceDiagram
participant browser
participant server

    Note right of browser: User enters a new note in the form and clicks "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note { "content": "User's note" }
    activate server
    server-->>browser: HTTP 302 Redirect (Location: /exampleapp/notes)
    deactivate server

    Note right of browser: The browser follows the redirect to reload the Notes page

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document (notes page)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [ { "content": "User's note" }, ... ]
    deactivate server

    Note right of browser: The browser executes JavaScript to render the updated list of notes
