/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck


export function cleanObject<ObjType>(obj:ObjType):ObjType{
    return Object.fromEntries(
        Object.entries((obj)).filter(
            ([,value])=>
                value !== undefined&& 
                value !=='' &&
                value !== 'none' &&
                value !== null &&
            !(Array.isArray(value) && value.length === 0)&&
            !(Array.isArray(value) && value.every(item =>item ===''))&&
            !(Array.isArray(value)&& value.every(item =>item === 'none')) &&
            !(typeof value === 'object' && value !== null && Object.keys(value).length === 0)

        )
    )as ObjType;
}
