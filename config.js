// config.js

// URL y clave pública del proyecto
const supabaseUrl = 'https://tyqrzixrkrlcklhjvtfu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5cXJ6aXhya3JsY2tsaGp2dGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzg2MDYsImV4cCI6MjA2MjgxNDYwNn0.TxhpbioYVXLKH5z4VQfIPzYH7it5c9Qaf-pyI-vWrLo'; 

// Cliente de Supabase inicializado y disponible globalmente.
// Nos aseguramos de que la librería Supabase JS (supabaseJs) ya esté cargada 
// desde el CDN en index.html antes de que este script se ejecute.
let supabase; // Declara la variable globalmente
if (typeof supabaseJs !== 'undefined') {
    supabase = supabaseJs.createClient(supabaseUrl, supabaseAnonKey);
} else {
    console.error('Librería Supabase JS (supabaseJs) no encontrada. Asegúrate de que el CDN se cargue antes de config.js.');
}
