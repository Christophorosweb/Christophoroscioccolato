// config.js
// Configuración de Supabase para Christophoros

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// URL y clave pública del proyecto
export const supabaseUrl = 'https://tyqrzixrkrlcklhjvtfu.supabase.co';
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5cXJ6aXhya3JsY2tsaGp2dGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1MDg2NzgsImV4cCI6MjAzMTA4NDY3OH0.hOkcBPYMZflGuCJrNhCIbAo2_C6Y23hU8JKwZkCb-xg';

// Cliente de Supabase ya inicializado
export const supabase = createClient(supabaseUrl, supabaseKey);
