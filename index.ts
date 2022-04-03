import { Application } from "./devDependencies.ts";
import { router } from "./routes/index.ts";

const app = new Application();

app.use(router.routes())

app.use((ctx) => {
    ctx.response.body = 'Hola mundo Deno';
});

app.listen({port: 8080});

console.log("Server Oak listening port 8080");