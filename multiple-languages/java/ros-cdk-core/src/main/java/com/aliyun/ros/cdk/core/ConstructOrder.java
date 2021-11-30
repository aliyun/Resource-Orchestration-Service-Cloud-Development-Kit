package com.aliyun.ros.cdk.core;

/**
 * In what order to return constructs.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.42.0 (build 5f6b62c)", date = "2021-11-30T01:57:30.647Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ConstructOrder")
public enum ConstructOrder {
    /**
     * Depth-first, pre-order.
     */
    PREORDER,
    /**
     * Depth-first, post-order (leaf nodes first).
     */
    POSTORDER,
}
