package com.aliyun.ros.cdk.polardbx.datasource;

/**
 * Properties for defining a <code>Accounts</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-accounts
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:09.133Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardbx.$Module.class, fqn = "@alicloud/ros-cdk-polardbx.datasource.AccountsProps")
@software.amazon.jsii.Jsii.Proxy(AccountsProps.Jsii$Proxy.class)
public interface AccountsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property accountType: The type of the account.
     * <p>
     * 0 represents an ordinary account, and 1 represents a high-privilege account.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountType() {
        return null;
    }

    /**
     * Property polarDbxAccountName: The username of the account that you want to query.
     * <p>
     * If you want to query information about a specific account, you must specify this parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolarDbxAccountName() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
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
        java.lang.Object accountType;
        java.lang.Object polarDbxAccountName;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link AccountsProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the PolarDB-X 2.0 instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccountsProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the PolarDB-X 2.0 instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccountsProps#getAccountType}
         * @param accountType Property accountType: The type of the account.
         *                    0 represents an ordinary account, and 1 represents a high-privilege account.
         * @return {@code this}
         */
        public Builder accountType(java.lang.Number accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link AccountsProps#getAccountType}
         * @param accountType Property accountType: The type of the account.
         *                    0 represents an ordinary account, and 1 represents a high-privilege account.
         * @return {@code this}
         */
        public Builder accountType(com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link AccountsProps#getPolarDbxAccountName}
         * @param polarDbxAccountName Property polarDbxAccountName: The username of the account that you want to query.
         *                            If you want to query information about a specific account, you must specify this parameter.
         * @return {@code this}
         */
        public Builder polarDbxAccountName(java.lang.String polarDbxAccountName) {
            this.polarDbxAccountName = polarDbxAccountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountsProps#getPolarDbxAccountName}
         * @param polarDbxAccountName Property polarDbxAccountName: The username of the account that you want to query.
         *                            If you want to query information about a specific account, you must specify this parameter.
         * @return {@code this}
         */
        public Builder polarDbxAccountName(com.aliyun.ros.cdk.core.IResolvable polarDbxAccountName) {
            this.polarDbxAccountName = polarDbxAccountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link AccountsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
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
        private final java.lang.Object accountType;
        private final java.lang.Object polarDbxAccountName;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountType = software.amazon.jsii.Kernel.get(this, "accountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.polarDbxAccountName = software.amazon.jsii.Kernel.get(this, "polarDbxAccountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.accountType = builder.accountType;
            this.polarDbxAccountName = builder.polarDbxAccountName;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getAccountType() {
            return this.accountType;
        }

        @Override
        public final java.lang.Object getPolarDbxAccountName() {
            return this.polarDbxAccountName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            if (this.getAccountType() != null) {
                data.set("accountType", om.valueToTree(this.getAccountType()));
            }
            if (this.getPolarDbxAccountName() != null) {
                data.set("polarDbxAccountName", om.valueToTree(this.getPolarDbxAccountName()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardbx.datasource.AccountsProps"));
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
            if (this.accountType != null ? !this.accountType.equals(that.accountType) : that.accountType != null) return false;
            if (this.polarDbxAccountName != null ? !this.polarDbxAccountName.equals(that.polarDbxAccountName) : that.polarDbxAccountName != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceId.hashCode();
            result = 31 * result + (this.accountType != null ? this.accountType.hashCode() : 0);
            result = 31 * result + (this.polarDbxAccountName != null ? this.polarDbxAccountName.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
