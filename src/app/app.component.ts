/// <reference types="chrome"/>
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<br />{{ valueFromExtension() }}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  valueFromExtension = signal<string>('');

  constructor() {
    chrome &&
      chrome.runtime.onMessage.addListener(({ data }) => {
        this.valueFromExtension.set(data);
      });
  }
}
