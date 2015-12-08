# datererror

Dater Error uses a NodeJS server on the backend to serve the appropriate pages with their status codes.

Locations:

* **/img** is where you should place any image files.
* **/static** is where you should place any static files (css, js).
* **/views** is where you should place any view files - please note, once you've added a view file you will need to make it resolve by editing app.js (see below)

### Making pages resolve

To make a page resolve, edit the *app.js* file and copy and paste one of the route resolution sections:

    .get('/400', function (req, res) {
      res.status(400).sendFile(getView('400.html'));
    })

The first */400* is the URL that you would like to resolve.

The *.status(400)* is the page status that you would like resolved - feel free to remove this if you just want to return a default status.

The *getView('400.html')* resolves the file within /views