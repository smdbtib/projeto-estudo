import { Repository } from './modelos/repository';
import { GithubService } from './../../compartilhado/services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-github',
  templateUrl: './app-github.component.html',
  styleUrls: ['./app-github.component.scss'],
})
export class AppGithubComponent implements OnInit {
  userName: string = '';
  repositories: Repository[] = [];

  loading: boolean = false;
  error: boolean = false;

  getUserRepositories() {
    if (this.userName.length > 0) {
      this.loading = true;
      this.error = false;
      this.githubService.getUserRepositories(this.userName).subscribe({
        next: (data) => {
          this.repositories = data;
          this.loading = false;
        },
        error: (erro) => {
          this.loading = false;
          this.error = true;
          this.repositories = [];
        },
      });
    }
  }
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {}
}
