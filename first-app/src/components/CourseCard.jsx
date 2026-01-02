function CourseCard(props){
    return (
        <div>
            <h3>Course:{props.Course}</h3>
            <p>Duration:{props.Duration}</p>
        </div>
    );
}

export  default CourseCard;