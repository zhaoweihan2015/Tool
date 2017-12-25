<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
    <div class="list">
      <ul>
        <li><router-link :to="{'name':'admin'}">admin</router-link></li>
        <li><router-link :to="{'name':'HelloWorld'}">helloworld</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>