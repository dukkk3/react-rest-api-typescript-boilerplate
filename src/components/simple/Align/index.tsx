import React, { memo } from "react";
import * as S from "./styled";

const Align = memo(({ children, axis, isAdaptable = false }: Readonly<Props>) => {
	return (
		<S.Align $axis={axis} $isAdaptable={isAdaptable}>
			{children}
		</S.Align>
	);
});

export { Align };
export interface Props {
	axis: ("y" | "x")[] | "x" | "y";
	children?: React.ReactNode;
	isAdaptable?: boolean;
}
