package com.aliyun.ros.cdk.assembly.schema;

/**
 * Type of artifact metadata entry.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:25.950Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.ArtifactMetadataEntryType")
public enum ArtifactMetadataEntryType {
    /**
     * Asset in metadata.
     */
    ASSET,
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
