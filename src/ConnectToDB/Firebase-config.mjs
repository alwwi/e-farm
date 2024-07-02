// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
import { getDatabase,ref,set,get,update,remove,push,onValue } from "firebase/database";
import 'firebase/database'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRBmI1i0JCL7Abph5YeFD5O3zSQCXMCZs",
  authDomain: "e-farm-719b6.firebaseapp.com",
  databaseURL: "https://e-farm-719b6-default-rtdb.firebaseio.com",
  projectId: "e-farm-719b6",
  storageBucket: "e-farm-719b6.appspot.com",
  messagingSenderId: "835743950443",
  appId: "1:835743950443:web:97bbc56979bf7fcda0b32e",
  measurementId: "G-LEGG9B3BR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// const analytics = getAnalytics(app);

const dataToUpload = {

  "product": [
    {
      "id": "1",
      "name": "Rake/Garpu Tanah",
      "price": "120.000",
      "image": "/Image-Assets/tools-product/rake.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "specification": "Specification 1",
      "location": "Kab. Sleman",
      "category": "farmer-tools"
    },
    {
      "id": "2",
      "name": "Vitamin Ayam",
      "price": "53.000",
      "image": "/Image-Assets/vitamin/vitamin-ayam.jpg",
      "description": "Description 1",
      "specification": "Specification 1",
      "location": "Kab. Sleman",
      "category": "vitamin"
    },
    {
      "id": "3",
      "name": "Tag nomor sapi",
      "price": "349.000",
      "image": "/Image-Assets/accessories/tag-sapi.jpg",
      "description": "Description 1",
      "specification": "Specification 1",
      "location": "Kab. Sleman",
      "category": "accessories"
    },
    {
      "id": "4",
      "name": "Ayam pedaging",
      "price": "20.000",
      "image": "/Image-Assets/cattles/ayam.jpg",
      "description": "Description 1",
      "specification": "Specification 1",
      "location": "Kab. Sleman",
      "category": "cattles"
    }
  ],
  "cart": [
    {
      "id": "2",
      "name": "Vitamin Ayam",
      "price": "53.000",
      "image": "/Image-Assets/vitamin/vitamin-ayam.jpg",
      "description": "Description 1",
      "specification": "Specification 1",
      "location": "Kab. Sleman",
      "category": "vitamin",
      "quantity": 2
    },
    {
      "id": "3",
      "name": "Tag nomor sapi",
      "price": "349.000",
      "image": "/Image-Assets/accessories/tag-sapi.jpg",
      "description": "Description 1",
      "specification": "Specification 1",
      "location": "Kab. Sleman",
      "category": "accessories",
      "quantity": 1
    }
  ],
  "wishlist": [
    {
      "id": "1",
      "name": "Rake/Garpu Tanah",
      "price": "120.000",
      "image": "/Image-Assets/tools-product/rake.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "specification": "Specification 1",
      "location": "Kab. Sleman",
      "category": "farmer-tools"
    },
    {
      "id": "4",
      "name": "Ayam pedaging",
      "price": "20.000",
      "image": "/Image-Assets/cattles/ayam.jpg",
      "description": "Description 1",
      "specification": "Specification 1",
      "location": "Kab. Sleman",
      "category": "cattles"
    }
  ],
  "blog" : [
        {
            "id" : 1,
            "title" : "Tips mengolah daging dengan benar",
            "date" : "5 Jun 2024",
            "content" : "This is the first blog post.",
            "Image" : "/Image-Assets/blog/meat.png"
        },
        {
            "id" : 2,
            "title" : "cara merawat anak ayam yang baru menetas",
            "date" : "5 Jun 2024",
            "content" : "This is the second blog post.",
            "Image" : "/Image-Assets/blog/chick.png"
        },
        {
            "id" : 3,
            "title" : "faktor yang mempengaruhi kualitas ternak",
            "date" : "5 Jun 2024",
            "content" : "This is the third blog post.",
            "Image" : "/Image-Assets/blog/food-quality.png"
        },
        {
            "id" : 4,
            "title" : "meningkatkan kualitas susu sapi",
            "date" : "5 Jun 2024",
            "content" : "This is the fourth blog post.",
            "Image" : "/Image-Assets/blog/milk-quality.png"
        }
    ]
}

function uploadData() {

  dataToUpload.product.forEach((product) => {
    set(ref(db, `product/${product.id}`), product)
      .then(() => {
        console.log(`Data ${product.name} has been added successfully`);
      })
      .catch((error) => {
        console.error(`Error adding data ${product.name}:`, error)
      });
  });

  dataToUpload.cart.forEach((cart) => {
    set(ref(db, `cart/${cart.id}`), cart)
      .then(() => {
        console.log(`Data ${cart.name} has been added successfully`);
      })
      .catch((error) => {
        console.error(`Error adding data ${cart.name}:`, error)
      });
  });

  dataToUpload.wishlist.forEach((wishlist) => {
    set(ref(db, `wishlist/${wishlist.id}`), wishlist)
      .then(() => {
        console.log(`Data ${wishlist.name} has been added successfully`);
      })
      .catch((error) => {
        console.error(`Error adding data ${wishlist.name}:`, error)
      });
  });

  dataToUpload.blog.forEach((blog) => {
    set(ref(db, `blog/${blog.id}`), blog)
      .then(() => {
        console.log(`Data ${blog.title} has been added successfully`);
      })
      .catch((error) => {
        console.error(`Error adding data ${blog.title}:`, error)
      });
  });
}

uploadData()


export { app, db, ref, set, getDatabase, get,update,remove,push,onValue }