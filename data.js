var csv = [];
function loadCSV(cb)
{
	let count = 0;
	delete csv;
	csv = [];
	$.ajax({
		type: "GET",
		url: "e1.csv",
		dataType: "text",
		success: function (data) {
			csv[0] = data;
			count++;
			if (count == 4) {
				cb();
			}
		}
	});
	$.ajax({
		type: "GET",
		url: "e2.csv",
		dataType: "text",
		success: function (data) {
			csv[1] = data;
			count++;
			if (count == 4) {
				cb();
			}
		}
	});
	$.ajax({
		type: "GET",
		url: "e3.csv",
		dataType: "text",
		success: function (data) {
			csv[2] = data;
			count++;
			if (count == 4) {
				cb();
			}
		}
	});
	$.ajax({
	type: "GET",
		url: "total.csv",
		dataType: "text",
		success: function (data) {
			csv[3] = data;
			count++;
			if (count == 4) {
				cb();
			}
		}
	});
}
function loadGraph(min)
{
	if (csv.length < 4)
		return;
	show -= 4;
	for (let i = 0; i < 4; i++) {
		setTimeout(()=>{
			show++;
			processData(csv[i], i, min);
		}, 5);
	}
}

function processData(allText, index, start = 0)
{
	var allLinesArray = allText.split("\n");
	if(start == 0 || allLinesArray.length < start)
		start = allLinesArray.length;
	if(allLinesArray.length >= start)
	{
		var dataPoints = {
			type: "line",
			showInLegend: true,
			xValueFormatString: "HH:mm:ss DD/MM/YY",
			name: (index == 0 ? "E1" : index == 1 ? "E2" : index == 2 ? "E3" : index == 3 ? "Total" : "x"),
			dataPoints: []
		};
		for (var i = allLinesArray.length - start; i <= allLinesArray.length - 1; i++) {
			if (allLinesArray[i] != "") {
				var rowData = allLinesArray[i].split(",");
				dataPoints.dataPoints.push({ x:new Date(rowData[0]), y:parseInt(rowData[1]) });
			}
		}
		delete data[index];
		data[index] = dataPoints;
		if (show == 4) {
			drawChart2(data);
		}
	}
}
var chart, show = 4;
function drawChart2(data)
{
	//$('#chartContainer').empty();
	delete chart;
	chart = new CanvasJS.Chart("chartContainer",
	{
		zoomEnabled: true,
		title:{
			text: "Clusters Traffic",
			fontSize: 30
		},
		animationEnabled: true,
		axisX:{
			gridColor: "Silver",
			tickColor: "silver",
			valueFormatString: "HH:mm DD/MM",
			labelAngle: -50,
			labelFontSize: 12
		},
		toolTip:{
			shared:true
		},
		theme: "theme2",
		axisY: {
			gridColor: "Silver",
			tickColor: "silver",
			labelFontSize: 12
		},
		legend:{
			verticalAlign: "center",
			horizontalAlign: "right"
		},
		data: data,
		legend:
		{
			cursor:"pointer",
			itemclick:function(e)
			{
				if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible)
				{
					e.dataSeries.visible = false;
				}
				else
				{
					e.dataSeries.visible = true;
				}
				chart.render();
			}
		}
	});
	chart.render();
}

for (let i = 1; i < 4; i++) {
	$('#cluster'+i).load(function() {
	//	$('#cluster'+i).attr('src','').attr('src', $('#clusterLoad'+i).attr('src'));
		$('#clusterLoad'+i).insertAfter('#cluster'+i);
		$('#clusterLoad'+i).attr('id', 'clusterTMP'+i);
		$('#cluster'+i).attr('id', 'clusterLoad'+i);
		$('#clusterTMP'+i).attr('id', 'cluster'+i);
		$('#clusterLoad'+i).removeAttr('src');
	});
	$('#clusterLoad'+i).load(function() {
	//	$('#cluster'+i).attr('src','').attr('src', $('#clusterLoad'+i).attr('src'));
		$('#clusterLoad'+i).insertAfter('#cluster'+i);
		$('#clusterLoad'+i).attr('id', 'clusterTMP'+i);
		$('#cluster'+i).attr('id', 'clusterLoad'+i);
		$('#clusterTMP'+i).attr('id', 'cluster'+i);
		$('#clusterLoad'+i).removeAttr('src');
	});

}
setInterval(function ()
{
	updateAllUsers();
	for (var i = 1; i < 4; i++)
		$('#clusterLoad'+i).attr('src','').attr('src', '/clusters.php?'+i/*+'&'+Date.now()*/);
}, 30*1000);

setInterval(function ()
{
	loadCSV(()=>{
		loadGraph(96*min);
	});
}, 2*60*1000);

var data = [{},{},{},{}];
var min = 7;
$(document).ready(function ()
{
	loadCSV(()=>{
		loadGraph(96*min);
	});
});

$('#clusters div').click(function() {
//    setTimeout(function(){
        if (typeof this.big == 'undefined' || !this.big)
		{
			this.big = true;
			this.pos = $(this).position();
			$(this).css({position: 'absolute', top: this.pos.top, left: this.pos.left}).animate({width: '98vw', top: 0, left: 0}, 500);
			$(this).find('img').css({height:"auto"});
			$('body').animate( { scrollTop: 0 }, 250 );
		}
		else
		{
			this.big = false;
			$(this).animate({width: '30vw', top: this.pos.top, left: this.pos.left}, 500, function(){$(this).css({position: 'initial'})});
			$(this).find('img').css({height:"auto"}).animate({height:"inherit"}, 500);
			$('body').animate( { scrollTop: 0 }, 250 );
		}
//    }.bind({t:this}), 50);
});
