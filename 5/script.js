class Task {
    constructor(variants, question, id) {
        this.variants = variants;
        this.question = question;
        this.id = id;
    }
    returnHTMl() {
            return "";
        }
    checkAnswers() {
            return false;
        }
}
//1
class RadioTask extends Task {
    constructor(variants, question, answer, id) {
        super(variants, question, id)
        this.answer = answer;
    }
    returnHTMl() {
        var html;  
        var questionnumber = `<p class="nameofquestions">Питання №${this.id} ${this.question}</p>`;
        var variant = "";
        for(let i=0; i<this.variants.length; i++)
        {
            variant = variant + `
            <input value="${this.variants[i]}" type="radio" name="radiotask${this.id}type">
            <label>${this.variants[i]}</label><br>`
        }
        html = questionnumber + variant;
        return html;
    }
    checkAnswers() {
        var elements = document.getElementsByName(`radiotask${this.id}type`)
        for(var i=0;i<elements.length;i++)
        {
            if(elements[i].checked)
            {
                if(elements[i].value == this.answer)
                {
                    return true;
                }
            }
        }
        return false;
    }

}

//2
class CheckBoxTask extends Task{
    constructor(variants, question, answer, id) {
        super(variants, question, id)
        this.answer = answer;
    }
    returnHTMl() {
        var html;  
        var questionnumber = `<p class="nameofquestions">Питання №${this.id} ${this.question}</p>`;
        var variant = "";
        for(let i=0; i<this.variants.length; i++)
        {
            variant = variant + `
            <input value="${this.variants[i]}" type="checkbox" name="checkbox${this.id}type">
            <label>${this.variants[i]}</label><br>`
            
        }
        html = questionnumber + variant;
        return html;
    }
    checkAnswers() {
        var elements = document.getElementsByName(`checkbox${this.id}type`);
        var count = 0;
        for(var i=0;i<elements.length;i++)
        {
            if(elements[i].value == this.answer[0] || elements[i].value == this.answer[1])
            {
                count++;
            }
        }
        if(count == 2)
        {
            return true;
        }
        return false;
    }
}

//3
class FallListTask extends Task {
    constructor(variants, question, answer, id) {
        super(variants, question, id)
        this.answer = answer;
    }
    returnHTMl() {
        var html;  
        var questionnumber = `<p class="nameofquestions">Питання №${this.id} ${this.question}</p>`;
        var openselect = `<select id="falllist${this.id}type">`;
        var closeselect = "</select>";
        var variant = "";
        for(let i=0; i<this.variants.length; i++)
        {
            variant = variant + `
            <option value="${this.variants[i]}">${this.variants[i]}</option>`
        }
        html = questionnumber + openselect + variant + closeselect;
        return html;
    }
    checkAnswers() {
        var selectElement = document.getElementById( `falllist${this.id}type`);
        if(selectElement.value == this.answer)
        {
            return true;
        }
        return false;

    }
}

//4
class DragAndDropTask extends Task{
    constructor(variants, question, answer, id) {
        super(variants, question, id)
        this.answer = answer;
    }
    returnHTMl() {
        var html;  
        var questionnumber = `<p class="nameofquestions">Питання №${this.id} ${this.question}</p>`;
        var drag = "";
        for(let i=0; i<(this.variants.length)/2; i++)
        {
            drag = drag + `
            <div class="draggable" draggable="true" data-value="${this.variants[i]}">${this.variants[i]}</div>`
        }
        var drop = "";
        for(let i=((this.variants.length)/2); i<this.variants.length; i++)
        {
            drop = drop +
            `<div class="drop-target" data-target="${this.variants[i]}" name="dragdrop${this.id}">${this.variants[i]}</div>`
        }
        html = questionnumber + drag + drop;
        return html;
    }
    checkAnswers() {
        var elements = document.getElementsByName(`dragdrop${this.id}`);
        var count = 0;
        for(var i=0;i<(elements.length);i++)
        {
            var elementattribute = elements[i].getAttribute(`data-target`);
            var result = elements[i].innerText + elementattribute
            if(this.answer.findIndex(x => x == result) != -1)
            {
                count++;
            }
        }
        if(count == 3)
        {
            return true;
        }
        return false;
    }
}

class OpenTask extends Task {
    constructor(question, answer, id) {
        super([], question, id)
        this.answer = answer;
    }
    returnHTMl() {
        var html = `
            <p class="nameofquestions">Питання №${this.id} ${this.question}</p>
            <textarea id="${this.id}" cols="30" rows="10"></textarea>`
        return html;
    }
    checkAnswers() {
        var getuseropenanswer = document.getElementById(this.id);
        useranswer.innerHTML = getuseropenanswer.value;
        console.log(this.answer);
        console.log(getuseropenanswer.value);
        if(this.answer == getuseropenanswer.value)
        {
            return true;
        }
        return false;
    }
}
