import React, { memo } from "react";

import * as S from "./styled";

export const Align: React.FC<Props> = memo(({ children, axis, isAdaptable = false }) => {
	return (
		<S.Align $axis={axis} $isAdaptable={isAdaptable}>
			{children}
		</S.Align>
	);
});

export interface Props {
	axis: ("y" | "x")[] | "x" | "y";
	children?: React.ReactNode;
	isAdaptable?: boolean;
}
