package com.aliyun.ros.cdk.core;

/**
 * With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.
 * <p>
 * You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
 * attribute, ROS deletes the resource by default.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:51.762Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosDeletionPolicy")
public enum RosDeletionPolicy {
    /**
     * ROS will deletes the resource and all its content if applicable during stack deletion.
     * <p>
     * You can add this deletion policy to any resource type.
     */
    DELETE,
    /**
     * ROS keeps the resource without deleting the resource or its contents when its stack is deleted.
     * <p>
     * You can add this deletion policy to any resource type.
     */
    RETAIN,
}
