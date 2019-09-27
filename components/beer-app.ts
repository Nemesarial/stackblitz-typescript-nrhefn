import { LitElement, html, property, customElement } from 'lit-element'
import { state } from '../lib/wcstate'

window.__state=state

@customElement('beer-item')
export class BeerItem extends LitElement {
  @property({ type: Object }) beer

  render() {
    return html`<li>${this.beer.name}</li>`
  }
}


@customElement('beer-app')
export class BeerApp extends LitElement {
  updateState(state){
    
  }
  render() {
    return html
      `<div>
        <h2>Beer list</h2>
        <ul>
          ${state.beers.map(beer => html`<beer-item beer=${JSON.stringify(beer)}></beer-item>`)}
        </ul>
    </div>`;
  }
}