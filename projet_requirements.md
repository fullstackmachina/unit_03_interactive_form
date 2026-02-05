Project Instructions

To complete this project, follow the instructions below. If you get stuck, ask a question on Slack or in the Treehouse Community.
 10 steps
•	Getting Started with the Project Files
If you haven’t already, download the project's starter files, unzip them, add them to the root of your project folder.
o	At the root of the project folder, create a folder named js and add a script.js file to it. This is where you’ll write your JavaScript. Carefully review the script tag near the bottom of the index.html file. Check that the value in the script tag’s src attribute matches the name of the folder and file that you created. This is necessary to connect the JavaScript to the HTML.
o	Open the project folder in your text editor. Open and view the script.js file that you created. Load the index.html file in Chrome, and open the Chrome DevTools Console.
o	To test that you have everything hooked up correctly, add console.log(‘Test’); to the script.js file, save it, and refresh the page in the browser. You should now see Test printed in the console.
o	Commit/push the updated project files to your GitHub repo.
o	If you have trouble with any of the above steps, be sure to reach out to your Slack team.
•	Name Field
When the page first loads, the first text field should have the focus state by default to prompt the user.
o	Use the focus() method on the <input type="text"> element for the "Name" field.

•	Job Role Section
The "Job Role" section has an <input type="text"> field where users can enter a custom job role. If the user selects "Other" in the "Job Role" drop-down menu, they can enter info into the "Other job role" text field. This field should be hidden by default and only be displayed if "Other" is selected in the drop-down menu.
o	Hide the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.
o	Program the "Job Role" <select> element to listen for changes. When a change is detected, display/hide the "text field" based on the selection in the drop-down menu.

•	T-Shirt Info Section
The options in the "Color" drop-down menu are not available for each t-shirt design, so the user shouldn’t be able to see or choose a color option until they have chosen a design.
o	Disable the "Color" <select> element.
o	Set up the "Design" <select> element to listen for changes. When a change is detected:
o	The "Color" <select> element should be enabled.
o	The "Color" <select> element should display an available color.
o	The "Color" dropdown menu should display only the color options associated with the selected design. For example:
o	If the user selects "Theme - JS Puns" then the "Color" menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
o	If the user selects "Theme - I ♥ JS" then the "Color" menu should only display "Tomato," "Steel Blue," and "Dim Grey."

NOTE
A select element is used for the color selection. There are two parts to a select element display: the element field and the drop-down menu which opens after clicking on the field. Both the "Color" field and drop-down menu must correctly update when the user selects a different theme. Neither should be empty or display unavailable theme / color combinations.
o	The selected attribute can determine which option element is displayed in the select field.
o	The hidden attribute can prevent option elements from being displayed in the drop down menu.

•	Activities Section
The "Total: $" paragraph below the "Register for Activities" section should update to reflect the total cost of all the selected activities.
o	Add an event listener to the "Register for Activities" fieldset element to listen for changes. When a change is detected:
o	If an activity is checked, the total cost should increase by the value in the data-cost attribute of the activity’s <input type="checkbox"> element.
o	If an activity is unchecked, the total cost should decrease by that amount.
o	The <p> element with the id of "activity-cost" below the activities section should update to reflect the adjustment made.

•	Payment Info Section
The credit card payment option should be selected for the user by default. So upon page load "Credit Card" should be the selected option of the select element, and the credit card payment section should be the only payment section displayed on the page. When the user selects a different payment option from the drop-down menu, the form should update to display only the chosen payment method section.
o	Program the "I'm going to pay with" <select> element to listen for user changes.
o	When a change is detected, hide all payment sections in the form’s UI except the selected one.

•	Form Validation
Users shouldn’t be able to submit a form without the required information, or with invalid information. To prevent that from happening, avoid using plugins, libraries, snippets or the built-in HTML5 validation, and create your own custom form validation.
o	Add an event listener to the form element to listen for the submit event. When the form submission is detected, each required form field or section should be validated to ensure that they have been filled out correctly. If any of the following required fields are not valid, the form submission should be prevented.
o	The "Name" field cannot be blank or empty.
o	The "Email Address" field must contain a correctly formatted email address. The email address does not need to be a real email address, just formatted like one. For example brian@teamtreehouse.com. Several characters for the username, preceded by "@", followed by another set of characters, ending with a "." and a couple more characters for the domain name.
o	The "Register for Activities" section must have at least one activity selected.
o	If and only if credit card is the selected payment method:
o	The "Card number" field must contain a 13 - 16 digit credit card number without dashes or spaces. The value does not need to be a real credit card number.
o	The "Zip code" field must contain a 5-digit number.
o	The "CVV" field must contain a 3-digit number.

