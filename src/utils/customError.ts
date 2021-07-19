interface GopackErrorOptions {
	readonly message: string
	readonly httpStatusCode?: number
	readonly ApiResponse?: any
	readonly rawHttpClientData?: any
}

class GopackError extends Error {
	public readonly name: string

	constructor(options: GopackErrorOptions) {
		super(options.message)
		this.name = this.constructor.name
		Error.captureStackTrace(this, this.constructor)
	}
}

export const throwError = (options: GopackErrorOptions): any => {
	return new GopackError(options)
}
