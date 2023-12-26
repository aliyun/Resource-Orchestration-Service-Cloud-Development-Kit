package com.aliyun.ros.cdk.rds.datasource;

/**
 * Properties for defining a <code>Accounts</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-accounts
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:17.617Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.datasource.AccountsProps")
@software.amazon.jsii.Jsii.Proxy(AccountsProps.Jsii$Proxy.class)
public interface AccountsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbInstanceId: The ID of the RDS instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property accountName: The name of the RDS account.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AccountsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccountsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccountsProps> {
        java.lang.Object dbInstanceId;
        java.lang.Object accountName;

        /**
         * Sets the value of {@link AccountsProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the RDS instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccountsProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the RDS instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccountsProps#getAccountName}
         * @param accountName Property accountName: The name of the RDS account.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountsProps#getAccountName}
         * @param accountName Property accountName: The name of the RDS account.
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccountsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccountsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AccountsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccountsProps {
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object accountName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.accountName = builder.accountName;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getAccountName() {
            return this.accountName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            if (this.getAccountName() != null) {
                data.set("accountName", om.valueToTree(this.getAccountName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.datasource.AccountsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccountsProps.Jsii$Proxy that = (AccountsProps.Jsii$Proxy) o;

            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            return this.accountName != null ? this.accountName.equals(that.accountName) : that.accountName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceId.hashCode();
            result = 31 * result + (this.accountName != null ? this.accountName.hashCode() : 0);
            return result;
        }
    }
}
