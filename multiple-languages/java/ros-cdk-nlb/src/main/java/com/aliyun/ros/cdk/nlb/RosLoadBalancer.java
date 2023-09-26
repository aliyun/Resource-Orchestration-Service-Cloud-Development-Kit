package com.aliyun.ros.cdk.nlb;

/**
 * A ROS template type:  <code>ALIYUN::NLB::LoadBalancer</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:46.765Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosLoadBalancer")
public class RosLoadBalancer extends com.aliyun.ros.cdk.core.RosResource {

    protected RosLoadBalancer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosLoadBalancer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.nlb.RosLoadBalancer.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::NLB::LoadBalancer</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosLoadBalancer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.RosLoadBalancerProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddressIpVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddressType() {
        return software.amazon.jsii.Kernel.get(this, "attrAddressType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDnsName() {
        return software.amazon.jsii.Kernel.get(this, "attrDnsName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerType() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneMappings() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneMappings", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAddressType() {
        return software.amazon.jsii.Kernel.get(this, "addressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAddressType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "addressType", java.util.Objects.requireNonNull(value, "addressType is required"));
    }

    /**
     */
    public void setAddressType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "addressType", java.util.Objects.requireNonNull(value, "addressType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getZoneMappings() {
        return software.amazon.jsii.Kernel.get(this, "zoneMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneMappings(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneMappings", java.util.Objects.requireNonNull(value, "zoneMappings is required"));
    }

    /**
     */
    public void setZoneMappings(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.nlb.RosLoadBalancer.ZoneMappingsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.nlb.RosLoadBalancer.ZoneMappingsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "zoneMappings", java.util.Objects.requireNonNull(value, "zoneMappings is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAddressIpVersion() {
        return software.amazon.jsii.Kernel.get(this, "addressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAddressIpVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "addressIpVersion", value);
    }

    /**
     */
    public void setAddressIpVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "addressIpVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBandwidthPackageId() {
        return software.amazon.jsii.Kernel.get(this, "bandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBandwidthPackageId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bandwidthPackageId", value);
    }

    /**
     */
    public void setBandwidthPackageId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bandwidthPackageId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCrossZoneEnabled() {
        return software.amazon.jsii.Kernel.get(this, "crossZoneEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCrossZoneEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "crossZoneEnabled", value);
    }

    /**
     */
    public void setCrossZoneEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "crossZoneEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtectionConfig() {
        return software.amazon.jsii.Kernel.get(this, "deletionProtectionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeletionProtectionConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deletionProtectionConfig", value);
    }

    /**
     */
    public void setDeletionProtectionConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.nlb.RosLoadBalancer.DeletionProtectionConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "deletionProtectionConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerBillingConfig() {
        return software.amazon.jsii.Kernel.get(this, "loadBalancerBillingConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoadBalancerBillingConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerBillingConfig", value);
    }

    /**
     */
    public void setLoadBalancerBillingConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.nlb.RosLoadBalancer.LoadBalancerBillingConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerBillingConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerName() {
        return software.amazon.jsii.Kernel.get(this, "loadBalancerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoadBalancerName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerName", value);
    }

    /**
     */
    public void setLoadBalancerName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerType() {
        return software.amazon.jsii.Kernel.get(this, "loadBalancerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoadBalancerType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerType", value);
    }

    /**
     */
    public void setLoadBalancerType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getModificationProtectionConfig() {
        return software.amazon.jsii.Kernel.get(this, "modificationProtectionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setModificationProtectionConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "modificationProtectionConfig", value);
    }

    /**
     */
    public void setModificationProtectionConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.nlb.RosLoadBalancer.ModificationProtectionConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "modificationProtectionConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.nlb.RosLoadBalancer.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.nlb.RosLoadBalancer.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlb.RosLoadBalancer.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.nlb.RosLoadBalancer.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTrafficAffinityEnabled() {
        return software.amazon.jsii.Kernel.get(this, "trafficAffinityEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficAffinityEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "trafficAffinityEnabled", value);
    }

    /**
     */
    public void setTrafficAffinityEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficAffinityEnabled", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosLoadBalancer.DeletionProtectionConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(DeletionProtectionConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DeletionProtectionConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnabled();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReason() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DeletionProtectionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DeletionProtectionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DeletionProtectionConfigProperty> {
            java.lang.Object enabled;
            java.lang.Object reason;

            /**
             * Sets the value of {@link DeletionProtectionConfigProperty#getEnabled}
             * @param enabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(java.lang.String enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Sets the value of {@link DeletionProtectionConfigProperty#getEnabled}
             * @param enabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(com.aliyun.ros.cdk.core.IResolvable enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Sets the value of {@link DeletionProtectionConfigProperty#getReason}
             * @param reason the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder reason(java.lang.String reason) {
                this.reason = reason;
                return this;
            }

            /**
             * Sets the value of {@link DeletionProtectionConfigProperty#getReason}
             * @param reason the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder reason(com.aliyun.ros.cdk.core.IResolvable reason) {
                this.reason = reason;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DeletionProtectionConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DeletionProtectionConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DeletionProtectionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeletionProtectionConfigProperty {
            private final java.lang.Object enabled;
            private final java.lang.Object reason;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enabled = software.amazon.jsii.Kernel.get(this, "enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.reason = software.amazon.jsii.Kernel.get(this, "reason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enabled = java.util.Objects.requireNonNull(builder.enabled, "enabled is required");
                this.reason = builder.reason;
            }

            @Override
            public final java.lang.Object getEnabled() {
                return this.enabled;
            }

            @Override
            public final java.lang.Object getReason() {
                return this.reason;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("enabled", om.valueToTree(this.getEnabled()));
                if (this.getReason() != null) {
                    data.set("reason", om.valueToTree(this.getReason()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.RosLoadBalancer.DeletionProtectionConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DeletionProtectionConfigProperty.Jsii$Proxy that = (DeletionProtectionConfigProperty.Jsii$Proxy) o;

                if (!enabled.equals(that.enabled)) return false;
                return this.reason != null ? this.reason.equals(that.reason) : that.reason == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enabled.hashCode();
                result = 31 * result + (this.reason != null ? this.reason.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosLoadBalancer.LoadBalancerAddressesProperty")
    @software.amazon.jsii.Jsii.Proxy(LoadBalancerAddressesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LoadBalancerAddressesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getAllocationId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIPv4Address() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link LoadBalancerAddressesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LoadBalancerAddressesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LoadBalancerAddressesProperty> {
            java.lang.Object allocationId;
            java.lang.Object privateIPv4Address;

            /**
             * Sets the value of {@link LoadBalancerAddressesProperty#getAllocationId}
             * @param allocationId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allocationId(java.lang.String allocationId) {
                this.allocationId = allocationId;
                return this;
            }

            /**
             * Sets the value of {@link LoadBalancerAddressesProperty#getAllocationId}
             * @param allocationId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allocationId(com.aliyun.ros.cdk.core.IResolvable allocationId) {
                this.allocationId = allocationId;
                return this;
            }

            /**
             * Sets the value of {@link LoadBalancerAddressesProperty#getPrivateIPv4Address}
             * @param privateIPv4Address the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder privateIPv4Address(java.lang.String privateIPv4Address) {
                this.privateIPv4Address = privateIPv4Address;
                return this;
            }

            /**
             * Sets the value of {@link LoadBalancerAddressesProperty#getPrivateIPv4Address}
             * @param privateIPv4Address the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder privateIPv4Address(com.aliyun.ros.cdk.core.IResolvable privateIPv4Address) {
                this.privateIPv4Address = privateIPv4Address;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LoadBalancerAddressesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LoadBalancerAddressesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LoadBalancerAddressesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LoadBalancerAddressesProperty {
            private final java.lang.Object allocationId;
            private final java.lang.Object privateIPv4Address;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.allocationId = software.amazon.jsii.Kernel.get(this, "allocationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.privateIPv4Address = software.amazon.jsii.Kernel.get(this, "privateIPv4Address", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.allocationId = java.util.Objects.requireNonNull(builder.allocationId, "allocationId is required");
                this.privateIPv4Address = builder.privateIPv4Address;
            }

            @Override
            public final java.lang.Object getAllocationId() {
                return this.allocationId;
            }

            @Override
            public final java.lang.Object getPrivateIPv4Address() {
                return this.privateIPv4Address;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("allocationId", om.valueToTree(this.getAllocationId()));
                if (this.getPrivateIPv4Address() != null) {
                    data.set("privateIPv4Address", om.valueToTree(this.getPrivateIPv4Address()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.RosLoadBalancer.LoadBalancerAddressesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LoadBalancerAddressesProperty.Jsii$Proxy that = (LoadBalancerAddressesProperty.Jsii$Proxy) o;

                if (!allocationId.equals(that.allocationId)) return false;
                return this.privateIPv4Address != null ? this.privateIPv4Address.equals(that.privateIPv4Address) : that.privateIPv4Address == null;
            }

            @Override
            public final int hashCode() {
                int result = this.allocationId.hashCode();
                result = 31 * result + (this.privateIPv4Address != null ? this.privateIPv4Address.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosLoadBalancer.LoadBalancerBillingConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(LoadBalancerBillingConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LoadBalancerBillingConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link LoadBalancerBillingConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LoadBalancerBillingConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LoadBalancerBillingConfigProperty> {
            java.lang.Object payType;

            /**
             * Sets the value of {@link LoadBalancerBillingConfigProperty#getPayType}
             * @param payType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder payType(java.lang.String payType) {
                this.payType = payType;
                return this;
            }

            /**
             * Sets the value of {@link LoadBalancerBillingConfigProperty#getPayType}
             * @param payType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
                this.payType = payType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LoadBalancerBillingConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LoadBalancerBillingConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LoadBalancerBillingConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LoadBalancerBillingConfigProperty {
            private final java.lang.Object payType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.payType = builder.payType;
            }

            @Override
            public final java.lang.Object getPayType() {
                return this.payType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getPayType() != null) {
                    data.set("payType", om.valueToTree(this.getPayType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.RosLoadBalancer.LoadBalancerBillingConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LoadBalancerBillingConfigProperty.Jsii$Proxy that = (LoadBalancerBillingConfigProperty.Jsii$Proxy) o;

                return this.payType != null ? this.payType.equals(that.payType) : that.payType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.payType != null ? this.payType.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosLoadBalancer.ModificationProtectionConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ModificationProtectionConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ModificationProtectionConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getStatus();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReason() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ModificationProtectionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ModificationProtectionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ModificationProtectionConfigProperty> {
            java.lang.Object status;
            java.lang.Object reason;

            /**
             * Sets the value of {@link ModificationProtectionConfigProperty#getStatus}
             * @param status the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder status(java.lang.String status) {
                this.status = status;
                return this;
            }

            /**
             * Sets the value of {@link ModificationProtectionConfigProperty#getStatus}
             * @param status the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
                this.status = status;
                return this;
            }

            /**
             * Sets the value of {@link ModificationProtectionConfigProperty#getReason}
             * @param reason the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder reason(java.lang.String reason) {
                this.reason = reason;
                return this;
            }

            /**
             * Sets the value of {@link ModificationProtectionConfigProperty#getReason}
             * @param reason the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder reason(com.aliyun.ros.cdk.core.IResolvable reason) {
                this.reason = reason;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ModificationProtectionConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ModificationProtectionConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ModificationProtectionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ModificationProtectionConfigProperty {
            private final java.lang.Object status;
            private final java.lang.Object reason;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.reason = software.amazon.jsii.Kernel.get(this, "reason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.status = java.util.Objects.requireNonNull(builder.status, "status is required");
                this.reason = builder.reason;
            }

            @Override
            public final java.lang.Object getStatus() {
                return this.status;
            }

            @Override
            public final java.lang.Object getReason() {
                return this.reason;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("status", om.valueToTree(this.getStatus()));
                if (this.getReason() != null) {
                    data.set("reason", om.valueToTree(this.getReason()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.RosLoadBalancer.ModificationProtectionConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ModificationProtectionConfigProperty.Jsii$Proxy that = (ModificationProtectionConfigProperty.Jsii$Proxy) o;

                if (!status.equals(that.status)) return false;
                return this.reason != null ? this.reason.equals(that.reason) : that.reason == null;
            }

            @Override
            public final int hashCode() {
                int result = this.status.hashCode();
                result = 31 * result + (this.reason != null ? this.reason.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosLoadBalancer.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.RosLoadBalancer.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosLoadBalancer.ZoneMappingsProperty")
    @software.amazon.jsii.Jsii.Proxy(ZoneMappingsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ZoneMappingsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAllocationId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerAddresses() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIPv4Address() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ZoneMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ZoneMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ZoneMappingsProperty> {
            java.lang.Object vSwitchId;
            java.lang.Object zoneId;
            java.lang.Object allocationId;
            java.lang.Object loadBalancerAddresses;
            java.lang.Object privateIPv4Address;

            /**
             * Sets the value of {@link ZoneMappingsProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link ZoneMappingsProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link ZoneMappingsProperty#getZoneId}
             * @param zoneId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(java.lang.String zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link ZoneMappingsProperty#getZoneId}
             * @param zoneId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link ZoneMappingsProperty#getAllocationId}
             * @param allocationId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allocationId(java.lang.String allocationId) {
                this.allocationId = allocationId;
                return this;
            }

            /**
             * Sets the value of {@link ZoneMappingsProperty#getAllocationId}
             * @param allocationId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allocationId(com.aliyun.ros.cdk.core.IResolvable allocationId) {
                this.allocationId = allocationId;
                return this;
            }

            /**
             * Sets the value of {@link ZoneMappingsProperty#getLoadBalancerAddresses}
             * @param loadBalancerAddresses the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder loadBalancerAddresses(com.aliyun.ros.cdk.core.IResolvable loadBalancerAddresses) {
                this.loadBalancerAddresses = loadBalancerAddresses;
                return this;
            }

            /**
             * Sets the value of {@link ZoneMappingsProperty#getLoadBalancerAddresses}
             * @param loadBalancerAddresses the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder loadBalancerAddresses(java.util.List<? extends java.lang.Object> loadBalancerAddresses) {
                this.loadBalancerAddresses = loadBalancerAddresses;
                return this;
            }

            /**
             * Sets the value of {@link ZoneMappingsProperty#getPrivateIPv4Address}
             * @param privateIPv4Address the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder privateIPv4Address(java.lang.String privateIPv4Address) {
                this.privateIPv4Address = privateIPv4Address;
                return this;
            }

            /**
             * Sets the value of {@link ZoneMappingsProperty#getPrivateIPv4Address}
             * @param privateIPv4Address the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder privateIPv4Address(com.aliyun.ros.cdk.core.IResolvable privateIPv4Address) {
                this.privateIPv4Address = privateIPv4Address;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ZoneMappingsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ZoneMappingsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ZoneMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ZoneMappingsProperty {
            private final java.lang.Object vSwitchId;
            private final java.lang.Object zoneId;
            private final java.lang.Object allocationId;
            private final java.lang.Object loadBalancerAddresses;
            private final java.lang.Object privateIPv4Address;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.allocationId = software.amazon.jsii.Kernel.get(this, "allocationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.loadBalancerAddresses = software.amazon.jsii.Kernel.get(this, "loadBalancerAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.privateIPv4Address = software.amazon.jsii.Kernel.get(this, "privateIPv4Address", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
                this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
                this.allocationId = builder.allocationId;
                this.loadBalancerAddresses = builder.loadBalancerAddresses;
                this.privateIPv4Address = builder.privateIPv4Address;
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
            public final java.lang.Object getAllocationId() {
                return this.allocationId;
            }

            @Override
            public final java.lang.Object getLoadBalancerAddresses() {
                return this.loadBalancerAddresses;
            }

            @Override
            public final java.lang.Object getPrivateIPv4Address() {
                return this.privateIPv4Address;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
                data.set("zoneId", om.valueToTree(this.getZoneId()));
                if (this.getAllocationId() != null) {
                    data.set("allocationId", om.valueToTree(this.getAllocationId()));
                }
                if (this.getLoadBalancerAddresses() != null) {
                    data.set("loadBalancerAddresses", om.valueToTree(this.getLoadBalancerAddresses()));
                }
                if (this.getPrivateIPv4Address() != null) {
                    data.set("privateIPv4Address", om.valueToTree(this.getPrivateIPv4Address()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.RosLoadBalancer.ZoneMappingsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ZoneMappingsProperty.Jsii$Proxy that = (ZoneMappingsProperty.Jsii$Proxy) o;

                if (!vSwitchId.equals(that.vSwitchId)) return false;
                if (!zoneId.equals(that.zoneId)) return false;
                if (this.allocationId != null ? !this.allocationId.equals(that.allocationId) : that.allocationId != null) return false;
                if (this.loadBalancerAddresses != null ? !this.loadBalancerAddresses.equals(that.loadBalancerAddresses) : that.loadBalancerAddresses != null) return false;
                return this.privateIPv4Address != null ? this.privateIPv4Address.equals(that.privateIPv4Address) : that.privateIPv4Address == null;
            }

            @Override
            public final int hashCode() {
                int result = this.vSwitchId.hashCode();
                result = 31 * result + (this.zoneId.hashCode());
                result = 31 * result + (this.allocationId != null ? this.allocationId.hashCode() : 0);
                result = 31 * result + (this.loadBalancerAddresses != null ? this.loadBalancerAddresses.hashCode() : 0);
                result = 31 * result + (this.privateIPv4Address != null ? this.privateIPv4Address.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nlb.RosLoadBalancer}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nlb.RosLoadBalancer> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.nlb.RosLoadBalancerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nlb.RosLoadBalancerProps.Builder();
        }

        /**
         * @return {@code this}
         * @param addressType This parameter is required.
         */
        public Builder addressType(final java.lang.String addressType) {
            this.props.addressType(addressType);
            return this;
        }
        /**
         * @return {@code this}
         * @param addressType This parameter is required.
         */
        public Builder addressType(final com.aliyun.ros.cdk.core.IResolvable addressType) {
            this.props.addressType(addressType);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneMappings This parameter is required.
         */
        public Builder zoneMappings(final com.aliyun.ros.cdk.core.IResolvable zoneMappings) {
            this.props.zoneMappings(zoneMappings);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneMappings This parameter is required.
         */
        public Builder zoneMappings(final java.util.List<? extends java.lang.Object> zoneMappings) {
            this.props.zoneMappings(zoneMappings);
            return this;
        }

        /**
         * @return {@code this}
         * @param addressIpVersion This parameter is required.
         */
        public Builder addressIpVersion(final java.lang.String addressIpVersion) {
            this.props.addressIpVersion(addressIpVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param addressIpVersion This parameter is required.
         */
        public Builder addressIpVersion(final com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.props.addressIpVersion(addressIpVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param bandwidthPackageId This parameter is required.
         */
        public Builder bandwidthPackageId(final java.lang.String bandwidthPackageId) {
            this.props.bandwidthPackageId(bandwidthPackageId);
            return this;
        }
        /**
         * @return {@code this}
         * @param bandwidthPackageId This parameter is required.
         */
        public Builder bandwidthPackageId(final com.aliyun.ros.cdk.core.IResolvable bandwidthPackageId) {
            this.props.bandwidthPackageId(bandwidthPackageId);
            return this;
        }

        /**
         * @return {@code this}
         * @param crossZoneEnabled This parameter is required.
         */
        public Builder crossZoneEnabled(final java.lang.Boolean crossZoneEnabled) {
            this.props.crossZoneEnabled(crossZoneEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param crossZoneEnabled This parameter is required.
         */
        public Builder crossZoneEnabled(final com.aliyun.ros.cdk.core.IResolvable crossZoneEnabled) {
            this.props.crossZoneEnabled(crossZoneEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param deletionProtectionConfig This parameter is required.
         */
        public Builder deletionProtectionConfig(final com.aliyun.ros.cdk.core.IResolvable deletionProtectionConfig) {
            this.props.deletionProtectionConfig(deletionProtectionConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param deletionProtectionConfig This parameter is required.
         */
        public Builder deletionProtectionConfig(final com.aliyun.ros.cdk.nlb.RosLoadBalancer.DeletionProtectionConfigProperty deletionProtectionConfig) {
            this.props.deletionProtectionConfig(deletionProtectionConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalancerBillingConfig This parameter is required.
         */
        public Builder loadBalancerBillingConfig(final com.aliyun.ros.cdk.core.IResolvable loadBalancerBillingConfig) {
            this.props.loadBalancerBillingConfig(loadBalancerBillingConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param loadBalancerBillingConfig This parameter is required.
         */
        public Builder loadBalancerBillingConfig(final com.aliyun.ros.cdk.nlb.RosLoadBalancer.LoadBalancerBillingConfigProperty loadBalancerBillingConfig) {
            this.props.loadBalancerBillingConfig(loadBalancerBillingConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalancerName This parameter is required.
         */
        public Builder loadBalancerName(final java.lang.String loadBalancerName) {
            this.props.loadBalancerName(loadBalancerName);
            return this;
        }
        /**
         * @return {@code this}
         * @param loadBalancerName This parameter is required.
         */
        public Builder loadBalancerName(final com.aliyun.ros.cdk.core.IResolvable loadBalancerName) {
            this.props.loadBalancerName(loadBalancerName);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalancerType This parameter is required.
         */
        public Builder loadBalancerType(final java.lang.String loadBalancerType) {
            this.props.loadBalancerType(loadBalancerType);
            return this;
        }
        /**
         * @return {@code this}
         * @param loadBalancerType This parameter is required.
         */
        public Builder loadBalancerType(final com.aliyun.ros.cdk.core.IResolvable loadBalancerType) {
            this.props.loadBalancerType(loadBalancerType);
            return this;
        }

        /**
         * @return {@code this}
         * @param modificationProtectionConfig This parameter is required.
         */
        public Builder modificationProtectionConfig(final com.aliyun.ros.cdk.core.IResolvable modificationProtectionConfig) {
            this.props.modificationProtectionConfig(modificationProtectionConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param modificationProtectionConfig This parameter is required.
         */
        public Builder modificationProtectionConfig(final com.aliyun.ros.cdk.nlb.RosLoadBalancer.ModificationProtectionConfigProperty modificationProtectionConfig) {
            this.props.modificationProtectionConfig(modificationProtectionConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.nlb.RosLoadBalancer.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficAffinityEnabled This parameter is required.
         */
        public Builder trafficAffinityEnabled(final java.lang.Boolean trafficAffinityEnabled) {
            this.props.trafficAffinityEnabled(trafficAffinityEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficAffinityEnabled This parameter is required.
         */
        public Builder trafficAffinityEnabled(final com.aliyun.ros.cdk.core.IResolvable trafficAffinityEnabled) {
            this.props.trafficAffinityEnabled(trafficAffinityEnabled);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nlb.RosLoadBalancer}.
         */
        @Override
        public com.aliyun.ros.cdk.nlb.RosLoadBalancer build() {
            return new com.aliyun.ros.cdk.nlb.RosLoadBalancer(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
