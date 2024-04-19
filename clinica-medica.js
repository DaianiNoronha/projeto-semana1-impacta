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
        dia: "Segunda-feira",
        horario: ["08:00", "10:00"],
      },
      {
        dia: "Quarta-feira",
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
        dia: "Quinta-feira",
        horario: ["08:00", "10:00"],
      },
      {
        dia: "Sexta-feira",
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
        dia: "Segunda-feira",
        horario: ["08:00", "10:00"],
      },
      {
        dia: "Terça-feira",
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
        dia: "Quinta-feira",
        horario: ["09:00", "10:00"],
      },
      {
        dia: "Sexta-feira",
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

  // Função escolher especialidade
  function escolherEspecialidade() {
    console.log("Selecione o número correspondente á especialidade desejada: ");
    Medicos.map((medico, index) => {
      console.log(index + " - " + medico.especialidade);
    });
  
    rl.question("Digite o número da especialidade: ", (especialidade) => {
      const indice = parseInt(especialidade); // converte a entrada para um número
      if (indice >= 0 && indice < Medicos.length) {
        // verifica se o índice é válido
        const medico = Medicos[indice];
        console.log(
          " Especialidade escolhida: " +
            medico.especialidade +
            ". Medico(a): " +
            medico.nome + "."
        );
        consultaAgendada.medico = medico;
        escolherDiaDaConsulta(medico);
      } else {
        console.log("Número inválido. Tente novamente.");
        escolherEspecialidade();
      }
    });
  }

  // Função escolher dia da consulta
  function escolherDiaDaConsulta(medico) {
    console.log("Selecione o dia e horário para a sua consulta: ");
    console.log(
      "Selecione o número correspondente ao dia que você deseja ser atendido(a) "
    );
    medico.disponibilidadeDeAtendimento.map((dia, index) => {
      console.log(index + " - " + dia.dia);
    });
    rl.question("Digite o número do dia: ", (dia) => {
      const indice = parseInt(dia); // converte a entrada para um número
      if (indice >= 0 && indice < medico.disponibilidadeDeAtendimento.length) {
        console.log(
          "Dia escolhido: ",
          medico.disponibilidadeDeAtendimento[indice].dia
        );
        consultaAgendada.dia = medico.disponibilidadeDeAtendimento[indice].dia;
        // verifica se o índice é válido
        const horario = medico.disponibilidadeDeAtendimento[indice].horario;
        escolherHoraDaConsulta(horario);
      } else {
        console.log("Número inválido. Tente novamente.");
        escolherDiaDaConsulta(medico);
      }
    });
  }

  // Função escolher hora da consulta
  function escolherHoraDaConsulta(horario) {
    console.log("Horários disponíveis: ");
    horario.map((horario, index) => {
      console.log(index + " - " + horario);
    });
    rl.question("Digite o horário desejado: ", (hora) => {
      const indice = parseInt(hora); // converte a entrada para um número
      if (indice >= 0 && indice < horario.length) {
        // verifica se o índice é válido
        console.log("Horário escolhido: " + horario[indice]);
        consultaAgendada.horario = horario[indice];
        exibirDadosDaConsulta();
        rl.close();
      } else {
        console.log("Horário inválido. Tente novamente.");
        escolherHoraDaConsulta(horario);
      }
    });
  }

  // Função exibir dados da consulta
  function exibirDadosDaConsulta() {
    console.log("Segue os dados da sua consulta: ");
    console.log(`Olá, ${consultaAgendada.paciente.nome}! \n 
    Sua consulta está agendada para ${consultaAgendada.dia} a partir das ${consultaAgendada.horario}H. \n
    Com o(a) Dr(a) ${consultaAgendada.medico.nome}.`);
  }
  
  // Chamar a função para agendar consulta
  agendarConsulta();

  // rl.close() encerrando sessão
rl.on("close", () => {
    console.log("Sessão encerrada. Obrigado por utilizar nosso sistema.");
    process.exit(0);
  });
  
  
  
  
  
  