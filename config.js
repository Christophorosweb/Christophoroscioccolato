// config.js

// URL y clave pública del proyecto
const supabaseUrl = 'https://tyqrzixrkrlcklhjvtfu.supabase.co';
const supabaseAnonKey = 'AQUI_VA_TU_CLAVE_ANON_PUBLICA_REAL'; // ¡¡¡REEMPLAZA ESTO CON TU CLAVE ANON PÚBLICA!!!

// Cliente de Supabase inicializado y disponible globalmente.
// Nos aseguramos de que la librería Supabase JS (supabaseJs) ya esté cargada 
// desde el CDN en index.html antes de que este script se ejecute.
let supabase; // Declara la variable globalmente
if (typeof supabaseJs !== 'undefined') {
    supabase = supabaseJs.createClient(supabaseUrl, supabaseAnonKey);
} else {
    console.error('Librería Supabase JS (supabaseJs) no encontrada. Asegúrate de que el CDN se cargue antes de config.js.');
}
