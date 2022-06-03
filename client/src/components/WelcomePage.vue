<template>
   <div class="flex-col flex my-auto justify-between items-center h-screen">
      <div class="flex flex-col justify-center items-center h-screen">
      <div class="text-7xl flex-row font-extrabold text-center text-gray-800">The Sensor <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-purple-700">Monitoring</span> <br> Dashboard System</div>
      <div class="text-2xl flex-row font-normal text-center py-10 text-gray-500">An approachable, performant and user friendly monitoring system for building IoT developers.</div>
       <section class="mb-10">
           <a href="" class=" bg-brand-orange hover:bg-orange-600 transition-colors px-3 py-2 font-semibold text-lg rounded-lg text-white">
               <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="fill-current inline"><path d="M11.975 18.175Q12.525 18.175 12.887 17.8Q13.25 17.425 13.25 16.9Q13.25 16.375 12.887 16Q12.525 15.625 12 15.625Q11.45 15.625 11.088 15.988Q10.725 16.35 10.725 16.9Q10.725 17.425 11.088 17.8Q11.45 18.175 11.975 18.175ZM10.975 14.225H13Q13 13.375 13.175 12.875Q13.35 12.375 14.25 11.475Q14.925 10.875 15.3 10.25Q15.675 9.625 15.675 8.8Q15.675 7.35 14.613 6.575Q13.55 5.8 12.1 5.8Q10.625 5.8 9.688 6.575Q8.75 7.35 8.4 8.45L10.2 9.15Q10.3 8.7 10.713 8.162Q11.125 7.625 12.075 7.625Q12.9 7.625 13.312 8.075Q13.725 8.525 13.725 9.025Q13.725 9.525 13.4 9.95Q13.075 10.375 12.625 10.775Q11.5 11.775 11.238 12.312Q10.975 12.85 10.975 14.225ZM11.95 22.3Q9.8 22.3 7.938 21.488Q6.075 20.675 4.688 19.288Q3.3 17.9 2.5 16.025Q1.7 14.15 1.7 12Q1.7 9.85 2.5 7.962Q3.3 6.075 4.688 4.687Q6.075 3.3 7.938 2.5Q9.8 1.7 11.95 1.7Q14.125 1.7 16 2.5Q17.875 3.3 19.275 4.687Q20.675 6.075 21.488 7.962Q22.3 9.85 22.3 12Q22.3 14.15 21.488 16.025Q20.675 17.9 19.275 19.288Q17.875 20.675 16 21.488Q14.125 22.3 11.95 22.3ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM11.95 20.15Q15.375 20.15 17.763 17.775Q20.15 15.4 20.15 12Q20.15 8.6 17.763 6.225Q15.375 3.85 11.95 3.85Q8.575 3.85 6.213 6.225Q3.85 8.6 3.85 12Q3.85 15.4 6.213 17.775Q8.575 20.15 11.95 20.15Z"/></svg>   
               Why Us
           </a>
           
            <a href="/home"  class="flex-row items-center justify-center bg-gray-200/90 hover:bg-gray-300 hover:text-gray-800 transition-colors px-4 py-2 font-medium text-lg rounded-lg text-gray-600 mx-4">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="fill-current inline"><path d="M14.05 18.1 12.55 16.55 16.075 13.025H3.8V10.875H16.075L12.55 7.35L14.05 5.8L20.2 11.95Z"/></svg>
            </a>
            
           <a href="https://github.com/fatihes1/NodeJS-Dashboard" target="_blank" class=" bg-gray-200/90 px-4 py-2 font-medium text-lg rounded-lg text-gray-600 hover:bg-gray-300  hover:text-gray-800 transition-colors">
               Documentation
           </a>
       </section>
       <section class="flex mt-16 content-center w-1/2 flex-wrap justify-between text-center">
           <div class="w-1/4">
               <h1 class="font-bold text-2xl text-gray-700 mb-3">Performant</h1>
               <h2 class="text-gray-600 text-lg">
                   Control panel where you can monitor the data coming from the sensors in real time.
               </h2>
           </div>
           <div class="w-1/4">
               <h1 class="font-bold text-2xl text-gray-700 mb-3">User Friendly</h1>
               <h2 class="text-gray-600 text-lg">
                   You can create your sensor locations manually or select them on the map with Google Maps support.
               </h2>
           </div>
           <div class="w-1/4">
               <h1 class="font-bold text-2xl text-gray-700 mb-3">Simple Design</h1>
               <h2 class="text-gray-600 text-lg">
                   Instead of using a complex interface, we chose a simple and approachable design.
               </h2>
            </div>
       </section>
       </div>
       <footer class="flex justify-center gap-x-2 items-center border-t border-gray-300 container h-12 text-sm">
           © Made by
           <a href="">
               Fatih Es,
           </a>
           
           <a href="">
               Salih Önder,
           </a>
           
           <a href="">
               Saltuk Yaşar,
           </a>
           
           <a href="">
               Yunus Emre Öztekin
           </a>
           - 2022
       </footer>
       
  </div>
  
</template>

<script>
import { useRouter } from 'vue-router'

export default {

}
</script>

<style>

</style>