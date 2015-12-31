	var width = 1000;
	var height = 1000;

	var svg = d3.select("body").append("svg")
	  .attr("width", width)
	  .attr("height", height)
	  .append("g")
	  .attr("transform", "translate(0,0)");

	var projection = d3.geo.mercator()
	  .center([121, 24])
	  .scale(6000)
	  .translate([width / 2, height / 2]);

	var path = d3.geo.path()
	  .projection(projection);
        
	var color = d3.scale.category20();

	    d3.json("http://dorisofsky.github.io/taiwan_realtime2/county.json", function(topodata) {
            var features = topojson.feature(topodata, topodata.objects.county).features;
	        
	        d3.select("svg").selectAll("path").data(features)
	          .enter().append("path").attr("d", path);
	      };