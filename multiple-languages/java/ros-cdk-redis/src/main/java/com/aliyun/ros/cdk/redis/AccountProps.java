package com.aliyun.ros.cdk.redis;

/**
 * Properties for defining a <code>Account</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-account
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:54.182Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.AccountProps")
@software.amazon.jsii.Jsii.Proxy(AccountProps.Jsii$Proxy.class)
public interface AccountProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accountName: The name of the account.
     * <p>
     * The name must start with a lowercase letter and can contain
     * lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
     * in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountName();

    /**
     * Property accountPassword: The password of the account.
     * <p>
     * The password can be 8 to 32 characters in length and
     * must contain at least three types of the following characters: uppercase letters,
     * lowercase letters, digits, and special characters. Special characters include ! at signs (&#64;), number signs (#), dollar signs ($), percent signs (%), carets (^),
     * ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+),
     * hyphens (-), and equal signs (=).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountPassword();

    /**
     * Property instanceId: The ID of the instance for which you want to create the account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property accountDescription: The description of the account.
     * <p>
     * The description must start with a letter, and cannot start with http:// or https://.
     * The description can contain letters, underscores (_), hyphens (-), and digits.
     * It can be 2 to 256 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountDescription() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountPrivilege() {
        return null;
    }

    /**
     * Property accountType: The type of the account.
     * <p>
     * Set this parameter to Normal.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountType() {
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
        java.lang.Object accountName;
        java.lang.Object accountPassword;
        java.lang.Object instanceId;
        java.lang.Object accountDescription;
        java.lang.Object accountPrivilege;
        java.lang.Object accountType;

        /**
         * Sets the value of {@link AccountProps#getAccountName}
         * @param accountName Property accountName: The name of the account. This parameter is required.
         *                    The name must start with a lowercase letter and can contain
         *                    lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
         *                    in length.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountName}
         * @param accountName Property accountName: The name of the account. This parameter is required.
         *                    The name must start with a lowercase letter and can contain
         *                    lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
         *                    in length.
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountPassword}
         * @param accountPassword Property accountPassword: The password of the account. This parameter is required.
         *                        The password can be 8 to 32 characters in length and
         *                        must contain at least three types of the following characters: uppercase letters,
         *                        lowercase letters, digits, and special characters. Special characters include ! at signs (&#64;), number signs (#), dollar signs ($), percent signs (%), carets (^),
         *                        ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+),
         *                        hyphens (-), and equal signs (=).
         * @return {@code this}
         */
        public Builder accountPassword(java.lang.String accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountPassword}
         * @param accountPassword Property accountPassword: The password of the account. This parameter is required.
         *                        The password can be 8 to 32 characters in length and
         *                        must contain at least three types of the following characters: uppercase letters,
         *                        lowercase letters, digits, and special characters. Special characters include ! at signs (&#64;), number signs (#), dollar signs ($), percent signs (%), carets (^),
         *                        ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+),
         *                        hyphens (-), and equal signs (=).
         * @return {@code this}
         */
        public Builder accountPassword(com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance for which you want to create the account. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance for which you want to create the account. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountDescription}
         * @param accountDescription Property accountDescription: The description of the account.
         *                           The description must start with a letter, and cannot start with http:// or https://.
         *                           The description can contain letters, underscores (_), hyphens (-), and digits.
         *                           It can be 2 to 256 characters in length.
         * @return {@code this}
         */
        public Builder accountDescription(java.lang.String accountDescription) {
            this.accountDescription = accountDescription;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountDescription}
         * @param accountDescription Property accountDescription: The description of the account.
         *                           The description must start with a letter, and cannot start with http:// or https://.
         *                           The description can contain letters, underscores (_), hyphens (-), and digits.
         *                           It can be 2 to 256 characters in length.
         * @return {@code this}
         */
        public Builder accountDescription(com.aliyun.ros.cdk.core.IResolvable accountDescription) {
            this.accountDescription = accountDescription;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountPrivilege}
         * @param accountPrivilege Property accountPrivilege: The permission of the account.
         *                         Valid values:
         *                         RoleReadOnly
         *                         RoleReadWrite (default value)
         *                         RoleRepl
         *                         Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
         *                         an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
         *                         permission can be granted to an account only in an ApsaraDB for Redis instance of
         *                         the standard edition in Redis 4.0.
         * @return {@code this}
         */
        public Builder accountPrivilege(java.lang.String accountPrivilege) {
            this.accountPrivilege = accountPrivilege;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountPrivilege}
         * @param accountPrivilege Property accountPrivilege: The permission of the account.
         *                         Valid values:
         *                         RoleReadOnly
         *                         RoleReadWrite (default value)
         *                         RoleRepl
         *                         Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
         *                         an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
         *                         permission can be granted to an account only in an ApsaraDB for Redis instance of
         *                         the standard edition in Redis 4.0.
         * @return {@code this}
         */
        public Builder accountPrivilege(com.aliyun.ros.cdk.core.IResolvable accountPrivilege) {
            this.accountPrivilege = accountPrivilege;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountType}
         * @param accountType Property accountType: The type of the account.
         *                    Set this parameter to Normal.
         * @return {@code this}
         */
        public Builder accountType(java.lang.String accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountType}
         * @param accountType Property accountType: The type of the account.
         *                    Set this parameter to Normal.
         * @return {@code this}
         */
        public Builder accountType(com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.accountType = accountType;
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
        private final java.lang.Object accountName;
        private final java.lang.Object accountPassword;
        private final java.lang.Object instanceId;
        private final java.lang.Object accountDescription;
        private final java.lang.Object accountPrivilege;
        private final java.lang.Object accountType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPassword = software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountDescription = software.amazon.jsii.Kernel.get(this, "accountDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPrivilege = software.amazon.jsii.Kernel.get(this, "accountPrivilege", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountType = software.amazon.jsii.Kernel.get(this, "accountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountName = java.util.Objects.requireNonNull(builder.accountName, "accountName is required");
            this.accountPassword = java.util.Objects.requireNonNull(builder.accountPassword, "accountPassword is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.accountDescription = builder.accountDescription;
            this.accountPrivilege = builder.accountPrivilege;
            this.accountType = builder.accountType;
        }

        @Override
        public final java.lang.Object getAccountName() {
            return this.accountName;
        }

        @Override
        public final java.lang.Object getAccountPassword() {
            return this.accountPassword;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getAccountDescription() {
            return this.accountDescription;
        }

        @Override
        public final java.lang.Object getAccountPrivilege() {
            return this.accountPrivilege;
        }

        @Override
        public final java.lang.Object getAccountType() {
            return this.accountType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accountName", om.valueToTree(this.getAccountName()));
            data.set("accountPassword", om.valueToTree(this.getAccountPassword()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            if (this.getAccountDescription() != null) {
                data.set("accountDescription", om.valueToTree(this.getAccountDescription()));
            }
            if (this.getAccountPrivilege() != null) {
                data.set("accountPrivilege", om.valueToTree(this.getAccountPrivilege()));
            }
            if (this.getAccountType() != null) {
                data.set("accountType", om.valueToTree(this.getAccountType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.AccountProps"));
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

            if (!accountName.equals(that.accountName)) return false;
            if (!accountPassword.equals(that.accountPassword)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (this.accountDescription != null ? !this.accountDescription.equals(that.accountDescription) : that.accountDescription != null) return false;
            if (this.accountPrivilege != null ? !this.accountPrivilege.equals(that.accountPrivilege) : that.accountPrivilege != null) return false;
            return this.accountType != null ? this.accountType.equals(that.accountType) : that.accountType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accountName.hashCode();
            result = 31 * result + (this.accountPassword.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.accountDescription != null ? this.accountDescription.hashCode() : 0);
            result = 31 * result + (this.accountPrivilege != null ? this.accountPrivilege.hashCode() : 0);
            result = 31 * result + (this.accountType != null ? this.accountType.hashCode() : 0);
            return result;
        }
    }
}
