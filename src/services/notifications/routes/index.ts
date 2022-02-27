import express, { Application } from 'express';

import api from '@services/internal/infrastructure/api';

import { assertBody } from '@services/internal/middlewares/assert';
import { getNotifications, createNotification } from '@services/notifications/middlewares';
import { getAll, create } from '@services/notifications/controllers';
import { notificationBody } from '@services/notifications/validators';

const router = express.Router();

export default (app: Application) => {
  app.use(api.scope('notification'), router);

  router.get(
    '/',
    getNotifications,
    api.controller(getAll),
  );

  router.post(
    '/',
    assertBody(notificationBody),
    createNotification,
    api.controller(create),
  );
};
