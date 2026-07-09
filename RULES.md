## Rules For The Project

### Rules For Folder Structure

* Each folder must have a single responsibility
* Each layer must resolve only one type of problem
* Keep all components in components directory
* Keep all pages in pages directory
* Keep all services in services directory
* Single services file can have multiple but related services
    * For example -> **auth.js** :
        * signup
        * signin
        * reset password
* components & pages file name extension must be .jsx
* services & utils file name extension must be .js

### Rules For Naming Convention & Code Documentation

* Folder names must be in lowercase & meaningful
* Component file names = PascalCase
* Non-component file names = camelCase
* Add description for files
<br /><br />
* Component names = PascalCase
* 1 component = 1 responsibility
* Add description for components 
<br /><br />
* Variables = camelCase
* Variable names must be meaningful
* Boolean variables = is / has / can / should
<br /><br />
* 1 function = 1 responsibility
* Function names must be descriptive
* Add description for Function