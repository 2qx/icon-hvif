import { Component, Prop, h } from '@stencil/core';
import { parseIcon } from '../../utils/hvif';
import * as HaikonSvg from '../../utils/svg.js';

@Component({
  tag: 'icon-hvif',
  styleUrl: 'icon-hvif.css',
  shadow: true,
})
export class IconHvif {
  /**
   * The name
   */
  @Prop() name: string;


  /**
 * The last name
 */
  @Prop() data: any;

/**
* The last name
*/
  @Prop() size: number;



  generateHvifSVG() {
    let sizeStr = this.size? this.size+"px" : "2em"
    let bin = Uint8Array.from(this.data.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
    let psudoFile = { "name": this.name, "type": 0, "data": bin }
    const icon = this.data ? parseIcon(psudoFile.data, this.name) : undefined
    const svg = icon ? HaikonSvg._renderers(document.createElementNS.bind(document)).renderIcon(icon, sizeStr) : undefined
    return `${svg.innerHTML}`;
  }


  render() {
    return (
      <div innerHTML={this.generateHvifSVG()} />
    );
  }
}
