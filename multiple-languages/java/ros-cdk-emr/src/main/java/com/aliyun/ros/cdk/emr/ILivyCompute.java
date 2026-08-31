package com.aliyun.ros.cdk.emr;

/**
 * Represents a <code>LivyCompute</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T08:59:08.267Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.ILivyCompute")
@software.amazon.jsii.Jsii.Proxy(ILivyCompute.Jsii$Proxy.class)
public interface ILivyCompute extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Endpoint: The public endpoint of the Livy Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoint();

    /**
     * Attribute EndpointInner: The internal endpoint of the Livy Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpointInner();

    /**
     * Attribute LivyComputeId: The ID of the Livy Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLivyComputeId();

    /**
     * Attribute Status: The status of the Livy Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.LivyComputeProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.emr.ILivyCompute.Jsii$Default {
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
         * Attribute Endpoint: The public endpoint of the Livy Gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndpointInner: The internal endpoint of the Livy Gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpointInner() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpointInner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LivyComputeId: The ID of the Livy Gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLivyComputeId() {
            return software.amazon.jsii.Kernel.get(this, "attrLivyComputeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The status of the Livy Gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.LivyComputeProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.LivyComputeProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ILivyCompute}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ILivyCompute, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Endpoint: The public endpoint of the Livy Gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndpointInner: The internal endpoint of the Livy Gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpointInner() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpointInner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LivyComputeId: The ID of the Livy Gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLivyComputeId() {
            return software.amazon.jsii.Kernel.get(this, "attrLivyComputeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The status of the Livy Gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.LivyComputeProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.LivyComputeProps.class));
        }
    }
}
