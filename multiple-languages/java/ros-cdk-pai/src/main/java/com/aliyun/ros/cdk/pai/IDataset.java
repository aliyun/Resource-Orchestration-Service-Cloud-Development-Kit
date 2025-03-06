package com.aliyun.ros.cdk.pai;

/**
 * Represents a <code>Dataset</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.557Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.IDataset")
@software.amazon.jsii.Jsii.Proxy(IDataset.Jsii$Proxy.class)
public interface IDataset extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Accessibility: Workspace visibility.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility();

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DatasetId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasetId();

    /**
     * Attribute DatasetName: The name of the dataset.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasetName();

    /**
     * Attribute DataSourceType: The data source type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceType();

    /**
     * Attribute DataType: The dataset type.
     * <p>
     * The default value is COMMON.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataType();

    /**
     * Attribute Description: Custom descriptions of datasets to distinguish between different datasets.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute GmtModifiedTime: Update time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime();

    /**
     * Attribute Options: The extended field, which is of the JsonString type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOptions();

    /**
     * Attribute OwnerId: The ID of the primary account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId();

    /**
     * Attribute Property: The properties of the dataset.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProperty();

    /**
     * Attribute SourceId: The data source ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceId();

    /**
     * Attribute SourceType: The data source type.
     * <p>
     * The default value is USER.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType();

    /**
     * Attribute Uri: The Uri configuration sample is as follows:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri();

    /**
     * Attribute UserId: The ID of the user to which the dataset belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId();

    /**
     * Attribute WorkspaceId: The ID of the workspace where the dataset is located.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.DatasetProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pai.IDataset.Jsii$Default {
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
         * Attribute Accessibility: Workspace visibility.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatasetId: The first ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasetId() {
            return software.amazon.jsii.Kernel.get(this, "attrDatasetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatasetName: The name of the dataset.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasetName() {
            return software.amazon.jsii.Kernel.get(this, "attrDatasetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataSourceType: The data source type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrDataSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataType: The dataset type.
         * <p>
         * The default value is COMMON.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataType() {
            return software.amazon.jsii.Kernel.get(this, "attrDataType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Custom descriptions of datasets to distinguish between different datasets.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModifiedTime: Update time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Options: The extended field, which is of the JsonString type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOptions() {
            return software.amazon.jsii.Kernel.get(this, "attrOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OwnerId: The ID of the primary account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Property: The properties of the dataset.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProperty() {
            return software.amazon.jsii.Kernel.get(this, "attrProperty", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceId: The data source ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceType: The data source type.
         * <p>
         * The default value is USER.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uri: The Uri configuration sample is as follows:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri() {
            return software.amazon.jsii.Kernel.get(this, "attrUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The ID of the user to which the dataset belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: The ID of the workspace where the dataset is located.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.DatasetProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.DatasetProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDataset}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDataset, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Accessibility: Workspace visibility.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatasetId: The first ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasetId() {
            return software.amazon.jsii.Kernel.get(this, "attrDatasetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatasetName: The name of the dataset.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasetName() {
            return software.amazon.jsii.Kernel.get(this, "attrDatasetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataSourceType: The data source type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrDataSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataType: The dataset type.
         * <p>
         * The default value is COMMON.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataType() {
            return software.amazon.jsii.Kernel.get(this, "attrDataType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Custom descriptions of datasets to distinguish between different datasets.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModifiedTime: Update time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Options: The extended field, which is of the JsonString type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOptions() {
            return software.amazon.jsii.Kernel.get(this, "attrOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OwnerId: The ID of the primary account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Property: The properties of the dataset.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProperty() {
            return software.amazon.jsii.Kernel.get(this, "attrProperty", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceId: The data source ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceType: The data source type.
         * <p>
         * The default value is USER.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uri: The Uri configuration sample is as follows:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri() {
            return software.amazon.jsii.Kernel.get(this, "attrUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The ID of the user to which the dataset belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: The ID of the workspace where the dataset is located.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.DatasetProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.DatasetProps.class));
        }
    }
}
