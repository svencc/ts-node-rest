import {findAllCourses} from "../queries/findAllCourses";
import { Response, Request} from 'express';
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";

export function apiGetAllCourses(req: Request, res: Response) {

    // synchronous errors are handled by apiErrorHandler in middleware-chain!
    //throw new Error('ErrorOccured');

    findAllCourses()
        // async errors have to be catched via .catch() in promise chain,
        // otherwise we have hanging requests on the server and client!
        // .then(() => { throw new Error('Error')})
        .then(result => onSuccess(res, result))
        .catch(err => onError(res, "Find all courses failed", err)); // catch async errors!
}

