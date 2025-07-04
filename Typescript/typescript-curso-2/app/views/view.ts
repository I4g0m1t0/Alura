export abstract class View<T> {

    protected elemento: HTMLElement;
    
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}

//Abstract para forçar que seja implementado os métodos
//<T> é um Generics