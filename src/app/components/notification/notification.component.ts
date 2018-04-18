import { Input, Component } from '@angular/core';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})

export class NotificationComponent {
    @Input()
    public alerts: Array<IAlert> = [];
    private backup: Array<IAlert>;
    podcasts : any[] = [
        {name: 'Radical Player',
            img: 'radicalplayer.png',
            link: 'https://twitter.com/coolplayerFM'},
        {name: 'GAMELX',
            img: 'gamelx.jpg',
            link: 'https://twitter.com/GAMELX'},
        {name: 'Yo tambien opino',
            img: 'yotambienopino.jpg',
            link: 'https://twitter.com/yotambienopino1',
        },
        {
            name: 'EliteCast',
            img: 'elitecast.jpg',
            link: 'https://twitter.com/EliteCast_'
        }

    ];

    constructor() {
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Well done!',
            message: 'You successfully read this important alert message.',
            icon: 'ui-2_like'
        }, {
            id: 2,
            strong: 'Heads up!',
            type: 'info',
            message: 'This is an info alert',
            icon: 'travel_info'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert',
            icon: 'ui-1_bell-53'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Oh snap!',
            message: 'This is a danger alert',
            icon: 'objects_support-17'
        });
        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    }

    public closeAlert(alert: IAlert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}

export interface IAlert {
    id: number;
    type: string;
    strong?: string;
    message: string;
    icon?: string;
}
