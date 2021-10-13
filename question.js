class Question{
    constructor(){
        this.question=createElement('h3')
        this.clue=createElement('h2')
        this.answer=createElement('h3')
        this.answer1=createInput("")
    }
    display(){
        this.question.html("It is 5 letter word which is called King of fruits")
        this.clue.html("first starts with M and ends with O")
        this.question.position(100,50)
        this.clue.position(200,40)
        this.answer.position(250,40)
    }
}