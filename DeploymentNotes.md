# To deploy the full project Back and front :

- Front was deployed on Github Pages : https://dusidea.github.io/P10_FRONT/ => updated BrowserRouter to HashRouter for Gh pages compatibility
- back was deployed on Render

## Backend deployment

### Creating a MongoDB Database
- on my account (loging via mail ?)
- see Cluster named ArgentBank > Browse collection to see DB ArgentBank, table users contains the list of users allowed to connect
- I populated the DB using npm run populate db

### Deploying on Render
- on my account  (login with Github)
- Connectiing to the Github Repo : P10_ArgentBank-Backend
- Added Environment variables :
-   URL DB (from mongo)
-   Security KEY
Those values can be found in the local repo root on the .env file (it has been ignored by github as it is not secured to upload it)

- Updating the URL called by the front for the API call :
-   in Front > BaseQueryWithAuth
-   in Front > authApi.js
I hard updated the url, it could have been an env variable
