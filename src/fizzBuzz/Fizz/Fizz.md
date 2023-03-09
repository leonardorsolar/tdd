# Fizzbuzz

Escreva uma função que pegue números de 1 a 100
e os exiba como uma string, mas para múltiplos de
três ela retorna “Fizz” em vez do número, e para
múltiplos de cinco ela retorna “Buzz”. Para números
múltiplos de três e cinco, ele retorna “FizzBuzz”.

> Write a function that takes numbers from 1 to
> 100 and outputs them as a string, but for multiples of
> three it returns “Fizz” instead of the number, and for
> multiples of five it returns “Buzz.” For numbers that
> are multiples of both three and five,
> it returns “FizzBuzz.”

- It outputs numbers as strings
- It accepts numbers between 1 and 100
- It rejects numbers lower than 1
- It rejects numbers greater than 100

### Dicas para escrever seus primeiros testes

- **1. Seja claro sobre o que está sendo perguntado — ******\*\*\*********Declare os fatos**\*\*\***
  Normalmente, você deseja codificar um teste por vez, mas, se isso ajudar, você também pode escrever muitos de seus testes como fatos.
  Eu chamo essa abordagem de **\*\*\*\***“Declarando os fatos**\*\*\*\***”
  ******\*******Você pode declarar os fatos?******\*\*\*******
  ```tsx
  describe('fizzbuzz', () => {
    it('pega números de 1 a 100', () => {});

    it('não aceita números menores que 1', () => {});

    it('não aceita números maiores que 100', () => {});

    it('exibe números como strings', () => {});
  });
  ```
  _Você também pode escrever seus fatos no arquivo de texto em seu arquivo de texto e fazer uma lista de tarefas a partir dele. Eu gosto dessa abordagem. Isso é_
  ```
  # Fizzbuzz

  > Escreva uma função que receba números de 1 a
  100 e os gera como uma string, mas para múltiplos de
  três retorna “Fizz” ao invés do número, e para
   múltiplos de cinco, ele retorna “Buzz”. Para números que
  são múltiplos de três e cinco,
  ele retorna “FizzBuzz”.

  - Emite números como strings
  - Aceita números entre 1 e 100
  - Rejeita números menores que 1
  - Rejeita números maiores que 100
  ```
  - Todos esses são fatos bem conhecidos com os quais podemos concordar, certo? E há mais, mas este é um bom lugar para começar.
- **2. Use exemplos reais se estiver empacado — \*\*\*\***Especificar por exemplo**\*\*\*\***
  Ao nomear seus testes, é sempre melhor usar exemplos reais em vez de declarações genéricas.
  Por exemplo, você vai preferir
  `it("sabe que 1 é uma entrada válida porque está entre 1 e 100")`
  Em vez de
  `it('pega números de 1 a 100')`
  Com o primeiro exemplo, é extremamente óbvio o que você deve escrever dentro do caso de teste. é para escrever um exemplo onde você está passando em 1.
  Mas com o segundo exemplo, pode parecer um pouco abstrato e genérico. Pode não ser óbvio para você como transformar isso em um teste.
- **3. Use exemplos parametrizados — **\*\*\*\*****Use listas de dados****\*\*\*\*****
  Se desejar, você pode adotar uma (meio) abordagem de dados parametrizados se quiser executar o mesmo teste em conjuntos de dados.
  ```tsx
  it('retorna múltiplos de três como fizz', () => {
    [3, 6, 9, 12, 15]
      .map(multiple => fizzbuzz(multiple))
      .forEach(m => expect(m).toEqual('fizz'));
  });
  ```
  Existem maneiras melhores de fazer isso com jest (consulte o uso da palavra-chave `each`) — [veja este artigo](https://blog.codeleak.pl/2021/12/parameterized-tests-with-jest.html).
- **4. Use a negação para saber se o seu teste está realmente falhando/passando corretamente — _A Técnica do Lightswitch_**
  Depois de passar em um teste, gosto de negá-lo com o teste exatamente oposto.
  _Desligue-o e, em seguida, desative-o._
  Você pode negar rapidamente um teste, garantir que as coisas fiquem vermelhas e trazê-lo de volta para garantir que as coisas estejam funcionando novamente.
- **5. Refine e refatore suas especificações de teste e código de teste também durante a etapa de refatoração**
  Ao executar **\*\*\***Red-Green-Refactor**\*\*\*** e encontrar duplicação, certifique-se de refatorar seu código de teste também.
  Você pode refinar e refatorar seus testes, remover duplicações e facilitar a leitura.
  Tudo bem se você não obtiver os nomes dos seus testes desde o início. Você sempre pode refatorá-lo mais tarde.
