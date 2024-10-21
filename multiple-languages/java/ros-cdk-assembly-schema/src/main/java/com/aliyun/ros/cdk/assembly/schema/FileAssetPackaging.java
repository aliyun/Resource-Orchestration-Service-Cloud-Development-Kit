package com.aliyun.ros.cdk.assembly.schema;

/**
 * Packaging strategy for file assets.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:25.962Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.FileAssetPackaging")
public enum FileAssetPackaging {
    /**
     * Upload the given path as a file.
     */
    FILE,
    /**
     * The given path is a directory, zip it and upload.
     */
    ZIP_DIRECTORY,
}
