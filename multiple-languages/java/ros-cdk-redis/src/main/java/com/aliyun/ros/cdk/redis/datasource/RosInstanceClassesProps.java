package com.aliyun.ros.cdk.redis.datasource;

/**
 * Properties for defining a <code>RosInstanceClasses</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instanceclasses
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:11.976Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.datasource.RosInstanceClassesProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceClassesProps.Jsii$Proxy.class)
public interface RosInstanceClassesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcceptLanguage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngine() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNodeId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOrderType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProductType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstanceClassesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstanceClassesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstanceClassesProps> {
        java.lang.Object acceptLanguage;
        java.lang.Object engine;
        java.lang.Object instanceChargeType;
        java.lang.Object instanceId;
        java.lang.Object nodeId;
        java.lang.Object orderType;
        java.lang.Object productType;
        java.lang.Object resourceGroupId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosInstanceClassesProps#getAcceptLanguage}
         * @param acceptLanguage the value to be set.
         * @return {@code this}
         */
        public Builder acceptLanguage(java.lang.String acceptLanguage) {
            this.acceptLanguage = acceptLanguage;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getAcceptLanguage}
         * @param acceptLanguage the value to be set.
         * @return {@code this}
         */
        public Builder acceptLanguage(com.aliyun.ros.cdk.core.IResolvable acceptLanguage) {
            this.acceptLanguage = acceptLanguage;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getEngine}
         * @param engine the value to be set.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getEngine}
         * @param engine the value to be set.
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getNodeId}
         * @param nodeId the value to be set.
         * @return {@code this}
         */
        public Builder nodeId(java.lang.String nodeId) {
            this.nodeId = nodeId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getNodeId}
         * @param nodeId the value to be set.
         * @return {@code this}
         */
        public Builder nodeId(com.aliyun.ros.cdk.core.IResolvable nodeId) {
            this.nodeId = nodeId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getOrderType}
         * @param orderType the value to be set.
         * @return {@code this}
         */
        public Builder orderType(java.lang.String orderType) {
            this.orderType = orderType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getOrderType}
         * @param orderType the value to be set.
         * @return {@code this}
         */
        public Builder orderType(com.aliyun.ros.cdk.core.IResolvable orderType) {
            this.orderType = orderType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getProductType}
         * @param productType the value to be set.
         * @return {@code this}
         */
        public Builder productType(java.lang.String productType) {
            this.productType = productType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getProductType}
         * @param productType the value to be set.
         * @return {@code this}
         */
        public Builder productType(com.aliyun.ros.cdk.core.IResolvable productType) {
            this.productType = productType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceClassesProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstanceClassesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstanceClassesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstanceClassesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceClassesProps {
        private final java.lang.Object acceptLanguage;
        private final java.lang.Object engine;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object instanceId;
        private final java.lang.Object nodeId;
        private final java.lang.Object orderType;
        private final java.lang.Object productType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceptLanguage = software.amazon.jsii.Kernel.get(this, "acceptLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeId = software.amazon.jsii.Kernel.get(this, "nodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.orderType = software.amazon.jsii.Kernel.get(this, "orderType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productType = software.amazon.jsii.Kernel.get(this, "productType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceptLanguage = builder.acceptLanguage;
            this.engine = builder.engine;
            this.instanceChargeType = builder.instanceChargeType;
            this.instanceId = builder.instanceId;
            this.nodeId = builder.nodeId;
            this.orderType = builder.orderType;
            this.productType = builder.productType;
            this.resourceGroupId = builder.resourceGroupId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getAcceptLanguage() {
            return this.acceptLanguage;
        }

        @Override
        public final java.lang.Object getEngine() {
            return this.engine;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getNodeId() {
            return this.nodeId;
        }

        @Override
        public final java.lang.Object getOrderType() {
            return this.orderType;
        }

        @Override
        public final java.lang.Object getProductType() {
            return this.productType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAcceptLanguage() != null) {
                data.set("acceptLanguage", om.valueToTree(this.getAcceptLanguage()));
            }
            if (this.getEngine() != null) {
                data.set("engine", om.valueToTree(this.getEngine()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getNodeId() != null) {
                data.set("nodeId", om.valueToTree(this.getNodeId()));
            }
            if (this.getOrderType() != null) {
                data.set("orderType", om.valueToTree(this.getOrderType()));
            }
            if (this.getProductType() != null) {
                data.set("productType", om.valueToTree(this.getProductType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.datasource.RosInstanceClassesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstanceClassesProps.Jsii$Proxy that = (RosInstanceClassesProps.Jsii$Proxy) o;

            if (this.acceptLanguage != null ? !this.acceptLanguage.equals(that.acceptLanguage) : that.acceptLanguage != null) return false;
            if (this.engine != null ? !this.engine.equals(that.engine) : that.engine != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.nodeId != null ? !this.nodeId.equals(that.nodeId) : that.nodeId != null) return false;
            if (this.orderType != null ? !this.orderType.equals(that.orderType) : that.orderType != null) return false;
            if (this.productType != null ? !this.productType.equals(that.productType) : that.productType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.acceptLanguage != null ? this.acceptLanguage.hashCode() : 0;
            result = 31 * result + (this.engine != null ? this.engine.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.nodeId != null ? this.nodeId.hashCode() : 0);
            result = 31 * result + (this.orderType != null ? this.orderType.hashCode() : 0);
            result = 31 * result + (this.productType != null ? this.productType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
