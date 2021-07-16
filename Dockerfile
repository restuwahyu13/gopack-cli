## BUILD STAGE ONE

FROM node:14-alpine as gopack-cli
COPY package*.json \
	.coveralls.yml \
	.editorconfig \
	.gitignore \
	.npmignore \
	.prettierignore \
	.prettierrc \
	.eslintignore \
	.eslintrc \
	.travis.yml \
	config.ts \
	jest.config.ts \
	Makefile ./
COPY . ./
RUN apk add make \
	&& make install

## BUILD STAGE TWO

FROM gopack-cli
WORKDIR /usr/src/app
COPY --from=gopack-cli ./ /usr/src/app
RUN make build
CMD docker images