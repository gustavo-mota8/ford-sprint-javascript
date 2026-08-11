

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor (image, title, url) {

        this.image = image;
        this.title = title;
        this.url = url;
    
    }
      
    static Start(arr){

        if(arr && arr.length > 0){
    
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel._arr = arr;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2500);
             
        } 
    }


    static AtualizarTela() {

        const carouselDiv = document.querySelector("#carousel");
        const carouselTitle = document.querySelector("#carousel-title");
        const atual = Carousel._arr[Carousel._sequence];

        carouselDiv.innerHTML = `<img src ="img/${atual.image}">`;
        carouselTitle.innerHTML = `<a href ="${atual.url}">${atual.title}</a>`;
        
    }
    static Next(){

        Carousel._sequence++;
        
        if (Carousel._sequence >= Carousel._arr.length) {

            Carousel._sequence = 0;
        } 

        Carousel.AtualizarTela();
        
    
    }

    static Prev() {

        Carousel._sequence--;

        if (Carousel._sequence < 0) {

            Carousel._sequence = 0;

        }

        Carousel.AtualizarTela();
    }
};
