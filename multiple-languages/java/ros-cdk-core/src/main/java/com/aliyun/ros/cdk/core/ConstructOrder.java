package com.aliyun.ros.cdk.core;

/**
 * In what order to return constructs.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:41.966Z")
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
