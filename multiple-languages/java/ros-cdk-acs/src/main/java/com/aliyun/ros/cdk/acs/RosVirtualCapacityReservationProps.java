package com.aliyun.ros.cdk.acs;

/**
 * Properties for defining a <code>RosVirtualCapacityReservation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-virtualcapacityreservation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.391Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.acs.$Module.class, fqn = "@alicloud/ros-cdk-acs.RosVirtualCapacityReservationProps")
@software.amazon.jsii.Jsii.Proxy(RosVirtualCapacityReservationProps.Jsii$Proxy.class)
public interface RosVirtualCapacityReservationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPodPostpaidSpec() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVirtualCapacityReservationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVirtualCapacityReservationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVirtualCapacityReservationProps> {
        java.lang.Object podPostpaidSpec;

        /**
         * Sets the value of {@link RosVirtualCapacityReservationProps#getPodPostpaidSpec}
         * @param podPostpaidSpec the value to be set.
         * @return {@code this}
         */
        public Builder podPostpaidSpec(com.aliyun.ros.cdk.core.IResolvable podPostpaidSpec) {
            this.podPostpaidSpec = podPostpaidSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualCapacityReservationProps#getPodPostpaidSpec}
         * @param podPostpaidSpec the value to be set.
         * @return {@code this}
         */
        public Builder podPostpaidSpec(com.aliyun.ros.cdk.acs.RosVirtualCapacityReservation.PodPostpaidSpecProperty podPostpaidSpec) {
            this.podPostpaidSpec = podPostpaidSpec;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVirtualCapacityReservationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVirtualCapacityReservationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVirtualCapacityReservationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVirtualCapacityReservationProps {
        private final java.lang.Object podPostpaidSpec;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.podPostpaidSpec = software.amazon.jsii.Kernel.get(this, "podPostpaidSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.podPostpaidSpec = builder.podPostpaidSpec;
        }

        @Override
        public final java.lang.Object getPodPostpaidSpec() {
            return this.podPostpaidSpec;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getPodPostpaidSpec() != null) {
                data.set("podPostpaidSpec", om.valueToTree(this.getPodPostpaidSpec()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-acs.RosVirtualCapacityReservationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVirtualCapacityReservationProps.Jsii$Proxy that = (RosVirtualCapacityReservationProps.Jsii$Proxy) o;

            return this.podPostpaidSpec != null ? this.podPostpaidSpec.equals(that.podPostpaidSpec) : that.podPostpaidSpec == null;
        }

        @Override
        public final int hashCode() {
            int result = this.podPostpaidSpec != null ? this.podPostpaidSpec.hashCode() : 0;
            return result;
        }
    }
}
