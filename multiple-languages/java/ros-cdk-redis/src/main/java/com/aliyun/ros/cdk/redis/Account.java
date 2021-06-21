package com.aliyun.ros.cdk.redis;

/**
 * A ROS resource type:  `ALIYUN::REDIS::Account`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:43.975Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.Account")
public class Account extends com.aliyun.ros.cdk.core.Resource {

    protected Account(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Account(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::REDIS::Account`.
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
    public Account(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.AccountProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::REDIS::Account`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Account(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.AccountProps props) {
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
     * Attribute InstanceId: The name of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.redis.Account}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.redis.Account> {
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
        private final com.aliyun.ros.cdk.redis.AccountProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.redis.AccountProps.Builder();
        }

        /**
         * Property accountName: The name of the account.
         * <p>
         * The name must start with a lowercase letter and can contain
         * lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
         * in length.
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
         * The name must start with a lowercase letter and can contain
         * lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
         * in length.
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
         * The password can be 8 to 32 characters in length and
         * must contain at least three types of the following characters: uppercase letters,
         * lowercase letters, digits, and special characters. Special characters include ! at signs (&#64;), number signs (#), dollar signs ($), percent signs (%), carets (^),
         * ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+),
         * hyphens (-), and equal signs (=).
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
         * The password can be 8 to 32 characters in length and
         * must contain at least three types of the following characters: uppercase letters,
         * lowercase letters, digits, and special characters. Special characters include ! at signs (&#64;), number signs (#), dollar signs ($), percent signs (%), carets (^),
         * ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+),
         * hyphens (-), and equal signs (=).
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: The password of the account. This parameter is required.
         */
        public Builder accountPassword(final com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }

        /**
         * Property instanceId: The ID of the instance for which you want to create the account.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance for which you want to create the account. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the instance for which you want to create the account.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance for which you want to create the account. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property accountDescription: The description of the account.
         * <p>
         * The description must start with a letter, and cannot start with http:// or https://.
         * The description can contain letters, underscores (_), hyphens (-), and digits.
         * It can be 2 to 256 characters in length.
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
         * The description must start with a letter, and cannot start with http:// or https://.
         * The description can contain letters, underscores (_), hyphens (-), and digits.
         * It can be 2 to 256 characters in length.
         * <p>
         * @return {@code this}
         * @param accountDescription Property accountDescription: The description of the account. This parameter is required.
         */
        public Builder accountDescription(final com.aliyun.ros.cdk.core.IResolvable accountDescription) {
            this.props.accountDescription(accountDescription);
            return this;
        }

        /**
         * Property accountPrivilege: The permission of the account.
         * <p>
         * Valid values:
         * RoleReadOnly
         * RoleReadWrite (default value)
         * RoleRepl
         * Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
         * an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
         * permission can be granted to an account only in an ApsaraDB for Redis instance of
         * the standard edition in Redis 4.0.
         * <p>
         * @return {@code this}
         * @param accountPrivilege Property accountPrivilege: The permission of the account. This parameter is required.
         */
        public Builder accountPrivilege(final java.lang.String accountPrivilege) {
            this.props.accountPrivilege(accountPrivilege);
            return this;
        }
        /**
         * Property accountPrivilege: The permission of the account.
         * <p>
         * Valid values:
         * RoleReadOnly
         * RoleReadWrite (default value)
         * RoleRepl
         * Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
         * an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
         * permission can be granted to an account only in an ApsaraDB for Redis instance of
         * the standard edition in Redis 4.0.
         * <p>
         * @return {@code this}
         * @param accountPrivilege Property accountPrivilege: The permission of the account. This parameter is required.
         */
        public Builder accountPrivilege(final com.aliyun.ros.cdk.core.IResolvable accountPrivilege) {
            this.props.accountPrivilege(accountPrivilege);
            return this;
        }

        /**
         * Property accountType: The type of the account.
         * <p>
         * Set this parameter to Normal.
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: The type of the account. This parameter is required.
         */
        public Builder accountType(final java.lang.String accountType) {
            this.props.accountType(accountType);
            return this;
        }
        /**
         * Property accountType: The type of the account.
         * <p>
         * Set this parameter to Normal.
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: The type of the account. This parameter is required.
         */
        public Builder accountType(final com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.props.accountType(accountType);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.redis.Account}.
         */
        @Override
        public com.aliyun.ros.cdk.redis.Account build() {
            return new com.aliyun.ros.cdk.redis.Account(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
