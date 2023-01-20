// set accommodations
const dbAccommodations = [{ 
                            id: 0,
                            image: '/assets/images/Quarto Casal.png',
                            accommodation: 'Apartamento Casal',
                            idLabel: 'casal',
                            description: 'Nossa opção para você que busca um espaço mais intimista. Com design em madeira e vidro, destacando a luz natural, possui vista para o mar. Perfeito para um final de semana com quem você ama!',
                            price: 190 
                          },
                          { 
                            id: 1,
                            image: '/assets/images/SuítePresidencial.jpg',
                            accommodation: 'Suíte Executiva',
                            idLabel: 'executiva',
                            description: 'Para você que busca conforto e mais espaço, a suíte executiva é a ideal. Além do design em madeira, possui paredes de vidro que permitem você acordar todas as manhãs com uma vista sensacional.',
                            price: 350
                          },
                          { 
                            id: 2,
                            image: '/assets/images/1604663246841.jpg',
                            accommodation: 'Suíte Presidencial Luxo',
                            idLabel: 'presidencial',
                            description: 'Nossa principal acomodação, a suíte presidencial luxo possui 1.132 metros quadrados, design intimista com cores sóbrias e duas suítes com banheira de hidromassagem para a sua inteira disposição. Não deixe de conferir!',
                            price: 600
                          }];

// set services
const dbServices = [{ 
                      id: 0,
                      service: 'Cofre',
                      details: 'detalhes',
                      image: 'http',
                      price: 50 
                    },
                    { 
                      id: 1,
                      service: 'Lavanderia',
                      price: 40 
                    },
                    {
                      id: 2,
                      service: 'Café da Manhã no quarto',
                      price: 25
                    },
                    {
                      id: 3,
                      service: 'Massagem',
                      price: 30
                    },
                    {
                      id: 4,
                      service: 'Sala de Palestras',
                      price: 120
                    },
                    {
                      id: 5,
                      service: 'Passeio Turístico',
                      price: 150
                    }];

export { dbAccommodations, dbServices };
