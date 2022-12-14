import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter Component", () => {

  let wrapper 
  
  beforeEach(() => {
    wrapper = shallowMount(Counter)
  })


  // test("debe de hacer match con el snapshot", () => {

  //   const wrapper = shallowMount(Counter);

  //   expect(wrapper.html()).toMatchSnapshot()
  // });

  test('h2 debe tener el valor por defecto Counter', () => {
    
    expect(wrapper.find('h2').exists()).toBeTruthy()

    const h2 = wrapper.find('h2')

    expect(h2.text()).toBe('Counter')
  })


  test('el valor por defecto debe de ser 100 en el p', () => {
    // wrapper
    // pTags
    const value = wrapper.find('[data-testid="counter"]').text()
    // expect segundo p == 100
    expect(value).toBe('10')
  })


  test('debe de incrementar y decrementar el contador', async () => {


    const [increseBtn, decreseBtn] = wrapper.findAll('button')

    await increseBtn.trigger('click')
    await increseBtn.trigger('click')
    await increseBtn.trigger('click')
    await decreseBtn.trigger('click')
    await decreseBtn.trigger('click')

    const value = wrapper.find('[data-testid="counter"]').text()
  
    expect(value).toBe('11')
  })


  test('debe de establecer el valor por defecto', () => {
    
    const {start} = wrapper.props()

    const value = wrapper.find('[data-testid="counter"]').text()

    // Se tiene que parsear el value ya que es un string
    expect (Number(value)).toBe(start)

  })

  test('debe de mostrar la prop  title', () => {
    const wrapper = shallowMount(Counter, {
      props: {
        title: 'hola mundo'
      }
    })

    expect(wrapper.find('h2').text()).toBe('hola mundo')

  })

});
