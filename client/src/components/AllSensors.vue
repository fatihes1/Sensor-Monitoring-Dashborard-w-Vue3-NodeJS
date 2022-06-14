<template>
  <div>
      <!-- HERO SECTION -->
      <div class="hero h-1/3 bg-gradient-to-b from-brand-orange/30 pt-36">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left ml-6">
            <h1 class="text-7xl font-semibold">Ready in Seconds !</h1>
            <p class="py-6 text-2xl font-thin">You have successfully created the main point! Now determine the sensors to be added to this main location. Thanks to these sensors, you will be able to read your data!</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="mockup-code">
              <pre data-prefix="$"><code>create sensors</code></pre> 
              <pre data-prefix=">" class="text-warning"><code>installing you sensors...</code></pre> 
              <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
              <pre data-prefix=">" class="text-error"><code>Scrol Down and Start !</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- INPUT SECTION -->
      <div class="mt-40 w-2/3 mx-auto text-center ">
        <div class="mockup-window border border-brand-orange/50">
          <div class="flex-row justify-center px-4 py-5 border-t border-brand-orange/50 ">
            <h1 class="text-3xl font-semibold block">Add Your Sensors</h1>
            <br>
            <!-- FORM INPUT -->
            <div class="flex justify-center items-center gap-x-5">
              <div class="form-control">
              <label class="label">
                <span class="label-text text-base">Select Sensor Type</span>
              </label>
              <div class="form-control">
              <label class="input-group input-group-md">
                <span class="bg-brand-orange/30 text-lg">Type</span>
                <select class="select select-bordered  text-sm font-base" v-model="addSensorForm.type">
                  <option disabled selected class="text-gray-400">Pick Sensor</option>
                  <option class="text-black">Metan</option>
                  <option class="text-black">Bütan</option>
                  <option class="text-black">Azot</option>
                </select>
              </label>
              </div>
            </div>
            <div class="form-control ml-10">
              <label class="label">
                <span class="label-text text-base">Enter X Location</span>
              </label>
              <div class="form-control">
              <label class="input-group input-group-md">
                <span class="bg-brand-orange/30 text-lg">X</span>
                <input type="number" placeholder="Type here" class="input input-bordered border-brand-orange/30 input-md w-full"  v-model="addSensorForm.locationX"/>
              </label>
              </div>
            </div>
            <div class="form-control ml-10">
              <label class="label">
                <span class="label-text text-base">Enter Y Location</span>
              </label>
              <div class="form-control">
              <label class="input-group input-group-md">
                <span class="bg-brand-orange/30 text-lg">Y</span>
                <input type="number" placeholder="Type here" class="input input-bordered border-brand-orange/30 input-md w-full" v-model="addSensorForm.locationY" />
              </label>
              </div>
            </div>
            <div class="form-control ml-10">
              <label class="label">
                <span class="label-text text-base">Enter Report Interval (Sec)</span>
              </label>
              <div class="form-control">
              <label class="input-group input-group-md">
                <span class="bg-brand-orange/30 text-lg">Delay</span>
                <input type="number" placeholder="Type here" class="input input-bordered border-brand-orange/30 input-md w-full" v-model="addSensorForm.reportInterval" />
              </label>
              </div>
            </div>
            </div>
            <br>
            
            <div class="flex justify-center mt-8">
              <button class="btn bg-white text-black hover:bg-brand-orange/40 border-brand-orange hover:" @click="createSensor()">ADD</button>
            </div>
            
          </div>
        </div>
      </div>
      <!-- LIST MAIN POINTS -->
      <div class="w-2/3 mx-auto mt-20 mb-10" v-if="sensorsInfo.data">
        <div class="overflow-x-auto w-full">
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th>Type / Main Point</th>
            <th>Location / Status</th>
            <th>Created Date</th>
            <th>Report Interval (Sec)</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="sensor in sensorsInfo.data" :key="sensor._id">
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img src="https://cdn-icons-png.flaticon.com/512/3720/3720609.png" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{{ sensor.type }}</div>
                  <div class="text-sm opacity-50">{{ sensor.mainPoint_id.title }}</div>
                </div>
              </div>
            </td>
            <td class="text-sm">
              X: {{ sensor.locationX }}, Y: {{ sensor.locationY }}
              <br>
              <!-- <span class="badge badge-ghost badge-sm">Latitude - Longitude</span> -->
              <span class="badge badge-success badge-sm">• Active</span>
            </td>
            <td class="text-sm">{{ sensor.createdAt }}</td>
            <th>
                <td class="text-sm">{{ sensor.reportInterval / 1000 }}</td>
            </th>
            <th>
              <router-link :to ="`/sensor/${sensor._id}`">
                <button class="btn btn-ghost btn-xs">Details</button>
              </router-link>
              
            </th>
            
            <th>
              <button class="btn btn-error btn-xs text-white hover:bg-white hover:text-error" @click="deleteSensor(sensor._id)">Delete</button>
            </th>
          </tr>          
        </tbody>
        <!-- foot -->
        <tfoot>
          <tr>
            <th>Type / Main Point</th>
            <th>Location / Status</th>
            <th>Created Date</th>
            <th>Report Interval (Sec)</th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
        </table>
        </div>
      </div>
      <div v-else class="w-2/3 mx-auto mt-20 mb-10">
        <div class="mockup-code">
          <pre data-prefix="$"><code>show my main point</code></pre>
          <pre data-prefix=">" class="text-warning"><code>loading ... </code></pre>
          <pre data-prefix=">" class="text-error"><code>ups ! no record found !</code></pre>
          <pre data-prefix=">" class="text-success"><code>try that:</code></pre>
          <pre data-prefix=">" class="text-success"><code>   create your first manit point using the form above</code></pre>
        </div>
      </div>
      
      <router-view></router-view>  
      <Footer/>
  </div>
