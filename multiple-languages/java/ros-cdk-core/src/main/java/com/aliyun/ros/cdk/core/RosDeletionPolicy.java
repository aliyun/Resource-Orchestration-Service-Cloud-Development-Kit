package com.aliyun.ros.cdk.core;

/**
 * With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.
 * <p>
 * You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
 * attribute, ROS deletes the resource by default.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:41.984Z")
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
