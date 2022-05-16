var header=document.createElement("h1");
header.setAttribute("id","title");
header.innerHTML='CALCULATOR';

var des=document.createElement("p");
des.innerHTML="Calculator using DOM"
des.setAttribute("id","description")



var firstdiv=document.createElement("div");
firstdiv.setAttribute("class","container");

var seconddiv=document.createElement("div");
seconddiv.setAttribute("class","calculator");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","result");
input.setAttribute("placeholder","0");

var aclr=document.createElement("button");
aclr.addEventListener("click",allclear);
aclr.setAttribute("id","clear");
aclr.innerHTML='AC';

var dele =document.createElement("button");
dele.setAttribute("class","del-button")
dele.addEventListener("click",del);
dele.innerHTML='DEL';


var modulus =createelement("button","%",'%');
var divide =createelement("button","/",'/');
var seven =createelement("button","7",'7');
var eight =createelement("button","8",'8');
var nine =createelement("button","9",'9');
var multiply =createelement("button","*",'*');
var four =createelement("button","4",'4');
var five =createelement("button","5",'5');
var six =createelement("button","6",'6');
var minus =createelement("button","-","subtract");
var one =createelement("button","1",'1');
var two =createelement("button","2",'2');
var three =createelement("button","3",'3');
var addition =createelement("button","+","add");
var double0 =createelement("button","00",'00');
var zero =createelement("button","0",'0');

var calculater =document.createElement("button");
calculater.addEventListener("click",function(){calculate()});
calculater.setAttribute("class","equall");
calculater.setAttribute("id","equal");
calculater.innerHTML='=';



seconddiv.appendChild(input);
seconddiv.appendChild(aclr) ;
seconddiv.appendChild(dele) ;
seconddiv.appendChild(modulus);
seconddiv.appendChild(divide) ;
seconddiv.appendChild(seven) ;
seconddiv.appendChild(eight) ;
seconddiv.appendChild(nine) ;
seconddiv.appendChild(multiply) ;
seconddiv.appendChild(four) ;
seconddiv.appendChild(five) ;
seconddiv.appendChild(six) ;
seconddiv.appendChild(minus) ;
seconddiv.appendChild(one) ;
seconddiv.appendChild(two) ;
seconddiv.appendChild(three) ;
seconddiv.appendChild(addition); 
seconddiv.appendChild(double0); 
seconddiv.appendChild(zero);
seconddiv.appendChild(calculater);

firstdiv.append(seconddiv);

document.body.append(header,des,firstdiv);

function createelement(elename,value,row){
       var element=document.createElement(elename);
       element.innerHTML=value;
       element.setAttribute("type","button");
       element.setAttribute("id",row);
       element.addEventListener("click",function(){display(value)});
       return element;
}

function display(res){
   document.getElementById("result").value+=res;
}
function calculate(){
   try{
        
       var output=document.getElementById("result").value;

       var temp=eval(output);

       document.getElementById("result").value=temp
   }
   
   catch(err)
   {
       alert("Invalid Input")
   }
}
function allclear(){

       document.getElementById("result").value="";
}

function del(){

   var output=document.getElementById("result").value;
   document.getElementById("result").value=output.slice(0,-1)
}