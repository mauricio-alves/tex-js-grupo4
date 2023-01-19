// set accommodations
const dbAccommodations = [{ 
                            id: 0,
                            accommodation: 'Apartamento Casal',
                            price: 190 
                          },
                          { 
                            id: 1,
                            accommodation: 'Suíte Executiva',
                            price: 350
                          },
                          { 
                            id: 2,
                            accommodation: 'Suíte Presidencial Luxo',
                            details: 'detalhes',
                            image: 'http',
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
