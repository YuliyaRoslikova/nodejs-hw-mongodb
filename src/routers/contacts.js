import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  postContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { validateMongoId } from '../middlewares/validateMongoId.js';
import { authenticate } from '../middlewares/authenticate.js';

const contactsRouter = Router();

contactsRouter.use('/', authenticate);

contactsRouter.get('/', ctrlWrapper(getAllContactsController));

contactsRouter.get(
  '/:contactId',
  validateMongoId,
  ctrlWrapper(getContactByIdController),
);

contactsRouter.post(
  '/',
  validateBody(postContactSchema),
  ctrlWrapper(createContactController),
);

contactsRouter.patch(
  '/:contactId',
  validateMongoId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

contactsRouter.delete(
  '/:contactId',
  validateMongoId,
  ctrlWrapper(deleteContactController),
);

export default contactsRouter;
