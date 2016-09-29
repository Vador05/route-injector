/**
 * Created by gerard on 27/01/16.
 */
import RiResponse = require("./Response");
class Unauthorized extends RiResponse {

    constructor(msg:string) {
        super("Unauthorized", msg);
    }

    public getStatusCode() {
        return 401;
    }
}
export = Unauthorized;