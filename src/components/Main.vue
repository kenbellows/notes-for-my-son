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

import notes from '../services/notes'

export default {
  components: {
    Recipient,
    Note,
    Queue
  },

  props: ['queue'],

  methods: {
    handleNote(newNote) {
      console.log('Main got note:', newNote)
      this.queue.push(newNote)
    }
  },

  created() {
    console.log('notes', notes)
  }
}
</script>

<style scoped>
.main > *:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
