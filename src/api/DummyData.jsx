import Chance from "chance";

const chance = Chance();

export const DummyData = () => {
    console.log(chance.name({ middle_initial: true }));
    return chance.name({ middle_initial: true });
}