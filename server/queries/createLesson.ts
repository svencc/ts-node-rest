import {CourseModel, LessonModel} from "../model/model";

export function createLesson(lesson:any) {
    return LessonModel.create(lesson);
}
