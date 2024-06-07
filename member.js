function skillsMember() {
    var member = {
        name: 'Duy',
        age: 18,
        skills: ['JS', 'PHP', 'Python'],
    };
    member.skills.forEach(function (skill) {
        console.log(skill);
    });
}