import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input('variant') variant: 'primary' | "default" | "text" | "link" = 'primary'
  @Input('type') type: 'button' | "submit" = 'button'
  @Input('label') label: string = ''
  @Input('size') size: 'default' | 'small' | 'large' = 'default'
  @Input('icon') icon?: string = ''
  @Input('loading') loading: boolean = false
  @Input('disabled') disabled: boolean = false
  @Output('onClick') onClick = new EventEmitter<any>()

  onButtonClick() {
    this.onClick.emit()
  }
}
