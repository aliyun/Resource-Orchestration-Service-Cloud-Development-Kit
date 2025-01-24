package com.aliyun.ros.cdk.core;

/**
 * Supported Docker volume consistency types.
 * <p>
 * Only valid on macOS due to the way file storage works on Mac
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:33.636Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.DockerVolumeConsistency")
public enum DockerVolumeConsistency {
    /**
     * Read/write operations inside the Docker container are applied immediately on the mounted host machine volumes.
     */
    CONSISTENT,
    /**
     * Read/write operations on mounted Docker volumes are first written inside the container and then synchronized to the host machine.
     */
    DELEGATED,
    /**
     * Read/write operations on mounted Docker volumes are first applied on the host machine and then synchronized to the container.
     */
    CACHED,
}
