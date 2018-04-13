#prompt user for names of js file and api file name
cd ../../
echo "What is the name your js file? (do not include .js extension)"
read NAME_OF_FILE
echo "What is the name of your api?"
read NAME_OF_API

#set up filesystem for MVC
mkdir views routes public models db controllers config
mkdir views/partials views/$NAME_OF_API
touch views/partials/boilerplate.ejs views/partials/footer.ejs
touch views/$NAME_OF_API/index.ejs views/$NAME_OF_API/show.ejs
touch views/index.ejs
touch routes/$NAME_OF_API-router.js
mkdir public/css
touch public/css/style.css
touch models/$NAME_OF_API-DB.js
touch db/schema.sql db/seed.sql
touch controllers/$NAME_OF_API-controller.js
touch controllers/views-controller.js
touch config/dbConfig.js

echo installing dependencies...

sleep 1

#install dependencies
npm init -y
npm install express
npm install nodemon
npm install morgan
npm install ejs
npm install body-parser
npm install pg-promise

echo

sleep 1.5

#populate js file with requires and prep server to listen
echo "const express = require('express')" >> $NAME_OF_FILE.js
echo "const logger = require('morgan')" >> $NAME_OF_FILE.js
echo "const bodyParser = require('body-parser')" >> $NAME_OF_FILE.js
echo "const PORT = process.env.PORT || 3000" >> $NAME_OF_FILE.js
echo "const NODE_ENV = process.env.NODE_ENV || 'Dev'" >> $NAME_OF_FILE.js
echo "const app = express()" >> $NAME_OF_FILE.js
echo "" >> $NAME_OF_FILE.js
echo "" >> $NAME_OF_FILE.js
echo "app.use(logger('dev'))" >> $NAME_OF_FILE.js
echo "" >> $NAME_OF_FILE.js
printf "app.listen(PORT, () => {\n console.log(\`server is listening on port \${PORT}\`)\n})" >> $NAME_OF_FILE.js
echo "" >> $NAME_OF_FILE.js
printf "console.log(\`Developing on \${NODE_ENV} enironment\`)" >> $NAME_OF_FILE.js

#populate views files.
echo '
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="/css/style.css">
    <script src="/script.js"></script>
  </head>
  <body>
' >> views/partials/boilerplate.ejs

echo '
<footer></footer>
</body>
</html>
' >> views/partials/footer.ejs

echo '
<%include ./partials/boilerplate %>
    <h1> </h1>

<% include ./partials/footer %>
' >> views/index.ejs

echo '
<%include ../partials/boilerplate %>
    <h1> </h1>

<% include ../partials/footer %>
' >> views/$NAME_OF_API/index.ejs

#populate router file
echo "const router = require('express').Router()" >> routes/$NAME_OF_API-router.js
echo "const viewsController = require('../controllers/views-controller')" >> routes/$NAME_OF_API-router.js
echo "const ${NAME_OF_API}Controller = require('../controllers/$NAME_OF_API-controller')" >> routes/$NAME_OF_API-router.js
echo "" >> routes/$NAME_OF_API-router.js
echo "" >> routes/$NAME_OF_API-router.js
echo "" >> routes/$NAME_OF_API-router.js
echo "module.exports = router" >> routes/$NAME_OF_API-router.js

#populate the dbConfig
echo "
module.exports = {
  host: 'localhost',
  port: 5432,
  database: 'databse_name'

}
" >> config/dbConfig.js

#populate the model-DB file
echo "
const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);
module.exports = {}
" >> models/$NAME_OF_API-DB.js

#populate controllers
echo "const ${NAME_OF_API}DB = require('../models/${NAME_OF_API}-DB');" >> controllers/$NAME_OF_API-controller.js
echo "module.exports = {}" >> controllers/$NAME_OF_API-controller.js
echo "module.exports = {}" >> controllers/views-controller.js



printf "Don\'t forget to add \'start\' and \'dev\' to you\'re package.json if you would like to use npm to start or use nodemon"
echo
sleep 1.5
#prompt user for server initiation
read -p "Would you like to test the server (y) or (n)? " answer
case ${answer:0:1} in
    y|Y )
        sleep 1.5
        printf "$NAME_OF_FILE.js file and $NAME_OF_API API MVC folders have been set up."
        echo
        printf "You have been moved to project directory."
        echo
        sleep 1.5
        echo starting server..
        sleep 1.5
        node $NAME_OF_FILE.js

    ;;
    * )
        echo "$NAME_OF_FILE.js was not started, you have been moved to project directory."
        sleep 1.5
    ;;
esac

printf "$NAME_OF_FILE.js and $NAME_OF_API API MVC have been set up.\n"
