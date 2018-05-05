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

import {getRecipientInfo} from '../services/notes'

// const ME = 0
const THEM = 0

export default {
  components: {
    Recipient,
    Note,
    Queue
  },

  data: () => ({
    queue: ''
  }),

  methods: {
    handleNote(newNote) {
      console.log('Main got note:', newNote)
      this.queue.push(newNote)
    }
  },

  created() {
    getRecipientInfo(THEM).then(info => {
      console.log('recipientInfo', info)
      this.queue = info.queue
    })
  }
}
</script>

<style scoped>
.main > *:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
