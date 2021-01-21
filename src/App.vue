<template>
  <div class="container">
    <div class="badge bg-secondary">
      <!-- Enviamos un argumento y un modificador a la directiva personalizada -->
      <!-- v-decorar:grande.negrilla="'helvetica'" -->
      <span v-decorar:grande.negrilla="{familia: 'helvetica', color: 'red'}">Aprende Vue</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
  // Se pueden definir directivas locales con la palabra directives y se le manda un objeto que contenga las directivas personalizadas

}
</script>

<style>

</style>
