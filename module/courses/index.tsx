import {CourseList} from "@/data-sample/datas";
import {CourseCard} from "@/module/my-course/components/card";


const Index = () => {
    return (
        <>
            {CourseList.map((course, index) => (
                <CourseCard key={index}  />
            ))}
        </>
    )
}