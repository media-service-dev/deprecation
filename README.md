
# Deprecation

A function to trigger deprecations.

## Install

Just run `yarn install @mscs/deprecation`

## Usage

There a several usages:

Trigger with custom message:
```typescript
import { deprecate } from "@mscs/deprecation"; 

function deprecatedMethod(){
    deprecate("deprecatedMethod is deprecated. Use something else instead.");
}
```

Trigger with the conventional message:
```typescript
import { deprecate } from "@mscs/deprecation"; 

function deprecatedMethod(){
    deprecate(3, 4, 6);
}
```

You can change behaviour by set the `triggerHandler` method.
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
