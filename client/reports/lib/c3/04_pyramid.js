(function(window){

	"use strict";
	//Occupy the global variable of Chart, and create a simple base class
	var Pyramid = function(id, data, options){

    /* edit/input your data */
		if(! data) {
	    data = [
	      {"sharedLabel": "Category 1", "barData1": 43041, "barData2": 40852},
	      {"sharedLabel": "Category 2", "barData1": 38867, "barData2": 36296},
	      {"sharedLabel": "Category 3", "barData1": 41748, "barData2": 40757},
	      {"sharedLabel": "Category 4", "barData1": 24831, "barData2": 23624},
	      {"sharedLabel": "Category 5", "barData1": 15764, "barData2": 15299},
	      {"sharedLabel": "Category 6", "barData1": 17006, "barData2": 16071},
	      {"sharedLabel": "Category 7", "barData1": 24309, "barData2": 23235},
	      {"sharedLabel": "Category 8", "barData1": 46756, "barData2": 46065},
	      {"sharedLabel": "Category 9", "barData1": 41923, "barData2": 41704},
	      {"sharedLabel": "Category 10", "barData1": 42565, "barData2": 42159},
	      {"sharedLabel": "Category 11", "barData1": 44316, "barData2": 45468},
	      {"sharedLabel": "Category 12", "barData1": 42975, "barData2": 44223},
	      {"sharedLabel": "Category 13", "barData1": 36755, "barData2": 39452},
	      {"sharedLabel": "Category 14", "barData1": 31578, "barData2": 34063},
	      {"sharedLabel": "Category 15", "barData1": 10328, "barData2": 11799},
	      {"sharedLabel": "Category 16", "barData1": 13917, "barData2": 14949},
	      {"sharedLabel": "Category 17", "barData1": 7920, "barData2": 8589},
	      {"sharedLabel": "Category 18", "barData1": 9003, "barData2": 10397},
	      {"sharedLabel": "Category 19", "barData1": 14322, "barData2": 16832},
	      {"sharedLabel": "Category 20", "barData1": 12369, "barData2": 15836},
	      {"sharedLabel": "Category 21", "barData1": 8710, "barData2": 12377},
	      {"sharedLabel": "Category 22", "barData1": 5853, "barData2": 12213}
	    ];
		}

		let height = data.length*48;


					var femaleClass;
					var maleClass;

					if(data['0'].barData1 < data['0'].barData2) {
						femaleClass = "winner";
						maleClass = "looser";
					} else {
						maleClass = "winner";
						femaleClass = "looser";
					}

    /* edit these settings freely */
    var w = options.width,
        h = height,
        topMargin = 55,
        labelSpace = 62,
        innerMargin = w/2+labelSpace,
        outerMargin = 15,
        gap = 2,
        dataRange = d3.max(data.map(function(d) { return Math.max(d.barData1, d.barData2) }));
        var leftLabel = options.leftLabel,
        rightLabel = options.rightLabel;

    /* edit with care */
    var chartWidth = w - innerMargin - outerMargin,
        barWidth = h / data.length,
        yScale = d3.scale.linear().domain([0, data.length]).range([0, h-topMargin]),
        total = d3.scale.linear().domain([0, dataRange]).range([0, chartWidth - labelSpace]),
        commas = d3.format(",.0f");

    /* main panel */
    var vis = d3.select('#'+id).append("svg")
        .attr("width", w)
				.attr('id', id)
        .attr("height", "200");

    /* barData1 label */
    vis.append("text")
      .attr("class", "label text-muted")
      .text(leftLabel)
      .attr("x", w-innerMargin)
      .attr("y", topMargin-20)
      .attr("text-anchor", "end");

    /* barData2 label */
    vis.append("text")
      .attr("class", "label text-muted")
      .text(rightLabel)
      .attr("x", innerMargin)
      .attr("y", topMargin-20);

    /* female bars and data labels */
    var bar = vis.selectAll("g.bar")
        .data(data)
      	.enter().append("g")
        .attr("class", "bar")
        .attr("transform", function(d, i) {
          return "translate(0," + (yScale(i) + topMargin + 45) + ")";
        });

    var wholebar = bar.append("rect")
        .attr("width", w)
        .attr("height", barWidth-gap)
        .attr("fill", "none")
        .attr("pointer-events", "all");

    var highlight = function(c) {
      return function(d, i) {
        bar.filter(function(d, j) {
          return i === j;
        }).attr("class", c);
      };
    };

    bar
      .on("mouseover", highlight("highlight bar"))
      .on("mouseout", highlight("bar"));


    bar.append("rect")
        .attr("class", "femalebar "+femaleClass)
        .attr("height", barWidth-gap-20);

    bar.append("text")
        .attr("class", "femalebar "+femaleClass)
        .attr("dx", -3)
        .attr("dy", "1em")
        .attr("text-anchor", "end");

		bar.append("text")
        .attr("class", "liftNumber")
				.attr("dx", w-innerMargin)
        .attr("dy", -10)
				.attr("text-anchor", "end")
				.attr('fill', GraphPrimary)
				.text('+ '+options.lift+'% lift');

		var parent =	bar.append("text")
		        .attr("class", "text-muted lift-description")
						.attr("dx", w-innerMargin)
						.attr("dy", 50)
						.attr("text-anchor", "end")
						.attr('fill', GraphPrimary);

						parent.append('tspan')
						.attr("text-anchor", "end")
						.text('In consideration for your brand compared to your');

						parent.append('tspan')
						.attr("x", w-innerMargin)
						.attr("dy", 18)
						.attr("text-anchor", "end")
						.text(' competitors when leveraging Bazaarvoice Advertising.')



    bar.append("rect")
        .attr("class", "malebar "+maleClass)
        .attr("height", barWidth-gap-20)
        .attr("x", innerMargin);

    bar.append("text")
        .attr("class", "malebar "+maleClass)
        .attr("dx", 3)
        .attr("dy", "1em");

    /* sharedLabels */
    bar.append("text")
        .attr("class", "shared text-muted")
        .attr("x", w/2)
        .attr("dy", "1em")
        .attr("text-anchor", "middle")
        .text(function(d) { return d.sharedLabel; });

    d3.select("#generate").on("click", function() {
      for (var i=0; i<data.length; i++) {
        data[i].barData1 = Math.random() * dataRange;
        data[i].barData2 = Math.random() * dataRange;
      }
      refresh(id, data);
    });

    refresh(id, data);

    function refresh(id, data) {
			var vis = d3.select('#'+id);

      var bars = vis.selectAll("g.bar")
          .data(data);
      bars.selectAll("rect.malebar")
        .transition()
          .attr("width", function(d) { return total(d.barData1); });
      bars.selectAll("rect.femalebar")
        .transition()
          .attr("x", function(d) { return innerMargin - total(d.barData2) - 2 * labelSpace; })
          .attr("width", function(d) { return total(d.barData2); });

      bars.selectAll("text.malebar")
          .text(function(d) { return d.barData1.toString()+"%"; })
        .transition()
          .attr("x", function(d) { return innerMargin + total(d.barData1); });
      bars.selectAll("text.femalebar")
          .text(function(d) { return d.barData2.toString()+"%"; })
        .transition()
          .attr("x", function(d) { return innerMargin - total(d.barData2) - 2 * labelSpace; });


			bars.selectAll('.winner')
			.attr("style", "fill:"+GraphPrimary+';')
			bars.selectAll('.looser')
			.attr("style", "fill:"+GraphNeutral+';')
    }


  }
  window.Pyramid = Pyramid;


})(window);
