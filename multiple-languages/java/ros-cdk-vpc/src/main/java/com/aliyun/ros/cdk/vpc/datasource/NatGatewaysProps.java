package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>NatGateways</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateways
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:55.047Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.NatGatewaysProps")
@software.amazon.jsii.Jsii.Proxy(NatGatewaysProps.Jsii$Proxy.class)
public interface NatGatewaysProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceChargeType: The billing method of the NAT gateway.
     * <p>
     * Set the value to PostPaid, which specifies the pay-as-you-go billing method.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     * Property name: The name of the NAT gateway.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property natGatewayId: The ID of the NAT gateway.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNatGatewayId() {
        return null;
    }

    /**
     * Property natType: The type of NAT gateway.
     * <p>
     * Set the value to Enhanced (enhanced NAT gateway).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNatType() {
        return null;
    }

    /**
     * Property networkType: The type of the NAT gateway.
     * <p>
     * Valid values:
     * internet: an Internet NAT gateway
     * intranet: a VPC NAT gateway
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the NAT gateway belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property status: The status of the NAT gateway.
     * <p>
     * Valid values:
     * Creating: After you send a request to create a NAT gateway, the system creates the NAT gateway in the background. The NAT gateway remains in the Creating state until the operation is completed.
     * Available: The NAT gateway remains in a stable state after the NAT gateway is created.
     * Modifying: After you send a request to modify a NAT gateway, the system modifies the NAT gateway in the background. The NAT gateway remains in the Modifying state until the operation is completed.
     * Deleting: After you send a request to delete a NAT gateway, the system deletes the NAT gateway in the background. The NAT gateway remains in the Deleting state until the operation is completed.
     * Converting: After you send a request to upgrade a standard NAT gateway to an enhanced NAT gateway, the system upgrades the NAT gateway in the background. The NAT gateway remains in the Converting state until the operation is completed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * Property vpcId: The ID of the VPC to which the NAT gateway belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property zoneId: The ID of the zone to which the NAT gateway belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NatGatewaysProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NatGatewaysProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NatGatewaysProps> {
        java.lang.Object instanceChargeType;
        java.lang.Object name;
        java.lang.Object natGatewayId;
        java.lang.Object natType;
        java.lang.Object networkType;
        java.lang.Object resourceGroupId;
        java.lang.Object status;
        java.lang.Object vpcId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link NatGatewaysProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the NAT gateway.
         *                           Set the value to PostPaid, which specifies the pay-as-you-go billing method.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the NAT gateway.
         *                           Set the value to PostPaid, which specifies the pay-as-you-go billing method.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getName}
         * @param name Property name: The name of the NAT gateway.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getName}
         * @param name Property name: The name of the NAT gateway.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getNatGatewayId}
         * @param natGatewayId Property natGatewayId: The ID of the NAT gateway.
         * @return {@code this}
         */
        public Builder natGatewayId(java.lang.String natGatewayId) {
            this.natGatewayId = natGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getNatGatewayId}
         * @param natGatewayId Property natGatewayId: The ID of the NAT gateway.
         * @return {@code this}
         */
        public Builder natGatewayId(com.aliyun.ros.cdk.core.IResolvable natGatewayId) {
            this.natGatewayId = natGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getNatType}
         * @param natType Property natType: The type of NAT gateway.
         *                Set the value to Enhanced (enhanced NAT gateway).
         * @return {@code this}
         */
        public Builder natType(java.lang.String natType) {
            this.natType = natType;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getNatType}
         * @param natType Property natType: The type of NAT gateway.
         *                Set the value to Enhanced (enhanced NAT gateway).
         * @return {@code this}
         */
        public Builder natType(com.aliyun.ros.cdk.core.IResolvable natType) {
            this.natType = natType;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getNetworkType}
         * @param networkType Property networkType: The type of the NAT gateway.
         *                    Valid values:
         *                    internet: an Internet NAT gateway
         *                    intranet: a VPC NAT gateway
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getNetworkType}
         * @param networkType Property networkType: The type of the NAT gateway.
         *                    Valid values:
         *                    internet: an Internet NAT gateway
         *                    intranet: a VPC NAT gateway
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the NAT gateway belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the NAT gateway belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getStatus}
         * @param status Property status: The status of the NAT gateway.
         *               Valid values:
         *               Creating: After you send a request to create a NAT gateway, the system creates the NAT gateway in the background. The NAT gateway remains in the Creating state until the operation is completed.
         *               Available: The NAT gateway remains in a stable state after the NAT gateway is created.
         *               Modifying: After you send a request to modify a NAT gateway, the system modifies the NAT gateway in the background. The NAT gateway remains in the Modifying state until the operation is completed.
         *               Deleting: After you send a request to delete a NAT gateway, the system deletes the NAT gateway in the background. The NAT gateway remains in the Deleting state until the operation is completed.
         *               Converting: After you send a request to upgrade a standard NAT gateway to an enhanced NAT gateway, the system upgrades the NAT gateway in the background. The NAT gateway remains in the Converting state until the operation is completed.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getStatus}
         * @param status Property status: The status of the NAT gateway.
         *               Valid values:
         *               Creating: After you send a request to create a NAT gateway, the system creates the NAT gateway in the background. The NAT gateway remains in the Creating state until the operation is completed.
         *               Available: The NAT gateway remains in a stable state after the NAT gateway is created.
         *               Modifying: After you send a request to modify a NAT gateway, the system modifies the NAT gateway in the background. The NAT gateway remains in the Modifying state until the operation is completed.
         *               Deleting: After you send a request to delete a NAT gateway, the system deletes the NAT gateway in the background. The NAT gateway remains in the Deleting state until the operation is completed.
         *               Converting: After you send a request to upgrade a standard NAT gateway to an enhanced NAT gateway, the system upgrades the NAT gateway in the background. The NAT gateway remains in the Converting state until the operation is completed.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which the NAT gateway belongs.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which the NAT gateway belongs.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone to which the NAT gateway belongs.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link NatGatewaysProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone to which the NAT gateway belongs.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NatGatewaysProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NatGatewaysProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NatGatewaysProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NatGatewaysProps {
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object name;
        private final java.lang.Object natGatewayId;
        private final java.lang.Object natType;
        private final java.lang.Object networkType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object status;
        private final java.lang.Object vpcId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natGatewayId = software.amazon.jsii.Kernel.get(this, "natGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natType = software.amazon.jsii.Kernel.get(this, "natType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceChargeType = builder.instanceChargeType;
            this.name = builder.name;
            this.natGatewayId = builder.natGatewayId;
            this.natType = builder.natType;
            this.networkType = builder.networkType;
            this.resourceGroupId = builder.resourceGroupId;
            this.status = builder.status;
            this.vpcId = builder.vpcId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getNatGatewayId() {
            return this.natGatewayId;
        }

        @Override
        public final java.lang.Object getNatType() {
            return this.natType;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
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
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getNatGatewayId() != null) {
                data.set("natGatewayId", om.valueToTree(this.getNatGatewayId()));
            }
            if (this.getNatType() != null) {
                data.set("natType", om.valueToTree(this.getNatType()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.NatGatewaysProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NatGatewaysProps.Jsii$Proxy that = (NatGatewaysProps.Jsii$Proxy) o;

            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.natGatewayId != null ? !this.natGatewayId.equals(that.natGatewayId) : that.natGatewayId != null) return false;
            if (this.natType != null ? !this.natType.equals(that.natType) : that.natType != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0;
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.natGatewayId != null ? this.natGatewayId.hashCode() : 0);
            result = 31 * result + (this.natType != null ? this.natType.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
