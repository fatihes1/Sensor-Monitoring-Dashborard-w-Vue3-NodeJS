# Sensor Monitoring System Dahboard

<div align="center">

![](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E`)
![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![](https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white)
![](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

</div>



![homepage](https://user-images.githubusercontent.com/54971670/174278781-056d247b-b483-48a9-8f36-3d73da373fc3.PNG)


<div align="center">

![Sensor Monitoring Dashboard (3)](https://user-images.githubusercontent.com/54971670/174285808-ebd31899-21f6-488c-8e73-1fa595da20cc.gif)

</div>

## :question: What is the Sensor Monitoring System Dahboard?
The sensor monitoring system allows users to specify a center point and then define different types of sensors within a certain radius of that center point. Each created sensor regularly creates a record according to the reporting period specified when the sensor is created and presents it to the user. The user can observe different data coming from the sensor in real time.

## :question: What is the Vue.js 3 ?
Vue (pronounced /vjuː/, like **view**) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.

## :question: What is the Vite ?
Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

-   A dev server that provides  [rich feature enhancements](https://vitejs.dev/guide/features.html)  over  [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), for example extremely fast  [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement).
    
-   A build command that bundles your code with  [Rollup](https://rollupjs.org/), pre-configured to output highly optimized static assets for production.
    

Vite is opinionated and comes with sensible defaults out of the box, but is also highly extensible via its  [Plugin API](https://vitejs.dev/guide/api-plugin.html)  and  [JavaScript API](https://vitejs.dev/guide/api-javascript.html)  with full typing support.

## :question: What is the NodeJS?
Node.js is an open source runtime environment for networked applications, typically server-side. Node.js applications are typically developed using JavaScript, a client-side scripting language.

## :question: What is the MongoDB?
MongoDB; MongoDB Inc. It is a scalable, document-based, open source, NoSQL database application developed by C++. MongoDB stores data in JSON type documents, its semantic fields vary from document to document, and the data structure can change over time.

## :question: What is the Tailwindcss?
Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

It's fast, flexible, and reliable — with zero-runtime.

## :books: NPM Packages Used:
###  Client Side Packages :
-  [:link:](https://www.npmjs.com/package/axios) Axios
-  [:link:](https://www.npmjs.com/package/daisyui) DaisyUI
-  [:link:](https://www.npmjs.com/package/pinia) Pinia
-  [:link:](https://www.npmjs.com/package/vue-router) Vue Router
- [:link:](https://www.npmjs.com/package/vue-toastification) Vue Toastification
- [:link:](https://www.npmjs.com/package/vite) Vite
- [:link:](https://www.npmjs.com/package/tailwindcss) Tailwindcss
- [:link:](https://www.npmjs.com/package/eslint) Eslint

### Server Side Packages :
-  [:link:](https://www.npmjs.com/package/cors) Cors
-  [:link:](https://www.npmjs.com/package/dotenv) Dotenv
-  [:link:](https://www.npmjs.com/package/express) Express
-  [:link:](https://www.npmjs.com/package/joi) Joi
-  [:link:](https://www.npmjs.com/package/http-status) Http-status
-  [:link:](https://www.npmjs.com/package/logger) Logger
-  [:link:](https://www.npmjs.com/package/mongoose) Mongoose
- [:link:](https://www.npmjs.com/package/winston) Winston
- [:link:](https://www.npmjs.com/package/socket.io) Socket.io
- [:link:](https://www.npmjs.com/package/nodemon) Nodemon

 

## :floppy_disk: For Project
Clone with this URL : `git clone https://github.com/fatihes1/Sensor-Monitoring-Dahborard-w-Vue3-NodeJS.git`

Switch to project directory after cloning : `cd Sensor-Monitoring-Dahborard-w-Vue3-NodeJS`
 
Switch to project server: `cd server`
-  **! ! !** Create yourself a `.env` file by referencing the `example_.env` file. The project is configured on the cloud using MongoDB Atlas by default. To use the database from your local machine, access the file in the `server/v1/src/loaders/db.js` directory and configure the `await Mongoose.connect(process.env.DB_STRING, . . .)` line.

To download the requirements : `npm install`

To run server  : `npm run dev`

Go back to the project directory and switch to project directory: `cd client`

To download the requirements : `npm install`

To run Viye: `npm run dev`

By default the project will run at : `http://localhost:3000/`


## :rocket: Project Pictures
 -  The project was created as a back-end using as detailed a folder as possible. In this way, the file containing a problem can be easily detected.
 
![directory_structure](https://user-images.githubusercontent.com/54971670/174284651-91194d3a-e552-458c-9f8f-98d39e4b11ad.PNG)

 -  The part where the center point is created is indicated in the image :
 
![mainpoints](https://user-images.githubusercontent.com/54971670/174285081-1832cf77-ac8f-4dae-9eec-eec6547a2909.PNG)

 -  The part where the center point is listed is indicated in the image :
 ![mainpoints2](https://user-images.githubusercontent.com/54971670/174285291-b35c3f48-6bd0-407f-9d41-0dadf31551c0.PNG)

-  The part where the sensors are created is indicated in the image :

![sensors](https://user-images.githubusercontent.com/54971670/174285372-6068ba7c-4c80-4ea5-bc28-6fe41094f266.PNG)

-  The part where the sensors are listed is indicated in the image :

![sensors2](https://user-images.githubusercontent.com/54971670/174285446-5f8103c4-7a22-48ca-81e4-10040fca2b8f.PNG)

- 404 Not Found Page:

![Sensor Monitoring Dashboard (2)](https://user-images.githubusercontent.com/54971670/174286091-c3f24769-9a70-4509-b237-15051de99b7b.gif)



## :bust_in_silhouette: Contact With Me
<div align="center">

[![](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fatihes/)
[![](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/fatihtech/)
[![](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCpMnisdqsNAGzJfQBkBaOKg)
[![](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://fatihes.medium.com/)
[![Mail Badge](https://img.shields.io/badge/develop.fatihes@gmail.com-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:develop.fatihes@gmail.com)](mailto:develop.fatihes@gmail.com)

</div>
