package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Represents a <code>TrafficMirrorFilter</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:30.838Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.ITrafficMirrorFilter")
@software.amazon.jsii.Jsii.Proxy(ITrafficMirrorFilter.Jsii$Proxy.class)
public interface ITrafficMirrorFilter extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute EgressRules: EgressRules.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEgressRules();

    /**
     * Attribute IngressRules: IngressRules.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIngressRules();

    /**
     * Attribute TrafficMirrorFilterDescription: The description of the TrafficMirrorFilter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrafficMirrorFilterDescription();

    /**
     * Attribute TrafficMirrorFilterId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrafficMirrorFilterId();

    /**
     * Attribute TrafficMirrorFilterName: The name of the TrafficMirrorFilter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrafficMirrorFilterName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.TrafficMirrorFilterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.datasource.ITrafficMirrorFilter.Jsii$Default {
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
         * Attribute EgressRules: EgressRules.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEgressRules() {
            return software.amazon.jsii.Kernel.get(this, "attrEgressRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IngressRules: IngressRules.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIngressRules() {
            return software.amazon.jsii.Kernel.get(this, "attrIngressRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TrafficMirrorFilterDescription: The description of the TrafficMirrorFilter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrafficMirrorFilterDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrTrafficMirrorFilterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TrafficMirrorFilterId: The first ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrafficMirrorFilterId() {
            return software.amazon.jsii.Kernel.get(this, "attrTrafficMirrorFilterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TrafficMirrorFilterName: The name of the TrafficMirrorFilter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrafficMirrorFilterName() {
            return software.amazon.jsii.Kernel.get(this, "attrTrafficMirrorFilterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.TrafficMirrorFilterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.TrafficMirrorFilterProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITrafficMirrorFilter}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITrafficMirrorFilter, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute EgressRules: EgressRules.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEgressRules() {
            return software.amazon.jsii.Kernel.get(this, "attrEgressRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IngressRules: IngressRules.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIngressRules() {
            return software.amazon.jsii.Kernel.get(this, "attrIngressRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TrafficMirrorFilterDescription: The description of the TrafficMirrorFilter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrafficMirrorFilterDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrTrafficMirrorFilterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TrafficMirrorFilterId: The first ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrafficMirrorFilterId() {
            return software.amazon.jsii.Kernel.get(this, "attrTrafficMirrorFilterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TrafficMirrorFilterName: The name of the TrafficMirrorFilter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrafficMirrorFilterName() {
            return software.amazon.jsii.Kernel.get(this, "attrTrafficMirrorFilterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.TrafficMirrorFilterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.TrafficMirrorFilterProps.class));
        }
    }
}
