package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::CommonBandwidthPackage`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-06-08T09:23:36.592Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageProps")
@software.amazon.jsii.Jsii.Proxy(RosCommonBandwidthPackageProps.Jsii$Proxy.class)
public interface RosCommonBandwidthPackageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidth();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRatio() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackage.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZone() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCommonBandwidthPackageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCommonBandwidthPackageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCommonBandwidthPackageProps> {
        java.lang.Object bandwidth;
        java.lang.Object description;
        java.lang.Object internetChargeType;
        java.lang.Object isp;
        java.lang.Object name;
        java.lang.Object ratio;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackage.TagsProperty> tags;
        java.lang.Object zone;

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getIsp}
         * @param isp the value to be set.
         * @return {@code this}
         */
        public Builder isp(java.lang.String isp) {
            this.isp = isp;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getIsp}
         * @param isp the value to be set.
         * @return {@code this}
         */
        public Builder isp(com.aliyun.ros.cdk.core.IResolvable isp) {
            this.isp = isp;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getRatio}
         * @param ratio the value to be set.
         * @return {@code this}
         */
        public Builder ratio(java.lang.Number ratio) {
            this.ratio = ratio;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getRatio}
         * @param ratio the value to be set.
         * @return {@code this}
         */
        public Builder ratio(com.aliyun.ros.cdk.core.IResolvable ratio) {
            this.ratio = ratio;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackage.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackage.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getZone}
         * @param zone the value to be set.
         * @return {@code this}
         */
        public Builder zone(java.lang.String zone) {
            this.zone = zone;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageProps#getZone}
         * @param zone the value to be set.
         * @return {@code this}
         */
        public Builder zone(com.aliyun.ros.cdk.core.IResolvable zone) {
            this.zone = zone;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCommonBandwidthPackageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCommonBandwidthPackageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCommonBandwidthPackageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCommonBandwidthPackageProps {
        private final java.lang.Object bandwidth;
        private final java.lang.Object description;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object isp;
        private final java.lang.Object name;
        private final java.lang.Object ratio;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackage.TagsProperty> tags;
        private final java.lang.Object zone;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isp = software.amazon.jsii.Kernel.get(this, "isp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ratio = software.amazon.jsii.Kernel.get(this, "ratio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackage.TagsProperty.class)));
            this.zone = software.amazon.jsii.Kernel.get(this, "zone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidth = java.util.Objects.requireNonNull(builder.bandwidth, "bandwidth is required");
            this.description = builder.description;
            this.internetChargeType = builder.internetChargeType;
            this.isp = builder.isp;
            this.name = builder.name;
            this.ratio = builder.ratio;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackage.TagsProperty>)builder.tags;
            this.zone = builder.zone;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Object getIsp() {
            return this.isp;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getRatio() {
            return this.ratio;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.vpc.RosCommonBandwidthPackage.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getZone() {
            return this.zone;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getIsp() != null) {
                data.set("isp", om.valueToTree(this.getIsp()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getRatio() != null) {
                data.set("ratio", om.valueToTree(this.getRatio()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getZone() != null) {
                data.set("zone", om.valueToTree(this.getZone()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCommonBandwidthPackageProps.Jsii$Proxy that = (RosCommonBandwidthPackageProps.Jsii$Proxy) o;

            if (!bandwidth.equals(that.bandwidth)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.isp != null ? !this.isp.equals(that.isp) : that.isp != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.ratio != null ? !this.ratio.equals(that.ratio) : that.ratio != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.zone != null ? this.zone.equals(that.zone) : that.zone == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bandwidth.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.isp != null ? this.isp.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.ratio != null ? this.ratio.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.zone != null ? this.zone.hashCode() : 0);
            return result;
        }
    }
}
