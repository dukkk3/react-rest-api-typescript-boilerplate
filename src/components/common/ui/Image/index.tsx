import React, { memo } from "react";

import * as S from "./styled";

export interface Props extends React.ComponentProps<"img"> {
	sources?: {
		src: string;
		media?: string;
	}[];
}

export const Image: React.FC<Props> = memo(({ sources = [], alt = "", src = "", ...rest }) => {
	return (
		<S.Image className='noselect'>
			<S.Picture>
				{sources.length > 0
					? sources.map(({ src, media }, index) => (
							<source key={`image-source-${index}`} media={media} srcSet={src} />
					  ))
					: null}
				<S.NativeImage loading='lazy' alt={alt} src={src} {...(rest as any)} />
			</S.Picture>
		</S.Image>
	);
});
