
let quote = [
"I've got a theory that if you give 100 percent all of the time, somehow things will work out in the end. -Larry Bird", 
"He who is not courageous enough to take risks will accomplish nothing in life. -Muhammad Ali", 
"Life opens up opportunities to you, and you either take them or you stay afraid of taking them. -Jim Carrey", 
"The prism through which you experience life is so unique. There is no objective experience. -Sterling K. Brown",
"There's always an element of fear that you need to work a lot until people get sick and tired of you or finally figure out that you're a fraud after all! - Ben Stiller",
"There's an old saying in Tennessee—I know it's in Texas, probably in Tennessee—that says, 'Fool me once, shame on...shame on you. ... -George W.  Bush"
];

textSequence(0);
function textSequence(i) {

    if (quote.length > i) {
        setInterval(function() {
            document.getElementById("sequence").innerHTML = quote[i];
            textSequence(++i);
        }, 4000); 

    } else if (quote.length == i) { 
        textSequence(0);
    }
  }
