import { Response, Request} from 'express';
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";
import {createLesson} from "../queries/createLesson";

export function apiCreateLesson(req: Request, res: Response) {

    createLesson(req.body)
        .then(result => onSuccess(res, result))
        .catch(err => onError(res, "Could not create lesson", err)); // catch async errors!
}

