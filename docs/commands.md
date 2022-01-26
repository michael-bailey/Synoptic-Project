## This contains a list of commands used when generating code for this project

---

creating the nx workspace and nest server.
it asked a couple of questions for the configuration of the workspace and server

```bash
# running npx prevents local installation
$ npx create-nx-workspace@latest
Need to install the following packages:
  create-nx-workspace@latest
Ok to proceed? (y) y
✔ Workspace name (e.g., org name)     · apprentice-quiz-application
✔ What to create in the new workspace · nest
✔ Application name                    · server
✔ Use Nx Cloud? (It's free and doesn't require registration.) · No

 >  NX   Nx is creating your v13.5.2 workspace.

   To make sure the command works reliably in all environments, and that the preset is applied correctly,
   Nx will run "npm install" several times. Please wait.

✔ Installing dependencies with npm
✔ Nx has successfully created the workspace.
```

---

creating the next application

```bash
# adding next support to nx
$ npm i @nrwl/next

# generation the applicaiton
$ npx nx g @nrwl/next:application
✔ What name would you like to use for the application? · client
CREATE apps/client/index.d.ts
CREATE apps/client/next-env.d.ts
CREATE apps/client/next.config.js
CREATE apps/client/pages/index.module.css
CREATE apps/client/pages/index.tsx
CREATE apps/client/pages/_app.tsx
CREATE apps/client/pages/styles.css
CREATE apps/client/public/.gitkeep
CREATE apps/client/specs/index.spec.tsx
CREATE apps/client/tsconfig.json
CREATE apps/client/project.json
UPDATE workspace.json
CREATE apps/client-e2e/cypress.json
CREATE apps/client-e2e/src/fixtures/example.json
CREATE apps/client-e2e/src/integration/app.spec.ts
CREATE apps/client-e2e/src/support/app.po.ts
CREATE apps/client-e2e/src/support/commands.ts
CREATE apps/client-e2e/src/support/index.ts
CREATE apps/client-e2e/tsconfig.json
CREATE apps/client-e2e/project.json
CREATE apps/client-e2e/.eslintrc.json
CREATE apps/client/jest.config.js
CREATE apps/client/tsconfig.spec.json
CREATE apps/client/tslint.json
```
