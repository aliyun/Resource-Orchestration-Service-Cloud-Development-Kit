package com.aliyun.ros.cdk.drds;

/**
 * Properties for defining a <code>Account</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-account
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:04.000Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.AccountProps")
@software.amazon.jsii.Jsii.Proxy(AccountProps.Jsii$Proxy.class)
public interface AccountProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbPrivileges: Database permission information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbPrivileges();

    /**
     * Property drdsAccountName: The name of the account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDrdsAccountName();

    /**
     * Property instanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property password: The password of the account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

    /**
     * Property description: Account remarks.
     * <p>
     * The default value of the advanced account is <strong>Created by DRDS</strong>, and the normal account does not have any comments. Remarks can be customized in account management.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
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
        java.lang.Object dbPrivileges;
        java.lang.Object drdsAccountName;
        java.lang.Object instanceId;
        java.lang.Object password;
        java.lang.Object description;

        /**
         * Sets the value of {@link AccountProps#getDbPrivileges}
         * @param dbPrivileges Property dbPrivileges: Database permission information. This parameter is required.
         * @return {@code this}
         */
        public Builder dbPrivileges(com.aliyun.ros.cdk.core.IResolvable dbPrivileges) {
            this.dbPrivileges = dbPrivileges;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDbPrivileges}
         * @param dbPrivileges Property dbPrivileges: Database permission information. This parameter is required.
         * @return {@code this}
         */
        public Builder dbPrivileges(java.util.List<? extends java.lang.Object> dbPrivileges) {
            this.dbPrivileges = dbPrivileges;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDrdsAccountName}
         * @param drdsAccountName Property drdsAccountName: The name of the account. This parameter is required.
         * @return {@code this}
         */
        public Builder drdsAccountName(java.lang.String drdsAccountName) {
            this.drdsAccountName = drdsAccountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDrdsAccountName}
         * @param drdsAccountName Property drdsAccountName: The name of the account. This parameter is required.
         * @return {@code this}
         */
        public Builder drdsAccountName(com.aliyun.ros.cdk.core.IResolvable drdsAccountName) {
            this.drdsAccountName = drdsAccountName;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getPassword}
         * @param password Property password: The password of the account. This parameter is required.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getPassword}
         * @param password Property password: The password of the account. This parameter is required.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDescription}
         * @param description Property description: Account remarks.
         *                    The default value of the advanced account is <strong>Created by DRDS</strong>, and the normal account does not have any comments. Remarks can be customized in account management.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDescription}
         * @param description Property description: Account remarks.
         *                    The default value of the advanced account is <strong>Created by DRDS</strong>, and the normal account does not have any comments. Remarks can be customized in account management.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
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
        private final java.lang.Object dbPrivileges;
        private final java.lang.Object drdsAccountName;
        private final java.lang.Object instanceId;
        private final java.lang.Object password;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbPrivileges = software.amazon.jsii.Kernel.get(this, "dbPrivileges", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.drdsAccountName = software.amazon.jsii.Kernel.get(this, "drdsAccountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbPrivileges = java.util.Objects.requireNonNull(builder.dbPrivileges, "dbPrivileges is required");
            this.drdsAccountName = java.util.Objects.requireNonNull(builder.drdsAccountName, "drdsAccountName is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.password = java.util.Objects.requireNonNull(builder.password, "password is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getDbPrivileges() {
            return this.dbPrivileges;
        }

        @Override
        public final java.lang.Object getDrdsAccountName() {
            return this.drdsAccountName;
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
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbPrivileges", om.valueToTree(this.getDbPrivileges()));
            data.set("drdsAccountName", om.valueToTree(this.getDrdsAccountName()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("password", om.valueToTree(this.getPassword()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-drds.AccountProps"));
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

            if (!dbPrivileges.equals(that.dbPrivileges)) return false;
            if (!drdsAccountName.equals(that.drdsAccountName)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!password.equals(that.password)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbPrivileges.hashCode();
            result = 31 * result + (this.drdsAccountName.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.password.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
