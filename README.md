# LuccaMessagerie

This application is a chat between N logged users in N tabs of the same navigator.
To make it work, you need to open N tabs, load the app (with dev server to port 4200) in each tab, wait for the tabs to be fully loaded. After that, you can log a user in the different tabs (with only a username, password is not required). The username must be unique for each tab, and cannot be empty.
You will see on the left the different users logged.
You can chat with them, using the input text.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

