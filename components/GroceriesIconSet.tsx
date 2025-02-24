import { SvgProps } from "react-native-svg";
import AboboraSvg from "./svgs/Abobora";
import BaldeSvg from "./svgs/Balde";
import BananaSvg from "./svgs/Banana";
import BerinjelaSvg from "./svgs/Berinjela";
import BrocolisSvg from "./svgs/Brocolis";
import CenouraSvg from "./svgs/Cenoura";
import CouveSvg from "./svgs/Couve";
import DesenfetanteSvg from "./svgs/Desenfetante";
import DetergenteSvg from "./svgs/Detergente";
import EscovaSvg from "./svgs/Escova";
import LimaoSvg from "./svgs/Limao";
import LuvaSvg from "./svgs/Luva";
import MacaSvg from "./svgs/Maca";
import NaboSvg from "./svgs/Nabo";
import PeraSvg from "./svgs/Pera";
import TangerinaSvg from "./svgs/Tangerina";
import TomateSvg from "./svgs/Tomate";

export const GroceriesIconSet = {
  Abobora: (props: SvgProps) => <AboboraSvg {...props} />,
  Balde: (props: SvgProps) => <BaldeSvg {...props} />,
  Banana: (props: SvgProps) => <BananaSvg {...props} />,
  Berinjela: (props: SvgProps) => <BerinjelaSvg {...props} />,
  Brocolis: (props: SvgProps) => <BrocolisSvg {...props} />,
  Cenoura: (props: SvgProps) => <CenouraSvg {...props} />,
  Couve: (props: SvgProps) => <CouveSvg {...props} />,
  Desenfetante: (props: SvgProps) => <DesenfetanteSvg {...props} />,
  Detergente: (props: SvgProps) => <DetergenteSvg {...props} />,
  Escova: (props: SvgProps) => <EscovaSvg {...props} />,
  Limao: (props: SvgProps) => <LimaoSvg {...props} />,
  Luva: (props: SvgProps) => <LuvaSvg {...props} />,
  Maca: (props: SvgProps) => <MacaSvg {...props} />,
  Nabo: (props: SvgProps) => <NaboSvg {...props} />,
  Pera: (props: SvgProps) => <PeraSvg {...props} />,
  Tangerina: (props: SvgProps) => <TangerinaSvg {...props} />,
  Tomate: (props: SvgProps) => <TomateSvg {...props} />,
};
