// config.js

// URL y clave pública del proyecto de Supabase
const supabaseUrl = 'https://tyqrzixrkrlcklhjvtfu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5cXJ6aXhya3JsY2tsaGp2dGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzg2MDYsImV4cCI6MjA2MjgxNDYwNn0.TxhpbioYVXLKH5z4VQfIPzYH7it5c9Qaf-pyI-vWrLo';

let supabase; // Declara la variable que será global

// Solo intenta inicializar si la librería Supabase (supabaseJs) está cargada desde el CDN
// y las claves están presentes y son válidas.
if (typeof supabaseJs !== 'undefined' && supabaseUrl && supabaseAnonKey && supabaseAnonKey.length > 50) { // Verificación básica de longitud de la clave
    try {
        supabase = supabaseJs.createClient(supabaseUrl, supabaseAnonKey);
        // console.log('Cliente Supabase inicializado con éxito desde config.js'); // Descomenta para depurar si es necesario
    } catch (e) {
        console.error('Error al inicializar el cliente Supabase en config.js:', e.message);
        supabase = null; // Asegura que supabase sea null si falla la inicialización
    }
} else {
    let errorMsg = 'Error crítico en config.js: ';
    if (typeof supabaseJs === 'undefined') {
        errorMsg += 'La librería Supabase (supabaseJs) no está definida. Asegúrate de que el CDN de Supabase se cargue ANTES que config.js en tu HTML. ';
    }
    if (!supabaseUrl || !supabaseAnonKey) {
        errorMsg += 'Faltan supabaseUrl o supabaseAnonKey en config.js. ';
    }
    if (supabaseAnonKey && supabaseAnonKey.length <= 50) { 
        errorMsg += 'La clave anónima de Supabase (supabaseAnonKey) en config.js parece incorrecta o es demasiado corta. ';
    }
    console.error(errorMsg);
    supabase = null; // Asegura que supabase sea null si hay problemas de configuración
}
