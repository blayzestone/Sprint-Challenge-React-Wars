# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
  
  React is a library designed for building user interfaces. It was created by facebook and is open source.
  Problems React solves:
    * DOM manipulation is expensive. React solves this by creating a virtual DOM for the developer to manipulate, and then applying the developer's changes on the virtual dom to the real dom in the most efficient way possible.
    * React makes programs less error prone and easier to debug because of unidirectional data flow. Which means that data only flows one way, from parent to child. Children elements can't change state in its parents, it can only notify the parents of changes using callback functions.

1. Describe component state.

  A component's state is an object that determines how the component renders and behaves. Changing the data in state will change those things. This allows us to create dynamic and interactive components.

1. Describe props.

  Props are arguments passed into React components. They are read-only which means they cannot be modified by the component itself.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

  A "side effect" is code in a function that modifies or interacts with something outside of its scope.

  The 'useEffect' function takes an optional argument that can be a reference to a value. That argument will cause the effect to only run when the value being referenced has changed. Passing in a value from state or props as the argument will sync that effect to the change of that state or prop. 