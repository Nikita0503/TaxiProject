import {
    ADD_NEW_TRIP,
} from './actions';

const defaultState = {
    trips: [
        {
          time: '2:54',
          distance: '1,7 km',
          spent: '9$',
          from: 'Kiev Zhulyany International Airport',
          to: 'Kiev Cinema',
          car: 'BMW x7',
          avatar: 'https://d5qmjlya0ygtg.cloudfront.net/143/292/826/-159996988-1t881fo-b749snmojt17lsa/original/avatar.jpg',
          rating: 4.8
        },
        {
          time: '4:32',
          distance: '3,4 km',
          spent: '17$',
          from: 'S&T UKRAINE',
          to: 'Church of St. Triytsi OCU',
          car: 'Mazda RX 8',
          avatar: 'https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/403/kak_sdelat_krasivuyu_avatarku_v_instagram_1.jpg',
          rating: 4.1
        },
        {
          time: '10:12',
          distance: '5,4 km',
          spent: '35$',
          from: 'Nova Poshta №293',
          to: 'Fairs "Naumova-Pidlisna"',
          car: 'Ferrari 812',
          avatar: 'https://www.mycharm.ru/data/cache/2016jan/06/47/174304_14021-300x0.jpg',
          rating: 4.1
        },
        {
          time: '5:59',
          distance: '4,1 km',
          spent: '31$',
          from: "McDonald's",
          to: 'In-Time',
          car: 'Dodge',
          avatar: 'https://ak.picdn.net/shutterstock/videos/21124222/thumb/10.jpg',
          rating: 4.1
        },
        {
          time: '6:37',
          distance: '4,2 km',
          spent: '41$',
          from: 'Cipolla Rossa',
          to: 'GOLDEN FLORA',
          car: 'Lexus LS',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT15cODYLVcfMS0mpvTkyKFFjumVRgwQCXHVQ&usqp=CAU',
          rating: 4.1
        }
      ],
}

export const historyReducer = (state = defaultState, action) => {
    
    switch (action.type){
        case ADD_NEW_TRIP:
            return {
                ...state,
                trips: [...state.trips, action.payload],
            }
    }
    return state;
}