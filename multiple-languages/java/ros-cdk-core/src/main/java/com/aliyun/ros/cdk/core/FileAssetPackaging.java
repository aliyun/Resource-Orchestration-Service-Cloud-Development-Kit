package com.aliyun.ros.cdk.core;

/**
 * Packaging modes for file assets.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.191Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FileAssetPackaging")
public enum FileAssetPackaging {
    /**
     * The asset source path points to a directory, which should be archived using zip and and then uploaded to Aliyun OSS bucket.
     */
    ZIP_DIRECTORY,
    /**
     * The asset source path points to a single file, which should be uploaded to Aliyun OSS bucket.
     */
    FILE,
}
