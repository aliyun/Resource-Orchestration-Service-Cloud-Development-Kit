package com.aliyun.ros.cdk.core;

/**
 * In what order to return constructs.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:30.733Z")
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
