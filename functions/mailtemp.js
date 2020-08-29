let Template = {
  HTMLTemplate: (name) => {
    return `
    <table style="width:600px;margin-left:auto;margin-right:auto;margin-top:3%;margin-bottom:3%">
    <tr>
        <td>
            <img src="https://raw.githubusercontent.com/DevFest-India/website-data/master/emailimg2.png" style="width:100%">
        </td>
    </tr>
    <tr>
        <td>
            <div style="margin:20px">
                <font face="Google Sans" color="#444444">
                    <p>Hi ${name}</p>
                    <p>Thanks for filling this form, we confirmed your registartion: :P</p>
                    <br>
                    <a href="https://devfestindia2020.web.app/" style="background:#0005DF;color:white;padding: 8px 15px;cursor: pointer;text-decoration:none">See More</a>  
                    
                    <a href="https://devfestindia2020.web.app/" style="border:1px solid #0005DF;color:#0005DF;padding: 7px 15px;cursor: pointer;text-decoration:none">Generate Profile Bage</a> 

                    <a href="https://devfestindia2020.web.app/" style="color:#0005DF;padding: 7px 15px;cursor: pointer;text-decoration:none">Add to Calendar</a> 
                    
                    <br><br>
                    <p>Follow us on <a style="color:#0005DF;text-decoration:none" href="https://twitter.com/DevFestIndia">Twitter</a> and keep an eye on <a style="color:#0005DF;text-decoration:none" href="https://twitter.com/hashtag/DevFestIndia">#DevFestIndia</a> for the latest updates and news about the event.</p>
                    <p>Regards,</p>
                    <p>Team DevFest India</p>
                </font>
            </div>
        </td>
    </tr>
    <tr style="background:#f3f3f3">
        <td>
            <div style="text-align:center">
                <font face="Google Sans">
                    <h3 style="color:#0005DF;margin-bottom:0">DevFest India</h3>
                    <a style="color:#0005DF;text-decoration:none" href="#">Twitter</a> 
                    | <a style="color:#0005DF;text-decoration:none" href="#">Youtube</a> 
                    | <a style="color:#0005DF;text-decoration:none" href="#">Website</a>
                  <br>
                  <br>
                </font>
            </div>
        </td>
    </tr>
</table>
    `;
  },
};

module.exports = Template
