package com.aliyun.ros.cdk.core;

/**
 * The type of output that a bundling operation is producing.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:10.775Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.BundlingOutput")
public enum BundlingOutput {
    /**
     * The bundling output directory includes a single .zip or .jar file which will be used as the final bundle. If the output directory does not include exactly a single archive, bundling will fail.
     */
    ARCHIVED,
    /**
     * The bundling output directory contains one or more files which will be archived and uploaded as a .zip file to OSS bucket.
     */
    NOT_ARCHIVED,
    /**
     * If the bundling output directory contains a single archive file (zip or jar) it will be used as the bundle output as-is.
     * <p>
     * Otherwise, all the files in the bundling output directory will be zipped.
     */
    AUTO_DISCOVER,
    /**
     * The bundling output directory includes a single file which will be used as the final bundle.
     * <p>
     * If the output directory does not
     * include exactly a single file, bundling will fail.
     * <p>
     * Similar to ARCHIVED but for non-archive files
     */
    SINGLE_FILE,
}
