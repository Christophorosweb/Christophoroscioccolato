// config.js
console.log('config.js: Script started.'); // Log: Script execution begins

// Check immediately if supabaseJs is available from the CDN
if (typeof supabaseJs !== 'undefined') {
    console.log('config.js: supabaseJs IS defined globally when config.js starts execution.'); // Log: supabaseJs found
} else {
    console.warn('config.js: supabaseJs IS UNDEFINED globally when config.js starts execution. This is the main issue if it happens.'); // Log: supabaseJs NOT found
}

// URL y clave pública del proyecto de Supabase
const supabaseUrl = 'https://tyqrzixrkrlcklhjvtfu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5cXJ6aXhya3JsY2tsaGp2dGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzg2MDYsImV4cCI6MjA2MjgxNDYwNn0.TxhpbioYVXLKH5z4VQfIPzYH7it5c9Qaf-pyI-vWrLo';

let supabase; // Declara la variable que será global

// Solo intenta inicializar si la librería Supabase (supabaseJs) está cargada desde el CDN
// y las claves están presentes y son válidas.
if (typeof supabaseJs !== 'undefined' && supabaseUrl && supabaseAnonKey && supabaseAnonKey.length > 50) {
    console.log('config.js: Attempting to initialize Supabase client because supabaseJs is defined and keys seem okay.'); // Log: Attempting initialization
    try {
        supabase = supabaseJs.createClient(supabaseUrl, supabaseAnonKey);
        console.log('config.js: Supabase client initialized successfully.', supabase); // Log: Success
    } catch (e) {
        console.error('config.js: Error during Supabase client initialization:', e.message, e); // Log: Initialization error
        supabase = null;
    }
} else {
    // This block executes if pre-initialization checks fail.
    let errorMsg = 'config.js: Critical error during pre-initialization checks: ';
    if (typeof supabaseJs === 'undefined') {
        errorMsg += 'supabaseJs is undefined. Ensure Supabase CDN script (<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>) loads BEFORE config.js in your HTML. ';
        console.error('config.js: Pre-check failed: supabaseJs is undefined.'); // Log: Specific failure point
    }
    if (!supabaseUrl || !supabaseAnonKey) {
        errorMsg += 'Missing supabaseUrl or supabaseAnonKey. ';
        console.error('config.js: Pre-check failed: supabaseUrl or supabaseAnonKey is missing.'); // Log: Specific failure point
    } else if (supabaseAnonKey.length <= 50) { // Added 'else if' for better logic flow if supabaseAnonKey is present but short
        errorMsg += 'supabaseAnonKey appears incorrect or too short. ';
        console.error('config.js: Pre-check failed: supabaseAnonKey length is insufficient.'); // Log: Specific failure point
    }
    console.error(errorMsg); // The user-facing error message from before
    supabase = null;
}

// Final check for the supabase variable state after all attempts
if (supabase) {
    console.log('config.js: Script finished. The global "supabase" variable IS populated.');
} else {
    console.warn('config.js: Script finished. The global "supabase" variable is NULL. Initialization failed or was skipped.');
}
