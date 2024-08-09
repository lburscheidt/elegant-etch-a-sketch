# Process
This is a cross between a sketchpad and an etch-a-sketch. The spec/brief can be found at [the project's page on The Odin Project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch)

As per spec, I created a website that has a 16x16 grid of square divs on it when you first open it. The divs are created using a javascript loop and CSS flexbox. I then set up a javascript function that makes the divs change color on mouseenter. I first added a new class to the div, but found that this was very limited as it only worked for the "standard" change from white to black, not for the "extra credit" assignment of changing to random colors. So I rewrote the code when I got to that part of the assignment so the divs could change to random colors on mouseenter.

I added the popup that prompts users to enter a number between 1 and 100 for a new grid and also wrote a failsafe into the function that defaults to the standard 16x16 grid when "Cancel" is pressed or input is otherwise invalid.

I then moved on to the extra credit assignments. I changed the color change mechanism so the cells would change to a randomized color, but I wanted users to be able to toggle between the standard and the colourful mode, so I added buttons and corresponding functions. This came in useful when I moved on to the incremental change of opacity. I spent a very long time on this one because using the opacity property caused a lot of problems with resetting the grid, and also I wasn't happy with how it affected the outlines of the cells. So I came up with a solution that uses the alpha channel of the RGBA color model and I think it looks pretty neat.

# To Do

I focused on the javascript functionality over making the site look great, but I'd like to style and structure it a bit more. I'd like to separate the "Clear" and "Reset" buttons from the ones that let you select a mode. I'd also like to add more modes such as an eraser and a color picker, and a mode that combines a user-chosen color and the darkening mode.  
