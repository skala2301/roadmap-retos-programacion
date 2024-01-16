


showArith();
showLogic();
showBits();
showAssign();
showValRetChain();
showDestruct();
showComp();
showEspecialOp();


/******
 * OPERADORES DE ASIGNACION
 * 
 */
function showAssign(){
    console.log("OPERADORES DE ASIGNACION:\n");
    console.log("operador =");
    let numA = 2;       //asingacion de un numero
    let numB = 5; 
    let booleanA = true;
    let booleanB = false;

    console.log("valores iniciales\n numA: ",numA,"\nnumB: ",numB);
    console.log("\n");
    console.log("operador +="); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    numA += numB;       //asignacion de adision
    console.log("Para operacion numA += numB --> numA adquiere valor: ",numA);
    console.log("\n");

    console.log("operador -=");
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);
    numA -= numB;       //asignacion de sustraccion
    console.log("Para operacion numA -= numB --> numA adquiere valor: ",numA);
    console.log("\n");

    console.log("operador *=");
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);
    numA *= numB;       //asignacion de multiplicacion
    console.log("Para operacion numA *= numB --> numA adquiere valor: ",numA);
    console.log("\n");

    console.log("operador /=");
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);
    numA /= numB;       //asignacion de division
    console.log("Para operacion numA /= numB --> numA adquiere valor: ",numA);
    console.log("\n");

    console.log("operador %=");
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);
    numB %= numA;       //asignacion de residuo
    console.log("Para operacion numB %= numA --> numB adquiere valor: ",numB);
    console.log("\n");

    console.log("operador ^=");
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);
    numB ^= numA;       //asignacion XOR bit a bit
    console.log("Para operacion numB ^= numA --> numB adquiere valor: ",numB);
    console.log("\n");

    console.log("operador |=");
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);
    numB |= numA;       //asignacion OR bit a bit
    console.log("Para operacion numB |= numA --> numB adquiere valor: ",numB);
    console.log("\n");

    console.log("operador &=");
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);
    numB &= numA;       //asignacion AND bit a bit
    console.log("Para operacion numB &= numA --> numB adquiere valor: ",numB);
    console.log("\n");

    console.log("operador <<=");
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);
    numB <<= numA;       //asignacion de dezplazamiento a la izquierda
    console.log("Para operacion numB <<= numA --> numB adquiere valor: ",numB);
    console.log("\n");

    console.log("operador **=");
    console.log("donde\nnumA: ",numA,"\nnumB: ",numB);
    numB **= numA;       //asignacion de exponenciacion
    console.log("Para operacion numB **= numA --> numB adquiere valor: ",numB);
    console.log("\n");

    console.log("operador >>=");
    console.log("donde\nnumA: ",numA,"\nnumB: ",numB);
    numB >>= numA;       //asignacion de dezplazamiento a la derecha
    console.log("Para operacion numB >>= numA --> numB adquiere valor: ",numB);
    console.log("\n");

    console.log("operador >>>=");
    console.log("donde\nnumA: ",numA,"\nnumB: ",numB);
    numB >>>= numA;       //asignacion de dezplazamiento a la derecha sin signo
    console.log("Para operacion numB >>>= numA --> numB adquiere valor: ",numB);
    console.log("\n");

    console.log("operador &&=");
    console.log("donde\nbooleanA: ",booleanA,"\nnumB: ",numB);
    booleanA &&= numB;       //asignacion AND Logico, si booleanA && numB es true se le asigna el valor de numB, sino mantiene valor original (los numeros enteros se interpretan como true si no son 0)
    console.log("Para operacion booleanA &&= numB --> booleanA adquiere valor: ",booleanA);
    console.log("\n");

    
    console.log("operador ||=");
    console.log("donde\nbooleanA: ",booleanA,"\nbooleanB: ",booleanB);
    booleanA ||= booleanB;       //asignacion OR Logico, si booleanA || booleanB es false se le asigna el valor de booleanB, sino mantiene valor original
    console.log("Para operacion booleanA ||= booleanB --> booleanA mantiene el valor: ",booleanA);
    console.log("\n");
    
    console.log("operador ??=");
    booleanA = null;
    console.log("donde\nbooleanA: ",booleanA,"\nbooleanB: ",booleanB);
    booleanA ??= booleanB;       //asignacion de anulacion logica, booleanA adquiere valor de booleanB solo si booleanA es null o undefined
    console.log("Para operacion booleanA ??= booleanB --> booleanA mantiene el valor: ",booleanA);
    console.log("\n"); 
}

