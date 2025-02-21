package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>RosLoginProfile</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-loginprofile
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:19.373Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosLoginProfileProps")
@software.amazon.jsii.Jsii.Proxy(RosLoginProfileProps.Jsii$Proxy.class)
public interface RosLoginProfileProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserPrincipalName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGenerateRandomPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMfaBindRequired() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPasswordResetRequired() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosLoginProfileProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosLoginProfileProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosLoginProfileProps> {
        java.lang.Object userPrincipalName;
        java.lang.Object generateRandomPassword;
        java.lang.Object mfaBindRequired;
        java.lang.Object password;
        java.lang.Object passwordResetRequired;
        java.lang.Object status;

        /**
         * Sets the value of {@link RosLoginProfileProps#getUserPrincipalName}
         * @param userPrincipalName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder userPrincipalName(java.lang.String userPrincipalName) {
            this.userPrincipalName = userPrincipalName;
            return this;
        }

        /**
         * Sets the value of {@link RosLoginProfileProps#getUserPrincipalName}
         * @param userPrincipalName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder userPrincipalName(com.aliyun.ros.cdk.core.IResolvable userPrincipalName) {
            this.userPrincipalName = userPrincipalName;
            return this;
        }

        /**
         * Sets the value of {@link RosLoginProfileProps#getGenerateRandomPassword}
         * @param generateRandomPassword the value to be set.
         * @return {@code this}
         */
        public Builder generateRandomPassword(java.lang.Boolean generateRandomPassword) {
            this.generateRandomPassword = generateRandomPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosLoginProfileProps#getGenerateRandomPassword}
         * @param generateRandomPassword the value to be set.
         * @return {@code this}
         */
        public Builder generateRandomPassword(com.aliyun.ros.cdk.core.IResolvable generateRandomPassword) {
            this.generateRandomPassword = generateRandomPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosLoginProfileProps#getMfaBindRequired}
         * @param mfaBindRequired the value to be set.
         * @return {@code this}
         */
        public Builder mfaBindRequired(java.lang.Boolean mfaBindRequired) {
            this.mfaBindRequired = mfaBindRequired;
            return this;
        }

        /**
         * Sets the value of {@link RosLoginProfileProps#getMfaBindRequired}
         * @param mfaBindRequired the value to be set.
         * @return {@code this}
         */
        public Builder mfaBindRequired(com.aliyun.ros.cdk.core.IResolvable mfaBindRequired) {
            this.mfaBindRequired = mfaBindRequired;
            return this;
        }

        /**
         * Sets the value of {@link RosLoginProfileProps#getPassword}
         * @param password the value to be set.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosLoginProfileProps#getPassword}
         * @param password the value to be set.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosLoginProfileProps#getPasswordResetRequired}
         * @param passwordResetRequired the value to be set.
         * @return {@code this}
         */
        public Builder passwordResetRequired(java.lang.Boolean passwordResetRequired) {
            this.passwordResetRequired = passwordResetRequired;
            return this;
        }

        /**
         * Sets the value of {@link RosLoginProfileProps#getPasswordResetRequired}
         * @param passwordResetRequired the value to be set.
         * @return {@code this}
         */
        public Builder passwordResetRequired(com.aliyun.ros.cdk.core.IResolvable passwordResetRequired) {
            this.passwordResetRequired = passwordResetRequired;
            return this;
        }

        /**
         * Sets the value of {@link RosLoginProfileProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosLoginProfileProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosLoginProfileProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosLoginProfileProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosLoginProfileProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosLoginProfileProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosLoginProfileProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosLoginProfileProps.Jsii$Proxy that = (RosLoginProfileProps.Jsii$Proxy) o;

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
