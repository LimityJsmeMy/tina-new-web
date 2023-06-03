import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const blockProps = useBlockProps.save();
    return <div {...blockProps}>
		<div>
						<div class="crt no-cursor">
							<div class="bg-cover-monochrome"></div>
							<div class="bg-cover"></div>
							<div class="title">{attributes.title}</div></div>
					</div>
    </div>;
}