
$(function(){
///////////////////////////////////////////////////////
	var r = $("#output");
	var p = $("#progress");
	
	var num1 = "";
	var num2 = "";
	var operator = "";
	var result = "";
	var needClear = false;
	var tmpNum1 = "";
	var tmpNum2 = "";
	var tmpOperator ="";
	var isEqual = false;
	$(document).on({
		"keypress":function(e){
			var key = e.keyCode;
			if(key == 48)
				zero();
			else if(key == 49)
				one();
			else if(key == 50)
				two();
			else if(key == 51)
				three();
			else if(key == 52)
				four();
			else if(key == 53)
				five();
			else if(key == 54)
				six();
			else if(key == 55)
				seven();
			else if(key == 56)
				eight();
			else if(key == 57)
				nine();
			else if(key == 46)
				dot();
			else if(key == 43)
				plus();
			else if(key == 45)
				minus();
			else if(key == 42)
				multi();
			else if(key == 47)
				div();
			else if(key == 37)
				mod();
			else if(key == 61 || key == 13)
				equal();
		},
		"keydown":function(e){
			if(e.keyCode==46)
				c();
			else if(e.keyCode==8)
				backspace();
			else if(e.keyCode==110)
				dot();
		}
	}
	);
	
	$("#0").on("click",zero);
	
	$("#1").on("click",one);
	
	$("#2").on("click",two);

	$("#3").on("click",three);
	
	$("#4").on("click",four);
	
	$("#5").on("click",five);
	
	$("#6").on("click",six);
	
	$("#7").on("click",seven);
	
	$("#8").on("click",eight);
	
	$("#9").on("click",nine);
	
	$("#dot").on("click",dot);
	
	$("#plus").on("click",plus);
	
	$("#minus").on("click",minus);
	
	$("#multi").on("click",multi);
	
	$("#div").on("click",div);
	
	$("#mod").on("click",mod);
	
	$("#c").on("click",c);
	
	$("#equal").on("click",equal);
	
	function cal(n1, operator, n2){
		var E = Number('1e'+5);
		if(operator=="+"){
			return ((n1+n2)*E)/E;
		} else if(operator=="-"){
			return n1-n2;
		} else if(operator=="*"){
			return n1*n2;
		} else if(operator=="/"){
			return n1/n2;
		} else if(operator=="%"){
			return n1%n2;
		}
	}
	
	function zero(){
		if(r.text().indexOf("0")==0 && r.text().length==1){
			return;
		}
		if(needClear){
			r.text("");
			needClear = false;
		}
		r.append("0")
		$(this).blur();
	}
	
	function one(){
		if(r.text().indexOf("0")==0 && r.text().length==1)
			r.text("");
		if(needClear){
			r.text("");
			needClear = false;
		}
		r.append("1");
		$(this).blur();
	}
	
	function two(){
		if(r.text().indexOf("0")==0 && r.text().length==1)
			r.text("");
		if(needClear){
			r.text("");
			needClear = false;
		}
		r.append("2");
		$(this).blur();
	}
	
	function three(){
		if(r.text().indexOf("0")==0 && r.text().length==1)
			r.text("");
		if(needClear){
			r.text("");
			needClear = false;
		}
		r.append("3");
		$(this).blur();
	}
	
	function four(){
		if(r.text().indexOf("0")==0 && r.text().length==1)
			r.text("");
		if(needClear){
			r.text("");
			needClear = false;
		}
		r.append("4");
		$(this).blur();
	}
	
	function five(){
		if(r.text().indexOf("0")==0 && r.text().length==1)
			r.text("");
		if(needClear){
			r.text("");
			needClear = false;
		}
		r.append("5");
		$(this).blur();
	}
	
	function six(){
		if(r.text().indexOf("0")==0 && r.text().length==1)
			r.text("");
		if(needClear){
			r.text("");
			needClear = false;
		}
		r.append("6");
		$(this).blur();
	}
	
	function seven(){
		if(r.text().indexOf("0")==0 && r.text().length==1)
			r.text("");
		if(needClear){
			r.text("");
			needClear = false;
		}
		r.append("7");
		$(this).blur();
	}
	
	function eight(){
		if(r.text().indexOf("0")==0 && r.text().length==1)
			r.text("");
		if(needClear){
			r.text("");
			needClear = false;
		}
		r.append("8");
		$(this).blur();
	}
	
	function nine(){
		if(r.text().indexOf("0")==0 && r.text().length==1)
			r.text("");
		if(needClear){
			r.text("");
			needClear = false;
		}
		r.append("9");
		$(this).blur();
	}
	
	function dot(){
		if(r.text().indexOf(".")==-1)
			r.append(".");
		$(this).blur();
	}
	
	function plus(){
		$(this).blur();
		if(operator=="+" && needClear==true)
			return;
		else if(operator != "+" && needClear==true){
			operator = "+";
			p.text(p.text().slice(0,-1)+" "+operator);
			return;
		}
		
		if(num1.length==0){
			num1 = parseFloat(r.text());
			operator = "+";
			needClear = true;
			p.append(r.text()+" "+operator);
		}
		else{
			num1 = cal(num1,operator,parseFloat(r.text()));
			operator = "+";
			needClear = true;
			p.append(r.text()+" "+operator);
			r.text(num1);
		}
	}
	
	function minus(){
		$(this).blur();
		if(operator=="-" && needClear==true)
			return;
		else if(operator != "-" && needClear==true){
			operator = "-";
			p.text(p.text().slice(0,-1)+" "+operator);
			return;
		}
		
		if(num1.length==0){
			num1 = parseFloat(r.text());
			operator = "-";
			needClear = true;
			p.append(r.text()+" "+operator);
		}
		else{
			num1 = cal(num1,operator,parseFloat(r.text()));
			operator = "-";
			needClear = true;
			p.append(r.text()+" "+operator);
			r.text(num1);
		}
	}
	
	function multi(){
		$(this).blur();
		if(operator=="*" && needClear==true)
			return;
		else if(operator != "*" && needClear==true){
			operator = "*";
			p.text(p.text().slice(0,-1)+" "+operator);
			return;
		}
		
		if(num1.length==0){
			num1 = parseFloat(r.text());
			operator = "*";
			needClear = true;
			p.append(r.text()+" "+operator);
		}
		else{
			num1 = cal(num1,operator,parseFloat(r.text()));
			operator = "*";
			needClear = true;
			p.append(r.text()+" "+operator);
			r.text(num1);
		}
	}
	
	function div(){
		$(this).blur();
		if(operator=="/" && needClear==true)
			return;
		else if(operator != "/" && needClear==true){
			operator = "/";
			p.text(p.text().slice(0,-1)+" "+operator);
			return;
		}
			
		
		if(num1.length==0){
			num1 = parseFloat(r.text());
			operator = "/";
			needClear = true;
			p.append(r.text()+" "+operator);
		}
		else{
			num1 = cal(num1,operator,parseFloat(r.text()));
			operator = "/";
			needClear = true;
			p.append(r.text()+" "+operator);
			r.text(num1);
		}
	}
	
	function mod(){
		$(this).blur();
		if(operator=="%" && needClear==true)
			return;
		else if(operator != "%" && needClear==true){
			operator = "%";
			p.text(p.text().slice(0,-1)+" "+operator);
			return;
		}
		
		if(num1.length==0){
			num1 = parseFloat(r.text());
			operator = "%";
			needClear = true;
			p.append(r.text()+" "+operator);
		}
		else{
			num1 = cal(num1,operator,parseFloat(r.text()));
			operator = "%";
			needClear = true;
			p.append(r.text()+" "+operator);
			r.text(num1);
		}
	}
	
	function c(){
		$(this).blur();
		num1="";
		num2="";
		operator="";
		r.text("0");
		p.text("");
	}
	
	function equal(){
		$(this).blur();
		num2 = parseFloat(r.text());
		if(operator=="+"){
			result = num1+num2;
			
			tempNum1 = result;
			tempNum2 = num2;
			tmpOperator = operator;
			
			num1 = "";
			num2 = "";
			operator="";
			p.text("");
			r.text(result);
		} else if(operator=="-"){
			result = num1-num2;
			
			tempNum1 = result;
			tempNum2 = num2;
			tmpOperator = operator;
			
			num1 = "";
			num2 = "";
			operator="";
			p.text("");
			r.text(result);
		} else if(operator=="*"){
			result = num1*num2;
			
			tempNum1 = result;
			tempNum2 = num2;
			tmpOperator = operator;
			
			num1 = "";
			num2 = "";
			operator="";
			p.text("");
			r.text(result);
		} else if(operator=="/"){
			result = num1/num2;
			
			tempNum1 = result;
			tempNum2 = num2;
			tmpOperator = operator;
			
			num1 = "";
			num2 = "";
			operator="";
			p.text("");
			r.text(result);
		} else if(operator=="%"){
			result = num1%num2;
			
			tempNum1 = result;
			tempNum2 = num2;
			tmpOperator = operator;
			
			num1 = "";
			num2 = "";
			operator="";
			p.text("");
			r.text(result);
		} else if(tmpOperator=="+"){
			result = tempNum1+tempNum2;
			tempNum1 = result;
			r.text(result);
			isEqual=true;
		} else if(tmpOperator=="-"){
			result = tempNum1-tempNum2;
			tempNum1 = result;
			r.text(result);
			isEqual=true;
		} else if(tmpOperator=="*"){
			result = tempNum1*tempNum2;
			tempNum1 = result;
			r.text(result);
			isEqual=true;
		} else if(tmpOperator=="/"){
			result = tempNum1/tempNum2;
			tempNum1 = result;
			r.text(result);
			isEqual=true;
		} else if(tmpOperator=="%"){
			result = tempNum1%tempNum2;
			tempNum1 = result;
			r.text(result);
			isEqual=true;
		} 
	}
	
	function backspace(){
		$(this).blur();
		if(r.text().indexOf("0")==0 && r.text().length==1)
			return;
		
		r.text(r.text().slice(0,-1));
	}
///////////////////////////////////////////////////////
});


