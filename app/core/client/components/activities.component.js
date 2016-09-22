"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Kyle on 9/12/2016.
 */
var core_1 = require('@angular/core');
var ActivitiesComponent = (function () {
    function ActivitiesComponent() {
        this.activities = [{
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
    ActivitiesComponent = __decorate([
        core_1.Component({
            templateUrl: './app/core/client/views/activities.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());
exports.ActivitiesComponent = ActivitiesComponent;
//# sourceMappingURL=activities.component.js.map