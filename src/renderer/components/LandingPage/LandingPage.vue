<template>
  <div id="wrapper">
    <main>
      <div class="sidenav">
        <a href="#" v-for="tab in tabs" @click.prevent="setActiveTabName(tab.name)">
          {{ tab.name }}
        </a>
      </div>

      <div v-if="displayTab('Page1')" class="page">
        <h2>Page1</h2>
      </div>

      <div v-if="displayTab('Page2')" class="page">
        <form>
          <input type="text" v-model="message" name="sample">
          <button type="button" v-on:click="setPage3(message)">Submit</button>
        </form>
      </div>

      <div v-if="displayTab('Page3')" class="page">
        <h2>{{ page3Data }}</h2>
      </div>
    </main>
  </div>
</template>

<script src="./LandingPage.js"></script>
<style src="./LandingPage.css"></style>