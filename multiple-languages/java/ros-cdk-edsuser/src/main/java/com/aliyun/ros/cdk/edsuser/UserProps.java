package com.aliyun.ros.cdk.edsuser;

/**
 * Properties for defining a <code>User</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edsuser-user
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:10.578Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edsuser.$Module.class, fqn = "@alicloud/ros-cdk-edsuser.UserProps")
@software.amazon.jsii.Jsii.Proxy(UserProps.Jsii$Proxy.class)
public interface UserProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property endUserId: The name of the end user.
     * <p>
     * The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndUserId();

    /**
     * Property email: The email address of the end user.
     * <p>
     * The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEmail() {
        return null;
    }

    /**
     * Property orgId: The organization to which the end user belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOrgId() {
        return null;
    }

    /**
     * Property ownerType: The type of the account ownership.
     * <p>
     * Enumeration Value:
     * CreateFromManager
     * Normal
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOwnerType() {
        return null;
    }

    /**
     * Property password: The initial password.
     * <p>
     * If this parameter is left empty, an email for password reset is sent to the specified email address.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return null;
    }

    /**
     * Property phone: Mobile numbers are not supported on the international site (alibabacloud.com).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPhone() {
        return null;
    }

    /**
     * Property remark: The remarks of the end user.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link UserProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UserProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UserProps> {
        java.lang.Object endUserId;
        java.lang.Object email;
        java.lang.Object orgId;
        java.lang.Object ownerType;
        java.lang.Object password;
        java.lang.Object phone;
        java.lang.Object remark;

        /**
         * Sets the value of {@link UserProps#getEndUserId}
         * @param endUserId Property endUserId: The name of the end user. This parameter is required.
         *                  The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
         * @return {@code this}
         */
        public Builder endUserId(java.lang.String endUserId) {
            this.endUserId = endUserId;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getEndUserId}
         * @param endUserId Property endUserId: The name of the end user. This parameter is required.
         *                  The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
         * @return {@code this}
         */
        public Builder endUserId(com.aliyun.ros.cdk.core.IResolvable endUserId) {
            this.endUserId = endUserId;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getEmail}
         * @param email Property email: The email address of the end user.
         *              The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
         * @return {@code this}
         */
        public Builder email(java.lang.String email) {
            this.email = email;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getEmail}
         * @param email Property email: The email address of the end user.
         *              The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
         * @return {@code this}
         */
        public Builder email(com.aliyun.ros.cdk.core.IResolvable email) {
            this.email = email;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getOrgId}
         * @param orgId Property orgId: The organization to which the end user belongs.
         * @return {@code this}
         */
        public Builder orgId(java.lang.String orgId) {
            this.orgId = orgId;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getOrgId}
         * @param orgId Property orgId: The organization to which the end user belongs.
         * @return {@code this}
         */
        public Builder orgId(com.aliyun.ros.cdk.core.IResolvable orgId) {
            this.orgId = orgId;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getOwnerType}
         * @param ownerType Property ownerType: The type of the account ownership.
         *                  Enumeration Value:
         *                  CreateFromManager
         *                  Normal
         * @return {@code this}
         */
        public Builder ownerType(java.lang.String ownerType) {
            this.ownerType = ownerType;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getOwnerType}
         * @param ownerType Property ownerType: The type of the account ownership.
         *                  Enumeration Value:
         *                  CreateFromManager
         *                  Normal
         * @return {@code this}
         */
        public Builder ownerType(com.aliyun.ros.cdk.core.IResolvable ownerType) {
            this.ownerType = ownerType;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getPassword}
         * @param password Property password: The initial password.
         *                 If this parameter is left empty, an email for password reset is sent to the specified email address.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getPassword}
         * @param password Property password: The initial password.
         *                 If this parameter is left empty, an email for password reset is sent to the specified email address.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getPhone}
         * @param phone Property phone: Mobile numbers are not supported on the international site (alibabacloud.com).
         * @return {@code this}
         */
        public Builder phone(java.lang.String phone) {
            this.phone = phone;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getPhone}
         * @param phone Property phone: Mobile numbers are not supported on the international site (alibabacloud.com).
         * @return {@code this}
         */
        public Builder phone(com.aliyun.ros.cdk.core.IResolvable phone) {
            this.phone = phone;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getRemark}
         * @param remark Property remark: The remarks of the end user.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getRemark}
         * @param remark Property remark: The remarks of the end user.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UserProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UserProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UserProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserProps {
        private final java.lang.Object endUserId;
        private final java.lang.Object email;
        private final java.lang.Object orgId;
        private final java.lang.Object ownerType;
        private final java.lang.Object password;
        private final java.lang.Object phone;
        private final java.lang.Object remark;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.endUserId = software.amazon.jsii.Kernel.get(this, "endUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.email = software.amazon.jsii.Kernel.get(this, "email", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.orgId = software.amazon.jsii.Kernel.get(this, "orgId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ownerType = software.amazon.jsii.Kernel.get(this, "ownerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.phone = software.amazon.jsii.Kernel.get(this, "phone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.endUserId = java.util.Objects.requireNonNull(builder.endUserId, "endUserId is required");
            this.email = builder.email;
            this.orgId = builder.orgId;
            this.ownerType = builder.ownerType;
            this.password = builder.password;
            this.phone = builder.phone;
            this.remark = builder.remark;
        }

        @Override
        public final java.lang.Object getEndUserId() {
            return this.endUserId;
        }

        @Override
        public final java.lang.Object getEmail() {
            return this.email;
        }

        @Override
        public final java.lang.Object getOrgId() {
            return this.orgId;
        }

        @Override
        public final java.lang.Object getOwnerType() {
            return this.ownerType;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getPhone() {
            return this.phone;
        }

        @Override
        public final java.lang.Object getRemark() {
            return this.remark;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("endUserId", om.valueToTree(this.getEndUserId()));
            if (this.getEmail() != null) {
                data.set("email", om.valueToTree(this.getEmail()));
            }
            if (this.getOrgId() != null) {
                data.set("orgId", om.valueToTree(this.getOrgId()));
            }
            if (this.getOwnerType() != null) {
                data.set("ownerType", om.valueToTree(this.getOwnerType()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPhone() != null) {
                data.set("phone", om.valueToTree(this.getPhone()));
            }
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edsuser.UserProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UserProps.Jsii$Proxy that = (UserProps.Jsii$Proxy) o;

            if (!endUserId.equals(that.endUserId)) return false;
            if (this.email != null ? !this.email.equals(that.email) : that.email != null) return false;
            if (this.orgId != null ? !this.orgId.equals(that.orgId) : that.orgId != null) return false;
            if (this.ownerType != null ? !this.ownerType.equals(that.ownerType) : that.ownerType != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.phone != null ? !this.phone.equals(that.phone) : that.phone != null) return false;
            return this.remark != null ? this.remark.equals(that.remark) : that.remark == null;
        }

        @Override
        public final int hashCode() {
            int result = this.endUserId.hashCode();
            result = 31 * result + (this.email != null ? this.email.hashCode() : 0);
            result = 31 * result + (this.orgId != null ? this.orgId.hashCode() : 0);
            result = 31 * result + (this.ownerType != null ? this.ownerType.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.phone != null ? this.phone.hashCode() : 0);
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            return result;
        }
    }
}
