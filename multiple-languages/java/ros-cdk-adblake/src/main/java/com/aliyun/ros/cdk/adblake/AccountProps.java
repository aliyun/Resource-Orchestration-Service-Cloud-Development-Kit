package com.aliyun.ros.cdk.adblake;

/**
 * Properties for defining a <code>Account</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-account
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:00.962Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adblake.$Module.class, fqn = "@alicloud/ros-cdk-adblake.AccountProps")
@software.amazon.jsii.Jsii.Proxy(AccountProps.Jsii$Proxy.class)
public interface AccountProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accountName: The name of the account.The database account name must meet the following requirements:Start with a lowercase letter and end with a lowercase letter or number.Consists of lowercase letters, numbers, or underscores (_).The length is 2 to 16 characters.Reserved user names such as root, admin, and opsadmin cannot be used.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountName();

    /**
     * Property accountPassword: The password of the account.The password must meet the following requirements:Database account password.It consists of any three of uppercase letters, lowercase letters, numbers, and special characters.Special symbols include: !&#64;#$%^&amp;*()_+-=The password length is 8 to 32 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountPassword();

    /**
     * Property accountType: The type of the account.Valid values: Normal: normal account. Super: super account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountType();

    /**
     * Property dbClusterId: The ID of the ADB Lake cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     * Property engine: The engine of the account.Valid values: AnalyticDB / Clickhouse.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngine();

    /**
     * Property accountDescription: The description of the account.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountDescription() {
        return null;
    }

    /**
     * Property ramUser: Bind the RAM user to the cluster database common account.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRamUser() {
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
        java.lang.Object accountType;
        java.lang.Object dbClusterId;
        java.lang.Object engine;
        java.lang.Object accountDescription;
        java.lang.Object ramUser;

        /**
         * Sets the value of {@link AccountProps#getAccountName}
         * @param accountName Property accountName: The name of the account.The database account name must meet the following requirements:Start with a lowercase letter and end with a lowercase letter or number.Consists of lowercase letters, numbers, or underscores (_).The length is 2 to 16 characters.Reserved user names such as root, admin, and opsadmin cannot be used. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountName}
         * @param accountName Property accountName: The name of the account.The database account name must meet the following requirements:Start with a lowercase letter and end with a lowercase letter or number.Consists of lowercase letters, numbers, or underscores (_).The length is 2 to 16 characters.Reserved user names such as root, admin, and opsadmin cannot be used. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountPassword}
         * @param accountPassword Property accountPassword: The password of the account.The password must meet the following requirements:Database account password.It consists of any three of uppercase letters, lowercase letters, numbers, and special characters.Special symbols include: !&#64;#$%^&amp;*()_+-=The password length is 8 to 32 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder accountPassword(java.lang.String accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountPassword}
         * @param accountPassword Property accountPassword: The password of the account.The password must meet the following requirements:Database account password.It consists of any three of uppercase letters, lowercase letters, numbers, and special characters.Special symbols include: !&#64;#$%^&amp;*()_+-=The password length is 8 to 32 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder accountPassword(com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountType}
         * @param accountType Property accountType: The type of the account.Valid values: Normal: normal account. Super: super account. This parameter is required.
         * @return {@code this}
         */
        public Builder accountType(java.lang.String accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountType}
         * @param accountType Property accountType: The type of the account.Valid values: Normal: normal account. Super: super account. This parameter is required.
         * @return {@code this}
         */
        public Builder accountType(com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the ADB Lake cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the ADB Lake cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getEngine}
         * @param engine Property engine: The engine of the account.Valid values: AnalyticDB / Clickhouse. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getEngine}
         * @param engine Property engine: The engine of the account.Valid values: AnalyticDB / Clickhouse. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountDescription}
         * @param accountDescription Property accountDescription: The description of the account.
         * @return {@code this}
         */
        public Builder accountDescription(java.lang.String accountDescription) {
            this.accountDescription = accountDescription;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountDescription}
         * @param accountDescription Property accountDescription: The description of the account.
         * @return {@code this}
         */
        public Builder accountDescription(com.aliyun.ros.cdk.core.IResolvable accountDescription) {
            this.accountDescription = accountDescription;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getRamUser}
         * @param ramUser Property ramUser: Bind the RAM user to the cluster database common account.
         * @return {@code this}
         */
        public Builder ramUser(java.lang.String ramUser) {
            this.ramUser = ramUser;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getRamUser}
         * @param ramUser Property ramUser: Bind the RAM user to the cluster database common account.
         * @return {@code this}
         */
        public Builder ramUser(com.aliyun.ros.cdk.core.IResolvable ramUser) {
            this.ramUser = ramUser;
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
        private final java.lang.Object accountType;
        private final java.lang.Object dbClusterId;
        private final java.lang.Object engine;
        private final java.lang.Object accountDescription;
        private final java.lang.Object ramUser;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPassword = software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountType = software.amazon.jsii.Kernel.get(this, "accountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountDescription = software.amazon.jsii.Kernel.get(this, "accountDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramUser = software.amazon.jsii.Kernel.get(this, "ramUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountName = java.util.Objects.requireNonNull(builder.accountName, "accountName is required");
            this.accountPassword = java.util.Objects.requireNonNull(builder.accountPassword, "accountPassword is required");
            this.accountType = java.util.Objects.requireNonNull(builder.accountType, "accountType is required");
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.engine = java.util.Objects.requireNonNull(builder.engine, "engine is required");
            this.accountDescription = builder.accountDescription;
            this.ramUser = builder.ramUser;
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
        public final java.lang.Object getAccountType() {
            return this.accountType;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getEngine() {
            return this.engine;
        }

        @Override
        public final java.lang.Object getAccountDescription() {
            return this.accountDescription;
        }

        @Override
        public final java.lang.Object getRamUser() {
            return this.ramUser;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accountName", om.valueToTree(this.getAccountName()));
            data.set("accountPassword", om.valueToTree(this.getAccountPassword()));
            data.set("accountType", om.valueToTree(this.getAccountType()));
            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            data.set("engine", om.valueToTree(this.getEngine()));
            if (this.getAccountDescription() != null) {
                data.set("accountDescription", om.valueToTree(this.getAccountDescription()));
            }
            if (this.getRamUser() != null) {
                data.set("ramUser", om.valueToTree(this.getRamUser()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-adblake.AccountProps"));
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
            if (!accountType.equals(that.accountType)) return false;
            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (!engine.equals(that.engine)) return false;
            if (this.accountDescription != null ? !this.accountDescription.equals(that.accountDescription) : that.accountDescription != null) return false;
            return this.ramUser != null ? this.ramUser.equals(that.ramUser) : that.ramUser == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accountName.hashCode();
            result = 31 * result + (this.accountPassword.hashCode());
            result = 31 * result + (this.accountType.hashCode());
            result = 31 * result + (this.dbClusterId.hashCode());
            result = 31 * result + (this.engine.hashCode());
            result = 31 * result + (this.accountDescription != null ? this.accountDescription.hashCode() : 0);
            result = 31 * result + (this.ramUser != null ? this.ramUser.hashCode() : 0);
            return result;
        }
    }
}
