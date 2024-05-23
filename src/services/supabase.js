import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://djipgnvbpobtcfjbjsrm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqaXBnbnZicG9idGNmamJqc3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyODU3ODMsImV4cCI6MjAzMTg2MTc4M30.6gNBvC4plcUW9yzBi_pJckiaE1q9IxfXBQ3Xy51k-Qw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl };
