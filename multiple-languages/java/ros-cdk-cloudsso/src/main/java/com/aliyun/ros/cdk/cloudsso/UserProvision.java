package com.aliyun.ros.cdk.cloudsso;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CloudSSO::UserProvision</code>, which is used to create a Resource Access Management (RAM) user provisioning.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:24.495Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.UserProvision")
public class UserProvision extends com.aliyun.ros.cdk.core.Resource {

    protected UserProvision(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected UserProvision(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public UserProvision(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.UserProvisionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public UserProvision(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.UserProvisionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute UserProvisionId: The ID of the user provisioning.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserProvisionId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserProvisionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.UserProvisionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudsso.UserProvisionProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.UserProvisionProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudsso.UserProvision}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudsso.UserProvision> {
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
        private final com.aliyun.ros.cdk.cloudsso.UserProvisionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudsso.UserProvisionProps.Builder();
        }

        /**
         * Property deletionStrategy: Delete policy.
         * <p>
         * The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:
         * <p>
         * <ul>
         * <li>Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.</li>
         * <li>Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param deletionStrategy Property deletionStrategy: Delete policy. This parameter is required.
         */
        public Builder deletionStrategy(final java.lang.String deletionStrategy) {
            this.props.deletionStrategy(deletionStrategy);
            return this;
        }
        /**
         * Property deletionStrategy: Delete policy.
         * <p>
         * The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:
         * <p>
         * <ul>
         * <li>Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.</li>
         * <li>Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param deletionStrategy Property deletionStrategy: Delete policy. This parameter is required.
         */
        public Builder deletionStrategy(final com.aliyun.ros.cdk.core.IResolvable deletionStrategy) {
            this.props.deletionStrategy(deletionStrategy);
            return this;
        }

        /**
         * Property directoryId: The ID of the directory.
         * <p>
         * @return {@code this}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         */
        public Builder directoryId(final java.lang.String directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }
        /**
         * Property directoryId: The ID of the directory.
         * <p>
         * @return {@code this}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         */
        public Builder directoryId(final com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }

        /**
         * Property duplicationStrategy: Conflict policy.
         * <p>
         * When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:
         * <p>
         * <ul>
         * <li>KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.</li>
         * <li>TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param duplicationStrategy Property duplicationStrategy: Conflict policy. This parameter is required.
         */
        public Builder duplicationStrategy(final java.lang.String duplicationStrategy) {
            this.props.duplicationStrategy(duplicationStrategy);
            return this;
        }
        /**
         * Property duplicationStrategy: Conflict policy.
         * <p>
         * When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:
         * <p>
         * <ul>
         * <li>KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.</li>
         * <li>TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param duplicationStrategy Property duplicationStrategy: Conflict policy. This parameter is required.
         */
        public Builder duplicationStrategy(final com.aliyun.ros.cdk.core.IResolvable duplicationStrategy) {
            this.props.duplicationStrategy(duplicationStrategy);
            return this;
        }

        /**
         * Property principalId: The ID of the principal.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).</li>
         * <li>When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param principalId Property principalId: The ID of the principal. This parameter is required.
         */
        public Builder principalId(final java.lang.String principalId) {
            this.props.principalId(principalId);
            return this;
        }
        /**
         * Property principalId: The ID of the principal.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).</li>
         * <li>When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param principalId Property principalId: The ID of the principal. This parameter is required.
         */
        public Builder principalId(final com.aliyun.ros.cdk.core.IResolvable principalId) {
            this.props.principalId(principalId);
            return this;
        }

        /**
         * Property principalType: The type of the principal.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>User: The principal is a cloud SSO user.</li>
         * <li>Group: The principal is a cloud SSO group.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param principalType Property principalType: The type of the principal. This parameter is required.
         */
        public Builder principalType(final java.lang.String principalType) {
            this.props.principalType(principalType);
            return this;
        }
        /**
         * Property principalType: The type of the principal.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>User: The principal is a cloud SSO user.</li>
         * <li>Group: The principal is a cloud SSO group.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param principalType Property principalType: The type of the principal. This parameter is required.
         */
        public Builder principalType(final com.aliyun.ros.cdk.core.IResolvable principalType) {
            this.props.principalType(principalType);
            return this;
        }

        /**
         * Property targetId: Target ID for RAM user synchronization.
         * <p>
         * Currently, it is the RD account ID.
         * <p>
         * @return {@code this}
         * @param targetId Property targetId: Target ID for RAM user synchronization. This parameter is required.
         */
        public Builder targetId(final java.lang.String targetId) {
            this.props.targetId(targetId);
            return this;
        }
        /**
         * Property targetId: Target ID for RAM user synchronization.
         * <p>
         * Currently, it is the RD account ID.
         * <p>
         * @return {@code this}
         * @param targetId Property targetId: Target ID for RAM user synchronization. This parameter is required.
         */
        public Builder targetId(final com.aliyun.ros.cdk.core.IResolvable targetId) {
            this.props.targetId(targetId);
            return this;
        }

        /**
         * Property targetType: Target type for RAM user synchronization.
         * <p>
         * Currently, it is RD-Account.
         * <p>
         * @return {@code this}
         * @param targetType Property targetType: Target type for RAM user synchronization. This parameter is required.
         */
        public Builder targetType(final java.lang.String targetType) {
            this.props.targetType(targetType);
            return this;
        }
        /**
         * Property targetType: Target type for RAM user synchronization.
         * <p>
         * Currently, it is RD-Account.
         * <p>
         * @return {@code this}
         * @param targetType Property targetType: Target type for RAM user synchronization. This parameter is required.
         */
        public Builder targetType(final com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.props.targetType(targetType);
            return this;
        }

        /**
         * Property description: The description of the user.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the user. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the user.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the user. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudsso.UserProvision}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudsso.UserProvision build() {
            return new com.aliyun.ros.cdk.cloudsso.UserProvision(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
