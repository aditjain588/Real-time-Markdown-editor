# Real-time-markdown-editor

**Output** </br></br>
Folder ScreenRecordingOutput contains recording of the output for convinience. Output recording shows working of app.
</br>
</br>

**Real time markdown editor** </br> </br>
Application which helps user to convert markdown text to HTML.
</br>
</br>
**How to run locally** </br> </br>
To run the application clone the repo, in terminal type "cd Real-time-markdown-editor", then type "npm run dev", it should run client and server simultaneously. To run locally you need the required dependencies locally installed. To view the required dependencies go to server/package.json to view server dependencies and navigate to client/package.json to view client dependencies. After the depencies are installed, install nodemon in server directory and concurrently in root directory to be able to run client and server simultaneously using "npm run dev".
</br> </br>

**App Features** </br> </br>
- User can input markdown text which will be live contverted into HTML with syntax highlighting for better readability.
- Code is well commented to promote code understandability for other developers.
</br> </br>

**File Structure** </br> </br>
- Client
    - src
        - Components
            - MarkdownConverter.js (This file contains react frontend code for application.)
         
- server
    - index.js (This file contains node backend code)
