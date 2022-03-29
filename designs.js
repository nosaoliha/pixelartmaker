let vertical, horizontal, size, pixel, rainbow;
	size = $("#sizePicker");
	pixel = $("#pixelCanvas");
	
size.submit(function(grid) {											
		grid.preventDefault();
																										
		let vertical = $("#inputHeight").val();										
		let horizontal = $("#inputWidth").val();											
		makeGrid(vertical, horizontal);
	})
	
function makeGrid(vertical, horizontal) {
	$("tr").remove();

		for (let x = 0; x < vertical; x++) {												
			pixel.append("<tr id=table" + x + "></tr>");					
		for (let y = 0; y < horizontal; y++) {											
			$("#table" + x).append("<td></td>");							
		}
	}
	
$("td").click(function addColor() {
			let rainbow = $("#colorPicker").val();
			if ($(this).attr("style")) {
				$(this).removeAttr("style")
			} else {
				$(this).attr("style", "background-color:" + rainbow);
			}
		})
}
