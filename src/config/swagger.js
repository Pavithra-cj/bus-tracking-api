import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "68D Bus Tracking System API",
      version: "1.0.0",
      description:
        "RESTful API documentation for the Real-Time Bus Tracking System (NTC)",
    },
    servers: [
      {
        url: process.env.BASE_URL || "/",
        description: "API server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Enter JWT token (e.g., Bearer eyJhbGci...)",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/modules/**/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
