# Squeezebox
### A *hatchling* jQuery plugin for accordian functionality

This Squeezebox jQuery plugin is simple and can be used by any developer in two parts. The JavaScript jQuery function attach + the required HTML markup.

## Usage

### HTML Markup
The required markup is trivial. Each content area is a <em>pleat</em> which wraps the body of each piece of content. Each pleat must contain at least two elements. A squeezebox-head (which is the event trigger for user clicks) and a squeezebox-content area which is the copy to <em>shide</em>.

    *Note*: I'm using HAML markup for simplicity, and because it's useful to know.

    .squeezebox
        .squeezebox-pleat
            .squeezebox-head
            .squeezebox-content
    .squeezebox-pleat
        .squeezebox-head
        .squeezebox-content

### JavaScript attach

    $('.squeezebox').squeezebox();