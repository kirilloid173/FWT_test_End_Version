function change_color() {
	const icon_navbar = document.getElementById('icon_theme_navbar');
	icon_navbar?.addEventListener('click', () => {
		document.body.style.backgroundColor = 'rgb(18,18,18)';
		const all_text_images =
			document.getElementsByClassName('block_gallery_text');
		for (let i: number = 0; i < all_text_images.length; i++) {
			(<HTMLImageElement>(
				document.getElementsByClassName('block_gallery_text')[i]
			)).style.backgroundColor = 'rgb(18,18,18)';
			(<HTMLImageElement>(
				document.getElementsByClassName('title_text_gallery')[i]
			)).style.color = 'white';
			(<HTMLImageElement>(
				document.getElementsByClassName('number_text_gallery')[i]
			)).style.color = 'rgb(171,137,86)';
		}
		(<HTMLImageElement>document.getElementById('logo_navbar_team'))!.src =
			'src/images/logo_dark_team.png';
		document.getElementById('icon_theme_navbar')!.style.display = 'none';
		document.getElementById('icon_theme_navbar_dark')!.style.display = 'block';
		document.getElementById('block_pages')!.style.color = 'white';
		document.getElementById('search_for_ts')!.style.borderColor =
			'rgb(18,18,18)';
		document.getElementById('search_for_ts')!.style.backgroundColor =
			'rgb(26,24,24)';
	});
	// Ниже идёт dark
	const icon_navbar_dark = document.getElementById('icon_theme_navbar_dark');
	icon_navbar_dark?.addEventListener('click', () => {
		const all_text_images =
			document.getElementsByClassName('block_gallery_text');
		document.body.style.backgroundColor = 'white';
		for (let i: number = 0; i < all_text_images.length; i++) {
			(<HTMLImageElement>(
				document.getElementsByClassName('block_gallery_text')[i]
			)).style.backgroundColor = 'white';
			document
				.getElementsByClassName('title_text_gallery')
				[i].setAttribute('style', 'color: rgb(18,18,18)');
			document
				.getElementsByClassName('number_text_gallery')
				[i].setAttribute('style', 'color: rgb(155, 75, 75)');
		}
		(<HTMLImageElement>document.getElementById('logo_navbar_team')!).src =
			'src/images/logo.png';
		document.getElementById('icon_theme_navbar_dark')!.style.display = 'none';
		document.getElementById('icon_theme_navbar')!.style.display = 'block';
		document.getElementById('block_pages')!.style.color = 'rgb(18,18,18)';
		document.getElementById('search_for_ts')!.style.borderColor =
			'rgb(222, 222, 222)';
		document.getElementById('search_for_ts')!.style.backgroundColor = 'white';
	});
}
export default change_color;
