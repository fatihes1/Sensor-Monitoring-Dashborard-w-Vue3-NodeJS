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
      <div class="w-2/3 mx-auto mt-5">
        <div class="overflow-x-auto w-full">
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Hart Hagerty</div>
                  <div class="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br>
              <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>          
        </tbody>
        <!-- foot -->
        <tfoot>
          <tr>
            
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
        
        </table>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  
  
}
</script>

<style>

</style>