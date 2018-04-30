<template>
  <section class=main>
    <recipient/>
    <note @newNote=handleNote />
    <queue :notes="queue" />
  </section>
</template>

<script>
import Recipient from './Recipient'
import Note from './Note'
import Queue from './Queue'

export default {
  components: {
    Recipient,
    Note,
    Queue
  },
  props: ['queue'],
  data: () => ({
    queue: [
      'This is day 1 with the new app',
      'Here\'s some test data',
      'Foobarbazbat bofbuuqboqboom'
    ]
  }),
  methods: {
    handleNote (newNote) {
      console.log('Main got note:', newNote)
      this.queue.push(newNote)
    }
  }
}
</script>

<style scoped>
.main > *:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
