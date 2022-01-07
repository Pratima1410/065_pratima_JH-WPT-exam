const mysql = require("mysql");
const Promise = require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "test1",
};

async function checkConnection() {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();
  console.log("connection done");
  await Connection.endAsync();
}

async function addUser(user) {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();
  console.log("connection suceess");
  const sql = `insert into user value(?,?);`;
  await Connection.queryAsync(sql[(user.username, user.password)]);
  await Connection.endAsync();
}

const data1 = { username: "prachi", password: "1234" };

const selectAllUser = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Done");
  const sql = "select * from user";
  const list = await connection.queryAsync(sql, []);
  console.log(list);
  await connection.endAsync();
  return list;
};

selectAllUser();
addUser(data1);

module.exports = { selectAllUser, addUser };
