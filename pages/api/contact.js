// const mail = require('@sendgrid/mail');
// mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);
  console.log(body);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.desc}
`;

  // const data = {
  //   to: 'rohitrathorework@gmail.com',
  //   from: 'rohitrathorework@gmail.com',
  //   subject: `New message from ${body.name}`,
  //   text: message,
  //   html: message.replace(/\r\n/g, '<br />'),
  // };

  //  mail.send(data);

  res.status(200).json({ status: 'OK' });
};
