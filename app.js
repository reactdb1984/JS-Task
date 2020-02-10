// Users
var dataUsers = [
  { usersName: "Christian Wood", usersGroupID: 1, usersDOB: "1999-09-28" },
  { usersName: "Tina Clarke", usersGroupID: 1, usersDOB: "1973-10-23" },
  { usersName: "Laura White", usersGroupID: 2, usersDOB: "1992-01-14" },
  { usersName: "Jack Shaw", usersGroupID: 3, usersDOB: "1999-12-30" },
  { usersName: "Liam Murphy", usersGroupID: 2, usersDOB: "1984-02-26" },
  { usersName: "Sean Cook", usersGroupID: 2, usersDOB: "1969-11-23" },
  { usersName: "Carmen Graham", usersGroupID: 4, usersDOB: "1983-11-26" },
  { usersName: "Adrian Robinson", usersGroupID: 2, usersDOB: "1986-05-16" },
  { usersName: "Yvette Owen", usersGroupID: 2, usersDOB: "1973-02-19" },
  { usersName: "Kimberly Hughes", usersGroupID: 2, usersDOB: "2000-03-25" },
  { usersName: "Samuel Martin", usersGroupID: 1, usersDOB: "1960-11-26" },
  { usersName: "Brandon Graham", usersGroupID: 4, usersDOB: "1979-04-25" },
  { usersName: "Jamie Butler", usersGroupID: 3, usersDOB: "1986-05-20" },
  { usersName: "Dan Johnson", usersGroupID: 3, usersDOB: "1990-06-26" },
  { usersName: "George Robertson", usersGroupID: 2, usersDOB: "1973-11-16" },
  { usersName: "Karen Matthews", usersGroupID: 2, usersDOB: "1960-07-11" },
  { usersName: "Logan Simpson", usersGroupID: 2, usersDOB: "1990-05-31" },
  { usersName: "Elliott Allen", usersGroupID: 2, usersDOB: "1980-08-23" },
  { usersName: "Sebastian Khan", usersGroupID: 3, usersDOB: "1960-12-30" },
  { usersName: "Jackson Knight", usersGroupID: 4, usersDOB: "1994-07-09" },
  { usersName: "Cameron Carter", usersGroupID: 1, usersDOB: "1961-08-10" },
  { usersName: "Mike Walker", usersGroupID: 4, usersDOB: "1992-12-10" },
  { usersName: "Isla Hughes", usersGroupID: 3, usersDOB: "1969-02-08" },
  { usersName: "Georgia Hunt", usersGroupID: 2, usersDOB: "2000-07-06" },
  { usersName: "Kevin Morgan", usersGroupID: 2, usersDOB: "1974-06-03" },
  { usersName: "Ken White", usersGroupID: 3, usersDOB: "1977-12-07" }
];
//user count before suspension
console.log(dataUsers.length)
var dataGroups = [
  { groupID: 1, groupName: "Manager" },
  { groupID: 2, groupName: "Developer" },
  { groupID: 3, groupName: "Customer Service" },
  { groupID: 4, groupName: "Sales" }
];

//removing the 3 suspended users

dataUsers.splice(
  dataUsers.findIndex(e => e.usersName === "Adrian Robinson"),
  1
);

dataUsers.splice(
  dataUsers.findIndex(e => e.usersName === "Karen Matthews"),
  1
);

dataUsers.splice(
  dataUsers.findIndex(e => e.usersName === "Mike Walker"),
  1
);

//rendering the users after removing the suspended uses

let totalUserCount = dataUsers.length;

// Selecting the renderUserCount div and passing in the totalUserCount

document.getElementById("renderUserCount").innerHTML = totalUserCount;
//setting up the date in the correct format

function getMonth(month) {
  month = month - 1;
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  if (months[month] != null) {
    return months[month];
  } else {
    throw "Invalid Month No";
  }
}
const nth = function(d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
//converting the date
function convertDate(dateString) {
  var p = dateString.split(/\D/g);
  return [, p[2], nth(p[2]), " ", getMonth(p[1]), " ", p[0]].join("");
}
var ul = "<ul>";
let groupId = [];
var elem = document.querySelector("renderUserList");
dataUsers.forEach(function(user) {
  if (user.usersGroupID === 1) {
    ul +=
      "<li class=managers>" +
      user.usersName +
      " " +
      dataGroups[0].groupName +
      " " +
      convertDate(user.usersDOB) +
      "</li>";
  } else if (user.usersGroupID === 2) {
    ul +=
      "<li>" +
      user.usersName +
      " " +
      dataGroups[1].groupName +
      " " +
      convertDate(user.usersDOB) +
      "</li>";
  } else if (user.usersGroupID === 3) {
    ul +=
      "<li >" +
      user.usersName +
      " " +
      dataGroups[2].groupName +
      " " +
      convertDate(user.usersDOB) +
      "</li>";
  } else {
    ul +=
      "<li>" +
      user.usersName +
      " " +
      dataGroups[3].groupName +
      " " +
      convertDate(user.usersDOB);
    +"</li>";
  }
});

ul += "</ul>";
document.getElementById("renderUserList").innerHTML = ul;

var totalManager = [];
console.log(dataUsers.length);
for (i = 0; i < dataUsers.length - 1; i++) {
  if (dataUsers[i].usersGroupID === 1) {
    totalManager.push(1);
  }
}

console.log(totalManager);

var totalDevelopers = [];

for (i = 0; i < dataUsers.length - 1; i++) {
  if (dataUsers[i].usersGroupID === 2) {
    totalDevelopers.push(1);
  }
}

var CustomerServiceOps = [];

for (i = 0; i < dataUsers.length; i++) {
  if (dataUsers[i].usersGroupID === 3) {
    CustomerServiceOps.push(1);
  }
}

var Sales = [];

for (i = 0; i < dataUsers.length; i++) {
  if (dataUsers[i].usersGroupID === 4) {
    Sales.push(1);
  }
}

document.getElementById("renderGroupCount1").innerHTML = totalManager.length;

document.getElementById("renderGroupCount2").innerHTML = totalDevelopers.length;

document.getElementById("renderGroupCount3").innerHTML =
  CustomerServiceOps.length;

document.getElementById("renderGroupCount4").innerHTML = Sales.length;
