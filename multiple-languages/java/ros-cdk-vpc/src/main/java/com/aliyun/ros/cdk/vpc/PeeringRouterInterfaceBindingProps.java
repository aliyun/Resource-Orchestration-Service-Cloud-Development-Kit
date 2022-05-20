package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceBinding`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:03.811Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.PeeringRouterInterfaceBindingProps")
@software.amazon.jsii.Jsii.Proxy(PeeringRouterInterfaceBindingProps.Jsii$Proxy.class)
public interface PeeringRouterInterfaceBindingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property oppositeInterfaceId: The connection peer RouterInterface ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOppositeInterfaceId();

    /**
     * Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouterInterfaceId();

    /**
     * Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOppositeInterfaceOwnerId() {
        return null;
    }

    /**
     * Property oppositeRouterId: Router ID of the connection peer RouterInterface.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOppositeRouterId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PeeringRouterInterfaceBindingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PeeringRouterInterfaceBindingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PeeringRouterInterfaceBindingProps> {
        java.lang.Object oppositeInterfaceId;
        java.lang.Object routerInterfaceId;
        java.lang.Object oppositeInterfaceOwnerId;
        java.lang.Object oppositeRouterId;

        /**
         * Sets the value of {@link PeeringRouterInterfaceBindingProps#getOppositeInterfaceId}
         * @param oppositeInterfaceId Property oppositeInterfaceId: The connection peer RouterInterface ID. This parameter is required.
         * @return {@code this}
         */
        public Builder oppositeInterfaceId(java.lang.String oppositeInterfaceId) {
            this.oppositeInterfaceId = oppositeInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link PeeringRouterInterfaceBindingProps#getOppositeInterfaceId}
         * @param oppositeInterfaceId Property oppositeInterfaceId: The connection peer RouterInterface ID. This parameter is required.
         * @return {@code this}
         */
        public Builder oppositeInterfaceId(com.aliyun.ros.cdk.core.IResolvable oppositeInterfaceId) {
            this.oppositeInterfaceId = oppositeInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link PeeringRouterInterfaceBindingProps#getRouterInterfaceId}
         * @param routerInterfaceId Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface. This parameter is required.
         * @return {@code this}
         */
        public Builder routerInterfaceId(java.lang.String routerInterfaceId) {
            this.routerInterfaceId = routerInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link PeeringRouterInterfaceBindingProps#getRouterInterfaceId}
         * @param routerInterfaceId Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface. This parameter is required.
         * @return {@code this}
         */
        public Builder routerInterfaceId(com.aliyun.ros.cdk.core.IResolvable routerInterfaceId) {
            this.routerInterfaceId = routerInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link PeeringRouterInterfaceBindingProps#getOppositeInterfaceOwnerId}
         * @param oppositeInterfaceOwnerId Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
         * @return {@code this}
         */
        public Builder oppositeInterfaceOwnerId(java.lang.String oppositeInterfaceOwnerId) {
            this.oppositeInterfaceOwnerId = oppositeInterfaceOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link PeeringRouterInterfaceBindingProps#getOppositeInterfaceOwnerId}
         * @param oppositeInterfaceOwnerId Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
         * @return {@code this}
         */
        public Builder oppositeInterfaceOwnerId(com.aliyun.ros.cdk.core.IResolvable oppositeInterfaceOwnerId) {
            this.oppositeInterfaceOwnerId = oppositeInterfaceOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link PeeringRouterInterfaceBindingProps#getOppositeRouterId}
         * @param oppositeRouterId Property oppositeRouterId: Router ID of the connection peer RouterInterface.
         * @return {@code this}
         */
        public Builder oppositeRouterId(java.lang.String oppositeRouterId) {
            this.oppositeRouterId = oppositeRouterId;
            return this;
        }

        /**
         * Sets the value of {@link PeeringRouterInterfaceBindingProps#getOppositeRouterId}
         * @param oppositeRouterId Property oppositeRouterId: Router ID of the connection peer RouterInterface.
         * @return {@code this}
         */
        public Builder oppositeRouterId(com.aliyun.ros.cdk.core.IResolvable oppositeRouterId) {
            this.oppositeRouterId = oppositeRouterId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PeeringRouterInterfaceBindingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PeeringRouterInterfaceBindingProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PeeringRouterInterfaceBindingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PeeringRouterInterfaceBindingProps {
        private final java.lang.Object oppositeInterfaceId;
        private final java.lang.Object routerInterfaceId;
        private final java.lang.Object oppositeInterfaceOwnerId;
        private final java.lang.Object oppositeRouterId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.oppositeInterfaceId = software.amazon.jsii.Kernel.get(this, "oppositeInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routerInterfaceId = software.amazon.jsii.Kernel.get(this, "routerInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.oppositeInterfaceOwnerId = software.amazon.jsii.Kernel.get(this, "oppositeInterfaceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.oppositeRouterId = software.amazon.jsii.Kernel.get(this, "oppositeRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.oppositeInterfaceId = java.util.Objects.requireNonNull(builder.oppositeInterfaceId, "oppositeInterfaceId is required");
            this.routerInterfaceId = java.util.Objects.requireNonNull(builder.routerInterfaceId, "routerInterfaceId is required");
            this.oppositeInterfaceOwnerId = builder.oppositeInterfaceOwnerId;
            this.oppositeRouterId = builder.oppositeRouterId;
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
        public final java.lang.Object getOppositeInterfaceOwnerId() {
            return this.oppositeInterfaceOwnerId;
        }

        @Override
        public final java.lang.Object getOppositeRouterId() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.PeeringRouterInterfaceBindingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PeeringRouterInterfaceBindingProps.Jsii$Proxy that = (PeeringRouterInterfaceBindingProps.Jsii$Proxy) o;

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
