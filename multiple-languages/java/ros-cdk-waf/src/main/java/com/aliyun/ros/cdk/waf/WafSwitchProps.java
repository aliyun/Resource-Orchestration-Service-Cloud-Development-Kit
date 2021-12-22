package com.aliyun.ros.cdk.waf;

/**
 * Properties for defining a `ALIYUN::WAF::WafSwitch`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:59.049Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.WafSwitchProps")
@software.amazon.jsii.Jsii.Proxy(WafSwitchProps.Jsii$Proxy.class)
public interface WafSwitchProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property domain: Domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomain();

    /**
     * Property instanceId: WAF instance ID.
     * <p>
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property serviceOn: Web attack protection switch, the value of: 0: closed.
     * <p>
     * 1: indicate on.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceOn();

    /**
     * Property region: Examples of areas where the WAF.
     * <p>
     * Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link WafSwitchProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link WafSwitchProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<WafSwitchProps> {
        java.lang.Object domain;
        java.lang.Object instanceId;
        java.lang.Object serviceOn;
        java.lang.Object region;

        /**
         * Sets the value of {@link WafSwitchProps#getDomain}
         * @param domain Property domain: Domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(java.lang.String domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link WafSwitchProps#getDomain}
         * @param domain Property domain: Domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(com.aliyun.ros.cdk.core.IResolvable domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link WafSwitchProps#getInstanceId}
         * @param instanceId Property instanceId: WAF instance ID. This parameter is required.
         *                   Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link WafSwitchProps#getInstanceId}
         * @param instanceId Property instanceId: WAF instance ID. This parameter is required.
         *                   Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link WafSwitchProps#getServiceOn}
         * @param serviceOn Property serviceOn: Web attack protection switch, the value of: 0: closed. This parameter is required.
         *                  1: indicate on.
         * @return {@code this}
         */
        public Builder serviceOn(java.lang.Number serviceOn) {
            this.serviceOn = serviceOn;
            return this;
        }

        /**
         * Sets the value of {@link WafSwitchProps#getServiceOn}
         * @param serviceOn Property serviceOn: Web attack protection switch, the value of: 0: closed. This parameter is required.
         *                  1: indicate on.
         * @return {@code this}
         */
        public Builder serviceOn(com.aliyun.ros.cdk.core.IResolvable serviceOn) {
            this.serviceOn = serviceOn;
            return this;
        }

        /**
         * Sets the value of {@link WafSwitchProps#getRegion}
         * @param region Property region: Examples of areas where the WAF.
         *               Value:
         *               cn: China mainland (default)
         *               cn-hongkong: China HongKong and other overseas
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link WafSwitchProps#getRegion}
         * @param region Property region: Examples of areas where the WAF.
         *               Value:
         *               cn: China mainland (default)
         *               cn-hongkong: China HongKong and other overseas
         * @return {@code this}
         */
        public Builder region(com.aliyun.ros.cdk.core.IResolvable region) {
            this.region = region;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link WafSwitchProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public WafSwitchProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link WafSwitchProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WafSwitchProps {
        private final java.lang.Object domain;
        private final java.lang.Object instanceId;
        private final java.lang.Object serviceOn;
        private final java.lang.Object region;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceOn = software.amazon.jsii.Kernel.get(this, "serviceOn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domain = java.util.Objects.requireNonNull(builder.domain, "domain is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.serviceOn = java.util.Objects.requireNonNull(builder.serviceOn, "serviceOn is required");
            this.region = builder.region;
        }

        @Override
        public final java.lang.Object getDomain() {
            return this.domain;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getServiceOn() {
            return this.serviceOn;
        }

        @Override
        public final java.lang.Object getRegion() {
            return this.region;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domain", om.valueToTree(this.getDomain()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("serviceOn", om.valueToTree(this.getServiceOn()));
            if (this.getRegion() != null) {
                data.set("region", om.valueToTree(this.getRegion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-waf.WafSwitchProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            WafSwitchProps.Jsii$Proxy that = (WafSwitchProps.Jsii$Proxy) o;

            if (!domain.equals(that.domain)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!serviceOn.equals(that.serviceOn)) return false;
            return this.region != null ? this.region.equals(that.region) : that.region == null;
        }

        @Override
        public final int hashCode() {
            int result = this.domain.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.serviceOn.hashCode());
            result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
            return result;
        }
    }
}
