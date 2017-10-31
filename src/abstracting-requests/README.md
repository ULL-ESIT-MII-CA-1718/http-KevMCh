Error handling in asynchronous code is even trickier than error handling in
synchronous code. Because we often need to defer part of our work, putting it in
 a callback function, the scope of a try block becomes meaningless. In the
 following code, the exception will not be caught because the call to
 backgroundReadFile returns immediately. Control then leaves the try block, and
 the function it was given won’t be called until later.
