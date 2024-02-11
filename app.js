const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MySQLAdapter = require('@bot-whatsapp/database/mysql')

/**
 * Declaramos las conexiones de MySQL
 */
const MYSQL_DB_HOST = 'localhost'
const MYSQL_DB_USER = 'usr'
const MYSQL_DB_PASSWORD = 'pass'
const MYSQL_DB_NAME = 'bot'
const MYSQL_DB_PORT = '3306'

/**
 * Aqui declaramos los flujos hijos, los flujos se declaran de atras para adelante, es decir que si tienes un flujo de este tipo:
 *
 *          Menu Principal
 *           - SubMenu 1
 *             - Submenu 1.1
 *           - Submenu 2
 *             - Submenu 2.1
 *
 * Primero declaras los submenus 1.1 y 2.1, luego el 1 y 2 y al final el principal.
 */


const flowDocs = addKeyword(['doc', 'documentacion', 'Paso1']).addAnswer(
    [
        '📄 Datos a Solicitar:',
        'Nombre y Apellido:',
        'Nombre o Rubro de la Empresa/Emprendimiento:',
        'Número Telefónico:',
        'Correo Electrónico:',
        'Ubicación de donde se solicita la Prestación del Servicio:',
        
        '\n*volver* Para mas opciones.',
    ]
);

const flowTuto = addKeyword(['tutorial', 'Contacto']).addAnswer(
    [
        '🙌 Contacto',
        'Maria Pia Navarro Salas',
        'NexusNestt',
        '+54 9 2233006290',
        'piaqasalas@gmail.com'
        ,
        '\n*volver* Para mas opciones.',
    ]
);

const flowGracias = addKeyword(['gracias', 'Paso2']).addAnswer(
    [
        '🚀 Para continuar con la aplicación del servicio por favor rellena el formulario a continuación:',
        'https://forms.gle/dzvisVhDA1SpZt1q6',
        
        '\n*volver* Para mas opciones.',
    ]
);




const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer('🌟 ¡Hola! 🌟 ¡Bienvenido/a a NexusNestt! 😊 Estamos emocionados de tenerte con nosotros y ansiosos por comenzar este increíble viaje contigo. Antes de sumergirnos en la creatividad, necesitamos algunos detallitos para asegurarnos de que todo sea perfecto para ti')
    .addAnswer(
        [
            'Tipo de Servicio a Adquirir:',
            '👉 *Paso1* ✨ Diseño de Marca-Diseño de Página Web-Gestión de Redes Sociales',
            '👉 *Paso2*  ✨ formulario ',
            '👉 *Contacto* ✨ contáctame ',
            '👉 *volver* ✨ regresar a las opciones ',
        ],
        null,
        null,
        [flowDocs, flowGracias, flowTuto]
    );

const flowVolver = addKeyword(['volver'])
    .addAnswer(
        [
            'Tipo de Servicio a Adquirir:',
            '👉 *Paso1* ✨ Diseño de Marca-Diseño de Página Web-Gestión de Redes Sociales',
            '👉 *Paso2*  ✨ formulario ',
            '👉 *Contacto* ✨ contáctame ',
            '👉 *volver* ✨ regresar a las opciones ',
        ],
        null,
        null,
        [flowDocs, flowGracias, flowTuto]
    );


const main = async () => {
    const adapterDB = new MySQLAdapter({
        host: MYSQL_DB_HOST,
        user: MYSQL_DB_USER,
        database: MYSQL_DB_NAME,
        password: MYSQL_DB_PASSWORD,
        port: MYSQL_DB_PORT,
    })
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)
    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
    QRPortalWeb()
}

main()
