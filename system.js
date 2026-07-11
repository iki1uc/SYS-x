import { axis } from "./axis.js";
import { respo } from "./respo.js";
import { R } from "./R.js";

export const system = {
  name: "SYS-x",
  axis,
  respo,
  relevance() {
    return R(this);
  }
};
