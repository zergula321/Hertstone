<template>
  <div class="creature">
      <p class="name">{{name}}</p>
      <div class="horizontal">
          <div class="square" style="background-color: cadetblue">{{attack}}</div>
          <div style="flex: 1"></div>
          <div class="square" style="background-color: crimson">{{defence}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Creature",
    props: ["name", "attack", "defence"]
}
</script>

<style scoped>
  .creature {
      background-color: darkgoldenrod;
      width: 10vw;
      height: 14vw;
      font-size: 2vw;
      padding: 5px
  }
  .name {
      text-align: center;
  }
  .horizontal {
      margin-top: 70%;
      display: flex;
      /*justify-content: space-between;*/
      align-items: stretch;
      height: 20%;
  }
  .square {
      aspect-ratio: 1 / 1;
      text-align: center;
  }

</style>