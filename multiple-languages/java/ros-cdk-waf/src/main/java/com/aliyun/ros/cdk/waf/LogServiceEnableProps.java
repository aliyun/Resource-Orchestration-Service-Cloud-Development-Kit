package com.aliyun.ros.cdk.waf;

/**
 * Properties for defining a `ALIYUN::WAF::LogServiceEnable`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:03.974Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.LogServiceEnableProps")
@software.amazon.jsii.Jsii.Proxy(LogServiceEnableProps.Jsii$Proxy.class)
public interface LogServiceEnableProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property domain: The domain name that is added to WAF.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomain();

    /**
     * Property instanceId: The ID of the WAF instance.
     * <p>
     * You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * @return a {@link Builder} of {@link LogServiceEnableProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LogServiceEnableProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LogServiceEnableProps> {
        java.lang.Object domain;
        java.lang.Object instanceId;

        /**
         * Sets the value of {@link LogServiceEnableProps#getDomain}
         * @param domain Property domain: The domain name that is added to WAF. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(java.lang.String domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link LogServiceEnableProps#getDomain}
         * @param domain Property domain: The domain name that is added to WAF. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(com.aliyun.ros.cdk.core.IResolvable domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link LogServiceEnableProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the WAF instance. This parameter is required.
         *                   You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link LogServiceEnableProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the WAF instance. This parameter is required.
         *                   You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LogServiceEnableProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LogServiceEnableProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link LogServiceEnableProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LogServiceEnableProps {
        private final java.lang.Object domain;
        private final java.lang.Object instanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domain = java.util.Objects.requireNonNull(builder.domain, "domain is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domain", om.valueToTree(this.getDomain()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-waf.LogServiceEnableProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LogServiceEnableProps.Jsii$Proxy that = (LogServiceEnableProps.Jsii$Proxy) o;

            if (!domain.equals(that.domain)) return false;
            return this.instanceId.equals(that.instanceId);
        }

        @Override
        public final int hashCode() {
            int result = this.domain.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            return result;
        }
    }
}
