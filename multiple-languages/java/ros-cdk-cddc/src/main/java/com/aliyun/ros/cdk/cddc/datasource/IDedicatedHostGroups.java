package com.aliyun.ros.cdk.cddc.datasource;

/**
 * Represents a <code>DedicatedHostGroups</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.234Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.datasource.IDedicatedHostGroups")
@software.amazon.jsii.Jsii.Proxy(IDedicatedHostGroups.Jsii$Proxy.class)
public interface IDedicatedHostGroups extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupIds();

    /**
     * Attribute DedicatedHostGroups: The list of dedicated host groups.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroups();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupsProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cddc.datasource.IDedicatedHostGroups.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupIds() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostGroups: The list of dedicated host groups.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroups() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupsProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDedicatedHostGroups}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDedicatedHostGroups, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupIds() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostGroups: The list of dedicated host groups.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroups() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupsProps.class));
        }
    }
}
