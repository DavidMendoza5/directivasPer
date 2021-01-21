import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Creación de una directiva personalizada llamada decorar (v-decorar), el primer argumento es el elemento que recibe, el segundo es algún parámetro
// que se envíe
Vue.directive('decorar', {
  bind(el, binding) {
    el.style.fontFamily = binding.value.familia
    el.style.color = binding.value.color

    // Revisamos si se mandó algún argumento
    if(binding.arg === 'grande') {
      el.style.fontSize = '50px'
    }
    
    // Revisamos si se mandó algún modificador
    if(binding.modifiers['negrilla']) {
      el.style.fontWeight = 'bold'
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
