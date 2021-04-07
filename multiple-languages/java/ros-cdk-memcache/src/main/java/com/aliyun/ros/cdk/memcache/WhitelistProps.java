package com.aliyun.ros.cdk.memcache;

/**
 * Properties for defining a `ALIYUN::Memcache::Whitelist`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.695Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.memcache.$Module.class, fqn = "@alicloud/ros-cdk-memcache.WhitelistProps")
@software.amazon.jsii.Jsii.Proxy(WhitelistProps.Jsii$Proxy.class)
public interface WhitelistProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: Instance ID (globally unique).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property securityIps: IP address whitelist to be modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityIps();

    /**
     * Property securityIpGroupAttribute: The default is empty.
     * <p>
     * For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpGroupAttribute() {
        return null;
    }

    /**
     * Property securityIpGroupName: Whitelist group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpGroupName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link WhitelistProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link WhitelistProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<WhitelistProps> {
        private java.lang.Object instanceId;
        private java.lang.Object securityIps;
        private java.lang.Object securityIpGroupAttribute;
        private java.lang.Object securityIpGroupName;

        /**
         * Sets the value of {@link WhitelistProps#getInstanceId}
         * @param instanceId Property instanceId: Instance ID (globally unique). This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link WhitelistProps#getInstanceId}
         * @param instanceId Property instanceId: Instance ID (globally unique). This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link WhitelistProps#getSecurityIps}
         * @param securityIps Property securityIps: IP address whitelist to be modified. This parameter is required.
         * @return {@code this}
         */
        public Builder securityIps(java.lang.String securityIps) {
            this.securityIps = securityIps;
            return this;
        }

        /**
         * Sets the value of {@link WhitelistProps#getSecurityIps}
         * @param securityIps Property securityIps: IP address whitelist to be modified. This parameter is required.
         * @return {@code this}
         */
        public Builder securityIps(com.aliyun.ros.cdk.core.IResolvable securityIps) {
            this.securityIps = securityIps;
            return this;
        }

        /**
         * Sets the value of {@link WhitelistProps#getSecurityIpGroupAttribute}
         * @param securityIpGroupAttribute Property securityIpGroupAttribute: The default is empty.
         *                                 For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
         * @return {@code this}
         */
        public Builder securityIpGroupAttribute(java.lang.String securityIpGroupAttribute) {
            this.securityIpGroupAttribute = securityIpGroupAttribute;
            return this;
        }

        /**
         * Sets the value of {@link WhitelistProps#getSecurityIpGroupAttribute}
         * @param securityIpGroupAttribute Property securityIpGroupAttribute: The default is empty.
         *                                 For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
         * @return {@code this}
         */
        public Builder securityIpGroupAttribute(com.aliyun.ros.cdk.core.IResolvable securityIpGroupAttribute) {
            this.securityIpGroupAttribute = securityIpGroupAttribute;
            return this;
        }

        /**
         * Sets the value of {@link WhitelistProps#getSecurityIpGroupName}
         * @param securityIpGroupName Property securityIpGroupName: Whitelist group.
         * @return {@code this}
         */
        public Builder securityIpGroupName(java.lang.String securityIpGroupName) {
            this.securityIpGroupName = securityIpGroupName;
            return this;
        }

        /**
         * Sets the value of {@link WhitelistProps#getSecurityIpGroupName}
         * @param securityIpGroupName Property securityIpGroupName: Whitelist group.
         * @return {@code this}
         */
        public Builder securityIpGroupName(com.aliyun.ros.cdk.core.IResolvable securityIpGroupName) {
            this.securityIpGroupName = securityIpGroupName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link WhitelistProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public WhitelistProps build() {
            return new Jsii$Proxy(instanceId, securityIps, securityIpGroupAttribute, securityIpGroupName);
        }
    }

    /**
     * An implementation for {@link WhitelistProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WhitelistProps {
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
        protected Jsii$Proxy(final java.lang.Object instanceId, final java.lang.Object securityIps, final java.lang.Object securityIpGroupAttribute, final java.lang.Object securityIpGroupName) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(instanceId, "instanceId is required");
            this.securityIps = java.util.Objects.requireNonNull(securityIps, "securityIps is required");
            this.securityIpGroupAttribute = securityIpGroupAttribute;
            this.securityIpGroupName = securityIpGroupName;
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-memcache.WhitelistProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            WhitelistProps.Jsii$Proxy that = (WhitelistProps.Jsii$Proxy) o;

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
