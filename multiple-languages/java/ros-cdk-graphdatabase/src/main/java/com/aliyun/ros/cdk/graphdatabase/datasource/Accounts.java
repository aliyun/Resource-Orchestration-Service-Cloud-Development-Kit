package com.aliyun.ros.cdk.graphdatabase.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::GraphDatabase::Accounts</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:49.064Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.graphdatabase.$Module.class, fqn = "@alicloud/ros-cdk-graphdatabase.datasource.Accounts")
public class Accounts extends com.aliyun.ros.cdk.core.Resource {

    protected Accounts(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Accounts(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::GraphDatabase::Accounts</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Accounts(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.graphdatabase.datasource.AccountsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::GraphDatabase::Accounts</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Accounts(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.graphdatabase.datasource.AccountsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccountNames: The list of account names.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccountNames() {
        return software.amazon.jsii.Kernel.get(this, "attrAccountNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Accounts: The list of accounts.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccounts() {
        return software.amazon.jsii.Kernel.get(this, "attrAccounts", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.graphdatabase.datasource.Accounts}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.graphdatabase.datasource.Accounts> {
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
        private final com.aliyun.ros.cdk.graphdatabase.datasource.AccountsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.graphdatabase.datasource.AccountsProps.Builder();
        }

        /**
         * Property dbInstanceId: Instance Id.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: Instance Id. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: Instance Id.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: Instance Id. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property accountName: Account name.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: Account name. This parameter is required.
         */
        public Builder accountName(final java.lang.String accountName) {
            this.props.accountName(accountName);
            return this;
        }
        /**
         * Property accountName: Account name.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: Account name. This parameter is required.
         */
        public Builder accountName(final com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.props.accountName(accountName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.graphdatabase.datasource.Accounts}.
         */
        @Override
        public com.aliyun.ros.cdk.graphdatabase.datasource.Accounts build() {
            return new com.aliyun.ros.cdk.graphdatabase.datasource.Accounts(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
