import Course from "./Course"


const Courses = ({ courses }) => {

    // courses -> whole array, with multiple courses

    return (
        <>
            {courses.map((course) =>
                <Course key={course.id} course={course} />
            )}
        </>
    )


}

export default Courses