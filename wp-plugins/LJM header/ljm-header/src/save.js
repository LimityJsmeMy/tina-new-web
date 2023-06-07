import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	
	const style = document.createElement('style');
	style.innerHTML = `:root { --title-color: ${text_color}; --text-glitch-color-0: ${glitch_color_1}; --text-glitch-color-1:  ${glitch_color_2}; --flicker-color:  ${flickering_color};}`;
	document.head.appendChild(style);

	const { title, align, text_color, glitch_color_1, glitch_color_2, image1, image2 } = attributes;
	return <div>
		<div>
			<div class="crt no-cursor">
				<div class="bg-cover-monochrome" style={{ backgroundImage: 'url(' + image1.url + ')' }}></div>
				<div class="bg-cover" style={{ backgroundImage: 'url(' + image2.url + ')' }}></div>
				<div class="title" style={{ color: text_color, textAlign: align }}>{title}</div></div>
		</div>
	</div>;
}