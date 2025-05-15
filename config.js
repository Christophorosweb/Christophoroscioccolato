// config.js
console.log('config.js: Script execution started.');

// Esta verificación es una salvaguarda. index.html debería asegurar que supabaseJs ya esté cargado.
if (typeof supabaseJs === 'undefined') {
    console.error('config.js: CRITICAL - supabaseJs is not defined. The Supabase CDN script likely did not load before config.js was called.');
    // Si supabaseJs no está, no podemos continuar. Aseguramos que window.supabase quede nulo.
    if (typeof window !== 'undefined') {
        window.supabase = null;
    }
} else {
    console.log('config.js: supabaseJs is defined. Proceeding with Supabase client initialization.');

    const supabaseUrl = 'https://tyqrzixrkrlcklhjvtfu.supabase.co';
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5cXJ6aXhya3JsY2tsaGp2dGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzg2MDYsImV4cCI6MjA2MjgxNDYwNn0.TxhpbioYVXLKH5z4VQfIPzYH7it5c9Qaf-pyI-vWrLo';

    // Asegura que el objeto window exista antes de intentar asignarle propiedades.
    if (typeof window !== 'undefined') {
        window.supabase = null; // Inicializa como null por defecto.

        try {
            console.log('config.js: Attempting to create Supabase client with URL and Key.');
            // Crea el cliente de Supabase y lo asigna a una variable global.
            window.supabase = supabaseJs.createClient(supabaseUrl, supabaseAnonKey);

            // Verificación crucial: ¿Es el objeto creado un cliente válido?
            if (window.supabase && typeof window.supabase.from === 'function') {
                console.log('config.js: Supabase client CREATED successfully and VALID (has .from method).', window.supabase);
            } else {
                // Esto sucedería si createClient devuelve algo inesperado o si supabaseJs está corrupto.
                console.error('config.js: Supabase client was created, but it appears INVALID (supabase.from is not a function). Object:', window.supabase);
                window.supabase = null; // Anula si no es válido.
            }
        } catch (e) {
            // Captura errores que puedan ocurrir durante la llamada a createClient.
            console.error('config.js: Error occurred during supabaseJs.createClient() execution:', e);
            window.supabase = null;
        }
    } else {
        // Este caso es muy improbable en un entorno de navegador estándar.
        console.error('config.js: CRITICAL - "window" object is not defined. Cannot set global supabase client.');
    }
}

// Mensaje final para indicar el estado de window.supabase al final de la ejecución de este script.
if (typeof window !== 'undefined') {
    console.log('config.js: Script execution finished. Final state of window.supabase:', window.supabase);
} else {
    console.log('config.js: Script execution finished, but "window" object was not defined.');
}
