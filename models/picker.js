
//pick a student by the color code,
//return a new object that is keyed by priority

picker = () => {
  const {students} = this.props.currentBatch

  const redStudents = students.reduce(function(student){
    let colorCode = student.evaluation.slice(0)
    return student.priority === 1
  })

  const yellowStudents = student.reduce(function(student){
    let colorCode = student.evaluation.slice(0)
    return student.priority === 2
  })

  const greenStudents = student.reduce(function(student){
    let colorCode = student.evaluation.slice(0)
    return student.priority === 3
  })

  const red = redStudents.length
  const yellow = yellowStudents.length
  const green = greenStudents.length

  const chooseColor = Math.random()

}


students.json //array

var picker = students.reduce(function(all, item, index) {
  if(item.priority === "1") {
    all[item.priority] = item.name;
  else
    (item.priority === "2")
  else
    (item.priority === "3")
  }
  return all;
},{});
//=> 1: "Joe Gage", 1: "walter Mitty", 2: "John Ruth", 2: "Alice Doe",3: "Marry Poppins"

students.filter(function(item, index) {
  return item.priority === "1";
})
//picker 2 - where selection priority is set as follows:
//1-first to be selected "red"
//2-second "yellow"
//3-last, means "green"
var students = [
    {name: "John Ruth",
    id       : 5566,
    photo: "http://xxx",
    color: "yellow"
    priority: "2"},

    {name: "Walter Mitty",
    id       : 1236,
    photo: "http://xxx",
    color: "yellow"
    priority: "1"},

    {name: "Alice Doe",
    id       : 5098,
    photo: "http://xxx",
    color: "yellow"
    priority: "2"},

    {name: "Mary Poppins",
    id       : 6543,
    photo: "http://xxx",
    color: "yellow"
    priority: "3"},

    {name: "Oswaldo Monterray",
    id       : 0987,
    photo: "http://xxx",
    color: "yellow"
    priority: "1"},

    {name: "Cindy Domergue",
    id       : 3417,
    photo: "http://xxx",
    color: "yellow"
    priority: "3"},
];
//filter
Array.prototype.filter = function(fn) {
  return this.reduce(function(all, item, index) {
    if(fn(item, index)) {
      all.push(item);
    }
    return all;
  }, []);
}

students.filter(function(item, index) {
  return item.priority === "1";
})
//map
students.map(function(item) {return item.priority});
