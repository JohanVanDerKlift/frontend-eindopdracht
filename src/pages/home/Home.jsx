import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import Card from "../../components/card/Card";
import news1 from '../../assets/news-1.jpg';
import news2 from '../../assets/news-2.jpg';
import news3 from '../../assets/news-3.jpg';
import news4 from '../../assets/news-4.jpg';
import news5 from '../../assets/news-5.jpg';
import news6 from '../../assets/news-6.jpeg';

function Home(props) {
  return (
    <div>
      <div className="home-header-container">
        <h1>Formula 1 info</h1>
        <h2>Please <Link className="home-header-link" to='/register'>register</Link> or <Link className="home-header-link" to='/login'>login</Link> for extra features</h2>
        <h2 className="news-header">Latest news</h2>
      </div>

      <div className="cards-container">
        <Card image={news1} imageAlt="2023 formula 1 poster" title="Miami GP" content="Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Accusamus, eos, saepe! Deleniti ducimus fugit officiis provident voluptatibus.
         Atque consequuntur dolorum, eius fuga, incidunt iste laudantium minima nam nemo nihil optio provident
         quibusdam ratione, recusandae repellat sed tenetur? A laborum magnam maiores necessitatibus nemo, praesentium
         quasi quisquam reiciendis rem saepe tenetur?"/>
        <Card image={news2} imageAlt="New formula 1 car" title="New f1 car streamline" content="Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Accusamus, eos, saepe! Deleniti ducimus fugit officiis provident voluptatibus.
         Atque consequuntur dolorum, eius fuga, incidunt iste laudantium minima nam nemo nihil optio provident
         quibusdam ratione, recusandae repellat sed tenetur? "/>
        <Card image={news3} imageAlt="Zhou crash" title="Zhou crashes" content="Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Accusamus, eos, saepe! Deleniti ducimus fugit officiis provident voluptatibus.
         Atque consequuntur dolorum, eius fuga, incidunt iste laudantium minima nam nemo nihil optio provident
         quibusdam ratione, recusandae repellat sed tenetur? A laborum magnam maiores necessitatibus nemo, praesentium
         quasi quisquam reiciendis rem saepe tenetur?"/>
        <Card image={news4} imageAlt="Ferrari pit crew" title="Ferrari pit crew struggles" content="Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Accusamus, eos, saepe! Deleniti ducimus fugit officiis provident voluptatibus.
         Atque consequuntur dolorum, eius fuga, incidunt iste laudantium minima nam nemo nihil optio provident
         quibusdam ratione, recusandae repellat sed tenetur? A laborum magnam maiores necessitatibus nemo, praesentium
         quasi quisquam reiciendis rem saepe tenetur?"/>
        <Card image={news5} imageAlt="Audi f1 car" title="Audi to join F1" content="Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Accusamus, eos, saepe! Deleniti ducimus fugit officiis provident voluptatibus.
         Atque consequuntur dolorum, eius fuga, incidunt iste laudantium minima nam nemo nihil optio provident
         quibusdam ratione, recusandae repellat sed tenetur?"/>
        <Card image={news6} imageAlt="F1 drivers around new f1 car" title="Presentation of new F1 car" content="Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Accusamus, eos, saepe! Deleniti ducimus fugit officiis provident voluptatibus.
         Atque consequuntur dolorum, eius fuga, incidunt iste laudantium minima nam nemo nihil optio provident
         quibusdam ratione, recusandae repellat sed tenetur? A laborum magnam maiores necessitatibus nemo, praesentium
         quasi quisquam reiciendis rem saepe tenetur?"/>
      </div>
    </div>
  );
}

export default Home;