import * as T1 from "./component.st.css"; // Cannot find module './component.st.css' or its corresponding type declarations.ts(2307)
import * as T2 from "./component.st.css.js";

T1.classes.root; // any
T2.classes.root; // string
