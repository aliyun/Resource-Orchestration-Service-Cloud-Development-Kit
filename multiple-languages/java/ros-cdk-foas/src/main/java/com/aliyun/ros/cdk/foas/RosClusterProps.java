package com.aliyun.ros.cdk.foas;

/**
 * Properties for defining a `ALIYUN::FOAS::Cluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.988Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.foas.$Module.class, fqn = "@alicloud/ros-cdk-foas.RosClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosClusterProps.Jsii$Proxy.class)
public interface RosClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getClusterName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getOssBucket();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVSwitchId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOrder() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOrderId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosClusterProps> {
        private java.lang.String clusterName;
        private java.lang.String description;
        private java.lang.String ossBucket;
        private java.lang.String vSwitchId;
        private java.lang.Object order;
        private java.lang.String orderId;

        /**
         * Sets the value of {@link RosClusterProps#getClusterName}
         * @param clusterName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterName(java.lang.String clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getOssBucket}
         * @param ossBucket the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ossBucket(java.lang.String ossBucket) {
            this.ossBucket = ossBucket;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getOrder}
         * @param order the value to be set.
         * @return {@code this}
         */
        public Builder order(com.aliyun.ros.cdk.foas.RosCluster.OrderProperty order) {
            this.order = order;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getOrder}
         * @param order the value to be set.
         * @return {@code this}
         */
        public Builder order(com.aliyun.ros.cdk.core.IResolvable order) {
            this.order = order;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getOrderId}
         * @param orderId the value to be set.
         * @return {@code this}
         */
        public Builder orderId(java.lang.String orderId) {
            this.orderId = orderId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosClusterProps build() {
            return new Jsii$Proxy(clusterName, description, ossBucket, vSwitchId, order, orderId);
        }
    }

    /**
     * An implementation for {@link RosClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosClusterProps {
        private final java.lang.String clusterName;
        private final java.lang.String description;
        private final java.lang.String ossBucket;
        private final java.lang.String vSwitchId;
        private final java.lang.Object order;
        private final java.lang.String orderId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterName = software.amazon.jsii.Kernel.get(this, "clusterName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ossBucket = software.amazon.jsii.Kernel.get(this, "ossBucket", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.order = software.amazon.jsii.Kernel.get(this, "order", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.orderId = software.amazon.jsii.Kernel.get(this, "orderId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String clusterName, final java.lang.String description, final java.lang.String ossBucket, final java.lang.String vSwitchId, final java.lang.Object order, final java.lang.String orderId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterName = java.util.Objects.requireNonNull(clusterName, "clusterName is required");
            this.description = java.util.Objects.requireNonNull(description, "description is required");
            this.ossBucket = java.util.Objects.requireNonNull(ossBucket, "ossBucket is required");
            this.vSwitchId = java.util.Objects.requireNonNull(vSwitchId, "vSwitchId is required");
            this.order = order;
            this.orderId = orderId;
        }

        @Override
        public final java.lang.String getClusterName() {
            return this.clusterName;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getOssBucket() {
            return this.ossBucket;
        }

        @Override
        public final java.lang.String getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getOrder() {
            return this.order;
        }

        @Override
        public final java.lang.String getOrderId() {
            return this.orderId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterName", om.valueToTree(this.getClusterName()));
            data.set("description", om.valueToTree(this.getDescription()));
            data.set("ossBucket", om.valueToTree(this.getOssBucket()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getOrder() != null) {
                data.set("order", om.valueToTree(this.getOrder()));
            }
            if (this.getOrderId() != null) {
                data.set("orderId", om.valueToTree(this.getOrderId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-foas.RosClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosClusterProps.Jsii$Proxy that = (RosClusterProps.Jsii$Proxy) o;

            if (!clusterName.equals(that.clusterName)) return false;
            if (!description.equals(that.description)) return false;
            if (!ossBucket.equals(that.ossBucket)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.order != null ? !this.order.equals(that.order) : that.order != null) return false;
            return this.orderId != null ? this.orderId.equals(that.orderId) : that.orderId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterName.hashCode();
            result = 31 * result + (this.description.hashCode());
            result = 31 * result + (this.ossBucket.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.order != null ? this.order.hashCode() : 0);
            result = 31 * result + (this.orderId != null ? this.orderId.hashCode() : 0);
            return result;
        }
    }
}
