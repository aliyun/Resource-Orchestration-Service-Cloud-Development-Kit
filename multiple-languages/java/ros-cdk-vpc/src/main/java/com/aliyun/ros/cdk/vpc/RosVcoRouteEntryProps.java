package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosVcoRouteEntry</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vcorouteentry
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:30.607Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVcoRouteEntryProps")
@software.amazon.jsii.Jsii.Proxy(RosVcoRouteEntryProps.Jsii$Proxy.class)
public interface RosVcoRouteEntryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNextHop();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouteDest();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpnConnectionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWeight();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVcoRouteEntryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVcoRouteEntryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVcoRouteEntryProps> {
        java.lang.Object nextHop;
        java.lang.Object routeDest;
        java.lang.Object vpnConnectionId;
        java.lang.Object weight;
        java.lang.Object description;

        /**
         * Sets the value of {@link RosVcoRouteEntryProps#getNextHop}
         * @param nextHop the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nextHop(java.lang.String nextHop) {
            this.nextHop = nextHop;
            return this;
        }

        /**
         * Sets the value of {@link RosVcoRouteEntryProps#getNextHop}
         * @param nextHop the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nextHop(com.aliyun.ros.cdk.core.IResolvable nextHop) {
            this.nextHop = nextHop;
            return this;
        }

        /**
         * Sets the value of {@link RosVcoRouteEntryProps#getRouteDest}
         * @param routeDest the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeDest(java.lang.String routeDest) {
            this.routeDest = routeDest;
            return this;
        }

        /**
         * Sets the value of {@link RosVcoRouteEntryProps#getRouteDest}
         * @param routeDest the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeDest(com.aliyun.ros.cdk.core.IResolvable routeDest) {
            this.routeDest = routeDest;
            return this;
        }

        /**
         * Sets the value of {@link RosVcoRouteEntryProps#getVpnConnectionId}
         * @param vpnConnectionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnConnectionId(java.lang.String vpnConnectionId) {
            this.vpnConnectionId = vpnConnectionId;
            return this;
        }

        /**
         * Sets the value of {@link RosVcoRouteEntryProps#getVpnConnectionId}
         * @param vpnConnectionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnConnectionId(com.aliyun.ros.cdk.core.IResolvable vpnConnectionId) {
            this.vpnConnectionId = vpnConnectionId;
            return this;
        }

        /**
         * Sets the value of {@link RosVcoRouteEntryProps#getWeight}
         * @param weight the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder weight(java.lang.Number weight) {
            this.weight = weight;
            return this;
        }

        /**
         * Sets the value of {@link RosVcoRouteEntryProps#getWeight}
         * @param weight the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder weight(com.aliyun.ros.cdk.core.IResolvable weight) {
            this.weight = weight;
            return this;
        }

        /**
         * Sets the value of {@link RosVcoRouteEntryProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosVcoRouteEntryProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVcoRouteEntryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVcoRouteEntryProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVcoRouteEntryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVcoRouteEntryProps {
        private final java.lang.Object nextHop;
        private final java.lang.Object routeDest;
        private final java.lang.Object vpnConnectionId;
        private final java.lang.Object weight;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.nextHop = software.amazon.jsii.Kernel.get(this, "nextHop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeDest = software.amazon.jsii.Kernel.get(this, "routeDest", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpnConnectionId = software.amazon.jsii.Kernel.get(this, "vpnConnectionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.weight = software.amazon.jsii.Kernel.get(this, "weight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.nextHop = java.util.Objects.requireNonNull(builder.nextHop, "nextHop is required");
            this.routeDest = java.util.Objects.requireNonNull(builder.routeDest, "routeDest is required");
            this.vpnConnectionId = java.util.Objects.requireNonNull(builder.vpnConnectionId, "vpnConnectionId is required");
            this.weight = java.util.Objects.requireNonNull(builder.weight, "weight is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getNextHop() {
            return this.nextHop;
        }

        @Override
        public final java.lang.Object getRouteDest() {
            return this.routeDest;
        }

        @Override
        public final java.lang.Object getVpnConnectionId() {
            return this.vpnConnectionId;
        }

        @Override
        public final java.lang.Object getWeight() {
            return this.weight;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("nextHop", om.valueToTree(this.getNextHop()));
            data.set("routeDest", om.valueToTree(this.getRouteDest()));
            data.set("vpnConnectionId", om.valueToTree(this.getVpnConnectionId()));
            data.set("weight", om.valueToTree(this.getWeight()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVcoRouteEntryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVcoRouteEntryProps.Jsii$Proxy that = (RosVcoRouteEntryProps.Jsii$Proxy) o;

            if (!nextHop.equals(that.nextHop)) return false;
            if (!routeDest.equals(that.routeDest)) return false;
            if (!vpnConnectionId.equals(that.vpnConnectionId)) return false;
            if (!weight.equals(that.weight)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.nextHop.hashCode();
            result = 31 * result + (this.routeDest.hashCode());
            result = 31 * result + (this.vpnConnectionId.hashCode());
            result = 31 * result + (this.weight.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
