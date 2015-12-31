d3.json("http://dorisofsky.github.io/taiwan_realtime2/county.json", function(topodata) {
  var features = topojson.feature(topodata, topodata.objects["county"]).features;
  var path = d3.geo.path().projection( // 路徑產生器
    d3.geo.mercator().center([121,24]).scale(6000) // 座標變換函式
  );
  d3.select("svg").selectAll("path").data(features)
    .enter().append("path").attr("d",path);
  });