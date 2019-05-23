new Vue({
  el: '#app',
  data:{
    has: false,
    bath: false,
    girl: false,
    roam: false,
    bus:false,
    count: 0,
    output:""
  },
  methods:{
    calculate: function(){

      if (this.has){this.count += 2;}
      if (this.bath){this.count += 3;}
      if (this.girl){this.count += 3;}
      if (this.roam){this.count += 2;}
      if (this.bus){this.count += 2;}

      if(this.count == 0){this.output = "Nije uneta ni jedna stavka."}

      else if (this.count < 6 ){
        this.output ="Filip ce do\u{107}i za " + this.count + " sati.";
        this.count = 0;

      }
      else{this.output = "Filip nazalost ne\u{107}e do\u{107}i :(";}
      this.count = 0;
    },
    reset: function(){
      this.has = false;
      this.bath = false;
      this.girl = false;
      this.roam = false;
      this.bus = false;
      this.count = 0;
      this.output = "";

    }
  }
})
