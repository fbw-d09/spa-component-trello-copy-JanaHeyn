import './Board.scss';

const Board = ({cards}) => {

    // console.log(cards[0].children);
    // const parkingLot = cards[0];
    // console.log(parkingLot.children[4].text);

    return(
        <div className="Board">
            
            {
                cards.map((card) => {
                    return(
                        <div key={card.id} className='Board__card'>
                            <h2 className='Board__card__header'>{card.title}</h2>
                            <ul className='Board__card__list'>
                                {
                                    card.children.map((item) => {
                                        return(
                                            <li className='Board__card__list__entries' key={item.id}>
                                                {item.text}
                                            </li>
                                        )                                       
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
   
        </div>
    )

}

export default Board