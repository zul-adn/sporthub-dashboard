import {CourseList} from "@/data-sample/datas";
import {CourseCard} from "@/module/courses/components/card";
import Container from '@/module/courses/components/Container';


export const Courses = () => {
    return (
        <Container>
            {CourseList.map((course, index) => <CourseCard key={index}/>)}

        </Container>
    )
}