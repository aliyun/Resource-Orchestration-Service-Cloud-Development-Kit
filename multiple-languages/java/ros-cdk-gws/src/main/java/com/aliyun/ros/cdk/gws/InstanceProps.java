package com.aliyun.ros.cdk.gws;

/**
 * Properties for defining a `ALIYUN::GWS::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.014Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gws.$Module.class, fqn = "@alicloud/ros-cdk-gws.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getImageId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSystemDiskCategory();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getSystemDiskSize();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getWorkMode();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocatePublicAddress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getInstanceChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getInternetChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getInternetMaxBandwidthIn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getInternetMaxBandwidthOut() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceProps> {
        private java.lang.String clusterId;
        private java.lang.String imageId;
        private java.lang.String instanceType;
        private java.lang.String systemDiskCategory;
        private java.lang.Number systemDiskSize;
        private java.lang.String workMode;
        private java.lang.Object allocatePublicAddress;
        private java.lang.Object appList;
        private java.lang.Object autoRenew;
        private java.lang.String instanceChargeType;
        private java.lang.String internetChargeType;
        private java.lang.Number internetMaxBandwidthIn;
        private java.lang.Number internetMaxBandwidthOut;
        private java.lang.String name;
        private java.lang.Number period;
        private java.lang.String periodUnit;
        private java.lang.String vSwitchId;

        /**
         * Sets the value of {@link InstanceProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getImageId}
         * @param imageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSystemDiskCategory}
         * @param systemDiskCategory the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSystemDiskSize}
         * @param systemDiskSize the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder systemDiskSize(java.lang.Number systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getWorkMode}
         * @param workMode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workMode(java.lang.String workMode) {
            this.workMode = workMode;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAllocatePublicAddress}
         * @param allocatePublicAddress the value to be set.
         * @return {@code this}
         */
        public Builder allocatePublicAddress(java.lang.Boolean allocatePublicAddress) {
            this.allocatePublicAddress = allocatePublicAddress;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAllocatePublicAddress}
         * @param allocatePublicAddress the value to be set.
         * @return {@code this}
         */
        public Builder allocatePublicAddress(com.aliyun.ros.cdk.core.IResolvable allocatePublicAddress) {
            this.allocatePublicAddress = allocatePublicAddress;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAppList}
         * @param appList the value to be set.
         * @return {@code this}
         */
        public Builder appList(com.aliyun.ros.cdk.core.IResolvable appList) {
            this.appList = appList;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAppList}
         * @param appList the value to be set.
         * @return {@code this}
         */
        public Builder appList(java.util.List<? extends java.lang.Object> appList) {
            this.appList = appList;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(java.lang.Number internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceProps build() {
            return new Jsii$Proxy(clusterId, imageId, instanceType, systemDiskCategory, systemDiskSize, workMode, allocatePublicAddress, appList, autoRenew, instanceChargeType, internetChargeType, internetMaxBandwidthIn, internetMaxBandwidthOut, name, period, periodUnit, vSwitchId);
        }
    }

    /**
     * An implementation for {@link InstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceProps {
        private final java.lang.String clusterId;
        private final java.lang.String imageId;
        private final java.lang.String instanceType;
        private final java.lang.String systemDiskCategory;
        private final java.lang.Number systemDiskSize;
        private final java.lang.String workMode;
        private final java.lang.Object allocatePublicAddress;
        private final java.lang.Object appList;
        private final java.lang.Object autoRenew;
        private final java.lang.String instanceChargeType;
        private final java.lang.String internetChargeType;
        private final java.lang.Number internetMaxBandwidthIn;
        private final java.lang.Number internetMaxBandwidthOut;
        private final java.lang.String name;
        private final java.lang.Number period;
        private final java.lang.String periodUnit;
        private final java.lang.String vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.workMode = software.amazon.jsii.Kernel.get(this, "workMode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.allocatePublicAddress = software.amazon.jsii.Kernel.get(this, "allocatePublicAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appList = software.amazon.jsii.Kernel.get(this, "appList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.internetMaxBandwidthIn = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String clusterId, final java.lang.String imageId, final java.lang.String instanceType, final java.lang.String systemDiskCategory, final java.lang.Number systemDiskSize, final java.lang.String workMode, final java.lang.Object allocatePublicAddress, final java.lang.Object appList, final java.lang.Object autoRenew, final java.lang.String instanceChargeType, final java.lang.String internetChargeType, final java.lang.Number internetMaxBandwidthIn, final java.lang.Number internetMaxBandwidthOut, final java.lang.String name, final java.lang.Number period, final java.lang.String periodUnit, final java.lang.String vSwitchId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(clusterId, "clusterId is required");
            this.imageId = java.util.Objects.requireNonNull(imageId, "imageId is required");
            this.instanceType = java.util.Objects.requireNonNull(instanceType, "instanceType is required");
            this.systemDiskCategory = java.util.Objects.requireNonNull(systemDiskCategory, "systemDiskCategory is required");
            this.systemDiskSize = java.util.Objects.requireNonNull(systemDiskSize, "systemDiskSize is required");
            this.workMode = java.util.Objects.requireNonNull(workMode, "workMode is required");
            this.allocatePublicAddress = allocatePublicAddress;
            this.appList = appList;
            this.autoRenew = autoRenew;
            this.instanceChargeType = instanceChargeType;
            this.internetChargeType = internetChargeType;
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            this.name = name;
            this.period = period;
            this.periodUnit = periodUnit;
            this.vSwitchId = vSwitchId;
        }

        @Override
        public final java.lang.String getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.String getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.String getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.String getSystemDiskCategory() {
            return this.systemDiskCategory;
        }

        @Override
        public final java.lang.Number getSystemDiskSize() {
            return this.systemDiskSize;
        }

        @Override
        public final java.lang.String getWorkMode() {
            return this.workMode;
        }

        @Override
        public final java.lang.Object getAllocatePublicAddress() {
            return this.allocatePublicAddress;
        }

        @Override
        public final java.lang.Object getAppList() {
            return this.appList;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.String getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.String getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Number getInternetMaxBandwidthIn() {
            return this.internetMaxBandwidthIn;
        }

        @Override
        public final java.lang.Number getInternetMaxBandwidthOut() {
            return this.internetMaxBandwidthOut;
        }

        @Override
        public final java.lang.String getName() {
            return this.name;
        }

        @Override
        public final java.lang.Number getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.String getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.String getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterId", om.valueToTree(this.getClusterId()));
            data.set("imageId", om.valueToTree(this.getImageId()));
            data.set("instanceType", om.valueToTree(this.getInstanceType()));
            data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
            data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
            data.set("workMode", om.valueToTree(this.getWorkMode()));
            if (this.getAllocatePublicAddress() != null) {
                data.set("allocatePublicAddress", om.valueToTree(this.getAllocatePublicAddress()));
            }
            if (this.getAppList() != null) {
                data.set("appList", om.valueToTree(this.getAppList()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getInternetMaxBandwidthIn() != null) {
                data.set("internetMaxBandwidthIn", om.valueToTree(this.getInternetMaxBandwidthIn()));
            }
            if (this.getInternetMaxBandwidthOut() != null) {
                data.set("internetMaxBandwidthOut", om.valueToTree(this.getInternetMaxBandwidthOut()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gws.InstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceProps.Jsii$Proxy that = (InstanceProps.Jsii$Proxy) o;

            if (!clusterId.equals(that.clusterId)) return false;
            if (!imageId.equals(that.imageId)) return false;
            if (!instanceType.equals(that.instanceType)) return false;
            if (!systemDiskCategory.equals(that.systemDiskCategory)) return false;
            if (!systemDiskSize.equals(that.systemDiskSize)) return false;
            if (!workMode.equals(that.workMode)) return false;
            if (this.allocatePublicAddress != null ? !this.allocatePublicAddress.equals(that.allocatePublicAddress) : that.allocatePublicAddress != null) return false;
            if (this.appList != null ? !this.appList.equals(that.appList) : that.appList != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.internetMaxBandwidthIn != null ? !this.internetMaxBandwidthIn.equals(that.internetMaxBandwidthIn) : that.internetMaxBandwidthIn != null) return false;
            if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId.hashCode();
            result = 31 * result + (this.imageId.hashCode());
            result = 31 * result + (this.instanceType.hashCode());
            result = 31 * result + (this.systemDiskCategory.hashCode());
            result = 31 * result + (this.systemDiskSize.hashCode());
            result = 31 * result + (this.workMode.hashCode());
            result = 31 * result + (this.allocatePublicAddress != null ? this.allocatePublicAddress.hashCode() : 0);
            result = 31 * result + (this.appList != null ? this.appList.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthIn != null ? this.internetMaxBandwidthIn.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
