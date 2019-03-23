//clas of vocabulary
class Term{
    constructor(name,definition,language){
        this.name=name;
        this.definition=definition;
        this.language=language;
    };
    render(){
        let html=`
        <details>
            <summary>${this.name} ${this.language} </summary>
            <p>${this.definition}</p>
        </details>
        `;
        return html;
     };
}