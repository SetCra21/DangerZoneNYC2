$(function() {
      $('#container').highcharts({
          chart: {
            type: 'line'
          },
          title: {
            text: 'Change from 2004-2014'
          },
          subtitle: {
            text: 'Source: nyc.gov'
          },
          xAxis: {
            categories: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', ]
          },
          yAxis: {
            title: {
              text: 'Occurrences'
            }
          },
          plotOptions: {
            line: {
              dataLabels: {
                enabled: true
              },
              enableMouseTracking: false
            }
          },
          series: [{
              name: 'Major Felonies',
              data: [142093, 135475, 128682, 121009, 117956, 106730, 105115, 106669, 111147, 111335, 106722, ]
            }],
          });
      });