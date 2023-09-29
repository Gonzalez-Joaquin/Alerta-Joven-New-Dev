import { Router } from 'express'

import * as controller from '../controllers/individual.controller'

const individualRouter = Router()

individualRouter.route('/')
    .get(controller.getEntries)

export default individualRouter