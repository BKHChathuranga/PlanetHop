export function nameValidator(name) {
  if (name === '') return "Name can't be empty."
  return ''
}

export function npnValidator(npn) {
  if (npn === '') return "NIP can't be empty."
  return ''
}


export function phoneValidator(phone) {
  const re = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
  if (!phone) return "Phone Number can't be empty."
  if (!re.test(phone)) return 'Ooops! We need a valid phone number.'
  return ''
}
