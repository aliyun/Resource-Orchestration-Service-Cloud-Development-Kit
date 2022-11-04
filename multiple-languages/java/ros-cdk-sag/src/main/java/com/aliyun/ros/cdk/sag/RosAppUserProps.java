package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a `ALIYUN::SAG::AppUser`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:43.815Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.RosAppUserProps")
@software.amazon.jsii.Jsii.Proxy(RosAppUserProps.Jsii$Proxy.class)
public interface RosAppUserProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidth();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSmartAgId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserMail();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClientIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAppUserProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAppUserProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAppUserProps> {
        java.lang.Object bandwidth;
        java.lang.Object smartAgId;
        java.lang.Object userMail;
        java.lang.Object clientIp;
        java.lang.Object disable;
        java.lang.Object password;
        java.lang.Object userName;

        /**
         * Sets the value of {@link RosAppUserProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosAppUserProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosAppUserProps#getSmartAgId}
         * @param smartAgId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder smartAgId(java.lang.String smartAgId) {
            this.smartAgId = smartAgId;
            return this;
        }

        /**
         * Sets the value of {@link RosAppUserProps#getSmartAgId}
         * @param smartAgId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder smartAgId(com.aliyun.ros.cdk.core.IResolvable smartAgId) {
            this.smartAgId = smartAgId;
            return this;
        }

        /**
         * Sets the value of {@link RosAppUserProps#getUserMail}
         * @param userMail the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder userMail(java.lang.String userMail) {
            this.userMail = userMail;
            return this;
        }

        /**
         * Sets the value of {@link RosAppUserProps#getUserMail}
         * @param userMail the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder userMail(com.aliyun.ros.cdk.core.IResolvable userMail) {
            this.userMail = userMail;
            return this;
        }

        /**
         * Sets the value of {@link RosAppUserProps#getClientIp}
         * @param clientIp the value to be set.
         * @return {@code this}
         */
        public Builder clientIp(java.lang.String clientIp) {
            this.clientIp = clientIp;
            return this;
        }

        /**
         * Sets the value of {@link RosAppUserProps#getClientIp}
         * @param clientIp the value to be set.
         * @return {@code this}
         */
        public Builder clientIp(com.aliyun.ros.cdk.core.IResolvable clientIp) {
            this.clientIp = clientIp;
            return this;
        }

        /**
         * Sets the value of {@link RosAppUserProps#getDisable}
         * @param disable the value to be set.
         * @return {@code this}
         */
        public Builder disable(java.lang.Boolean disable) {
            this.disable = disable;
            return this;
        }

        /**
         * Sets the value of {@link RosAppUserProps#getDisable}
         * @param disable the value to be set.
         * @return {@code this}
         */
        public Builder disable(com.aliyun.ros.cdk.core.IResolvable disable) {
            this.disable = disable;
            return this;
        }

        /**
         * Sets the value of {@link RosAppUserProps#getPassword}
         * @param password the value to be set.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosAppUserProps#getPassword}
         * @param password the value to be set.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosAppUserProps#getUserName}
         * @param userName the value to be set.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link RosAppUserProps#getUserName}
         * @param userName the value to be set.
         * @return {@code this}
         */
        public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAppUserProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAppUserProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAppUserProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAppUserProps {
        private final java.lang.Object bandwidth;
        private final java.lang.Object smartAgId;
        private final java.lang.Object userMail;
        private final java.lang.Object clientIp;
        private final java.lang.Object disable;
        private final java.lang.Object password;
        private final java.lang.Object userName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.smartAgId = software.amazon.jsii.Kernel.get(this, "smartAgId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userMail = software.amazon.jsii.Kernel.get(this, "userMail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clientIp = software.amazon.jsii.Kernel.get(this, "clientIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disable = software.amazon.jsii.Kernel.get(this, "disable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidth = java.util.Objects.requireNonNull(builder.bandwidth, "bandwidth is required");
            this.smartAgId = java.util.Objects.requireNonNull(builder.smartAgId, "smartAgId is required");
            this.userMail = java.util.Objects.requireNonNull(builder.userMail, "userMail is required");
            this.clientIp = builder.clientIp;
            this.disable = builder.disable;
            this.password = builder.password;
            this.userName = builder.userName;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getSmartAgId() {
            return this.smartAgId;
        }

        @Override
        public final java.lang.Object getUserMail() {
            return this.userMail;
        }

        @Override
        public final java.lang.Object getClientIp() {
            return this.clientIp;
        }

        @Override
        public final java.lang.Object getDisable() {
            return this.disable;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getUserName() {
            return this.userName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            data.set("smartAgId", om.valueToTree(this.getSmartAgId()));
            data.set("userMail", om.valueToTree(this.getUserMail()));
            if (this.getClientIp() != null) {
                data.set("clientIp", om.valueToTree(this.getClientIp()));
            }
            if (this.getDisable() != null) {
                data.set("disable", om.valueToTree(this.getDisable()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getUserName() != null) {
                data.set("userName", om.valueToTree(this.getUserName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.RosAppUserProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAppUserProps.Jsii$Proxy that = (RosAppUserProps.Jsii$Proxy) o;

            if (!bandwidth.equals(that.bandwidth)) return false;
            if (!smartAgId.equals(that.smartAgId)) return false;
            if (!userMail.equals(that.userMail)) return false;
            if (this.clientIp != null ? !this.clientIp.equals(that.clientIp) : that.clientIp != null) return false;
            if (this.disable != null ? !this.disable.equals(that.disable) : that.disable != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            return this.userName != null ? this.userName.equals(that.userName) : that.userName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bandwidth.hashCode();
            result = 31 * result + (this.smartAgId.hashCode());
            result = 31 * result + (this.userMail.hashCode());
            result = 31 * result + (this.clientIp != null ? this.clientIp.hashCode() : 0);
            result = 31 * result + (this.disable != null ? this.disable.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.userName != null ? this.userName.hashCode() : 0);
            return result;
        }
    }
}
