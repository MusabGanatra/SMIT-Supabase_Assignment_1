const supabaseUrl = "https://mfwcibpbeqqtgbyyught.supabase.co";
const supabaseKey = "sb_publishable_NvwPu7CHkFZkr45OyUO8oQ_FcY54C17";

const supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseKey
);

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    alert(error.message);
    return;
  }

  alert("Login Successful");
  window.location.href = "dashboard.html";
}
