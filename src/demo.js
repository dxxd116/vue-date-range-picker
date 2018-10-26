// /** Lines below are already loaded in /test/helpers/entry.js
// import Vue from 'vue'
// import plugin from './index'
// import 'babel-polyfill' // promise and etc ...
//
// Vue.config.productionTip = false
// Vue.use(plugin)
//
// window.Vue = Vue
// Vue.config.debug = true
// */

import VueRangeDatePicker from './RangedatePicker.vue'
var n= new Date()
var end = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 10)
var dateRange={
  start: new Date(),
  end: end
}

new window.Vue({
  el: 'app',
  data: {
    dateRange: dateRange
  },
  template: `<div id="demo">
<div>
<strong>Full form</strong>
<vue-rangedate-picker :dateRange="dateRange"></vue-rangedate-picker>
</div>
<div style="height: 300px">
<strong>Compact (mobile)</strong>
<vue-rangedate-picker :dateRange="dateRange" compact="true"></vue-rangedate-picker>
</div>
</div>`,
  components: { VueRangeDatePicker }
})
