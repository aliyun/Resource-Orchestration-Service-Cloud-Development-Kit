package com.aliyun.ros.cdk.adb;

/**
 * Properties for defining a `ALIYUN::ADB::Account`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:27.342Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adb.$Module.class, fqn = "@alicloud/ros-cdk-adb.AccountProps")
@software.amazon.jsii.Jsii.Proxy(AccountProps.Jsii$Proxy.class)
public interface AccountProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accountName: The name of the account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountName();

    /**
     * Property accountPassword: The password of the account.
     * <p>
     * The password must contain uppercase letters, lowercase letters, digits, and special
     * characters.
     * Special characters include ! &#64; # $ % ^ &amp; * ()  _ + - and =
     * The password must be 8 to 32 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountPassword();

    /**
     * Property dbClusterId: The ID of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     * Property accountDescription: The description of the account.
     * <p>
     * The description cannot start with http://or https://.
     * The description can be up to 256 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountDescription() {
        return null;
    }

    /**
     * Property accountType: Normal: standard account Super: privileged account.
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
        java.lang.Object dbClusterId;
        java.lang.Object accountDescription;
        java.lang.Object accountType;

        /**
         * Sets the value of {@link AccountProps#getAccountName}
         * @param accountName Property accountName: The name of the account. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountName}
         * @param accountName Property accountName: The name of the account. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountPassword}
         * @param accountPassword Property accountPassword: The password of the account. This parameter is required.
         *                        The password must contain uppercase letters, lowercase letters, digits, and special
         *                        characters.
         *                        Special characters include ! &#64; # $ % ^ &amp; * ()  _ + - and =
         *                        The password must be 8 to 32 characters in length.
         * @return {@code this}
         */
        public Builder accountPassword(java.lang.String accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountPassword}
         * @param accountPassword Property accountPassword: The password of the account. This parameter is required.
         *                        The password must contain uppercase letters, lowercase letters, digits, and special
         *                        characters.
         *                        Special characters include ! &#64; # $ % ^ &amp; * ()  _ + - and =
         *                        The password must be 8 to 32 characters in length.
         * @return {@code this}
         */
        public Builder accountPassword(com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountDescription}
         * @param accountDescription Property accountDescription: The description of the account.
         *                           The description cannot start with http://or https://.
         *                           The description can be up to 256 characters in length.
         * @return {@code this}
         */
        public Builder accountDescription(java.lang.String accountDescription) {
            this.accountDescription = accountDescription;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountDescription}
         * @param accountDescription Property accountDescription: The description of the account.
         *                           The description cannot start with http://or https://.
         *                           The description can be up to 256 characters in length.
         * @return {@code this}
         */
        public Builder accountDescription(com.aliyun.ros.cdk.core.IResolvable accountDescription) {
            this.accountDescription = accountDescription;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountType}
         * @param accountType Property accountType: Normal: standard account Super: privileged account.
         * @return {@code this}
         */
        public Builder accountType(java.lang.String accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountType}
         * @param accountType Property accountType: Normal: standard account Super: privileged account.
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
        private final java.lang.Object dbClusterId;
        private final java.lang.Object accountDescription;
        private final java.lang.Object accountType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPassword = software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountDescription = software.amazon.jsii.Kernel.get(this, "accountDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountType = software.amazon.jsii.Kernel.get(this, "accountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountName = java.util.Objects.requireNonNull(builder.accountName, "accountName is required");
            this.accountPassword = java.util.Objects.requireNonNull(builder.accountPassword, "accountPassword is required");
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.accountDescription = builder.accountDescription;
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
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getAccountDescription() {
            return this.accountDescription;
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
            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            if (this.getAccountDescription() != null) {
                data.set("accountDescription", om.valueToTree(this.getAccountDescription()));
            }
            if (this.getAccountType() != null) {
                data.set("accountType", om.valueToTree(this.getAccountType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-adb.AccountProps"));
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
            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (this.accountDescription != null ? !this.accountDescription.equals(that.accountDescription) : that.accountDescription != null) return false;
            return this.accountType != null ? this.accountType.equals(that.accountType) : that.accountType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accountName.hashCode();
            result = 31 * result + (this.accountPassword.hashCode());
            result = 31 * result + (this.dbClusterId.hashCode());
            result = 31 * result + (this.accountDescription != null ? this.accountDescription.hashCode() : 0);
            result = 31 * result + (this.accountType != null ? this.accountType.hashCode() : 0);
            return result;
        }
    }
}
