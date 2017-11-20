Render callback pattern
==
Example developed from Tyler Mcginnis's [React Interview Questions](https://tylermcginnis.com/react-interview-questions/), which explains:

_In this pattern, a component receives a function as its child. Take notice of what’s inside the opening and closing tags of GitHubRenderCallback. Instead of another component as you’ve probably seen before, the GitHubRenderCallback component’s child is a function. What this means is that in the implementation of the GitHubRenderCallback component, we’ll need to treat props.children as a function._

_What’s great about this pattern is that we’ve decoupled our parent component from our child component. The parent component manages the state and the consumer of the parent component can decide in which way they’d like to apply the arguments they receive from the parent to their UI._

_To demonstrate this, let’s say in another file we want to render a Profile instead of a Badge, because we’re using the render callback pattern, we can easily swap around the UI without changing our implementation of the parent (GitHubRenderCallback) component._
