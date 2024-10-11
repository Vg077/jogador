import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listjogador() {
    const jogador = await sql`select * from jogador`;
    return jogador;
  }

  async createjogador(jogador) {
    const id = randomUUID();
    console.log('id', id);
    const nome = jogador.nome;
    const idade = jogador.idade;
    const posição = jogador.posição;
    
    await sql`insert into jogador (id, nome, idade, posição)
    values (${id}, ${nome}, ${idade}, ${posição})`;
  }

  async updatejogador(id, jogador) {
    const nome = jogador.nome;
    const posição = jogador.posição;
    const idade = jogador.idade;

    await sql`nome jogador set 
        name = ${nome},
        posição = ${posição},
        idade = ${idade}
        where id = ${id}
    `;
  }

  async deletejogador(id) {
    await sql`delete from jogador where id = ${id}`;
  }
}
