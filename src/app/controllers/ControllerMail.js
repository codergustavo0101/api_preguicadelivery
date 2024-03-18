const nodeMailer = require("nodemailer")
class ControllerBalance {

    async sendMail(req,res){

        try {

                const option = req.body.option

                if(option == 1){
                    
                const user = "entregadores@preguicadelivery.com.br"
                const pass = 'Xploit@@ython134'

                const name = req.body.name
                const mail = req.body.mail
                const cnpj = req.body.cnpj
                const phone = req.body.phone

                const motoboyName = req.body.motoboyName
                const cpfMotoboy = req.body.cpfMotoboy
                const phoneMotoboy = req.body.phoneMotoboy

                const transporter = nodeMailer.createTransport({
            
                    host:"smtp.hostinger.com",
                    port:465,
                    auth:{user,pass}
                })
                transporter.sendMail({
        
                    to:"entregadores@preguicadelivery.com.br",
                    subject:`Solicitação de contato`,
                    html:`
                    <p>Nome: ${motoboyName}</p>
                    <p>CPF:  ${cpfMotoboy}</p>
                    <p>Telefone: ${phoneMotoboy}</p>


                    `
                    
                }).then((sucess) =>{

                    
                    
                    return res.status(200).json({
                    message:"sucess",
                })
    
        
                }).catch((error) =>{
                    console.log(error)
                    return res.status(500).json({message:"Opss algo deu errado!"})
    
                })
                }

                if(option == 2){
                           
                const user = "entregadores@preguicadelivery.com.br"
                const pass = 'Xploit@@ython134'

                const name = req.body.name
                const mail = req.body.mail
                const cnpj = req.body.cnpj
                const phone = req.body.phone

                const transporter = nodeMailer.createTransport({
            
                    host:"smtp.hostinger.com",
                    port:465,
                    auth:{user,pass}
                })
                transporter.sendMail({
        
                    to:"restaurante@preguicadelivery.com.br",
                    subject:`Solicitação de contato`,
                    html:`
                    <p>Nome:${name}</p>
                    <p>CPF:${cnpj}</p>
                    <p>Telefone:${phone}</p>


                    `
                    
                }).then((sucess) =>{

                    
                    
                    return res.status(200).json({
                    message:"sucess",
                })
    
        
                }).catch((error) =>{
                    console.log(error)
                    return res.status(500).json({message:"Opss algo deu errado!"})
    
                })
                }
 



            
            
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new ControllerBalance();
