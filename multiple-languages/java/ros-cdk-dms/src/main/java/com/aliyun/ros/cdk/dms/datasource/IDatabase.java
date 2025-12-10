package com.aliyun.ros.cdk.dms.datasource;

/**
 * Represents a <code>Database</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.571Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.datasource.IDatabase")
@software.amazon.jsii.Jsii.Proxy(IDatabase.Jsii$Proxy.class)
public interface IDatabase extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CatalogName: Database catalog name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCatalogName();

    /**
     * Attribute DatabaseId: Database ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatabaseId();

    /**
     * Attribute DbaId: Database administrator ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbaId();

    /**
     * Attribute DbaName: Database administrator name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbaName();

    /**
     * Attribute DbType: Database type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbType();

    /**
     * Attribute Encoding: Database encoding.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncoding();

    /**
     * Attribute EnvType: Database environment type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvType();

    /**
     * Attribute Host: Database connection address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHost();

    /**
     * Attribute InstanceAlias: Database instance alias.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceAlias();

    /**
     * Attribute InstanceId: Database instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute OwnerIdList: Database owner ID list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerIdList();

    /**
     * Attribute OwnerNameList: Database owner name list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerNameList();

    /**
     * Attribute Port: Database connection port.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort();

    /**
     * Attribute SchemaName: Database schema name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSchemaName();

    /**
     * Attribute SearchName: Database search name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSearchName();

    /**
     * Attribute Sid: Database SID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSid();

    /**
     * Attribute State: Database state.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrState();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.datasource.DatabaseProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.dms.datasource.IDatabase.Jsii$Default {
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
         * Attribute CatalogName: Database catalog name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCatalogName() {
            return software.amazon.jsii.Kernel.get(this, "attrCatalogName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatabaseId: Database ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatabaseId() {
            return software.amazon.jsii.Kernel.get(this, "attrDatabaseId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbaId: Database administrator ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbaId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbaName: Database administrator name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbaName() {
            return software.amazon.jsii.Kernel.get(this, "attrDbaName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbType: Database type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Encoding: Database encoding.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncoding() {
            return software.amazon.jsii.Kernel.get(this, "attrEncoding", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvType: Database environment type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvType() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Host: Database connection address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHost() {
            return software.amazon.jsii.Kernel.get(this, "attrHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceAlias: Database instance alias.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceAlias() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: Database instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OwnerIdList: Database owner ID list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerIdList() {
            return software.amazon.jsii.Kernel.get(this, "attrOwnerIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OwnerNameList: Database owner name list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerNameList() {
            return software.amazon.jsii.Kernel.get(this, "attrOwnerNameList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port: Database connection port.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SchemaName: Database schema name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSchemaName() {
            return software.amazon.jsii.Kernel.get(this, "attrSchemaName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SearchName: Database search name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSearchName() {
            return software.amazon.jsii.Kernel.get(this, "attrSearchName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Sid: Database SID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSid() {
            return software.amazon.jsii.Kernel.get(this, "attrSid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute State: Database state.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
            return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.datasource.DatabaseProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dms.datasource.DatabaseProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDatabase}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDatabase, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CatalogName: Database catalog name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCatalogName() {
            return software.amazon.jsii.Kernel.get(this, "attrCatalogName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatabaseId: Database ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatabaseId() {
            return software.amazon.jsii.Kernel.get(this, "attrDatabaseId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbaId: Database administrator ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbaId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbaName: Database administrator name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbaName() {
            return software.amazon.jsii.Kernel.get(this, "attrDbaName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbType: Database type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Encoding: Database encoding.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncoding() {
            return software.amazon.jsii.Kernel.get(this, "attrEncoding", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvType: Database environment type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvType() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Host: Database connection address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHost() {
            return software.amazon.jsii.Kernel.get(this, "attrHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceAlias: Database instance alias.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceAlias() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: Database instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OwnerIdList: Database owner ID list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerIdList() {
            return software.amazon.jsii.Kernel.get(this, "attrOwnerIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OwnerNameList: Database owner name list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerNameList() {
            return software.amazon.jsii.Kernel.get(this, "attrOwnerNameList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port: Database connection port.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SchemaName: Database schema name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSchemaName() {
            return software.amazon.jsii.Kernel.get(this, "attrSchemaName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SearchName: Database search name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSearchName() {
            return software.amazon.jsii.Kernel.get(this, "attrSearchName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Sid: Database SID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSid() {
            return software.amazon.jsii.Kernel.get(this, "attrSid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute State: Database state.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
            return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.datasource.DatabaseProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dms.datasource.DatabaseProps.class));
        }
    }
}
