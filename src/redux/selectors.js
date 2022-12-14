export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
