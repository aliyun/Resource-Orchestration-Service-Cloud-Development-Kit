package com.aliyun.ros.cdk.cddc;

/**
 * Properties for defining a <code>DedicatedHost</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:23.736Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.DedicatedHostProps")
@software.amazon.jsii.Jsii.Proxy(DedicatedHostProps.Jsii$Proxy.class)
public interface DedicatedHostProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dedicatedHostGroupId: Dedicated Host Group ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDedicatedHostGroupId();

    /**
     * Property hostClass: Host Class.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHostClass();

    /**
     * Property paymentType: Payment Type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPaymentType();

    /**
     * Property vSwitchId: VSwitch ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property zoneId: Zone ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property autoRenew: Whether Auto Renew.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property hostName: Host Name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
        return null;
    }

    /**
     * Property imageCategory: Host Image Category.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageCategory() {
        return null;
    }

    /**
     * Property osPassword:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOsPassword() {
        return null;
    }

    /**
     * Property period:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property tags: The tag of the resource.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cddc.RosDedicatedHost.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property usedTime:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsedTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DedicatedHostProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DedicatedHostProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DedicatedHostProps> {
        java.lang.Object dedicatedHostGroupId;
        java.lang.Object hostClass;
        java.lang.Object paymentType;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;
        java.lang.Object autoRenew;
        java.lang.Object hostName;
        java.lang.Object imageCategory;
        java.lang.Object osPassword;
        java.lang.Object period;
        java.util.List<com.aliyun.ros.cdk.cddc.RosDedicatedHost.TagsProperty> tags;
        java.lang.Object usedTime;

        /**
         * Sets the value of {@link DedicatedHostProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: Dedicated Host Group ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(java.lang.String dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: Dedicated Host Group ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getHostClass}
         * @param hostClass Property hostClass: Host Class. This parameter is required.
         * @return {@code this}
         */
        public Builder hostClass(java.lang.String hostClass) {
            this.hostClass = hostClass;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getHostClass}
         * @param hostClass Property hostClass: Host Class. This parameter is required.
         * @return {@code this}
         */
        public Builder hostClass(com.aliyun.ros.cdk.core.IResolvable hostClass) {
            this.hostClass = hostClass;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getPaymentType}
         * @param paymentType Property paymentType: Payment Type. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getPaymentType}
         * @param paymentType Property paymentType: Payment Type. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getZoneId}
         * @param zoneId Property zoneId: Zone ID. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getZoneId}
         * @param zoneId Property zoneId: Zone ID. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether Auto Renew.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.String autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether Auto Renew.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getHostName}
         * @param hostName Property hostName: Host Name.
         * @return {@code this}
         */
        public Builder hostName(java.lang.String hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getHostName}
         * @param hostName Property hostName: Host Name.
         * @return {@code this}
         */
        public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getImageCategory}
         * @param imageCategory Property imageCategory: Host Image Category.
         * @return {@code this}
         */
        public Builder imageCategory(java.lang.String imageCategory) {
            this.imageCategory = imageCategory;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getImageCategory}
         * @param imageCategory Property imageCategory: Host Image Category.
         * @return {@code this}
         */
        public Builder imageCategory(com.aliyun.ros.cdk.core.IResolvable imageCategory) {
            this.imageCategory = imageCategory;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getOsPassword}
         * @param osPassword Property osPassword:.
         * @return {@code this}
         */
        public Builder osPassword(java.lang.String osPassword) {
            this.osPassword = osPassword;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getOsPassword}
         * @param osPassword Property osPassword:.
         * @return {@code this}
         */
        public Builder osPassword(com.aliyun.ros.cdk.core.IResolvable osPassword) {
            this.osPassword = osPassword;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getPeriod}
         * @param period Property period:.
         * @return {@code this}
         */
        public Builder period(java.lang.String period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getPeriod}
         * @param period Property period:.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getTags}
         * @param tags Property tags: The tag of the resource.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cddc.RosDedicatedHost.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.cddc.RosDedicatedHost.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getUsedTime}
         * @param usedTime Property usedTime:.
         * @return {@code this}
         */
        public Builder usedTime(java.lang.String usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getUsedTime}
         * @param usedTime Property usedTime:.
         * @return {@code this}
         */
        public Builder usedTime(com.aliyun.ros.cdk.core.IResolvable usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DedicatedHostProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DedicatedHostProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DedicatedHostProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DedicatedHostProps {
        private final java.lang.Object dedicatedHostGroupId;
        private final java.lang.Object hostClass;
        private final java.lang.Object paymentType;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;
        private final java.lang.Object autoRenew;
        private final java.lang.Object hostName;
        private final java.lang.Object imageCategory;
        private final java.lang.Object osPassword;
        private final java.lang.Object period;
        private final java.util.List<com.aliyun.ros.cdk.cddc.RosDedicatedHost.TagsProperty> tags;
        private final java.lang.Object usedTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dedicatedHostGroupId = software.amazon.jsii.Kernel.get(this, "dedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostClass = software.amazon.jsii.Kernel.get(this, "hostClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageCategory = software.amazon.jsii.Kernel.get(this, "imageCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.osPassword = software.amazon.jsii.Kernel.get(this, "osPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cddc.RosDedicatedHost.TagsProperty.class)));
            this.usedTime = software.amazon.jsii.Kernel.get(this, "usedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dedicatedHostGroupId = java.util.Objects.requireNonNull(builder.dedicatedHostGroupId, "dedicatedHostGroupId is required");
            this.hostClass = java.util.Objects.requireNonNull(builder.hostClass, "hostClass is required");
            this.paymentType = java.util.Objects.requireNonNull(builder.paymentType, "paymentType is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.autoRenew = builder.autoRenew;
            this.hostName = builder.hostName;
            this.imageCategory = builder.imageCategory;
            this.osPassword = builder.osPassword;
            this.period = builder.period;
            this.tags = (java.util.List<com.aliyun.ros.cdk.cddc.RosDedicatedHost.TagsProperty>)builder.tags;
            this.usedTime = builder.usedTime;
        }

        @Override
        public final java.lang.Object getDedicatedHostGroupId() {
            return this.dedicatedHostGroupId;
        }

        @Override
        public final java.lang.Object getHostClass() {
            return this.hostClass;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
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
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getHostName() {
            return this.hostName;
        }

        @Override
        public final java.lang.Object getImageCategory() {
            return this.imageCategory;
        }

        @Override
        public final java.lang.Object getOsPassword() {
            return this.osPassword;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.cddc.RosDedicatedHost.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getUsedTime() {
            return this.usedTime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dedicatedHostGroupId", om.valueToTree(this.getDedicatedHostGroupId()));
            data.set("hostClass", om.valueToTree(this.getHostClass()));
            data.set("paymentType", om.valueToTree(this.getPaymentType()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getHostName() != null) {
                data.set("hostName", om.valueToTree(this.getHostName()));
            }
            if (this.getImageCategory() != null) {
                data.set("imageCategory", om.valueToTree(this.getImageCategory()));
            }
            if (this.getOsPassword() != null) {
                data.set("osPassword", om.valueToTree(this.getOsPassword()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUsedTime() != null) {
                data.set("usedTime", om.valueToTree(this.getUsedTime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cddc.DedicatedHostProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DedicatedHostProps.Jsii$Proxy that = (DedicatedHostProps.Jsii$Proxy) o;

            if (!dedicatedHostGroupId.equals(that.dedicatedHostGroupId)) return false;
            if (!hostClass.equals(that.hostClass)) return false;
            if (!paymentType.equals(that.paymentType)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.hostName != null ? !this.hostName.equals(that.hostName) : that.hostName != null) return false;
            if (this.imageCategory != null ? !this.imageCategory.equals(that.imageCategory) : that.imageCategory != null) return false;
            if (this.osPassword != null ? !this.osPassword.equals(that.osPassword) : that.osPassword != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.usedTime != null ? this.usedTime.equals(that.usedTime) : that.usedTime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dedicatedHostGroupId.hashCode();
            result = 31 * result + (this.hostClass.hashCode());
            result = 31 * result + (this.paymentType.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.hostName != null ? this.hostName.hashCode() : 0);
            result = 31 * result + (this.imageCategory != null ? this.imageCategory.hashCode() : 0);
            result = 31 * result + (this.osPassword != null ? this.osPassword.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.usedTime != null ? this.usedTime.hashCode() : 0);
            return result;
        }
    }
}
