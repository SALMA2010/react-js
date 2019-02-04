export class Validation {
  
    validation = (form, error) => {
      
        let emailerror = ''
        let passworderror = ''
        let isvalid=true;  
        console.log(error)
        if (!form.email.match(/\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,3}\b/)) {
            isvalid=false;
            emailerror = "invalid Email"
        } else{emailerror = ""}

        if (form.password.length < 6) {
            isvalid=false;
            passworderror = "password must be more than 6 character"
        }else{ passworderror = ""}

       
           error = {
                emailerror: emailerror,
                
                passworderror: passworderror,
            
                  }

        if( isvalid==true){return true}else{return error;}
        
    }

} 