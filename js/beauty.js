let tasks=['Here are your items']; //array to store items list
			
			function listTask(){
				let results ="<ol>";
				for(let i=0;i<tasks.length;i++){
					results += "<li>" + tasks[i] + "</li>";
				}
				results += "</ol>";
				document.getElementById("taskCon").innerHTML = results;
				

			}

			listTask();
			//adding a packages
			function addTask(){
				let addTask = document.getElementById("addtask").value;
				tasks.push(addTask);
				document.getElementById("addtask").value="";
				listTask();
            	dropdown();

			}
			function dropdown(){
				let opt="";
				for(var i=0;i<tasks.length;i++){
					opt += "<option>" + tasks[i] + "</option>";
				}
				console.log(opt);

				document.getElementById("taskDropdown").innerHTML = opt;

			}
			//deleting a packages
			dropdown();
			function deletetask3(){
				let task=document.getElementById("taskDropdown").value;
				for(let i=0;i<tasks.length;i++){
					if(task==tasks[i])
						tasks.splice(i,1);
				}
				listTask();
				dropdown();
			}
			function deletetask(){
				let task=document.getElementById("taskDropdown");
				tasks.splice(task.selectedIndex,1);

				listTask();
				dropdown();
			}
