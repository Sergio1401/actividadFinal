import { Router } from "express"
const router = Router()

router.get('/',(req, res) => res.render('index', { title: 'Este es el index'}))
router.get('/about',(req, res) => res.render('about', { title: 'Pagina About me'}))
router.get('/contact',(req, res) => res.render('contact', { title: 'Pagina Contact me'}))

export default router