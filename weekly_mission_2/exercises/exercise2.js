const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

explorers.forEach((explorer) => {
  console.log(explorer.name);
});

explorers.forEach((explorer) => {
  console.log(explorer.stack);
});

let stack = [];
explorers.map((explorer) => {
  stack.push(explorer.stack);
});

console.log(stack);

console.log("-------------");

const jsStack = explorers.filter((explorer) => explorer.stack.includes("js"));

console.log(jsStack);

const mexicoExplorers = explorers.find((explorer) => explorer.city === "CDMX");

console.log(mexicoExplorers);

const totalExercises = explorers.reduce((acc, obj) => {
  return acc + obj.exercises_completed;
}, 0);

console.log(totalExercises);

const withExercisesFinished = explorers.some((explorer) => {
  return explorer.missions.frontend.exercisesFinished === true;
});

console.log(withExercisesFinished);

const isFinished = explorers.every((explorer) => {
  return explorer.missions.onboarding.isFinished;
});

console.log(isFinished);
