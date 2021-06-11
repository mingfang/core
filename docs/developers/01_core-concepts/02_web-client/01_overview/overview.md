## Overview

A Glue42 Web Client application is a web application that uses the [Glue42 Web](https://www.npmjs.com/package/@glue42/web) library to connect to Glue42. A Web Client application cannot configure the Glue42 environment and expects that this is already handled by the [Main application](../../web-platform/overview/index.html).

It is strongly recommended that the [Glue42 Web](https://www.npmjs.com/package/@glue42/web) library be initialized as a starting step for the application, so that it is discovered and registered as a Glue42 Web Client by the [Main app](../../web-platform/overview/index.html) and the other Web Client apps as soon as possible. The [Glue42 Web](https://www.npmjs.com/package/@glue42/web) library must not be initialized more than once, because doing so will result in rejecting the initialization and throwing an error. Possible reasons for initialization rejection may be incorrect configuration or if the application wasn't opened by another Glue42 application.

A Web Client application can be opened by the [Main app](../../web-platform/overview/index.html) and can also spawn its own child applications and windows. These children don't depend on the parent Web Client application - their connection to Glue42 is routed directly through the [Main application](../../web-platform/overview/index.html) and therefore they will continue to function properly even if the parent Web Client has been closed.

For information on how to initialize the [Glue42 Web](https://www.npmjs.com/package/@glue42/web) library and use Glue42 APIs in [JavaScript](../javascript/index.html), [React](../react/index.html) and [Angular](../angular/index.html) applications, see the respective sections.