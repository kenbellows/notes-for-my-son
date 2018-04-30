<template>
  <form name=recipient>
    <label for=address>Recipient:</label>
    <input type=email name=address v-model=recipient @change=alertChange>
  </form>
</template>

<style scoped>
form {
    display: flex;
    width: 100%;
}
label {
    flex: none;
    margin-right: 1rem;
}
input {
  flex: 1;
}
</style>

<script>
export default {
  data: () => ({
    recipient: ''
  }),
  methods: {
    alertChange(evt) {
      evt.preventDefault()
      evt.stopPropagation()
      this.$emit('change', this.recipient)
    }
  }
}
</script>
