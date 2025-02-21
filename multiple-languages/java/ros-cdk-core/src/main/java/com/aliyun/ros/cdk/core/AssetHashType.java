package com.aliyun.ros.cdk.core;

/**
 * The type of asset hash.
 * <p>
 * NOTE: the hash is used in order to identify a specific revision of the asset, and
 * used for optimizing and caching deployment activities related to this asset such as
 * packaging, uploading to OSS bucket, etc.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:10.753Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.AssetHashType")
public enum AssetHashType {
    /**
     * Based on the content of the source path.
     * <p>
     * When bundling, use <code>SOURCE</code> when the content of the bundling output is not
     * stable across repeated bundling operations.
     */
    SOURCE,
    /**
     * Based on the content of the bundling output.
     * <p>
     * Use <code>OUTPUT</code> when the source of the asset is a top level folder containing
     * code and/or dependencies that are not directly linked to the asset.
     */
    OUTPUT,
    /**
     * Use a custom hash.
     */
    CUSTOM,
}
