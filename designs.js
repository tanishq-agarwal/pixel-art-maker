
var height,width,color;
// Select color input
 $("#sizePicker").submit(function (event){
    event.preventDefault();//stops the default action from submitting
    height= $('#inputHeight').val();//Select size input
    width = $('#inputWidth').val();
    makeGrid(height,width);
 });


// When size is submitted by the user, call makeGrid()

function makeGrid(x,y) {

$('tr').remove() //to remove any row present before
    for(var i=1;i<=x;i++){
        $('#pixelCanvas').append('<tr id =table' + i + '></tr>');//to add x number of rows 
        for(var j=1;j<=y;j++){
            $('#table' + i).append('<td></td>');//to add y number of rows
        }
    }
    $('td').click(function addColor(){
        color= $('#colorPicker').val();
        if ($(this).attr('style')){ //if the block contains any style beforehand,it should be removed
            $(this).removeAttr('style');
        }
        else {
            $(this).attr('style','background-color:' + color);//it colors background
        }
    });
}
