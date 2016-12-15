import { Component } from '@angular/core';
import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCjpZkux_LTo04WAZfElvLXk4ijhfRmeLo",
  authDomain: "koffi-82d7e.firebaseapp.com",
  databaseURL: "https://koffi-82d7e.firebaseio.com",
  storageBucket: "koffi-82d7e.appspot.com",
};

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  {

  constructor() {
    console.log("Here we go again");
    firebase.initializeApp(firebaseConfig);
  }

  name = 'Angular';
}
