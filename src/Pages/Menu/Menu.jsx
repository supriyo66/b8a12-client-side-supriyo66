import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import img from '../../assets/banner/pngtree-an-empty-bookshop-stacked-with-books-image_2924924.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu]=useMenu()
    const mystery=menu.filter(item=>item.category === 'Mystery and Thriller')
    const fiction=menu.filter(item=>item.category === 'Fiction')
    const history=menu.filter(item=>item.category === 'History')
    const children=menu.filter(item=>item.category === 'Children Books')
    const romance=menu.filter(item=>item.category === 'Romance')
    const nature=menu.filter(item=>item.category === 'Nature and Science')
    const offer=menu.filter(item=>item.category === 'offered')
    return (
        <div>
            <Helmet>
        <title>ReadMatrix | Menu</title>
        
      </Helmet>
      <Cover img={img} title='find Books'></Cover>
      <SectionTitle heading="Today's offer" subHeading="don't miss"></SectionTitle>
      <MenuCategory items={offer}></MenuCategory>
      <MenuCategory items={fiction} img={'https://i.ibb.co/sbgdTJG/his5.jpg'} title='Fiction'></MenuCategory>
      <MenuCategory items={mystery} img={'https://i.ibb.co/0yfzKRy/his1.jpg'} title='Mystery and Thriller'></MenuCategory>
      <MenuCategory items={history} img={'https://i.ibb.co/Ch62QcM/history.jpg'} title='history'></MenuCategory>
      <MenuCategory items={children} img={'https://i.ibb.co/R3dR6nH/children.jpg'} title='Children Books'></MenuCategory>
      <MenuCategory items={romance} img={'https://i.ibb.co/23tKwyn/rom.jpg'} title='Romance'></MenuCategory>
      <MenuCategory items={nature} img={'https://i.ibb.co/FKpB4ZP/science.jpg'} title='Nature and Science'></MenuCategory>
      
      
        </div>
    );
};

export default Menu;