package com.aliyun.ros.cdk.dts;

/**
 * Properties for defining a `ALIYUN::DTS::SubscriptionInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.108Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSubscriptionInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosSubscriptionInstanceProps.Jsii$Proxy.class)
public interface RosSubscriptionInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceEndpointInstanceType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSubscriptionInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSubscriptionInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSubscriptionInstanceProps> {
        private java.lang.Object configuration;
        private java.lang.Object sourceEndpointInstanceType;

        /**
         * Sets the value of {@link RosSubscriptionInstanceProps#getConfiguration}
         * @param configuration the value to be set.
         * @return {@code this}
         */
        public Builder configuration(com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionInstanceProps#getConfiguration}
         * @param configuration the value to be set.
         * @return {@code this}
         */
        public Builder configuration(com.aliyun.ros.cdk.dts.RosSubscriptionInstance.ConfigurationProperty configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionInstanceProps#getSourceEndpointInstanceType}
         * @param sourceEndpointInstanceType the value to be set.
         * @return {@code this}
         */
        public Builder sourceEndpointInstanceType(java.lang.String sourceEndpointInstanceType) {
            this.sourceEndpointInstanceType = sourceEndpointInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionInstanceProps#getSourceEndpointInstanceType}
         * @param sourceEndpointInstanceType the value to be set.
         * @return {@code this}
         */
        public Builder sourceEndpointInstanceType(com.aliyun.ros.cdk.core.IResolvable sourceEndpointInstanceType) {
            this.sourceEndpointInstanceType = sourceEndpointInstanceType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSubscriptionInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSubscriptionInstanceProps build() {
            return new Jsii$Proxy(configuration, sourceEndpointInstanceType);
        }
    }

    /**
     * An implementation for {@link RosSubscriptionInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSubscriptionInstanceProps {
        private final java.lang.Object configuration;
        private final java.lang.Object sourceEndpointInstanceType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.configuration = software.amazon.jsii.Kernel.get(this, "configuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceEndpointInstanceType = software.amazon.jsii.Kernel.get(this, "sourceEndpointInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object configuration, final java.lang.Object sourceEndpointInstanceType) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.configuration = configuration;
            this.sourceEndpointInstanceType = sourceEndpointInstanceType;
        }

        @Override
        public final java.lang.Object getConfiguration() {
            return this.configuration;
        }

        @Override
        public final java.lang.Object getSourceEndpointInstanceType() {
            return this.sourceEndpointInstanceType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getConfiguration() != null) {
                data.set("configuration", om.valueToTree(this.getConfiguration()));
            }
            if (this.getSourceEndpointInstanceType() != null) {
                data.set("sourceEndpointInstanceType", om.valueToTree(this.getSourceEndpointInstanceType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSubscriptionInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSubscriptionInstanceProps.Jsii$Proxy that = (RosSubscriptionInstanceProps.Jsii$Proxy) o;

            if (this.configuration != null ? !this.configuration.equals(that.configuration) : that.configuration != null) return false;
            return this.sourceEndpointInstanceType != null ? this.sourceEndpointInstanceType.equals(that.sourceEndpointInstanceType) : that.sourceEndpointInstanceType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.configuration != null ? this.configuration.hashCode() : 0;
            result = 31 * result + (this.sourceEndpointInstanceType != null ? this.sourceEndpointInstanceType.hashCode() : 0);
            return result;
        }
    }
}
