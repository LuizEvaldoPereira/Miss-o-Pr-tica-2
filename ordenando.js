// Função Swap

const swap = (array, pos1, pos2) => {
    // Verifica se as posições estão dentro dos limites do array
    if (pos1 < 0 || pos2 < 0 || pos1 >= array.length || pos2 >= array.length) {
        throw new Error("As posições devem estar dentro dos limites do vetor");
    }

    // Troca os valores nas posições especificadas
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

// Exemplo de uso
const meuVetor = [1, 2, 3, 4, 5, 6];
console.log("Antes da troca:", meuVetor);

// Chama a função swap para trocar os elementos nas posições 1 e 3
swap(meuVetor, 1, 3);
console.log("Depois da troca:", meuVetor);

// Função Shuflle

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        // Gera um índice aleatório entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));
        // Troca os elementos
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Exemplo abaixo do uso
const meuVetor2 = [1, 2, 3, 4, 5];
console.log("Antes do shuffle:", meuVetor2);

const vetorMisturado = shuffle(meuVetor2);
console.log("Depois do shuffle:", vetorMisturado);

// Função Bubble_Sort

const bubbleSort = (array) => {
    const n = array.length; // Obtém o comprimento do array

    let swapped; // Variável que indicará se houve troca

    // Loop para percorrer todos os elementos do array
    for (let j = 0; j < n - 1; j++) {
        swapped = false; // Assume que não houve troca ao iniciar a iteração

        // O loop interno verifica até o último não ordenado
        for (let i = 0; i < n - 1 - j; i++) {
            // Compara elementos adjacentes e troca se estiverem na ordem errada
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]]; // Troca os elementos
                swapped = true; // Marca que houve uma troca
            }
        }

        // Se não houve troca, o array já está ordenado
        if (!swapped) break; // Otimização: sai do loop se já estiver ordenado
    }

    return array; // Retorna o array ordenado
};

// Exemplo de uso
const meuVetor3 = [5, 3, 8, 4, 2];
console.log("Antes do bubble sort:", meuVetor3);

const vetorOrdenado = bubbleSort(meuVetor3);
console.log("Depois do bubble sort:", vetorOrdenado);

// Função Selection_sort

const selectionSort = (arr) => {
    const n = arr.length; // Determina o tamanho do array
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // Inicializa o índice do menor elemento como o índice atual
        for (let j = i + 1; j < n; j++) { // Percorre o restante do array
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Atualiza o índice do menor elemento
            }
        }
        // Se o menor elemento encontrado não for o elemento atual, troca os elementos
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Troca os valores
        }
    }
    return arr; // Retorna o array ordenado
};

// Exemplo de uso
const arr = [64, 25, 12, 22, 11];
console.log("Antes do selection_sort:", arr); // Imprime o array antes da ordenação

const ordenado = selectionSort(arr); // Chama a função de ordenação
console.log("Depois do selection_sort:", ordenado); // Imprime o array ordenado

// Função Quick_Sort

const quickSort = (array) => {
    // Se o array tiver 0 ou 1 elemento, está ordenado
    if (array.length <= 1) return array;

    // Seleciona o pivô
    const pivot = array[array.length - 1];
    const left = [];  // Array para elementos menores que o pivô
    const right = []; // Array para elementos maiores ou iguais ao pivô

    // Loop para dividir os elementos
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]); // Coloca no array left se menor que o pivô
        } else {
            right.push(array[i]); // Coloca no array right se maior ou igual ao pivô
        }
    }

    // Retorna a concatenação recursiva dos arrays left, pivô, e right
    return [...quickSort(left), pivot, ...quickSort(right)];
};

// Exemplo de uso
const inputArray = [64, 25, 12, 22, 11];
console.log("Antes do quick_sort:", inputArray);

const sortedArray = quickSort(inputArray);
console.log("Depois do quick_sort:", sortedArray);

// Função Particionamento

const partition = (array, low, high) => {
    const pivot = array[high]; // Escolhe o pivô como o último elemento
    let i = low - 1; // Índice do menor elemento

    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            // Troca os elementos
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Coloca o pivô na posição correta
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1; // Retorna o índice do pivô
};

// Exemplo de uso no  Quick_Sort
const meuArray = [64, 25, 12, 22, 11];
console.log("Antes do quick sort:", meuArray);

const arrayOrdenado = quickSort(meuArray);
console.log("Depois do quick sort:", arrayOrdenado);