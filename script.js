Vue.component('dog', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product">
  <div class="product-info">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
  <p>User is premium: {{ premium }}</p>

  <div class="views">
    <h2 v-for="view in views" :key='view.view' @mouseover="toggleImage(view)"> {{ view.view }} </h2>
  </div>
  <div class="product-image">
    <a :href="link">
      <img v-bind:src="image" v-bind:alt="altText" />
    </a>
  </div>

  <div id='vote'>
  <div v-for="view in views" class="btnGrp">
      <button v-on:click="view.likes++">I like {{view.view}}</button>
      <p>{{ view.likes }}</p>
    </div>
</div>

  <h2>Cool things about puppies</h2>
  <ul>
    <li v-for="thing in coolStuff">{{ thing }}</li>
  </ul>
</div>
  `,
  data() {
    return {
      product: 'Pants',
      type: 'for Dogs',
      views: [
        {
          view: 'vertical',
          image:
            'https://mozziepants.com/wp-content/uploads/2015/11/2015-11-19-07.52.43-2.jpg',
          color: 'grey',
          likes: 0,
          alt: 'dog in grey pants (worn vertically)',
        },
        {
          view: 'horizontal',
          image:
            'https://odditymall.com/includes/content/bottom-half-dog-pants-thumb.jpg',
          color: 'yellow',
          likes: 0,
          alt: 'dog in grey yellow (worn horizontally)',
        },
        {
          view: 'overalls',
          image:
            'https://66.media.tumblr.com/tumblr_m5a5zskAcK1r4li38o1_400.jpg',
          color: 'blue',
          likes: 0,
          alt: 'dog in blue overalls standing upright',
        },
      ],
      description:
        "yup, puppies sure are cool but don't you ever wonder how they would wear pants?",
      image:
        'https://mozziepants.com/wp-content/uploads/2015/11/2015-11-19-07.52.43-2.jpg',
      altText: 'dog in pants',
      selectedColor: 'yellow',
      link:
        'https://www.today.com/pets/how-would-dog-wear-pants-internet-finally-has-answer-t64486',
      coolStuff: [
        'furry',
        'friendly',
        'can learn tricks',
        'gets a lot of instagram likes',
      ],
    };
  },

  methods: {
    addVert() {
      this.vertView.likes++;
    },

    addHorz() {
      this.horzView.likes++;
    },

    toggleImage(view) {
      this.image = view.image;
      this.selectedColor = view.color;
      this.altText = view.alt;
    },
  },

  computed: {
    title() {
      return `${this.product} ${this.type}`;
    },
  },
});

let app = new Vue({
  el: '#app',
  data: {
    premium: true
  }
});
