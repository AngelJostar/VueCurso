import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue"


describe("Indecision Component", () => {
    
    let wrapper 
    let clgSpy

    beforeEach(() => {
        wrapper = shallowMount(Indecision)

        clgSpy = jest.spyOn(console, 'log')
    })

    test('Debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })


    test('Escribir en el input no debe de disparar nada (console.log)', async () => {
        
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect (getAnswerSpy).not.toHaveBeenCalled()
        // Para asegurar que sea llamado dos veces el console log
        // expect(clgSpy).toHaveBeenCalledTimes(2)

        // sirve para probar que getAnswer no haya sido llamado
    })

    test('Escribir el simbolo "?" debe de disparar el getAswer', async () => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo?')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect (getAnswerSpy).toHaveBeenCalled()

    })

    test('Pruebas en getAnswer', () => {
        
    })

    test('Pruebas en getAnswer - Fallo en el API', () => {
        
    })

})

