export default class Hotel 
{
    constructor(tablaHotel, tablainfo) 
    {
        this._tablaHotel = tablaHotel;
        this._tablainfo = tablainfo;
        this._numReservacion = 0;
        this.dias = 0;
        this._contador = 0;
    }
    addEmployee(employee) 
    {
        let row = this._tablaHotel.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellEmail = row.insertCell(1);
        let cellreservacion = row.insertCell(2);
        let cellreservacionF = row.insertCell(3);
        let celldias = row.insertCell(4);
        let cellhabitacion = row.insertCell(5);
        let cellcosto = row.insertCell(6);
        cellName.innerHTML = employee.name;
        cellEmail.innerHTML = employee.email;
        cellreservacion.innerHTML = employee.reservacion;
        cellreservacionF.innerHTML = employee.reservacionF;
        celldias.innerHTML = employee.getReservacion();
        cellhabitacion.innerHTML = employee.habitacion;
        let habitacion = employee.habitacion;
        this.dias = employee.getReservacion();
        if(habitacion === "pequeña")
        {
            this._precioReservacion = 500 * this.dias;
        }
        else if(habitacion === "mediana")
        {
            this._precioReservacion = 1000 * this.dias;
        }
        else if(habitacion === "grande")
        {
            this._precioReservacion = 2000 * this.dias;
        }
        else if(habitacion === "lujo")
        {
            this._precioReservacion = 5000 * this.dias;
        }
        else
        {
            this._precioReservacion = "no selecciono el tipo de habitacion";
        }
        this._contador = this._contador + this._precioReservacion ;
        this._numReservacion++;
        this._tablainfo.rows[1].cells[0].innerHTML = this._numReservacion;
        this._tablainfo.rows[1].cells[1].innerHTML = this._contador;
        cellcosto.innerHTML = this._precioReservacion;
    }
}