# Joe Box

## Overview

Joe Box is a multiplayer web app that hosts the game Fibbage, a fast-paced, room-based game inspired by Jackbox's Fibbage: Enough About You. Players create lies and guess the truth in a fun, social environment. The game is best enjoyed with friends or by people looking to know more about each other. Players earn points for guessing correctly or submitting convincing lies!
((this version of joebox is forked from the collaborative project: https://github.com/NathanYung130/PresentApp with changes made for deployment)

Check out here:
https://joebox.onrender.com

![Login screenshot](Joebox1.jpg)
![Game screenshot](Joebox2.jpg)
![Game screenshot](Joebox3.jpg)

## Features

- *Room-based multiplayer*: Players can quickly create usernames and either join or create rooms using a unique code generated by nanoid
- *Game mechanics*: Players create lies to trick others and guess the truth to earn points.
- *Synchronized gameplay*: All users in a room are kept in sync through Socket.io, ensuring smooth real-time interaction.
- *Built-in chat*: Joe Box also includes a group chat feature so players within a room can communicate while playing.
- *Database-backed*:strictly neccessary information is kept on a SQL server.

## How to run Locally

To get started with the project, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/yourusername/joebox.git
cd joebox
```
Install Dependencies for both frontend and backend:
```bash
cd client
npm install
cd ../server
npm install
```
start the development server:
Frontend:
```bash
cd client npm start
```
Backend:
```bash
cd ../server
npm start
```
navigate to http://localhost:3000


## Technolgies Used, How it Works
- *React*: building frontend.
- *Redux*: manage application state.
- *Node.js + Express.js*: The backend server that runs the game logic and serves the app.
- *SQL + Supabase db*: Stores user information, game rooms, messages, and game states.
Each users client subscribes to a roomcode by listening for socket calls tagged with a specific roomcode. Game events trigger state changes in the game, synced by an "admin" user, identified by the first person that entered a room. This way the socket server only has to listen to one call and trigger all other clients in a room to change to the next game screen.

## Contributing
Feel free to submit issues or pull requests to improve Joe Box! Contributions are welcome to add new features, improve the UI, or optimize the game mechanics.
## License
This project is licensed under the MIT License.
