export const booked_Template = (input: any) => {
  return `
      <body style="margin: 0; padding: 0;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                  <td style="padding: 10px 0 30px 0;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
                          <tr>
                              <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0;">
                                  <img src="https://i.ibb.co/7QpKsCX/logo.png" alt="Logo" width="300" height="230" style="display: block;" />
                              </td>
                          </tr>
                          <tr>
                              <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                      <tr>
                                          <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                                              <b>Booked Appointment</b>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                              <p>Hi ${input.name},</p>
                                              <p>Thank you for booking an appointment with us. We will contact you shortly to confirm your appointment.</p>
                                              <p>Here are the details of your appointment:</p>
                                              <p>Appointment Date: ${input.date}</p>
                                              <p>Appointment Time: ${input.time}</p>
                                              <p>Appointment Type: ${input.type}</p>
                                              <p>Appointment Location: ${input.location}</p>
                                              <p>Appointment Notes: ${input.notes}</p>
                                              <p>Appointment Status: ${input.status}</p>
                                              <p>Appointment Price: ${input.price}</p>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                  <tr>
                                                      <td width="260" valign="top">
                                                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                              <tr>
                                                                  <td>
                                                                      <img src="https://i.ibb.co/7QpKsCX/logo.png" alt="Logo" width="100%" height="140" style="display: block;" />
                                                                  </td>
                                                              </tr>
                                                              <tr>
                                                                  <td style="padding: 25px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                                      <p>Thank you for choosing us!</p>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                      <td style="font-size: 0; line-height: 0;" width="20">
                                                          &nbsp;
                                                      </td>
                                                      <td width="260" valign="top">
                                                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                              <tr>
                                                                  <td>
                                                                      <img src="https://i.ibb.co/7QpKsCX/logo.png" alt="Logo" width="100%" height="140" style="display: block;" />
                                                                  </td>
                                                              </tr>
                                                              <tr>
                                                                  <td style="padding: 25px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                                      <p>Thank you for choosing us!</p>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </body>
  
      `;
};

// <h1>Booking Confirmation</h1>
//     <p>Thank you for booking with us. We look forward to seeing you soon.</p>
//     <p>Here are the details of your booking:</p>
//     <ul>
//         <li>Name: ${input.name}</li>
//         <li>Email: ${input.email}</li>
//         <li>Phone: ${input.phone}</li>
//         <li>Address: ${input.address}</li>
//         <li>Company: ${input.company}</li>
//     </ul>

//     <p>Best Regards,</p>
//     <p>Team</p>
