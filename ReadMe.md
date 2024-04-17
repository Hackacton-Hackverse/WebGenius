## TITRE DE L'APPLICATION
JOB FINDER

## DESCRIPTION
Une application web qui aide les utilisateurs à trouver des offres d'emploi correspondant à leurs compétences et à leurs intérêts. L'application offre une interface conviviale et des fonctionnalités avancées pour faciliter la recherche d'emploi.

## FONCTIONNALITES PRINCIPALES

- Architecture logicielle : modèle MVC ;
- Composant HOC (Higher-Order Component) ;
- Mode sombre et mode clair avec MUI (Material UI) ;
- Tableau de bord administrateur et utilisateur, pagination, Datagrid, téléchargement en CSV, etc. ;
- Ouverture et fermeture de la barre latérale du tableau de bord ;
- L'administrateur peut créer des emplois, créer des catégories, etc. ;
- Analytique du tableau de bord ;
- Application responsive / MUI: Material UI ;
- L'utilisateur peut consulter son historique d'emplois dans le tableau de bord utilisateur ;
- Formulaire de connexion et d'inscription avec Formik et Yup pour la validation ;
- Système d'authentification moderne avec JWT et cookie ;
- Recherche d'emplois, filtrage des emplois par catégorie et localisation ;
- Postuler pour un emploi sur la page d'emploi unique si l'utilisateur est déjà connecté ;
- Notifications Toast. 

## COMMENT CA MARCHE ?
Après le lancement de l'application, vous serez dirigé vers la page d'accueil. Veuillez vous connecter en tant qu'administrateur ou utilisateur en suivant ces étapes :

1. Cliquez sur l'avatar utilisateur situé en haut à droite de l'écran.
2. Ensuite, cliquez sur le bouton "Login".

Vous pouvez vous connecter en tant qu'administrateur en utilisant les identifiants suivants :
- Email: Admin@gmail.com
- Mot de passe: Admin1234
   
Alternativement, vous pouvez vous connecter en tant qu'utilisateur en utilisant les identifiants suivants :
- Email: user1@gmail.com
- Mot de passe: userpassword1

### PAGE D'ACCUEIL
<img src="frontend/src/images/WelcomePage.png" alt=" Page Accueil">


### PAGE ADMINISTRATEUR
<img src="frontend/src/images/AdminDashboard.png" alt="Interface Administrateur">


### PAGE UTILISATEUR
<img src="frontend/src/images/UserDashboard.png" alt="Interface Utilisateur">

### TECHNOLOGIES UTILISEES

**Backend:**
- Framework: Express.js
- Langages: JavaScript: v21.6.1
- Base de données: MongoDB
- Outils de développement:
  - bcryptjs: 2.4.3
  - body-parser: 1.20.1
  - cookie-parser: 1.4.6
  - cors: 2.8.5
  - dotenv: 16.0.3
  - express: 4.18.2
  - jsonwebtoken: 9.0.0
  - mongoose: 5.13.9
  - morgan: 1.10.0
  - nodemon: 3.1.0

**Frontend:**
- Framework: React.js
- Langages: JavaScript: v21.6.1
- Outils de développement:
  - @emotion/react: 11.10.6
  - @emotion/styled: 11.10.6
  - @mui/icons-material: 5.11.9
  - @mui/material: 5.11.10
  - @mui/x-data-grid: 6.0.2
  - axios: 1.1.3
  - formik: 2.2.9
  - moment: 2.29.4
  - react: 18.2.0
  - react-dom: 18.2.0
  - react-google-charts: 4.0.0
  - react-pro-sidebar: 1.0.0
  - react-redux: 8.0.5
  - react-router-dom: 6.8.1
  - react-scripts: 5.0.1
  - react-toastify: 9.1.1
  - redux: 4.2.1
  - redux-thunk: 2.4.2
  - yup: 1.0.0

### CONFIGURATION
Creer un fichier .env dans le dossier backend et y inserer ces configurations 
PORT  = 9000
DATABASE = mongodb+srv://mbengivan63:yH8C02DEdSuzAqvy@job-portal-api.4sj9sja.mongodb.net/
JWT_SECRET=fidbfbFCDSm1558. 

### INSTALLATION
1. Clonez le dépôt backend : git clone [lien du dépôt backend]
2. Accédez au répertoire backend : cd [répertoire backend]
3. Installez les dépendances du backend : npm install
4. Lancez le serveur backend : npm start
5. Clonez le dépôt frontend : git clone [lien du dépôt frontend]
6. Accédez au répertoire frontend : cd [répertoire frontend]
7. Installez les dépendances du frontend : npm install
8. Lancez l'application frontend : npm start

NB: Assurez-vous d'installer les dépendances au niveau de la racine du projet en exécutant également `npm install` à ce niveau. De plus, veillez à lancer le backend avant le frontend pour assurer une communication appropriée entre les deux parties du projet.

N'hésitez pas à remplacer `[lien du dépôt backend]`, `[répertoire backend]`, `[lien du dépôt frontend]` et `[répertoire frontend]` par les liens et les noms de répertoires spécifiques au projet.



