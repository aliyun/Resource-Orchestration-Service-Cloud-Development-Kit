package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceConnection`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:43.192Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceConnectionProps")
@software.amazon.jsii.Jsii.Proxy(RosPeeringRouterInterfaceConnectionProps.Jsii$Proxy.class)
public interface RosPeeringRouterInterfaceConnectionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOppositeInterfaceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouterInterfaceId();

    /**
     * @return a {@link Builder} of {@link RosPeeringRouterInterfaceConnectionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPeeringRouterInterfaceConnectionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPeeringRouterInterfaceConnectionProps> {
        private java.lang.Object oppositeInterfaceId;
        private java.lang.Object routerInterfaceId;

        /**
         * Sets the value of {@link RosPeeringRouterInterfaceConnectionProps#getOppositeInterfaceId}
         * @param oppositeInterfaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder oppositeInterfaceId(java.lang.String oppositeInterfaceId) {
            this.oppositeInterfaceId = oppositeInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosPeeringRouterInterfaceConnectionProps#getOppositeInterfaceId}
         * @param oppositeInterfaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder oppositeInterfaceId(com.aliyun.ros.cdk.core.IResolvable oppositeInterfaceId) {
            this.oppositeInterfaceId = oppositeInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosPeeringRouterInterfaceConnectionProps#getRouterInterfaceId}
         * @param routerInterfaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routerInterfaceId(java.lang.String routerInterfaceId) {
            this.routerInterfaceId = routerInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosPeeringRouterInterfaceConnectionProps#getRouterInterfaceId}
         * @param routerInterfaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routerInterfaceId(com.aliyun.ros.cdk.core.IResolvable routerInterfaceId) {
            this.routerInterfaceId = routerInterfaceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPeeringRouterInterfaceConnectionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPeeringRouterInterfaceConnectionProps build() {
            return new Jsii$Proxy(oppositeInterfaceId, routerInterfaceId);
        }
    }

    /**
     * An implementation for {@link RosPeeringRouterInterfaceConnectionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPeeringRouterInterfaceConnectionProps {
        private final java.lang.Object oppositeInterfaceId;
        private final java.lang.Object routerInterfaceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.oppositeInterfaceId = software.amazon.jsii.Kernel.get(this, "oppositeInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routerInterfaceId = software.amazon.jsii.Kernel.get(this, "routerInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object oppositeInterfaceId, final java.lang.Object routerInterfaceId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.oppositeInterfaceId = java.util.Objects.requireNonNull(oppositeInterfaceId, "oppositeInterfaceId is required");
            this.routerInterfaceId = java.util.Objects.requireNonNull(routerInterfaceId, "routerInterfaceId is required");
        }

        @Override
        public final java.lang.Object getOppositeInterfaceId() {
            return this.oppositeInterfaceId;
        }

        @Override
        public final java.lang.Object getRouterInterfaceId() {
            return this.routerInterfaceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("oppositeInterfaceId", om.valueToTree(this.getOppositeInterfaceId()));
            data.set("routerInterfaceId", om.valueToTree(this.getRouterInterfaceId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceConnectionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPeeringRouterInterfaceConnectionProps.Jsii$Proxy that = (RosPeeringRouterInterfaceConnectionProps.Jsii$Proxy) o;

            if (!oppositeInterfaceId.equals(that.oppositeInterfaceId)) return false;
            return this.routerInterfaceId.equals(that.routerInterfaceId);
        }

        @Override
        public final int hashCode() {
            int result = this.oppositeInterfaceId.hashCode();
            result = 31 * result + (this.routerInterfaceId.hashCode());
            return result;
        }
    }
}
