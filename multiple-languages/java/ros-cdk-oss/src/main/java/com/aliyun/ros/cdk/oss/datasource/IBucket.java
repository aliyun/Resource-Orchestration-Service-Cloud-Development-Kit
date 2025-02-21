package com.aliyun.ros.cdk.oss.datasource;

/**
 * Represents a <code>Bucket</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:18.570Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.datasource.IBucket")
@software.amazon.jsii.Jsii.Proxy(IBucket.Jsii$Proxy.class)
public interface IBucket extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The creation time of the Bucket.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute ExtranetEndpoint: The domain name of the Bucket.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtranetEndpoint();

    /**
     * Attribute IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetEndpoint();

    /**
     * Attribute Location: The region where the Bucket is located.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocation();

    /**
     * Attribute Name: Bucket name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrName();

    /**
     * Attribute Owner: Container for storing Bucket owner information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwner();

    /**
     * Attribute StorageClass: The storage type of the Bucket.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageClass();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.datasource.BucketProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.oss.datasource.IBucket.Jsii$Default {
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
         * Attribute CreateTime: The creation time of the Bucket.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExtranetEndpoint: The domain name of the Bucket.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtranetEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrExtranetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Location: The region where the Bucket is located.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocation() {
            return software.amazon.jsii.Kernel.get(this, "attrLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: Bucket name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Owner: Container for storing Bucket owner information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwner() {
            return software.amazon.jsii.Kernel.get(this, "attrOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageClass: The storage type of the Bucket.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageClass() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.datasource.BucketProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oss.datasource.BucketProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IBucket}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IBucket, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The creation time of the Bucket.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExtranetEndpoint: The domain name of the Bucket.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtranetEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrExtranetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Location: The region where the Bucket is located.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocation() {
            return software.amazon.jsii.Kernel.get(this, "attrLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: Bucket name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Owner: Container for storing Bucket owner information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwner() {
            return software.amazon.jsii.Kernel.get(this, "attrOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageClass: The storage type of the Bucket.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageClass() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.datasource.BucketProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oss.datasource.BucketProps.class));
        }
    }
}
