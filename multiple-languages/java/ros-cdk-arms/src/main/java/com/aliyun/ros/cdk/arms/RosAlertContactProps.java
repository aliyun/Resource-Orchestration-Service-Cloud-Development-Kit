package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a <code>ALIYUN::ARMS::AlertContact</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:08.309Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RosAlertContactProps")
@software.amazon.jsii.Jsii.Proxy(RosAlertContactProps.Jsii$Proxy.class)
public interface RosAlertContactProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContactName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDingRobotWebhookUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEmail() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPhoneNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyUserId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemNoc() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAlertContactProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAlertContactProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAlertContactProps> {
        java.lang.Object contactName;
        java.lang.Object dingRobotWebhookUrl;
        java.lang.Object email;
        java.lang.Object phoneNum;
        java.lang.Object proxyUserId;
        java.lang.Object regionId;
        java.lang.Object systemNoc;

        /**
         * Sets the value of {@link RosAlertContactProps#getContactName}
         * @param contactName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactName(java.lang.String contactName) {
            this.contactName = contactName;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactProps#getContactName}
         * @param contactName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactName(com.aliyun.ros.cdk.core.IResolvable contactName) {
            this.contactName = contactName;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactProps#getDingRobotWebhookUrl}
         * @param dingRobotWebhookUrl the value to be set.
         * @return {@code this}
         */
        public Builder dingRobotWebhookUrl(java.lang.String dingRobotWebhookUrl) {
            this.dingRobotWebhookUrl = dingRobotWebhookUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactProps#getDingRobotWebhookUrl}
         * @param dingRobotWebhookUrl the value to be set.
         * @return {@code this}
         */
        public Builder dingRobotWebhookUrl(com.aliyun.ros.cdk.core.IResolvable dingRobotWebhookUrl) {
            this.dingRobotWebhookUrl = dingRobotWebhookUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactProps#getEmail}
         * @param email the value to be set.
         * @return {@code this}
         */
        public Builder email(java.lang.String email) {
            this.email = email;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactProps#getEmail}
         * @param email the value to be set.
         * @return {@code this}
         */
        public Builder email(com.aliyun.ros.cdk.core.IResolvable email) {
            this.email = email;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactProps#getPhoneNum}
         * @param phoneNum the value to be set.
         * @return {@code this}
         */
        public Builder phoneNum(java.lang.String phoneNum) {
            this.phoneNum = phoneNum;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactProps#getPhoneNum}
         * @param phoneNum the value to be set.
         * @return {@code this}
         */
        public Builder phoneNum(com.aliyun.ros.cdk.core.IResolvable phoneNum) {
            this.phoneNum = phoneNum;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactProps#getProxyUserId}
         * @param proxyUserId the value to be set.
         * @return {@code this}
         */
        public Builder proxyUserId(java.lang.String proxyUserId) {
            this.proxyUserId = proxyUserId;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactProps#getProxyUserId}
         * @param proxyUserId the value to be set.
         * @return {@code this}
         */
        public Builder proxyUserId(com.aliyun.ros.cdk.core.IResolvable proxyUserId) {
            this.proxyUserId = proxyUserId;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactProps#getRegionId}
         * @param regionId the value to be set.
         * @return {@code this}
         */
        public Builder regionId(java.lang.String regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactProps#getRegionId}
         * @param regionId the value to be set.
         * @return {@code this}
         */
        public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactProps#getSystemNoc}
         * @param systemNoc the value to be set.
         * @return {@code this}
         */
        public Builder systemNoc(java.lang.Boolean systemNoc) {
            this.systemNoc = systemNoc;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactProps#getSystemNoc}
         * @param systemNoc the value to be set.
         * @return {@code this}
         */
        public Builder systemNoc(com.aliyun.ros.cdk.core.IResolvable systemNoc) {
            this.systemNoc = systemNoc;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAlertContactProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAlertContactProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAlertContactProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAlertContactProps {
        private final java.lang.Object contactName;
        private final java.lang.Object dingRobotWebhookUrl;
        private final java.lang.Object email;
        private final java.lang.Object phoneNum;
        private final java.lang.Object proxyUserId;
        private final java.lang.Object regionId;
        private final java.lang.Object systemNoc;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.contactName = software.amazon.jsii.Kernel.get(this, "contactName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dingRobotWebhookUrl = software.amazon.jsii.Kernel.get(this, "dingRobotWebhookUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.email = software.amazon.jsii.Kernel.get(this, "email", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.phoneNum = software.amazon.jsii.Kernel.get(this, "phoneNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyUserId = software.amazon.jsii.Kernel.get(this, "proxyUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemNoc = software.amazon.jsii.Kernel.get(this, "systemNoc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.contactName = java.util.Objects.requireNonNull(builder.contactName, "contactName is required");
            this.dingRobotWebhookUrl = builder.dingRobotWebhookUrl;
            this.email = builder.email;
            this.phoneNum = builder.phoneNum;
            this.proxyUserId = builder.proxyUserId;
            this.regionId = builder.regionId;
            this.systemNoc = builder.systemNoc;
        }

        @Override
        public final java.lang.Object getContactName() {
            return this.contactName;
        }

        @Override
        public final java.lang.Object getDingRobotWebhookUrl() {
            return this.dingRobotWebhookUrl;
        }

        @Override
        public final java.lang.Object getEmail() {
            return this.email;
        }

        @Override
        public final java.lang.Object getPhoneNum() {
            return this.phoneNum;
        }

        @Override
        public final java.lang.Object getProxyUserId() {
            return this.proxyUserId;
        }

        @Override
        public final java.lang.Object getRegionId() {
            return this.regionId;
        }

        @Override
        public final java.lang.Object getSystemNoc() {
            return this.systemNoc;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("contactName", om.valueToTree(this.getContactName()));
            if (this.getDingRobotWebhookUrl() != null) {
                data.set("dingRobotWebhookUrl", om.valueToTree(this.getDingRobotWebhookUrl()));
            }
            if (this.getEmail() != null) {
                data.set("email", om.valueToTree(this.getEmail()));
            }
            if (this.getPhoneNum() != null) {
                data.set("phoneNum", om.valueToTree(this.getPhoneNum()));
            }
            if (this.getProxyUserId() != null) {
                data.set("proxyUserId", om.valueToTree(this.getProxyUserId()));
            }
            if (this.getRegionId() != null) {
                data.set("regionId", om.valueToTree(this.getRegionId()));
            }
            if (this.getSystemNoc() != null) {
                data.set("systemNoc", om.valueToTree(this.getSystemNoc()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.RosAlertContactProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAlertContactProps.Jsii$Proxy that = (RosAlertContactProps.Jsii$Proxy) o;

            if (!contactName.equals(that.contactName)) return false;
            if (this.dingRobotWebhookUrl != null ? !this.dingRobotWebhookUrl.equals(that.dingRobotWebhookUrl) : that.dingRobotWebhookUrl != null) return false;
            if (this.email != null ? !this.email.equals(that.email) : that.email != null) return false;
            if (this.phoneNum != null ? !this.phoneNum.equals(that.phoneNum) : that.phoneNum != null) return false;
            if (this.proxyUserId != null ? !this.proxyUserId.equals(that.proxyUserId) : that.proxyUserId != null) return false;
            if (this.regionId != null ? !this.regionId.equals(that.regionId) : that.regionId != null) return false;
            return this.systemNoc != null ? this.systemNoc.equals(that.systemNoc) : that.systemNoc == null;
        }

        @Override
        public final int hashCode() {
            int result = this.contactName.hashCode();
            result = 31 * result + (this.dingRobotWebhookUrl != null ? this.dingRobotWebhookUrl.hashCode() : 0);
            result = 31 * result + (this.email != null ? this.email.hashCode() : 0);
            result = 31 * result + (this.phoneNum != null ? this.phoneNum.hashCode() : 0);
            result = 31 * result + (this.proxyUserId != null ? this.proxyUserId.hashCode() : 0);
            result = 31 * result + (this.regionId != null ? this.regionId.hashCode() : 0);
            result = 31 * result + (this.systemNoc != null ? this.systemNoc.hashCode() : 0);
            return result;
        }
    }
}
