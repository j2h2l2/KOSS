const students = [
    { name: 'kyeongrok', score: 85 },
    { name: 'jihyun', score: 95 },
    { name: 'minsup', score: 76 }
];

function getDegree(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else {
        return 'F';
    }
}

students.forEach((student) => {
    const result = `name: ${student.name}, score: ${getDegree(student.score)}`;
    console.log(result);
});