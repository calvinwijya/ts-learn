interface Student {
  readonly name: string;
  readonly age: number;
}

let student: Student = { name: "calvin", age: 20 };

// student.name='asd'
// error cant change property
