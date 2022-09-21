var NonConstGender;
(function (NonConstGender) {
    NonConstGender[NonConstGender["Male"] = 0] = "Male";
    NonConstGender[NonConstGender["Female"] = 1] = "Female";
})(NonConstGender || (NonConstGender = {}));
;
;
var nonConstGender = NonConstGender.Male;
var gender = 1 /* Gender.Female */;
console.log('');
console.log('NonConstGender is ' + nonConstGender);
console.log('Gender is ' + gender);
