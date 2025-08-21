react notes
what is emmet?
Emmet is a web development toolkit and a plugin for text editors that significantly speeds up writing HTML and CSS code. It allows developers to use short, CSS-like abbreviations that are then expanded into full code blocks. This streamlined approach boosts productivity by reducing the amount of typing required and minimizing errors. 

2) Difference between a Library and Framework?
The fundamental difference between a library and a framework lies in the concept of "inversion of control."
Library: A library is a collection of pre-written code (functions, classes, modules) that provides specific functionalities to be used in your application. When using a library, your code calls the library's code. You, as the developer, maintain control over the application's flow and decide when and where to invoke the library's functions to perform specific tasks. Libraries are typically more focused on providing tools for particular problems, like handling strings, performing mathematical operations, or rendering UI components.
Framework: A framework, on the other hand, provides a structured foundation and a set of rules for building an application. It dictates the overall architecture and flow of the application. When using a framework, the framework's code calls your code. The framework provides designated points or "hooks" where you can plug in your custom code, but the framework itself controls the execution flow and invokes your code when needed. Frameworks are often more comprehensive, offering solutions for broader aspects of application development, such as web application structure, database interaction, or user authentication.
In essence:
Libraries: You are in control; you call the library's functions.
Frameworks: The framework is in control; it calls your code.

3)What is CDN? Why do we use it?
A Content Delivery Network (CDN) is a globally distributed network of servers that speeds up the delivery of web content by caching it closer to users. We use CDNs to improve website performance, reduce latency, and handle high traffic loads, ensuring a faster and more reliable online experience for users worldwide. 
Here's why CDNs are used:
1. Faster Website Loading Times: 
CDNs store copies of website content (like images, videos, and scripts) on servers located in various geographic locations. 
When a user requests content, the CDN delivers it from the server closest to them, reducing the distance data needs to travel and minimizing latency. 
This results in significantly faster website loading times, especially for users far from the website's origin server. 
2. Improved Website Performance: 
By distributing content across multiple servers, CDNs reduce the load on the origin server, preventing it from becoming a bottleneck during traffic spikes.
This ensures that websites remain responsive and available even during peak usage times.
3. Enhanced User Experience: 
Faster loading times and improved website responsiveness contribute to a better user experience, keeping users engaged and reducing bounce rates.
A CDN can also improve the experience for users accessing the site from different geographical locations, as they receive content from the nearest server.
4. Increased Reliability and Redundancy: 
If one CDN server or data center goes down, the CDN can automatically route traffic to another available server, ensuring content delivery remains uninterrupted.
This provides redundancy and high availability, making websites more resilient to outages.
5. Cost Savings: 
By reducing the load on the origin server, CDNs can help lower bandwidth costs for website owners.
They also improve the efficiency of content delivery, potentially reducing the need for additional server infrastructure.
6. Security Benefits:
CDNs can help protect websites from DDoS attacks by absorbing the traffic and preventing it from reaching the origin server. 
Some CDNs also offer other security features, such as web application firewalls, to further enhance website security. 
In essence, CDNs act as a global network of caching servers that optimize website content delivery, leading to faster loading times, improved performance, and a better overall user experience. 



4) Why is React known as React?
React is named "React" because of its fundamental design principle: its ability to efficiently "react" to changes in data and state, and subsequently update the user interface.
Here's a breakdown of why this name is fitting:
Reactive Updates: React's core strength lies in its ability to automatically and efficiently update only the necessary parts of the user interface when data changes. Instead of manually manipulating the DOM (Document Object Model) for every change, React "reacts" to these changes by re-rendering only the affected components, leading to a more performant and responsive user experience.
Virtual DOM: React utilizes a "Virtual DOM," which is a lightweight in-memory representation of the actual DOM. When data changes, React compares the new Virtual DOM with the previous one, identifies the differences, and then efficiently updates only those specific changes in the real DOM. This process is known as "reconciliation" and is a key aspect of its reactive nature.
Component-Based Design: React encourages building UIs using reusable, self-contained components. These components are designed to "react" to changes in their own internal state or incoming "props" (properties passed from parent components), ensuring that updates are localized and manageable.\


What is crossorigin in script tag?
The crossorigin attribute in an HTML <script> tag is used to control how cross-origin requests for scripts are handled, specifically in relation to Cross-Origin Resource Sharing (CORS). This attribute is relevant when a script is being loaded from a different domain, subdomain, port, or protocol than the HTML document itself.
Purpose:
The primary purpose of the crossorigin attribute is to enable or modify CORS behavior for external scripts, which in turn affects how the browser handles security and error reporting for those scripts.
Values:
The crossorigin attribute can take two main values:
anonymous:
This is the default behavior if the crossorigin attribute is present but no value is specified, or if an invalid value is provided.
It instructs the browser to make a CORS request for the script without sending user credentials (like cookies, HTTP authentication, or client-side SSL certificates).
When crossorigin="anonymous" is used, and the server responds with the appropriate CORS headers (e.g., Access-Control-Allow-Origin), the browser will expose more detailed error information for the script in the developer console, rather than a generic "Script error."
use-credentials:
This value instructs the browser to make a CORS request for the script including user credentials.
This is typically used when the external script requires authentication or relies on cookies for its functionality.
Similar to anonymous, it enables more detailed error reporting if CORS is properly configured on the server.
Why it's important:
Security: It helps enforce the Same-Origin Policy by requiring explicit permission from the server to share resources across origins, mitigating certain types of cross-site attacks.
Error Reporting: Without the crossorigin attribute (or if CORS is not correctly configured), errors from cross-origin scripts are often reported as a generic "Script error" for security reasons. Using crossorigin and proper CORS setup allows for more informative error messages, aiding in debugging.
Resource Access: It enables the browser to request and execute scripts from different origins while adhering to security policies.


