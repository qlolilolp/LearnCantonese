(function() {
	const path = window.location.pathname;
	let lang = 'en'; 
	if (path.includes('/tc/')) lang = 'tc';
	if (path.includes('/sc/')) lang = 'sc';

	let footerHTML = `
		<div id="footer">
			<div class="footer-content">
				<div class="footer-text">
					<p>This webpage is best viewed at 100% zoom.</p>
					<p>© 2026 learncantonese.net Limited. All Rights Reserved.</p>
				</div>
				<div class="footer-action">
					<span class="version-label">Our Version of Android :</span>
					<a href="../download/Learn Cantonese.apk" download class="download-btn">
						Download Learn Cantonese.apk (v1.0.0)
					</a>
				</div>
			</div>
		</div>
		`;
	if (lang == 'tc') {
		footerHTML = `
		<div id="footer">
			<div class="footer-content">
				<div class="footer-text">
					<p>本網頁建議使用 100% 放大比例瀏覽，以達到最佳瀏覽效果。</p>
					<p>© 2026 learncantonese.net Limited. 保留所有權利。</p>
				</div>
				<div class="footer-action">
					<span class="version-label">我們的Android版本:</span>
					<a href="../download/Learn Cantonese.apk" download class="download-btn">
						下載 Learn Cantonese.apk (v1.0.0)
					</a>
				</div>
			</div>
		</div>
	`;}
	if (lang == 'sc') {
		footerHTML = `
		<div id="footer">
			<div class="footer-content">
				<div class="footer-text">
					<p>本网页建议使用 100% 放大比例浏览，以达到最佳浏览效果。</p>
					<p>© 2026 learncantonese.net Limited. 保留所有权利。</p>
				</div>
				<div class="footer-action">
					<span class="version-label">我們的Android版本:</span>
					<a href="../download/Learn Cantonese.apk" download class="download-btn">
						下载 Learn Cantonese.apk (v1.0.0)
					</a>
				</div>
			</div>
		</div>
	`;}

	function loadFooter() {
		if (!document.getElementById('footer')) {
			document.body.insertAdjacentHTML('beforeend', footerHTML);
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', loadFooter);
	} else {
		loadFooter();
	}
})();