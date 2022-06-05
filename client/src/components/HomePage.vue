<template>
  <div>
      <!-- HERO SECTION -->
      <div class="hero h-1/3 bg-gradient-to-b from-brand-orange/30 pt-36">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left ml-6">
            <h1 class="text-7xl font-semibold">Ready in Seconds !</h1>
            <p class="py-6 text-2xl font-thin">By specifying a home location, you can choose where you want to position your sensors. Identify locations in seconds with its easy-to-use interface and start tracking your sensors.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="mockup-code">
              <pre data-prefix="$"><code>create monitoring-dashboard</code></pre> 
              <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> 
              <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
              <pre data-prefix=">" class="text-error"><code>Scrol Down and Start !</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- INPUT SECTION -->
      <div class="mt-40 w-2/3 mx-auto text-center">
        <div class="mockup-window border border-brand-orange/50 border-base-300">
          <div class="flex-row justify-center px-4 py-5 border-t border-brand-orange/50 ">
            <h1 class="text-3xl font-semibold block">Create a Main Point</h1>
            <br>
            <!-- FORM INPUT -->
            <div class="flex justify-center items-center gap-x-5">
              <div class="form-control">
              <label class="label">
                <span class="label-text text-base">Enter Sensor Name</span>
              </label>
              <div class="form-control">
              <label class="input-group input-group-md">
                <span class="bg-brand-orange/30 text-lg">Title</span>
                <input type="text" placeholder="Type here" class="input input-bordered border-brand-orange/30 input-md w-full" v-model="crateMainPointForm.title" />
              </label>
              </div>
            </div>
            <div class="form-control ml-10">
              <label class="label">
                <span class="label-text text-base">Enter X Location</span>
              </label>
              <div class="form-control">
              <label class="input-group input-group-md">
                <span class="bg-brand-orange/30 text-lg w-28">Loc-X</span>
                <input type="text" placeholder="Type here" class="input input-bordered border-brand-orange/30 input-md w-full"  v-model="crateMainPointForm.locationX"/>
              </label>
              </div>
            </div>
            <div class="form-control ml-10">
              <label class="label">
                <span class="label-text text-base">Enter Y Location</span>
              </label>
              <div class="form-control">
              <label class="input-group input-group-md">
                <span class="bg-brand-orange/30 text-lg w-28">Loc-Y</span>
                <input type="text" placeholder="Type here" class="input input-bordered border-brand-orange/30 input-md w-full" v-model="crateMainPointForm.locationY" />
              </label>
              </div>
            </div>
            <div class="form-control ml-10">
              <label class="label">
                <span class="label-text text-base">Enter Radius for Point</span>
              </label>
              <div class="form-control">
              <label class="input-group input-group-md">
                <span class="bg-brand-orange/30 text-lg">Radius</span>
                <input type="number" placeholder="Type here" class="input input-bordered border-brand-orange/30 input-md w-full" v-model="crateMainPointForm.radius" />
              </label>
              </div>
            </div>
            </div>
            <br>
            <div class="flex justify-center items-center">
              <div class="form-control w-2/3">
              <label class="label">
                <span class="label-text text-base">Enter Sensor Description</span>
              </label>
              <textarea class="textarea w-full border border-brand-orange/50" placeholder="Bio" v-model="crateMainPointForm.description" ></textarea>
            </div>
            </div>
            <div class="flex justify-center mt-8">
              <button class="btn bg-white text-black hover:bg-brand-orange/40 border-brand-orange hover:" @click="createMainPoint">CREATE</button>
            </div>

          </div>
        </div>
      </div>

      <!-- LIST MAIN POINTS -->
      <div class="w-2/3 mx-auto mt-20" v-if="mainPoints.data">
        <div class="overflow-x-auto w-full">
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th>Title / Description</th>
            <th>Location / Status</th>
            <th>Oluşturulma Tarihi</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="point in mainPoints.data" :key="point._id">
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img src="https://www.pngrepo.com/download/230977/placeholder-map-location.png" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{{ point.title }}</div>
                  <div class="text-sm opacity-50">{{ point.description }}</div>
                </div>
              </div>
            </td>
            <td class="text-sm">
              X: {{ point.locationX }}, Y: {{ point.locationY }}
              <br>
              <!-- <span class="badge badge-ghost badge-sm">Latitude - Longitude</span> -->
              <span class="badge badge-success badge-sm">• Active</span>
            </td>
            <td class="text-sm">{{ point.createdAt }}</td>
            <th>
              <button class="btn btn-ghost btn-xs">Details</button>
            </th>
            <th>
              <button class="btn btn-error btn-xs text-white hover:bg-white hover:text-error" @click="deleteMainPoint(point._id)">Delete</button>
            </th>
          </tr>          
        </tbody>
        <!-- foot -->
        <tfoot>
          <tr>
            <th>Title / Description</th>
            <th>Location / Status</th>
            <th>Oluşturulma Tarihi</th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
        </table>
        </div>
      </div>
      <div v-else class="w-2/3 mx-auto mt-20">
        <div class="mockup-code">
          <pre data-prefix="$"><code>show my main point</code></pre>
          <pre data-prefix=">" class="text-warning"><code>loading ... </code></pre>
          <pre data-prefix=">" class="text-error"><code>ups ! no record found !</code></pre>
          <pre data-prefix=">" class="text-success"><code>try that:</code></pre>
          <pre data-prefix=">" class="text-success"><code>   create your first manit point using the form above</code></pre>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainPoints : {},
      crateMainPointForm : {
        title: null,
        description : null,
        locationX : null,
        locationY : null,
        radius : null
      }
    }
  },
  mounted()  {
    this.getMainPoints();
  },
  methods : {
    getMainPoints () {
      
      this.$appAxios({
              url: "/mainpoints",
              method: "GET"
      }).then(mainPoints => {
        this.mainPoints = {...mainPoints}
      });
    },
    deleteMainPoint (id) {
      this.$appAxios({
              url: `/mainpoints/${id}`,
              method: "DELETE"
      }).then(deletedItem => {
        // TODO : daha iyi bir çözüm bul !
        // this.getMainPoints();  
        this.mainPoints.data = this.mainPoints.data.filter(item => item._id !== id);
        if(this.mainPoints.data.length == 0) {
          this.$router.go(); // refresh page and show code-mock-up
        }
      });
    },
    createMainPoint () {
      this.$appAxios({
              url: "/mainpoints",
              method: "POST",
              data : {
                title: this.crateMainPointForm.title,
                description : this.crateMainPointForm.description,
                locationX : this.crateMainPointForm.locationX,
                locationY : this.crateMainPointForm.locationY,
                radius : this.crateMainPointForm.radius,
                createDate : new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })
              }
      }).then(mainPoints => {
        this.mainPoints = this.getMainPoints();
      });
    }
  }
  
}
</script>

<style>

</style>