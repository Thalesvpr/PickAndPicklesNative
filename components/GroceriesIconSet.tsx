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
  Abobora: (props: SvgProps) => <AboboraSvg {...props} width={120} height={120}/>,
  Balde: (props: SvgProps) => <BaldeSvg {...props} width={120} height={120} />,
  Banana: (props: SvgProps) => <BananaSvg {...props} width={120} height={120}/>,
  Berinjela: (props: SvgProps) => <BerinjelaSvg {...props} width={120} height={120}/>,
  Brocolis: (props: SvgProps) => <BrocolisSvg {...props} width={120} height={120}/>,
  Cenoura: (props: SvgProps) => <CenouraSvg {...props} width={120} height={120}/>,
  Couve: (props: SvgProps) => <CouveSvg {...props} width={120} height={120}/>,
  Desenfetante: (props: SvgProps) => <DesenfetanteSvg {...props} width={120} height={120}/>,
  Detergente: (props: SvgProps) => <DetergenteSvg {...props} width={120} height={120}/>,
  Escova: (props: SvgProps) => <EscovaSvg {...props} width={120} height={120}/>,
  Limao: (props: SvgProps) => <LimaoSvg {...props} width={120} height={120}/>,
  Luva: (props: SvgProps) => <LuvaSvg {...props} width={120} height={120}/>,
  Maca: (props: SvgProps) => <MacaSvg {...props} width={120} height={120}/>,
  Nabo: (props: SvgProps) => <NaboSvg {...props} width={120} height={120}/>,
  Pera: (props: SvgProps) => <PeraSvg {...props} width={120} height={120}/>,
  Tangerina: (props: SvgProps) => <TangerinaSvg {...props} width={120} height={120}/>,
  Tomate: (props: SvgProps) => <TomateSvg {...props} width={120} height={120}/>,
};
