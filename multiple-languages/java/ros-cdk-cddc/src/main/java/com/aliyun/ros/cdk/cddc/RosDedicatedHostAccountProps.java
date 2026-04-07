package com.aliyun.ros.cdk.cddc;

/**
 * Properties for defining a <code>RosDedicatedHostAccount</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostaccount
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:22.230Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.RosDedicatedHostAccountProps")
@software.amazon.jsii.Jsii.Proxy(RosDedicatedHostAccountProps.Jsii$Proxy.class)
public interface RosDedicatedHostAccountProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountPassword();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDedicatedHostId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBastionInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDedicatedHostAccountProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDedicatedHostAccountProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDedicatedHostAccountProps> {
        java.lang.Object accountName;
        java.lang.Object accountPassword;
        java.lang.Object dedicatedHostId;
        java.lang.Object accountType;
        java.lang.Object bastionInstanceId;

        /**
         * Sets the value of {@link RosDedicatedHostAccountProps#getAccountName}
         * @param accountName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostAccountProps#getAccountName}
         * @param accountName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostAccountProps#getAccountPassword}
         * @param accountPassword the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountPassword(java.lang.String accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostAccountProps#getAccountPassword}
         * @param accountPassword the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountPassword(com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostAccountProps#getDedicatedHostId}
         * @param dedicatedHostId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dedicatedHostId(java.lang.String dedicatedHostId) {
            this.dedicatedHostId = dedicatedHostId;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostAccountProps#getDedicatedHostId}
         * @param dedicatedHostId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dedicatedHostId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostId) {
            this.dedicatedHostId = dedicatedHostId;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostAccountProps#getAccountType}
         * @param accountType the value to be set.
         * @return {@code this}
         */
        public Builder accountType(java.lang.String accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostAccountProps#getAccountType}
         * @param accountType the value to be set.
         * @return {@code this}
         */
        public Builder accountType(com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostAccountProps#getBastionInstanceId}
         * @param bastionInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder bastionInstanceId(java.lang.String bastionInstanceId) {
            this.bastionInstanceId = bastionInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostAccountProps#getBastionInstanceId}
         * @param bastionInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder bastionInstanceId(com.aliyun.ros.cdk.core.IResolvable bastionInstanceId) {
            this.bastionInstanceId = bastionInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDedicatedHostAccountProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDedicatedHostAccountProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDedicatedHostAccountProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDedicatedHostAccountProps {
        private final java.lang.Object accountName;
        private final java.lang.Object accountPassword;
        private final java.lang.Object dedicatedHostId;
        private final java.lang.Object accountType;
        private final java.lang.Object bastionInstanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPassword = software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostId = software.amazon.jsii.Kernel.get(this, "dedicatedHostId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountType = software.amazon.jsii.Kernel.get(this, "accountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bastionInstanceId = software.amazon.jsii.Kernel.get(this, "bastionInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountName = java.util.Objects.requireNonNull(builder.accountName, "accountName is required");
            this.accountPassword = java.util.Objects.requireNonNull(builder.accountPassword, "accountPassword is required");
            this.dedicatedHostId = java.util.Objects.requireNonNull(builder.dedicatedHostId, "dedicatedHostId is required");
            this.accountType = builder.accountType;
            this.bastionInstanceId = builder.bastionInstanceId;
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
        public final java.lang.Object getDedicatedHostId() {
            return this.dedicatedHostId;
        }

        @Override
        public final java.lang.Object getAccountType() {
            return this.accountType;
        }

        @Override
        public final java.lang.Object getBastionInstanceId() {
            return this.bastionInstanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accountName", om.valueToTree(this.getAccountName()));
            data.set("accountPassword", om.valueToTree(this.getAccountPassword()));
            data.set("dedicatedHostId", om.valueToTree(this.getDedicatedHostId()));
            if (this.getAccountType() != null) {
                data.set("accountType", om.valueToTree(this.getAccountType()));
            }
            if (this.getBastionInstanceId() != null) {
                data.set("bastionInstanceId", om.valueToTree(this.getBastionInstanceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cddc.RosDedicatedHostAccountProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDedicatedHostAccountProps.Jsii$Proxy that = (RosDedicatedHostAccountProps.Jsii$Proxy) o;

            if (!accountName.equals(that.accountName)) return false;
            if (!accountPassword.equals(that.accountPassword)) return false;
            if (!dedicatedHostId.equals(that.dedicatedHostId)) return false;
            if (this.accountType != null ? !this.accountType.equals(that.accountType) : that.accountType != null) return false;
            return this.bastionInstanceId != null ? this.bastionInstanceId.equals(that.bastionInstanceId) : that.bastionInstanceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accountName.hashCode();
            result = 31 * result + (this.accountPassword.hashCode());
            result = 31 * result + (this.dedicatedHostId.hashCode());
            result = 31 * result + (this.accountType != null ? this.accountType.hashCode() : 0);
            result = 31 * result + (this.bastionInstanceId != null ? this.bastionInstanceId.hashCode() : 0);
            return result;
        }
    }
}
