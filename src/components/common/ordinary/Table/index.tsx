import React, { useMemo } from "react";

import { Align } from "@components/common/simple/Align";

import * as S from "./styled";

export interface Props<C, R> {
	rows: R[];
	columns: C;
	templateColumns?: (number | null | string)[];
	prepareColumns?: (columns: C) => any[];
	prepareRows?: (row: R) => any[];
	renderRows?: (props: {
		row: R;
		index: number;
		Row: typeof S.Row;
		Cell: typeof S.Cell;
		CellContent: typeof S.CellContent;
	}) => React.ReactNode;
	renderColumns?: (props: {
		columns: C;
		Cell: typeof S.Cell;
		CellContent: typeof S.CellContent;
	}) => React.ReactNode;
	header?: React.ReactNode;
	footer?: React.ReactNode;
}

export const Table = <C extends { [s: string]: any }, R extends { [s: string]: any }>({
	rows,
	columns,
	header,
	footer,
	renderRows,
	renderColumns,
	prepareRows,
	prepareColumns,
	templateColumns,
}: Props<C, R>) => {
	const columnKeys = useMemo(() => Object.keys(columns || {}), [columns]);
	const preparedTemplateColumns = useMemo(
		() => (templateColumns ? templateColumns : Array(columnKeys.length).fill(1)),
		[templateColumns, columnKeys]
	);

	return (
		<S.Table>
			{prepareColumns || renderColumns ? (
				<S.Head>
					{header ? <S.HeaderGroup>{header}</S.HeaderGroup> : null}
					<S.Row $isHead={true} $templateColumns={preparedTemplateColumns}>
						{renderColumns
							? renderColumns({
									columns: columns,
									Cell: S.Cell,
									CellContent: S.CellContent,
							  })
							: prepareColumns
							? prepareColumns(columns).map((column, index) => (
									<S.Cell key={`column-${index}`} className='text-hidden'>
										<Align axis={["y"]}>
											<p className='text-hidden'>{column}</p>
										</Align>
									</S.Cell>
							  ))
							: null}
					</S.Row>
				</S.Head>
			) : null}
			{prepareRows || renderRows ? (
				<S.Body>
					{rows.map((row, rowIndex) =>
						renderRows ? (
							renderRows({
								row: row,
								index: rowIndex,
								Row: S.Row,
								Cell: S.Cell,
								CellContent: S.CellContent,
							})
						) : prepareRows ? (
							<S.Row key={`row-${rowIndex}`} $templateColumns={preparedTemplateColumns}>
								{prepareRows(row).map((cell, cellIndex) => (
									<S.Cell key={`cell-${cellIndex}`}>
										<Align axis={["y"]}>
											<S.CellContent>{cell}</S.CellContent>
										</Align>
									</S.Cell>
								))}
							</S.Row>
						) : null
					)}
				</S.Body>
			) : null}
			{footer ? <S.FooterGroup>{footer}</S.FooterGroup> : null}
		</S.Table>
	);
};
