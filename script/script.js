var styles={
    
    shirts:[
        {
            url:"../images/styles_0001_Layer-5.png"
        },
        {
            url:"../images/styles_0002_Layer-11.png"
        }
    ],
    glasses:[
        {
            url:"../images/shades.png"
        },
        {
            url:"../images/styles_0000_layer-3.png"
        },
        {
            url:"styles_0003_Layer-8.png"
        }
    ],
    hats:[
        {
            url:"../images/hard-hat-yellow-png"
        }
    ],
    necklaces:[
        {
            url:"styles_0001_Layer-2.png"
        }
    ]
        
};

function showDOM (){
     var content= $(".styleDisplay").html();
     $(".styleList").text(content);
}

function userValue () {
    $("#userInputClass").keypress(function(event){
        if(event.which===13){
            showStyles($("#userInputClass").val())
        }
    })
}

function showStyles (userInput) {
    var styleChoice=userInput; //Enter User's Input Here From CSS Selector
    var classValue=styleChoice.replace('.','')
    var arrayAccess= styles[classValue];
    displayContent(arrayAccess,classValue);
}

function imgGallery (){
    var keys=[];
    keys=Object.keys(styles);
    for(var i=0;i<keys.length; i++){
        
        displayContent(styles.keys[i],keys[i])
    }
}

function displayContent (selectedArray,selectedClass) {
    for(var i=0 ;i<selectedArray.length ;i++){
        var imgSources= selectedArray[i].url
        $("."+selectedClass).append("<img class='imgGallery' src='"+imgSources+"'>")
    }
}

$(document).ready(function(){
    userValue();
    showStyles();
    showDOM();
    imgGallery();
    console.log(styles);
    // displayContent(styles.shirts,"Fpic");
    
});