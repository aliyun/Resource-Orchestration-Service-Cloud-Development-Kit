package com.aliyun.ros.cdk.assembly.schema;

/**
 * Type of cloud artifact.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:56.463Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.ArtifactType")
public enum ArtifactType {
    /**
     * Stub required because of JSII.
     */
    NONE,
    /**
     * The artifact is an ROS stack.
     */
    ALIYUN_ROS_STACK,
    /**
     * The artifact contains the CDK application's construct tree.
     */
    CDK_TREE,
    /**
     * Manifest for all assets in the Cloud Assembly.
     */
    ASSET_MANIFEST,
    /**
     * Nested Cloud Assembly.
     */
    NESTED_CLOUD_ASSEMBLY,
}
