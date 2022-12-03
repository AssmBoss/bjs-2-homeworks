function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((element1, index1)=> element1 === arr2[index1]);
}

function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0 ||(gender !== "мужской" && gender !== "женский" )) {
        return 0;
    }
    let genderUsers = users.filter(user => user.gender === gender);
    return genderUsers.reduce((acc, user, genderUsers) => (acc + user.age), 0)/genderUsers.length;
}