import Fooditems from "./Fooditems";

function Home(){
    return(
       <div className="container" style={{"padding":10}}>
       <h2 className="text-center fontheading" style={{color: "rgb(252, 103, 49)"}}> Order your favouratie Recipies!</h2>
       <Fooditems/>
       </div>
    )
}

export default Home;