import { Outlet, Link } from "react-router-dom";

export default function Menu (){
    const OPCIONS_MENU = [{id:1,path:"/",item:"Ecommerce"},
                {id:2,path:"/indexshop",item:"Shop"},
                {id:3,path:"/indexstories",item:"Stories"},
                {id:4,path:"/about",item:"About"},
                {id:5,path:"/search",item:"Search"},
                {id:6,path:"/login",item:"Login"}];

    const ItemMenu = (props) =>{
        const {id, path, item} = props;
        return (
            <>
                <Link to={path}>{item}</Link>
            </>
        )
    }

    return (
        <>
            <div className="logo">Tienda Ecommerce</div>
            <nav className="navbar">
                <ul key="key1">
                    {OPCIONS_MENU.map((optionMenu)=>(
                        <li key={optionMenu.id}>
                            <ItemMenu id={optionMenu.id} path={optionMenu.path} item={optionMenu.item}/>
                        </li>
                        ))}
                </ul>
            </nav>
            <hr />
            <Outlet />

            <div className="cart">Carrito</div>
        </>
    )
}