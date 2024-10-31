# Benchmark Linguagens

## Execução dos testes

- Subida de uma aplicação por vez. Na implementação atual, ambas sobem na porta `5175`
- Uso do `psrecord` para gerar o gráfico de uso de memória e CPU: `psrecord <PID> --interval 5 --plot image.png`
- Na pasta `gatling-test` foi executado o comando para iniciar a simulação: `mvn gatling:test -Dgatling.simulationClass=test.LoadSimulation`
- Os resultados se encontram na pasta `gatling-results`

## Teste padrão

| Métrica                       | Spring                | .NET                |
|-------------------------------|-----------------------|---------------------|
| **Tempo de inicialização**    | 1900 ms               | 61 ms               |
| **Quantidade de requisições** | 209100                | 209,100             |
| **Com sucesso**               | 202807                | 209,100             |
| **Com erro**                  | 6293                  | 0                   |
| **Porcentagem de erro**       | 3%                    | 0%                  |
| **Pico de usuários**          | 28732                 | 15,419              |
| **Tempo médio de resposta**   | 300 ms (86% do tempo) | 2 ms (99% do tempo) |

### Uso de Memória e CPU Spring

![CPU e Memória Spring](spring_memory_cpu_usage.png)

### Uso de Memória e CPU .NET

![CPU e Memória .NET](dotnet_memory_cpu_usage.png)

### Observações Importantes

- A proposta do teste foi realizar a comparação em um cenário de implementação base, sem ajustes de ambos os lados, com isso:
    - Um cenário mais próximo de comparação seria com o Spring WebFlux
    - O uso de memória e CPU foi muito superior, uma comparação mais justa aqui também seria realizar o teste com recursos controlados
- O tempo de inicialização definitivamente é menor, mas não pode ser medido de maneira equalitária, a aplicação .NET não loga essa informação automaticamente
- Não foi possível isolar a performance apenas do banco de dados em memória

## Testes com ambiente e implementações mais próximas

A proposta aqui é executar simulando um ambiente restrito para ambas as aplicações, utilizando o docker com os parâmetros de `1.5g` para memória e `2` para cpus. Nos respectivos Dockerfiles foram inseridos parâmetros para as aplicações, considerando essas limitações. 

Iniciando a execução para a aplicação Spring:

- No projeto `simple-api-db-spring` fazer um `gradle build` e executar o comando: `docker build -t spring_app .`
- Para rodar a aplicação: `docker run --network host --name spring_app --memory="1.5g" --cpus="2" spring_app`
- Opcionalmente, em outro terminal, o comando `docker stats` para verificar o consumo de recursos
- Na pasta `gatling-test` executar o comando para iniciar a simulação: `mvn gatling:test -Dgatling.simulationClass=test.LoadSimulation`

Uso de memória inicial: 20%
Uso de memória final: 51%

Iniciando a execução para a aplicação .NET:

- No projeto `SimpleApiDbDotnet` executar o comando: `docker build -t dotnet_app .`
- Para rodar a aplicação: `docker run --network host --name dotnet_app --memory="1.5g" --cpus="2" dotnet_app`
- Opcionalmente, em outro terminal, o comando `docker stats` para verificar o consumo de recursos
- Na pasta `gatling-test` executar o comando para iniciar a simulação: `mvn gatling:test -Dgatling.simulationClass=test.LoadSimulation`

Uso de memória inicial: 1%
Uso de memória final: 47%

| Métrica                       | Spring                | .NET                |
|-------------------------------|-----------------------|---------------------|
| **Quantidade de requisições** | 209100                | 209100              |
| **Com sucesso**               | 202807                | 209100              |
| **Com erro**                  | 6863                  | 0                   |
| **Porcentagem de erro**       | 3,28%                 | 0%                  |
| **Pico de usuários**          | 28697                 | 15423               |
| **Tempo médio de resposta**   | 300 ms (86% do tempo) | 2 ms (99% do tempo) |
| **Uso inicial de memória**    | 20%                   | 1%                  |
| **Uso final de memória**      | 51%                   | 47%                 |

### Observações Importantes

- A proposta do teste foi realizar a comparação em um cenário de implementação base, sem ajustes de ambos os lados e com recursos limitados.
- O tempo de inicialização não foi considerado nesse teste
- A monitoração de CPU e memória foi realizada visualmente apenas pelo `docker stats`. Foi possível observar um maior uso de CPU na aplicação .NET, contudo o uso de memória máxima foi similar. A aplicação Spring inicializa já consumindo mais memória.
- Não foi observada nenhuma degradação nos dados da aplicação .NET, mesmo tendo utilizado muito menos memória do que no primeiro teste. Comportamento a ser observado com cautela.
- Não foi possível isolar a performance apenas do banco de dados em memória
- Em testes anteriores, os erros em testes de carga mais pesados foram sanados em aplicações Spring com o uso do `Undertow` no lugar do `Tomcat`. Em todo caso aqui, o propósito é ter um baseline, eventualmente poderá ser adicionada uma aplicação com ajustes e melhorias para rodar no benchmark.

#### Próximos Passos

- Como não é possível isolar a performance do banco de dados em memória nas duas aplicações, a próxima rodada de testes será realizada com um banco de dados "real".
- Isso abre também a possibilidade de adicionar uma nova aplicação Spring com WebFlux para entrar na comparação. Essa aplicação terá como objetivo o ajuste máximo possível pensando em performance e ambiente controlado.