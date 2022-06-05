<template>
  <div>
      <!-- HERO SECTION -->
      <div class="hero h-1/3 bg-gradient-to-b from-brand-orange/30 pt-36">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left ml-6">
            <h1 class="text-7xl font-semibold">Analyze Every Seconds !</h1>
            <p class="py-6 text-2xl font-thin">The sensor you created has been successfully connected to the master point. You can watch the instant data from your sensor below.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="mockup-code">
              <pre data-prefix="$"><code>show sensor-data</code></pre> 
              <pre data-prefix=">" class="text-warning"><code>fetching you sensor...</code></pre> 
              <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
              <pre data-prefix=">" class="text-error"><code>Scrol Down and Analyze !</code></pre>
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/3 mx-auto mt-20 mb-10" v-if="sensorDatas.data.records">
        {{ sensorDatas.data.records }}
      </div>
      <div v-else class="w-2/3 mx-auto mt-20 mb-10">
        <div class="mockup-code">
          <pre data-prefix="$"><code>show my sensor-datas</code></pre>
          <pre data-prefix=">" class="text-warning"><code>loading ... </code></pre>
          <pre data-prefix=">" class="text-error"><code>ups ! no record found !</code></pre>
          <pre data-prefix=">" class="text-success"><code>warning:</code></pre>
          <pre data-prefix=">" class="text-success"><code>   your sensor may not have produced a recording yet, wait ...</code></pre>
        </div>
      </div>
      <router-view></router-view>  
      <Footer/>
  </div>
</template>

<script>
import Footer from "../views/Footer.vue"
export default {
  components : {Footer},
  data () {
    sensorDatas : {}
  },
  mounted()  {
    this.getSensorDatas();
  },
  methods : {
    getSensorDatas() {
      var path = window.location.pathname.split("/");
      this.$appAxios({
              url: "/sensors/"+path[2],
              method: "GET"
      }).then(response => {
        //   console.log(response);
        this.sensorDatas = {...response}
      });
    }
  }
  
}
</script>

<style>

</style>