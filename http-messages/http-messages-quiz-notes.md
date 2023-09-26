# http-messages-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  piece of hardware that accesses a service from a server/other device
- What is a server?
  piece of hardware that provides functionality for service for other devices (clients)
- Which HTTP method does a browser issue to a web server when you visit a URL?
  GET
- What three things are on the start-line of an HTTP **request** message?

1. HTTP method: verbs: GET, PUT, POST nouns: HEAD,OPTIONS that describe the action to be performed
2. Request target: usually a URL, path of the protocol, port, and domain
3. HTTP version: defines the structure of the remaining message, indicator of the expected version

- What three things are on the start-line of an HTTP **response** message?
  called the status line

1. protocol version, usually HTTP/1.1
2. status code, indicating success or failure of the request
3. status text, brief, purely informational, textual description of the status code to help a human understand the HTTP message

- What are HTTP headers?
  one line string:value pair specifying the request or describing the body included in the message
- Where would you go if you wanted to learn more about a specific HTTP Header?
  mdn
- Is a body required for a valid HTTP request or response message?
  no, optional

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
