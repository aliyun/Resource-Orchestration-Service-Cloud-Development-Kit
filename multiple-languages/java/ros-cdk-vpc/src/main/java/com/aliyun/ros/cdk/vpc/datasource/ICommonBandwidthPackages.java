package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Represents a <code>CommonBandwidthPackages</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.706Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.ICommonBandwidthPackages")
@software.amazon.jsii.Jsii.Proxy(ICommonBandwidthPackages.Jsii$Proxy.class)
public interface ICommonBandwidthPackages extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CommonBandwidthPackageIds: The list of common bandwidth package IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonBandwidthPackageIds();

    /**
     * Attribute CommonBandwidthPackages: The list of common bandwidth packages.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonBandwidthPackages();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackagesProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.datasource.ICommonBandwidthPackages.Jsii$Default {
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
         * Attribute CommonBandwidthPackageIds: The list of common bandwidth package IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonBandwidthPackageIds() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonBandwidthPackageIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonBandwidthPackages: The list of common bandwidth packages.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonBandwidthPackages() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonBandwidthPackages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackagesProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackagesProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICommonBandwidthPackages}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICommonBandwidthPackages, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CommonBandwidthPackageIds: The list of common bandwidth package IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonBandwidthPackageIds() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonBandwidthPackageIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonBandwidthPackages: The list of common bandwidth packages.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonBandwidthPackages() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonBandwidthPackages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackagesProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackagesProps.class));
        }
    }
}
