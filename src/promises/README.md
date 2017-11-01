To create a promise object, we call the Promise constructor, giving it a
function that initializes the asynchronous action. The constructor calls that
function, passing it two arguments, which are themselves functions. The first
should be called when the action finishes successfully, and the second should be
 called when it fails.
