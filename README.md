# Culto Start

Criado para ser utilizado em conjunto com uma dinamica para grupo de jovens, disponibilizando um chaveamento para controle da dinamica e dos vencedores de cada etapa (oitavas, quartas, etc...).

## Execucao local

### Start e Stop
Iniciar servico: 
```bash
./start.sh
```

Parar servico:
```bash
./stop.sh
```

### Testando APIs localmente
- Start App - Default Championship:
```bash
curl --request GET \
  --url http://127.0.0.1:3000/start \
  --header 'User-Agent: insomnia/11.0.1'
```

- Start App - Upd Def. Cp. Match
```bash
curl --request PUT \
  --url http://127.0.0.1:3000/start/matches/left/1/1 \
  --header 'Content-Type: application/json' \
  --data '{
	"playerA": "Rafael",
	"playerB": "Hellen",
	"scoreA": 1,
	"scoreB": 0,
	"winner": ""
}'
```

## Tecnologias
- Docker
- MongoDB
- Node
- Nginx
- HTML + Vannila JS

## Ferramentas necessarias
- [Docker desktop](https://www.docker.com/products/docker-desktop/)
- [Mongodb Compass](https://www.mongodb.com/try/download/compass)
- [Insomnia](https://insomnia.rest/download)
- [nvm](https://github.com/nvm-sh/nvm)
