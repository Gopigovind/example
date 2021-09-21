import carousel from 'vue-owl-carousel';

export default {
  components: {
    carousel,
  },

  data() {
    return {
      email: '',
      segment: ''
    }
  },

  methods: {
    onSubmit() {
      // console.log(this.email, this.segment);
    }
  }
};
