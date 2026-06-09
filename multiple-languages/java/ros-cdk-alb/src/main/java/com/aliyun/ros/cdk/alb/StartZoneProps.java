package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a <code>StartZone</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-startzone
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:22:24.298Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.StartZoneProps")
@software.amazon.jsii.Jsii.Proxy(StartZoneProps.Jsii$Proxy.class)
public interface StartZoneProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property loadBalancerId: The ID of the ALB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     * Property zoneMappings: The list of zone mappings.
     * <p>
     * Each element contains VSwitchId and ZoneId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneMappings();

    /**
     * @return a {@link Builder} of {@link StartZoneProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link StartZoneProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<StartZoneProps> {
        java.lang.Object loadBalancerId;
        java.lang.Object zoneMappings;

        /**
         * Sets the value of {@link StartZoneProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The ID of the ALB instance. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link StartZoneProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The ID of the ALB instance. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link StartZoneProps#getZoneMappings}
         * @param zoneMappings Property zoneMappings: The list of zone mappings. This parameter is required.
         *                     Each element contains VSwitchId and ZoneId.
         * @return {@code this}
         */
        public Builder zoneMappings(com.aliyun.ros.cdk.core.IResolvable zoneMappings) {
            this.zoneMappings = zoneMappings;
            return this;
        }

        /**
         * Sets the value of {@link StartZoneProps#getZoneMappings}
         * @param zoneMappings Property zoneMappings: The list of zone mappings. This parameter is required.
         *                     Each element contains VSwitchId and ZoneId.
         * @return {@code this}
         */
        public Builder zoneMappings(java.util.List<? extends java.lang.Object> zoneMappings) {
            this.zoneMappings = zoneMappings;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link StartZoneProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public StartZoneProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link StartZoneProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StartZoneProps {
        private final java.lang.Object loadBalancerId;
        private final java.lang.Object zoneMappings;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneMappings = software.amazon.jsii.Kernel.get(this, "zoneMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.loadBalancerId = java.util.Objects.requireNonNull(builder.loadBalancerId, "loadBalancerId is required");
            this.zoneMappings = java.util.Objects.requireNonNull(builder.zoneMappings, "zoneMappings is required");
        }

        @Override
        public final java.lang.Object getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.Object getZoneMappings() {
            return this.zoneMappings;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            data.set("zoneMappings", om.valueToTree(this.getZoneMappings()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.StartZoneProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            StartZoneProps.Jsii$Proxy that = (StartZoneProps.Jsii$Proxy) o;

            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            return this.zoneMappings.equals(that.zoneMappings);
        }

        @Override
        public final int hashCode() {
            int result = this.loadBalancerId.hashCode();
            result = 31 * result + (this.zoneMappings.hashCode());
            return result;
        }
    }
}
