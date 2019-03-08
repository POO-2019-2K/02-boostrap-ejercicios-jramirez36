import Hotel from "./Hotel.js";
import Employee from "./Employee.js";
class Main
{
    constructor()
    {
        this._hotel = new Hotel(document.querySelector("#hotel"), document.querySelector("#info"));
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let name = document.querySelector("#name").value;
            let email = document.querySelector("#email").value;
            let reservacion = document.querySelector("#reservacion").value;
            let reservacionF = document.querySelector("#reservacionF").value;
            let habitacion = document.getElementById("habitacion");
            let employee = new Employee(name, email, reservacion, reservacionF, habitacion);
            this._hotel.addEmployee(employee);
        });
    }
}
let m = new Main();
