export default class Employee
{
    constructor(name, clave, cantidad, transacion, select)
    {
        this._name = name.toUpperCase();
        this._clave = clave;
        this._cantidad = cantidad;
        this._transacion = transacion;
        this._select = select.value;
    }
    //retorna la cantidad de dias que se quedara el huesped 
    getTransación()
    {
        let f = new Date();
        let F = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
        this._anotado = F;
        this._transacion = document.querySelector("#transacion").value;
        return this._transacion;
    }
    get name()
    {
        return this._name;
    }
    get clave()
    {
        return this._clave;
    }
    get cantidad()
    {
        return this._cantidad;
    }
    get transacion()
    {
        return this._transacion;
    }
    get select()
    {
        return this._select;
    }
    get anotado()
    {
        return this._anotado;
    }
}