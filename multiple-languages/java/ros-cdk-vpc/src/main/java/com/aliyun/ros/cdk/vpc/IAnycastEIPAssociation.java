package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>AnycastEIPAssociation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:00.924Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IAnycastEIPAssociation")
@software.amazon.jsii.Jsii.Proxy(IAnycastEIPAssociation.Jsii$Proxy.class)
public interface IAnycastEIPAssociation extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AnycastId: Anycast EIP instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAnycastId();

    /**
     * Attribute BindInstanceId: The ID of the cloud resource instance to be bound.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindInstanceId();

    /**
     * Attribute BindInstanceRegionId: The region ID of the cloud resource instance to be bound.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindInstanceRegionId();

    /**
     * Attribute BindInstanceType: The cloud resource instance type to be bound.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindInstanceType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.AnycastEIPAssociationProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.IAnycastEIPAssociation.Jsii$Default {
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
         * Attribute AnycastId: Anycast EIP instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAnycastId() {
            return software.amazon.jsii.Kernel.get(this, "attrAnycastId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BindInstanceId: The ID of the cloud resource instance to be bound.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrBindInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BindInstanceRegionId: The region ID of the cloud resource instance to be bound.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindInstanceRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrBindInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BindInstanceType: The cloud resource instance type to be bound.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrBindInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.AnycastEIPAssociationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.AnycastEIPAssociationProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAnycastEIPAssociation}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAnycastEIPAssociation, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AnycastId: Anycast EIP instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAnycastId() {
            return software.amazon.jsii.Kernel.get(this, "attrAnycastId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BindInstanceId: The ID of the cloud resource instance to be bound.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrBindInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BindInstanceRegionId: The region ID of the cloud resource instance to be bound.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindInstanceRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrBindInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BindInstanceType: The cloud resource instance type to be bound.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrBindInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.AnycastEIPAssociationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.AnycastEIPAssociationProps.class));
        }
    }
}
