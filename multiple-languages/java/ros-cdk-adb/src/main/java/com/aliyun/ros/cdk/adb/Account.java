package com.aliyun.ros.cdk.adb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ADB::Account</code>, which is used to create a database account for an AnalyticDB for MySQL cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:07.162Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adb.$Module.class, fqn = "@alicloud/ros-cdk-adb.Account")
public class Account extends com.aliyun.ros.cdk.core.Resource {

    protected Account(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Account(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Account(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adb.AccountProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Account(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adb.AccountProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccountName: The name of the account.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccountName() {
        return software.amazon.jsii.Kernel.get(this, "attrAccountName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AccountType: The type of the account.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccountType() {
        return software.amazon.jsii.Kernel.get(this, "attrAccountType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBClusterId: The ID of the cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adb.AccountProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.adb.AccountProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adb.AccountProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.adb.Account}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.adb.Account> {
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
        private final com.aliyun.ros.cdk.adb.AccountProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.adb.AccountProps.Builder();
        }

        /**
         * Property accountName: The name of the account.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: The name of the account. This parameter is required.
         */
        public Builder accountName(final java.lang.String accountName) {
            this.props.accountName(accountName);
            return this;
        }
        /**
         * Property accountName: The name of the account.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: The name of the account. This parameter is required.
         */
        public Builder accountName(final com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.props.accountName(accountName);
            return this;
        }

        /**
         * Property accountPassword: The password of the account.
         * <p>
         * The password must contain uppercase letters, lowercase letters, digits, and special
         * characters.
         * Special characters include ! &#64; # $ % ^ &amp; * ()  _ + - and =
         * The password must be 8 to 32 characters in length.
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: The password of the account. This parameter is required.
         */
        public Builder accountPassword(final java.lang.String accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }
        /**
         * Property accountPassword: The password of the account.
         * <p>
         * The password must contain uppercase letters, lowercase letters, digits, and special
         * characters.
         * Special characters include ! &#64; # $ % ^ &amp; * ()  _ + - and =
         * The password must be 8 to 32 characters in length.
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: The password of the account. This parameter is required.
         */
        public Builder accountPassword(final com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }

        /**
         * Property dbClusterId: The ID of the cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the cluster. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: The ID of the cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the cluster. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property accountDescription: The description of the account.
         * <p>
         * The description cannot start with http://or https://.
         * The description can be up to 256 characters in length.
         * <p>
         * @return {@code this}
         * @param accountDescription Property accountDescription: The description of the account. This parameter is required.
         */
        public Builder accountDescription(final java.lang.String accountDescription) {
            this.props.accountDescription(accountDescription);
            return this;
        }
        /**
         * Property accountDescription: The description of the account.
         * <p>
         * The description cannot start with http://or https://.
         * The description can be up to 256 characters in length.
         * <p>
         * @return {@code this}
         * @param accountDescription Property accountDescription: The description of the account. This parameter is required.
         */
        public Builder accountDescription(final com.aliyun.ros.cdk.core.IResolvable accountDescription) {
            this.props.accountDescription(accountDescription);
            return this;
        }

        /**
         * Property accountType: Normal: standard account Super: privileged account.
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: Normal: standard account Super: privileged account. This parameter is required.
         */
        public Builder accountType(final java.lang.String accountType) {
            this.props.accountType(accountType);
            return this;
        }
        /**
         * Property accountType: Normal: standard account Super: privileged account.
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: Normal: standard account Super: privileged account. This parameter is required.
         */
        public Builder accountType(final com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.props.accountType(accountType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.adb.Account}.
         */
        @Override
        public com.aliyun.ros.cdk.adb.Account build() {
            return new com.aliyun.ros.cdk.adb.Account(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
