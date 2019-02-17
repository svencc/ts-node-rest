import { Response, Request} from 'express';
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";
import {findCourseDetail} from "../queries/findCourseDetail";

export function apiGetCourseDetail(req: Request, res: Response) {
    const courseId = parseInt(req.params.id);

    findCourseDetail(courseId)
        .then(result => onSuccess(res, result))
        .catch(err => onError(res, "Find course detail failed", err)); // catch async errors!
}

