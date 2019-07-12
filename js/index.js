// We are going to inject js into the iframe 
// THEY MUST BE ON THE SAME BASE URL OF YOU CANNOT ACCESS BECAUSE OF CROSS SCRIPTING

const iframes = document.querySelectorAll('iframe');

iframes.forEach(frame => {
    const frameDoc = frame.contentWindow.document.body || frame.contentDocument.body;

    console.log(frameDoc)
}) 