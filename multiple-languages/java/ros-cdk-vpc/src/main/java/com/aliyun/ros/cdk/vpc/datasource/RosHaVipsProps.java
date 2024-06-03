package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosHaVips</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:55.082Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosHaVipsProps")
@software.amazon.jsii.Jsii.Proxy(RosHaVipsProps.Jsii$Proxy.class)
public interface RosHaVipsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHaVipId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosHaVipsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosHaVipsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosHaVipsProps> {
        java.lang.Object haVipId;

        /**
         * Sets the value of {@link RosHaVipsProps#getHaVipId}
         * @param haVipId the value to be set.
         * @return {@code this}
         */
        public Builder haVipId(java.lang.String haVipId) {
            this.haVipId = haVipId;
            return this;
        }

        /**
         * Sets the value of {@link RosHaVipsProps#getHaVipId}
         * @param haVipId the value to be set.
         * @return {@code this}
         */
        public Builder haVipId(com.aliyun.ros.cdk.core.IResolvable haVipId) {
            this.haVipId = haVipId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosHaVipsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosHaVipsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosHaVipsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosHaVipsProps {
        private final java.lang.Object haVipId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.haVipId = software.amazon.jsii.Kernel.get(this, "haVipId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.haVipId = builder.haVipId;
        }

        @Override
        public final java.lang.Object getHaVipId() {
            return this.haVipId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getHaVipId() != null) {
                data.set("haVipId", om.valueToTree(this.getHaVipId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosHaVipsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosHaVipsProps.Jsii$Proxy that = (RosHaVipsProps.Jsii$Proxy) o;

            return this.haVipId != null ? this.haVipId.equals(that.haVipId) : that.haVipId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.haVipId != null ? this.haVipId.hashCode() : 0;
            return result;
        }
    }
}
