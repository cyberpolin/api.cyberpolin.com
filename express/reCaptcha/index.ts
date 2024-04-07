import fetch from 'node-fetch'

var secret = process.env.RECAPTCHA_SECRET_KEY

export default async function(req, res, createContext) {
    const {token, from, name, text} = req.body
    const ctx = await createContext(req, res)
    const url = `https://www.google.com/recaptcha/api/siteverify`

    const post  = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secret}&response=${token}`
        
    })
    const data = await post.json()
        if (data.success) {
          await ctx.prisma.hire.create({
            data: {
              name,
              email: from,
              content: text,
            },
          })
        } 
    res.send(data)
    
    
}