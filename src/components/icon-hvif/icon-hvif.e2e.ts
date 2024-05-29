import { newE2EPage } from '@stencil/core/testing';

describe('icon-hvif', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    let data = "6e636966010500010a042020206060606020010a00010000"
    await page.setContent(`<icon-hvif data=${data}></icon-hvif>`);
    const element = await page.find('icon-hvif');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();
    let data = "6e636966010500010a042020206060606020010a00010000"
    await page.setContent(`<icon-hvif data=${data}></icon-hvif>`);
    const component = await page.find('icon-hvif');
    const element = await page.find('icon-hvif >>> div');
    expect(element.textContent).toEqual(``);

    component.setProperty('data', '6e636966010500010a042020206060606020010a00010000');
    await page.waitForChanges();
    expect(element.textContent).toEqual(``);

    component.setProperty('name', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(``);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(``);
  });
});
