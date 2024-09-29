package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a <code>AppUser</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-appuser
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:42.448Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.AppUserProps")
@software.amazon.jsii.Jsii.Proxy(AppUserProps.Jsii$Proxy.class)
public interface AppUserProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bandwidth: The bandwidth.
     * <p>
     * Unit: Kbit/s. Maximum bandwidth: 2,000 Kbit/s.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidth();

    /**
     * Property smartAgId: The ID of the SAG APP instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSmartAgId();

    /**
     * Property userMail: The email address of the user.
     * <p>
     * The username and password are sent to the specified
     * email address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserMail();

    /**
     * Property clientIp: After this feature is enabled, you must specify the IP address of SAG APP.
     * <p>
     * In this
     * case, SAG APP connects to Alibaba Cloud through the specified IP address.
     * Note The IP address must fall into the CIDR block of the private network.
     * After this feature is disabled, an IP address within the CIDR block of the private
     * network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
     * IP address.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClientIp() {
        return null;
    }

    /**
     * Property disable: Disable user or not.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisable() {
        return null;
    }

    /**
     * Property password: The password used to log on to SAG APP.
     * <p>
     * For a client account, if you specify the username, you must also specify the password.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return null;
    }

    /**
     * Property userName: The username of the client account.
     * <p>
     * Usernames of client accounts added to the same
     * SAG APP instance must be unique.
     * For a client account, if you specify the username, you must also specify the password.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AppUserProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AppUserProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AppUserProps> {
        java.lang.Object bandwidth;
        java.lang.Object smartAgId;
        java.lang.Object userMail;
        java.lang.Object clientIp;
        java.lang.Object disable;
        java.lang.Object password;
        java.lang.Object userName;

        /**
         * Sets the value of {@link AppUserProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth. This parameter is required.
         *                  Unit: Kbit/s. Maximum bandwidth: 2,000 Kbit/s.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link AppUserProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth. This parameter is required.
         *                  Unit: Kbit/s. Maximum bandwidth: 2,000 Kbit/s.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link AppUserProps#getSmartAgId}
         * @param smartAgId Property smartAgId: The ID of the SAG APP instance. This parameter is required.
         * @return {@code this}
         */
        public Builder smartAgId(java.lang.String smartAgId) {
            this.smartAgId = smartAgId;
            return this;
        }

        /**
         * Sets the value of {@link AppUserProps#getSmartAgId}
         * @param smartAgId Property smartAgId: The ID of the SAG APP instance. This parameter is required.
         * @return {@code this}
         */
        public Builder smartAgId(com.aliyun.ros.cdk.core.IResolvable smartAgId) {
            this.smartAgId = smartAgId;
            return this;
        }

        /**
         * Sets the value of {@link AppUserProps#getUserMail}
         * @param userMail Property userMail: The email address of the user. This parameter is required.
         *                 The username and password are sent to the specified
         *                 email address.
         * @return {@code this}
         */
        public Builder userMail(java.lang.String userMail) {
            this.userMail = userMail;
            return this;
        }

        /**
         * Sets the value of {@link AppUserProps#getUserMail}
         * @param userMail Property userMail: The email address of the user. This parameter is required.
         *                 The username and password are sent to the specified
         *                 email address.
         * @return {@code this}
         */
        public Builder userMail(com.aliyun.ros.cdk.core.IResolvable userMail) {
            this.userMail = userMail;
            return this;
        }

        /**
         * Sets the value of {@link AppUserProps#getClientIp}
         * @param clientIp Property clientIp: After this feature is enabled, you must specify the IP address of SAG APP.
         *                 In this
         *                 case, SAG APP connects to Alibaba Cloud through the specified IP address.
         *                 Note The IP address must fall into the CIDR block of the private network.
         *                 After this feature is disabled, an IP address within the CIDR block of the private
         *                 network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
         *                 IP address.
         * @return {@code this}
         */
        public Builder clientIp(java.lang.String clientIp) {
            this.clientIp = clientIp;
            return this;
        }

        /**
         * Sets the value of {@link AppUserProps#getClientIp}
         * @param clientIp Property clientIp: After this feature is enabled, you must specify the IP address of SAG APP.
         *                 In this
         *                 case, SAG APP connects to Alibaba Cloud through the specified IP address.
         *                 Note The IP address must fall into the CIDR block of the private network.
         *                 After this feature is disabled, an IP address within the CIDR block of the private
         *                 network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
         *                 IP address.
         * @return {@code this}
         */
        public Builder clientIp(com.aliyun.ros.cdk.core.IResolvable clientIp) {
            this.clientIp = clientIp;
            return this;
        }

        /**
         * Sets the value of {@link AppUserProps#getDisable}
         * @param disable Property disable: Disable user or not.
         * @return {@code this}
         */
        public Builder disable(java.lang.Boolean disable) {
            this.disable = disable;
            return this;
        }

        /**
         * Sets the value of {@link AppUserProps#getDisable}
         * @param disable Property disable: Disable user or not.
         * @return {@code this}
         */
        public Builder disable(com.aliyun.ros.cdk.core.IResolvable disable) {
            this.disable = disable;
            return this;
        }

        /**
         * Sets the value of {@link AppUserProps#getPassword}
         * @param password Property password: The password used to log on to SAG APP.
         *                 For a client account, if you specify the username, you must also specify the password.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link AppUserProps#getPassword}
         * @param password Property password: The password used to log on to SAG APP.
         *                 For a client account, if you specify the username, you must also specify the password.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link AppUserProps#getUserName}
         * @param userName Property userName: The username of the client account.
         *                 Usernames of client accounts added to the same
         *                 SAG APP instance must be unique.
         *                 For a client account, if you specify the username, you must also specify the password.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link AppUserProps#getUserName}
         * @param userName Property userName: The username of the client account.
         *                 Usernames of client accounts added to the same
         *                 SAG APP instance must be unique.
         *                 For a client account, if you specify the username, you must also specify the password.
         * @return {@code this}
         */
        public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AppUserProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AppUserProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AppUserProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AppUserProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.AppUserProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AppUserProps.Jsii$Proxy that = (AppUserProps.Jsii$Proxy) o;

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
