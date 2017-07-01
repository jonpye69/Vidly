function getAge(dateString) {
    var today = new Date();

    var birthDate = dateString.split("/");
    birthDate = new Date(birthDate[2], birthDate[1] - 1, birthDate[0]);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}