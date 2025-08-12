package com.aliyun.ros.cdk.core;

/**
 * Determines how symlinks are followed.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.026Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.SymlinkFollowMode")
public enum SymlinkFollowMode {
    /**
     * Never follow symlinks.
     */
    NEVER,
    /**
     * Materialize all symlinks, whether they are internal or external to the source directory.
     */
    ALWAYS,
    /**
     * Only follows symlinks that are external to the source directory.
     */
    EXTERNAL,
    /**
     * Forbids source from having any symlinks pointing outside of the source tree.
     * <p>
     * This is the safest mode of operation as it ensures that copy operations
     * won't materialize files from the user's file system. Internal symlinks are
     * not followed.
     * <p>
     * If the copy operation runs into an external symlink, it will fail.
     */
    BLOCK_EXTERNAL,
}
