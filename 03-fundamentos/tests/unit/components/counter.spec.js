import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter Component", () => {
  // test("debe de hacer match con el snapshot", () => {

  //   const wrapper = shallowMount(Counter);

  //   expect(wrapper.html()).toMatchSnapshot()
  // });

  test('h2 debe tener el valor por defecto Counter', () => {
    const wrapper = shallowMount(Counter)

    expect(wrapper.find('h2').exists()).toBeTruthy()

    const h2 = wrapper.find('h2')

    expect(h2.text()).toBe('Counter')
  })


  test('el valor por defecto debe de ser 100 en el p', () => {
    // wrapper
    const wrapper = shallowMount(Counter)
    // pTags
    const value = wrapper.find('[data-testid="counter"]').text()
    // expect segundo p == 100
    expect(value).toBe('10')
  })


  test('debe de incrementar en 1 el valor del contador', async () => {

    const wrapper = shallowMount(Counter)

    const increseBtn = wrapper.find('button')

    await increseBtn.trigger('click')

    const value = wrapper.find('[data-testid="counter"]').text()

    expect(value).toBe('11')

    const decreseBtn = wrapper.find()
  })

});
