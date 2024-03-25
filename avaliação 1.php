#include <stdio.h>

// 1- exercício

int main() {
    int INDICE = 13, SOMA = 0, K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    printf("O valor da variável SOMA é: %d\n", SOMA);

    return 0;
}

// resultado da soma é 91


