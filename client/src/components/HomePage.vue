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
      <div class="mt-40 text-center">
        INPUT
      </div>

      <!-- LIST MAIN POINTS -->
      <div class="w-2/3 mx-auto mt-5" v-if="mainPoints.data">
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
                  <div class="font-bold">Location X : {{ point.locationX }}</div>
                  <div class="text-sm opacity-50">Location Y : {{ point.locationY }}</div>
                </div>
              </div>
            </td>
            <td>
              {{ point.radius }}
              <br>
              <span class="badge badge-ghost badge-sm">{{point.title}}</span>
            </td>
            <td>{{ point.createdAt }}</td>
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
      <div v-else class="w-2/3 mx-auto mt-5">
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
      mainPoints : {}
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
        this.mainPoints.data = this.mainPoints.data.filter(i => i !== deletedItem)
      });
    }
  }
  
}
</script>

<style>

</style>