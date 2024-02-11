### CHATBOT Whatsapp (Baileys Provider)

<p align="center">
  <img width="300" src="https://imgur.com/a/QGq4pF9">
</p>


**Con esta librería, puedes construir flujos automatizados de conversación de manera agnóstica al proveedor de WhatsApp,** configurar respuestas automatizadas para preguntas frecuentes, recibir y responder mensajes de manera automatizada, y hacer un seguimiento de las interacciones con los clientes.  Además, puedes configurar fácilmente disparadores que te ayudaran a expandir las funcionalidades sin límites. **[Ver más informacion](https://reddallya.github.io/portfolioWeb/)**

```js
const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])

    const adapterProvider = createProvider(BaileysProvider, {
        accountSid: process.env.ACC_SID,
        authToken: process.env.ACC_TOKEN,
        vendorNumber: process.env.ACC_VENDOR,
    })

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
}
```

```
npm install
npm start
```

---
## Recursos
- [📄 Documentación](https://bot-whatsapp.netlify.app/)
- [🎥 Youtube](https://www.youtube.com/channel/UCZ3gA58IlzjaA6siZaQU0jg)