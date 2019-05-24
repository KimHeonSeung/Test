document.write("<script src='js/jquery.js'></script>");

$(function(){
	var n1="";
	var total=0;
	var op="";
	var text="";
	var isNumber=false;
	
	$(document).on("keydown", function(e) {
		console.log(e.keyCode);
		keyboard_number(e);
		keyboard_operation(e);
		keyboard_enter(e);
		keyboard_back(e);
		keyboard_esc(e);
	})
	
	function keyboard_number(e) {
		if(e.keyCode=="97"){
			n1+=1;
		}else if(e.keyCode=="98"){
			n1+=2;
		}else if(e.keyCode=="99"){
			n1+=3;
		}else if(e.keyCode=="100"){
			n1+=4;
		}else if(e.keyCode=="101"){
			n1+=5;
		}else if(e.keyCode=="102"){
			n1+=6;
		}else if(e.keyCode=="103"){
			n1+=7;
		}else if(e.keyCode=="104"){
			n1+=8;
		}else if(e.keyCode=="105"){
			n1+=9;
		}else if(e.keyCode=="96"){
			n1+=0;
		}else if(e.keyCode=="110"){
			n1+=".";
		}else{
			return;
		}
		
		console.log(e.keyCode);
		$("input").val(n1);
		isNumber=true;	
	}
	
	function keyboard_operation(e) {
		if(isNumber==true){
			
			if(e.keyCode=="111"){
				text+=n1;
				text+="/";
				op="/";
			}else if(e.keyCode=="106"){
				text+=n1;
				text+="*";
				op="*";
			}else if(e.keyCode=="109"){
				text+=n1;
				text+="-";
				op="-";
			}else if(e.keyCode=="107"){
				text+=n1;
				text+="+";
				op="+";
			}else{
				return;
			}

			$("textarea").text(text);
			
			var value=n1;
			
			total=eval(text.substr(0,text.length-1));
			console.log(total);
			$("input").val(total);
			
			n1="";
			isNumber=false;
		}
	}
	
	function keyboard_enter(e) {		
		if(e.keyCode=="13"){
			var nn=$("input").val();
			
			$("input").val(eval(total+op+nn));
			$("textarea").text("");
		}else{
			return;
		}
		
		n1="";
		total=0;
		op="";
		text="";
		isNumber=false;
	}
	
	function keyboard_esc(e) {
		if(e.keyCode=="27"){
			n1="";
			total=0;
			op="";
			text="";
			isNumber=false;
			
			$("textarea").text("");
			$("input").val("");
		}else{
			return;
		}
	}
	
	function keyboard_back(e) {
		if(e.keyCode=="8"){
			if(n1!=""){
				var str=$("input").val();
				
				$("input").val(str.substr(0,str.length-1));
				n1=n1.substr(0,n1.length-1);
				text=text.substr(0,text.length-1);
			}
		}
	}
	
	$(".num").on("click", function() {
	
		n1+=$(this).val();
		
		console.log(n1);
		$("input").val(n1);
			
		isNumber=true;
	})
	
	$(".op").on("click", function() {
		if(isNumber==true){
			text+=n1;
			text+=$(this).val();
			op=$(this).val();
			$("textarea").text(text);
			
			var value=n1;
			
			total=eval(text.substr(0,text.length-1));
			console.log(total);
			$("input").val(total);
			
			n1="";
			
			isNumber=false;
		}
	})
	
	$(".result").on("click", function() {
		var nn=$("input").val();
		
		$("input").val(eval(total+op+nn));
		$("textarea").text("");
		
		n1="";
		total=0;
		op="";
		text="";
		isNumber=false;
	})
	
	$(".C").on("click", function() {
		n1="";
		total=0;
		op="";
		text="";
		isNumber=false;
		
		$("textarea").text("");
		$("input").val("");
	})
	
	$(".CE").on("click", function() {
		n1="";
		isNumber=false;
		
		$("input").val("");
	})
	
	$(".BS").on("click", function() {
		if(n1!=""){
			var str=$("input").val();
			
			$("input").val(str.substr(0,str.length-1));
			n1=n1.substr(0,n1.length-1);
			text=text.substr(0,text.length-1);
		}
	})
	
	$(".sqrt").on("click", function() {
		$("input").val(Math.sqrt(n1));
		n1=Math.sqrt(n1);
		
		n="";
	})
	
	$(".PM").on("click", function() {
		$("input").val(n1*(-1));
		n1=n1*(-1);
		
		n="";
	})
	
	$(".reverse").on("click", function() {
		$("input").val(1/n1);
		n1=1/n1;
		
		n="";
	})
});