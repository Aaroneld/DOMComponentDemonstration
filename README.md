# DOMComponentDemonstration

This repo is a simple demonstration of using Javascript to render HTML to a Web Page utilizing the DOM and a component-based paradigm as the primary organization aspect for the code. 

## What is the DOM?

DOM stands for "Document Object Model" and it is vector by which we manipulated HTML elements via the JavaScript language. The DOM is a treelike representation of an HTML documents structure which can be read from and changed dynamically. As its name suggest, it uses "objects" as its fundamental unit of abstraction these are called "nodes". HTML elements (e.g `<p>...</p>, <img .../>`) are what these nodes represent. All of the pieces of information (e.g. text content, attributes, position on screen) which represent an HTML element are contained within an object as key value pairs. Each node is "aware" of its position in the DOM (and thus the HTML document.) This is because parts of the information contained within their object structure bear referances to their parent, child, and sibling nodes every piece of information necessary to determine node position. 

## What is a component?

In many fields of work, it is generally useful to look at all of the tasks required to meet a goal and to break those tasks down into groups which can be delegated to differant parties. That same idea holds true for programming. It is generally useful to break up all of the statements of our programs into groups of statements which are logical units (able to be separated and understood standing on their own.) In Javascript we can use functions to do this, it helps us keep things organized. When we use Javascript to generate dynamic chunks of HTML (collections of elements) It is useful to break the creation of these chunks down into piecemeal tasks and to organize them according to their purpose and place in the HTML structure as functions --- functions which create piece of HTML. These functions are components. Pieces of code organized into logical units of a similar purpose, HTML generation in this case. 
