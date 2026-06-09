package com.aliyun.ros.cdk.gpdb;

/**
 * Represents a <code>JdbcDataSource</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:13:37.752Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.IJdbcDataSource")
@software.amazon.jsii.Jsii.Proxy(IJdbcDataSource.Jsii$Proxy.class)
public interface IJdbcDataSource extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ConnectionMessage: Return Information: If the connection fails, an error message is returned.
     * <p>
     * Otherwise, "" is returned "".
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionMessage();

    /**
     * Attribute ConnectionStatus: Service Status:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionStatus();

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DataSourceDescription: Data Source Description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceDescription();

    /**
     * Attribute DataSourceId: The data source ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceId();

    /**
     * Attribute DataSourceName: Data Source Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceName();

    /**
     * Attribute DataSourceType: Data Source Type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceType();

    /**
     * Attribute ExternalDataServiceId: External Data Service id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExternalDataServiceId();

    /**
     * Attribute JdbcConnectionString: The JDBC connection string.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrJdbcConnectionString();

    /**
     * Attribute JdbcPassword: The password of the database account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrJdbcPassword();

    /**
     * Attribute JdbcUserName: The name of the database account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrJdbcUserName();

    /**
     * Attribute ModifyTime: Last modification time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime();

    /**
     * Attribute StatusMessage: Service status information, such as exceptions, displays the reason for the exception.
     * <p>
     * A null value in the normal Running state.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusMessage();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.JdbcDataSourceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.gpdb.IJdbcDataSource.Jsii$Default {
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
         * Attribute ConnectionMessage: Return Information: If the connection fails, an error message is returned.
         * <p>
         * Otherwise, "" is returned "".
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionMessage() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionStatus: Service Status:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataSourceDescription: Data Source Description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDataSourceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataSourceId: The data source ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDataSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataSourceName: Data Source Name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceName() {
            return software.amazon.jsii.Kernel.get(this, "attrDataSourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataSourceType: Data Source Type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrDataSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExternalDataServiceId: External Data Service id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExternalDataServiceId() {
            return software.amazon.jsii.Kernel.get(this, "attrExternalDataServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JdbcConnectionString: The JDBC connection string.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrJdbcConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrJdbcConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JdbcPassword: The password of the database account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrJdbcPassword() {
            return software.amazon.jsii.Kernel.get(this, "attrJdbcPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JdbcUserName: The name of the database account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrJdbcUserName() {
            return software.amazon.jsii.Kernel.get(this, "attrJdbcUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifyTime: Last modification time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StatusMessage: Service status information, such as exceptions, displays the reason for the exception.
         * <p>
         * A null value in the normal Running state.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusMessage() {
            return software.amazon.jsii.Kernel.get(this, "attrStatusMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.JdbcDataSourceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.JdbcDataSourceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IJdbcDataSource}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IJdbcDataSource, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ConnectionMessage: Return Information: If the connection fails, an error message is returned.
         * <p>
         * Otherwise, "" is returned "".
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionMessage() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionStatus: Service Status:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataSourceDescription: Data Source Description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDataSourceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataSourceId: The data source ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDataSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataSourceName: Data Source Name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceName() {
            return software.amazon.jsii.Kernel.get(this, "attrDataSourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataSourceType: Data Source Type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrDataSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExternalDataServiceId: External Data Service id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExternalDataServiceId() {
            return software.amazon.jsii.Kernel.get(this, "attrExternalDataServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JdbcConnectionString: The JDBC connection string.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrJdbcConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrJdbcConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JdbcPassword: The password of the database account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrJdbcPassword() {
            return software.amazon.jsii.Kernel.get(this, "attrJdbcPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JdbcUserName: The name of the database account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrJdbcUserName() {
            return software.amazon.jsii.Kernel.get(this, "attrJdbcUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifyTime: Last modification time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StatusMessage: Service status information, such as exceptions, displays the reason for the exception.
         * <p>
         * A null value in the normal Running state.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusMessage() {
            return software.amazon.jsii.Kernel.get(this, "attrStatusMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.JdbcDataSourceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.JdbcDataSourceProps.class));
        }
    }
}
