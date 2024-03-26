'use strict';

(function (angular) {
    // Ensure 'app' module is already declared elsewhere with angular.module('app', []);
    var app = angular.module('app');

    app.controller('TestController', ['$scope', function ($scope) {
        // Assuming d3 version 3 is loaded globally

        // Function to dynamically load D3 v6.6
        function loadD3v6(callback) {
            var script = document.createElement('script');
            script.src = 'https://d3js.org/d3.v6.min.js'; // URL to D3 v6.6
            script.onload = function () {
                // Make D3 v6 available to this block
                callback(d3);
            };
            document.head.appendChild(script);
        }

        // Load D3 v6.6 and use it
        loadD3v6(function (d3v6) {
            // d3v6 is now locally available
            console.log('--- D3 version inside controller:', d3v6.version);

            // Example usage of d3v6
            // Make sure the element with class 'chart' exists in your HTML
            const data = [4, 8, 15, 16, 23, 42];
            const scale = d3v6.scaleLinear()
                .domain([0, d3v6.max(data)])
                .range([0, 420]);

            d3v6.select('.chart')
                .selectAll('div')
                .data(data)
                .enter().append('div')
                .style('width', function (d) { return scale(d) + 'px'; })
                .text(function (d) { return d; });
        });



    }]);
})(angular);
