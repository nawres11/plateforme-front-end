import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Serveur } from '../../../entities/Serveur';
import { ServerService } from '../../../services/server/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, delay, first } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
})
export class ServerListComponent implements OnInit {
  public servers: any = [];
  public id: number;
  public showAddServer: boolean;
  public blurAll: boolean;
  public showModifServer: boolean;
  public showDetails: boolean;
  public reloadData$ = this.serverService.serverCreated$.pipe(
    first(),
    delay(600),
    tap((serverCreated) => this.reloadData())
  );
  public currentServer = null;
  public serverModificationForm = new FormGroup({
    intitule: new FormControl(),
    port: new FormControl(),
    url: new FormControl(),
    type: new FormControl(),
    statut: new FormControl(),
  });

  public searchKey: string;

  constructor(
    private serverService: ServerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.pipe(first()).subscribe((val) => {
      this.reloadData();
    });
  }

  ngOnInit() {
    this.blurAll = false;
  }

  reloadData() {
    this.serverService
      .getServers()
      .pipe(first())
      .subscribe((servers) => (this.servers = servers));
  }

  details(id: number) {
    this.showDetails = true;
    this.blurAll = true;
    this.serverService.getServertById(id).pipe(first()).subscribe(
      (data) => {
        this.currentServer = data;
      },
      (error1) => console.log(error1)
    );
  }

  updateServer(id: number) {
    this.showModifServer = true;
    this.blurAll = true;
    this.serverService.updateServer(id, this.currentServer).pipe(first()).subscribe(
      (success) => {
        this.reloadData();
      },

      (err) => console.error(err)
    );
  }

  addServer() {
    this.showAddServer = true;
    this.blurAll = true;
    this.router.navigate(['admin/addServer']);
  }

  closeAdd() {
    this.showDetails = false;
    this.showAddServer = false;
    this.showModifServer = false;
    this.blurAll = false;
    this.reloadData();
  }

  closeAddFromAdd($event) {
    if ($event === true) {
      this.closeAdd();
    }
  }

  onSearchClear() {
    // TODO
    throwError('not implemented');
  }

  applyFilter() {
    // TODO
    throwError('not implemented');
  }
}
