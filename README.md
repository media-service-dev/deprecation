
# Deprecation

A function to trigger deprecation warnings.

## Install

Just run `yarn install @mscs/deprecation`

## Usage

```typescript
import { deprecate } from "@mscs/deprecation"; 

function deprecatedMethod(){
    deprecate(3, 4, 6);
}
```

This emits the warning using our default template:

`Deprecated since 3.4 and will be removed in 6.0.`

Providing a replacement for the deprecated component:

```typescript
import { deprecate } from "@mscs/deprecation"; 

function deprecatedMethod(){
    deprecate(3, 4, 6, "notDeprecatedMethod");
}
```

Emits

`Deprecated since 3.4 and will be removed in 6.0. Use notDeprecatedMethod instead`

Trigger with custom message:

```typescript
import { deprecate } from "@mscs/deprecation"; 

function deprecatedMethod(){
    deprecate("deprecatedMethod is deprecated. Use something else instead.");
}
```

You can change how the message is emitted by overrding the `triggerHandler` method.

```typescript
import { deprecate, defaultDeprecationTriggerHandler } from "@mscs/deprecation"; 

deprecate.triggerHandler = (message: string, error: Error) => {
    // Perform the default behaviour.
    defaultDeprecationTriggerHandler(message, error)
    
    // Send deprecation to an endpoint
    fetch("https://my-server.tld/api/deprecation", {
        method: 'POST',
        body: JSON.stringify({ message, error }),
    })
    .catch(console.error);
}

function deprecatedMethod(){
    deprecate(3, 4, 6);
}
```
