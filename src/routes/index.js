import { Router } from "express"
const router = Router()

router.get('/',(req, res) => res.render('index', { title: 'InnovaTech Solutions'}))
router.get('/quienesSomos',(req, res) => res.render('quienesSomos', { title: '¿Quienes Somos?'}))
router.get('/servicios',(req, res) => res.render('servicios', { title: 'Servicios'}))
router.get('/portafolio',(req, res) => res.render('portafolio', { title: 'Portafolio'}))
router.get('/testimonios',(req, res) => res.render('testimonios', { title: 'Testimonio'}))
router.get('/contacto',(req, res) => res.render('contacto', { title: 'Contacto'}))

export default router