package com.aliyun.ros.cdk.core;

/**
 * In what order to return constructs.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-06-08T09:23:33.481Z")
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
