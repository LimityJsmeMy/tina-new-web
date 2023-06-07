import { Placeholder, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	AlignmentControl,
	BlockControls,
	InspectorControls,
	PanelColorSettings
} from '@wordpress/block-editor';
const { PanelBody } = wp.components;
const { Fragment } = wp.element;
const { Button } = wp.components;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const { title, align, text_color, glitch_color_1, glitch_color_2, image1, image2 } = attributes;

	const onChangeContent = (newContent) => {
		setAttributes({ title: newContent })
	}

	const onChangeAlign = (newAlign) => {
		setAttributes({
			align: newAlign === undefined ? 'none' : newAlign,
		})
	}

	const onChangeTextColor = (newColor) => {
		setAttributes({ text_color: newColor })
	}

	const onChangeGlitchColor1 = (newColor) => {
		setAttributes({ glitch_color_1: newColor })
	}

	const onChangeGlitchColor2 = (newColor) => {
		setAttributes({ glitch_color_2: newColor })
	}

	function onSelectImage1(newImage) {
		setAttributes({ image1: newImage });
	}

	function onSelectImage2(newImage) {
		setAttributes({ image1: newImage });
	}

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Color settings', 'ka-example-block')}
					initialOpen={false}
					colorSettings={[
						{
							value: text_color,
							onChange: onChangeTextColor,
							label: __('Text color', 'ka-example-block')
						},
						{
							value: glitch_color_1,
							onChange: onChangeGlitchColor1,
							label: __('Glitch color 1', 'ka-example-block')
						},
						{
							value: glitch_color_2,
							onChange: onChangeGlitchColor2,
							label: __('Glitch color 2', 'ka-example-block')
						}
					]}
				/>
			</InspectorControls>
			<BlockControls>
				<AlignmentControl
					value={align}
					onChange={onChangeAlign}
				/>
			</BlockControls>

			<div class="feature-icon-container" {...blockProps}>
				<div class="img-preview">
					<div class="bg-img-1" style={{ backgroundImage: 'url(' + image1.url + ')' }}></div>
					<div class="bg-img-2" style={{ backgroundImage: 'url(' + image2.url + ')' }}></div>
					<div class="toolbox">
						<div class="flex">
						<div class="flex-inside">
						<div>
							background image 1
						</div>
						<MediaUpload
							onSelect={onSelectImage1}
							type="image"
							value={image1.id}
							render={({ open }) => (
								<button onClick={open}>Replace Image</button>
							)}
						/>
						</div><div class="flex-inside">
						<div>
							background image 2
						</div>
						<MediaUpload
							onSelect={onSelectImage2}
							type="image"
							value={image2.id}
							render={({ open }) => (
								<button onClick={open}>Replace Image</button>
							)}
						/></div></div>
						<div class="spacer"></div>
						<RichText
							tagName="p"
							onChange={onChangeContent}
							allowedFormats={['core/bold', 'core/italic']}
							value={title}
							style={{ textAlign: align, color: text_color }}
						/>
					</div>
				</div>
			</div>
		</>
	);
}