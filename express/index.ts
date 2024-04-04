import verifyCaptcha from "./reCaptcha"
import bodyParser from "body-parser"

export default function extendExpressApp(app: any, createContext: any) {
    app.use(bodyParser.json())
    
    app.post('/api/hireme', (req, res) => verifyCaptcha(req, res, createContext))
    app.get('/api/hireme', async (req, res) => {
        const context = await ctx.createRequestContext(req, res)
        console.log('context', context)
        res.send('Hello World!')
    })
    
    app.get('/hello', (req: any, res: any) => {
        res.send('Hello World!')
    })
}