Descrição: Escreva uma função (ou uma classe) para validar senhas. As senhas devem atender aos seguintes critérios:

Entre 5 e 15 caracteres
Contém pelo menos um dígito
Contém pelo menos uma letra maiúscula
Retorna um objeto contendo um resultado booleano e uma chave errors que — quando fornecida com uma senha inválida — contém uma mensagem ou tipo de erro para todos os erros ocorridos. Pode haver vários erros ao mesmo tempo.

expect(isPasswordValid).toBeTruthy()

## .toBe(valor)

Use .toBe para comparar valores primitivos ou para verificar a identidade referencial de instâncias de objetos. Ele chama Object.is para comparar valores, o que é ainda melhor para testes do que o operador de igualdade estrita ===.

Por exemplo, este código irá validar algumas propriedades do objeto can:

const pode = {
nome: 'pamplemousse',
onças: 12,
};

descreve('a lata', () => {
test('tem 12 onças', () => {
expect(can.ounces).toBe(12);
});

test('tem um nome sofisticado', () => {
expect(can.name).toBe('pamplemousse');
});
});

## .toBeGreaterThanOrEqual(número | bigint)

Use toBeGreaterThanOrEqual para comparar recebido >= esperado para números ou valores inteiros grandes. Por exemplo, teste se ouncesPerCan() retorna um valor de pelo menos 12 onças:

test('onças por lata é de pelo menos 12', () => {
expect(ouncesPerCan()).toBeGreaterThanOrEqual(12);
});

## .toContain(item)

Use .toContain quando você deseja verificar se um item está em um array. Para testar os itens no array, este usa ===, uma verificação de igualdade estrita. .toContain também pode verificar se uma string é uma substring de outra string.

Por exemplo, se getAllFlavors() retorna um array de sabores e você quer ter certeza que lime está lá, você pode escrever:

test('a lista de sabores contém limão', () => {
expect(getAllFlavors()).toContain('lime');
});

Este matcher também aceita outros iteráveis, como strings, conjuntos, listas de nós e coleções HTML.
