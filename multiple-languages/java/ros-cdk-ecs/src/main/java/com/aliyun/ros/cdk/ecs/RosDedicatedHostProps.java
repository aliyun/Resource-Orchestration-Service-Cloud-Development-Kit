package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::DedicatedHost`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:02.728Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosDedicatedHostProps")
@software.amazon.jsii.Jsii.Proxy(RosDedicatedHostProps.Jsii$Proxy.class)
public interface RosDedicatedHostProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDedicatedHostType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getActionOnMaintenance() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAutoPlacement() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAutoReleaseTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getAutoRenewPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDedicatedHostName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getNetworkAttributesSlbUdpTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getNetworkAttributesUdpTimeout() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Number getQuantity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.core.RosTag> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDedicatedHostProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDedicatedHostProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDedicatedHostProps> {
        private java.lang.String dedicatedHostType;
        private java.lang.String actionOnMaintenance;
        private java.lang.String autoPlacement;
        private java.lang.String autoReleaseTime;
        private java.lang.String autoRenew;
        private java.lang.Number autoRenewPeriod;
        private java.lang.String chargeType;
        private java.lang.String dedicatedHostName;
        private java.lang.String description;
        private java.lang.Number networkAttributesSlbUdpTimeout;
        private java.lang.Number networkAttributesUdpTimeout;
        private java.lang.Number period;
        private java.lang.String periodUnit;
        private java.lang.Number quantity;
        private java.lang.String resourceGroupId;
        private java.util.List<com.aliyun.ros.cdk.core.RosTag> tags;
        private java.lang.String zoneId;

        /**
         * Sets the value of {@link RosDedicatedHostProps#getDedicatedHostType}
         * @param dedicatedHostType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dedicatedHostType(java.lang.String dedicatedHostType) {
            this.dedicatedHostType = dedicatedHostType;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getActionOnMaintenance}
         * @param actionOnMaintenance the value to be set.
         * @return {@code this}
         */
        public Builder actionOnMaintenance(java.lang.String actionOnMaintenance) {
            this.actionOnMaintenance = actionOnMaintenance;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getAutoPlacement}
         * @param autoPlacement the value to be set.
         * @return {@code this}
         */
        public Builder autoPlacement(java.lang.String autoPlacement) {
            this.autoPlacement = autoPlacement;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getAutoReleaseTime}
         * @param autoReleaseTime the value to be set.
         * @return {@code this}
         */
        public Builder autoReleaseTime(java.lang.String autoReleaseTime) {
            this.autoReleaseTime = autoReleaseTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.String autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getAutoRenewPeriod}
         * @param autoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getDedicatedHostName}
         * @param dedicatedHostName the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostName(java.lang.String dedicatedHostName) {
            this.dedicatedHostName = dedicatedHostName;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getNetworkAttributesSlbUdpTimeout}
         * @param networkAttributesSlbUdpTimeout the value to be set.
         * @return {@code this}
         */
        public Builder networkAttributesSlbUdpTimeout(java.lang.Number networkAttributesSlbUdpTimeout) {
            this.networkAttributesSlbUdpTimeout = networkAttributesSlbUdpTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getNetworkAttributesUdpTimeout}
         * @param networkAttributesUdpTimeout the value to be set.
         * @return {@code this}
         */
        public Builder networkAttributesUdpTimeout(java.lang.Number networkAttributesUdpTimeout) {
            this.networkAttributesUdpTimeout = networkAttributesUdpTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getQuantity}
         * @param quantity the value to be set.
         * @return {@code this}
         */
        public Builder quantity(java.lang.Number quantity) {
            this.quantity = quantity;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.core.RosTag>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDedicatedHostProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDedicatedHostProps build() {
            return new Jsii$Proxy(dedicatedHostType, actionOnMaintenance, autoPlacement, autoReleaseTime, autoRenew, autoRenewPeriod, chargeType, dedicatedHostName, description, networkAttributesSlbUdpTimeout, networkAttributesUdpTimeout, period, periodUnit, quantity, resourceGroupId, tags, zoneId);
        }
    }

    /**
     * An implementation for {@link RosDedicatedHostProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDedicatedHostProps {
        private final java.lang.String dedicatedHostType;
        private final java.lang.String actionOnMaintenance;
        private final java.lang.String autoPlacement;
        private final java.lang.String autoReleaseTime;
        private final java.lang.String autoRenew;
        private final java.lang.Number autoRenewPeriod;
        private final java.lang.String chargeType;
        private final java.lang.String dedicatedHostName;
        private final java.lang.String description;
        private final java.lang.Number networkAttributesSlbUdpTimeout;
        private final java.lang.Number networkAttributesUdpTimeout;
        private final java.lang.Number period;
        private final java.lang.String periodUnit;
        private final java.lang.Number quantity;
        private final java.lang.String resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.core.RosTag> tags;
        private final java.lang.String zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dedicatedHostType = software.amazon.jsii.Kernel.get(this, "dedicatedHostType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.actionOnMaintenance = software.amazon.jsii.Kernel.get(this, "actionOnMaintenance", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoPlacement = software.amazon.jsii.Kernel.get(this, "autoPlacement", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoReleaseTime = software.amazon.jsii.Kernel.get(this, "autoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dedicatedHostName = software.amazon.jsii.Kernel.get(this, "dedicatedHostName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.networkAttributesSlbUdpTimeout = software.amazon.jsii.Kernel.get(this, "networkAttributesSlbUdpTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.networkAttributesUdpTimeout = software.amazon.jsii.Kernel.get(this, "networkAttributesUdpTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.quantity = software.amazon.jsii.Kernel.get(this, "quantity", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosTag.class)));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.String dedicatedHostType, final java.lang.String actionOnMaintenance, final java.lang.String autoPlacement, final java.lang.String autoReleaseTime, final java.lang.String autoRenew, final java.lang.Number autoRenewPeriod, final java.lang.String chargeType, final java.lang.String dedicatedHostName, final java.lang.String description, final java.lang.Number networkAttributesSlbUdpTimeout, final java.lang.Number networkAttributesUdpTimeout, final java.lang.Number period, final java.lang.String periodUnit, final java.lang.Number quantity, final java.lang.String resourceGroupId, final java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags, final java.lang.String zoneId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dedicatedHostType = java.util.Objects.requireNonNull(dedicatedHostType, "dedicatedHostType is required");
            this.actionOnMaintenance = actionOnMaintenance;
            this.autoPlacement = autoPlacement;
            this.autoReleaseTime = autoReleaseTime;
            this.autoRenew = autoRenew;
            this.autoRenewPeriod = autoRenewPeriod;
            this.chargeType = chargeType;
            this.dedicatedHostName = dedicatedHostName;
            this.description = description;
            this.networkAttributesSlbUdpTimeout = networkAttributesSlbUdpTimeout;
            this.networkAttributesUdpTimeout = networkAttributesUdpTimeout;
            this.period = period;
            this.periodUnit = periodUnit;
            this.quantity = quantity;
            this.resourceGroupId = resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.core.RosTag>)tags;
            this.zoneId = zoneId;
        }

        @Override
        public final java.lang.String getDedicatedHostType() {
            return this.dedicatedHostType;
        }

        @Override
        public final java.lang.String getActionOnMaintenance() {
            return this.actionOnMaintenance;
        }

        @Override
        public final java.lang.String getAutoPlacement() {
            return this.autoPlacement;
        }

        @Override
        public final java.lang.String getAutoReleaseTime() {
            return this.autoReleaseTime;
        }

        @Override
        public final java.lang.String getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Number getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.String getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.String getDedicatedHostName() {
            return this.dedicatedHostName;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Number getNetworkAttributesSlbUdpTimeout() {
            return this.networkAttributesSlbUdpTimeout;
        }

        @Override
        public final java.lang.Number getNetworkAttributesUdpTimeout() {
            return this.networkAttributesUdpTimeout;
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
        public final java.lang.Number getQuantity() {
            return this.quantity;
        }

        @Override
        public final java.lang.String getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.core.RosTag> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.String getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dedicatedHostType", om.valueToTree(this.getDedicatedHostType()));
            if (this.getActionOnMaintenance() != null) {
                data.set("actionOnMaintenance", om.valueToTree(this.getActionOnMaintenance()));
            }
            if (this.getAutoPlacement() != null) {
                data.set("autoPlacement", om.valueToTree(this.getAutoPlacement()));
            }
            if (this.getAutoReleaseTime() != null) {
                data.set("autoReleaseTime", om.valueToTree(this.getAutoReleaseTime()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getDedicatedHostName() != null) {
                data.set("dedicatedHostName", om.valueToTree(this.getDedicatedHostName()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getNetworkAttributesSlbUdpTimeout() != null) {
                data.set("networkAttributesSlbUdpTimeout", om.valueToTree(this.getNetworkAttributesSlbUdpTimeout()));
            }
            if (this.getNetworkAttributesUdpTimeout() != null) {
                data.set("networkAttributesUdpTimeout", om.valueToTree(this.getNetworkAttributesUdpTimeout()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getQuantity() != null) {
                data.set("quantity", om.valueToTree(this.getQuantity()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosDedicatedHostProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDedicatedHostProps.Jsii$Proxy that = (RosDedicatedHostProps.Jsii$Proxy) o;

            if (!dedicatedHostType.equals(that.dedicatedHostType)) return false;
            if (this.actionOnMaintenance != null ? !this.actionOnMaintenance.equals(that.actionOnMaintenance) : that.actionOnMaintenance != null) return false;
            if (this.autoPlacement != null ? !this.autoPlacement.equals(that.autoPlacement) : that.autoPlacement != null) return false;
            if (this.autoReleaseTime != null ? !this.autoReleaseTime.equals(that.autoReleaseTime) : that.autoReleaseTime != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.dedicatedHostName != null ? !this.dedicatedHostName.equals(that.dedicatedHostName) : that.dedicatedHostName != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.networkAttributesSlbUdpTimeout != null ? !this.networkAttributesSlbUdpTimeout.equals(that.networkAttributesSlbUdpTimeout) : that.networkAttributesSlbUdpTimeout != null) return false;
            if (this.networkAttributesUdpTimeout != null ? !this.networkAttributesUdpTimeout.equals(that.networkAttributesUdpTimeout) : that.networkAttributesUdpTimeout != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.quantity != null ? !this.quantity.equals(that.quantity) : that.quantity != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dedicatedHostType.hashCode();
            result = 31 * result + (this.actionOnMaintenance != null ? this.actionOnMaintenance.hashCode() : 0);
            result = 31 * result + (this.autoPlacement != null ? this.autoPlacement.hashCode() : 0);
            result = 31 * result + (this.autoReleaseTime != null ? this.autoReleaseTime.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostName != null ? this.dedicatedHostName.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.networkAttributesSlbUdpTimeout != null ? this.networkAttributesSlbUdpTimeout.hashCode() : 0);
            result = 31 * result + (this.networkAttributesUdpTimeout != null ? this.networkAttributesUdpTimeout.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.quantity != null ? this.quantity.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
