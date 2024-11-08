//**O Que deve ser utilizado**
//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções
//- Classes e Objetos

//## Objetivo:

//Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

//- nome
//- idade
//- tipo (ex: guerreiro, mago, monge, ninja )

//além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

//- exibir a mensagem: "o {tipo} atacou usando {ataque}")
//- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
//- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)

//## Saída

//Ao final deve se exibir uma mensagem:

//"o {tipo} atacou usando {ataque}"
  //ex: mago atacou usando magia
  //guerreiro atacou usando espada

class caracteristicasPersonagem {
    constructor(nomePersonagem, idadePersonagem, tipoPersonagem){
        this.nomePersonagem = nomePersonagem
        this.idadePersonagem = idadePersonagem
        this.tipoPersonagem = tipoPersonagem
    }
    
    atacar(){
        let ataque;
        if(this.tipoPersonagem == "Guerreiro"){
            ataque = "Espada"
        }else if(this.tipoPersonagem == "Mago"){
            ataque = "Magia"
        }else if(this.tipoPersonagem == "Monge"){
            ataque = "Artes Marciais"
        }else if(this.tipoPersonagem === "Ninja"){
            ataque = "Shuriken"
        }
        else {
            console.log("Personagem não encontrado!")
            return;
        }
        console.log(`O ${this.tipoPersonagem} atacou usando ${ataque}`);
    }
}
let combate = new caracteristicasPersonagem("Kratos", 22, "Guerreiro")

combate.atacar();

