Você pode usar condicionais para verificar o estado de uma variável, de um cálculo ou de uma função.

Aqui temos várias possibilidades, as sintaxes são: `se`, `ou então`, `senão`, `verificar`, `caso seja`, `em caso inesperado`, `parar`.

Uma estrutura condicional serve para executar um trecho de código caso uma condição seja atingida.

A estrutura condicional mais básica é a seguinte:
```
variável numero = 1;

se (numero + 1 === 2) {
  // faz algo
}
```

Se você quer também fazer alguma coisa caso a condição não seja contemplada:
```
variável numero = 2;

se (numero + 2 === 2) {
  // faz algo
} senão {
  // faz outro algo
}
```

E também se você quiser ter várias possibilidades pode usar o `ou então`:
```
variável numero = 2;

se (numero === 2) {
  // faz algo
} ou então (numero === 3) {
  // faz outro algo
} ou então (numero === 1) {
  // faz outro algo
} senão {
  // faz outro algo
}
```

Caso sejam muitas possibilidades específicas, talvez seja melhor usar o `verificar`:
```
variável numero = 2;

verificar (numero) {
  caso seja 2:
    // faz algo
    parar;
  caso seja 3:
    // faz algo
    parar;
  caso seja 4:
    // faz algo
    parar;
  em caso inesperado:
    // faz outra coisa
    parar;
}
```
No `verificar` é uma boa prática inserir o `parar` em todos os casos.

No exemplo, caso o número não seja 2, 3, nem 4, o `em caso inesperado` será executado.