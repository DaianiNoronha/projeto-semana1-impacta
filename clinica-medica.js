// Clínica Médica

// Importar o módulo readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Objeto Paciente
const Paciente = {
  nome: null,
  telefone: null,
  email: null,
};

// Objeto Médico
const Medicos = [
  {
    id: 1,
    nome: "Joaquim",
    especialidade: "Cardiologista",
    disponibilidadeDeAtendimento: [
      {
        dia: "Segunda",
        horario: ["08:00", "10:00"],
      },
      {
        dia: "Quarta",
        horario: ["10:00", "12:00"],
      },
    ],
  },
  {
    id: 2,
    nome: "Maria",
    especialidade: "Dermatologista",
    disponibilidadeDeAtendimento: [
      {
        dia: "Quinta",
        horario: ["08:00", "10:00"],
      },
      {
        dia: "Sexta",
        horario: ["07:00", "12:00"],
      },
    ],
  },
  {
    id: 3,
    nome: "Pedro",
    especialidade: "Clínico Geral",
    disponibilidadeDeAtendimento: [
      {
        dia: "Segunda",
        horario: ["08:00", "10:00"],
      },
      {
        dia: "Terça",
        horario: ["10:00", "11:00"],
      },
    ],
  },
  {
    id: 4,
    nome: "Ana",
    especialidade: "Ortopedista",
    disponibilidadeDeAtendimento: [
      {
        dia: "Quinta",
        horario: ["09:00", "10:00"],
      },
      {
        dia: "Sexta",
        horario: ["08:00", "12:00"],
      },
    ],
  },
];

// Objeto consulta agendada
const consultaAgendada = {
  paciente: null,
  medico: null,
  horario: null,
  dia: null,
};

// Função para solicitar os dados do paciente
function solicitarDadosPaciente() {
    return new Promise((resolve, reject) => {
      rl.question("Digite o nome do paciente: ", (nome) => {
        Paciente.nome = nome;
        rl.question("Digite o telefone do paciente: ", (telefone) => {
          Paciente.telefone = telefone;
          rl.question("Digite o email do paciente: ", (email) => {
            Paciente.email = email;
            consultaAgendada.paciente = Paciente;
            resolve();
          });
        });
      });
    });
  }

  // Função agendar consulta
  function agendarConsulta() {
    console.log("Olá, Bem-vindo(a) ao sistema de agendamento de consultas");
    console.log("Para iniciar o agendamento responda as seguintes questões: ");
    solicitarDadosPaciente().then(() => {
      console.log(
        "Obrigado(a) seus dados foram inseridos com sucesso. Vamos seguir com o seu agendamento."
      );
      escolherEspecialidade();
    });
  }
  