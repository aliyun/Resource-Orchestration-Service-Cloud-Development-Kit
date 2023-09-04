package com.aliyun.ros.cdk.fnf.datasource;

/**
 * Properties for defining a <code>DATASOURCE::FNF::Flows</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:37.930Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fnf.$Module.class, fqn = "@alicloud/ros-cdk-fnf.datasource.RosFlowsProps")
@software.amazon.jsii.Jsii.Proxy(RosFlowsProps.Jsii$Proxy.class)
public interface RosFlowsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * @return a {@link Builder} of {@link RosFlowsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosFlowsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosFlowsProps> {

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosFlowsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosFlowsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosFlowsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosFlowsProps {

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();


            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fnf.datasource.RosFlowsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }
    }
}
