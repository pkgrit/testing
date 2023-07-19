import { useState } from "react"
import React from "react";

const VIBER_AUTH_TOKEN = "515b461d8667dde5-c56e88a1f4ec96d4-ec1525329ebce49c";

function SetNotification(){

    const [phone, setphone]= useState();

   async function sendtext(){
            const url = 'https://chatapi.viber.com/pa/send_message';
            const data = {
              receiver: '+9779826941835',
              type: 'text',
              text: 'Hello from Viber REST API!',
              sender: {
                name: 'Bumper App',
              },
            };
            const headers = {
              'Content-Type': 'application/json',
              'X-Viber-Auth-Token': VIBER_AUTH_TOKEN,
            };
            const response = await fetch(url, {
              method: 'POST',
              headers,
              body: JSON.stringify(data),
            });
            console.log(await response.json());
          }

    return(
        <>
      
            <div className="p-10">
                lets send message to viber

                <div className=" flex gap-5 py-5">
                    <label > Number</label>
                    <input
                    type="text"
                    name="fname"
                    className="text-black border border-slate-400 rounded-sm" 
                    placeholder=" +988 - xxxxxxxxxx"
                    onChange={(e)=> setphone(e.target.value)}
                />
                </div>

                <button className="flex justify-center p-1 bg-blue-500 rounded-lg w-20" onClick={sendtext}>
                  Send
              </button>

         

            </div>
        </>
    )
}

export default SetNotification