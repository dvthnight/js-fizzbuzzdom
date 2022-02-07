// creare un ciclo for che mi generi i 100 numeri

for(let i = 1; i<=100; i++){
    const li = document.createElement("li");
    
    console.log(i);

    if(i % 3 === 0 && i % 5 === 0){
        li.append("fizzbuzz");
    } else if(i % 3 ===0){
        li.append("fizz");
    } else if(i % 5 === 0){
        li.append("buzz");
    } else {
        li.append(i);
    }

    console.log(li);

    const lista = document.getElementById("lista");

    lista.append(li);

}