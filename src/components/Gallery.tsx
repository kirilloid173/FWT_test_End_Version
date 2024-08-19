import React from 'react';
import line from '../images/line.png';
import { useQuery } from '@tanstack/react-query';

function Gallery() {
	const { isPending, error, data, isFetching } = useQuery({
		queryKey: ['repoData'],
		queryFn: async () => {
			const response = await fetch('http://localhost:3000/0'); // Я так и не разобрался в API TanStack Query
			// А пересобирать всё в Redux уже не было желания после стольких стараний над проектом
			return await response.json();
		},
	});

	if (isPending) return 'Загрузка галереи (включите json-server)';

	if (error) return 'An error has occurred: ' + error.message;

	return (
		<React.StrictMode>
			<div id="gallery">
				<div className="gallery_block_photo">
					<img src={data.imgUrl} alt="" />
					<div className="block_gallery_text">
						<div className="block_flex_gallery">
							<img className="line_text_gallery" src={line} alt="" />
							<div className="block_flex_gallery_text">
								<p className="title_text_gallery">{data.name}</p>
								<p className="number_text_gallery">{data.created}</p>
								<div>{isFetching ? 'Updating...' : ''}</div>
							</div>
						</div>
					</div>
				</div>
				<div className="gallery_block_photo">
					<img src="/src/images/seconds.png" alt="" />
					<div className="block_gallery_text">
						<div className="block_flex_gallery">
							<img className="line_text_gallery" src={line} alt="" />
							<div className="block_flex_gallery_text">
								<p className="title_text_gallery">Portrait of Vincent van Gogh</p>
								<p className="number_text_gallery">1886</p>
							</div>
						</div>
					</div>
				</div>
				<div className="gallery_block_photo">
					<img src="/src/images/three.png" alt="" />
					<div className="block_gallery_text">
						<div className="block_flex_gallery">
							<img className="line_text_gallery" src={line} alt="" />
							<div className="block_flex_gallery_text">
								<p className="title_text_gallery">Unequal marriage</p>
								<p className="number_text_gallery">1862</p>
							</div>
						</div>
					</div>
				</div>
				<div className="gallery_block_photo">
					<img src="/src/images/four.png" alt="" />
					<div className="block_gallery_text">
						<div className="block_flex_gallery">
							<img className="line_text_gallery" src={line} alt="" />
							<div className="block_flex_gallery_text">
								<p className="title_text_gallery">The happy Violinist</p>
								<p className="number_text_gallery">1624</p>
							</div>
						</div>
					</div>
				</div>
				<div className="gallery_block_photo">
					<img src="/src/images/five.png" alt="" />
					<div className="block_gallery_text">
						<div className="block_flex_gallery">
							<img className="line_text_gallery" src={line} alt="" />
							<div className="block_flex_gallery_text">
								<p className="title_text_gallery">The Arcadian</p>
								<p className="number_text_gallery">1834</p>
							</div>
						</div>
					</div>
				</div>
				<div className="gallery_block_photo">
					<img src="/src/images/six.png" alt="" />
					<div className="block_gallery_text">
						<div className="block_flex_gallery">
							<img className="line_text_gallery" src={line} alt="" />
							<div className="block_flex_gallery_text">
								<p className="title_text_gallery">Golfo di Napoli</p>
								<p className="number_text_gallery">1845</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.StrictMode>
	);
}
export default Gallery;
