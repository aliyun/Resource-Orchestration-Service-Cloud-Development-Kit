package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>TrafficQos</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.973Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.ITrafficQos")
@software.amazon.jsii.Jsii.Proxy(ITrafficQos.Jsii$Proxy.class)
public interface ITrafficQos extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Progressing: The configuration progress of the QoS policy.
     * <p>
     * The value range is <strong>0</strong> to **100 * *.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgressing();

    /**
     * Attribute QosDescription: The description of the QoS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosDescription();

    /**
     * Attribute QosId: The QoS policy ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosId();

    /**
     * Attribute QosName: The name of the QoS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosName();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute Tags: The tag of the QoS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficQosProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.ITrafficQos.Jsii$Default {
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
         * Attribute Progressing: The configuration progress of the QoS policy.
         * <p>
         * The value range is <strong>0</strong> to **100 * *.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgressing() {
            return software.amazon.jsii.Kernel.get(this, "attrProgressing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QosDescription: The description of the QoS policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrQosDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QosId: The QoS policy ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosId() {
            return software.amazon.jsii.Kernel.get(this, "attrQosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QosName: The name of the QoS policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosName() {
            return software.amazon.jsii.Kernel.get(this, "attrQosName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the QoS policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficQosProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.TrafficQosProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITrafficQos}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITrafficQos, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Progressing: The configuration progress of the QoS policy.
         * <p>
         * The value range is <strong>0</strong> to **100 * *.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgressing() {
            return software.amazon.jsii.Kernel.get(this, "attrProgressing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QosDescription: The description of the QoS policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrQosDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QosId: The QoS policy ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosId() {
            return software.amazon.jsii.Kernel.get(this, "attrQosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QosName: The name of the QoS policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosName() {
            return software.amazon.jsii.Kernel.get(this, "attrQosName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the QoS policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficQosProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.TrafficQosProps.class));
        }
    }
}
