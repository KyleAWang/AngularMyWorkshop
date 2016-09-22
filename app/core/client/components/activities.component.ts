/**
 * Created by Kyle on 9/12/2016.
 */
import {Component} from '@angular/core';

@Component({
    templateUrl: './app/core/client/views/activities.html'
})
export class ActivitiesComponent {
    activities = [{
        'name': 'Treadmills',
        'type': 'Treadmills Running',
        'start': '21/09/2016',
        'distance': 8.23,
        'time': '35:35',
        'avg speed': '4:50',
        'max speed': '4:25',
        'elevation gain': 0,
        'avg hr': 166,
        'max hr': 178,
        'calories': 342
    }, {
        'name': 'Three Kings Hiking',
        'type': 'Hiking',
        'start': '11/09/2016',
        'distance': 3.23,
        'time': '40.37',
        'avg speed': '13:07',
        'max speed': '8:09',
        'elevation gain': 11,
        'avg hr': 20,
        'max hr': 114,
        'calories': 215
    }, {
        'name': 'Treadmills',
        'type': 'Treadmills Running',
        'start': '20/09/2016',
        'distance': 8.23,
        'time': '35:35',
        'avg speed': '4:50',
        'max speed': '4:25',
        'elevation gain': 0,
        'avg hr': 166,
        'max hr': 178,
        'calories': 342
    }];

}
