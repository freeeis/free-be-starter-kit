# free-be-starter-kit
This is the starter kit for the FREE system backend. All FREE backend modules should be used based on this project.

# Database
Before using this starter kit, please make sure the mongodb was installed on your system.

The default database name was `eis_db_dev1` which can be changed in the configuration file for each environment.

# Usage
1. Download the [EIS backend starter kit](https://www.npmjs.com/package/free-be-starter-kit).
2. In the starter kit project, add any modules as you wish by running '`yarn add free-be-xxx`'.
3. Install dependencies by running '`yarn install`'.
4. Run the starter kit project by running '`yarn start`'.

# Try
1. From the terminal you might will get the following error (from the second run), please open the mongodb terminal and run these commands to create indexes, and then try to start the server again:
	> db.authors.createIndex({Name: 1}, {unique: true, sparse: false})
	> db.authors.createIndex({id: 1}, {unique: true, sparse: false})
2. From browser try to access following addresses, you will get the response from the interfaces:
    - http://localhost:8000/demo
    - http://localhost:8000/demo/name
    - http://localhost:8000/demo/say
    - http://localhost:8000/demo/say/morning
    - http://localhost:8000/demo/bye
    - (POST) http://localhost:8000/demo/say/hello, with body {Name: 'some name'}
    - http://localhost:8000/demo/say/hello/author, you will get the author just created with above request.

# How this works
# Modules
# Global hooks
# Configuration
# Testing