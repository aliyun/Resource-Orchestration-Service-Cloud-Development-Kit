package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a <code>FwSwitch</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.385Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.FwSwitchProps")
@software.amazon.jsii.Jsii.Proxy(FwSwitchProps.Jsii$Proxy.class)
public interface FwSwitchProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property ipaddrList: The IP address list.
     * <p>
     * <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpaddrList() {
        return null;
    }

    /**
     * Property regionList: The region list.
     * <p>
     * <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegionList() {
        return null;
    }

    /**
     * Property resourceTypeList: The asset type list.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>BastionHostIP: Bastion machine exit IP.</li>
     * <li>BastionHostIngressIP: The entrance IP of the fortress machine.</li>
     * <li>EcsEIP: ECS EIP.</li>
     * <li>EcsPublicIP: ECS public network IP.</li>
     * <li>EIP: Elastic Public IP.</li>
     * <li>EniEIP: Elastic Network card EIP.</li>
     * <li>NatEIP: NAT EIP.</li>
     * <li>SlbEIP: SLB EIP.</li>
     * <li>SlbPublicIP: SLB public network IP.</li>
     * <li>NatPublicIP: NAT public IP</li>
     * <li>HAVIP: High Availability Virtual IP.
     * <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceTypeList() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link FwSwitchProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FwSwitchProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FwSwitchProps> {
        java.lang.Object ipaddrList;
        java.lang.Object regionList;
        java.lang.Object resourceTypeList;

        /**
         * Sets the value of {@link FwSwitchProps#getIpaddrList}
         * @param ipaddrList Property ipaddrList: The IP address list.
         *                   <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
         * @return {@code this}
         */
        public Builder ipaddrList(java.util.List<? extends java.lang.Object> ipaddrList) {
            this.ipaddrList = ipaddrList;
            return this;
        }

        /**
         * Sets the value of {@link FwSwitchProps#getIpaddrList}
         * @param ipaddrList Property ipaddrList: The IP address list.
         *                   <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
         * @return {@code this}
         */
        public Builder ipaddrList(com.aliyun.ros.cdk.core.IResolvable ipaddrList) {
            this.ipaddrList = ipaddrList;
            return this;
        }

        /**
         * Sets the value of {@link FwSwitchProps#getRegionList}
         * @param regionList Property regionList: The region list.
         *                   <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
         * @return {@code this}
         */
        public Builder regionList(java.util.List<? extends java.lang.Object> regionList) {
            this.regionList = regionList;
            return this;
        }

        /**
         * Sets the value of {@link FwSwitchProps#getRegionList}
         * @param regionList Property regionList: The region list.
         *                   <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
         * @return {@code this}
         */
        public Builder regionList(com.aliyun.ros.cdk.core.IResolvable regionList) {
            this.regionList = regionList;
            return this;
        }

        /**
         * Sets the value of {@link FwSwitchProps#getResourceTypeList}
         * @param resourceTypeList Property resourceTypeList: The asset type list.
         *                         Valid values:
         *                         <p>
         *                         <ul>
         *                         <li>BastionHostIP: Bastion machine exit IP.</li>
         *                         <li>BastionHostIngressIP: The entrance IP of the fortress machine.</li>
         *                         <li>EcsEIP: ECS EIP.</li>
         *                         <li>EcsPublicIP: ECS public network IP.</li>
         *                         <li>EIP: Elastic Public IP.</li>
         *                         <li>EniEIP: Elastic Network card EIP.</li>
         *                         <li>NatEIP: NAT EIP.</li>
         *                         <li>SlbEIP: SLB EIP.</li>
         *                         <li>SlbPublicIP: SLB public network IP.</li>
         *                         <li>NatPublicIP: NAT public IP</li>
         *                         <li>HAVIP: High Availability Virtual IP.
         *                         <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder resourceTypeList(java.util.List<? extends java.lang.Object> resourceTypeList) {
            this.resourceTypeList = resourceTypeList;
            return this;
        }

        /**
         * Sets the value of {@link FwSwitchProps#getResourceTypeList}
         * @param resourceTypeList Property resourceTypeList: The asset type list.
         *                         Valid values:
         *                         <p>
         *                         <ul>
         *                         <li>BastionHostIP: Bastion machine exit IP.</li>
         *                         <li>BastionHostIngressIP: The entrance IP of the fortress machine.</li>
         *                         <li>EcsEIP: ECS EIP.</li>
         *                         <li>EcsPublicIP: ECS public network IP.</li>
         *                         <li>EIP: Elastic Public IP.</li>
         *                         <li>EniEIP: Elastic Network card EIP.</li>
         *                         <li>NatEIP: NAT EIP.</li>
         *                         <li>SlbEIP: SLB EIP.</li>
         *                         <li>SlbPublicIP: SLB public network IP.</li>
         *                         <li>NatPublicIP: NAT public IP</li>
         *                         <li>HAVIP: High Availability Virtual IP.
         *                         <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder resourceTypeList(com.aliyun.ros.cdk.core.IResolvable resourceTypeList) {
            this.resourceTypeList = resourceTypeList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link FwSwitchProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FwSwitchProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FwSwitchProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FwSwitchProps {
        private final java.lang.Object ipaddrList;
        private final java.lang.Object regionList;
        private final java.lang.Object resourceTypeList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipaddrList = software.amazon.jsii.Kernel.get(this, "ipaddrList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.regionList = software.amazon.jsii.Kernel.get(this, "regionList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceTypeList = software.amazon.jsii.Kernel.get(this, "resourceTypeList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipaddrList = builder.ipaddrList;
            this.regionList = builder.regionList;
            this.resourceTypeList = builder.resourceTypeList;
        }

        @Override
        public final java.lang.Object getIpaddrList() {
            return this.ipaddrList;
        }

        @Override
        public final java.lang.Object getRegionList() {
            return this.regionList;
        }

        @Override
        public final java.lang.Object getResourceTypeList() {
            return this.resourceTypeList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getIpaddrList() != null) {
                data.set("ipaddrList", om.valueToTree(this.getIpaddrList()));
            }
            if (this.getRegionList() != null) {
                data.set("regionList", om.valueToTree(this.getRegionList()));
            }
            if (this.getResourceTypeList() != null) {
                data.set("resourceTypeList", om.valueToTree(this.getResourceTypeList()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.FwSwitchProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FwSwitchProps.Jsii$Proxy that = (FwSwitchProps.Jsii$Proxy) o;

            if (this.ipaddrList != null ? !this.ipaddrList.equals(that.ipaddrList) : that.ipaddrList != null) return false;
            if (this.regionList != null ? !this.regionList.equals(that.regionList) : that.regionList != null) return false;
            return this.resourceTypeList != null ? this.resourceTypeList.equals(that.resourceTypeList) : that.resourceTypeList == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ipaddrList != null ? this.ipaddrList.hashCode() : 0;
            result = 31 * result + (this.regionList != null ? this.regionList.hashCode() : 0);
            result = 31 * result + (this.resourceTypeList != null ? this.resourceTypeList.hashCode() : 0);
            return result;
        }
    }
}
