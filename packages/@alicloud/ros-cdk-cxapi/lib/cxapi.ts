// output directory into which to emit synthesis outputs. CDK doesn't allow outdir
// to be specified both through the CDK_OUTDIR environment variable and the through
// aliyun:ros:outdir context.
export const OUTDIR_ENV = "CDK_OUTDIR";
export const CONTEXT_ENV = "CDK_CONTEXT_JSON";

/**
 * Version of Cloud Assembly expected by CDK CLI.
 *
 * CLI started emitting this at 1.10.1
 */
export const CLI_ASM_VERSION_ENV = "CDK_CLI_ASM_VERSION";

/**
 * Version of the CLI currently running.
 *
 * CLI started emitting this at 1.10.1
 */
export const CLI_VERSION_ENV = "CDK_CLI_VERSION";

/**
 * If a context value is an object with this key, it indicates an error
 */
export const PROVIDER_ERROR_KEY = "$providerError";
