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