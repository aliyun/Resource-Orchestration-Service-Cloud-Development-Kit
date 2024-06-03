package com.aliyun.ros.cdk.slb.datasource;

/**
 * Properties for defining a <code>LoadBalancers</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancers
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:54.534Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.datasource.LoadBalancersProps")
@software.amazon.jsii.Jsii.Proxy(LoadBalancersProps.Jsii$Proxy.class)
public interface LoadBalancersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property address: The service address of the load balancing instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddress() {
        return null;
    }

    /**
     * Property addressIpVersion: IP version.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressIpVersion() {
        return null;
    }

    /**
     * Property addressType: The address type of the load balancing instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressType() {
        return null;
    }

    /**
     * Property internetChargeType: Public network type instance payment method.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     * Property loadBalancerId: ID of the load balancing instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerId() {
        return null;
    }

    /**
     * Property loadBalancerName: Name of the load balancing instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerName() {
        return null;
    }

    /**
     * Property masterZoneId: ID of the primary available area of the load balancing instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterZoneId() {
        return null;
    }

    /**
     * Property networkType: The network type of the private network load balancing instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return null;
    }

    /**
     * Property paymentType: Load balancing instance payment type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property slaveZoneId: ID of the ready-to-use zone of the load balancing instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlaveZoneId() {
        return null;
    }

    /**
     * Property status: The status of SLB.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * Property vpcId: VPC ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The ID of the switch.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LoadBalancersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LoadBalancersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LoadBalancersProps> {
        java.lang.Object address;
        java.lang.Object addressIpVersion;
        java.lang.Object addressType;
        java.lang.Object internetChargeType;
        java.lang.Object loadBalancerId;
        java.lang.Object loadBalancerName;
        java.lang.Object masterZoneId;
        java.lang.Object networkType;
        java.lang.Object paymentType;
        java.lang.Object resourceGroupId;
        java.lang.Object slaveZoneId;
        java.lang.Object status;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link LoadBalancersProps#getAddress}
         * @param address Property address: The service address of the load balancing instance.
         * @return {@code this}
         */
        public Builder address(java.lang.String address) {
            this.address = address;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getAddress}
         * @param address Property address: The service address of the load balancing instance.
         * @return {@code this}
         */
        public Builder address(com.aliyun.ros.cdk.core.IResolvable address) {
            this.address = address;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getAddressIpVersion}
         * @param addressIpVersion Property addressIpVersion: IP version.
         * @return {@code this}
         */
        public Builder addressIpVersion(java.lang.String addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getAddressIpVersion}
         * @param addressIpVersion Property addressIpVersion: IP version.
         * @return {@code this}
         */
        public Builder addressIpVersion(com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getAddressType}
         * @param addressType Property addressType: The address type of the load balancing instance.
         * @return {@code this}
         */
        public Builder addressType(java.lang.String addressType) {
            this.addressType = addressType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getAddressType}
         * @param addressType Property addressType: The address type of the load balancing instance.
         * @return {@code this}
         */
        public Builder addressType(com.aliyun.ros.cdk.core.IResolvable addressType) {
            this.addressType = addressType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Public network type instance payment method.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Public network type instance payment method.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: ID of the load balancing instance.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: ID of the load balancing instance.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getLoadBalancerName}
         * @param loadBalancerName Property loadBalancerName: Name of the load balancing instance.
         * @return {@code this}
         */
        public Builder loadBalancerName(java.lang.String loadBalancerName) {
            this.loadBalancerName = loadBalancerName;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getLoadBalancerName}
         * @param loadBalancerName Property loadBalancerName: Name of the load balancing instance.
         * @return {@code this}
         */
        public Builder loadBalancerName(com.aliyun.ros.cdk.core.IResolvable loadBalancerName) {
            this.loadBalancerName = loadBalancerName;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getMasterZoneId}
         * @param masterZoneId Property masterZoneId: ID of the primary available area of the load balancing instance.
         * @return {@code this}
         */
        public Builder masterZoneId(java.lang.String masterZoneId) {
            this.masterZoneId = masterZoneId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getMasterZoneId}
         * @param masterZoneId Property masterZoneId: ID of the primary available area of the load balancing instance.
         * @return {@code this}
         */
        public Builder masterZoneId(com.aliyun.ros.cdk.core.IResolvable masterZoneId) {
            this.masterZoneId = masterZoneId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getNetworkType}
         * @param networkType Property networkType: The network type of the private network load balancing instance.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getNetworkType}
         * @param networkType Property networkType: The network type of the private network load balancing instance.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getPaymentType}
         * @param paymentType Property paymentType: Load balancing instance payment type.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getPaymentType}
         * @param paymentType Property paymentType: Load balancing instance payment type.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getSlaveZoneId}
         * @param slaveZoneId Property slaveZoneId: ID of the ready-to-use zone of the load balancing instance.
         * @return {@code this}
         */
        public Builder slaveZoneId(java.lang.String slaveZoneId) {
            this.slaveZoneId = slaveZoneId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getSlaveZoneId}
         * @param slaveZoneId Property slaveZoneId: ID of the ready-to-use zone of the load balancing instance.
         * @return {@code this}
         */
        public Builder slaveZoneId(com.aliyun.ros.cdk.core.IResolvable slaveZoneId) {
            this.slaveZoneId = slaveZoneId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getStatus}
         * @param status Property status: The status of SLB.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getStatus}
         * @param status Property status: The status of SLB.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the switch.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the switch.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LoadBalancersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LoadBalancersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link LoadBalancersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LoadBalancersProps {
        private final java.lang.Object address;
        private final java.lang.Object addressIpVersion;
        private final java.lang.Object addressType;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object loadBalancerId;
        private final java.lang.Object loadBalancerName;
        private final java.lang.Object masterZoneId;
        private final java.lang.Object networkType;
        private final java.lang.Object paymentType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object slaveZoneId;
        private final java.lang.Object status;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.address = software.amazon.jsii.Kernel.get(this, "address", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addressIpVersion = software.amazon.jsii.Kernel.get(this, "addressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addressType = software.amazon.jsii.Kernel.get(this, "addressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerName = software.amazon.jsii.Kernel.get(this, "loadBalancerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterZoneId = software.amazon.jsii.Kernel.get(this, "masterZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slaveZoneId = software.amazon.jsii.Kernel.get(this, "slaveZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.address = builder.address;
            this.addressIpVersion = builder.addressIpVersion;
            this.addressType = builder.addressType;
            this.internetChargeType = builder.internetChargeType;
            this.loadBalancerId = builder.loadBalancerId;
            this.loadBalancerName = builder.loadBalancerName;
            this.masterZoneId = builder.masterZoneId;
            this.networkType = builder.networkType;
            this.paymentType = builder.paymentType;
            this.resourceGroupId = builder.resourceGroupId;
            this.slaveZoneId = builder.slaveZoneId;
            this.status = builder.status;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getAddress() {
            return this.address;
        }

        @Override
        public final java.lang.Object getAddressIpVersion() {
            return this.addressIpVersion;
        }

        @Override
        public final java.lang.Object getAddressType() {
            return this.addressType;
        }

        @Override
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Object getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.Object getLoadBalancerName() {
            return this.loadBalancerName;
        }

        @Override
        public final java.lang.Object getMasterZoneId() {
            return this.masterZoneId;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSlaveZoneId() {
            return this.slaveZoneId;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAddress() != null) {
                data.set("address", om.valueToTree(this.getAddress()));
            }
            if (this.getAddressIpVersion() != null) {
                data.set("addressIpVersion", om.valueToTree(this.getAddressIpVersion()));
            }
            if (this.getAddressType() != null) {
                data.set("addressType", om.valueToTree(this.getAddressType()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getLoadBalancerId() != null) {
                data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            }
            if (this.getLoadBalancerName() != null) {
                data.set("loadBalancerName", om.valueToTree(this.getLoadBalancerName()));
            }
            if (this.getMasterZoneId() != null) {
                data.set("masterZoneId", om.valueToTree(this.getMasterZoneId()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getPaymentType() != null) {
                data.set("paymentType", om.valueToTree(this.getPaymentType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSlaveZoneId() != null) {
                data.set("slaveZoneId", om.valueToTree(this.getSlaveZoneId()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.datasource.LoadBalancersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LoadBalancersProps.Jsii$Proxy that = (LoadBalancersProps.Jsii$Proxy) o;

            if (this.address != null ? !this.address.equals(that.address) : that.address != null) return false;
            if (this.addressIpVersion != null ? !this.addressIpVersion.equals(that.addressIpVersion) : that.addressIpVersion != null) return false;
            if (this.addressType != null ? !this.addressType.equals(that.addressType) : that.addressType != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.loadBalancerId != null ? !this.loadBalancerId.equals(that.loadBalancerId) : that.loadBalancerId != null) return false;
            if (this.loadBalancerName != null ? !this.loadBalancerName.equals(that.loadBalancerName) : that.loadBalancerName != null) return false;
            if (this.masterZoneId != null ? !this.masterZoneId.equals(that.masterZoneId) : that.masterZoneId != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.paymentType != null ? !this.paymentType.equals(that.paymentType) : that.paymentType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.slaveZoneId != null ? !this.slaveZoneId.equals(that.slaveZoneId) : that.slaveZoneId != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.address != null ? this.address.hashCode() : 0;
            result = 31 * result + (this.addressIpVersion != null ? this.addressIpVersion.hashCode() : 0);
            result = 31 * result + (this.addressType != null ? this.addressType.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.loadBalancerId != null ? this.loadBalancerId.hashCode() : 0);
            result = 31 * result + (this.loadBalancerName != null ? this.loadBalancerName.hashCode() : 0);
            result = 31 * result + (this.masterZoneId != null ? this.masterZoneId.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.paymentType != null ? this.paymentType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.slaveZoneId != null ? this.slaveZoneId.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