5)What is diference between React and ReactDOM
The crossorigin attribute in an HTML <script> tag is used to control how cross-origin requests for scripts are handled, specifically in relation to Cross-Origin Resource Sharing (CORS). This attribute is relevant when a script is being loaded from a different domain, subdomain, port, or protocol than the HTML document itself.
Purpose:
The primary purpose of the crossorigin attribute is to enable or modify CORS behavior for external scripts, which in turn affects how the browser handles security and error reporting for those scripts.
Values:
The crossorigin attribute can take two main values:
anonymous:
This is the default behavior if the crossorigin attribute is present but no value is specified, or if an invalid value is provided.
It instructs the browser to make a CORS request for the script without sending user credentials (like cookies, HTTP authentication, or client-side SSL certificates).
When crossorigin="anonymous" is used, and the server responds with the appropriate CORS headers (e.g., Access-Control-Allow-Origin), the browser will expose more detailed error information for the script in the developer console, rather than a generic "Script error."
use-credentials:
This value instructs the browser to make a CORS request for the script including user credentials.
This is typically used when the external script requires authentication or relies on cookies for its functionality.
Similar to anonymous, it enables more detailed error reporting if CORS is properly configured on the server.
Why it's important:
Security: It helps enforce the Same-Origin Policy by requiring explicit permission from the server to share resources across origins, mitigating certain types of cross-site attacks.
Error Reporting: Without the crossorigin attribute (or if CORS is not correctly configured), errors from cross-origin scripts are often reported as a generic "Script error" for security reasons. Using crossorigin and proper CORS setup allows for more informative error messages, aiding in debugging.
Resource Access: It enables the browser to request and execute scripts from different origins while adhering to security policies.
6)What is difference between react.development.js and react.production.js files via CDN?
The react.development.js and react.production.js files, when served via a Content Delivery Network (CDN), represent two distinct versions of the React library, each optimized for a specific environment:
react.development.js (Development Version):
Purpose: Designed for use during the development phase of a React application.
Features: Includes extensive debugging aids, such as detailed error messages, warnings for common mistakes, and performance profiling tools.
Size and Performance: Larger in file size and generally slower in execution compared to the production version due to the inclusion of debugging code and less aggressive optimizations.
react.production.js (Production Version):
Purpose: Intended for deploying a React application to a live, production environment.
Features: Optimized for performance and minimal file size. It removes all development-specific code, warnings, and debugging information. The code is typically minified and compressed.
Size and Performance: Significantly smaller in file size and faster in execution, as it prioritizes efficiency and user experience over developer-centric features.
In essence, the development version assists developers in building and debugging, while the production version ensures optimal performance and a smooth user experience for end-users. It is crucial to use the appropriate version for each stage of your application's lifecycle.
7)What is async and defer?
What's the difference between async vs defer attributes ...async and defer are attributes used with the <script> tag in HTML to control how JavaScript files are loaded and executed, impacting page load performance. They both allow the browser to download the script without blocking HTML parsing, but differ in when they execute the script. 
async:
How it works: Downloads the script file asynchronously while the HTML is being parsed. Once the script is downloaded, it immediately pauses HTML parsing to execute the script. 
Execution order: Multiple async scripts may download concurrently, and their execution order is not guaranteed. 
Use cases: Suitable for scripts that are not dependent on other scripts or the DOM structure, such as analytics scripts (e.g., Google Analytics). 
Potential issue: Because async scripts execute as soon as they're downloaded, they can interrupt the HTML parsing process, potentially slowing down initial page rendering if the script is large or complex. 
defer:
How it works: Downloads the script file asynchronously while parsing the HTML, but the script is executed only after the HTML parsing is complete. 
Execution order: Scripts with the defer attribute are executed in the same order they appear in the HTML document. 
Use cases: Ideal for scripts that are not critical for initial rendering but need to be executed in a specific order after the DOM is ready, such as some utility scripts or scripts that manipulate the DOM after it's been fully loaded. 
Advantages: Generally preferred over async for scripts that rely on the DOM structure or other scripts, as it ensures execution order and doesn't interrupt HTML parsing. 
In essence:
async is useful for independent scripts that can be executed as soon as they're downloaded. 
defer is better for scripts that need to be executed in a specific order after the DOM is ready. 
