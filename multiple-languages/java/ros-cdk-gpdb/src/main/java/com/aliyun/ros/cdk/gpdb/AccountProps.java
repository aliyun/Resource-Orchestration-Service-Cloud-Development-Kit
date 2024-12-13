package com.aliyun.ros.cdk.gpdb;

/**
 * Properties for defining a <code>Account</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-account
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:08.730Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.AccountProps")
@software.amazon.jsii.Jsii.Proxy(AccountProps.Jsii$Proxy.class)
public interface AccountProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accountName: The name of the privileged account.
     * <p>
     * The name can contain lowercase letters, digits, and underscores (_).
     * The name must start with a lowercase letter and end with a lowercase letter or a digit.
     * The name cannot start with gp.
     * The name must be 2 to 16 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountName();

    /**
     * Property accountPassword: The password of the privileged account.
     * <p>
     * The password must contain at least three of the following character types: uppercase
     * letters, lowercase letters, digits, and special characters.
     * Special characters include ! &#64; # $ % ^ &amp; * ( ) _ + - =
     * The password must be 8 to 32 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountPassword();

    /**
     * Property dbInstanceId: The ID of the instance.
     * <p>
     * Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
     * region, including instance IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property accountDescription: The description of the privileged account.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountDescription() {
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
        java.lang.Object dbInstanceId;
        java.lang.Object accountDescription;

        /**
         * Sets the value of {@link AccountProps#getAccountName}
         * @param accountName Property accountName: The name of the privileged account. This parameter is required.
         *                    The name can contain lowercase letters, digits, and underscores (_).
         *                    The name must start with a lowercase letter and end with a lowercase letter or a digit.
         *                    The name cannot start with gp.
         *                    The name must be 2 to 16 characters in length.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountName}
         * @param accountName Property accountName: The name of the privileged account. This parameter is required.
         *                    The name can contain lowercase letters, digits, and underscores (_).
         *                    The name must start with a lowercase letter and end with a lowercase letter or a digit.
         *                    The name cannot start with gp.
         *                    The name must be 2 to 16 characters in length.
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountPassword}
         * @param accountPassword Property accountPassword: The password of the privileged account. This parameter is required.
         *                        The password must contain at least three of the following character types: uppercase
         *                        letters, lowercase letters, digits, and special characters.
         *                        Special characters include ! &#64; # $ % ^ &amp; * ( ) _ + - =
         *                        The password must be 8 to 32 characters in length.
         * @return {@code this}
         */
        public Builder accountPassword(java.lang.String accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountPassword}
         * @param accountPassword Property accountPassword: The password of the privileged account. This parameter is required.
         *                        The password must contain at least three of the following character types: uppercase
         *                        letters, lowercase letters, digits, and special characters.
         *                        Special characters include ! &#64; # $ % ^ &amp; * ( ) _ + - =
         *                        The password must be 8 to 32 characters in length.
         * @return {@code this}
         */
        public Builder accountPassword(com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         *                     Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
         *                     region, including instance IDs.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         *                     Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
         *                     region, including instance IDs.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountDescription}
         * @param accountDescription Property accountDescription: The description of the privileged account.
         * @return {@code this}
         */
        public Builder accountDescription(java.lang.String accountDescription) {
            this.accountDescription = accountDescription;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getAccountDescription}
         * @param accountDescription Property accountDescription: The description of the privileged account.
         * @return {@code this}
         */
        public Builder accountDescription(com.aliyun.ros.cdk.core.IResolvable accountDescription) {
            this.accountDescription = accountDescription;
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
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object accountDescription;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPassword = software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountDescription = software.amazon.jsii.Kernel.get(this, "accountDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountName = java.util.Objects.requireNonNull(builder.accountName, "accountName is required");
            this.accountPassword = java.util.Objects.requireNonNull(builder.accountPassword, "accountPassword is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.accountDescription = builder.accountDescription;
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
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getAccountDescription() {
            return this.accountDescription;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accountName", om.valueToTree(this.getAccountName()));
            data.set("accountPassword", om.valueToTree(this.getAccountPassword()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            if (this.getAccountDescription() != null) {
                data.set("accountDescription", om.valueToTree(this.getAccountDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gpdb.AccountProps"));
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
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            return this.accountDescription != null ? this.accountDescription.equals(that.accountDescription) : that.accountDescription == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accountName.hashCode();
            result = 31 * result + (this.accountPassword.hashCode());
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.accountDescription != null ? this.accountDescription.hashCode() : 0);
            return result;
        }
    }
}
