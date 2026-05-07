package com.aliyun.ros.cdk.paifeaturestore;

/**
 * Represents a <code>Datasource</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:52.630Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paifeaturestore.$Module.class, fqn = "@alicloud/ros-cdk-paifeaturestore.IDatasource")
@software.amazon.jsii.Jsii.Proxy(IDatasource.Jsii$Proxy.class)
public interface IDatasource extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Config: Resource configuration information.
     * <p>
     * The string format is json.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfig();

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DatasourceId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasourceId();

    /**
     * Attribute DatasourceName: The datasource name.
     * <p>
     * Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasourceName();

    /**
     * Attribute Type: Data source type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    /**
     * Attribute Uri: The resource address of the datasource.
     * <p>
     * The maximum length cannot exceed 64.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri();

    /**
     * Attribute WorkspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paifeaturestore.DatasourceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.paifeaturestore.IDatasource.Jsii$Default {
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
         * Attribute Config: Resource configuration information.
         * <p>
         * The string format is json.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatasourceId: The first ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDatasourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatasourceName: The datasource name.
         * <p>
         * Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasourceName() {
            return software.amazon.jsii.Kernel.get(this, "attrDatasourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: Data source type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uri: The resource address of the datasource.
         * <p>
         * The maximum length cannot exceed 64.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri() {
            return software.amazon.jsii.Kernel.get(this, "attrUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paifeaturestore.DatasourceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.paifeaturestore.DatasourceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDatasource}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDatasource, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Config: Resource configuration information.
         * <p>
         * The string format is json.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatasourceId: The first ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDatasourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatasourceName: The datasource name.
         * <p>
         * Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasourceName() {
            return software.amazon.jsii.Kernel.get(this, "attrDatasourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: Data source type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uri: The resource address of the datasource.
         * <p>
         * The maximum length cannot exceed 64.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri() {
            return software.amazon.jsii.Kernel.get(this, "attrUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paifeaturestore.DatasourceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.paifeaturestore.DatasourceProps.class));
        }
    }
}
