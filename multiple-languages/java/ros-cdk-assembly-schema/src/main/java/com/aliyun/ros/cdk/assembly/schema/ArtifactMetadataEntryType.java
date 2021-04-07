package com.aliyun.ros.cdk.assembly.schema;

/**
 * Type of artifact metadata entry.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:41.268Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.ArtifactMetadataEntryType")
public enum ArtifactMetadataEntryType {
    /**
     * Metadata key used to print INFO-level messages by the toolkit when an app is syntheized.
     */
    INFO,
    /**
     * Metadata key used to print WARNING-level messages by the toolkit when an app is syntheized.
     */
    WARN,
    /**
     * Metadata key used to print ERROR-level messages by the toolkit when an app is syntheized.
     */
    ERROR,
    /**
     * Represents the ROS logical ID of a resource at a certain path.
     */
    LOGICAL_ID,
    /**
     * Represents tags of a stack.
     */
    STACK_TAGS,
}
