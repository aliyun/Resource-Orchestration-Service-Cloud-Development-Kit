package com.aliyun.ros.cdk.core;

/**
 * In what order to return constructs.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:07.877Z")
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
