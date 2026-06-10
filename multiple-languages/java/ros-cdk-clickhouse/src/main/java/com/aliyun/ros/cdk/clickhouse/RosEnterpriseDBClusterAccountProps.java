package com.aliyun.ros.cdk.clickhouse;

/**
 * Properties for defining a <code>RosEnterpriseDBClusterAccount</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:46:45.076Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterAccountProps")
@software.amazon.jsii.Jsii.Proxy(RosEnterpriseDBClusterAccountProps.Jsii$Proxy.class)
public interface RosEnterpriseDBClusterAccountProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccount();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDmlAuthSetting() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosEnterpriseDBClusterAccountProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosEnterpriseDBClusterAccountProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosEnterpriseDBClusterAccountProps> {
        java.lang.Object account;
        java.lang.Object accountType;
        java.lang.Object dbInstanceId;
        java.lang.Object password;
        java.lang.Object description;
        java.lang.Object dmlAuthSetting;

        /**
         * Sets the value of {@link RosEnterpriseDBClusterAccountProps#getAccount}
         * @param account the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder account(java.lang.String account) {
            this.account = account;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterAccountProps#getAccount}
         * @param account the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder account(com.aliyun.ros.cdk.core.IResolvable account) {
            this.account = account;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterAccountProps#getAccountType}
         * @param accountType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountType(java.lang.String accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterAccountProps#getAccountType}
         * @param accountType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountType(com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterAccountProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterAccountProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterAccountProps#getPassword}
         * @param password the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterAccountProps#getPassword}
         * @param password the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterAccountProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterAccountProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterAccountProps#getDmlAuthSetting}
         * @param dmlAuthSetting the value to be set.
         * @return {@code this}
         */
        public Builder dmlAuthSetting(com.aliyun.ros.cdk.core.IResolvable dmlAuthSetting) {
            this.dmlAuthSetting = dmlAuthSetting;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterAccountProps#getDmlAuthSetting}
         * @param dmlAuthSetting the value to be set.
         * @return {@code this}
         */
        public Builder dmlAuthSetting(com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterAccount.DmlAuthSettingProperty dmlAuthSetting) {
            this.dmlAuthSetting = dmlAuthSetting;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosEnterpriseDBClusterAccountProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosEnterpriseDBClusterAccountProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosEnterpriseDBClusterAccountProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosEnterpriseDBClusterAccountProps {
        private final java.lang.Object account;
        private final java.lang.Object accountType;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object password;
        private final java.lang.Object description;
        private final java.lang.Object dmlAuthSetting;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.account = software.amazon.jsii.Kernel.get(this, "account", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountType = software.amazon.jsii.Kernel.get(this, "accountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dmlAuthSetting = software.amazon.jsii.Kernel.get(this, "dmlAuthSetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.account = java.util.Objects.requireNonNull(builder.account, "account is required");
            this.accountType = java.util.Objects.requireNonNull(builder.accountType, "accountType is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.password = java.util.Objects.requireNonNull(builder.password, "password is required");
            this.description = builder.description;
            this.dmlAuthSetting = builder.dmlAuthSetting;
        }

        @Override
        public final java.lang.Object getAccount() {
            return this.account;
        }

        @Override
        public final java.lang.Object getAccountType() {
            return this.accountType;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDmlAuthSetting() {
            return this.dmlAuthSetting;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("account", om.valueToTree(this.getAccount()));
            data.set("accountType", om.valueToTree(this.getAccountType()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("password", om.valueToTree(this.getPassword()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDmlAuthSetting() != null) {
                data.set("dmlAuthSetting", om.valueToTree(this.getDmlAuthSetting()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterAccountProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosEnterpriseDBClusterAccountProps.Jsii$Proxy that = (RosEnterpriseDBClusterAccountProps.Jsii$Proxy) o;

            if (!account.equals(that.account)) return false;
            if (!accountType.equals(that.accountType)) return false;
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!password.equals(that.password)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.dmlAuthSetting != null ? this.dmlAuthSetting.equals(that.dmlAuthSetting) : that.dmlAuthSetting == null;
        }

        @Override
        public final int hashCode() {
            int result = this.account.hashCode();
            result = 31 * result + (this.accountType.hashCode());
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.password.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.dmlAuthSetting != null ? this.dmlAuthSetting.hashCode() : 0);
            return result;
        }
    }
}
