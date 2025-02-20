"use client";

import { useFormContext } from "react-hook-form";

import { FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
 } from "../ui/form";

 import { Input } from "../ui/input";
 import { InputHTMLAttributes } from "react";

 type Props<S> ={
    fieldTitle: string,
    // schema information might go here
    input: string,
    className?:string,
 } & InputHTMLAttributes<HTMLInputElement>

 export function InputWithLabel<S>({
    fieldTitle, className, ...props
 }: Props<S>){

    //setting up the form context
    const form = useFormContext();


 }