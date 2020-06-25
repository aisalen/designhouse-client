<template>
  <!-- 14.107 -->
  <div>
    <input
      class="form-control form-control-lg font-14 fw-300"
      :type="inputType"
      :value="value"
      :placeholder="placeholder"
      :class="{ 'is-invalid': form.errors.has(field) }"
      @input="handelInput"
    >
    <has-error :form="form" :field="field"></has-error>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      required: true
    },
    field: {
      type: String,
      default: true
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ''
    },
    inputType: {
      type: String,
      default: 'text'
    }
  },

  methods: {
    handelInput(e) {
      this.$emit('input', e.target.value);
      console.log(e.target.value);
    }
  },

  mounted() {
    // console.log(this.$attrs);
  }
}
</script>

<style>

</style>
