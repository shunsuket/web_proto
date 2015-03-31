/*
	数値、最大値、カラーコード、svgを作るdivを入れると横棒を出します。
*/

function makeColorBar(number,max,colorCode,divid,width,height){

	if(!width){
		width = 200;
	}

	if(!height){
		height = 20;
	}

	var w = width;
	var h = height;
	var dataset = [number];

	var xScale = d3.scale.linear()
					.domain([0,max])
					.range([0,w]);

	var svg = d3.select("div#"+divid).append("svg").attr({width:w,height:h});

	svg.selectAll("rect")
		.data(dataset)
		.enter()
		.append("rect")
		.transition()
		.ease("exp")	
		.duration(600)
		.each("start",function(){
			d3.select(this).attr({	
				width: 0,
				height: h,
				x: 0,
				y: 0,
				fill: "rgb(230,230,230)"	
			});	
		})
		.attr({
			width: function(d){ return xScale(d); },
			height: h,
			x: 0,
			y: 0,
			fill: colorCode
		});
	

}//end function makeColorBar


