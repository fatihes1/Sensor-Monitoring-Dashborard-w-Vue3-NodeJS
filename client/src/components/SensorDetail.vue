<template>
  <div>
    <!-- HERO SECTION -->
    <div class="hero h-1/3 bg-gradient-to-b from-brand-orange/30 pt-36">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left ml-6">
          <h1 class="text-7xl font-semibold">Analyze Every Seconds !</h1>
          <p class="py-6 text-2xl font-thin">The sensor you created has been successfully connected to the master point.
            You can watch the instant data from your sensor below.</p>
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
    <div class="w-2/3 mx-auto mt-20 mb-10" v-if="showTable">
      <!-- {{ sensorDatas.data[0].records }} -->
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <!-- head -->
          <thead class="text-center">
            <tr>
              <th></th>
              <th>Duman</th>
              <th>CO<sup>2</sup></th>
              <th>Metan</th>
              <th>Toz</th>
              <th>O<sup>2</sup></th>
              <th>Recorded Date</th>

            </tr>
          </thead>
          <tbody class="text-center">
            <!-- row 1 -->
            <tr v-for="record in sensorDatas.data[0].records" :key="record.reportID">
              <td>
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img src="https://gogeticon.net/files/3063097/df61b5a4452d1512196b87b5f85a4439.png"
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div class="font-bold"> {{ record.smoke }} </div>
                </div>
              </td>
              <td>
                <div class="font-bold"> {{ record.co2 }} </div>
              </td>
              <td>
                <div class="font-bold"> {{ record.metan }} </div>
              </td>
              <td>
                <div class="font-bold"> {{ record.dust }} </div>
              </td>
              <td >
                <div class="font-bold"> {{ record.o2 }} </div>
              </td>
              
              <td >
                <div class="font-normal">
                  {{
                  (new Date(record.timeStamp)).getDate() + '/' + (new Date(record.timeStamp)).getMonth() + '/' + (new
                    Date(record.timeStamp)).getFullYear() + " " +
                  (new Date(record.timeStamp)).getHours() + ':' + (' 0' + (new
                    Date(record.timeStamp)).getMinutes()).substr(-2) + ':' + (' 0' + (new Date(record.timeStamp *
                      1000)).getSeconds()).substr(-2) }}
                </div>
              </td>
              

            </tr>
          </tbody>
          <!-- foot -->
          <tfoot class="text-center">
            <tr>
              <th></th>
              <th>Duman</th>
              <th>CO<sup>2</sup></th>
              <th>Metan</th>
              <th>Toz</th>
              <th>O<sup>2</sup></th>
              <th>Recorded Date</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div v-else class="w-2/3 mx-auto mt-20 mb-10">
      <div class="mockup-code">
        <pre data-prefix="$"><code>show my sensor-datas</code></pre>
        <pre data-prefix=">" class="text-warning"><code>loading ... </code></pre>
        <pre data-prefix=">" class="text-error"><code>ups ! no record found !</code></pre>
        <pre data-prefix=">" class="text-success"><code>warning:</code></pre>
        <pre data-prefix=">"
          class="text-success"><code>   your sensor may not have produced a recording yet, wait ...</code></pre>
      </div>
    </div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "../views/Footer.vue";
export default {
  components: { Footer },
  data() {
    return {
      sensorDatas: {},
      showTable: false
    };
  },
  mounted() {
    this.getSensorDatas();
    // this.$socket.on("added-record", responseSocket => {
    //   // console.log(responseSocket);
    //   this.sensorDatas[0].records.push(responseSocket);
    // })

  },
  methods: {
    getSensorDatas() {
      var path = window.location.pathname.split("/");
      this.$appAxios({
        url: "/sensors/" + path[2],
        method: "GET",
      }).then((response) => {
        // console.log(response.data[0].records.length > 0);
        if (response.data[0].records.length > 0) {
          this.showTable = true
        }
        // console.log(response);
        this.sensorDatas = { ...response };
        // console.log(this.sensorDatas)
      });
    },
  },
};
</script>

<style>
</style>