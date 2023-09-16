# Course Registration

This website lets you register for courses on different topics of CSE.

## Project Features

- Select Desired Courses.
- Display Selected Courses on the cart section.
- Calculate the Total Credit Hours automatically.
- Display the Remaining Credit Hours automatically.
- Display Toast if a Course is selected more than once.
- Display Toast if the Total Credit Hours become more than 20 & also the Remaining Credit Hours become less than 0 at the same time.

## State Management 

Hooks let us use state and other React features without writing a class.
In my Assignment project I also managed different states using useState Hook.

1. *First of all I needed to import*

```javascript
import React, { useState } from 'react';
```

2. *Then here's a Component or Function*

```javascript
function App(){
    // codes here
    return();
}
```

3. *Then I declared a state variable using useState Hook*

```javascript
const [count, setCount] = useState()

```

4. *Reading a State*

```html
 <p> Clicked {count} Times </p>
```

 5. *Updating a State*

 ```html
 <button onClick={() => setCount(count + 1)}>
    Click me
 </button>
```

6. *Final Outlook*

```javascript
import React, { useState } from 'react';

function App(){

    const [count, setCount] = useState()

    return(
        <div>
            <p>You clicked {count} times</p>;
            <button onClick={() => setCount(count + 1)}>
            Click Here</button>
        </div>
    );

}
```

& This is how I managed all the states in my Assignment Project.
