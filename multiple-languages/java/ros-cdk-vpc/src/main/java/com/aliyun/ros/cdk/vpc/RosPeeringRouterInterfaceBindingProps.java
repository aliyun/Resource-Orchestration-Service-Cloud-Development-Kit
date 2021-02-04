package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceBinding`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.485Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceBindingProps")
@software.amazon.jsii.Jsii.Proxy(RosPeeringRouterInterfaceBindingProps.Jsii$Proxy.class)
public interface RosPeeringRouterInterfaceBindingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getOppositeInterfaceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRouterInterfaceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOppositeInterfaceOwnerId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOppositeRouterId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPeeringRouterInterfaceBindingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPeeringRouterInterfaceBindingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPeeringRouterInterfaceBindingProps> {
        private java.lang.String oppositeInterfaceId;
        private java.lang.String routerInterfaceId;
        private java.lang.String oppositeInterfaceOwnerId;
        private java.lang.String oppositeRouterId;

        /**
         * Sets the value of {@link RosPeeringRouterInterfaceBindingProps#getOppositeInterfaceId}
         * @param oppositeInterfaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder oppositeInterfaceId(java.lang.String oppositeInterfaceId) {
            this.oppositeInterfaceId = oppositeInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosPeeringRouterInterfaceBindingProps#getRouterInterfaceId}
         * @param routerInterfaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routerInterfaceId(java.lang.String routerInterfaceId) {
            this.routerInterfaceId = routerInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosPeeringRouterInterfaceBindingProps#getOppositeInterfaceOwnerId}
         * @param oppositeInterfaceOwnerId the value to be set.
         * @return {@code this}
         */
        public Builder oppositeInterfaceOwnerId(java.lang.String oppositeInterfaceOwnerId) {
            this.oppositeInterfaceOwnerId = oppositeInterfaceOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link RosPeeringRouterInterfaceBindingProps#getOppositeRouterId}
         * @param oppositeRouterId the value to be set.
         * @return {@code this}
         */
        public Builder oppositeRouterId(java.lang.String oppositeRouterId) {
            this.oppositeRouterId = oppositeRouterId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPeeringRouterInterfaceBindingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPeeringRouterInterfaceBindingProps build() {
            return new Jsii$Proxy(oppositeInterfaceId, routerInterfaceId, oppositeInterfaceOwnerId, oppositeRouterId);
        }
    }

    /**
     * An implementation for {@link RosPeeringRouterInterfaceBindingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPeeringRouterInterfaceBindingProps {
        private final java.lang.String oppositeInterfaceId;
        private final java.lang.String routerInterfaceId;
        private final java.lang.String oppositeInterfaceOwnerId;
        private final java.lang.String oppositeRouterId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.oppositeInterfaceId = software.amazon.jsii.Kernel.get(this, "oppositeInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.routerInterfaceId = software.amazon.jsii.Kernel.get(this, "routerInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.oppositeInterfaceOwnerId = software.amazon.jsii.Kernel.get(this, "oppositeInterfaceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.oppositeRouterId = software.amazon.jsii.Kernel.get(this, "oppositeRouterId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String oppositeInterfaceId, final java.lang.String routerInterfaceId, final java.lang.String oppositeInterfaceOwnerId, final java.lang.String oppositeRouterId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.oppositeInterfaceId = java.util.Objects.requireNonNull(oppositeInterfaceId, "oppositeInterfaceId is required");
            this.routerInterfaceId = java.util.Objects.requireNonNull(routerInterfaceId, "routerInterfaceId is required");
            this.oppositeInterfaceOwnerId = oppositeInterfaceOwnerId;
            this.oppositeRouterId = oppositeRouterId;
        }

        @Override
        public final java.lang.String getOppositeInterfaceId() {
            return this.oppositeInterfaceId;
        }

        @Override
        public final java.lang.String getRouterInterfaceId() {
            return this.routerInterfaceId;
        }

        @Override
        public final java.lang.String getOppositeInterfaceOwnerId() {
            return this.oppositeInterfaceOwnerId;
        }

        @Override
        public final java.lang.String getOppositeRouterId() {
            return this.oppositeRouterId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("oppositeInterfaceId", om.valueToTree(this.getOppositeInterfaceId()));
            data.set("routerInterfaceId", om.valueToTree(this.getRouterInterfaceId()));
            if (this.getOppositeInterfaceOwnerId() != null) {
                data.set("oppositeInterfaceOwnerId", om.valueToTree(this.getOppositeInterfaceOwnerId()));
            }
            if (this.getOppositeRouterId() != null) {
                data.set("oppositeRouterId", om.valueToTree(this.getOppositeRouterId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceBindingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPeeringRouterInterfaceBindingProps.Jsii$Proxy that = (RosPeeringRouterInterfaceBindingProps.Jsii$Proxy) o;

            if (!oppositeInterfaceId.equals(that.oppositeInterfaceId)) return false;
            if (!routerInterfaceId.equals(that.routerInterfaceId)) return false;
            if (this.oppositeInterfaceOwnerId != null ? !this.oppositeInterfaceOwnerId.equals(that.oppositeInterfaceOwnerId) : that.oppositeInterfaceOwnerId != null) return false;
            return this.oppositeRouterId != null ? this.oppositeRouterId.equals(that.oppositeRouterId) : that.oppositeRouterId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.oppositeInterfaceId.hashCode();
            result = 31 * result + (this.routerInterfaceId.hashCode());
            result = 31 * result + (this.oppositeInterfaceOwnerId != null ? this.oppositeInterfaceOwnerId.hashCode() : 0);
            result = 31 * result + (this.oppositeRouterId != null ? this.oppositeRouterId.hashCode() : 0);
            return result;
        }
    }
}
