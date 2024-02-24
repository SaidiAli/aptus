"use server";

export async function handleFormSubmission(_: any, formData: FormData) {
  let res;

  const data = {
    personalizations: [
      {
        to: [
          {
            email: "info@aptusagency.com",
          },
        ],
      },
    ],
    from: {
      email: "info@aptusagency.com",
    },
    subject: "Aptus Inquiry Email",
    content: [
      {
        type: "text/plain",
        value: `Name: ${formData.get("fullName")} \n Email: ${formData.get(
          "email"
        )} \n Message: \n ${formData.get("message")}`,
      },
    ],
  };

  let response;

  try {
    response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    return {
      status: "error",
      message: '"connection problem, please check your internet!"',
    };
  }

  if (response?.ok) {
    res = {
      status: "success",
      message: "message sent",
    };
  } else {
    res = {
      status: "error",
      message: "failed to send",
    };
  }

  return res;
}

export async function subscribe(_: any, formData: FormData) {
  let res;

  const data = {
    personalizations: [
      {
        to: [
          {
            email: "info@aptusagency.com",
          },
        ],
      },
    ],
    from: {
      email: "info@aptusagency.com",
    },
    subject: "Someone has subscribed for Aptus newsletter",
    content: [
      {
        type: "text/plain",
        value: `Data: ${formData.get("email")}`,
      },
    ],
  };

  let response;

  try {
    response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    return {
      status: "error",
      message: '"connection problem, please check your internet!"',
    };
  }

  if (response?.ok) {
    res = {
      status: "success",
      message: "you have subscribed",
    };
  } else {
    res = {
      status: "error",
      message: "failed to send",
    };
  }

  return res;
}
