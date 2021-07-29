# akIdentity Middleware

This middleware uses akIdentity server to add authenticated express app that will go through an identity server

#### Installation

`npm i -s akidentity`

#### Usage

To use you can crete new instance of the module

```typescript
import { AkIdentity } from 'akidentity';
const akidentity = AkIdentity('https://example.com/api/validate') 

//Rest of your Express App configuration
```

To use the middleware in express route we can import the authMiddleware that allows us to set a scope for each route,
also the authMiddleware will discard a request if the token we have is not valid for the requested resource

```typescript
//This method accepts any string that will be the scope the user needs in order to access that route
authMiddleware('your_scope')
```

Example usage in express route

```typescript
import { authMiddleware } from 'akidentity';

//This will require the user who calls the api to have the 'delete' as scope in order to be able to do that action
myRoutes.delete('/delete/:userId', authMiddleware('delete'), deleteUserController);

//If we don't pass parameter this will be treated as "GENERIC" scope and everyone who has a valid token can access this
myRoutes.get('/everyone', authMiddleware(), deleteUserController);
```
