export default async function (req, res) {
    if (!req.body.name || !req.body.email || !req.body.message) {
        res.status(400).json({error: "Empty value"})
        return
    }
    let data = {
        service_id: process.env.SERVICE_ID,
        template_id: process.env.TEMPLATE_ID,
        user_id: process.env.USER_ID,
        accessToken: process.env.ACCESS_TOKEN,
        template_params: {
            'name': req.body.name,
            'message': req.body.message,
            'email': req.body.email
        }
    };
    await fetch('https://api.emailjs.com/api/v1.0/email/send',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }).then((httpResponse) => {
        if (httpResponse.ok) {
            console.log('Your mail is sent!');
            res.status(200).json({msg: 'Your mail is sent!'})
        } else {
            res.status(500).json({error: 'Unknown error'})
            reject
        }
    })
        .catch((error) => {
            console.log("Error: " + error);
            res.status(500).json({error: "Error: " + error})
        });

}