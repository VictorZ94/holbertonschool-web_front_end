# holbertonschool web front-end
![](https://img.shields.io/badge/Advanced%20HTML-Holberton%20School-red)

Path starting to become me in front-end developer specialization web stack.

## Html advanced

html creates the foundation of any HTML page

HTML is about content. CSS is about the look and feel.

### Doctype

The <doctype> is necessary at the top of every HTML page to force the browser to render the page according to relevant specifications.

> **Note:** There are now three modes used by the layout engines in web browsers: quirks mode, almost standards mode, and full standards mode. In quirks mode, layout emulates nonstandard behavior in Navigator 4 and Internet Explorer 5. This is essential in order to support websites that were built before the widespread adoption of web standards. In full standards mode, the behavior is (hopefully) the behavior described by the HTML and CSS specifications. In almost standards mode, there are only a very small number of quirks implemented.

```
<!-- Doctype HTML5 -->
<!DOCTYPE html>
<!-- Lowercase is also valid -->
<!doctype html>
```

### HTML tag

The <html> HTML tag tells the browser that the document is an HTML webpage. It is used as a container for all the HTML elements.

>**Warning!**
The doctype is the only element living outside the html tag.

```
<html lang="fr" dir="ltr">
```

### head tag

The head tag element contains all the metadatas related to your page. All the elements put in the head are not visible in the window of the browser.

A lot of metadatas exist, some specific to some CMS.

**Usage**
You can find inside the head:

- title of the webpage
- asynchronous script calls
- metadata
- CSS code embed (critical CSS)
- JavaScript code embed

### Meta charset
The meta charset declares the page’s character encoding.

```
<head>
    <!-- Set character encoding for the document -->
    <meta charset="value">
</head>
```

### Viewport
The meta viewport gives information about the initial size of the viewport.

**Tip:** The viewport is used by mobile devices only.

**Accessibility tip:** Never use maximum-scale=1.0. It prevents the user from zooming in on the website. It causes an accessibility issue.

```
<head>
    ...
    <!-- Viewport for responsive web design -->
    <meta name="viewport" content="key=value, key=value">
</head>
```

### Title
The title meta tag defines the title of the web page.

**Tip:** The title is only visible on the tab/window of your browser.

**Warning!** The title should always have less than 56 characters.


### Meta description
```
<head>
    ...
    <!-- Meta Description -->
    <meta name="description" content="Description of the page less than 150 characters">
  </head>

```
### Favicons

```
<head>
    ...
    <!-- Standard favicon -->
    <link rel="icon" type="image/x-icon" href="https://example.com/favicon.ico">
    <!-- Recommended favicon format -->
    <link rel="icon" type="image/png" href="https://example.com/favicon.png">
    ...
</head>
```

### Tag attributes
Attributes provide additional information or instruction for an HTML element. It is always included inside the opening tag.

Data-* attribute
It is possible to declare any attribute using the data- prefix

`<tag data-extra-attr="value">some content</tag>`

Here I'm describing someone tags