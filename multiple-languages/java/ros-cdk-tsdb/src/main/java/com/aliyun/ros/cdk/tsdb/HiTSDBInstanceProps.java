package com.aliyun.ros.cdk.tsdb;

/**
 * Properties for defining a <code>HiTSDBInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-hitsdbinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.050Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.tsdb.$Module.class, fqn = "@alicloud/ros-cdk-tsdb.HiTSDBInstanceProps")
@software.amazon.jsii.Jsii.Proxy(HiTSDBInstanceProps.Jsii$Proxy.class)
public interface HiTSDBInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceClass: The type of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceClass();

    /**
     * Property instanceStorage: The storage capacity of the instance.
     * <p>
     * Unit: GB. For example, the value 50 indicates 50 GB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceStorage();

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property vSwitchId: The ID of the VSwitch in the specified VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property zoneId: The zone ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property diskCategory: The category of disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskCategory() {
        return null;
    }

    /**
     * Property duration: The validity period of the instance.
     * <p>
     * This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     * Property instanceAlias: The alias of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceAlias() {
        return null;
    }

    /**
     * Property payType: The billing method.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>prepay</strong>: The prepay value indicates the subscription method.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     * Property pricingCycle: The unit of the validity period.
     * <p>
     * This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     * Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"].
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HiTSDBInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HiTSDBInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HiTSDBInstanceProps> {
        java.lang.Object instanceClass;
        java.lang.Object instanceStorage;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;
        java.lang.Object diskCategory;
        java.lang.Object duration;
        java.lang.Object instanceAlias;
        java.lang.Object payType;
        java.lang.Object pricingCycle;
        java.lang.Object securityIpList;

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getInstanceClass}
         * @param instanceClass Property instanceClass: The type of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceClass(java.lang.String instanceClass) {
            this.instanceClass = instanceClass;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getInstanceClass}
         * @param instanceClass Property instanceClass: The type of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceClass(com.aliyun.ros.cdk.core.IResolvable instanceClass) {
            this.instanceClass = instanceClass;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getInstanceStorage}
         * @param instanceStorage Property instanceStorage: The storage capacity of the instance. This parameter is required.
         *                        Unit: GB. For example, the value 50 indicates 50 GB.
         * @return {@code this}
         */
        public Builder instanceStorage(java.lang.Number instanceStorage) {
            this.instanceStorage = instanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getInstanceStorage}
         * @param instanceStorage Property instanceStorage: The storage capacity of the instance. This parameter is required.
         *                        Unit: GB. For example, the value 50 indicates 50 GB.
         * @return {@code this}
         */
        public Builder instanceStorage(com.aliyun.ros.cdk.core.IResolvable instanceStorage) {
            this.instanceStorage = instanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch in the specified VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch in the specified VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getDiskCategory}
         * @param diskCategory Property diskCategory: The category of disk.
         * @return {@code this}
         */
        public Builder diskCategory(java.lang.String diskCategory) {
            this.diskCategory = diskCategory;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getDiskCategory}
         * @param diskCategory Property diskCategory: The category of disk.
         * @return {@code this}
         */
        public Builder diskCategory(com.aliyun.ros.cdk.core.IResolvable diskCategory) {
            this.diskCategory = diskCategory;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getDuration}
         * @param duration Property duration: The validity period of the instance.
         *                 This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getDuration}
         * @param duration Property duration: The validity period of the instance.
         *                 This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getInstanceAlias}
         * @param instanceAlias Property instanceAlias: The alias of the instance.
         * @return {@code this}
         */
        public Builder instanceAlias(java.lang.String instanceAlias) {
            this.instanceAlias = instanceAlias;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getInstanceAlias}
         * @param instanceAlias Property instanceAlias: The alias of the instance.
         * @return {@code this}
         */
        public Builder instanceAlias(com.aliyun.ros.cdk.core.IResolvable instanceAlias) {
            this.instanceAlias = instanceAlias;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getPayType}
         * @param payType Property payType: The billing method.
         *                Valid values:
         *                <p>
         *                <ul>
         *                <li><strong>prepay</strong>: The prepay value indicates the subscription method.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getPayType}
         * @param payType Property payType: The billing method.
         *                Valid values:
         *                <p>
         *                <ul>
         *                <li><strong>prepay</strong>: The prepay value indicates the subscription method.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: The unit of the validity period.
         *                     This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: The unit of the validity period.
         *                     This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"].
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link HiTSDBInstanceProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"].
         * @return {@code this}
         */
        public Builder securityIpList(java.util.List<? extends java.lang.Object> securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HiTSDBInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HiTSDBInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HiTSDBInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HiTSDBInstanceProps {
        private final java.lang.Object instanceClass;
        private final java.lang.Object instanceStorage;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;
        private final java.lang.Object diskCategory;
        private final java.lang.Object duration;
        private final java.lang.Object instanceAlias;
        private final java.lang.Object payType;
        private final java.lang.Object pricingCycle;
        private final java.lang.Object securityIpList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceClass = software.amazon.jsii.Kernel.get(this, "instanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceStorage = software.amazon.jsii.Kernel.get(this, "instanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskCategory = software.amazon.jsii.Kernel.get(this, "diskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceAlias = software.amazon.jsii.Kernel.get(this, "instanceAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceClass = java.util.Objects.requireNonNull(builder.instanceClass, "instanceClass is required");
            this.instanceStorage = java.util.Objects.requireNonNull(builder.instanceStorage, "instanceStorage is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.diskCategory = builder.diskCategory;
            this.duration = builder.duration;
            this.instanceAlias = builder.instanceAlias;
            this.payType = builder.payType;
            this.pricingCycle = builder.pricingCycle;
            this.securityIpList = builder.securityIpList;
        }

        @Override
        public final java.lang.Object getInstanceClass() {
            return this.instanceClass;
        }

        @Override
        public final java.lang.Object getInstanceStorage() {
            return this.instanceStorage;
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
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getDiskCategory() {
            return this.diskCategory;
        }

        @Override
        public final java.lang.Object getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Object getInstanceAlias() {
            return this.instanceAlias;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceClass", om.valueToTree(this.getInstanceClass()));
            data.set("instanceStorage", om.valueToTree(this.getInstanceStorage()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getDiskCategory() != null) {
                data.set("diskCategory", om.valueToTree(this.getDiskCategory()));
            }
            if (this.getDuration() != null) {
                data.set("duration", om.valueToTree(this.getDuration()));
            }
            if (this.getInstanceAlias() != null) {
                data.set("instanceAlias", om.valueToTree(this.getInstanceAlias()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getPricingCycle() != null) {
                data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            }
            if (this.getSecurityIpList() != null) {
                data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-tsdb.HiTSDBInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HiTSDBInstanceProps.Jsii$Proxy that = (HiTSDBInstanceProps.Jsii$Proxy) o;

            if (!instanceClass.equals(that.instanceClass)) return false;
            if (!instanceStorage.equals(that.instanceStorage)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.diskCategory != null ? !this.diskCategory.equals(that.diskCategory) : that.diskCategory != null) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.instanceAlias != null ? !this.instanceAlias.equals(that.instanceAlias) : that.instanceAlias != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.pricingCycle != null ? !this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle != null) return false;
            return this.securityIpList != null ? this.securityIpList.equals(that.securityIpList) : that.securityIpList == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceClass.hashCode();
            result = 31 * result + (this.instanceStorage.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.diskCategory != null ? this.diskCategory.hashCode() : 0);
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.instanceAlias != null ? this.instanceAlias.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            return result;
        }
    }
}
