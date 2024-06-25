build:
	@git pull \
	&& cd app \
	&& yarn build \
	&& cd .. \
	&& find docs -type f ! -name "CNAME" -exec rm -f {} \; \
	&& cp -R app/build/* docs/

history:
	@git pull \
	&& git add . \
	&& git commit -m "commit all changes" \
	&& git push origin HEAD
