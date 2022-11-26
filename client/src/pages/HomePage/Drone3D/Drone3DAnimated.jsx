import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Drone from "./Drone";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Drone3DAnimated() {
  const navigate = useNavigate();
  return (
    <div
      style={{ background: "#f0f1f2", fontFamily: "Arial" }}
      className="col-12 d-md-flex justify-content-center align-items-center"
    >
      <div className="col-md-3 col-12 px-2 d-flex flex-column justify-content-end align-items-md-start align-items-center">
        <h1>DJI FPV Combo</h1>
        <h4 className="py-2">Take a closer look from every angle.</h4>
        <p>
          Get a feel for what it is like to own DJI FPV in advance. Click and
          drag the image to view.
        </p>
        <Button
          onClick={() => navigate("/63302f9ac0490a42e5d8e3b7")}
          variant="outline-primary"
        >
          See More
        </Button>
      </div>
      <div className="col-12 col-md-7">
        <Canvas style={{ height: "400px" }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={2} />
          <Drone />
        </Canvas>
      </div>
    </div>
  );
}
