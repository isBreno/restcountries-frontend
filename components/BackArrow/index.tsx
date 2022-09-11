import Link from "next/link";
import { useRouter } from "next/router";

import { ArrowLeft } from "phosphor-react";
import { BackButtonStyled } from "./styles";

export const BackArrow = () => {
  return (
    <Link href={"/"}>
      <BackButtonStyled>
        <ArrowLeft size={28} />
        Back
      </BackButtonStyled>
    </Link>
  );
};
