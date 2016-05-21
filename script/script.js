var styles={
    
    shirts:[
        {
            url:"http://www.how-to-draw-funny-cartoons.com/image-files/cartoon-t-shirts-005.jpg"
        },
        {
            url:""
        }
    ],
    glasses:[
        {
            url:""
        },
        {
            url:""
        }
        ],
    contactlenses:[
        {
            url:""
        },
        {
            url:""
        }
        ]
        
}

function showDOM (){
     var content= $(".styleDisplay").html();
     
}

function showStyles () {
    var styleChoice=null; //Enter User's Input Here From CSS Selector
    var arrayAccess= styles.styleChoice;
    displayContent(arrayAccess,styleChoice);
}

function imgGallery (){
    for()
}

function displayContent (selectedArray,selectedClass) {
    for(var i=0 ;i<selectedArray.length ;i++){
        var imgSources= selectedArray[i].url
        $("."+selectedClass).append("<img class='imgGallery' src='"+imgSources+"'>")
    }
}

$(document).ready(function(){
    showStyles();
    showDOM();
    imgGallery()
    console.log(styles);
    displayContent(styles.shirts,"Fpic");
    
    
});


