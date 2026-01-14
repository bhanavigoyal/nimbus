import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createProject = mutation({
    args: {name: v.string()},
    handler: async(ctx, args)=>{
        const identity = await ctx.auth.getUserIdentity();

        if(!identity){
            throw new Error("Unauthorized")
        }
        const newProject = await ctx.db.insert("projects", {
            name: args.name,
            ownerId: identity?.subject
        })

        return newProject;
    }
})


export const getProjects = query({
    args:{},
    handler: async(ctx, args)=>{
        const identity = await ctx.auth.getUserIdentity();
        if(!identity){
            return ([]);
        }
        const project = await ctx.db
            .query("projects")
            .withIndex("by_owner",(q)=>
                q.eq("ownerId", identity.subject)
            )
            .collect();
        return project;
    }
})