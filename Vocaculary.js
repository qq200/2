// class of a vocabulary
class Vocabulary{
    constructor(title){
        this.title=title;
        this.terms=[];//va contine explicatiile la term
    }
    addTerm(term){
        this.terms.push(term);// arrey push
    }
    getTerm(name){//cauta dupa nume in vocabular
        for(var i=0; i<this.terms.length; i++){
            if(name==this.terms[i].name){
                return this.terms[i]
            }
        }
        return null;
    }
    generateTerms(amount){//genereaza un nr dat de termeni
       while(this.terms.length!=amount){
        this.addTerm( 
            // new Term("HTML","Happy text","en") 
            new Term(faker.lorem.word(), faker.lorem.sentence(), "en")
        );
        }   
    }
    showAllTerms(){
        //div..
    }
    showAllTerms(pages){ //20 pe pagina
        //for
        //showTerm(1)   0..19index
    }
}