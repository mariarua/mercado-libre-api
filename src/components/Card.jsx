function Card({ name, price, urlApi, urlImg }) {
  return (
    <div className="border-2 rounded-lg p-2 m-3 shadow-md bg-white">
      <div>
        <img src={urlImg} alt={name} className="h-48 w-48 mx-auto mb-5" />
      </div>
      <article className="text-gray-500 text-center">
        <h2 className="truncate">{name}</h2>
        <h2 className="font-bold">${price}</h2>
        <a href={urlApi} className="hover:font-bold">
          Detalle
        </a>
      </article>
    </div>
  );
}

export default Card;
