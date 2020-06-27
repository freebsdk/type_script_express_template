import express from "express";





class Main {
    
    public app   : express.Application;
    private port : number 



    constructor() {
        this.port = Number(process.env.PORT) || 3000;
        this.app = express();
        this.registerRouters();
    }



    private registerRouters()
    {
        this.app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.send("Hello world");
        });
    }




    public Run() {
        this.app.listen(this.port, () => console.log(`Express server listening at ${this.port}`))
        .on('error', err => console.error(err));
    }
}



const main = new Main();
main.Run();
