let token = 'f7e2b793f4fe258b063a99b2bc9ddc281295b9dc83ba5fdf'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://gossamer-chipped-newt.glitch.me/api/whiskey`,
        {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://gossamer-chipped-newt.glitch.me/api/whiskey`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to creatre new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://gossamer-chipped-newt.glitch.me/api/whiskey/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string, data: any = {}) => {
        const response = await fetch(`https://gossamer-chipped-newt.glitch.me/api/whiskey/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}
