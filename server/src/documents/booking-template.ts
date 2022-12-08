import { Bookings } from "../generated/graphql";

interface IBookings extends Bookings {
  createdAt: string;
  updatedAt: string;
}

export const booked_Template = (input: IBookings) => {
  return `
      <body style="margin: 0; padding: 0;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style={
                    "background-color": "#f4f4f4",
                    "font-family": "Arial, sans-serif",
                    "box-shadow": "0 0 10px rgba(0,0,0,.12)",
                    "border-radius": "4px",
                    "margin": "1.5em auto",
          }>
              <tr>
                  <td style="padding: 10px 0 30px 0;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
                          <tr>
                              <td align="center"     style="padding: 40px 0 30px 0;">
                                  <img src="https://firebasestorage.googleapis.com/v0/b/mern-lms-somali-eduu.appspot.com/o/dheefside.png?alt=media&token=a278d523-3648-4927-b5c2-f71969005307" alt="Logo" width="300" height="70" style="display: block;" />
                              </td>
                          </tr>
                          <tr>
                              <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                      <tr>
                                          <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                                              <b>Booking Confimation</b>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                              <p>Hi ${
                                                input.firstName +
                                                " " +
                                                input.lastName
                                              },</p>
                                              <p>Thank you for booking an appointment with us. We will contact you shortly to confirm your appointment.</p>
                                              <p>Here are the details of your booked information:</p>
                                              <p>Booked Email: ${
                                                input.email
                                              }</p>
                                                <p>Booked Software: ${
                                                  input.software
                                                }</p>
                                                <p>Booked Company: ${
                                                  input.company
                                                }</p>
                                                <p>Booked Phone: ${
                                                  input.phone
                                                }</p>
                                                <p>Booked Date: ${
                                                  input.createdAt as string
                                                }</p>
                                                
                                          </td>
                                      </tr>
                                        <tr>
                                            <td>
                                           <h1>
                                             <a href="https://dheefside.com">Dheefside Softwares</a>    
                                           </h1>


                                                
                                           <h3>
                                           Thanks, Dheefside<br>
                                           Team
                                             </h3>
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
