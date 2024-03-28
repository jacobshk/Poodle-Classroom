import {assignmentsData} from './AssignmentData.js'

export const classData = [
    {className:'class1',classID:'12345',teacherName:"TeacherName1",teacherEmails:["TeacherEmail1@gmu.edu"],studentEmail:["StudentEmail1@gmu.edu"],assignments:[]},
    {className:'class2',classID:'11111',teacherName:"TeacherName2",teacherEmails:["TeacherEmail2@gmu.edu"],studentEmail:["StudentEmail2@gmu.edu"],assignments:[]},
    {className:'class3',classID:'54321',teacherName:"TeacherName3",teacherEmails:["TeacherEmail3@gmu.edu"],studentEmail:["StudentEmail3@gmu.edu"],assignments:[]},
]

classData.forEach((item) => {
    item.assignments=assignmentsData;
});