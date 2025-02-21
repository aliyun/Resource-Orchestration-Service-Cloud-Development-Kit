package com.aliyun.ros.cdk.core;

/**
 * The access mechanism used to make source files available to the bundling container and to return the bundling output back to the host.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:10.770Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.BundlingFileAccess")
public enum BundlingFileAccess {
    /**
     * Creates temporary volumes and containers to copy files from the host to the bundling container and back.
     * <p>
     * This is slower, but works also in more complex situations with remote or shared docker sockets.
     */
    VOLUME_COPY,
    /**
     * The source and output folders will be mounted as bind mount from the host system This is faster and simpler, but less portable than <code>VOLUME_COPY</code>.
     */
    BIND_MOUNT,
}
