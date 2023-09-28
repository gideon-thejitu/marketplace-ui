import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [
    NzButtonModule,
    NzIconModule
  ],
  standalone: true
})
export class ButtonComponent {
  @Input() variant: 'primary' | "default" | "text" | "link" = 'primary'
  @Input() type: 'button' | "submit" = 'button'
  @Input() label = ''
  @Input() size: 'default' | 'small' | 'large' = 'default'
  @Input() icon?: string = ''
  @Input() loading = false
  @Input() disabled = false
  @Output() onClick = new EventEmitter<any>()

  onButtonClick() {
    this.onClick.emit()
  }
}
