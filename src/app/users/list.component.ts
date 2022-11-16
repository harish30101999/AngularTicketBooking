import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../_services';
import { List } from './list';
import { ListService } from './list.service';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {

  users = null;
  list = [];
  model = new List();
  form: FormGroup;
  submitted = false;
//   accountService: any;

  constructor(private listService: ListService,
              private accountService: AccountService) {}

  ngOnInit() {
    this.accountService
      .getAll()
      .pipe(first())
      .subscribe((users) => (this.users = users));
  }

  deleteUser(id: string) {
    const user = this.users.find((x) => x.id === id);
    user.isDeleting = true;
    this.accountService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.users = this.users.filter((x) => x.id !== id);
      });
  }

  public getAllList() {
    this.listService.getAllListService().subscribe((x: any[]) => {
      this.list = x;
    });
  }

  editList(id: string) {
    alert(id);
     this.listService
    .getListService(id)
    .subscribe((data: any) => (this.model = data));
  }


  deleteList(id) {
    alert(id);
    this.listService.deleteListService(id).subscribe((data) => {
      this.getAllList();
    });
  }


  addList() {
    alert(JSON.stringify(this.model));
    if (!this.model.id) {
      // alert(JSON.stringify(this.model));
      this.listService.createListService(this.model).subscribe((data) => {
        this.getAllList();
        this.model = new List();
      });
    } else {
      // alert(JSON.stringify(this.model));
      this.listService
        .updateListService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllList();
          this.model = new List();
        });
    }
  }
}
