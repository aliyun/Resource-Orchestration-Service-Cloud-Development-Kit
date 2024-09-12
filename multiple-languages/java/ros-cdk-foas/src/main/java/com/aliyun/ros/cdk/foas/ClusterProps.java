package com.aliyun.ros.cdk.foas;

/**
 * Properties for defining a <code>Cluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-cluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:27.477Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.foas.$Module.class, fqn = "@alicloud/ros-cdk-foas.ClusterProps")
@software.amazon.jsii.Jsii.Proxy(ClusterProps.Jsii$Proxy.class)
public interface ClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterName: Cluster name.
     * <p>
     * It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterName();

    /**
     * Property description: Cluster description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     * Property ossBucket: Bucket name in your OSS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOssBucket();

    /**
     * Property vSwitchId: VSwitch ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property order: Order detail.
     * <p>
     * Only one of property Order or OrderId can be specified.
     * Order is not suggested.
     * Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
     * The order can not be cancelled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOrder() {
        return null;
    }

    /**
     * Property orderId: Order Id.
     * <p>
     * Only one of property Order or OrderId can be specified.
     * OrderId is suggested.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOrderId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterProps> {
        java.lang.Object clusterName;
        java.lang.Object description;
        java.lang.Object ossBucket;
        java.lang.Object vSwitchId;
        java.lang.Object order;
        java.lang.Object orderId;

        /**
         * Sets the value of {@link ClusterProps#getClusterName}
         * @param clusterName Property clusterName: Cluster name. This parameter is required.
         *                    It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
         * @return {@code this}
         */
        public Builder clusterName(java.lang.String clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterName}
         * @param clusterName Property clusterName: Cluster name. This parameter is required.
         *                    It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
         * @return {@code this}
         */
        public Builder clusterName(com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDescription}
         * @param description Property description: Cluster description. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDescription}
         * @param description Property description: Cluster description. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getOssBucket}
         * @param ossBucket Property ossBucket: Bucket name in your OSS. This parameter is required.
         * @return {@code this}
         */
        public Builder ossBucket(java.lang.String ossBucket) {
            this.ossBucket = ossBucket;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getOssBucket}
         * @param ossBucket Property ossBucket: Bucket name in your OSS. This parameter is required.
         * @return {@code this}
         */
        public Builder ossBucket(com.aliyun.ros.cdk.core.IResolvable ossBucket) {
            this.ossBucket = ossBucket;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getOrder}
         * @param order Property order: Order detail.
         *              Only one of property Order or OrderId can be specified.
         *              Order is not suggested.
         *              Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
         *              The order can not be cancelled.
         * @return {@code this}
         */
        public Builder order(com.aliyun.ros.cdk.core.IResolvable order) {
            this.order = order;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getOrder}
         * @param order Property order: Order detail.
         *              Only one of property Order or OrderId can be specified.
         *              Order is not suggested.
         *              Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
         *              The order can not be cancelled.
         * @return {@code this}
         */
        public Builder order(com.aliyun.ros.cdk.foas.RosCluster.OrderProperty order) {
            this.order = order;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getOrderId}
         * @param orderId Property orderId: Order Id.
         *                Only one of property Order or OrderId can be specified.
         *                OrderId is suggested.
         * @return {@code this}
         */
        public Builder orderId(java.lang.String orderId) {
            this.orderId = orderId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getOrderId}
         * @param orderId Property orderId: Order Id.
         *                Only one of property Order or OrderId can be specified.
         *                OrderId is suggested.
         * @return {@code this}
         */
        public Builder orderId(com.aliyun.ros.cdk.core.IResolvable orderId) {
            this.orderId = orderId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterProps {
        private final java.lang.Object clusterName;
        private final java.lang.Object description;
        private final java.lang.Object ossBucket;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object order;
        private final java.lang.Object orderId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterName = software.amazon.jsii.Kernel.get(this, "clusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossBucket = software.amazon.jsii.Kernel.get(this, "ossBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.order = software.amazon.jsii.Kernel.get(this, "order", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.orderId = software.amazon.jsii.Kernel.get(this, "orderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterName = java.util.Objects.requireNonNull(builder.clusterName, "clusterName is required");
            this.description = java.util.Objects.requireNonNull(builder.description, "description is required");
            this.ossBucket = java.util.Objects.requireNonNull(builder.ossBucket, "ossBucket is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.order = builder.order;
            this.orderId = builder.orderId;
        }

        @Override
        public final java.lang.Object getClusterName() {
            return this.clusterName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getOssBucket() {
            return this.ossBucket;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getOrder() {
            return this.order;
        }

        @Override
        public final java.lang.Object getOrderId() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-foas.ClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterProps.Jsii$Proxy that = (ClusterProps.Jsii$Proxy) o;

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
