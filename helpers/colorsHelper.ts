import { Context } from './../devDependencies.ts'
import { Color } from './../types/colors.ts'

export const showColors = async (ctx:Context) => {
    try{
        const data:any[] = await JSON.parse(await Deno.readTextFile('db/colors.json'));
        ctx.response.body = data
    }catch(err){
        ctx.response.status = 404;
        ctx.response.body = {msg: err.message}
    }
}

export const createColor = async (ctx:Context) => {
    try{
        const data:any[] = await JSON.parse(await Deno.readTextFile('db/colors.json'));
        const {name} =  await ctx.request.body().value
        let newColor: Color = {
            name
        }
        data.push(newColor)
        await Deno.writeTextFile('db/colors.json', JSON.stringify(data))
        ctx.response.body = 'Color agregado con exito'
    }catch(err){
        ctx.response.status = 404;
        ctx.response.body = {msg: err.message}
    }
}