export const submitLead = async ({
  name,
  email,
  phone,
  source = "Website",
  message = "",
}) => {
  const payload = {
    access_code: "DB06-FCDB-E37D-1E18-0A07-E259",
    name,
    email,
    phone,
    source,
    additional_col1: message,
  };

  try {
    // 1️⃣ Send to Scaledino
    const response = await fetch(
      "https://leadapi.scaledino.com/api/leads/web",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    // 2️⃣ Log internally — wrapped in type + payload
    await fetch("/api/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "form_submission",
        payload: {
          name,
          email,
          phone,
          source,
          message,
          page: typeof window !== "undefined" ? window.location.pathname : "unknown",
          submittedAt: new Date().toISOString(),
          scaledinoStatus: response.ok,
        },
      }),
    });

    return response.ok;
  } catch (error) {
    // 3️⃣ Log failure — also wrapped in type + payload
    await fetch("/api/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "form_submission_error",
        payload: {
          name,
          email,
          phone,
          source,
          message,
          error: error.message,
          page: typeof window !== "undefined" ? window.location.pathname : "unknown",
          submittedAt: new Date().toISOString(),
        },
      }),
    });

    return false;
  }
};