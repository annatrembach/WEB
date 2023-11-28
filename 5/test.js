class Test {
    constructor(){
        this.alltasks = [];
    }
    resumeAnswers(answer){
        var result = 0;
        for(var i=0;i<this.alltasks.length;i++)
        {
            
            if(this.alltasks[i].checkAnswers() == true) {
                result++;
            }
        }
        var resultgrade = `<p>Загальна оцінка ${result}</p>`;
        return resultgrade;
    }
    createTest(level){
        this.alltasks = [];
        //creating radiotasks
        var shuffledradio = RadioTasks[level].sort(() => 0.5 - Math.random()) 
        var selectedradio = shuffledradio.slice(0, 4);
        
        var placefortask1 = document.getElementById("placefortask1");
        placefortask1.innerHTML = "";
        for(var i=0; i<selectedradio.length; i++)
        {
            var task = new RadioTask(...selectedradio[i]);
            placefortask1.innerHTML += task.returnHTMl();
            this.alltasks.push(task);
        }
        
        //creating falllist tasks
        var shuffledfalllist = FallListTasks[level].sort(() => 0.5 - Math.random()) 
        var selectedfalllist = shuffledfalllist.slice(0, 2);
        
        var placefortask2 = document.getElementById("placefortask2");
        placefortask2.innerHTML = "";
        for(var i=0; i<selectedfalllist.length; i++)
        {
            var task = new FallListTask(...selectedfalllist[i]);
            placefortask2.innerHTML += task.returnHTMl();
            this.alltasks.push(task);
        }

        //creating checkbox tasks
        var shuffledcheckbox = CheckBoxTasks[level].sort(() => 0.5 - Math.random()) 
        var selectedcheckbox = shuffledcheckbox.slice(0, 2);

        var placefortask3 = document.getElementById("placefortask3");
        placefortask3.innerHTML = "";
        for(var i=0; i<selectedcheckbox.length; i++)
        {
            var task = new CheckBoxTask(...selectedcheckbox[i]);
            placefortask3.innerHTML += task.returnHTMl();
            this.alltasks.push(task);
        }

        //creating drag&drop tasks

        var draganddrop = DragAndDropTasks[level]
        
        var placefortask4 = document.getElementById("placefortask4");
        placefortask4.innerHTML = "";
        var task = new DragAndDropTask(...draganddrop);
        placefortask4.innerHTML += task.returnHTMl();
        this.alltasks.push(task);
        dropAndDragFUnction()

        //creating opentask
        var opentask = OpenTasks[level]
        
        var placefortask5 = document.getElementById("placefortask5");
        placefortask5.innerHTML = "";
        var task = new OpenTask(...opentask);
        placefortask5.innerHTML += task.returnHTMl();
        this.alltasks.push(task);

    }
}

var exampletest = new Test();
var choseLevel = function(elem) {
    var id = elem.getAttribute('id');
    exampletest.createTest(id);
}



var buttonsubmit = document.getElementById("buttonsubmitid");
buttonsubmit.addEventListener("click", function(event) {
    placeforgrades.innerHTML = exampletest.resumeAnswers();
});

