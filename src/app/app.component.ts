import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    months: string[] = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'];

    source: any =
    {
        datatype: "json",
        datafields: [
            { name: 'date', type: 'date'},
            { name: 'temperature' },
			{ name: 'consigne'},
    		{ name: 'position'}
        ],
        url: 'http://localhost:9000/values'
        //url: '/sampledata/data.json'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding: any = { left: 10, top: 5, right: 10, bottom: 5 };

    titlePadding: any = { left: 50, top: 0, right: 0, bottom: 10 };
    
    xAxis: any =
    {
        dataField: 'date',
        formatFunction: (value: any) => {
            return value.getDate() + '-' + this. months[value.getMonth()] + '-' + value.getFullYear() + " " +value.getHours()+":"+value.getMinutes();
        },
        type: 'date',
        baseUnit: 'minute',
        valuesOnTicks: true,
        //minValue: '29-11-2017T10:30:00Z',
        //maxValue: '30-11-2017T12:30:00Z',
        tickMarks: {
            visible: true,
            interval: 1,
            color: '#BCBCBC'
        },
        unitInterval: 1,
        gridLines: {
            visible: true,
            interval: 3,
            color: '#BCBCBC'
        },
        labels: {
            angle: -45,
            rotationPoint: 'topright',
            offset: { x: 0, y: -25 },
			step : 10
        }
    };

    valueAxis: any =
    {
        visible: true,
        title: { text: 'Températures °Celsius<br>' },
        tickMarks: { color: '#BCBCBC' }
    };

    seriesGroups: any =
    [
        {
            type: 'line',
            series: [
                { dataField: 'temperature', displayText: 'Température' },
                { dataField: 'consigne', displayText: 'Consigne'},
                { dataField: 'position', displayText: 'Ouverture'}
            ]
        }
    ];
}