import Card from "./Card";

function ListCards({ data, animate}) {

    let time = 1;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {
                data.map((element, index) => {
                    let delay = `${time}s`;
                    time += 0.5;
                    return <Card key={index} stay={element} animate={animate} delay={delay}  />
                })
            }
        </div>
    );
}
export default ListCards;