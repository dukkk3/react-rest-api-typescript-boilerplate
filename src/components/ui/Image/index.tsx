import React, { memo } from "react";
import * as S from "./styled";

const Image = memo(({ sources = [], alt = "", src = "", ...rest }: Props) => {
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

export { Image };
export interface Props extends React.ComponentProps<"img"> {
	sources?: {
		src: string;
		media?: string;
	}[];
}
