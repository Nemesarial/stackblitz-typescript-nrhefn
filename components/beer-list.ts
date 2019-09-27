import { LitElement, html, property, customElement } from 'lit-element';

@customElement('beer-list')
export class SimpleGreeting extends LitElement {
  @property() beers = []

  render() {
    return html`<div><slot></slot></div>`;
  }
}