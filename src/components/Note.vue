<template>
  <form id=new-note @submit=addNote>
    <label for=note>Note:</label>
    <textarea name=note v-model=note placeholder="Enter a note to add to the queue"></textarea>
    <button type=submit>Add</button>
  </form>
</template>

<style scoped>

</style>

<script>
export default {
  data: () => ({
    note: ''
  }),
  methods: {
    addNote(evt) {
      evt.preventDefault()
      evt.stopPropagation()
      console.log('form submitted', arguments)
      console.log('me:', this)
      this.$emit('newNote', this.note)
      this.note = ''
    }
  }
}
</script>
