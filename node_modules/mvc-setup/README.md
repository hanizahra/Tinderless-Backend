# mvc-setup
## Simple bash script to setup a RESTFUL API filesystem using MVC model.  
***  
#### Note *If* you are cloning this repo, ignore step 1, and make sure to delete line 2 from mvc.sh, otherwise everything will be installed 2 levels above project directory.
### When in project directory, use `npm install mvc-setup` to download the script. When installed: 
### 1. `cd node_modules`
### 2. `cd mvc-setup`
### 3. `chmod +x mvc.sh`
### 4. `. ./mvc.sh`

#### Note the first `.` before file name; if you forget it, you will have to `cd` into project folder manually.

#### This script will set up the entire mvc file structure for you, as well as pre-populate some files with common data.  
#### The dependencies installed include: 

* express
* nodemon
* morgan
* ejs
* body-parser
* pg-promise

#### `package.json` will have been initialized without 'start' and 'dev' scripts;     
#### so if you want to use `npm start` or `npm run dev` make sure to include them in the `package.json` file.
