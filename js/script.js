

!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="eKDitBAEsCZJHY00iZwo9vkXdFXaPFKG";analytics.SNIPPET_VERSION="4.13.2";
analytics.load("eKDitBAEsCZJHY00iZwo9vkXdFXaPFKG");
analytics.page();
}}();



function login() {

    var email = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var b;

    if (email != "") {

        if (email.match("demo*")) {
            alert("valid User");
            id_var = email.split("@");
            var id = id_var[0];

            // Account details
            if (email == "demo1a@app.com" || email == "demo2a@app.com") {
                var acc_id = "APP";
                var acc_name = "Apple Technologies Ltd";
            }

            if (email == "demo1w@wip.com" || email == "demo2w@wip.com") {
                var acc_id = "WIP";
                var acc_name = "Wipro Ltd";
            }
          if (email == "demo1i@inf.com" || email == "demo2i@inf.com") {
                var acc_id = "INFY";
                var acc_name = "Infosys Limited";
            }
          
          
            analytics.identify( id , {
              email: email,
              attr1:"Attribute1",
              Language:"English"
          });
          
            analytics.group(acc_id, {
              name: acc_name
            });



            // //passing user and account objects:
            // aptrinsic("identify", {
            //     //User Fields
            //     "id": id, // Required for logged in app users
            //     "email": email,
            // }, {
            //     //Account Fields

            //     "id": acc_id, //Required
            //     "name": acc_name,
            // });


            alert("Logged in user id :" + id + "  from  " + id_var[1]);
            window.location = "index.html";


        } else
            alert("Invalid User,enter demo1a@app.com or demo2a@app.com or demo1w@wip.com or demo2w@wip.com");

    } else {
        alert("Please enter demo1a@app.com or demo2a@app.com or demo1w@wip.com or demo2w@wip.com");
    }

}


function tindogCustomevent(){
 aptrinsic('track', 'tindogCustomevent'); 
   
}

function kill_session() {
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", "session_destroyer.php", false);
    xmlhttp.send();

    document.getElementById("id_of_a_hidden_div").innerHTML = xmlhttp.responseText;
    // window.location = "login.html";
}
