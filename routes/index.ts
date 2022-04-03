import { Router } from "./../devDependencies.ts";
import { showColors, createColor } from './../helpers/colorsHelper.ts'

export const router = new Router()
.get('/', showColors)
.post('/', createColor)