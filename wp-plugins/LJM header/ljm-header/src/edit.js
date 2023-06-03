import { Placeholder, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useBlockProps } from "@wordpress/block-editor";
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
const { Fragment } = wp.element;
const { Button } = wp.components;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

export default function Edit({ attributes, isSelected, setAttributes }) {
	return (
			<div {...useBlockProps()}>
				{attributes.title && !isSelected ? (
					<div>
						<div class="crt no-cursor">
							<div class="bg-cover-monochrome"></div>
							<div class="bg-cover"></div>
							<div class="title">{attributes.title}</div></div>
					</div>
				) : (
					<Placeholder
						label="LJM header"
						instructions="Custom LJM hedaer - lidl solution but it works"
					>
						<span>title</span>
						<TextControl
							value={attributes.title}
							onChange={(val) =>
								setAttributes({ title: val })
							}
						/>
						<span>bg img url 1</span>
						<TextControl
							value={attributes.bg_image_1}
							onChange={(val) =>
								setAttributes({ bg_image_1: val })
							}
						/>
						<span>bg img url 2</span>
						<TextControl
							value={attributes.bg_image_2}
							onChange={(val) =>
								setAttributes({ bg_image_2: val })
							}
						/>
						<span>title color</span>
						<TextControl
							value={attributes.text_color}
							onChange={(val) =>
								setAttributes({ text_color: val })
							}
						/>
						<span>--text-glitch-color-1</span>
						<TextControl
							value={attributes.glitch_color_1}
							onChange={(val) =>
								setAttributes({ glitch_color_1: val })
							}
						/>
						<span>--text-glitch-color-2</span>
						<TextControl
							value={attributes.glitch_color_1}
							onChange={(val) =>
								setAttributes({ glitch_color_1: val })
							}
						/>
					</Placeholder>
				)}
			</div>
	);
}

