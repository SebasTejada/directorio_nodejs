const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
const fs=require("fs");
const fecha= new Date();
const anioActual= fecha.getFullYear();

//console.log(anioActual);
function diasEnMes(mes,anio){
	return new Date(anio,mes,0).getDate();
}

//console.log(diasEnMes(2,2022));

for(let a = 2017; a<=anioActual; a++){
	fs.mkdir(`C:\\Users\\acer\\Desktop\\Tarea\\PruebaNode\\${a}`,(err)=>{
		if (err) {
			console.log(err);
			

		}
		else{
			console.log("Carpeta de año creada");

			
			for(let m=0; m<=12; m++){
			fs.mkdir(`C:\\Users\\acer\\Desktop\\Tarea\\PruebaNode\\${a}\\${meses[m]}`,(err)=>{
				if (err){
					console.log(err);
				}else{
					console.log("Carpeta de mes creada");
					const dias= diasEnMes(m+1,a);

					for(let d=1; d<=dias;d++){
						fs.appendFile(`C:\\Users\\acer\\Desktop\\Tarea\\PruebaNode\\${a}\\${meses[m]}\\${d}.txt`,`Este es el día ${d}`,(err)=>{
							if (err){
								console.log(err);
						
							}
							else{
								console.log("Archivo txt creado");
							}
						})
					}

				}
			})
		   }
		}
	})
}