Você pode criar trechos de código onde você pode inserir variáveis e receber um retorno de acordo com os valores inseridos.
Ou seja, uma função, na maioria dos casos, tem entradas e uma saída.

Uma função pode ser simplesmente realizar uma tarefa fixa e não retornar nada.

Por exemplo:
```
função imprimirTeste() {
  imprimir('Teste');
}
```

E uma função pode receber um entrada de variáveis:
```
função somar(a, b) {
  imprimir(a + b);
}
```

E por fim, uma função pode receber entradas e ter uma saída que poderá ser utilizada depois.

Por exemplo:
```
função somar(a, b) {
  retornar a + b;
}
```

Para usar uma função basta você simplesmente escrever o nome da mesma e declarar sua entrada:

Por exemplo:
```
somar(2, 4);
```

Por fim, segue um exemplo de como uma função com entrada e saída pode ser usada:
```
função somar(a, b) {
  retornar a + b;
}

variável minhaSoma = somar(2, 4);

imprimir(minhaSoma);
```
