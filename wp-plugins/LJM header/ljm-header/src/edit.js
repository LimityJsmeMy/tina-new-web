import { Placeholder, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useBlockProps } from "@wordpress/block-editor";
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
const { Fragment } = wp.element;
const { Button } = wp.components;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

export default function Edit({ attributes, isSelected, setAttributes }) {
	const onChangeGlitchColor1 = ( hexColor ) => {
		setAttributes( { glitch_color_1: hexColor } );
	};

	const onChangeGlitchColor2 = ( hexColor ) => {
		setAttributes( { glitch_color_2: hexColor } );
	};

	const onChangeTextColor = ( hexColor ) => {
		setAttributes( { text_color: hexColor } );
	};

	return (
		<Fragment><InspectorControls key="setting">
		<div id="gutenpride-controls">
			<fieldset>
				<legend className="blocks-base-control__label">
					{ __( 'Glitch color 1', 'gutenpride' ) }
				</legend>
				<ColorPalette // Element Tag for Gutenberg standard colour selector
					onChange={ onChangeGlitchColor1 } // onChange event callback
				/>
			</fieldset>
			<fieldset>
				<legend className="blocks-base-control__label">
					{ __( 'Glitch color 2', 'gutenpride' ) }
				</legend>
				<ColorPalette // Element Tag for Gutenberg standard colour selector
					onChange={ onChangeGlitchColor2 } // onChange event callback
				/>
			</fieldset>
			<fieldset>
				<legend className="blocks-base-control__label">
					{ __( 'Text color', 'gutenpride' ) }
				</legend>
				<ColorPalette // Element Tag for Gutenberg standard colour selector
					onChange={ onChangeTextColor } // onChange event callback
				/>
			</fieldset>
		</div>
	</InspectorControls>
			<div {...useBlockProps()}>
				{attributes.title && attributes.mediaUrl && !isSelected ? (
					<div style={"--title-color:"+attributes.text_color+";--text-glitch-color-1:"+attributes.glitch_color_1+";--text-glitch-color-2:"+attributes.glitch_color_2}>
						<div class="crt no-cursor">
							<div class="bg-cover-monochrome"></div>
							<div class="bg-cover"></div>
							<div style="position: fixed; z-index: -99; width: 100%; height: 100%">
							</div>
							<div class="title">{attributes.title}</div></div>
					</div>
				) : (
					<Placeholder
						label="Yellow Fusion section"
						instructions="Add your message"
					>
						<TextControl
							value={attributes.title}
							onChange={(val) =>
								setAttributes({ title: val })
							}
						/>
					</Placeholder>
				)}
			</div>
			</Fragment>
	);
}

