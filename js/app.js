// assign toggle the col-anim class for each of our columns when they are clicked

var slider4 = new Swipe(document.getElementById('slider4'),
                        {
                        startSlide: 1,
                        speed: 400,
                        auto: 3000
                        }
                        );

var agor1;

$(function() {
  
  
  
  $("#llun").hammer({prevent_default:true}).bind("drag", function(ev) {
                                                 if (ev.direction == "down") {
                                                 closeAll();
                                                 }
                                                 });
  
  
  $("#menuElement1").hammer({prevent_default:true}).bind("tap", function() {
                                                         
                                                        open1();
                                                         
//                                                //   $(this).effect("bounce", { direction: 'right', times:1, distance: 10 }, 300);
//                                                if (agor1 == '1'){
//                                                         close1();
//                                                         agor1 = '0';
//                                                   }
//                                                         
//                                                   else {
//                                                         open1();
//                                                         
//                                                        }
                                        });
  
  
  $("#menuElement2").hammer({prevent_default:true}).bind("tap", function() {
                                                       //  $(this).effect("bounce", { direction: 'right', times:1, distance: 10 }, 300);
                                                         open2();
                                                         });
  
  $("#menuElement3").hammer({prevent_default:true}).bind("tap", function() {
                                                       //  $(this).effect("bounce", { direction: 'right', times:1, distance: 10 }, 300);
                                                         open3();
                                                         });
  
  
  
  // bind hammer to our columns tp listen for down drag
  $("#menuElement1").hammer({prevent_default:true}).bind("drag", function(ev) {
                                                         
                                                         if (ev.direction == "left") {
                                                         close1();
                                                         }
                                                         
                                                         else if (ev.direction == "right") {
                                                         open1();
                                                         }
                                                         
                                                         });
  
  
  
  $("#menuElement2").hammer({prevent_default:true}).bind("drag", function(ev) {
                                                         
                                                         if (ev.direction == "left") {
                                                         close2();
                                                         }
                                                         
                                                         else if (ev.direction == "right") {
                                                         open2();
                                                         
                                                         }
                                                         
                                                         });
  
  
  $("#menuElement3").hammer({prevent_default:true}).bind("drag", function(ev) {
                                                         
                                                         if (ev.direction == "left") {
                                                         close3();
                                                         }
                                                         
                                                         else if (ev.direction == "right") {
                                                         open3();
                                                         }
                                                         
                                                         });
  
  
  
  });

function close1(){
    $('#fidio').fadeOut();
    $('#menuDetails1').fadeOut();
    //     $('selection').animate({ top: '0px' });
    //    $('#llun').animate({ top: '0px' });
    
}


function open1() {
    //   $('selection').animate({ top: '-155px' });
    
    $('#menuDetails1').fadeIn();
    $('#fidio').fadeIn();

    agor1 = '1';
    
    close2();
    close3();
}


function close2(){
    $('#menuDetails2').fadeOut();
    //     $('selection').animate({ top: '0px' });
    //    $('#llun').animate({ top: '0px' });
    
}


function open2() {
    startUp();
    //   $('selection').animate({ top: '-155px' });
    $('#menuDetails2').fadeIn();
    close1();
    close3();
}

function close3(){
    $('#menuDetails3').fadeOut();
    //     $('selection').animate({ top: '0px' });
    //    $('#llun').animate({ top: '0px' });
    
}


function open3() {
    //   $('selection').animate({ top: '-155px' });
    $('#menuDetails3').fadeIn();
    close1();
    close2();
}

function child(){
var childbrowser;
childbrowser = ChildBrowser.install();
alert("Cordova is working");
}



function onBodyLoad()
{

       

}

function doSearch(){
    
    var ObjData;
    var textObj;
    var hasConnection;
    var hasObjectText;
var el = document.getElementById('search');
    var prifysgol;
    var cwrs;
    
    var networkState = navigator.network.connection.type;
    
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';
    
    
    if (networkState == Connection.NONE){
        // alert('Network Type: ' + states[networkState]);
        hasConnection = false;
    }else if(networkState == Connection.UNKNOWN){
        //  alert('Network Type: ' + states[networkState]);
        hasConnection = false;
    }else{
        
        hasConnection = true;
    }

var myData;
if(hasConnection == true){
   // alert("HI");

    //alert("cyrsiau");
    //var objData = parseData(ObjData)
    //alert(objData.DataItem.length);
    
    //var myjson = {"myData":[ {"REC_NO":"107045","JOB_ID":"1","JOB_TEXT":"Task 1"}, {"REC_NO":"107046","JOB_ID":"1","JOB_TEXT":"Task 2"} ]};
    el.onclick = getVals;
    
}else{
    alert("Mae angen cysylltiad i'r we i ddefnyddio'r Chwilotydd Cyrsiau");
    gwall();
    //myData = ObjData;
    //  alert("helo: ");
    //el.onclick = getStaticVals;
}
}

function gwall() {
        navigator.notification.confirm(
                                       'You are the winner!',  // message
                                       onConfirm,              // callback to invoke with index of button pressed
                                       'Game Over',            // title
                                       'Restart,Exit'          // buttonLabels
                                       );
}

