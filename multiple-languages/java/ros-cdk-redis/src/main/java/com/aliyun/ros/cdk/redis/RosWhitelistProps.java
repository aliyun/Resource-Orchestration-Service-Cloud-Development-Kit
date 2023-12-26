package com.aliyun.ros.cdk.redis;

/**
 * Properties for defining a <code>RosWhitelist</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-whitelist
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:17.727Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.RosWhitelistProps")
@software.amazon.jsii.Jsii.Proxy(RosWhitelistProps.Jsii$Proxy.class)
public interface RosWhitelistProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityIps();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpGroupAttribute() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpGroupName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosWhitelistProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosWhitelistProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosWhitelistProps> {
        java.lang.Object instanceId;
        java.lang.Object securityIps;
        java.lang.Object securityIpGroupAttribute;
        java.lang.Object securityIpGroupName;

        /**
         * Sets the value of {@link RosWhitelistProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosWhitelistProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosWhitelistProps#getSecurityIps}
         * @param securityIps the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityIps(java.lang.String securityIps) {
            this.securityIps = securityIps;
            return this;
        }

        /**
         * Sets the value of {@link RosWhitelistProps#getSecurityIps}
         * @param securityIps the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityIps(com.aliyun.ros.cdk.core.IResolvable securityIps) {
            this.securityIps = securityIps;
            return this;
        }

        /**
         * Sets the value of {@link RosWhitelistProps#getSecurityIpGroupAttribute}
         * @param securityIpGroupAttribute the value to be set.
         * @return {@code this}
         */
        public Builder securityIpGroupAttribute(java.lang.String securityIpGroupAttribute) {
            this.securityIpGroupAttribute = securityIpGroupAttribute;
            return this;
        }

        /**
         * Sets the value of {@link RosWhitelistProps#getSecurityIpGroupAttribute}
         * @param securityIpGroupAttribute the value to be set.
         * @return {@code this}
         */
        public Builder securityIpGroupAttribute(com.aliyun.ros.cdk.core.IResolvable securityIpGroupAttribute) {
            this.securityIpGroupAttribute = securityIpGroupAttribute;
            return this;
        }

        /**
         * Sets the value of {@link RosWhitelistProps#getSecurityIpGroupName}
         * @param securityIpGroupName the value to be set.
         * @return {@code this}
         */
        public Builder securityIpGroupName(java.lang.String securityIpGroupName) {
            this.securityIpGroupName = securityIpGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosWhitelistProps#getSecurityIpGroupName}
         * @param securityIpGroupName the value to be set.
         * @return {@code this}
         */
        public Builder securityIpGroupName(com.aliyun.ros.cdk.core.IResolvable securityIpGroupName) {
            this.securityIpGroupName = securityIpGroupName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosWhitelistProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosWhitelistProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosWhitelistProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosWhitelistProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object securityIps;
        private final java.lang.Object securityIpGroupAttribute;
        private final java.lang.Object securityIpGroupName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIps = software.amazon.jsii.Kernel.get(this, "securityIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpGroupAttribute = software.amazon.jsii.Kernel.get(this, "securityIpGroupAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpGroupName = software.amazon.jsii.Kernel.get(this, "securityIpGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.securityIps = java.util.Objects.requireNonNull(builder.securityIps, "securityIps is required");
            this.securityIpGroupAttribute = builder.securityIpGroupAttribute;
            this.securityIpGroupName = builder.securityIpGroupName;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getSecurityIps() {
            return this.securityIps;
        }

        @Override
        public final java.lang.Object getSecurityIpGroupAttribute() {
            return this.securityIpGroupAttribute;
        }

        @Override
        public final java.lang.Object getSecurityIpGroupName() {
            return this.securityIpGroupName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("securityIps", om.valueToTree(this.getSecurityIps()));
            if (this.getSecurityIpGroupAttribute() != null) {
                data.set("securityIpGroupAttribute", om.valueToTree(this.getSecurityIpGroupAttribute()));
            }
            if (this.getSecurityIpGroupName() != null) {
                data.set("securityIpGroupName", om.valueToTree(this.getSecurityIpGroupName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.RosWhitelistProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosWhitelistProps.Jsii$Proxy that = (RosWhitelistProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!securityIps.equals(that.securityIps)) return false;
            if (this.securityIpGroupAttribute != null ? !this.securityIpGroupAttribute.equals(that.securityIpGroupAttribute) : that.securityIpGroupAttribute != null) return false;
            return this.securityIpGroupName != null ? this.securityIpGroupName.equals(that.securityIpGroupName) : that.securityIpGroupName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.securityIps.hashCode());
            result = 31 * result + (this.securityIpGroupAttribute != null ? this.securityIpGroupAttribute.hashCode() : 0);
            result = 31 * result + (this.securityIpGroupName != null ? this.securityIpGroupName.hashCode() : 0);
            return result;
        }
    }
}
