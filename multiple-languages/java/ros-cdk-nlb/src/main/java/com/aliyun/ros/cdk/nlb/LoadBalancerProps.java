package com.aliyun.ros.cdk.nlb;

/**
 * Properties for defining a <code>LoadBalancer</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-loadbalancer
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:41.656Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.LoadBalancerProps")
@software.amazon.jsii.Jsii.Proxy(LoadBalancerProps.Jsii$Proxy.class)
public interface LoadBalancerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property addressType: The type of IP address that the NLB instance uses to provide services.
     * <p>
     * Valid values:
     * Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
     * Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAddressType();

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property zoneMappings: The zones and the vSwitches in the zones.
     * <p>
     * You must specify at least two zones.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneMappings();

    /**
     * Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressIpVersion() {
        return null;
    }

    /**
     * Property bandwidthPackageId: Attach common bandwidth package to load balancer.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidthPackageId() {
        return null;
    }

    /**
     * Property crossZoneEnabled: Whether enable cross zone.
     * <p>
     * Default: true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrossZoneEnabled() {
        return null;
    }

    /**
     * Property deletionProtectionConfig: The configuration of the deletion protection feature.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtectionConfig() {
        return null;
    }

    /**
     * Property loadBalancerBillingConfig: The configuration of the billing method.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerBillingConfig() {
        return null;
    }

    /**
     * Property loadBalancerName: The name of the NLB instance.
     * <p>
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerName() {
        return null;
    }

    /**
     * Property loadBalancerType: The type of the NLB instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerType() {
        return null;
    }

    /**
     * Property modificationProtectionConfig: The configuration of the configuration read-only mode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getModificationProtectionConfig() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.nlb.RosLoadBalancer.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property trafficAffinityEnabled: Whether enable traffic affinity.
     * <p>
     * Default: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrafficAffinityEnabled() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LoadBalancerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LoadBalancerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LoadBalancerProps> {
        java.lang.Object addressType;
        java.lang.Object vpcId;
        java.lang.Object zoneMappings;
        java.lang.Object addressIpVersion;
        java.lang.Object bandwidthPackageId;
        java.lang.Object crossZoneEnabled;
        java.lang.Object deletionProtectionConfig;
        java.lang.Object loadBalancerBillingConfig;
        java.lang.Object loadBalancerName;
        java.lang.Object loadBalancerType;
        java.lang.Object modificationProtectionConfig;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.nlb.RosLoadBalancer.TagsProperty> tags;
        java.lang.Object trafficAffinityEnabled;

        /**
         * Sets the value of {@link LoadBalancerProps#getAddressType}
         * @param addressType Property addressType: The type of IP address that the NLB instance uses to provide services. This parameter is required.
         *                    Valid values:
         *                    Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
         *                    Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
         * @return {@code this}
         */
        public Builder addressType(java.lang.String addressType) {
            this.addressType = addressType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getAddressType}
         * @param addressType Property addressType: The type of IP address that the NLB instance uses to provide services. This parameter is required.
         *                    Valid values:
         *                    Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
         *                    Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
         * @return {@code this}
         */
        public Builder addressType(com.aliyun.ros.cdk.core.IResolvable addressType) {
            this.addressType = addressType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getZoneMappings}
         * @param zoneMappings Property zoneMappings: The zones and the vSwitches in the zones. This parameter is required.
         *                     You must specify at least two zones.
         * @return {@code this}
         */
        public Builder zoneMappings(com.aliyun.ros.cdk.core.IResolvable zoneMappings) {
            this.zoneMappings = zoneMappings;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getZoneMappings}
         * @param zoneMappings Property zoneMappings: The zones and the vSwitches in the zones. This parameter is required.
         *                     You must specify at least two zones.
         * @return {@code this}
         */
        public Builder zoneMappings(java.util.List<? extends java.lang.Object> zoneMappings) {
            this.zoneMappings = zoneMappings;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getAddressIpVersion}
         * @param addressIpVersion Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.
         * @return {@code this}
         */
        public Builder addressIpVersion(java.lang.String addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getAddressIpVersion}
         * @param addressIpVersion Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.
         * @return {@code this}
         */
        public Builder addressIpVersion(com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getBandwidthPackageId}
         * @param bandwidthPackageId Property bandwidthPackageId: Attach common bandwidth package to load balancer.
         * @return {@code this}
         */
        public Builder bandwidthPackageId(java.lang.String bandwidthPackageId) {
            this.bandwidthPackageId = bandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getBandwidthPackageId}
         * @param bandwidthPackageId Property bandwidthPackageId: Attach common bandwidth package to load balancer.
         * @return {@code this}
         */
        public Builder bandwidthPackageId(com.aliyun.ros.cdk.core.IResolvable bandwidthPackageId) {
            this.bandwidthPackageId = bandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getCrossZoneEnabled}
         * @param crossZoneEnabled Property crossZoneEnabled: Whether enable cross zone.
         *                         Default: true
         * @return {@code this}
         */
        public Builder crossZoneEnabled(java.lang.Boolean crossZoneEnabled) {
            this.crossZoneEnabled = crossZoneEnabled;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getCrossZoneEnabled}
         * @param crossZoneEnabled Property crossZoneEnabled: Whether enable cross zone.
         *                         Default: true
         * @return {@code this}
         */
        public Builder crossZoneEnabled(com.aliyun.ros.cdk.core.IResolvable crossZoneEnabled) {
            this.crossZoneEnabled = crossZoneEnabled;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getDeletionProtectionConfig}
         * @param deletionProtectionConfig Property deletionProtectionConfig: The configuration of the deletion protection feature.
         * @return {@code this}
         */
        public Builder deletionProtectionConfig(com.aliyun.ros.cdk.core.IResolvable deletionProtectionConfig) {
            this.deletionProtectionConfig = deletionProtectionConfig;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getDeletionProtectionConfig}
         * @param deletionProtectionConfig Property deletionProtectionConfig: The configuration of the deletion protection feature.
         * @return {@code this}
         */
        public Builder deletionProtectionConfig(com.aliyun.ros.cdk.nlb.RosLoadBalancer.DeletionProtectionConfigProperty deletionProtectionConfig) {
            this.deletionProtectionConfig = deletionProtectionConfig;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerBillingConfig}
         * @param loadBalancerBillingConfig Property loadBalancerBillingConfig: The configuration of the billing method.
         * @return {@code this}
         */
        public Builder loadBalancerBillingConfig(com.aliyun.ros.cdk.core.IResolvable loadBalancerBillingConfig) {
            this.loadBalancerBillingConfig = loadBalancerBillingConfig;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerBillingConfig}
         * @param loadBalancerBillingConfig Property loadBalancerBillingConfig: The configuration of the billing method.
         * @return {@code this}
         */
        public Builder loadBalancerBillingConfig(com.aliyun.ros.cdk.nlb.RosLoadBalancer.LoadBalancerBillingConfigProperty loadBalancerBillingConfig) {
            this.loadBalancerBillingConfig = loadBalancerBillingConfig;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerName}
         * @param loadBalancerName Property loadBalancerName: The name of the NLB instance.
         *                         The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder loadBalancerName(java.lang.String loadBalancerName) {
            this.loadBalancerName = loadBalancerName;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerName}
         * @param loadBalancerName Property loadBalancerName: The name of the NLB instance.
         *                         The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder loadBalancerName(com.aliyun.ros.cdk.core.IResolvable loadBalancerName) {
            this.loadBalancerName = loadBalancerName;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerType}
         * @param loadBalancerType Property loadBalancerType: The type of the NLB instance.
         * @return {@code this}
         */
        public Builder loadBalancerType(java.lang.String loadBalancerType) {
            this.loadBalancerType = loadBalancerType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerType}
         * @param loadBalancerType Property loadBalancerType: The type of the NLB instance.
         * @return {@code this}
         */
        public Builder loadBalancerType(com.aliyun.ros.cdk.core.IResolvable loadBalancerType) {
            this.loadBalancerType = loadBalancerType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getModificationProtectionConfig}
         * @param modificationProtectionConfig Property modificationProtectionConfig: The configuration of the configuration read-only mode.
         * @return {@code this}
         */
        public Builder modificationProtectionConfig(com.aliyun.ros.cdk.core.IResolvable modificationProtectionConfig) {
            this.modificationProtectionConfig = modificationProtectionConfig;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getModificationProtectionConfig}
         * @param modificationProtectionConfig Property modificationProtectionConfig: The configuration of the configuration read-only mode.
         * @return {@code this}
         */
        public Builder modificationProtectionConfig(com.aliyun.ros.cdk.nlb.RosLoadBalancer.ModificationProtectionConfigProperty modificationProtectionConfig) {
            this.modificationProtectionConfig = modificationProtectionConfig;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.nlb.RosLoadBalancer.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.nlb.RosLoadBalancer.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getTrafficAffinityEnabled}
         * @param trafficAffinityEnabled Property trafficAffinityEnabled: Whether enable traffic affinity.
         *                               Default: false
         * @return {@code this}
         */
        public Builder trafficAffinityEnabled(java.lang.Boolean trafficAffinityEnabled) {
            this.trafficAffinityEnabled = trafficAffinityEnabled;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getTrafficAffinityEnabled}
         * @param trafficAffinityEnabled Property trafficAffinityEnabled: Whether enable traffic affinity.
         *                               Default: false
         * @return {@code this}
         */
        public Builder trafficAffinityEnabled(com.aliyun.ros.cdk.core.IResolvable trafficAffinityEnabled) {
            this.trafficAffinityEnabled = trafficAffinityEnabled;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LoadBalancerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LoadBalancerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link LoadBalancerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LoadBalancerProps {
        private final java.lang.Object addressType;
        private final java.lang.Object vpcId;
        private final java.lang.Object zoneMappings;
        private final java.lang.Object addressIpVersion;
        private final java.lang.Object bandwidthPackageId;
        private final java.lang.Object crossZoneEnabled;
        private final java.lang.Object deletionProtectionConfig;
        private final java.lang.Object loadBalancerBillingConfig;
        private final java.lang.Object loadBalancerName;
        private final java.lang.Object loadBalancerType;
        private final java.lang.Object modificationProtectionConfig;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.nlb.RosLoadBalancer.TagsProperty> tags;
        private final java.lang.Object trafficAffinityEnabled;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addressType = software.amazon.jsii.Kernel.get(this, "addressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneMappings = software.amazon.jsii.Kernel.get(this, "zoneMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addressIpVersion = software.amazon.jsii.Kernel.get(this, "addressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidthPackageId = software.amazon.jsii.Kernel.get(this, "bandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crossZoneEnabled = software.amazon.jsii.Kernel.get(this, "crossZoneEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtectionConfig = software.amazon.jsii.Kernel.get(this, "deletionProtectionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerBillingConfig = software.amazon.jsii.Kernel.get(this, "loadBalancerBillingConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerName = software.amazon.jsii.Kernel.get(this, "loadBalancerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerType = software.amazon.jsii.Kernel.get(this, "loadBalancerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.modificationProtectionConfig = software.amazon.jsii.Kernel.get(this, "modificationProtectionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlb.RosLoadBalancer.TagsProperty.class)));
            this.trafficAffinityEnabled = software.amazon.jsii.Kernel.get(this, "trafficAffinityEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addressType = java.util.Objects.requireNonNull(builder.addressType, "addressType is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.zoneMappings = java.util.Objects.requireNonNull(builder.zoneMappings, "zoneMappings is required");
            this.addressIpVersion = builder.addressIpVersion;
            this.bandwidthPackageId = builder.bandwidthPackageId;
            this.crossZoneEnabled = builder.crossZoneEnabled;
            this.deletionProtectionConfig = builder.deletionProtectionConfig;
            this.loadBalancerBillingConfig = builder.loadBalancerBillingConfig;
            this.loadBalancerName = builder.loadBalancerName;
            this.loadBalancerType = builder.loadBalancerType;
            this.modificationProtectionConfig = builder.modificationProtectionConfig;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.nlb.RosLoadBalancer.TagsProperty>)builder.tags;
            this.trafficAffinityEnabled = builder.trafficAffinityEnabled;
        }

        @Override
        public final java.lang.Object getAddressType() {
            return this.addressType;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getZoneMappings() {
            return this.zoneMappings;
        }

        @Override
        public final java.lang.Object getAddressIpVersion() {
            return this.addressIpVersion;
        }

        @Override
        public final java.lang.Object getBandwidthPackageId() {
            return this.bandwidthPackageId;
        }

        @Override
        public final java.lang.Object getCrossZoneEnabled() {
            return this.crossZoneEnabled;
        }

        @Override
        public final java.lang.Object getDeletionProtectionConfig() {
            return this.deletionProtectionConfig;
        }

        @Override
        public final java.lang.Object getLoadBalancerBillingConfig() {
            return this.loadBalancerBillingConfig;
        }

        @Override
        public final java.lang.Object getLoadBalancerName() {
            return this.loadBalancerName;
        }

        @Override
        public final java.lang.Object getLoadBalancerType() {
            return this.loadBalancerType;
        }

        @Override
        public final java.lang.Object getModificationProtectionConfig() {
            return this.modificationProtectionConfig;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.nlb.RosLoadBalancer.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTrafficAffinityEnabled() {
            return this.trafficAffinityEnabled;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("addressType", om.valueToTree(this.getAddressType()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("zoneMappings", om.valueToTree(this.getZoneMappings()));
            if (this.getAddressIpVersion() != null) {
                data.set("addressIpVersion", om.valueToTree(this.getAddressIpVersion()));
            }
            if (this.getBandwidthPackageId() != null) {
                data.set("bandwidthPackageId", om.valueToTree(this.getBandwidthPackageId()));
            }
            if (this.getCrossZoneEnabled() != null) {
                data.set("crossZoneEnabled", om.valueToTree(this.getCrossZoneEnabled()));
            }
            if (this.getDeletionProtectionConfig() != null) {
                data.set("deletionProtectionConfig", om.valueToTree(this.getDeletionProtectionConfig()));
            }
            if (this.getLoadBalancerBillingConfig() != null) {
                data.set("loadBalancerBillingConfig", om.valueToTree(this.getLoadBalancerBillingConfig()));
            }
            if (this.getLoadBalancerName() != null) {
                data.set("loadBalancerName", om.valueToTree(this.getLoadBalancerName()));
            }
            if (this.getLoadBalancerType() != null) {
                data.set("loadBalancerType", om.valueToTree(this.getLoadBalancerType()));
            }
            if (this.getModificationProtectionConfig() != null) {
                data.set("modificationProtectionConfig", om.valueToTree(this.getModificationProtectionConfig()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTrafficAffinityEnabled() != null) {
                data.set("trafficAffinityEnabled", om.valueToTree(this.getTrafficAffinityEnabled()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.LoadBalancerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LoadBalancerProps.Jsii$Proxy that = (LoadBalancerProps.Jsii$Proxy) o;

            if (!addressType.equals(that.addressType)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!zoneMappings.equals(that.zoneMappings)) return false;
            if (this.addressIpVersion != null ? !this.addressIpVersion.equals(that.addressIpVersion) : that.addressIpVersion != null) return false;
            if (this.bandwidthPackageId != null ? !this.bandwidthPackageId.equals(that.bandwidthPackageId) : that.bandwidthPackageId != null) return false;
            if (this.crossZoneEnabled != null ? !this.crossZoneEnabled.equals(that.crossZoneEnabled) : that.crossZoneEnabled != null) return false;
            if (this.deletionProtectionConfig != null ? !this.deletionProtectionConfig.equals(that.deletionProtectionConfig) : that.deletionProtectionConfig != null) return false;
            if (this.loadBalancerBillingConfig != null ? !this.loadBalancerBillingConfig.equals(that.loadBalancerBillingConfig) : that.loadBalancerBillingConfig != null) return false;
            if (this.loadBalancerName != null ? !this.loadBalancerName.equals(that.loadBalancerName) : that.loadBalancerName != null) return false;
            if (this.loadBalancerType != null ? !this.loadBalancerType.equals(that.loadBalancerType) : that.loadBalancerType != null) return false;
            if (this.modificationProtectionConfig != null ? !this.modificationProtectionConfig.equals(that.modificationProtectionConfig) : that.modificationProtectionConfig != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.trafficAffinityEnabled != null ? this.trafficAffinityEnabled.equals(that.trafficAffinityEnabled) : that.trafficAffinityEnabled == null;
        }

        @Override
        public final int hashCode() {
            int result = this.addressType.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.zoneMappings.hashCode());
            result = 31 * result + (this.addressIpVersion != null ? this.addressIpVersion.hashCode() : 0);
            result = 31 * result + (this.bandwidthPackageId != null ? this.bandwidthPackageId.hashCode() : 0);
            result = 31 * result + (this.crossZoneEnabled != null ? this.crossZoneEnabled.hashCode() : 0);
            result = 31 * result + (this.deletionProtectionConfig != null ? this.deletionProtectionConfig.hashCode() : 0);
            result = 31 * result + (this.loadBalancerBillingConfig != null ? this.loadBalancerBillingConfig.hashCode() : 0);
            result = 31 * result + (this.loadBalancerName != null ? this.loadBalancerName.hashCode() : 0);
            result = 31 * result + (this.loadBalancerType != null ? this.loadBalancerType.hashCode() : 0);
            result = 31 * result + (this.modificationProtectionConfig != null ? this.modificationProtectionConfig.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.trafficAffinityEnabled != null ? this.trafficAffinityEnabled.hashCode() : 0);
            return result;
        }
    }
}
