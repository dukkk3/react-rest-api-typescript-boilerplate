import styled from "styled-components";

function unitsToGridTemplate(units: (string | null | number)[]) {
	return units
		.map((cell) => {
			switch (true) {
				case typeof cell === "number":
					return `${cell}fr`;
				case typeof cell === "string":
					return cell;
				default:
					return "auto";
			}
		})
		.join(" ");
}

export const Table = styled.div``;

export const Cell = styled.div`
	padding: 2rem;
	overflow: hidden;
	position: relative;
`;

export const CellContent = styled.div`
	width: 100%;
`;

interface RowProps {
	$isHead?: boolean;
	$isSelected?: boolean;
	$templateColumns: (number | string | null)[];
}

export const Row = styled.div<RowProps>`
	display: grid;
	grid-template-columns: ${(props) => unitsToGridTemplate(props.$templateColumns)};
	transition: background 0.1s linear;
`;

export const HeaderGroup = styled.div`
	border-bottom: 1px solid ${(props) => props.theme.colors.complex.border};
`;

export const FooterGroup = styled.div`
	border-top: 1px solid ${(props) => props.theme.colors.complex.border};
`;

export const Body = styled.div`
	overflow: hidden;

	${Row}:not(:first-child) {
		border-top: 1px solid ${(props) => props.theme.colors.complex.border};
	}
`;

export const Head = styled.div`
	${Row} {
		border-bottom: 1px solid ${(props) => props.theme.colors.complex.border};

		${Cell} {
			font-size: ${(props) => props.theme.sizes.common.fontSizeSecondary};
			text-transform: uppercase;
		}
	}
`;
