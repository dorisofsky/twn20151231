d3.json("http://dorisofsky.github.io/taiwan_realtime2/county.json", function(error, tw) {
  if (error) return console.error(error);

  svg.append("path")
      .datum(topojson.feature(tw, tw.objects.county))
      .attr("d", d3.geo.path().projection(d3.geo.mercator()));
});

