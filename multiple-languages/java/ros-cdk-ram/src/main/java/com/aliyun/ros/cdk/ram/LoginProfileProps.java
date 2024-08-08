package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>LoginProfile</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-loginprofile
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:13.227Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.LoginProfileProps")
@software.amazon.jsii.Jsii.Proxy(LoginProfileProps.Jsii$Proxy.class)
public interface LoginProfileProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property userPrincipalName: The login name of the RAM user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserPrincipalName();

    /**
     * Property generateRandomPassword: Whether to generate a random password for the RAM user.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGenerateRandomPassword() {
        return null;
    }

    /**
     * Property mfaBindRequired: Whether to force RAM users to enable multi-factor authentication.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>true: This is required. RAM users must bind the multifactor authentication device the next time they log in.</li>
     * <li>false (default) : This is not required.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMfaBindRequired() {
        return null;
    }

    /**
     * Property password: The password of the RAM user.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return null;
    }

    /**
     * Property passwordResetRequired: Whether RAM users must reset their password the next time they log in.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPasswordResetRequired() {
        return null;
    }

    /**
     * Property status: Enable or disable console password login.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Activate (default): Enable.</li>
     * <li>Inactivate: Disable.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LoginProfileProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LoginProfileProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LoginProfileProps> {
        java.lang.Object userPrincipalName;
        java.lang.Object generateRandomPassword;
        java.lang.Object mfaBindRequired;
        java.lang.Object password;
        java.lang.Object passwordResetRequired;
        java.lang.Object status;

        /**
         * Sets the value of {@link LoginProfileProps#getUserPrincipalName}
         * @param userPrincipalName Property userPrincipalName: The login name of the RAM user. This parameter is required.
         * @return {@code this}
         */
        public Builder userPrincipalName(java.lang.String userPrincipalName) {
            this.userPrincipalName = userPrincipalName;
            return this;
        }

        /**
         * Sets the value of {@link LoginProfileProps#getUserPrincipalName}
         * @param userPrincipalName Property userPrincipalName: The login name of the RAM user. This parameter is required.
         * @return {@code this}
         */
        public Builder userPrincipalName(com.aliyun.ros.cdk.core.IResolvable userPrincipalName) {
            this.userPrincipalName = userPrincipalName;
            return this;
        }

        /**
         * Sets the value of {@link LoginProfileProps#getGenerateRandomPassword}
         * @param generateRandomPassword Property generateRandomPassword: Whether to generate a random password for the RAM user.
         * @return {@code this}
         */
        public Builder generateRandomPassword(java.lang.Boolean generateRandomPassword) {
            this.generateRandomPassword = generateRandomPassword;
            return this;
        }

        /**
         * Sets the value of {@link LoginProfileProps#getGenerateRandomPassword}
         * @param generateRandomPassword Property generateRandomPassword: Whether to generate a random password for the RAM user.
         * @return {@code this}
         */
        public Builder generateRandomPassword(com.aliyun.ros.cdk.core.IResolvable generateRandomPassword) {
            this.generateRandomPassword = generateRandomPassword;
            return this;
        }

        /**
         * Sets the value of {@link LoginProfileProps#getMfaBindRequired}
         * @param mfaBindRequired Property mfaBindRequired: Whether to force RAM users to enable multi-factor authentication.
         *                        Valid values:
         *                        <p>
         *                        <ul>
         *                        <li>true: This is required. RAM users must bind the multifactor authentication device the next time they log in.</li>
         *                        <li>false (default) : This is not required.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder mfaBindRequired(java.lang.Boolean mfaBindRequired) {
            this.mfaBindRequired = mfaBindRequired;
            return this;
        }

        /**
         * Sets the value of {@link LoginProfileProps#getMfaBindRequired}
         * @param mfaBindRequired Property mfaBindRequired: Whether to force RAM users to enable multi-factor authentication.
         *                        Valid values:
         *                        <p>
         *                        <ul>
         *                        <li>true: This is required. RAM users must bind the multifactor authentication device the next time they log in.</li>
         *                        <li>false (default) : This is not required.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder mfaBindRequired(com.aliyun.ros.cdk.core.IResolvable mfaBindRequired) {
            this.mfaBindRequired = mfaBindRequired;
            return this;
        }

        /**
         * Sets the value of {@link LoginProfileProps#getPassword}
         * @param password Property password: The password of the RAM user.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link LoginProfileProps#getPassword}
         * @param password Property password: The password of the RAM user.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link LoginProfileProps#getPasswordResetRequired}
         * @param passwordResetRequired Property passwordResetRequired: Whether RAM users must reset their password the next time they log in.
         * @return {@code this}
         */
        public Builder passwordResetRequired(java.lang.Boolean passwordResetRequired) {
            this.passwordResetRequired = passwordResetRequired;
            return this;
        }

        /**
         * Sets the value of {@link LoginProfileProps#getPasswordResetRequired}
         * @param passwordResetRequired Property passwordResetRequired: Whether RAM users must reset their password the next time they log in.
         * @return {@code this}
         */
        public Builder passwordResetRequired(com.aliyun.ros.cdk.core.IResolvable passwordResetRequired) {
            this.passwordResetRequired = passwordResetRequired;
            return this;
        }

        /**
         * Sets the value of {@link LoginProfileProps#getStatus}
         * @param status Property status: Enable or disable console password login.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li>Activate (default): Enable.</li>
         *               <li>Inactivate: Disable.</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link LoginProfileProps#getStatus}
         * @param status Property status: Enable or disable console password login.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li>Activate (default): Enable.</li>
         *               <li>Inactivate: Disable.</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LoginProfileProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LoginProfileProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link LoginProfileProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LoginProfileProps {
        private final java.lang.Object userPrincipalName;
        private final java.lang.Object generateRandomPassword;
        private final java.lang.Object mfaBindRequired;
        private final java.lang.Object password;
        private final java.lang.Object passwordResetRequired;
        private final java.lang.Object status;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.userPrincipalName = software.amazon.jsii.Kernel.get(this, "userPrincipalName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.generateRandomPassword = software.amazon.jsii.Kernel.get(this, "generateRandomPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mfaBindRequired = software.amazon.jsii.Kernel.get(this, "mfaBindRequired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.passwordResetRequired = software.amazon.jsii.Kernel.get(this, "passwordResetRequired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.userPrincipalName = java.util.Objects.requireNonNull(builder.userPrincipalName, "userPrincipalName is required");
            this.generateRandomPassword = builder.generateRandomPassword;
            this.mfaBindRequired = builder.mfaBindRequired;
            this.password = builder.password;
            this.passwordResetRequired = builder.passwordResetRequired;
            this.status = builder.status;
        }

        @Override
        public final java.lang.Object getUserPrincipalName() {
            return this.userPrincipalName;
        }

        @Override
        public final java.lang.Object getGenerateRandomPassword() {
            return this.generateRandomPassword;
        }

        @Override
        public final java.lang.Object getMfaBindRequired() {
            return this.mfaBindRequired;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getPasswordResetRequired() {
            return this.passwordResetRequired;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("userPrincipalName", om.valueToTree(this.getUserPrincipalName()));
            if (this.getGenerateRandomPassword() != null) {
                data.set("generateRandomPassword", om.valueToTree(this.getGenerateRandomPassword()));
            }
            if (this.getMfaBindRequired() != null) {
                data.set("mfaBindRequired", om.valueToTree(this.getMfaBindRequired()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPasswordResetRequired() != null) {
                data.set("passwordResetRequired", om.valueToTree(this.getPasswordResetRequired()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.LoginProfileProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LoginProfileProps.Jsii$Proxy that = (LoginProfileProps.Jsii$Proxy) o;

            if (!userPrincipalName.equals(that.userPrincipalName)) return false;
            if (this.generateRandomPassword != null ? !this.generateRandomPassword.equals(that.generateRandomPassword) : that.generateRandomPassword != null) return false;
            if (this.mfaBindRequired != null ? !this.mfaBindRequired.equals(that.mfaBindRequired) : that.mfaBindRequired != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.passwordResetRequired != null ? !this.passwordResetRequired.equals(that.passwordResetRequired) : that.passwordResetRequired != null) return false;
            return this.status != null ? this.status.equals(that.status) : that.status == null;
        }

        @Override
        public final int hashCode() {
            int result = this.userPrincipalName.hashCode();
            result = 31 * result + (this.generateRandomPassword != null ? this.generateRandomPassword.hashCode() : 0);
            result = 31 * result + (this.mfaBindRequired != null ? this.mfaBindRequired.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.passwordResetRequired != null ? this.passwordResetRequired.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            return result;
        }
    }
}
