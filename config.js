// config.js

// URL y clave pública del proyecto de Supabase
const supabaseUrl = 'https://tyqrzixrkrlcklhjvtfu.supabase.co';
// ¡¡¡REEMPLAZA ESTO CON TU CLAVE ANÓNIMA PÚBLICA REAL DE SUPABASE!!!
const supabaseAnonKey = 'AQUI_VA_TU_CLAVE_ANON_PUBLICA_REAL'; 

let supabase; // Declara la variable que será global

// Solo intenta inicializar si la librería Supabase (supabaseJs) está cargada
// y las claves están presentes y NO son el placeholder.
if (typeof supabaseJs !== 'undefined' && supabaseUrl && supabaseAnonKey && supabaseAnonKey !== 'AQUI_VA_TU_CLAVE_ANON_PUBLICA_REAL') {
    try {
        supabase = supabaseJs.createClient(supabaseUrl, supabaseAnonKey);
        // console.log('Cliente Supabase inicializado con éxito desde config.js'); // Descomenta para depurar
    } catch (e) {
        console.error('Error al inicializar el cliente Supabase en config.js:', e.message);
        supabase = null; // Asegura que supabase sea null si falla la inicialización
    }
} else {
    let errorMsg = 'Error en config.js: ';
    if (typeof supabaseJs === 'undefined') {
        errorMsg += 'La librería Supabase (supabaseJs) no está definida. Asegúrate de que el CDN de Supabase se cargue ANTES que config.js. ';
    }
    if (!supabaseUrl || !supabaseAnonKey) {
        errorMsg += 'Faltan supabaseUrl o supabaseAnonKey. ';
    }
    if (supabaseAnonKey === 'AQUI_VA_TU_CLAVE_ANON_PUBLICA_REAL') {
        errorMsg += 'La clave anónima de Supabase (supabaseAnonKey) no ha sido reemplazada por la real en config.js. ';
    }
    console.error(errorMsg);
    supabase = null; // Asegura que supabase sea null si hay problemas de configuración
}
