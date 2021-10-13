class Form{
    //to give input
    constructor() {
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.playbutton = createButton("Play");
        this.greeting = createElement("h2");
        this.title=createElement('h2')
      }
    
    
    hide(){
    this.greeting.hide()
    this.playbutton.hide()
    this.input.hide()
   
    }

    // display(){
        

    //     this.button.mousePressed(()=>{
    //         this.input.hide();
    //         this.button.hide();
    //         // player.name=this.input.value();
    //         // player.getPlayerName();
    //         // this.greeting.html("Are you ready"+player.name);
    //         // this.greeting.position(displayWidth/2,displayHeight/2);

    //     })
    // }

   
    display(){

        this.title.html("GUESS WHO AM I")
        this.title.position(displayWidth/2- 200,-10)
        this.title.style('font-size', '50px');
        this.title.style('color', 'green');

        
        this.input.position(displayWidth/2 - 50,200)

        
        this.greeting.position(displayWidth/2 - 80,100)
        this.greeting.style('color', 'black');

        this.playbutton.position(displayWidth/2,300)
        this.playbutton.style('color', 'black');

        if(this.playbutton.mousePressed(changebg)){
          this.input.hide();
          this.playbutton.hide();
          var message = `Hello ${this.input.value()}</br>wait for questions...`;
          this.greeting.html(message);
          this.greeting.hide()
        }

        function changebg(){
          
          
          //player.name = this.input.value()
        }
    }

}