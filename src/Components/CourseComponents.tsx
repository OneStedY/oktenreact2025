import React from 'react';
import type {Course} from '../models/CourseModel.ts';

interface CourseCardProps {
    course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
        <div style={{ border: '1px solid gray', margin: 10, padding: 10 }}>
    <h2>{course.title}</h2>
    <p>Тривалість: {course.monthDuration} міс.</p>
    <p>Годин: {course.hourDuration}</p>
    <h4>Модулі:</h4>
    <ul>
    {course.modules.map((mod, index) => (
            <li key={index}>{mod}</li>
        ))}
    </ul>
    </div>
);
};