import { ContactsCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('invalid id');
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};
