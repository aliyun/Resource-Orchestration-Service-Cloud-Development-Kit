package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>RosTransitRouterRouteTable</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetable
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:02.491Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosTransitRouterRouteTableProps")
@software.amazon.jsii.Jsii.Proxy(RosTransitRouterRouteTableProps.Jsii$Proxy.class)
public interface RosTransitRouterRouteTableProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteTableDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteTableName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTransitRouterRouteTableProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTransitRouterRouteTableProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTransitRouterRouteTableProps> {
        java.lang.Object transitRouterId;
        java.lang.Object transitRouterRouteTableDescription;
        java.lang.Object transitRouterRouteTableName;

        /**
         * Sets the value of {@link RosTransitRouterRouteTableProps#getTransitRouterId}
         * @param transitRouterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterId(java.lang.String transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterRouteTableProps#getTransitRouterId}
         * @param transitRouterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterId(com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterRouteTableProps#getTransitRouterRouteTableDescription}
         * @param transitRouterRouteTableDescription the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableDescription(java.lang.String transitRouterRouteTableDescription) {
            this.transitRouterRouteTableDescription = transitRouterRouteTableDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterRouteTableProps#getTransitRouterRouteTableDescription}
         * @param transitRouterRouteTableDescription the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableDescription(com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableDescription) {
            this.transitRouterRouteTableDescription = transitRouterRouteTableDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterRouteTableProps#getTransitRouterRouteTableName}
         * @param transitRouterRouteTableName the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableName(java.lang.String transitRouterRouteTableName) {
            this.transitRouterRouteTableName = transitRouterRouteTableName;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterRouteTableProps#getTransitRouterRouteTableName}
         * @param transitRouterRouteTableName the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableName(com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableName) {
            this.transitRouterRouteTableName = transitRouterRouteTableName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTransitRouterRouteTableProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTransitRouterRouteTableProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTransitRouterRouteTableProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTransitRouterRouteTableProps {
        private final java.lang.Object transitRouterId;
        private final java.lang.Object transitRouterRouteTableDescription;
        private final java.lang.Object transitRouterRouteTableName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.transitRouterId = software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterRouteTableDescription = software.amazon.jsii.Kernel.get(this, "transitRouterRouteTableDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterRouteTableName = software.amazon.jsii.Kernel.get(this, "transitRouterRouteTableName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.transitRouterId = java.util.Objects.requireNonNull(builder.transitRouterId, "transitRouterId is required");
            this.transitRouterRouteTableDescription = builder.transitRouterRouteTableDescription;
            this.transitRouterRouteTableName = builder.transitRouterRouteTableName;
        }

        @Override
        public final java.lang.Object getTransitRouterId() {
            return this.transitRouterId;
        }

        @Override
        public final java.lang.Object getTransitRouterRouteTableDescription() {
            return this.transitRouterRouteTableDescription;
        }

        @Override
        public final java.lang.Object getTransitRouterRouteTableName() {
            return this.transitRouterRouteTableName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("transitRouterId", om.valueToTree(this.getTransitRouterId()));
            if (this.getTransitRouterRouteTableDescription() != null) {
                data.set("transitRouterRouteTableDescription", om.valueToTree(this.getTransitRouterRouteTableDescription()));
            }
            if (this.getTransitRouterRouteTableName() != null) {
                data.set("transitRouterRouteTableName", om.valueToTree(this.getTransitRouterRouteTableName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RosTransitRouterRouteTableProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTransitRouterRouteTableProps.Jsii$Proxy that = (RosTransitRouterRouteTableProps.Jsii$Proxy) o;

            if (!transitRouterId.equals(that.transitRouterId)) return false;
            if (this.transitRouterRouteTableDescription != null ? !this.transitRouterRouteTableDescription.equals(that.transitRouterRouteTableDescription) : that.transitRouterRouteTableDescription != null) return false;
            return this.transitRouterRouteTableName != null ? this.transitRouterRouteTableName.equals(that.transitRouterRouteTableName) : that.transitRouterRouteTableName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.transitRouterId.hashCode();
            result = 31 * result + (this.transitRouterRouteTableDescription != null ? this.transitRouterRouteTableDescription.hashCode() : 0);
            result = 31 * result + (this.transitRouterRouteTableName != null ? this.transitRouterRouteTableName.hashCode() : 0);
            return result;
        }
    }
}
