// export function validation(email, password) {
//   const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
//   const isPasswordValid =
//     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

//   if (!isEmailValid) return "Email is Not Valid ";
//   if (!isPasswordValid) return "Password is Not Valid ";

//   return null;
// }

export function validation(name, email, password) {
  if (name != null) {
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if (!isNameValid) return "Name Is Not Valid";
  }
  const isEmailValid = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email is Not Valid";
  if (!isPasswordValid) return "Password is Not Valid";

  return null;
}
