import { createServer, Model } from "miragejs";
import mockData from "./mockData";

function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: { pet: Model, order: Model },

    seeds(mockServer) {
      mockData(mockServer);
    },

    routes() {
      this.get('/api/v3/pet/findByStatus', (schema, request) => {
        const { status } = request.queryParams;
        return schema.db.pets.where({ status: status });
      });

      this.put("/api/v3/pet", function (schema, request) {
        let attrs = JSON.parse(request.requestBody);
        return schema.pets.find(attrs.id).update(attrs);
      })

      this.delete('/api/v3/pet:id', (schema, request) => {
        const { id } = request.params;
        return schema.pets.find(id).destroy();
      });
      
      this.get('/api/v3/user/login', () => {
        return new Response(200, { contentType: 'application/json' }, 'Logged in user session: 2617548970286185472');
      });

      this.get('/api/v3/user/logout', () => {
        return new Response(200, { contentType: 'application/json' }, 'User logged out');
      });
    },
  });

  return server;
}

export default makeServer;