package com.aliyun.ros.cdk.ram;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RAM::SecurityPreference</code>, which is used to configure security preferences for Resource Access Management (RAM) users.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:43.006Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.SecurityPreference")
public class SecurityPreference extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ram.ISecurityPreference {

    protected SecurityPreference(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SecurityPreference(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public SecurityPreference(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ram.SecurityPreferenceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public SecurityPreference(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ram.SecurityPreferenceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public SecurityPreference(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute AllowUserToChangePassword: Specifies whether RAM users can change their passwords.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToChangePassword() {
        return software.amazon.jsii.Kernel.get(this, "attrAllowUserToChangePassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AllowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToManageAccessKeys() {
        return software.amazon.jsii.Kernel.get(this, "attrAllowUserToManageAccessKeys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AllowUserToManageMFADevices: Specifies whether RAM users can manage their MFA devices.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToManageMfaDevices() {
        return software.amazon.jsii.Kernel.get(this, "attrAllowUserToManageMfaDevices", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AllowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToManagePublicKeys() {
        return software.amazon.jsii.Kernel.get(this, "attrAllowUserToManagePublicKeys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnableSaveMFATicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableSaveMfaTicket() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableSaveMfaTicket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LoginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoginNetworkMasks() {
        return software.amazon.jsii.Kernel.get(this, "attrLoginNetworkMasks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LoginSessionDuration: The validity period of the logon session of the RAM user.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoginSessionDuration() {
        return software.amazon.jsii.Kernel.get(this, "attrLoginSessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.SecurityPreferenceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.SecurityPreferenceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.SecurityPreference}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.SecurityPreference> {
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
        private com.aliyun.ros.cdk.ram.SecurityPreferenceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property allowUserToChangePassword: Specifies whether RAM users can change their passwords.
         * <p>
         * Valid values:
         * true: RAM users can change their passwords. This is the default value.
         * false: RAM users cannot change their passwords.
         * <p>
         * @return {@code this}
         * @param allowUserToChangePassword Property allowUserToChangePassword: Specifies whether RAM users can change their passwords. This parameter is required.
         */
        public Builder allowUserToChangePassword(final java.lang.Boolean allowUserToChangePassword) {
            this.props().allowUserToChangePassword(allowUserToChangePassword);
            return this;
        }
        /**
         * Property allowUserToChangePassword: Specifies whether RAM users can change their passwords.
         * <p>
         * Valid values:
         * true: RAM users can change their passwords. This is the default value.
         * false: RAM users cannot change their passwords.
         * <p>
         * @return {@code this}
         * @param allowUserToChangePassword Property allowUserToChangePassword: Specifies whether RAM users can change their passwords. This parameter is required.
         */
        public Builder allowUserToChangePassword(final com.aliyun.ros.cdk.core.IResolvable allowUserToChangePassword) {
            this.props().allowUserToChangePassword(allowUserToChangePassword);
            return this;
        }

        /**
         * Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
         * <p>
         * Valid values:
         * true: RAM users can manage their AccessKey pairs.
         * false: RAM users cannot manage their AccessKey pairs. This is the default value.
         * <p>
         * @return {@code this}
         * @param allowUserToManageAccessKeys Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs. This parameter is required.
         */
        public Builder allowUserToManageAccessKeys(final java.lang.Boolean allowUserToManageAccessKeys) {
            this.props().allowUserToManageAccessKeys(allowUserToManageAccessKeys);
            return this;
        }
        /**
         * Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
         * <p>
         * Valid values:
         * true: RAM users can manage their AccessKey pairs.
         * false: RAM users cannot manage their AccessKey pairs. This is the default value.
         * <p>
         * @return {@code this}
         * @param allowUserToManageAccessKeys Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs. This parameter is required.
         */
        public Builder allowUserToManageAccessKeys(final com.aliyun.ros.cdk.core.IResolvable allowUserToManageAccessKeys) {
            this.props().allowUserToManageAccessKeys(allowUserToManageAccessKeys);
            return this;
        }

        /**
         * Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices.
         * <p>
         * Valid values:
         * true: RAM users can manage their MFA devices. This is the default value.
         * false: RAM users cannot manage their MFA devices.
         * <p>
         * @return {@code this}
         * @param allowUserToManageMfaDevices Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices. This parameter is required.
         */
        public Builder allowUserToManageMfaDevices(final java.lang.Boolean allowUserToManageMfaDevices) {
            this.props().allowUserToManageMfaDevices(allowUserToManageMfaDevices);
            return this;
        }
        /**
         * Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices.
         * <p>
         * Valid values:
         * true: RAM users can manage their MFA devices. This is the default value.
         * false: RAM users cannot manage their MFA devices.
         * <p>
         * @return {@code this}
         * @param allowUserToManageMfaDevices Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices. This parameter is required.
         */
        public Builder allowUserToManageMfaDevices(final com.aliyun.ros.cdk.core.IResolvable allowUserToManageMfaDevices) {
            this.props().allowUserToManageMfaDevices(allowUserToManageMfaDevices);
            return this;
        }

        /**
         * Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
         * <p>
         * Valid values:
         * true: RAM users can manage their public keys.
         * false: RAM users cannot manage their public keys. This is the default value.
         * Note This parameter is valid only for the Japan site.
         * <p>
         * @return {@code this}
         * @param allowUserToManagePublicKeys Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys. This parameter is required.
         */
        public Builder allowUserToManagePublicKeys(final java.lang.Boolean allowUserToManagePublicKeys) {
            this.props().allowUserToManagePublicKeys(allowUserToManagePublicKeys);
            return this;
        }
        /**
         * Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
         * <p>
         * Valid values:
         * true: RAM users can manage their public keys.
         * false: RAM users cannot manage their public keys. This is the default value.
         * Note This parameter is valid only for the Japan site.
         * <p>
         * @return {@code this}
         * @param allowUserToManagePublicKeys Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys. This parameter is required.
         */
        public Builder allowUserToManagePublicKeys(final com.aliyun.ros.cdk.core.IResolvable allowUserToManagePublicKeys) {
            this.props().allowUserToManagePublicKeys(allowUserToManagePublicKeys);
            return this;
        }

        /**
         * Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
         * <p>
         * The security codes are valid for 7 days. Valid values:
         * true: RAM users can save MFA security codes during logon.
         * false: RAM users cannot save MFA security codes during logon. This is the default
         * value.
         * <p>
         * @return {@code this}
         * @param enableSaveMfaTicket Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon. This parameter is required.
         */
        public Builder enableSaveMfaTicket(final java.lang.Boolean enableSaveMfaTicket) {
            this.props().enableSaveMfaTicket(enableSaveMfaTicket);
            return this;
        }
        /**
         * Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
         * <p>
         * The security codes are valid for 7 days. Valid values:
         * true: RAM users can save MFA security codes during logon.
         * false: RAM users cannot save MFA security codes during logon. This is the default
         * value.
         * <p>
         * @return {@code this}
         * @param enableSaveMfaTicket Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon. This parameter is required.
         */
        public Builder enableSaveMfaTicket(final com.aliyun.ros.cdk.core.IResolvable enableSaveMfaTicket) {
            this.props().enableSaveMfaTicket(enableSaveMfaTicket);
            return this;
        }

        /**
         * Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
         * <p>
         * This parameter applies to password-based logon and single sign-on (SSO).
         * However, this parameter does not apply to API calls that are authenticated based on
         * AccessKey pairs.
         * If a subnet mask is specified, RAM users can log on to the console only by using the
         * IP addresses in the subnet.
         * If you do not specify a subnet mask, RAM users can log on to the console by using
         * all IP addresses.
         * If you want to specify multiple subnet masks, separate the subnet masks with semicolons
         * (;). Example: 192.168.0.0/16;10.0.0.0/8.
         * A maximum of 25 subnet masks can be set. The total length of the subnet masks can
         * be 1 to 512 characters.
         * <p>
         * @return {@code this}
         * @param loginNetworkMasks Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed. This parameter is required.
         */
        public Builder loginNetworkMasks(final java.lang.String loginNetworkMasks) {
            this.props().loginNetworkMasks(loginNetworkMasks);
            return this;
        }
        /**
         * Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
         * <p>
         * This parameter applies to password-based logon and single sign-on (SSO).
         * However, this parameter does not apply to API calls that are authenticated based on
         * AccessKey pairs.
         * If a subnet mask is specified, RAM users can log on to the console only by using the
         * IP addresses in the subnet.
         * If you do not specify a subnet mask, RAM users can log on to the console by using
         * all IP addresses.
         * If you want to specify multiple subnet masks, separate the subnet masks with semicolons
         * (;). Example: 192.168.0.0/16;10.0.0.0/8.
         * A maximum of 25 subnet masks can be set. The total length of the subnet masks can
         * be 1 to 512 characters.
         * <p>
         * @return {@code this}
         * @param loginNetworkMasks Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed. This parameter is required.
         */
        public Builder loginNetworkMasks(final com.aliyun.ros.cdk.core.IResolvable loginNetworkMasks) {
            this.props().loginNetworkMasks(loginNetworkMasks);
            return this;
        }

        /**
         * Property loginSessionDuration: The validity period of the logon session of the RAM user.
         * <p>
         * Valid values: 6 to 24. Default value: 6. Unit: hours.
         * <p>
         * @return {@code this}
         * @param loginSessionDuration Property loginSessionDuration: The validity period of the logon session of the RAM user. This parameter is required.
         */
        public Builder loginSessionDuration(final java.lang.Number loginSessionDuration) {
            this.props().loginSessionDuration(loginSessionDuration);
            return this;
        }
        /**
         * Property loginSessionDuration: The validity period of the logon session of the RAM user.
         * <p>
         * Valid values: 6 to 24. Default value: 6. Unit: hours.
         * <p>
         * @return {@code this}
         * @param loginSessionDuration Property loginSessionDuration: The validity period of the logon session of the RAM user. This parameter is required.
         */
        public Builder loginSessionDuration(final com.aliyun.ros.cdk.core.IResolvable loginSessionDuration) {
            this.props().loginSessionDuration(loginSessionDuration);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.SecurityPreference}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.SecurityPreference build() {
            return new com.aliyun.ros.cdk.ram.SecurityPreference(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ram.SecurityPreferenceProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ram.SecurityPreferenceProps.Builder();
            }
            return this.props;
        }
    }
}
