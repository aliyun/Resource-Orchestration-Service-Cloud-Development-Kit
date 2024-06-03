// --------------------------------------------------------------------------------
// This file declares context keys that are used by the CLI to control the
// behavior of CDK apps. Contrary to feature flags (which are defined under
// `features.ts`) these options are not bound to be removed in the next major
// version.
// --------------------------------------------------------------------------------

/**
 * If this context key is set, the CDK will stage assets under the specified
 * directory. Otherwise, assets will not be staged.
 * Omits stack traces from construct metadata entries.
 */
export const DISABLE_METADATA_STACK_TRACE = "aliyun:ros:disable-stack-trace";

/**
 * Run bundling for stacks specified in this context key
 */
export const BUNDLING_STACKS = 'aliyun:ros:bundling-stacks';

/**
 * Disable asset staging.
 *
 */
export const DISABLE_ASSET_STAGING_CONTEXT = 'aliyun:ros:disable-asset-staging';
