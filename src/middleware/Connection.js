import Cookies_ from "js-cookie";

const HOSTLINK = "http://localhost:4000";

class ZimmoFlowServerConnection {
  constructor(host) {
    this.host = host;
  }

  // Add other methods here as needed

  // Example method:
  async Login({ email, password }) {
    const response = await fetch(`${this.host}/api/user/login`, {
      method: "POST",
      mode: "cors",
      // cache: 'no-cache',
      // credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      // referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(response)
      Cookies_.set("token", responseData.token);
      // You can perform additional processing on the response data here if needed
      return { sucess: "login was sucessful" };
    } else {
      const error = await response.json();
      console.log(error);
      throw new Error(`Failed to login: ${error.error}`);
    }
  }

  async ApiRequestCollections() {
    const response = await fetch(`${this.host}/app/apiRequestCollections/`, {
      method: "POST",
      mode: "cors",
      // cache: 'no-cache',
      // credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      // referrerPolicy: 'no-referrer',
    });

    if (response.ok) {
      const responseData = await response.json();
      // You can perform additional processing on the response data here if needed
      return { sucess: responseData.collections };
    } else {
      const error = await response.json();
      console.log(error);
      throw new Error(`Failed to login: ${error.error}`);
    }
  }


  async ApiResponseCollections() {
    const response = await fetch(`${this.host}/app/apiResponseCollection/`, {
      method: "POST",
      mode: "cors",
      // cache: 'no-cache',
      // credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      // referrerPolicy: 'no-referrer',
    });

    if (response.ok) {
      const responseData = await response.json();
      // You can perform additional processing on the response data here if needed
      return { sucess: responseData.collections };
    } else {
      const error = await response.json();
      console.log(error);
      throw new Error(`Failed to login: ${error.error}`);
    }
  }

  async ApiResultCollections() {
    const response = await fetch(`${this.host}/app/apiResultCollection/`, {
      method: "POST",
      mode: "cors",
      // cache: 'no-cache',
      // credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      // referrerPolicy: 'no-referrer',
    });

    if (response.ok) {
      const responseData = await response.json();
      // You can perform additional processing on the response data here if needed
      return { sucess: responseData.collections };
    } else {
      const error = await response.json();
      console.log(error);
      throw new Error(`Failed to login: ${error.error}`);
    }
  }

  async ApiRequestDocuments({collectionName}) {
    const response = await fetch(`${this.host}/app/apiRequestDouments/`, {
      method: "POST",
      mode: "cors",
      // cache: 'no-cache',
      // credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({collectionName}),
      redirect: "follow",
      // referrerPolicy: 'no-referrer',
    });

    if (response.ok) {
      const responseData = await response.json();
      // You can perform additional processing on the response data here if needed
      return { responseData };
    } else {
      const error = await response.json();
      console.log(error);
      throw new Error(`Failed to login: ${error.error}`);
    }
  }
}

const ConnectionMiddleware = new ZimmoFlowServerConnection(HOSTLINK);
export default ConnectionMiddleware;
