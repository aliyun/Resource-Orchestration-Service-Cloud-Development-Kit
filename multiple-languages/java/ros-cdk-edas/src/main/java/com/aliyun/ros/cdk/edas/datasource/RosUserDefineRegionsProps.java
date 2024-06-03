package com.aliyun.ros.cdk.edas.datasource;

/**
 * Properties for defining a <code>RosUserDefineRegions</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-userdefineregions
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:51.908Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.datasource.RosUserDefineRegionsProps")
@software.amazon.jsii.Jsii.Proxy(RosUserDefineRegionsProps.Jsii$Proxy.class)
public interface RosUserDefineRegionsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * @return a {@link Builder} of {@link RosUserDefineRegionsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosUserDefineRegionsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosUserDefineRegionsProps> {

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosUserDefineRegionsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosUserDefineRegionsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosUserDefineRegionsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosUserDefineRegionsProps {

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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.datasource.RosUserDefineRegionsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }
    }
}
