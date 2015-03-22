InlineRetinaJS
==============

A simple way to use inline retina images without all the extra HTML markup.

[DEMO](http://htmlpreview.github.io/?https://github.com/ryanburgess/InlineRetinaJS/master/index.html)

## Install
	npm install inline-retina


## How to use

Add inline-retina.min.js to your HTML.

Add a class "hd" to all inline images that also have a retina version available. The retina image needs to be saved with the same name and same directory as the non-retina version but also appending "@2x" to the end of the name.

Example:

Original inline image: images/hero-skitch.png

Retina version: images/hero-skitch@2x.png

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License
MIT © [Ryan Burgess](http://github.com/ryanburgess)