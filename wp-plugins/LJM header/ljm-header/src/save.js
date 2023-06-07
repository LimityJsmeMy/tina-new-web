import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();

	const { title, align, text_color, glitch_color_1, glitch_color_2, flickering_color, image1, image2 } = attributes;

	const style = document.createElement('style');
	style.innerHTML = `:root { --title-color: ${text_color}; --text-glitch-color-0: ${glitch_color_1}; --text-glitch-color-1:  ${glitch_color_2}; --flicker-color:  ${flickering_color};}`;
	document.head.appendChild(style);

	/* 	const style = document.createElement('style');
		style.innerHTML = `:root { --test-color: #ffffff; --title-color: ${text_color}; --text-glitch-color-0: ${glitch_color_1}; --text-glitch-color-1:  ${glitch_color_2}; --flicker-color:  ${flickering_color};}`;
		document.head.appendChild(style);
	
		console.log('adding listener');
		const crt = document.getElementById("crt-dom");
		console.log(crt);
	
		const bodyListner = document.body.addEventListener('pointermove', function (e) {
			console.log('listened');
			if (crt.classList.contains('no-cursor')) {
				crt.classList.remove('no-cursor');
			}
			document.body.style.setProperty('--mouseX', e.clientX);
			document.body.style.setProperty('--mouseY', e.clientY);
			document.body.style.setProperty('--text-glitch-scale', (Math.abs(crt.offsetHeight / 2 - e.clientY) / crt.clientHeight) * 3 + 0.2) * ((Math.abs(crt.clientWidth / 2 - e.clientX) / crt.clientWidth) * 3 + 0.2);
		}); */

	return <div>
		<div style={{ "--title-color": text_color, "--text-glitch-color-0": glitch_color_1, "--text-glitch-color-1": glitch_color_2, "--flicker-color": flickering_color }}>
			<div id="crt-dom" class="crt no-cursor">
				<div class="bg-cover-monochrome" style={{ backgroundImage: 'url(' + image1.url + ')' }}></div>
				<div class="bg-cover" style={{ backgroundImage: 'url(' + image2.url + ')' }}></div>
				<div class="title" style={{ color: text_color, textAlign: align }}>{title}</div></div>
		</div>
	</div>;
}