Form submission
By default, when a form is being submitted, the browser will reload the page. However if you use a tool like the Live Server extension in VS Code it may behave differently. When you submit a form using this extension instead of refreshing, a *HTTP ERROR 405* will show up. This is the expected behavior and getting this error is exactly what you want when a completely valid form is being submitted.

•	The Activities Section
Pressing the tab key on your keyboard moves the focus state from one input to the next, but the focus indicators in the "Register for Activities" section aren’t very obvious. To make the form more accessible we'll add visible focus states to these activities. This will give the users that use keyboards to navigate your page a visual confirmation of where they are located.
o	Program all of the activity checkbox input elements to listen for the focus and blur events.
o	When the focus event is detected, add the ".focus" class to the checkbox input’s parent label element.
o	When the blur event is detected, remove the .focus class from the label element that possesses it. It can be helpful here to directly target the element with the className of .focus in order to remove it.

•	Visual Validation Errors
Make the form validation errors obvious to all users. With the custom form validation checks you’ve already written, invalid form fields will prevent the form from submitting, but all users should be presented with clear notifications of which fields are invalid.
1.	When the user tries to submit the form, if a required form field or section is invalid:
o	Add the ‘.not-valid’ class to the parent element of the form field or section. For the activity section, the parent element would be the fieldset element. For the other required inputs, the parent element would be a label element.
o	Remove the ‘.valid’ class from the parent element of the form field or section.
o	Display the .hint element associated with the form field or section.
2.	If a required form field or section is valid:
o	Add the ‘.valid’ class to the parent element of the form field or section.
o	Remove the ‘.not-valid’ class from the parent element of the form field or section.
o	Hide the .hint element associated with that element.
o	JavaScript alerts and prompts should not be used in your form validation error indications.
o	If the user tries to submit an empty form, all form validation error indications should be displayed at once, rather than one at a time.

Pro Tip
A recommended approach to this part of the project is to create helper functions that accept an argument for the element that is being validated. For example, the function could accept an argument for the text input element that was checked. Then the function would update the styles for that element’s parent element and the last child of that parent element. One function could update the styles when errors are detected. And another function could update the styles when errors are resolved.

•	Finishing the Project
The final stage of the project is perhaps the most important. This is where your developer skills really shine as you carefully double-check that you've accomplished all requirements and that your project is ready for submission.
1.	Code comments - It’s a best practice for development code to be well commented. Replace provided comments with your own to briefly describe your code.
2.	Code readability - Readability is second only to functionality. Double-check your code to ensure the spacing and indentation are consistent.
3.	Quality Assurance Testing - This is the keystone step in the development process.

o	Open and run your app.
o	Open the Chrome DevTools console.
o	Pretend to be a user and test all aspects of functionality and every possible state of the app, while monitoring the console for bugs and resolving any that arise.
________________________________________
Pro Tip
Before submitting your project it's always a good idea to get an additional pair of eyes on it. This will avoid your project from being returned to you if you missed one of the requirements. You can share a link to your GitHub repository in the #review-my-project channel on Slack and a fellow student or staff member will happily have a look at it.
Extra Credit
To get an "exceeds" rating, complete all of the steps below:
 3 steps
•	Conflicting Activity Times
Ideally, we want to prevent users from selecting activities that occur at the same time.
o	When a user selects an activity, loop over all of the activities to check if any have the same day and time as the selected activity. If so, disable/enable the conflicting activity’s checkbox input and add or remove the ‘disabled’ class to activity’s parent label element.
•	Real-Time Error Messages
Provide form validation error indications at the moment they occur to better serve your user.
o	Program at least one of the required fields to listen for user interaction like a keyup. When the user interaction occurs, run the validation check for that input. If you created helper functions to validate the form inputs or section, you can call those helper functions inside of the field’s event listener.
o	Detail this specific feature in your README.md file.
•	Conditional Error Message
Providing additional information for certain types of errors can be very helpful to your user. For example, if the email address field is empty, it would be enough to inform the user that they should add an email address. But if they’ve already added an email address, but formatted it incorrectly, that message wouldn’t be helpful.
o	For at least one required form section, provide one error message if the field fails on one of its requirements, and a separate message if it fails on another one.
o	Detail this specific feature in your README.md file.
________________________________________
•	NOTE: Getting an "Exceed Expectations" grade.
o	See the rubric in the "How You'll Be Graded" tab above for details on what you need to receive an "Exceed Expectations" grade.
o	Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.
o	Always mention in the comments of your submission or any resubmission, what grade you are going for. Some students want their project to be rejected if they do not meet all Exceeds Expectations Requirements, others will try for all the "exceeds" requirement but do not mind if they pass with a Meets Expectations grade. Leaving a comment in your submission will help the reviewer understand which grade you are specifically going for

