import { Router } from "express";


const trackingRouter = Router()

trackingRouter.route('/')
    .get()
    .post()

trackingRouter.route('/:id')
    .get()
    .delete()
    .put()

export default trackingRouter