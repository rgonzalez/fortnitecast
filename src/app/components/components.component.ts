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
        },
        {
            name: 'Proyecto Cromatic',
            img: 'proyecto_cromatic.png',
            link: 'https://twitter.com/P_Cromatic'
        },
        {
            name: 'Guardado Rápido',
            img: 'guardadorapido.jpg',
            link: 'https://twitter.com/GuardadoRapido'
        },
        {
            name: 'Canal GOTY',
            img: 'canalgoty.jpg',
            link: 'https://twitter.com/CanalGOTY'
        },
        {
            name: 'Marca Player DX',
            img: 'marcaplayerdx.jpg',
            link: 'https://twitter.com/MarcaPlayerDX'
        },
        {
            name: 'Zonared',
            img: 'zonared.jpg',
            link: 'https://twitter.com/zonared'
        },
        {
            name: 'La Órbita de Endor',
            img: 'laorbitadeendor.jpg',
            link: 'https://twitter.com/laORBITAdeENDOR'
        },
        {
            name: 'Podcast Soulmers',
            img: 'soulmers.jpg',
            link: 'https://twitter.com/PodcastSoulmers'
        },
        {
            name: 'Vandal Radio',
            img: 'vandal.jpg',
            link: 'https://twitter.com/VandalOnline'
        },
        {
            name: 'EresGamer',
            img: 'eresgamer.jpg',
            link: 'https://twitter.com/Eresgamercom'
        },
        {
            name: 'Mision de Audaces',
            img: 'misionaudaces.jpg',
            link: 'https://twitter.com/misiondeaudaces'
        },
        {
            name: 'Gamika',
            img: 'gamika.png',
            link: 'https://twitter.com/GamikaGames'
        },
        {
            name: 'Antihype',
            img: 'antihype.png',
            link: 'https://twitter.com/antihype_ES'
        },
        {
            name: 'Refugio 113',
            img: 'refugio113.jpg',
            link: 'https://twitter.com/Refugio_113'
        },
        {
            name: 'Zona Delta TV',
            img: 'zonadelta.png',
            link: 'https://twitter.com/ZonaDeltaNews'
        },
        {
            name: 'Zindies',
            img: 'zindies.jpg',
            link: 'https://twitter.com/_zindies'
        },
        {
            name: 'Vicioatomico',
            img: 'vicioatomico.jpg',
            link: 'https://twitter.com/VICIOATOMICO'
        },
        {
            name: 'Topal Games',
            img: 'TopalGames.jpg',
            link: 'https://twitter.com/TopalGames'
        },
        {
            name: 'Vivo entre Muggles',
            img: 'entremuggles.jpg',
            link: 'https://twitter.com/entremuggles'
        },
        {
            name: 'El Batallón Pluto',
            img: 'elbatallonpluto.jpg',
            link: 'https://twitter.com/elbatallonpluto'
        },
        {
            name: '4Players',
            img: '4Players.jpg',
            link: 'https://twitter.com/4Players'
        },
        {
            name: 'Metodologic Podcast',
            img: 'metodologic.jpg',
            link: 'https://twitter.com/Metodologic'
        },
        {
            name: 'Radio Rapture',
            img: 'Radio_Rapture.png',
            link: 'https://twitter.com/Radio_Rapture'
        },
        {
            name: 'Gamers Ocupados',
            img: 'gamersocupados.jpg',
            link: 'https://twitter.com/gamersocupados'
        },
        {
            name: 'MemoryCard',
            img: 'MemoryCardUCA.jpg',
            link: 'https://twitter.com/MemoryCardUCA'
        },
        {
            name: 'Monos de Feria',
            img: 'MonosFFM.jpg',
            link: 'https://twitter.com/MonosFFM'
        },
        {
            name: 'Porqué Podcast',
            img: 'PorquePodcast.jpg',
            link: 'https://twitter.com/PorquePodcast'
        },
        {
            name: 'Porqué Podcast',
            img: 'PorquePodcast.jpg',
            link: 'https://twitter.com/PorquePodcast'
        },
        {
            name: 'El chiringuito de los Videojuegos',
            img: 'ChiringuitoPod.jpg',
            link: 'https://twitter.com/ChiringuitoPod'
        },



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
