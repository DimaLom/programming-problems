const groupByCity = (data) =>
  data.reduce((result, { city, name }) => {
    if (result[city] && typeof result[city] === "string") {
      result[city] = [result[city], name];
    } else if (result[city]) {
      result[city].push(name);
    } else {
      result[city] = name;
    }

    return result;
  }, {});

const people = [
  {
    name: "Alex",
    city: "Moscow",
  },
  {
    name: "Ivan",
    city: "Moscow",
  },
  {
    name: "Joe",
    city: "New York",
  },
  {
    name: "Bob",
    city: "Berlin",
  },
  {
    name: "Biba",
    city: "Berlin",
  },
  {
    name: "Boba",
    city: "Berlin",
  },
];

console.log(groupByCity(people));
