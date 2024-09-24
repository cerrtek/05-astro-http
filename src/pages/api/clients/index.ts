
import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { db, Clients } from 'astro:db';

export const prerender = false;


export const GET: APIRoute = async ({ params, request }) => {

    const users = await db.select().from(Clients);

    return new Response(
        JSON.stringify(users), 
        {
        status: 200,  
        headers: {
            'Content-Type': 'application/json'
        },
    });

    // const clients = await db.select().from(Clients);
    // return new Response(
    //     JSON.stringify( clients ), { 
    //         status: 200,  
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     });
};


export const POST: APIRoute = async ({ params, request }) => {

    try {
        const {id, ...body} = await request.json();

       const { lastInsertRowid } = await db.insert(Clients).values(body);
       console.log(lastInsertRowid)
    
        return new Response(
            JSON.stringify({
                id: lastInsertRowid?.toString(),
                ...body
            }), 
            {
            status: 201,  
            headers: {
                'Content-Type': 'application/json'
            },
        });
    } catch (error) {
        console.log(error);
        return new Response(
            JSON.stringify({msg: 'No body found'}), 
            {
            status: 201,  
            headers: {
                'Content-Type': 'application/json'
            },
        });

    }

    // if( body ){
    //     const { id, name, age, isActive } = body;

      
    //     await db.insert(Clients).values([
    //         { id, name, age, isActive },
    //     ]);


    //     return new Response(
    //         JSON.stringify({
    //             ...body
    //         }), 
    //         {
    //         status: 200,  
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     });
    // }

    // return new Response(
    //     JSON.stringify({
    //         methods: 'POST',
            
    //     }), 
    //     {
    //     status: 200,  
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    // });


}

