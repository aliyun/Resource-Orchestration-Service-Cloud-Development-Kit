package com.aliyun.ros.cdk.polardb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::POLARDB::Extensions</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T10:41:17.560Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.Extensions")
public class Extensions extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.polardb.IExtensions {

    protected Extensions(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Extensions(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Extensions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.ExtensionsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Extensions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.ExtensionsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.ExtensionsProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.ExtensionsProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.Extensions}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.Extensions> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.polardb.ExtensionsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.ExtensionsProps.Builder();
        }

        /**
         * Property accountName: The account name associated with the database.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: The account name associated with the database. This parameter is required.
         */
        public Builder accountName(final java.lang.String accountName) {
            this.props.accountName(accountName);
            return this;
        }
        /**
         * Property accountName: The account name associated with the database.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: The account name associated with the database. This parameter is required.
         */
        public Builder accountName(final com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.props.accountName(accountName);
            return this;
        }

        /**
         * Property dbClusterId: The cluster ID.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The cluster ID. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: The cluster ID.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The cluster ID. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property dbNames: The database name.
         * <p>
         * @return {@code this}
         * @param dbNames Property dbNames: The database name. This parameter is required.
         */
        public Builder dbNames(final com.aliyun.ros.cdk.core.IResolvable dbNames) {
            this.props.dbNames(dbNames);
            return this;
        }
        /**
         * Property dbNames: The database name.
         * <p>
         * @return {@code this}
         * @param dbNames Property dbNames: The database name. This parameter is required.
         */
        public Builder dbNames(final java.util.List<? extends java.lang.Object> dbNames) {
            this.props.dbNames(dbNames);
            return this;
        }

        /**
         * Property extensions: The extensions to install.
         * <p>
         * @return {@code this}
         * @param extensions Property extensions: The extensions to install. This parameter is required.
         */
        public Builder extensions(final com.aliyun.ros.cdk.core.IResolvable extensions) {
            this.props.extensions(extensions);
            return this;
        }
        /**
         * Property extensions: The extensions to install.
         * <p>
         * @return {@code this}
         * @param extensions Property extensions: The extensions to install. This parameter is required.
         */
        public Builder extensions(final java.util.List<? extends java.lang.Object> extensions) {
            this.props.extensions(extensions);
            return this;
        }

        /**
         * Property resourceGroupId: The resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property sourceDbName: The source database name.
         * <p>
         * @return {@code this}
         * @param sourceDbName Property sourceDbName: The source database name. This parameter is required.
         */
        public Builder sourceDbName(final java.lang.String sourceDbName) {
            this.props.sourceDbName(sourceDbName);
            return this;
        }
        /**
         * Property sourceDbName: The source database name.
         * <p>
         * @return {@code this}
         * @param sourceDbName Property sourceDbName: The source database name. This parameter is required.
         */
        public Builder sourceDbName(final com.aliyun.ros.cdk.core.IResolvable sourceDbName) {
            this.props.sourceDbName(sourceDbName);
            return this;
        }

        /**
         * Property vpcId: The VPC ID of the access endpoint.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC ID of the access endpoint. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC ID of the access endpoint.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC ID of the access endpoint. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardb.Extensions}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.Extensions build() {
            return new com.aliyun.ros.cdk.polardb.Extensions(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
