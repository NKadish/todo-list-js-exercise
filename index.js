// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(taskName, taskDescription) {
  const task = {
    'taskName': taskName,
    'taskDescription': taskDescription,
    'isItComplete?': false,
    'logTaskState': function() {
      console.log(`${this.taskName} has${this['isItComplete?'] ? " " : " not "}been completed`);
    },
    'completeTask': function() {
      this['isItComplete?'] = true;
    }
  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask('Laundry', 'Clean dirty laundry');
const task2 = newTask('Vacuum', 'Vacuum the dirty basement');
const tasks = [task1, task2];

task1.logTaskState();
task1.completeTask();
task1.logTaskState();
