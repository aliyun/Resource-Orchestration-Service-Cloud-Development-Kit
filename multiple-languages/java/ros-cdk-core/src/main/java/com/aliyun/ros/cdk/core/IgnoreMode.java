package com.aliyun.ros.cdk.core;

/**
 * Determines the ignore behavior to use.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:51.753Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IgnoreMode")
public enum IgnoreMode {
    /**
     * Ignores file paths based on simple glob patterns.
     * <p>
     * This is the default for file assets.
     * <p>
     * It is also the default for Docker image assets, unless the 'ros-cdk:dockerIgnoreSupport'
     * context flag is set.
     */
    GLOB,
    /**
     * Ignores file paths based on the <a href="https://git-scm.com/docs/gitignore"><code>.gitignore specification</code></a>.
     */
    GIT,
    /**
     * Ignores file paths based on the <a href="https://docs.docker.com/engine/reference/builder/#dockerignore-file"><code>.dockerignore specification</code></a>.
     * <p>
     * This is the default for Docker image assets if the 'ros-cdk:dockerIgnoreSupport'
     * context flag is set.
     */
    DOCKER,
}
