//notes
//span: generic inline container
//div: generic block level container
//p: paragraph of text. block level element



//css
//static: default. not positioned in any special way. always positioned according to the normal flow of the page

//fixed: positioned relative to the viewport. it stays in the same place even if the page is scrolled.
does not leave a gap in the page where it would normally have been calculated

//relative: positioned relative to its normal position. so top, right, bottom left are adjustments away from the normal position

//absolute: positioned relative to the nearest positioned ancestor. if no ancestors, it uses document body. and moves along with page scroling

//Notes:
z-index specifies the stack order of an element: infront of or behind others
a "positioned element" is an element whos position is anything but static


//box model
//outside - margin - border - padding - content - inside
//content is text or images
//padding clears an area around content
//border goes around the padding
//margin clears an area outside the border


//pseudoclass: allows you the change the styling of an element based on a state change of the element
events that might change the state are mouse over, or clicking, or visiting

so for an a tag you might have

a:link { color: green }
a:visited { color: blue }
a:hover { color: red }
a:active { color: yellow }

can be combined with css classes a.highlight:hover

also theres a :lang pseudoclass. what?

visibility: hidden and display: none property.
//hidden: renders the element, but it exists as size 0px,0px. fully transparent. nothing is drawn. still affects layout.
//display none: doesn't render the element. example script tags are display: none; by defauly


//javascript prototypes
Javascript has multiple ways to specify inheritance.
Specifically prototype is an internal link to the object that an object inherits from

//what is closure in javascript
a closure is a special kind of object that combines two things
a function and the environemnt in which that function was created
the environment consists of any local variables that were in-scope at the time the closure was created

//design patterns in javascript
//patterns are proven solutions
//patterns can be easily reused
//patterns can be expressive
//makes communication faster, prevents bugs, solves bugs earlier, generalized solutions

//solves a particular problem
//solution to this problem cannot be obvious
//concept described must be proven
//it describes a relationship

//patterns and antipatterns

The patterns we will be exploring in this section are the:
• Creational Pattern
• Constructor Pattern
• Singleton Pattern
• Module Pattern
• Revealing Module Pattern
• Observer Pattern
• Mediator Pattern
• Prototype Pattern
• Command Pattern
• Facade Pattern
• Factory Pattern
• Mixin Pattern
• Decorator Pattern
• Flyweight Pattern

Patterns MVx pattern
MVP, MVC, MVVM


//tell me about HTML5
The most interesting new API's are:

HTML Geolocation
HTML Drag and Drop
HTML Local Storage
HTML Application Cache
HTML Web Workers
HTML SSE

MathML
WebSockets
WebRTC
IFrame attributes
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5

//React life cycle








//security and auth - java
//api team - java
//integration - write integration points to pull in data salesforce, google - node,python,java
//apphub - applications PHP


//applications team - big ball. any applications are the client side of the api team.
//5 apps built: angular and react
//FLUX redux. common components library
