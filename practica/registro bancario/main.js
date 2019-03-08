import banco from "./Banco.js";
import Employee from "./Employee.js";
class Main
{
    constructor()
    {
        this._Banco = new banco(document.querySelector("#Banco"), document.querySelector("#info"));
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let name = document.querySelector("#name").value;
            let clave = document.querySelector("#clave").value;
            let cantidad = document.querySelector("#cantidad").value;
            let transacion = document.querySelector("#transacion").value;
            let transación = document.getElementById("select").value;
            let employee = new Employee(name, clave, cantidad, transacion, select);
            this._Banco.addEmployee(employee);
        });
    }
}
let m = new Main();
