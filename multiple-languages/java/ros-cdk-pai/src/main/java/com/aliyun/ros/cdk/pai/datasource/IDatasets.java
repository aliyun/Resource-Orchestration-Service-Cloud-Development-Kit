package com.aliyun.ros.cdk.pai.datasource;

/**
 * Represents a <code>Datasets</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.694Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.datasource.IDatasets")
@software.amazon.jsii.Jsii.Proxy(IDatasets.Jsii$Proxy.class)
public interface IDatasets extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DatasetIds: The list of dataset IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasetIds();

    /**
     * Attribute Datasets: The list of datasets.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasets();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.datasource.DatasetsProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pai.datasource.IDatasets.Jsii$Default {
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
         * Attribute DatasetIds: The list of dataset IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasetIds() {
            return software.amazon.jsii.Kernel.get(this, "attrDatasetIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Datasets: The list of datasets.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasets() {
            return software.amazon.jsii.Kernel.get(this, "attrDatasets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.datasource.DatasetsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.datasource.DatasetsProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDatasets}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDatasets, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute DatasetIds: The list of dataset IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasetIds() {
            return software.amazon.jsii.Kernel.get(this, "attrDatasetIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Datasets: The list of datasets.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasets() {
            return software.amazon.jsii.Kernel.get(this, "attrDatasets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.datasource.DatasetsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.datasource.DatasetsProps.class));
        }
    }
}
