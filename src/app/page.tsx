"use client"

import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import {api} from "../../convex/_generated/api";

export default function App(){
  const projects = useQuery(api.project.getProjects);
  const createProject = useMutation(api.project.createProject);
  return <div className="flex flex-col p-2 gap-4">
    <Button onClick={()=>{
      createProject({
        name: "Project123"
      })
    }}>Add new Project</Button>
      {projects?.map((project)=>(
        <div className="border rounded-2 p-2" key={project._id}>
          <div>{project.name}</div>
          <div>Owner Id: {project.ownerId}</div>
        </div>
      ))}
  </div>
}
