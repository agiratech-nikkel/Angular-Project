import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingUpComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() {
  }

}
