/**
Censo Municipal
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
i) que continente tiene mas habitantes.
 */
function probarEjercicio()
{
	var pais;
	var continente;
	var cantidadHabitantes;
	var nivelPobreza;
	var temperaturaMinima;

	var paisMenosHabitantes;
	var cantidadMinimaHabitantes;

	var contadorTemperaturaPares = 0;
	var contadorTemperaturaImpares = 0;
	var contadorPaisesMas40Grados = 0;
	var contadorPaisesMenos0GradosAmerica = 0;
	var contadorPaisesTotal =0; 
	var acumuladorHabitantes =0;
	var promedioHabitantes40Grados;
	var acumuladorHabitantesMas40Grados = 0;

	var temperaturaMinimaIngresada;
	var nombrePaisMenorTemperatura;

	var ContinenteMayorHabitantes;



	do
	{
		pais = prompt ("Ingrese un pais");
	}while(isNaN(pais) == false)

	do//america , asia , europa ,africa y oceania
	{
		continente = prompt ("Ingrese continente (america , asia , europa ,africa y oceania)")
	}while (continente != "america" && continente != "asia" && continente != "europa" && continente != "africa" && continente != "oceania")
	
	cantidadHabitantes = prompt ("Ingrese cantidad de habitantes");

	nivelPobreza = prompt ("Ingrese nivel de pobreza (pobre, rico , muy rico)");

	temperaturaMinima = prompt ("Ingrese temperatura minima");

	
	if((temperaturaMinima% 2) == 0)
	{
		contadorTemperaturaPares++;
	}
	else
	{
		contadorTemperaturaImpares++;
	}

	if (temperaturaMinima > 40) //la cantidad de paises que superan los 40 grados.
	{
		contadorPaisesMas40Grados++;
		acumuladorHabitantesMas40Grados = acumuladorHabitantesMas40Grados + cantidadHabitantes;
	}
	else
	{
		if(temperaturaMinima<0 && pais == "america")
		{
			contadorPaisesMenos0GradosAmerica++;

		}
	}

	if(contadorPaisesTotal == 0 || cantidadMinimaHabitantes>cantidadHabitantes)// c
	{
		paisMenosHabitantes = pais;
		cantidadMinimaHabitantes = cantidadHabitantes;
		temperaturaMinimaIngresada = temperaturaMinima;
		nombrePaisMenorTemperatura = pais;
	}

	if(temperaturaMinimaIngresada>temperaturaMinima)
	{
		temperaturaMinimaIngresada = temperaturaMinima;
		nombrePaisMenorTemperatura = pais;
	}

	acumuladorHabitantes = acumuladorHabitantes + cantidadHabitantes;
	contadorPaisesTotal++;

//////////////////////////////////

promedio = acumuladorHabitantes / contadorPaisesTotal;

promedioHabitantes40Grados = acumuladorHabitantesMas40Grados/ contadorPaisesMas40Grados;
}