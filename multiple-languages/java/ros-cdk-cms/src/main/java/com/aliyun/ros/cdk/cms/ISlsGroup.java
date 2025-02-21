package com.aliyun.ros.cdk.cms;

/**
 * Represents a <code>SlsGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:13.184Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.ISlsGroup")
@software.amazon.jsii.Jsii.Proxy(ISlsGroup.Jsii$Proxy.class)
public interface ISlsGroup extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The creation time of the Logstore group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute SlsGroupConfig: The configurations of the Logstore group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlsGroupConfig();

    /**
     * Attribute SlsGroupDescription: The description of the Logstore group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlsGroupDescription();

    /**
     * Attribute SlsGroupName: The name of the Logstore group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlsGroupName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.SlsGroupProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cms.ISlsGroup.Jsii$Default {
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute CreateTime: The creation time of the Logstore group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SlsGroupConfig: The configurations of the Logstore group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlsGroupConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrSlsGroupConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SlsGroupDescription: The description of the Logstore group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlsGroupDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrSlsGroupDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SlsGroupName: The name of the Logstore group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlsGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrSlsGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.SlsGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.SlsGroupProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ISlsGroup}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISlsGroup, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute CreateTime: The creation time of the Logstore group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SlsGroupConfig: The configurations of the Logstore group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlsGroupConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrSlsGroupConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SlsGroupDescription: The description of the Logstore group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlsGroupDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrSlsGroupDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SlsGroupName: The name of the Logstore group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlsGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrSlsGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.SlsGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.SlsGroupProps.class));
        }
    }
}
