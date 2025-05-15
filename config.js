// config.js

// URL y clave pública del proyecto de Supabase
const supabaseUrl = 'https://tyqrzixrkrlcklhjvtfu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5cXJ6aXhya3JsY2tsaGp2dGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzg2MDYsImV4cCI6MjA2MjgxNDYwNn0.TxhpbioYVXLKH5z4VQfIPzYH7it5c9Qaf-pyI-vWrLo';

// Cliente de Supabase inicializado y disponible globalmente.
// Nos aseguramos de que la librería Supabase JS (la variable global 'supabaseJs' 
// creada por el CDN) ya esté cargada desde index.html ANTES de que este script config.js se ejecute.
let supabase; // Declara la variable que será global

// Verificar que la librería Supabase (supabaseJs) esté cargada y las claves estén definidas
if (typeof supabaseJs !== 'undefined' && supabaseUrl && supabaseAnonKey) {
    try {
        supabase = supabaseJs.createClient(supabaseUrl, supabaseAnonKey);
        // Puedes descomentar la siguiente línea para verificar en la consola si el cliente se inicializó:
        // console.log('Cliente Supabase inicializado con éxito desde config.js');
    } catch (e) {
        console.error('Error al inicializar el cliente Supabase en config.js:', e);
    }
} else {
    console.error('Error en config.js: La librería Supabase (supabaseJs) no está definida, o faltan supabaseUrl/supabaseAnonKey. Asegúrate de que el CDN de Supabase se cargue ANTES que config.js y que las variables en config.js sean correctas.');
}
