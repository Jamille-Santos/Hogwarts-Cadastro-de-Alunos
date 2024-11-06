let alunos = [];

class Aluno {
    constructor(nome, casa, magia) {
        this.nome = nome;
        this.casa = casa;
        this.magia = magia;
    }
}

function atualizarTabela() {
    const tbody = document.querySelector('#alunoTable tbody');
    tbody.innerHTML = '';

    alunos.forEach((aluno, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.casa}</td>
            <td>${aluno.magia}</td>
            <td>
                <button onclick="editarAluno(${index})">Editar</button>
                <button onclick="excluirAluno(${index})">Excluir</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

document.getElementById('alunoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('alunoNome').value;
    const casa = document.getElementById('alunoCasa').value;
    const magia = document.getElementById('alunoMagia').value;

    alunos.push(new Aluno(nome, casa, magia));
    atualizarTabela();

    document.getElementById('alunoForm').reset();
});

function editarAluno(index) {
    const nome = prompt('Novo nome:', alunos[index].nome);
    const casa = prompt('Nova casa:', alunos[index].casa);
    const magia = prompt('Nova magia favorita:', alunos[index].magia);

    if (nome && casa && magia) {
        alunos[index].nome = nome;
        alunos[index].casa = casa;
        alunos[index].magia = magia;
        atualizarTabela();
    }
}

function excluirAluno(index) {
    alunos.splice(index, 1);
    atualizarTabela();
}
