//Bootcamp Digital Innovation One

const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Matheus',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Maria',
		nota: 6,
		turma: '1C',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

//recebe o array e a media para realizar os processos da function
console.log(alunosAprovados(alunos, 5));
