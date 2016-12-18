function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'John', lastName: 'Doe' };
greeter(user);
