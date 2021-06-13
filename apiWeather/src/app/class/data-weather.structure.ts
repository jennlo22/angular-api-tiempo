export interface DataWeather 
    {
        name?: string,
        main?: {
            temp?: number;
            temp_max?: number;
            temp_min?: number;
            humidity?: number;
            pressure?: number;
        },
        wind?: {
            deg?: number;
        },
        weather:[
            {
                description?: string;
                icon?: string;
                id?: number;
                main?: string;
            }
        ]
    }
