import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit, OnDestroy {
    data : Date = new Date();

    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;

    date: {year: number, month: number};
    model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;
    private podcasts : any[] = [
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
        },
        {
            name: 'La ultima partida',
            img: 'ultimapartida.jpg',
            link: 'https://twitter.com/LaUltimaPartida'
        },
        {
            name: 'Game Over',
            img: 'gameover.png',
            link: 'https://twitter.com/portalgameover'
        },
        {name: 'Sin pelos en los bits',
        img: 'sinpelosenlosbits.jpg',
        link: 'https://twitter.com/SinPelosBits'},
        {name:'Que movida los 80',
        img:'quemovidalos80.jpg',
        link:'https://twitter.com/quemovidalos80'},
        {
            name: 'Reserva de maná',
            img: 'reservademana.jpg',
            link: 'https://twitter.com/reservademana'
        },
        {
            name: 'El complejo Lambda',
            img: 'complejolambda.png',
            link: 'https://twitter.com/complejolambda'
        }

    ];
    constructor( private renderer : Renderer, config: NgbAccordionConfig) {
        config.closeOthers = true;
        config.type = 'info';
    }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    }
    ngOnDestroy(){
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
}
