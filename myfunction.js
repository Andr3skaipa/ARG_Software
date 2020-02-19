	var zp = 0;
		var ze = 0;
		var zs= 0;
		var zt = 0;
		var za = 0;
		var zl=0;
		function myFunction(pestal)
		{
			for (var x=1;x<5;x ++) 
			{
				var child = 'childElement';
				if(pestal == 'POLITICO'){
					zp ++;
					var y = 'P'+zp;	
					child = child +x;
				}
				if(pestal == 'ECONOMICO'){
					ze ++;
					var y = 'E'+ze;	
					child = child+ 2 +x;
				}
				if(pestal == 'SOCIAL'){
					zs++;
					var y = 'S'+zs;	
					child = child+ 3 +x;
				}
				if(pestal == 'TECNOLOGICO'){
					zt++;
					var y = 'T'+zt;	
					child = child+ 4 +x;
				}
				if(pestal == 'AMBIENTAL'){
					za++;
					var y = 'A'+za;	
					child = child+ 5 +x;
				}
				if(pestal == 'LEGAL'){
					zl++;
					var y = 'L'+zl;	
					child = child+ 6 +x;
				}

				console.log(y)
				var newNode = document.createElement("textarea");
				var parentDiv = document.getElementById(child).parentNode;
				var sp1 = document.getElementById(child);
				newNode.classList.add("form-control");
				newNode.id = y;
				newNode.value = y+"-";
				parentDiv.insertBefore(newNode, sp1); 
			}

		}

function botonflotante(){
	var element = document.querySelector('.conf-panel')
	element.classList.toggle("visible");
}