function getStaticVals() {
    prifysgol = document.getElementById('select-choice-1').value;
    cwrs = document.getElementById('select-choice-2').value;
    
    renderData(ObjData);
    
}


function startUp() {
    prifysgol = document.getElementById('select-choice-1').value;
    cwrs = document.getElementById('select-choice-2').value;
    
    var jsonText = "{p_hei:'"+prifysgol+"', p_subject_id:'"+cwrs+"'}";
    
    $.ajax({
           type: "POST",
           url: "http://www.mantais.ac.uk/assets/webmethod/MantaisData.asmx/GetMantaisCourses",
           data: jsonText,
           contentType: "application/json; charset=utf-8",
           dataType: "json",
           success: function (msg) {
           //alert("Success: " + msg.d);
           renderData(msg.d);
           //$('#XMLContent').html(msg.d);
           },
           error: function (xhr, status, error) {
           //alert(   xhr.responseText);
           }
           });
    return false;
}

function getVals() {
    prifysgol = document.getElementById('select-choice-1').value;
    cwrs = document.getElementById('select-choice-2').value;
    
    var jsonText = "{p_hei:'"+prifysgol+"', p_subject_id:'"+cwrs+"'}";
    
    $.ajax({
           type: "POST",
           url: "http://www.mantais.ac.uk/assets/webmethod/MantaisData.asmx/GetMantaisCourses",
           data: jsonText,
           contentType: "application/json; charset=utf-8",
           dataType: "json",
           success: function (msg) {
           //alert("Success: " + msg.d);
           renderData(msg.d);
           //$('#XMLContent').html(msg.d);
           },
           error: function (xhr, status, error) {
           //alert(   xhr.responseText);
           }
           });
    
    doSearch();
    // alert('Prifysgol: '+prifysgol);
    //alert('Cwrs: '+cwrs);
    // window.location.href = "results.html?p="+prifysgol+"&c="+cwrs;
    return false;
}

function renderData(p_data){
    
    var myhtml;
    
    try {
    
    var MyObjData = parseData(p_data)
    
    myhtml = "</div></div><div class='results'><table class='table'><tr><th>Teitl</th><th></th></tr>";
    //alert("l: "+MyObjData.DataItem.length);
//    if (MyObjData == null ){
//        alert("Dim canlyniad");
//    }
    
    
    for(var i = 0; i<MyObjData.DataItem.length; i++){


        
            if(MyObjData.DataItem[i].SefydliadID == prifysgol && MyObjData.DataItem[i].MaesID == cwrs){
                myhtml += "<tr><td>"+MyObjData.DataItem[i].TeitlCymraeg+"</td><td><div class='gwybodaeth'><a href='http://"+MyObjData.DataItem[i].DolenWe+"' target='_blank'>g</a></div></td></tr>";
            }
 
    }
    myhtml += "</table></div>";
    $('#XMLContent').html(myhtml);
        
    }
    
    catch(err){
      //  alert("ERRRROR");
        myhtml = "<div class='results' style='text-align:center; padding-top: 15px; padding-bottom: 15px;'><strong>Dim Canlyniad</strong></div>";
        $('#XMLContent').html(myhtml);

        
    }
}



function gotFileEntry(fileEntry) {
    //alert("got INDEX file");
    hasObjectText = true;
    fileEntry.createWriter(gotFileWriter, fail);
    
}

function readFileEntry(fileEntry){
    
    hasObjectText = true;
    fileEntry.file(readAsText, fail);
}

function gotFileWriter(writer) {
    
    writer.onwriteend = function(evt) {
        //  alert("object writen");
        //readAsText("object.txt");
    };
    
    writer.write(ObjData);
}

function fail(error) {
    if(hasConnection == false){
        alert("Dim Cysylltiad:");
    }else{
        alert("Gwall : "+error.code);
    }
}


function failRead(error) {
    if(hasConnection == false){
        alert("Dim Cysylltiad:");
    }else{
        alert("Gwall dim data : "+error.code);
    }
}

function readAsText(file) {
    var reader = new FileReader();
    reader.onloadend = function(evt) {
        
        textObj = evt.target.result;
        //   alert("Read as text"+textObj);
        ObjData = textObj;
    };
    reader.readAsText(file);
}

function initData(p_Data){
    
    ObjData = p_Data;
    
    
}

function parseData(p_Data){
    
    /*pwysig do no remove */
     //alert("Hi"+p_Data);
//    if(p_Data == '{"DataItem" : ]}'){
//        
//     //   return null;
//    }
    
    
    var JSONData = eval('(' + p_Data + ')');

    return JSONData;
    //alert(myObject.DataItem.length)
    /*/////////////////////////////////////////*/
    
}

function onSuccess(fileSystem) {
    // alert("file: "+fileSystem.name);
    if(hasConnection == true){
        fileSystem.root.getFile("object.txt", {create: true, exclusive: false}, gotFileEntry, fail);
    }else{
        fileSystem.root.getFile("object.txt", null , readFileEntry, failRead);
        
    }
}

function onError(fileSystem) {
    alert("error");
}

/* When this function is called, Cordova has been initialized and is ready to roll */
/* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
 see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
 for more details -jm */
function onDeviceReady()
{
    checkConnection();
    // request the persistent file system
    
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    
    // do your thing!
    //	navigator.notification.alert("Cordova is working")
}



