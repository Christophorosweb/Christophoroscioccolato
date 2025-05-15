// config.js
console.log('config.js: Script started.'); 

// Verifica si la librería base de Supabase (supabaseJs) está disponible.
// Esto debería ser cierto si index.html cargó el CDN de Supabase antes de llamar a loadConfigJs(),
// lo cual a su vez carga este archivo (config.js).
if (typeof supabaseJs !== 'undefined') {
    console.log('config.js: supabaseJs IS defined globally when config.js starts execution.');
} else {
    // Este es un punto crítico de fallo. Si supabaseJs no está definido aquí,
    // la inicialización del cliente fallará.
    console.warn('config.js: supabaseJs IS UNDEFINED globally when config.js starts execution. This indicates a severe loading order issue.');
}

// URL y clave pública de tu proyecto Supabase.
const supabaseUrl = 'https://tyqrzixrkrlcklhjvtfu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5cXJ6aXhya3JsY2tsaGp2dGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzg2MDYsImV4cCI6MjA2MjgxNDYwNn0.TxhpbioYVXLKH5z4VQfIPzYH7it5c9Qaf-pyI-vWrLo';

// Asegúrate de que la variable 'supabase' se declare en el ámbito global (window).
// Esto es crucial para que la función 'inicializarLogicaDeLaPagina' en index.html pueda acceder a ella.
window.supabase = null; 

// Intenta inicializar el cliente de Supabase.
if (typeof supabaseJs !== 'undefined' && supabaseUrl && supabaseAnonKey && supabaseAnonKey.length > 50) {
    console.log('config.js: Attempting to initialize Supabase client...');
    try {
        // Inicializa el cliente y lo asigna a window.supabase.
        window.supabase = supabaseJs.createClient(supabaseUrl, supabaseAnonKey);
        
        // Verifica si la inicialización fue exitosa y si el objeto cliente tiene los métodos esperados.
        if (window.supabase && typeof window.supabase.from === 'function') {
            console.log('config.js: Supabase client initialized successfully and seems valid.', window.supabase);
        } else {
            console.error('config.js: Supabase client initialization SEEMED to succeed, but supabase.from is not a function. The client object might be invalid:', window.supabase);
            window.supabase = null; // Invalida si no es correcto.
        }
    } catch (e) {
        // Captura cualquier error durante la creación del cliente.
        console.error('config.js: Error during Supabase client initialization via createClient():', e.message, e);
        window.supabase = null; 
    }
} else {
    // Mensajes de error si las pre-condiciones no se cumplen.
    let errorMsg = 'config.js: Critical error during pre-initialization checks for Supabase client: ';
    if (typeof supabaseJs === 'undefined') {
        errorMsg += 'supabaseJs is undefined. ';
        console.error('config.js: Pre-check failed: supabaseJs is undefined.');
    }
    if (!supabaseUrl || !supabaseAnonKey) {
        errorMsg += 'Missing supabaseUrl or supabaseAnonKey. ';
        console.error('config.js: Pre-check failed: supabaseUrl or supabaseAnonKey is missing.');
    } else if (supabaseAnonKey.length <= 50) { 
        errorMsg += 'supabaseAnonKey appears incorrect or too short. ';
        console.error('config.js: Pre-check failed: supabaseAnonKey length is insufficient.');
    }
    console.error(errorMsg);
    window.supabase = null; 
}

// Mensaje final sobre el estado de la variable global 'supabase'.
if (window.supabase) {
    console.log('config.js: Script finished. The global "window.supabase" variable IS populated and should be a valid client.');
} else {
    console.warn('config.js: Script finished. The global "window.supabase" variable is NULL. Initialization failed or was skipped.');
}
