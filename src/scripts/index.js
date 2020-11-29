var totalScoor = 0;
var scale = 1;

var genderList = ["Female", "Male", "Others"];
var eyeColorList = ["Green", "Blue", "Black", "Brown"];
var ageList = ["18-24", "25-30", "30-45", "46-55", "56-70", "over 70"];
var weightList = [
  "50-55",
  "56-65",
  "66-70",
  "71-80",
  "80-90",
  "91-100",
  "over 100",
];
var originList = [
  "west european",
  "east european",
  "north American (USA,Canada)",
  "asian",
  "middle eastern",
  "south American",
  "north african",
  "south african",
];
var allFeatures = [eyeColorList, ageList, weightList, originList, genderList];

function submit() {
  var origin = $(".origin :selected").text();
  var age = $(".age :selected").text();
  var weight = $(".weight :selected").text();
  var skinColor = document.getElementById("myRange").value;
  var eyeColor = $("#eyeColor input:checked").val();
  var gender = $("#genders input:checked").val();

  inputFeatures = [eyeColor, age, weight, origin, gender];
  var counter = 0;
  for (let i = 0; i < allFeatures.length; i++) {
    counter++;
    totalScoor =
      totalScoor +
      evalFeature(inputFeatures[i], allFeatures[i].reverse(), scale);
  }
  totalScoor = totalScoor + parseInt(skinColor);

  localStorage.setItem("scoor", totalScoor);
}

function evalFeature(value, list, scale) {
  for (let i = 0; i < list.length; i++) {
    if (value == list[i]) {
      console.log(value + "& " + i * 10);
      return i * 10 * scale;
    }
  }
}
