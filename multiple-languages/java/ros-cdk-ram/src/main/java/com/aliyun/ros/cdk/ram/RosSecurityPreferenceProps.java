package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a `ALIYUN::RAM::SecurityPreference`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:16.145Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosSecurityPreferenceProps")
@software.amazon.jsii.Jsii.Proxy(RosSecurityPreferenceProps.Jsii$Proxy.class)
public interface RosSecurityPreferenceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllowUserToChangePassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllowUserToManageAccessKeys() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllowUserToManageMfaDevices() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllowUserToManagePublicKeys() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSaveMfaTicket() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoginNetworkMasks() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoginSessionDuration() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSecurityPreferenceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSecurityPreferenceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSecurityPreferenceProps> {
        java.lang.Object allowUserToChangePassword;
        java.lang.Object allowUserToManageAccessKeys;
        java.lang.Object allowUserToManageMfaDevices;
        java.lang.Object allowUserToManagePublicKeys;
        java.lang.Object enableSaveMfaTicket;
        java.lang.Object loginNetworkMasks;
        java.lang.Object loginSessionDuration;

        /**
         * Sets the value of {@link RosSecurityPreferenceProps#getAllowUserToChangePassword}
         * @param allowUserToChangePassword the value to be set.
         * @return {@code this}
         */
        public Builder allowUserToChangePassword(java.lang.Boolean allowUserToChangePassword) {
            this.allowUserToChangePassword = allowUserToChangePassword;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPreferenceProps#getAllowUserToChangePassword}
         * @param allowUserToChangePassword the value to be set.
         * @return {@code this}
         */
        public Builder allowUserToChangePassword(com.aliyun.ros.cdk.core.IResolvable allowUserToChangePassword) {
            this.allowUserToChangePassword = allowUserToChangePassword;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPreferenceProps#getAllowUserToManageAccessKeys}
         * @param allowUserToManageAccessKeys the value to be set.
         * @return {@code this}
         */
        public Builder allowUserToManageAccessKeys(java.lang.Boolean allowUserToManageAccessKeys) {
            this.allowUserToManageAccessKeys = allowUserToManageAccessKeys;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPreferenceProps#getAllowUserToManageAccessKeys}
         * @param allowUserToManageAccessKeys the value to be set.
         * @return {@code this}
         */
        public Builder allowUserToManageAccessKeys(com.aliyun.ros.cdk.core.IResolvable allowUserToManageAccessKeys) {
            this.allowUserToManageAccessKeys = allowUserToManageAccessKeys;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPreferenceProps#getAllowUserToManageMfaDevices}
         * @param allowUserToManageMfaDevices the value to be set.
         * @return {@code this}
         */
        public Builder allowUserToManageMfaDevices(java.lang.Boolean allowUserToManageMfaDevices) {
            this.allowUserToManageMfaDevices = allowUserToManageMfaDevices;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPreferenceProps#getAllowUserToManageMfaDevices}
         * @param allowUserToManageMfaDevices the value to be set.
         * @return {@code this}
         */
        public Builder allowUserToManageMfaDevices(com.aliyun.ros.cdk.core.IResolvable allowUserToManageMfaDevices) {
            this.allowUserToManageMfaDevices = allowUserToManageMfaDevices;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPreferenceProps#getAllowUserToManagePublicKeys}
         * @param allowUserToManagePublicKeys the value to be set.
         * @return {@code this}
         */
        public Builder allowUserToManagePublicKeys(java.lang.Boolean allowUserToManagePublicKeys) {
            this.allowUserToManagePublicKeys = allowUserToManagePublicKeys;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPreferenceProps#getAllowUserToManagePublicKeys}
         * @param allowUserToManagePublicKeys the value to be set.
         * @return {@code this}
         */
        public Builder allowUserToManagePublicKeys(com.aliyun.ros.cdk.core.IResolvable allowUserToManagePublicKeys) {
            this.allowUserToManagePublicKeys = allowUserToManagePublicKeys;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPreferenceProps#getEnableSaveMfaTicket}
         * @param enableSaveMfaTicket the value to be set.
         * @return {@code this}
         */
        public Builder enableSaveMfaTicket(java.lang.Boolean enableSaveMfaTicket) {
            this.enableSaveMfaTicket = enableSaveMfaTicket;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPreferenceProps#getEnableSaveMfaTicket}
         * @param enableSaveMfaTicket the value to be set.
         * @return {@code this}
         */
        public Builder enableSaveMfaTicket(com.aliyun.ros.cdk.core.IResolvable enableSaveMfaTicket) {
            this.enableSaveMfaTicket = enableSaveMfaTicket;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPreferenceProps#getLoginNetworkMasks}
         * @param loginNetworkMasks the value to be set.
         * @return {@code this}
         */
        public Builder loginNetworkMasks(java.lang.String loginNetworkMasks) {
            this.loginNetworkMasks = loginNetworkMasks;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPreferenceProps#getLoginNetworkMasks}
         * @param loginNetworkMasks the value to be set.
         * @return {@code this}
         */
        public Builder loginNetworkMasks(com.aliyun.ros.cdk.core.IResolvable loginNetworkMasks) {
            this.loginNetworkMasks = loginNetworkMasks;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPreferenceProps#getLoginSessionDuration}
         * @param loginSessionDuration the value to be set.
         * @return {@code this}
         */
        public Builder loginSessionDuration(java.lang.Number loginSessionDuration) {
            this.loginSessionDuration = loginSessionDuration;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPreferenceProps#getLoginSessionDuration}
         * @param loginSessionDuration the value to be set.
         * @return {@code this}
         */
        public Builder loginSessionDuration(com.aliyun.ros.cdk.core.IResolvable loginSessionDuration) {
            this.loginSessionDuration = loginSessionDuration;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSecurityPreferenceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSecurityPreferenceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSecurityPreferenceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSecurityPreferenceProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosSecurityPreferenceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSecurityPreferenceProps.Jsii$Proxy that = (RosSecurityPreferenceProps.Jsii$Proxy) o;

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
