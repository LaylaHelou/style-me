var styles={
    
    shirts:[
        {
            url:"images/greenshirt.png",
            name:"green"
        },
        {
            url:"images/redshirt.png",
            name:"red"
        }
    ],
    glasses:[
        {
            url:"images/shades.png",
            name:"shades"
        },
        {
            url:"images/yellowshades.png",
            name:"yellowshades"
        }
    ],
    hats:[
        {
        url:"images/funnyhat.png",
        name:"funnyhat"
            
        }
        ],
    necklaces:[
        {
            url:"images/bluenecklace.png",
            name:"blue"
        }
    ]
        
}

var currentItems=[];

function showDOM (){
     var content= $(".styleDisplay").html();
     $(".styleList").text(content);
}

function userValue () {
    $("#userInputClass").keypress(function(event){
        if(event.which===13){
            showStyles($("#userInputClass").val())
        }
    });
}

function showStyles (userInput) {
    var styleChoice=userInput; //Enter User's Input Here From CSS Selector
    var classValue=styleChoice.replace('.','');
    var selectors=classValue.split(" ");
    var arrayAccess= styles[selectors[0]];
    var item = arrayAccess.find(function(i){
        return i.name==selectors[1];
    });
    currentItems.push(item);
    displayContent(arrayAccess,"Fpic");
}

function imgGallery (){
    var keys=Object.keys(styles);
    for(var i=0;i<keys.length; i++){
        displayContent(styles[keys[i]],keys[i]);
    }
}


function displayContent (selectedArray,selectedClass) {
    for(var i=0 ;i<selectedArray.length ;i++){
        var imgSources= selectedArray[i].url;
        var className=selectedArray[i].name;
        $("."+selectedClass).append("<img class='imgGallery "+className+"' src='"+imgSources+"'>")
    }
}

$(document).ready(function(){
    userValue();
    // showStyles();
    imgGallery();
    console.log(styles);
    showDOM();
});