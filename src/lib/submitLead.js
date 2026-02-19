// Helper function to get URL parameters
const getUrlParams = () => {
  if (typeof window === "undefined") return {};
  
  const params = new URLSearchParams(window.location.search);
  const urlParams = {};
  
  // Get all UTM and other parameters
  const paramNames = [
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
    'sub_source', 'additional_col2', 'additional_col3', 'additional_col2_select',
    'additional_col3_select', 'additional_col4_select', 'additional_col5_select',
    'services', 'status', 'whatsapp_lead_stage', 'whatsapp_conversation_summary'
  ];
  
  paramNames.forEach(param => {
    const value = params.get(param);
    if (value) urlParams[param] = value;
  });
  
  return urlParams;
};

export const submitLead = async ({
  name,
  email,
  phone,
  source = "Website",
  message = "",
}) => {
  // Get URL parameters
  const urlParams = getUrlParams();
  
  try {
    // Send to YOUR server-side API route (NOT directly to Scaledino)
    const response = await fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        source,
        message,
        urlParams, // Include URL parameters
      }),
    });

    const result = await response.json();

    // Log internally (NO SENSITIVE DATA)
    try {
      await fetch("/api/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "form_submission",
          payload: {
            source,
            page: typeof window !== "undefined" ? window.location.pathname : "unknown",
            submittedAt: new Date().toISOString(),
            apiStatus: response.ok,
            hasUtmParams: Object.keys(urlParams).length > 0,
            // DO NOT LOG: name, email, phone, message
          },
        }),
      });
    } catch (logError) {
      // Silently fail if logging doesn't work
      console.warn("Logging failed:", logError);
    }

    // Return result
    return {
      success: result.success,
      message: result.message || (result.success ? "Lead submitted successfully!" : "Submission failed"),
    };

  } catch (error) {
    // Log failure (NO SENSITIVE DATA)
    try {
      await fetch("/api/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "form_submission_error",
          payload: {
            source,
            error: error.message,
            page: typeof window !== "undefined" ? window.location.pathname : "unknown",
            submittedAt: new Date().toISOString(),
            // DO NOT LOG: name, email, phone, message
          },
        }),
      });
    } catch (logError) {
      // Silently fail if logging doesn't work
      console.warn("Logging failed:", logError);
    }

    return {
      success: false,
      message: "An error occurred. Please try again.",
    };
  }
};