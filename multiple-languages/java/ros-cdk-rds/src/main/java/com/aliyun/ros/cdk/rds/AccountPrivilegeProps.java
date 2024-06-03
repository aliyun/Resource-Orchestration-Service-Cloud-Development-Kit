package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a <code>AccountPrivilege</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-accountprivilege
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:53.751Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.AccountPrivilegeProps")
@software.amazon.jsii.Jsii.Proxy(AccountPrivilegeProps.Jsii$Proxy.class)
public interface AccountPrivilegeProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accountName: RDS account name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountName();

    /**
     * Property accountPrivilege: RDS account privilege.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountPrivilege();

    /**
     * Property dbInstanceId: RDS instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property dbName: RDS database name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbName();

    /**
     * @return a {@link Builder} of {@link AccountPrivilegeProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccountPrivilegeProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccountPrivilegeProps> {
        java.lang.Object accountName;
        java.lang.Object accountPrivilege;
        java.lang.Object dbInstanceId;
        java.lang.Object dbName;

        /**
         * Sets the value of {@link AccountPrivilegeProps#getAccountName}
         * @param accountName Property accountName: RDS account name. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getAccountName}
         * @param accountName Property accountName: RDS account name. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getAccountPrivilege}
         * @param accountPrivilege Property accountPrivilege: RDS account privilege. This parameter is required.
         * @return {@code this}
         */
        public Builder accountPrivilege(java.lang.String accountPrivilege) {
            this.accountPrivilege = accountPrivilege;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getAccountPrivilege}
         * @param accountPrivilege Property accountPrivilege: RDS account privilege. This parameter is required.
         * @return {@code this}
         */
        public Builder accountPrivilege(com.aliyun.ros.cdk.core.IResolvable accountPrivilege) {
            this.accountPrivilege = accountPrivilege;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: RDS instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: RDS instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getDbName}
         * @param dbName Property dbName: RDS database name. This parameter is required.
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link AccountPrivilegeProps#getDbName}
         * @param dbName Property dbName: RDS database name. This parameter is required.
         * @return {@code this}
         */
        public Builder dbName(com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccountPrivilegeProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccountPrivilegeProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AccountPrivilegeProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccountPrivilegeProps {
        private final java.lang.Object accountName;
        private final java.lang.Object accountPrivilege;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object dbName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPrivilege = software.amazon.jsii.Kernel.get(this, "accountPrivilege", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountName = java.util.Objects.requireNonNull(builder.accountName, "accountName is required");
            this.accountPrivilege = java.util.Objects.requireNonNull(builder.accountPrivilege, "accountPrivilege is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.dbName = java.util.Objects.requireNonNull(builder.dbName, "dbName is required");
        }

        @Override
        public final java.lang.Object getAccountName() {
            return this.accountName;
        }

        @Override
        public final java.lang.Object getAccountPrivilege() {
            return this.accountPrivilege;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getDbName() {
            return this.dbName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accountName", om.valueToTree(this.getAccountName()));
            data.set("accountPrivilege", om.valueToTree(this.getAccountPrivilege()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("dbName", om.valueToTree(this.getDbName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.AccountPrivilegeProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccountPrivilegeProps.Jsii$Proxy that = (AccountPrivilegeProps.Jsii$Proxy) o;

            if (!accountName.equals(that.accountName)) return false;
            if (!accountPrivilege.equals(that.accountPrivilege)) return false;
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            return this.dbName.equals(that.dbName);
        }

        @Override
        public final int hashCode() {
            int result = this.accountName.hashCode();
            result = 31 * result + (this.accountPrivilege.hashCode());
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.dbName.hashCode());
            return result;
        }
    }
}
