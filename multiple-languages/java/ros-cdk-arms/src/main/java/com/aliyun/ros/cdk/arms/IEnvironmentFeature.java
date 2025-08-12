package com.aliyun.ros.cdk.arms;

/**
 * Represents a <code>EnvironmentFeature</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.965Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.IEnvironmentFeature")
@software.amazon.jsii.Jsii.Proxy(IEnvironmentFeature.Jsii$Proxy.class)
public interface IEnvironmentFeature extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute EnvironmentId: The environment ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId();

    /**
     * Attribute Feature: The installation information of the feature.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeature();

    /**
     * Attribute FeatureName: The name of the feature.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeatureName();

    /**
     * Attribute FeatureStatus: The status of the feature.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeatureStatus();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvironmentFeatureProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.arms.IEnvironmentFeature.Jsii$Default {
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
         * Attribute EnvironmentId: The environment ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Feature: The installation information of the feature.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeature() {
            return software.amazon.jsii.Kernel.get(this, "attrFeature", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FeatureName: The name of the feature.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeatureName() {
            return software.amazon.jsii.Kernel.get(this, "attrFeatureName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FeatureStatus: The status of the feature.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeatureStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrFeatureStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvironmentFeatureProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.EnvironmentFeatureProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IEnvironmentFeature}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IEnvironmentFeature, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute EnvironmentId: The environment ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Feature: The installation information of the feature.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeature() {
            return software.amazon.jsii.Kernel.get(this, "attrFeature", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FeatureName: The name of the feature.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeatureName() {
            return software.amazon.jsii.Kernel.get(this, "attrFeatureName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FeatureStatus: The status of the feature.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeatureStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrFeatureStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvironmentFeatureProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.EnvironmentFeatureProps.class));
        }
    }
}
