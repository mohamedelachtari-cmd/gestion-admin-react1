import React from "react";

function About() {
  return (
    <div className="container mt-4">
      <div className="card shadow p-4 text-center">
        <h1 className="text-danger mb-3">À propos</h1>

        <p>
          Cette application a été développée dans le cadre du stage
          au Ministère de la Transition Énergétique et du Développement Durable.
        </p>

        <p>
          Elle permet la gestion administrative du parc informatique
          et des différentes opérations.
        </p>
      </div>
    </div>
  );
}

export default About;