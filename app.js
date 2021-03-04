const app = Vue.createApp({
  data() {
    return{
      number: 0,
    }
  },

  watch:{
      result(){
        
        setTimeout(()=>{
            this.number = 0;
        },5000 )
      }
  },

  computed: {
    result(){
      if(this.number > 37 ){
        return "Too much!";
      } else if(this.number ===37){
        return "37"
      }
      return 'Not there yet'
    }
  },

  methods: {
    add(num){
      this.number+=num;
    }
  }
});

app.mount('#assignment');
