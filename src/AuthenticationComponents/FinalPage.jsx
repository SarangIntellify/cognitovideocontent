import React from 'react'
import "./FinalPage.css";
export default function FinalPage() {
    return (
        <div class="mainclass">
            <div  class="divclass">
            <div class="container">
               <p class="text-block">Run and debug Java AWS Lambda locally using SAM CLI commands and Docker in IntelliJ Idea.</p>
                <iframe  width="550" height="345" src="https://www.youtube.com/embed/HVJrTxtHwM0"></iframe>
            </div>
            <div  class="container">
                {/* <button class="buttonfx slideleft">Deploy AWS Lambda source code to S3 bucket from IntelliJ IDEA | Invoke from Api gateway | Java </button> */}
                <p class="text-block">Deploy AWS Lambda source code to S3 bucket from IntelliJ IDEA | Invoke from Api gateway | Java</p>
                <iframe  width="550" height="345" src="https://www.youtube.com/embed/3qt7iA6PXNM"></iframe>
            </div>
            </div>
            <div  class="divclass">
            <div  class="container">
                <p class="text-block">AWS Kinesis | Complete implementation of producer and consumer lambda model for AWS kinesis in java </p>
                <iframe   width="550" height="345"  src="https://www.youtube.com/embed/QeKJ7rw6wWY"></iframe>
            </div>
            <div  class="container">
                <p class="text-block">AWS Cognito | Authentication(Signup, Confirmsignup, Login and many more.) using AWS CLI - Part 1</p>
                <iframe   width="550" height="345" src="https://www.youtube.com/embed/eDNvV61tbLk"></iframe>
            </div>
            </div>
          </div>

    )
}
