export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (email == '') return "Email can't be empty."
  var createdEmail = '';
  for (let i = 0; i < (Object.keys(email).length - 1); i++) {
    createdEmail += email[i]
  }
  console.log(createdEmail)
  if (!re.test(createdEmail)) return 'Ooops! We need a valid email address.'
  return ''
}
