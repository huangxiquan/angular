import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service'
import{ Router } from '@angular/router'



@Component({
  selector: 'my-heroes',
  moduleId: module.id,
  styleUrls: ['heroes.component.css'],
  template: `
  <h2>My Heroes</h2>
  <div>
    <label>Hero name:</label> <input #heroName />
    <button (click)="add(heroName.value); heroName.value=''">
      Add
    </button>
  </div>
  <ul class="heroes" >
    <li *ngFor="let hero of heroes" (click)="onSelect(hero)"
        [class.selected]="hero === selectedHero"
    >
      <span class="badge" >{{hero.id}}</span>{{hero.name}}
      <button class="delete"
       (click)="delete(hero); $event.stopPropagation()">x</button>

    </li>
  </ul>
  <div *ngIf="selectedHero">
  <h2>
    {{selectedHero.name | uppercase}} is my hero
  </h2>
  <button (click)="gotoDetail()">View Details</button>
</div>

  `,
})



export class HeroesComponent implements OnInit  {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {

  }

  gotoDetail(): void {
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
    }
}
