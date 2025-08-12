package com.aliyun.ros.cdk.ga;

/**
 * Represents a <code>BasicAcceleratorIpEndpointRelation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.832Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.IBasicAcceleratorIpEndpointRelation")
@software.amazon.jsii.Jsii.Proxy(IBasicAcceleratorIpEndpointRelation.Jsii$Proxy.class)
public interface IBasicAcceleratorIpEndpointRelation extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccelerateIpId: The ID of the accelerated IP address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccelerateIpId();

    /**
     * Attribute AcceleratorId: The ID of the basic GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcceleratorId();

    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpointId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BasicAcceleratorIpEndpointRelationProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ga.IBasicAcceleratorIpEndpointRelation.Jsii$Default {
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
         * Attribute AccelerateIpId: The ID of the accelerated IP address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccelerateIpId() {
            return software.amazon.jsii.Kernel.get(this, "attrAccelerateIpId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AcceleratorId: The ID of the basic GA instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcceleratorId() {
            return software.amazon.jsii.Kernel.get(this, "attrAcceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndpointId: The ID of the endpoint.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpointId() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BasicAcceleratorIpEndpointRelationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.BasicAcceleratorIpEndpointRelationProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IBasicAcceleratorIpEndpointRelation}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IBasicAcceleratorIpEndpointRelation, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AccelerateIpId: The ID of the accelerated IP address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccelerateIpId() {
            return software.amazon.jsii.Kernel.get(this, "attrAccelerateIpId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AcceleratorId: The ID of the basic GA instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcceleratorId() {
            return software.amazon.jsii.Kernel.get(this, "attrAcceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndpointId: The ID of the endpoint.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpointId() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BasicAcceleratorIpEndpointRelationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.BasicAcceleratorIpEndpointRelationProps.class));
        }
    }
}
