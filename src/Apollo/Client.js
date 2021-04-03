import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
    uri: "http://ysdeveloper.hopto.org:3001",
    clientState: {
        defaults,
        resolvers
    },
    headers:{
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
});