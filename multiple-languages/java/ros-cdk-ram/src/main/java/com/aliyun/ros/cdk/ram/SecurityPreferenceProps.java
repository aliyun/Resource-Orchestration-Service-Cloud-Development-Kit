package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>SecurityPreference</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-securitypreference
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:53.978Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.SecurityPreferenceProps")
@software.amazon.jsii.Jsii.Proxy(SecurityPreferenceProps.Jsii$Proxy.class)
public interface SecurityPreferenceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property allowUserToChangePassword: Specifies whether RAM users can change their passwords.
     * <p>
     * Valid values:
     * true: RAM users can change their passwords. This is the default value.
     * false: RAM users cannot change their passwords.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllowUserToChangePassword() {
        return null;
    }

    /**
     * Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
     * <p>
     * Valid values:
     * true: RAM users can manage their AccessKey pairs.
     * false: RAM users cannot manage their AccessKey pairs. This is the default value.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllowUserToManageAccessKeys() {
        return null;
    }

    /**
     * Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices.
     * <p>
     * Valid values:
     * true: RAM users can manage their MFA devices. This is the default value.
     * false: RAM users cannot manage their MFA devices.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllowUserToManageMfaDevices() {
        return null;
    }

    /**
     * Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
     * <p>
     * Valid values:
     * true: RAM users can manage their public keys.
     * false: RAM users cannot manage their public keys. This is the default value.
     * Note This parameter is valid only for the Japan site.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllowUserToManagePublicKeys() {
        return null;
    }

    /**
     * Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
     * <p>
     * The security codes are valid for 7 days. Valid values:
     * true: RAM users can save MFA security codes during logon.
     * false: RAM users cannot save MFA security codes during logon. This is the default
     * value.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSaveMfaTicket() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoginNetworkMasks() {
        return null;
    }

    /**
     * Property loginSessionDuration: The validity period of the logon session of the RAM user.
     * <p>
     * Valid values: 6 to 24. Default value: 6. Unit: hours.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoginSessionDuration() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SecurityPreferenceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SecurityPreferenceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SecurityPreferenceProps> {
        java.lang.Object allowUserToChangePassword;
        java.lang.Object allowUserToManageAccessKeys;
        java.lang.Object allowUserToManageMfaDevices;
        java.lang.Object allowUserToManagePublicKeys;
        java.lang.Object enableSaveMfaTicket;
        java.lang.Object loginNetworkMasks;
        java.lang.Object loginSessionDuration;

        /**
         * Sets the value of {@link SecurityPreferenceProps#getAllowUserToChangePassword}
         * @param allowUserToChangePassword Property allowUserToChangePassword: Specifies whether RAM users can change their passwords.
         *                                  Valid values:
         *                                  true: RAM users can change their passwords. This is the default value.
         *                                  false: RAM users cannot change their passwords.
         * @return {@code this}
         */
        public Builder allowUserToChangePassword(java.lang.Boolean allowUserToChangePassword) {
            this.allowUserToChangePassword = allowUserToChangePassword;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPreferenceProps#getAllowUserToChangePassword}
         * @param allowUserToChangePassword Property allowUserToChangePassword: Specifies whether RAM users can change their passwords.
         *                                  Valid values:
         *                                  true: RAM users can change their passwords. This is the default value.
         *                                  false: RAM users cannot change their passwords.
         * @return {@code this}
         */
        public Builder allowUserToChangePassword(com.aliyun.ros.cdk.core.IResolvable allowUserToChangePassword) {
            this.allowUserToChangePassword = allowUserToChangePassword;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPreferenceProps#getAllowUserToManageAccessKeys}
         * @param allowUserToManageAccessKeys Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
         *                                    Valid values:
         *                                    true: RAM users can manage their AccessKey pairs.
         *                                    false: RAM users cannot manage their AccessKey pairs. This is the default value.
         * @return {@code this}
         */
        public Builder allowUserToManageAccessKeys(java.lang.Boolean allowUserToManageAccessKeys) {
            this.allowUserToManageAccessKeys = allowUserToManageAccessKeys;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPreferenceProps#getAllowUserToManageAccessKeys}
         * @param allowUserToManageAccessKeys Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
         *                                    Valid values:
         *                                    true: RAM users can manage their AccessKey pairs.
         *                                    false: RAM users cannot manage their AccessKey pairs. This is the default value.
         * @return {@code this}
         */
        public Builder allowUserToManageAccessKeys(com.aliyun.ros.cdk.core.IResolvable allowUserToManageAccessKeys) {
            this.allowUserToManageAccessKeys = allowUserToManageAccessKeys;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPreferenceProps#getAllowUserToManageMfaDevices}
         * @param allowUserToManageMfaDevices Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices.
         *                                    Valid values:
         *                                    true: RAM users can manage their MFA devices. This is the default value.
         *                                    false: RAM users cannot manage their MFA devices.
         * @return {@code this}
         */
        public Builder allowUserToManageMfaDevices(java.lang.Boolean allowUserToManageMfaDevices) {
            this.allowUserToManageMfaDevices = allowUserToManageMfaDevices;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPreferenceProps#getAllowUserToManageMfaDevices}
         * @param allowUserToManageMfaDevices Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices.
         *                                    Valid values:
         *                                    true: RAM users can manage their MFA devices. This is the default value.
         *                                    false: RAM users cannot manage their MFA devices.
         * @return {@code this}
         */
        public Builder allowUserToManageMfaDevices(com.aliyun.ros.cdk.core.IResolvable allowUserToManageMfaDevices) {
            this.allowUserToManageMfaDevices = allowUserToManageMfaDevices;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPreferenceProps#getAllowUserToManagePublicKeys}
         * @param allowUserToManagePublicKeys Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
         *                                    Valid values:
         *                                    true: RAM users can manage their public keys.
         *                                    false: RAM users cannot manage their public keys. This is the default value.
         *                                    Note This parameter is valid only for the Japan site.
         * @return {@code this}
         */
        public Builder allowUserToManagePublicKeys(java.lang.Boolean allowUserToManagePublicKeys) {
            this.allowUserToManagePublicKeys = allowUserToManagePublicKeys;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPreferenceProps#getAllowUserToManagePublicKeys}
         * @param allowUserToManagePublicKeys Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
         *                                    Valid values:
         *                                    true: RAM users can manage their public keys.
         *                                    false: RAM users cannot manage their public keys. This is the default value.
         *                                    Note This parameter is valid only for the Japan site.
         * @return {@code this}
         */
        public Builder allowUserToManagePublicKeys(com.aliyun.ros.cdk.core.IResolvable allowUserToManagePublicKeys) {
            this.allowUserToManagePublicKeys = allowUserToManagePublicKeys;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPreferenceProps#getEnableSaveMfaTicket}
         * @param enableSaveMfaTicket Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
         *                            The security codes are valid for 7 days. Valid values:
         *                            true: RAM users can save MFA security codes during logon.
         *                            false: RAM users cannot save MFA security codes during logon. This is the default
         *                            value.
         * @return {@code this}
         */
        public Builder enableSaveMfaTicket(java.lang.Boolean enableSaveMfaTicket) {
            this.enableSaveMfaTicket = enableSaveMfaTicket;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPreferenceProps#getEnableSaveMfaTicket}
         * @param enableSaveMfaTicket Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
         *                            The security codes are valid for 7 days. Valid values:
         *                            true: RAM users can save MFA security codes during logon.
         *                            false: RAM users cannot save MFA security codes during logon. This is the default
         *                            value.
         * @return {@code this}
         */
        public Builder enableSaveMfaTicket(com.aliyun.ros.cdk.core.IResolvable enableSaveMfaTicket) {
            this.enableSaveMfaTicket = enableSaveMfaTicket;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPreferenceProps#getLoginNetworkMasks}
         * @param loginNetworkMasks Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
         *                          This parameter applies to password-based logon and single sign-on (SSO).
         *                          However, this parameter does not apply to API calls that are authenticated based on
         *                          AccessKey pairs.
         *                          If a subnet mask is specified, RAM users can log on to the console only by using the
         *                          IP addresses in the subnet.
         *                          If you do not specify a subnet mask, RAM users can log on to the console by using
         *                          all IP addresses.
         *                          If you want to specify multiple subnet masks, separate the subnet masks with semicolons
         *                          (;). Example: 192.168.0.0/16;10.0.0.0/8.
         *                          A maximum of 25 subnet masks can be set. The total length of the subnet masks can
         *                          be 1 to 512 characters.
         * @return {@code this}
         */
        public Builder loginNetworkMasks(java.lang.String loginNetworkMasks) {
            this.loginNetworkMasks = loginNetworkMasks;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPreferenceProps#getLoginNetworkMasks}
         * @param loginNetworkMasks Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
         *                          This parameter applies to password-based logon and single sign-on (SSO).
         *                          However, this parameter does not apply to API calls that are authenticated based on
         *                          AccessKey pairs.
         *                          If a subnet mask is specified, RAM users can log on to the console only by using the
         *                          IP addresses in the subnet.
         *                          If you do not specify a subnet mask, RAM users can log on to the console by using
         *                          all IP addresses.
         *                          If you want to specify multiple subnet masks, separate the subnet masks with semicolons
         *                          (;). Example: 192.168.0.0/16;10.0.0.0/8.
         *                          A maximum of 25 subnet masks can be set. The total length of the subnet masks can
         *                          be 1 to 512 characters.
         * @return {@code this}
         */
        public Builder loginNetworkMasks(com.aliyun.ros.cdk.core.IResolvable loginNetworkMasks) {
            this.loginNetworkMasks = loginNetworkMasks;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPreferenceProps#getLoginSessionDuration}
         * @param loginSessionDuration Property loginSessionDuration: The validity period of the logon session of the RAM user.
         *                             Valid values: 6 to 24. Default value: 6. Unit: hours.
         * @return {@code this}
         */
        public Builder loginSessionDuration(java.lang.Number loginSessionDuration) {
            this.loginSessionDuration = loginSessionDuration;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPreferenceProps#getLoginSessionDuration}
         * @param loginSessionDuration Property loginSessionDuration: The validity period of the logon session of the RAM user.
         *                             Valid values: 6 to 24. Default value: 6. Unit: hours.
         * @return {@code this}
         */
        public Builder loginSessionDuration(com.aliyun.ros.cdk.core.IResolvable loginSessionDuration) {
            this.loginSessionDuration = loginSessionDuration;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SecurityPreferenceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SecurityPreferenceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SecurityPreferenceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecurityPreferenceProps {
        private final java.lang.Object allowUserToChangePassword;
        private final java.lang.Object allowUserToManageAccessKeys;
        private final java.lang.Object allowUserToManageMfaDevices;
        private final java.lang.Object allowUserToManagePublicKeys;
        private final java.lang.Object enableSaveMfaTicket;
        private final java.lang.Object loginNetworkMasks;
        private final java.lang.Object loginSessionDuration;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.allowUserToChangePassword = software.amazon.jsii.Kernel.get(this, "allowUserToChangePassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allowUserToManageAccessKeys = software.amazon.jsii.Kernel.get(this, "allowUserToManageAccessKeys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allowUserToManageMfaDevices = software.amazon.jsii.Kernel.get(this, "allowUserToManageMfaDevices", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allowUserToManagePublicKeys = software.amazon.jsii.Kernel.get(this, "allowUserToManagePublicKeys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableSaveMfaTicket = software.amazon.jsii.Kernel.get(this, "enableSaveMfaTicket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loginNetworkMasks = software.amazon.jsii.Kernel.get(this, "loginNetworkMasks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loginSessionDuration = software.amazon.jsii.Kernel.get(this, "loginSessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.allowUserToChangePassword = builder.allowUserToChangePassword;
            this.allowUserToManageAccessKeys = builder.allowUserToManageAccessKeys;
            this.allowUserToManageMfaDevices = builder.allowUserToManageMfaDevices;
            this.allowUserToManagePublicKeys = builder.allowUserToManagePublicKeys;
            this.enableSaveMfaTicket = builder.enableSaveMfaTicket;
            this.loginNetworkMasks = builder.loginNetworkMasks;
            this.loginSessionDuration = builder.loginSessionDuration;
        }

        @Override
        public final java.lang.Object getAllowUserToChangePassword() {
            return this.allowUserToChangePassword;
        }

        @Override
        public final java.lang.Object getAllowUserToManageAccessKeys() {
            return this.allowUserToManageAccessKeys;
        }

        @Override
        public final java.lang.Object getAllowUserToManageMfaDevices() {
            return this.allowUserToManageMfaDevices;
        }

        @Override
        public final java.lang.Object getAllowUserToManagePublicKeys() {
            return this.allowUserToManagePublicKeys;
        }

        @Override
        public final java.lang.Object getEnableSaveMfaTicket() {
            return this.enableSaveMfaTicket;
        }

        @Override
        public final java.lang.Object getLoginNetworkMasks() {
            return this.loginNetworkMasks;
        }

        @Override
        public final java.lang.Object getLoginSessionDuration() {
            return this.loginSessionDuration;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAllowUserToChangePassword() != null) {
                data.set("allowUserToChangePassword", om.valueToTree(this.getAllowUserToChangePassword()));
            }
            if (this.getAllowUserToManageAccessKeys() != null) {
                data.set("allowUserToManageAccessKeys", om.valueToTree(this.getAllowUserToManageAccessKeys()));
            }
            if (this.getAllowUserToManageMfaDevices() != null) {
                data.set("allowUserToManageMfaDevices", om.valueToTree(this.getAllowUserToManageMfaDevices()));
            }
            if (this.getAllowUserToManagePublicKeys() != null) {
                data.set("allowUserToManagePublicKeys", om.valueToTree(this.getAllowUserToManagePublicKeys()));
            }
            if (this.getEnableSaveMfaTicket() != null) {
                data.set("enableSaveMfaTicket", om.valueToTree(this.getEnableSaveMfaTicket()));
            }
            if (this.getLoginNetworkMasks() != null) {
                data.set("loginNetworkMasks", om.valueToTree(this.getLoginNetworkMasks()));
            }
            if (this.getLoginSessionDuration() != null) {
                data.set("loginSessionDuration", om.valueToTree(this.getLoginSessionDuration()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.SecurityPreferenceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SecurityPreferenceProps.Jsii$Proxy that = (SecurityPreferenceProps.Jsii$Proxy) o;

            if (this.allowUserToChangePassword != null ? !this.allowUserToChangePassword.equals(that.allowUserToChangePassword) : that.allowUserToChangePassword != null) return false;
            if (this.allowUserToManageAccessKeys != null ? !this.allowUserToManageAccessKeys.equals(that.allowUserToManageAccessKeys) : that.allowUserToManageAccessKeys != null) return false;
            if (this.allowUserToManageMfaDevices != null ? !this.allowUserToManageMfaDevices.equals(that.allowUserToManageMfaDevices) : that.allowUserToManageMfaDevices != null) return false;
            if (this.allowUserToManagePublicKeys != null ? !this.allowUserToManagePublicKeys.equals(that.allowUserToManagePublicKeys) : that.allowUserToManagePublicKeys != null) return false;
            if (this.enableSaveMfaTicket != null ? !this.enableSaveMfaTicket.equals(that.enableSaveMfaTicket) : that.enableSaveMfaTicket != null) return false;
            if (this.loginNetworkMasks != null ? !this.loginNetworkMasks.equals(that.loginNetworkMasks) : that.loginNetworkMasks != null) return false;
            return this.loginSessionDuration != null ? this.loginSessionDuration.equals(that.loginSessionDuration) : that.loginSessionDuration == null;
        }

        @Override
        public final int hashCode() {
            int result = this.allowUserToChangePassword != null ? this.allowUserToChangePassword.hashCode() : 0;
            result = 31 * result + (this.allowUserToManageAccessKeys != null ? this.allowUserToManageAccessKeys.hashCode() : 0);
            result = 31 * result + (this.allowUserToManageMfaDevices != null ? this.allowUserToManageMfaDevices.hashCode() : 0);
            result = 31 * result + (this.allowUserToManagePublicKeys != null ? this.allowUserToManagePublicKeys.hashCode() : 0);
            result = 31 * result + (this.enableSaveMfaTicket != null ? this.enableSaveMfaTicket.hashCode() : 0);
            result = 31 * result + (this.loginNetworkMasks != null ? this.loginNetworkMasks.hashCode() : 0);
            result = 31 * result + (this.loginSessionDuration != null ? this.loginSessionDuration.hashCode() : 0);
            return result;
        }
    }
}
