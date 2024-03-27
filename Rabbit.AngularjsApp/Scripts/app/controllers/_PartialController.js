'use strict';

(function (angular) {
    var app = angular.module('app');

    app.controller('_PartialController', ['$scope', '$rootScope', 'SharedDataService', function ($scope, $rootScope, SharedDataService) {



        $scope.pn = 'data on partial view';
        $scope.dataFromControllerOne = 'initial_data';

        $rootScope.$on('dataShared', function (event, data) {
            var sharedData = SharedDataService.getData();
            $scope.dataFromControllerOne = sharedData.key;
        });





        // Assuming d3 version 3 is loaded globally

        // Function to dynamically load D3 v6.6 using Promise
        function loadD3v6() {
            return new Promise((resolve, reject) => {
                var script = document.createElement('script');
                script.src = 'https://d3js.org/d3.v6.min.js'; // URL to D3 v6.6
                script.onload = () => resolve(d3); // Resolve the promise with d3 v6
                script.onerror = reject; // Reject the promise on error
                document.head.appendChild(script);
            });
        }

        // Use the loadD3v6 function with a promise
        loadD3v6().then(d3v6 => {
            // d3v6 is now locally available
            console.log('--- D3 version inside controller:', d3v6.version);

            //--- Example usage of d3v6 ---




            // set the dimensions and margins of the graph
            const width = 400,
                height = 400,
                margin = 40;

            // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
            const radius = Math.min(width, height) / 2 - margin;

            // append the svg object to the div called 'my_dataviz'
            const svg = d3.select("#my_dataviz")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", `translate(${width / 2}, ${height / 2})`);

            // Create dummy data
            const data = { a: 9, b: 20, c: 30, d: 8, e: 12 }

            // set the color scale
            const color = d3.scaleOrdinal()
                .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

            // Compute the position of each group on the pie:
            const pie = d3.pie()
                .value(function (d) { return d[1] })
            const data_ready = pie(Object.entries(data))

            // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
            svg
                .selectAll('whatever')
                .data(data_ready)
                .join('path')
                .attr('d', d3.arc()
                    .innerRadius(0)
                    .outerRadius(radius)
                )
                .attr('fill', function (d) { return (color(d.data[1])) })
                .attr("stroke", "black")
                .style("stroke-width", "2px")
                .style("opacity", 0.7)




            // example usage ends

        }).catch(error => {
            console.error('Failed to load D3 v6:', error);
        });




    }]);
})(angular);
