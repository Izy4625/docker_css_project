import { connect } from "mongoose";

export default (async () => {
  try {
    await connect(process.env.DB_URI as string);
  } catch (err) {
    console.error("Can't connect to mongo", err);
  }
});