</template>

<script>
import Footer from "../views/Footer.vue"
import { useToast } from "vue-toastification";
export default {
  components : {Footer},
  data () {
    return {
      sensorsInfo : {}, // main pointe ait tüm sensörleri burada depola
      mainPointInfo : {},
      addSensorForm : { // bu main pointe yeni sensör eklemek için
        type: "Pick Sensor",
        locationX : null,
        locationY : null,
        reportInterval : null
      }
    }
  },
  created()  {
    this.getMainPointInformation();
    this.getSensorFromMainPoint();
  },
  methods : {
    async getMainPointInformation () {
      var path = window.location.pathname.split("/");
      await this.$appAxios({
        url : "/mainpoints/"+path[2],
        method : "GET"
      }).then(response => {
        // console.log(response.data);
        this.mainPointInfo = {...response}
      })
    },
    async getSensorFromMainPoint () {
      var path = window.location.pathname.split("/");
      await this.$appAxios({
              url: "/sensors/all/"+path[2],
              method: "GET"
      }).then(response => {
        //   console.log(response);
        this.sensorsInfo = {...response}
      }).catch(error => {
        // do nothing
      })
    //   console.log(this.sensorsInfo);
    },
    async deleteSensor (id) {
      await this.$appAxios({
              url: `/sensors/${id}`,
              method: "DELETE"
      }).then(deletedItem => {
        // TODO : daha iyi bir çözüm bul !
        // this.getMainPoints();
        this.sensorsInfo.data = this.sensorsInfo.data.filter(item => item._id !== id);
        if(this.sensorsInfo.data.length == 0) {
          this.$router.go(); // refresh page and show code-mock-up
        }
        const toast = useToast();
        toast.success("Sensor has been deleted!");
        return { toast }
      });
    },
    async createSensor () {
      if(this.addSensorForm.locationX == null || this.addSensorForm.locationY == null || this.addSensorForm.reportInterval == null) {
        const toast = useToast();
        toast.error("Please fill in all fields !");
        return { toast }
      }
      if(this.addSensorForm.type == "Pick Sensor") {
        const toast = useToast();
        toast.error("Please choose a sensor type ! ");
        return { toast }
      }
      
      const mainPointRadius = this.mainPointInfo.data[0].radius;
      const mainPointLocationX = this.mainPointInfo.data[0].locationX;
      const mainPointLocationY = this.mainPointInfo.data[0].locationY;
      const locationX = this.addSensorForm.locationX;
      const locationY = this.addSensorForm.locationY;
      const distance = Math.sqrt( Math.pow((mainPointLocationX-locationX),2) +  Math.pow((mainPointLocationY-locationY),2 ));
      console.log(distance)
      if(distance > mainPointRadius){
        const toast = useToast();
        toast.error("Sensor coordinate values ​​are outside the radius of the main point !");
        return { toast }
      }
      var path = window.location.pathname.split("/");
      await this.$appAxios({
              url: "/sensors",
              method: "POST",
              data : {
                type : this.addSensorForm.type,
                locationX : this.addSensorForm.locationX,
                locationY : this.addSensorForm.locationY,
                reportInterval : this.addSensorForm.reportInterval * 1000,
                mainPoint_id : path[2]
              }
      }).then(sensors => {
        // console.log(sensors);
        this.getSensorFromMainPoint();
        const toast = useToast();
        toast.success("Created sensor succesfully !");
        return { toast }
      });
    },
    
  }
  
}
</script>

<style>

</style>