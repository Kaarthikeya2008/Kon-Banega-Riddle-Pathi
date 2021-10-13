class Game{
 constructor(){

    this.question=createElement('h3')
    this.answer=createInput("")
    
    

    this.question1=createElement('h3')
    this.answer1=createInput("")

    this.question2=createElement('h3')
    this.answer2=createInput("")

    
    this.button=createButton("SUBMIT")
    
    this.finalanswer1=createElement('h3')
    this.finalanswer2=createElement('h3')
    this.finalanswer3=createElement('h3')

    this.greeting=createElement('h3')
    

 }


display(){
    this.question.html("1.What can you break, even if you never pick it up or touch it?")
        this.question.position( 220,75)
        this.answer.position(250,125)

        this.question1.html("2.A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?")
        this.question1.position(220,150)
        this.answer1.position(250,200);

        this.question2.html("3.You see a boat filled with people, yet there isn’t a single person on boat. How is that possible?")
        this.question2.position(220,250);
        this.answer2.position(250,300);
        
        


        this.button.position(200,350)
        
        this.button.mousePressed(showAnswers)
        

        function showAnswers(){
            const name=this.answer.value();
            const name1=this.answer1.value();
            const name2=this.answer2.value();
            

            this.greeting.html('Answers are' + name + name1 + name2);
            this.greeting.position(300,350)
        }

    }

}