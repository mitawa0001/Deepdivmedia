import Capitalize from "../molecules/Capitalize";
import WithLayout from "../templates/Layout";

const Molecules = (props) => {
    return (
        <Capitalize title="Capitilize Here..."/>
    );
}

export default WithLayout(Molecules);