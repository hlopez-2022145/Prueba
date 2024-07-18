'use strict'

import { Router } from "express"
import {
    save,
    get, 
    update, 
    deleteAlert, 
    search, 
    getGenderCounts, 
    getTotalCases,
    getStatus, 
    getDistributionByAge,
   // deactivateAlert
} from "./alerta.controller.js"

import {upload}  from "../../configs/multer.js"
const api = Router()

api.post('/save', upload.single('fotoDesaparecido'), save)
api.get('/get', get)
api.put('/update/:id', update)
api.delete('/delete/:id', deleteAlert)
api.post('/search', search)
api.get('/getGenderCounts', getGenderCounts)
api.get('/getTotalCases', getTotalCases)
api.get('/getStatus', getStatus)
api.get('/getDistributionByAge', getDistributionByAge)
//api.put('/alertClient/deactivateAlert/:id', deactivateAlert)




export default api