function showArith(){
    console.log("OPERADORES ARITMETICOS:\n");
    let numA = 2;       //asingacion de un numero
    let numB = 5; 
    let strA = "3";
    let result = 0;

    console.log("valores iniciales\n numA: ",numA,"\nnumB: ",numB);
    console.log("\n");
    console.log("operador + (adision)"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA + numB;       //suma o adision
    console.log("Para operacion numA + numB --> el resultado es: ",result);
    console.log("\n");

    console.log("operador - (resta)"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA - numB;       //resta
    console.log("Para operacion numA - numB --> el resultado es: ",result);
    console.log("\n");

    console.log("operador * (multiplicacion)"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA * numB;       //multiplicacion
    console.log("Para operacion numA * numB --> el resultado es: ",result);
    console.log("\n");

    console.log("operador / (division)"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA / numB;       //division
    console.log("Para operacion numA / numB --> el resultado es: ",result);
    console.log("\n");

    console.log("operador % (residuo o modulo)"); 
    console.log("donde\n numB: ",numB,"\nnumA: ",numA);     
    result = numB % numA;       //residuo o modulo devuelve residuo de la division numB / numA
    console.log("Para operacion numB % numA --> el resultado es: ",result);
    console.log("\n");

    console.log("operador ** potencia"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA ** numB;       //potencia numA elevado a la potencia numB
    console.log("Para operacion numA ** numB --> el resultado es: ",result);
    console.log("\n");

    console.log("operador ++ incremento"); 
    console.log("donde\n numA: ",numA);     
    console.log("Para operacion ++numA --> el resultado es: ",++numA, "al momento de aplicar la operacion", "\n\
y el resultado es: ", numA, "despues de aplicar la operacion");
    console.log("ahora si tenemos\n numA: ",numA);     
    console.log("Para operacion numA++ --> el resultado es: ",numA++, "al momento de aplicar la operacion", "\n\
y el resultado es: ", numA, "despues de aplicar la operacion");
    console.log("\n");

    console.log("operador -- decremento"); 
    console.log("donde\n numA: ",numA);     
    console.log("Para operacion --numA --> el resultado es: ",--numA, "al momento de aplicar la operacion", "\n\
y el resultado es: ", numA, "despues de aplicar la operacion");
    console.log("ahora si tenemos\n numA: ",numA);     
    console.log("Para operacion numA-- --> el resultado es: ",numA--, "al momento de aplicar la operacion", "\n\
y el resultado es: ", numA, "despues de aplicar la operacion");
    console.log("\n");

    console.log("operador - negacion unaria"); 
    console.log("donde\nnumA: ",numA);     
    result = -numA;       // devuelve la negacion de su operador
    console.log("Para operacion -numA --> el resultado es: ",result);
    console.log("\n");

    console.log("operador + positivo unario"); 
    console.log("donde\nstrA: ",strA); 
    console.log("tipo de strA: ", typeof strA);    
    result = +strA;       //intenta convertir una variable a numero si aun no lo es
    console.log("Para operacion +strA\nel resultado es: ",result,"\nresultado es tipo: ", typeof result);
    console.log("\n");

}

function showBits(){
    console.log("OPERADORES DE BITS:\n");
    let numA = 2;       //asingacion de un numero
    let numB = 5; 
    let result = 0;

    console.log("operador ^ (XOR)"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA ^ numB;       //XOR bit a bit
    console.log("Para operacion numA ^ numB --> el resultado es: ",result);
    console.log("\n");

    console.log("operador | (OR)"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA | numB;       //OR bit a bit
    console.log("Para operacion numA | numB --> el resultado es: ",result);
    console.log("\n");

    console.log("operador & (AND)"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA & numB;       //AND bit a bit
    console.log("Para operacion numA & numB --> el resultado es: ",result);
    console.log("\n");

    console.log("operador << (dezplazamiento de bits a izquierda)"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA << numB;       //dezplazamiento de bits a izquierda
    console.log("Para operacion numA << numB --> el resultado es: ",result);
    console.log("\n");

    console.log("operador >> (dezplazamiento de bits a derecha)"); 
    console.log("donde\n numB: ",numB,"\nnumA: ",numA);     
    result = numB >> numA;       //dezplazamiento de bits a derecha
    console.log("Para operacion numB >> numA --> el resultado es: ",result);
    console.log("\n");

    console.log("operador >>> (dezplazamiento de bits a derecha sin signo)"); 
    console.log("donde\n numB: ",numB,"\nnumA: ",numA);     
    result = numB >>> numA;       //dezplazamiento de bits a derecha sin signo
    console.log("Para operacion numB >>> numA --> el resultado es: ",result);
    console.log("\n");

    console.log("operador ~ (inversion de bits, invierte bits del operando)"); 
    console.log("donde\n numB: ",numB);     
    result = ~numB;       //inversion de bits, invierte bits del operando
    console.log("Para operacion ~numB --> el resultado es: ",result);
    console.log("\n");
}

function showLogic(){
    console.log("OPERADORES LOGICOS:\n");
    let result = 0;
    let booleanA = true;
    let booleanB = false;

    console.log("operador && (AND LOGICO)");
    console.log("donde\nbooleanA: ",booleanA,"\nbooleanB: ",booleanB);
    result = booleanA && booleanB;       //AND Logico
    console.log("Para operacion booleanA && booleanB --> el resultado es: ",result);
    console.log("\n");
    
    console.log("operador || (OR LOGICO)");
    console.log("donde\nbooleanA: ",booleanA,"\nbooleanB: ",booleanB);
    result = booleanA || booleanB;       //OR Logico
    console.log("Para operacion booleanA || booleanB --> el resultado es: ",result);
    console.log("\n");
    
    console.log("operador ?? (FUSION NULA)");
    booleanA = null;
    console.log("donde\nbooleanA: ",booleanA,"\nbooleanB: ",booleanB);
    result = booleanA ?? booleanB;      //Operacion Fusion nula, result adquiere valor de booleanA si booleanA es diferente de null o undefined,
                                        //de lo contrario result toma el valor de booleanB
    console.log("Para operacion booleanA ?? booleanB --> el resultado es: ",result);
    console.log("\n");

    console.log("operador ! (NEGACION LOGICA)");
    booleanA = true;
    console.log("donde\nbooleanA: ",booleanA);
    result = !booleanA;      //
    console.log("Para operacion !booleanA --> el resultado es: ",result);
    console.log("\n");
}

function showValRetChain(){
    //VALOR DE RETORNO Y ENCADENAMIENTO
    console.log("VALOR DE RETORNO Y ENCADENAMIENTO:\n");
    let A = 7;
    let B = 3;
    console.log("La expresion A = B TIENE UN VALOR DE RETORNO QUE COINCIDE CON EL VALOR DE LA DERECHA, ES DECIR B");
    console.log("donde\nA: ",A,"\nB: ",B);
    let result = A = B;
    console.log("result = A = B")
    console.log("result: ",result,"\n\n");
    
    console.log("La expresion A *= B TIENE UN VALOR DE RETORNO QUE COINCIDE CON EL RESULTADO DE A * B, ESTA LOGICA SE REPITE PARA TODAS LAS OPERACIONES DE ASIGNACION");
    console.log("donde\nA: ",A,"\nB: ",B);
    result = A *= B;
    console.log("result = A *= B")
    console.log("result: ",result,"\n\n");

}

function showDestruct(){
    console.log("DESESTRUCTURACION:\n");
    let miObjeto = {A: "Si", B: "No", C: "Talvez"}; //declaracion y asignasion de objeto
    let misDimensiones = {X: 22.4, Y: 83.1, Z: 10}; //otro objeto, pero con numeros
    const {A} = miObjeto; 
    ({X,Z} = misDimensiones);
    [a,b,c,d,...others] = [1,2,3,4,5,6,7,8,9,0,10,20,30,40,50];//aqui utilizamos la propiedad rest (resto)
    //rest property, quiere decir que tomamos algunas variables especificas como a,b,c y d, pero
    //el resto de valores los almacenamos en others, esta variable debe ser la ultima y debe comenzar con ...(...others en este caso)
    let {C, Y} = {...miObjeto, ...misDimensiones};     //esta asignasion se da por una fusion o merge y se toman los elementos C y Y por destructuring assignment
    let union = {...miObjeto, ...misDimensiones};   //esta asignasion se da por una fusion de objetos (merge)

    console.log("Tenemos el siguiente objeto \nlet miObjeto = {A: \"Si\", B: \"No\", C: \"Talvez\"};\n\
extraemos A de el objeto de la siguiente manera\n\
const {A} = miObjeto; \nA= ",A);
    console.log("\n");
    console.log("Tenemos el siguiente objeto \nlet misDimensiones = {X: 22.4, Y: 83.1, Z: 10};\n\
extraemos X y Z de el objeto de la siguiente manera\n\
({X,Z} = misDimensiones); \nX= ",X,"\nZ= ",Z);
    console.log("\n");
    console.log("la desestructuracion puede aplicarce con array, Ejemplo \n[a,b,c,d,...others] = [1,2,3,4,5,6,7,8,9,0,10,20,30,40,50];\n\
notece que del array completo se van extrayendo valores en orden\n\
tambien notece que se usa ...others al final, a esto se le conoce como propiedad rest, \n\
asigna el resto de elementos al array con nombre others (el nombre puede variar pudo ser ...conjunto)\n\
a continuacion se muestran los elementos\na= ",a,"\nb= ",b,"\nc= ",c,"\nd= ",d,"\nothers= ",others,);
    console.log("\n");
    console.log("Se introduce ahora la operacion merge, (fusion?)\n\
con merge podemos unir dos objetos en uno solo\n\
Ejemplo \nlet union = {...miObjeto, ...misDimensiones}; donde:\n\
miObjeto = {A: \"Si\", B: \"No\", C: \"Talvez\"}\n\
misDimensiones = {X: 22.4, Y: 83.1, Z: 10}\n\
union ahora tendra el valor:\n\
union: ",union,"\n\
se puede combinar con la desestructuracion\n\
let {C, Y} = {...miObjeto, ...misDimensiones};\n\
los elementos extraidos son \nC= ",C,"\nY= ",Y);
    console.log("\n");

}

function showComp(){
    console.log("OPERADORES DE COMPARACION:\n");

    let numA = 2;       
    let numB = 5; 
    let strA = "2.0";
    let result = 0;

    console.log("operador == (igualdad)"); 
    console.log("donde\n numA: ",numA,"\nstrA: ",strA);     
    result = numA == strA;       //igualdad
    console.log("Para operacion numA == strA --> el resultado es: ",result,"\n\n");

    console.log("operador != (desigualdad)"); 
    console.log("donde\n numA: ",numA,"\nstrA: ",strA);     
    result = numA != strA;       //desigualdad
    console.log("Para operacion numA != strA --> el resultado es: ",result,"\n\n");

    console.log("operador != (diferente de )"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA != numB;       //diferente de 
    console.log("Para operacion numA != numB --> el resultado es: ",result,"\n\n");

    console.log("operador === (estrictamente igual )"); 
    console.log("donde\n numA: ",numA,"\nstrA: ",strA);     
    result = numA === strA;       //estrictamente igual
    console.log("Para operacion numA === strA --> el resultado es: ",result,"\n\n");

    console.log("operador === (estrictamente igual )"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA === numB;       //estrictamente igual
    console.log("Para operacion numA === numB --> el resultado es: ",result,"\n\n");

    console.log("operador !== (desigualdad estricta)"); 
    console.log("donde\n numA: ",numA,"\nstrA: ",strA);     
    result = numA !== strA;       //desigualdad estricta
    console.log("Para operacion numA !== strA --> el resultado es: ",result,"\n\n");

    console.log("operador !== (desigualdad estricta)"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA !== numB;       //desigualdad estricta
    console.log("Para operacion numA !== numB --> el resultado es: ",result,"\n\n");

    console.log("operador > (mayor que)"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA > numB;       //mayor que
    console.log("Para operacion numA > numB --> el resultado es: ",result,"\n\n");

    console.log("operador >= (mayor o igual que)"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA >= numB;       //mayor o igual que
    console.log("Para operacion numA >= numB --> el resultado es: ",result,"\n\n");

    console.log("operador < (menor que)"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA < numB;       //menor que
    console.log("Para operacion numA < numB --> el resultado es: ",result,"\n\n");

    console.log("operador <= (menor o igual que)"); 
    console.log("donde\n numA: ",numA,"\nnumB: ",numB);     
    result = numA <= numB;       //menor o igual que
    console.log("Para operacion numA <= numB --> el resultado es: ",result,"\n\n");

    console.log("operador in");    
    console.log("El operador in devuelve true si la propiedad especificada está en el objeto especificado o su prototipo.\n\
'yo' in {tu: 'tu',yo: 'yo',ellos: 'ellos'} = ",'yo' in {tu: 'tu',yo: 'yo',ellos: 'ellos'},"\n\n");

    console.log("operador instanceof"); 
    strA = new String("Cuento");   
    console.log("El operador instanceof verifica si un objeto en su cadena de prototipos contiene la propiedad prototype de un constructor.\n\
se tiene strA = String('Cuento'); verificamos si strA es instancia de String de la siguiente forma:\n\
strA instanceof String = ",strA instanceof String,"\n\n");

}

function showEspecialOp(){
    console.log("EVALUACION DE CORTOCIRCUITO");
    let booleanResult=undefined;
    let value = "Something in the wind";
    console.log("las expresiones logicas se evaluan de izquierda a derecha\n\
por lo que expresiones como la siguiente: \nbooleanResult = false && true;\n\
se evaluan en cortocircuito, solo se evalua el primer resultado (false para &&) y se ignora el resto");
    booleanResult = false && true;
    console.log("en este ejemplo el valor de booleanResult = ", booleanResult);
    console.log("por otro lado booleanResult = true || false;\n\
se evaluan en cortocircuito, solo se evalua el primer resultado (true para ||) y se ignora el resto");
    booleanResult = true || false;
    console.log("en este ejemplo el valor de booleanResult = ", booleanResult);
    console.log("\n");
    console.log("OPERADOR TERNARIO");
    console.log("Para evaluacion de expresiones logicas se dispone tambien de el operador ternario ?\n\
como ejemplo: booleanResult = value ? value : null; \n\
evalua si la condicion en value es verdadero, si lo es se ejecuta la expresion antes de : de lo contrario se ejecuta\n\
la expresion despues de :");
    booleanResult = value ? value : null;
    console.log("en este ejemplo:\nvalue:",value,
    "\nel valor de booleanResult = ", booleanResult);
}





