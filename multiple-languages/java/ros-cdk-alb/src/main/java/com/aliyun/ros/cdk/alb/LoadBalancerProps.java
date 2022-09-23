package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a `ALIYUN::ALB::LoadBalancer`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:08.900Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.LoadBalancerProps")
@software.amazon.jsii.Jsii.Proxy(LoadBalancerProps.Jsii$Proxy.class)
public interface LoadBalancerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property addressType: The type of IP address that the ALB instance uses to provide services.
     * <p>
     * Valid values:
     * Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
     * Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAddressType();

    /**
     * Property loadBalancerBillingConfig: The configuration of the billing method.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerBillingConfig();

    /**
     * Property loadBalancerEdition: The edition of the ALB instance.
     * <p>
     * Different editions have different limits and billing methods. Valid values:
     * Basic: Basic Edition
     * Standard: Standard Edition
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerEdition();

    /**
     * Property loadBalancerName: The name of the ALB instance.
     * <p>
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerName();

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property zoneMappings: The zones and the vSwitches in the zones.
     * <p>
     * You must specify at least two zones.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneMappings();

    /**
     * Property accessLogConfig:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessLogConfig() {
        return null;
    }

    /**
     * Property addressAllocatedMode: The mode in which IP addresses are assigned.
     * <p>
     * Valid values:
     * Fixed: The ALB instance uses a static IP address.
     * Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressAllocatedMode() {
        return null;
    }

    /**
     * Property addressIpVersion: The protocol version.
     * <p>
     * Valid values:
     * IPv4: IPv4
     * DualStack: dual stack
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressIpVersion() {
        return null;
    }

    /**
     * Property bandwidthPackageId: Attach common bandwidth package to load balancer.
     * <p>
     * It only takes effect when AddressType=Internet.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidthPackageId() {
        return null;
    }

    /**
     * Property deletionProtectionEnabled: Specifies whether to enable deletion protection.
     * <p>
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtectionEnabled() {
        return null;
    }

    /**
     * Property modificationProtectionConfig: The configuration of modification protection.
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
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.alb.RosLoadBalancer.TagsProperty> getTags() {
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
        java.lang.Object loadBalancerBillingConfig;
        java.lang.Object loadBalancerEdition;
        java.lang.Object loadBalancerName;
        java.lang.Object vpcId;
        java.lang.Object zoneMappings;
        java.lang.Object accessLogConfig;
        java.lang.Object addressAllocatedMode;
        java.lang.Object addressIpVersion;
        java.lang.Object bandwidthPackageId;
        java.lang.Object deletionProtectionEnabled;
        java.lang.Object modificationProtectionConfig;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.alb.RosLoadBalancer.TagsProperty> tags;

        /**
         * Sets the value of {@link LoadBalancerProps#getAddressType}
         * @param addressType Property addressType: The type of IP address that the ALB instance uses to provide services. This parameter is required.
         *                    Valid values:
         *                    Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
         *                    Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
         * @return {@code this}
         */
        public Builder addressType(java.lang.String addressType) {
            this.addressType = addressType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getAddressType}
         * @param addressType Property addressType: The type of IP address that the ALB instance uses to provide services. This parameter is required.
         *                    Valid values:
         *                    Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
         *                    Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
         * @return {@code this}
         */
        public Builder addressType(com.aliyun.ros.cdk.core.IResolvable addressType) {
            this.addressType = addressType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerBillingConfig}
         * @param loadBalancerBillingConfig Property loadBalancerBillingConfig: The configuration of the billing method. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerBillingConfig(com.aliyun.ros.cdk.core.IResolvable loadBalancerBillingConfig) {
            this.loadBalancerBillingConfig = loadBalancerBillingConfig;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerBillingConfig}
         * @param loadBalancerBillingConfig Property loadBalancerBillingConfig: The configuration of the billing method. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerBillingConfig(com.aliyun.ros.cdk.alb.RosLoadBalancer.LoadBalancerBillingConfigProperty loadBalancerBillingConfig) {
            this.loadBalancerBillingConfig = loadBalancerBillingConfig;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerEdition}
         * @param loadBalancerEdition Property loadBalancerEdition: The edition of the ALB instance. This parameter is required.
         *                            Different editions have different limits and billing methods. Valid values:
         *                            Basic: Basic Edition
         *                            Standard: Standard Edition
         * @return {@code this}
         */
        public Builder loadBalancerEdition(java.lang.String loadBalancerEdition) {
            this.loadBalancerEdition = loadBalancerEdition;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerEdition}
         * @param loadBalancerEdition Property loadBalancerEdition: The edition of the ALB instance. This parameter is required.
         *                            Different editions have different limits and billing methods. Valid values:
         *                            Basic: Basic Edition
         *                            Standard: Standard Edition
         * @return {@code this}
         */
        public Builder loadBalancerEdition(com.aliyun.ros.cdk.core.IResolvable loadBalancerEdition) {
            this.loadBalancerEdition = loadBalancerEdition;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerName}
         * @param loadBalancerName Property loadBalancerName: The name of the ALB instance. This parameter is required.
         *                         The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder loadBalancerName(java.lang.String loadBalancerName) {
            this.loadBalancerName = loadBalancerName;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerName}
         * @param loadBalancerName Property loadBalancerName: The name of the ALB instance. This parameter is required.
         *                         The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder loadBalancerName(com.aliyun.ros.cdk.core.IResolvable loadBalancerName) {
            this.loadBalancerName = loadBalancerName;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed. This parameter is required.
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
         * Sets the value of {@link LoadBalancerProps#getAccessLogConfig}
         * @param accessLogConfig Property accessLogConfig:.
         * @return {@code this}
         */
        public Builder accessLogConfig(com.aliyun.ros.cdk.core.IResolvable accessLogConfig) {
            this.accessLogConfig = accessLogConfig;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getAccessLogConfig}
         * @param accessLogConfig Property accessLogConfig:.
         * @return {@code this}
         */
        public Builder accessLogConfig(com.aliyun.ros.cdk.alb.RosLoadBalancer.AccessLogConfigProperty accessLogConfig) {
            this.accessLogConfig = accessLogConfig;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getAddressAllocatedMode}
         * @param addressAllocatedMode Property addressAllocatedMode: The mode in which IP addresses are assigned.
         *                             Valid values:
         *                             Fixed: The ALB instance uses a static IP address.
         *                             Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
         * @return {@code this}
         */
        public Builder addressAllocatedMode(java.lang.String addressAllocatedMode) {
            this.addressAllocatedMode = addressAllocatedMode;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getAddressAllocatedMode}
         * @param addressAllocatedMode Property addressAllocatedMode: The mode in which IP addresses are assigned.
         *                             Valid values:
         *                             Fixed: The ALB instance uses a static IP address.
         *                             Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
         * @return {@code this}
         */
        public Builder addressAllocatedMode(com.aliyun.ros.cdk.core.IResolvable addressAllocatedMode) {
            this.addressAllocatedMode = addressAllocatedMode;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getAddressIpVersion}
         * @param addressIpVersion Property addressIpVersion: The protocol version.
         *                         Valid values:
         *                         IPv4: IPv4
         *                         DualStack: dual stack
         * @return {@code this}
         */
        public Builder addressIpVersion(java.lang.String addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getAddressIpVersion}
         * @param addressIpVersion Property addressIpVersion: The protocol version.
         *                         Valid values:
         *                         IPv4: IPv4
         *                         DualStack: dual stack
         * @return {@code this}
         */
        public Builder addressIpVersion(com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getBandwidthPackageId}
         * @param bandwidthPackageId Property bandwidthPackageId: Attach common bandwidth package to load balancer.
         *                           It only takes effect when AddressType=Internet.
         * @return {@code this}
         */
        public Builder bandwidthPackageId(java.lang.String bandwidthPackageId) {
            this.bandwidthPackageId = bandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getBandwidthPackageId}
         * @param bandwidthPackageId Property bandwidthPackageId: Attach common bandwidth package to load balancer.
         *                           It only takes effect when AddressType=Internet.
         * @return {@code this}
         */
        public Builder bandwidthPackageId(com.aliyun.ros.cdk.core.IResolvable bandwidthPackageId) {
            this.bandwidthPackageId = bandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getDeletionProtectionEnabled}
         * @param deletionProtectionEnabled Property deletionProtectionEnabled: Specifies whether to enable deletion protection.
         *                                  Default value: false.
         * @return {@code this}
         */
        public Builder deletionProtectionEnabled(java.lang.Boolean deletionProtectionEnabled) {
            this.deletionProtectionEnabled = deletionProtectionEnabled;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getDeletionProtectionEnabled}
         * @param deletionProtectionEnabled Property deletionProtectionEnabled: Specifies whether to enable deletion protection.
         *                                  Default value: false.
         * @return {@code this}
         */
        public Builder deletionProtectionEnabled(com.aliyun.ros.cdk.core.IResolvable deletionProtectionEnabled) {
            this.deletionProtectionEnabled = deletionProtectionEnabled;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getModificationProtectionConfig}
         * @param modificationProtectionConfig Property modificationProtectionConfig: The configuration of modification protection.
         * @return {@code this}
         */
        public Builder modificationProtectionConfig(com.aliyun.ros.cdk.core.IResolvable modificationProtectionConfig) {
            this.modificationProtectionConfig = modificationProtectionConfig;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getModificationProtectionConfig}
         * @param modificationProtectionConfig Property modificationProtectionConfig: The configuration of modification protection.
         * @return {@code this}
         */
        public Builder modificationProtectionConfig(com.aliyun.ros.cdk.alb.RosLoadBalancer.ModificationProtectionConfigProperty modificationProtectionConfig) {
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
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.alb.RosLoadBalancer.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.alb.RosLoadBalancer.TagsProperty>)tags;
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
        private final java.lang.Object loadBalancerBillingConfig;
        private final java.lang.Object loadBalancerEdition;
        private final java.lang.Object loadBalancerName;
        private final java.lang.Object vpcId;
        private final java.lang.Object zoneMappings;
        private final java.lang.Object accessLogConfig;
        private final java.lang.Object addressAllocatedMode;
        private final java.lang.Object addressIpVersion;
        private final java.lang.Object bandwidthPackageId;
        private final java.lang.Object deletionProtectionEnabled;
        private final java.lang.Object modificationProtectionConfig;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.alb.RosLoadBalancer.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addressType = software.amazon.jsii.Kernel.get(this, "addressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerBillingConfig = software.amazon.jsii.Kernel.get(this, "loadBalancerBillingConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerEdition = software.amazon.jsii.Kernel.get(this, "loadBalancerEdition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerName = software.amazon.jsii.Kernel.get(this, "loadBalancerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneMappings = software.amazon.jsii.Kernel.get(this, "zoneMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessLogConfig = software.amazon.jsii.Kernel.get(this, "accessLogConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addressAllocatedMode = software.amazon.jsii.Kernel.get(this, "addressAllocatedMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addressIpVersion = software.amazon.jsii.Kernel.get(this, "addressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidthPackageId = software.amazon.jsii.Kernel.get(this, "bandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtectionEnabled = software.amazon.jsii.Kernel.get(this, "deletionProtectionEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.modificationProtectionConfig = software.amazon.jsii.Kernel.get(this, "modificationProtectionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.alb.RosLoadBalancer.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addressType = java.util.Objects.requireNonNull(builder.addressType, "addressType is required");
            this.loadBalancerBillingConfig = java.util.Objects.requireNonNull(builder.loadBalancerBillingConfig, "loadBalancerBillingConfig is required");
            this.loadBalancerEdition = java.util.Objects.requireNonNull(builder.loadBalancerEdition, "loadBalancerEdition is required");
            this.loadBalancerName = java.util.Objects.requireNonNull(builder.loadBalancerName, "loadBalancerName is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.zoneMappings = java.util.Objects.requireNonNull(builder.zoneMappings, "zoneMappings is required");
            this.accessLogConfig = builder.accessLogConfig;
            this.addressAllocatedMode = builder.addressAllocatedMode;
            this.addressIpVersion = builder.addressIpVersion;
            this.bandwidthPackageId = builder.bandwidthPackageId;
            this.deletionProtectionEnabled = builder.deletionProtectionEnabled;
            this.modificationProtectionConfig = builder.modificationProtectionConfig;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.alb.RosLoadBalancer.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getAddressType() {
            return this.addressType;
        }

        @Override
        public final java.lang.Object getLoadBalancerBillingConfig() {
            return this.loadBalancerBillingConfig;
        }

        @Override
        public final java.lang.Object getLoadBalancerEdition() {
            return this.loadBalancerEdition;
        }

        @Override
        public final java.lang.Object getLoadBalancerName() {
            return this.loadBalancerName;
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
        public final java.lang.Object getAccessLogConfig() {
            return this.accessLogConfig;
        }

        @Override
        public final java.lang.Object getAddressAllocatedMode() {
            return this.addressAllocatedMode;
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
        public final java.lang.Object getDeletionProtectionEnabled() {
            return this.deletionProtectionEnabled;
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
        public final java.util.List<com.aliyun.ros.cdk.alb.RosLoadBalancer.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("addressType", om.valueToTree(this.getAddressType()));
            data.set("loadBalancerBillingConfig", om.valueToTree(this.getLoadBalancerBillingConfig()));
            data.set("loadBalancerEdition", om.valueToTree(this.getLoadBalancerEdition()));
            data.set("loadBalancerName", om.valueToTree(this.getLoadBalancerName()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("zoneMappings", om.valueToTree(this.getZoneMappings()));
            if (this.getAccessLogConfig() != null) {
                data.set("accessLogConfig", om.valueToTree(this.getAccessLogConfig()));
            }
            if (this.getAddressAllocatedMode() != null) {
                data.set("addressAllocatedMode", om.valueToTree(this.getAddressAllocatedMode()));
            }
            if (this.getAddressIpVersion() != null) {
                data.set("addressIpVersion", om.valueToTree(this.getAddressIpVersion()));
            }
            if (this.getBandwidthPackageId() != null) {
                data.set("bandwidthPackageId", om.valueToTree(this.getBandwidthPackageId()));
            }
            if (this.getDeletionProtectionEnabled() != null) {
                data.set("deletionProtectionEnabled", om.valueToTree(this.getDeletionProtectionEnabled()));
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

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.LoadBalancerProps"));
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
            if (!loadBalancerBillingConfig.equals(that.loadBalancerBillingConfig)) return false;
            if (!loadBalancerEdition.equals(that.loadBalancerEdition)) return false;
            if (!loadBalancerName.equals(that.loadBalancerName)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!zoneMappings.equals(that.zoneMappings)) return false;
            if (this.accessLogConfig != null ? !this.accessLogConfig.equals(that.accessLogConfig) : that.accessLogConfig != null) return false;
            if (this.addressAllocatedMode != null ? !this.addressAllocatedMode.equals(that.addressAllocatedMode) : that.addressAllocatedMode != null) return false;
            if (this.addressIpVersion != null ? !this.addressIpVersion.equals(that.addressIpVersion) : that.addressIpVersion != null) return false;
            if (this.bandwidthPackageId != null ? !this.bandwidthPackageId.equals(that.bandwidthPackageId) : that.bandwidthPackageId != null) return false;
            if (this.deletionProtectionEnabled != null ? !this.deletionProtectionEnabled.equals(that.deletionProtectionEnabled) : that.deletionProtectionEnabled != null) return false;
            if (this.modificationProtectionConfig != null ? !this.modificationProtectionConfig.equals(that.modificationProtectionConfig) : that.modificationProtectionConfig != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.addressType.hashCode();
            result = 31 * result + (this.loadBalancerBillingConfig.hashCode());
            result = 31 * result + (this.loadBalancerEdition.hashCode());
            result = 31 * result + (this.loadBalancerName.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.zoneMappings.hashCode());
            result = 31 * result + (this.accessLogConfig != null ? this.accessLogConfig.hashCode() : 0);
            result = 31 * result + (this.addressAllocatedMode != null ? this.addressAllocatedMode.hashCode() : 0);
            result = 31 * result + (this.addressIpVersion != null ? this.addressIpVersion.hashCode() : 0);
            result = 31 * result + (this.bandwidthPackageId != null ? this.bandwidthPackageId.hashCode() : 0);
            result = 31 * result + (this.deletionProtectionEnabled != null ? this.deletionProtectionEnabled.hashCode() : 0);
            result = 31 * result + (this.modificationProtectionConfig != null ? this.modificationProtectionConfig.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
