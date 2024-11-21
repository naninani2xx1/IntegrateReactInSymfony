class RouterApp {
    static environment = 'dev';
    static hostDev = "http://localhost:8000";
    static hostProd = "http://localhost:8001";
    static loginRouter = this.hostDev + '/cms/login';
}

export default RouterApp;