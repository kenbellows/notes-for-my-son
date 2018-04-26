<template>
  <section class=queue>
    <label>Queued Notes:</label>
    <div class=notes>
      <ul>
        <li v-for="(note, index) in notes" :key="index">
          {{index}}: {{note}}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>

</style>

<script>
export default {
  props: ['notes']
}
</script>
