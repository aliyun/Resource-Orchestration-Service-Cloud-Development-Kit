package com.aliyun.ros.cdk.resourcemanager;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ResourceManager::Account</code>, which is used to create a member of the resource account type.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:54.167Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.Account")
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
    public Account(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.AccountProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Account(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.AccountProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccountId: This ID of Resource Manager Account.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccountId() {
        return software.amazon.jsii.Kernel.get(this, "attrAccountId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DisplayName: Member name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute FolderId: The ID of the parent folder.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFolderId() {
        return software.amazon.jsii.Kernel.get(this, "attrFolderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute JoinMethod: Ways for members to join the resource directory.
     * <p>
     * Valid values: invited, created
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrJoinMethod() {
        return software.amazon.jsii.Kernel.get(this, "attrJoinMethod", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceDirectoryId: Resource directory ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceDirectoryId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceDirectoryId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Type: Member type.
     * <p>
     * The value of ResourceAccount indicates the resource account
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.AccountProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.AccountProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.AccountProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.resourcemanager.Account}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.resourcemanager.Account> {
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
        private final com.aliyun.ros.cdk.resourcemanager.AccountProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.resourcemanager.AccountProps.Builder();
        }

        /**
         * Property displayName: Member name.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: Member name. This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * Property displayName: Member name.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: Member name. This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * Property deleteAccount: Whether delete the account.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deleteAccount Property deleteAccount: Whether delete the account. This parameter is required.
         */
        public Builder deleteAccount(final java.lang.Boolean deleteAccount) {
            this.props.deleteAccount(deleteAccount);
            return this;
        }
        /**
         * Property deleteAccount: Whether delete the account.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deleteAccount Property deleteAccount: Whether delete the account. This parameter is required.
         */
        public Builder deleteAccount(final com.aliyun.ros.cdk.core.IResolvable deleteAccount) {
            this.props.deleteAccount(deleteAccount);
            return this;
        }

        /**
         * Property folderId: The ID of the parent folder.
         * <p>
         * @return {@code this}
         * @param folderId Property folderId: The ID of the parent folder. This parameter is required.
         */
        public Builder folderId(final java.lang.String folderId) {
            this.props.folderId(folderId);
            return this;
        }
        /**
         * Property folderId: The ID of the parent folder.
         * <p>
         * @return {@code this}
         * @param folderId Property folderId: The ID of the parent folder. This parameter is required.
         */
        public Builder folderId(final com.aliyun.ros.cdk.core.IResolvable folderId) {
            this.props.folderId(folderId);
            return this;
        }

        /**
         * Property payerAccountId:.
         * <p>
         * @return {@code this}
         * @param payerAccountId Property payerAccountId:. This parameter is required.
         */
        public Builder payerAccountId(final java.lang.String payerAccountId) {
            this.props.payerAccountId(payerAccountId);
            return this;
        }
        /**
         * Property payerAccountId:.
         * <p>
         * @return {@code this}
         * @param payerAccountId Property payerAccountId:. This parameter is required.
         */
        public Builder payerAccountId(final com.aliyun.ros.cdk.core.IResolvable payerAccountId) {
            this.props.payerAccountId(payerAccountId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.resourcemanager.Account}.
         */
        @Override
        public com.aliyun.ros.cdk.resourcemanager.Account build() {
            return new com.aliyun.ros.cdk.resourcemanager.Account(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
