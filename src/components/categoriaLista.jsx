import React from 'react';
import ItemLista from './item-lista';

const CategoriaLista = ({ items }) => {
  return (
    <div className="categoria-lista">
      {Object.entries(items).map(([items, itens], index) => (
        <div key={index} className="categoria">
          <h2>{items}</h2>
          <ItemLista items={itens} />
        </div>
      ))}
    </div>
  );
};

export default CategoriaLista;
