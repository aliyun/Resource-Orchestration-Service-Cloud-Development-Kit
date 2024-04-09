package com.aliyun.ros.cdk.kms.datasource;

/**
 * Properties for defining a <code>Instances</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instances
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:33.572Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.datasource.InstancesProps")
@software.amazon.jsii.Jsii.Proxy(InstancesProps.Jsii$Proxy.class)
public interface InstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * @return a {@link Builder} of {@link InstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstancesProps> {

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstancesProps {

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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kms.datasource.InstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }
    }
}
