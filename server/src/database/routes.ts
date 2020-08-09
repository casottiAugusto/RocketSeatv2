import express from 'express';
import ClassesController from '../Controllers/ClassesController';
import ConnectionsController from '../Controllers/ConnectionsController';

const routes= express.Router();
const classesController= new ClassesController
routes.post('/classes',classesController.create )
routes.get('/classes',classesController.index )
const connectuinsController=new ConnectionsController()
routes.post ('/connections',connectuinsController.create)
routes.get ('/connections',connectuinsController.index)

export default routes;
