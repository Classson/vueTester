
let app = new Vue({
  el: '#app',
  data: {
    product: 'Puppies',
    type: 'Wonderful',
    description: "yup, puppies sure are cool but don't you ever wonder how they would wear pants?",
    image: "https://odditymall.com/includes/content/bottom-half-dog-pants-thumb.jpg",
    altText: "dog in pants",
    selectedColor: 'yellow',
    link: "https://www.today.com/pets/how-would-dog-wear-pants-internet-finally-has-answer-t64486",
    coolStuff: ["furry", "friendly", "can learn tricks", "gets a lot of instagram likes"],
    vertView: {view: 'vertical', image: 'https://mozziepants.com/wp-content/uploads/2015/11/2015-11-19-07.52.43-2.jpg', color: 'grey', likes: 0},
    horzView: {view: 'horizontal', image: "https://odditymall.com/includes/content/bottom-half-dog-pants-thumb.jpg", color: 'yellow', likes: 0}
  },

  methods: {
    addVert(){
      this.vertView.likes++
    },

    addHorz(){
      this.horzView.likes++
    },

    toggleImage(view){
      this.image = view.image
      this.selectedColor = view.color
    }
  },

  computed: {
    title(){
      return `${this.type} ${this.product}`
    }
  }

})
