package com.aliyun.ros.cdk.redis.datasource;

/**
 * Properties for defining a <code>DATASOURCE::REDIS::InstanceClasses</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:01.934Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.datasource.InstanceClassesProps")
@software.amazon.jsii.Jsii.Proxy(InstanceClassesProps.Jsii$Proxy.class)
public interface InstanceClassesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property acceptLanguage: The language of the return values.
     * <p>
     * Valid values:
     * zh-CN: Chinese. This is the default value.
     * en-US: English.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcceptLanguage() {
        return null;
    }

    /**
     * Property engine: The engine type.
     * <p>
     * Valid values:
     * Redis
     * Memcache
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngine() {
        return null;
    }

    /**
     * Property instanceChargeType: The billing method.
     * <p>
     * Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Note Default value: PrePaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     * Property instanceId: The ID of the resource group.
     * <p>
     * You can call the ListResourceGroups operation to query the IDs of resource groups.
     * Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * Property nodeId: The ID of the data node for which you want to query available instance types.
     * <p>
     * You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
     * Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read/write splitting architecture.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNodeId() {
        return null;
    }

    /**
     * Property orderType: The order type.
     * <p>
     * Valid values:
     * BUY: the orders that are used to purchase instances.
     * UPGRADE: the orders that are used to upgrade instances.
     * DOWNGRADE: the orders that are used to downgrade instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOrderType() {
        return null;
    }

    /**
     * Property productType: The edition or series of instances.
     * <p>
     * Valid values:
     * Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
     * Tair_scm: persistent memory-optimized instances
     * Tair_essd: storage-optimized instances
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProductType() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the instance.
     * <p>
     * Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
     * <p>
     * Note You can call the DescribeRegions operation to query information about zones.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceClassesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceClassesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceClassesProps> {
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
         * Sets the value of {@link InstanceClassesProps#getAcceptLanguage}
         * @param acceptLanguage Property acceptLanguage: The language of the return values.
         *                       Valid values:
         *                       zh-CN: Chinese. This is the default value.
         *                       en-US: English.
         * @return {@code this}
         */
        public Builder acceptLanguage(java.lang.String acceptLanguage) {
            this.acceptLanguage = acceptLanguage;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getAcceptLanguage}
         * @param acceptLanguage Property acceptLanguage: The language of the return values.
         *                       Valid values:
         *                       zh-CN: Chinese. This is the default value.
         *                       en-US: English.
         * @return {@code this}
         */
        public Builder acceptLanguage(com.aliyun.ros.cdk.core.IResolvable acceptLanguage) {
            this.acceptLanguage = acceptLanguage;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getEngine}
         * @param engine Property engine: The engine type.
         *               Valid values:
         *               Redis
         *               Memcache
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getEngine}
         * @param engine Property engine: The engine type.
         *               Valid values:
         *               Redis
         *               Memcache
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method.
         *                           Valid values:
         *                           PrePaid: subscription
         *                           PostPaid: pay-as-you-go
         *                           Note Default value: PrePaid.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method.
         *                           Valid values:
         *                           PrePaid: subscription
         *                           PostPaid: pay-as-you-go
         *                           Note Default value: PrePaid.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the resource group.
         *                   You can call the ListResourceGroups operation to query the IDs of resource groups.
         *                   Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the resource group.
         *                   You can call the ListResourceGroups operation to query the IDs of resource groups.
         *                   Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getNodeId}
         * @param nodeId Property nodeId: The ID of the data node for which you want to query available instance types.
         *               You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
         *               Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read/write splitting architecture.
         * @return {@code this}
         */
        public Builder nodeId(java.lang.String nodeId) {
            this.nodeId = nodeId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getNodeId}
         * @param nodeId Property nodeId: The ID of the data node for which you want to query available instance types.
         *               You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
         *               Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read/write splitting architecture.
         * @return {@code this}
         */
        public Builder nodeId(com.aliyun.ros.cdk.core.IResolvable nodeId) {
            this.nodeId = nodeId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getOrderType}
         * @param orderType Property orderType: The order type.
         *                  Valid values:
         *                  BUY: the orders that are used to purchase instances.
         *                  UPGRADE: the orders that are used to upgrade instances.
         *                  DOWNGRADE: the orders that are used to downgrade instances.
         * @return {@code this}
         */
        public Builder orderType(java.lang.String orderType) {
            this.orderType = orderType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getOrderType}
         * @param orderType Property orderType: The order type.
         *                  Valid values:
         *                  BUY: the orders that are used to purchase instances.
         *                  UPGRADE: the orders that are used to upgrade instances.
         *                  DOWNGRADE: the orders that are used to downgrade instances.
         * @return {@code this}
         */
        public Builder orderType(com.aliyun.ros.cdk.core.IResolvable orderType) {
            this.orderType = orderType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getProductType}
         * @param productType Property productType: The edition or series of instances.
         *                    Valid values:
         *                    Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
         *                    Tair_scm: persistent memory-optimized instances
         *                    Tair_essd: storage-optimized instances
         * @return {@code this}
         */
        public Builder productType(java.lang.String productType) {
            this.productType = productType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getProductType}
         * @param productType Property productType: The edition or series of instances.
         *                    Valid values:
         *                    Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
         *                    Tair_scm: persistent memory-optimized instances
         *                    Tair_essd: storage-optimized instances
         * @return {@code this}
         */
        public Builder productType(com.aliyun.ros.cdk.core.IResolvable productType) {
            this.productType = productType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the instance.
         *                        Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the instance.
         *                        Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
         *               Note You can call the DescribeRegions operation to query information about zones.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
         *               Note You can call the DescribeRegions operation to query information about zones.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceClassesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceClassesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceClassesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceClassesProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.datasource.InstanceClassesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceClassesProps.Jsii$Proxy that = (InstanceClassesProps.Jsii$Proxy) o;

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
