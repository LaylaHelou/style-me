$(document).ready(function(){
    showStyles();
})

function showStyles () {
    var styleChoice=null; //Enter User's Input Here From CSS Selector
    var arrayAccess= styles.styleChoice;
    displayContent(arrayAccess);
}

function displayContent (selectedArray) {
    for(var i=0 ;i<selectedArray.length ;i++){
        var imgSources= selectedArray[i]
        $(".styleDisplay").append("<img src='"+imgSources+"'>")
    }
}




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
        }
        {
            url:""
        }
        ],
    contextlenses:[
        {
            url:""
        },
        {
            url:""
        }
        ]
        
}

    