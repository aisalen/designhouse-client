// 15.120
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC4vnUjZR-Y74u0qi2K4SzBrsELjgw0aYQ',
    libraries: 'places'
  }
});
