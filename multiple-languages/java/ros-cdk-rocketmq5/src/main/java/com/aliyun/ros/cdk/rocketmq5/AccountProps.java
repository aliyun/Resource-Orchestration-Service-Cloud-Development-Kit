package com.aliyun.ros.cdk.rocketmq5;

/**
 * Properties for defining a <code>Account</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-account
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:53.684Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.AccountProps")
@software.amazon.jsii.Jsii.Proxy(AccountProps.Jsii$Proxy.class)
public interface AccountProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The unifed ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property password: Account password Length Limit: 3~64 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

    /**
     * Property username: Account Name Length Limit: 3~64 characters Character limit: Supports letters a ~ z or A ~ Z, numbers 0~9, underscore (_) and dash (-).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUsername();

    /**
     * Property accountStatus: Account Status DISABLE: DISABLE.
     * <p>
     * ENABLE: Enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountStatus() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AccountProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccountProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccountProps> {
        java.lang.Object instanceId;
        java.lang.Object password;
        java.lang.Object username;
        java.lang.Object accountStatus;

        /**
         * Sets the value of {@link AccountProps#getInstanceId}
         * @param instanceId Property instanceId: The unifed ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getInstanceId}
         * @param instanceId Property instanceId: The unifed ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getPassword}
         * @param password Property password: Account password Length Limit: 3~64 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getPassword}
         * @param password Property password: Account password Length Limit: 3~64 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getUsername}
         * @param username Property username: Account Name Length Limit: 3~64 characters Character limit: Supports letters a ~ z or A ~ Z, numbers 0~9, underscore (_) and dash (-). This parameter is required.
         * @return {@code this}
         */
        public Builder username(java.lang.String username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getUsername}
         * @param username Property username: Account Name Length Limit: 3~64 characters Character limit: Supports letters a ~ z or A ~ Z, numbers 0~9, underscore (_) and dash (-). This parameter is required.
         * @return {@code this}
         */
        public Builder username(com.aliyun.ros.cdk.core.IResolvable username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountStatus}
         * @param accountStatus Property accountStatus: Account Status DISABLE: DISABLE.
         *                      ENABLE: Enabled.
         * @return {@code this}
         */
        public Builder accountStatus(java.lang.String accountStatus) {
            this.accountStatus = accountStatus;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountStatus}
         * @param accountStatus Property accountStatus: Account Status DISABLE: DISABLE.
         *                      ENABLE: Enabled.
         * @return {@code this}
         */
        public Builder accountStatus(com.aliyun.ros.cdk.core.IResolvable accountStatus) {
            this.accountStatus = accountStatus;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccountProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccountProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AccountProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccountProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object password;
        private final java.lang.Object username;
        private final java.lang.Object accountStatus;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.username = software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountStatus = software.amazon.jsii.Kernel.get(this, "accountStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.password = java.util.Objects.requireNonNull(builder.password, "password is required");
            this.username = java.util.Objects.requireNonNull(builder.username, "username is required");
            this.accountStatus = builder.accountStatus;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getUsername() {
            return this.username;
        }

        @Override
        public final java.lang.Object getAccountStatus() {
            return this.accountStatus;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("password", om.valueToTree(this.getPassword()));
            data.set("username", om.valueToTree(this.getUsername()));
            if (this.getAccountStatus() != null) {
                data.set("accountStatus", om.valueToTree(this.getAccountStatus()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rocketmq5.AccountProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccountProps.Jsii$Proxy that = (AccountProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!password.equals(that.password)) return false;
            if (!username.equals(that.username)) return false;
            return this.accountStatus != null ? this.accountStatus.equals(that.accountStatus) : that.accountStatus == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.password.hashCode());
            result = 31 * result + (this.username.hashCode());
            result = 31 * result + (this.accountStatus != null ? this.accountStatus.hashCode() : 0);
            return result;
        }
    }
}
