import express from 'express';
import pitchController from './pitch.controller';
let router = express.Router();

router.get('/test', pitchController.test);

router.get('/', pitchController.generate);

export default router;