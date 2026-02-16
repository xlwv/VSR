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
    const response = await fetch(
      "https://leadapi.scaledino.com/api/leads/web",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const text = await response.text();
    console.log("Scaledino Response:", text);

    return response.ok;
  } catch (error) {
    console.error("Lead submission failed:", error);
    return false;
  }
};