let watersType= ['Filtered Water','Mineral Water','Exotic Water'];
let bottleSize= ['1 Litre','5 Litres','10 Litres','25 Litres'];

typeDropdown=() =>{
	let opt="";
				for(var i=0;i<watersType.length;i++){
					opt += "<option>" + watersType[i] + "</option>";
				}
				console.log(opt);

				document.getElementById("water_type").innerHTML = opt;
}

typeDropdown();

sizeDropdown=() =>{
	let opt="";
				for(var i=0;i<bottleSize.length;i++){
					opt += "<option>" + bottleSize[i] + "</option>";
				}
				console.log(opt);

				document.getElementById("bottleSize").innerHTML = opt;
}

sizeDropdown();

let div1 = document.getElementById('water_type');
div1.style.padding = "0.5%";
let div2 = document.getElementById('bottleSize');
div2.style.padding = "0.5%";
let div3 = document.getElementById('fieldset_water');
div3.style.cssText = "box-shadow: 0 0 10px steelblue; border-color: steelblue; background: #EEF5F6;";

