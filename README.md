## TITRE DE L'APPLICATION

SWIFT-CHAT

## DESCRIPTION

Swift-Chat est une application de chat complète qui permet aux utilisateurs de communiquer en temps réel. Elle offre une expérience de messagerie instantanée fluide grâce à l'utilisation de Socket.io, une bibliothèque populaire pour la communication en temps réel.
L'application permet aux utilisateurs d'envoyer et de recevoir des messages instantanés, de créer des salles de discussion et d'interagir avec d'autres utilisateurs connectés. Elle garantit une communication rapide et efficace grâce à la technologie WebSocket fournie par Socket.io.
Pour garantir la sécurité des utilisateurs, Swift-Chat stocke les mots de passe des utilisateurs de manière cryptée dans une base de données MongoDB. Cela signifie que ces informations personnelles sont protégées contre les accès non autorisés.

## Tech Stack

**Client:** React JS

**Server:** Node JS, Express JS

**Database:** Mongo DB

## COMMENT CA MARCHE ?

[https://swift-chat-0xcw.onrender.com](https://swift-chat-0xcw.onrender.com)

![](https://github.com/webgenius-eon/mern-chat-app/blob/master/screenshots/group%20%2B%20notif.PNG)

## DEMARRER EN LOCAL

Clone the project

```bash
git clone https://github.com/Hackacton-Hackverse/WebGenius.git
```

Go to the project directory

```bash
  cd WebGenius-SWIFT_CHAT
```

Install dependencies

```bash
  npm install
```

```bash
  cd frontend/
  npm install
```

Start the server

```bash
  npm run start
```

Start the Client

```bash
  //open now terminal
  cd frontend
  npm start
```

## FONCTIONNALITES PRINCIPALES

### Authentication

<img src="frontend/src/WelcomePage.png" alt=" Page Accueil">

### Real Time Chatting with Typing indicators

<img src="frontend/src/Typing.png" alt=" Page Accueil">

### One to One chat

<img src="frontend/src/One_To_One.png" alt=" Page Accueil">

### Search Users

<img src="frontend/src/SearchPage.png" alt=" Page Accueil">

### Create Group Chats

<img src="frontend/src/CreateGroup.png" alt=" Page Accueil">

### Notifications

<img src="frontend/src/Notification.png" alt=" Page Accueil">

### Add or Remove users from group

<img src="frontend/src/addUpdateRemoveUser.png" alt=" Page Accueil">

### View Other user Profile

<img src="frontend/src/MyProfil.png" alt=" Page Accueil">

### CONFIGURATION

Creer un fichier .env dans le dossier backend et y inserer ces configurations
PORT = 5000
MONGO_URI = mongodb+srv://user1:user1@chatapplication.0359a0h.mongodb.net/?retryWrites=true&w=majority&appName=ChatApplication
JWT_SECRET=webgenius
### LIEN DE L'PPLICATION EN LIGNE APRES DEPLOIEMENT
https://swift-chat-0xcw.onrender.com
