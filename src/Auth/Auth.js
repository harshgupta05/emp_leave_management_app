import { User } from "./db";

const Auth = (e, p) => {
  //   console.log(User);
  let flag = false;
  let role = "";
  let id;

  User.users.map((user) => {
    if (user.password === p && user.email === e) {
      flag = true;
      role = user.role;
      id = user.id;
    }
    // console.log(e, p);
  });
  //   console.log(flag, role, id);
  if (!flag) return null;

  return { role: role, id: id };
};

export { Auth };
