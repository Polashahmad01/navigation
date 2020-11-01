import React from 'react';

const Menu = ({ items }) => {

    return (
        <div className="section-center">
            {items.map(menuItem => {
                const { id, title, img, des, price  } = menuItem;
                return (
                    <article className="menu-item" key={id}>
                        <img src={img} alt={title}/>
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h4 className="price">${price}</h4>
                            </header>
                                <p className="item-text">{des}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Menu; 