import { newSpecPage } from '@stencil/core/testing';
import { IconHvif } from './icon-hvif';

describe('icon-hvif', () => {
  it('renders', async () => {

    const { root } = await newSpecPage({
      components: [IconHvif],
      html: '<icon-hvif data="6e636966010500010a042020206060606020010a00010000"></icon-hvif>',
    });
    
    expect(root).toEqualHtml(`
      <icon-hvif  data="6e636966010500010a042020206060606020010a00010000">
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </icon-hvif>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [IconHvif],
      html: `<icon-hvif name="Stencil" data="6e636966010500010a042020206060606020010a00010000"></icon-hvif>`,
    });
    
    expect(root).toEqualHtml(`
      <icon-hvif name="Stencil" data="6e636966010500010a042020206060606020010a00010000">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </icon-hvif>
    `);
  });
});
