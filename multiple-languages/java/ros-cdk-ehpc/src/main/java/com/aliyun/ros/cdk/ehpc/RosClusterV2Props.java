package com.aliyun.ros.cdk.ehpc;

/**
 * Properties for defining a <code>RosClusterV2</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-clusterv2
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.106Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2Props")
@software.amazon.jsii.Jsii.Proxy(RosClusterV2Props.Jsii$Proxy.class)
public interface RosClusterV2Props extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSharedStorages();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAdditionalPackages() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddons() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClientVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterCredentials() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterCustomConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsEnterpriseSecurityGroup() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getManager() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxCoreCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueues() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosClusterV2Props}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosClusterV2Props}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosClusterV2Props> {
        java.lang.Object clusterName;
        java.lang.Object sharedStorages;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object additionalPackages;
        java.lang.Object addons;
        java.lang.Object clientVersion;
        java.lang.Object clusterCategory;
        java.lang.Object clusterCredentials;
        java.lang.Object clusterCustomConfiguration;
        java.lang.Object clusterDescription;
        java.lang.Object clusterMode;
        java.lang.Object deletionProtection;
        java.lang.Object isEnterpriseSecurityGroup;
        java.lang.Object manager;
        java.lang.Object maxCoreCount;
        java.lang.Object maxCount;
        java.lang.Object queues;
        java.lang.Object resourceGroupId;
        java.lang.Object securityGroupId;
        java.util.List<com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty> tags;

        /**
         * Sets the value of {@link RosClusterV2Props#getClusterName}
         * @param clusterName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterName(java.lang.String clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getClusterName}
         * @param clusterName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterName(com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getSharedStorages}
         * @param sharedStorages the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sharedStorages(com.aliyun.ros.cdk.core.IResolvable sharedStorages) {
            this.sharedStorages = sharedStorages;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getSharedStorages}
         * @param sharedStorages the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sharedStorages(java.util.List<? extends java.lang.Object> sharedStorages) {
            this.sharedStorages = sharedStorages;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getAdditionalPackages}
         * @param additionalPackages the value to be set.
         * @return {@code this}
         */
        public Builder additionalPackages(com.aliyun.ros.cdk.core.IResolvable additionalPackages) {
            this.additionalPackages = additionalPackages;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getAdditionalPackages}
         * @param additionalPackages the value to be set.
         * @return {@code this}
         */
        public Builder additionalPackages(java.util.List<? extends java.lang.Object> additionalPackages) {
            this.additionalPackages = additionalPackages;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getAddons}
         * @param addons the value to be set.
         * @return {@code this}
         */
        public Builder addons(com.aliyun.ros.cdk.core.IResolvable addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getAddons}
         * @param addons the value to be set.
         * @return {@code this}
         */
        public Builder addons(java.util.List<? extends java.lang.Object> addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getClientVersion}
         * @param clientVersion the value to be set.
         * @return {@code this}
         */
        public Builder clientVersion(java.lang.String clientVersion) {
            this.clientVersion = clientVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getClientVersion}
         * @param clientVersion the value to be set.
         * @return {@code this}
         */
        public Builder clientVersion(com.aliyun.ros.cdk.core.IResolvable clientVersion) {
            this.clientVersion = clientVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getClusterCategory}
         * @param clusterCategory the value to be set.
         * @return {@code this}
         */
        public Builder clusterCategory(java.lang.String clusterCategory) {
            this.clusterCategory = clusterCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getClusterCategory}
         * @param clusterCategory the value to be set.
         * @return {@code this}
         */
        public Builder clusterCategory(com.aliyun.ros.cdk.core.IResolvable clusterCategory) {
            this.clusterCategory = clusterCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getClusterCredentials}
         * @param clusterCredentials the value to be set.
         * @return {@code this}
         */
        public Builder clusterCredentials(com.aliyun.ros.cdk.core.IResolvable clusterCredentials) {
            this.clusterCredentials = clusterCredentials;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getClusterCredentials}
         * @param clusterCredentials the value to be set.
         * @return {@code this}
         */
        public Builder clusterCredentials(com.aliyun.ros.cdk.ehpc.RosClusterV2.ClusterCredentialsProperty clusterCredentials) {
            this.clusterCredentials = clusterCredentials;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getClusterCustomConfiguration}
         * @param clusterCustomConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder clusterCustomConfiguration(com.aliyun.ros.cdk.core.IResolvable clusterCustomConfiguration) {
            this.clusterCustomConfiguration = clusterCustomConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getClusterCustomConfiguration}
         * @param clusterCustomConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder clusterCustomConfiguration(com.aliyun.ros.cdk.ehpc.RosClusterV2.ClusterCustomConfigurationProperty clusterCustomConfiguration) {
            this.clusterCustomConfiguration = clusterCustomConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getClusterDescription}
         * @param clusterDescription the value to be set.
         * @return {@code this}
         */
        public Builder clusterDescription(java.lang.String clusterDescription) {
            this.clusterDescription = clusterDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getClusterDescription}
         * @param clusterDescription the value to be set.
         * @return {@code this}
         */
        public Builder clusterDescription(com.aliyun.ros.cdk.core.IResolvable clusterDescription) {
            this.clusterDescription = clusterDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getClusterMode}
         * @param clusterMode the value to be set.
         * @return {@code this}
         */
        public Builder clusterMode(java.lang.String clusterMode) {
            this.clusterMode = clusterMode;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getClusterMode}
         * @param clusterMode the value to be set.
         * @return {@code this}
         */
        public Builder clusterMode(com.aliyun.ros.cdk.core.IResolvable clusterMode) {
            this.clusterMode = clusterMode;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getDeletionProtection}
         * @param deletionProtection the value to be set.
         * @return {@code this}
         */
        public Builder deletionProtection(java.lang.Boolean deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getDeletionProtection}
         * @param deletionProtection the value to be set.
         * @return {@code this}
         */
        public Builder deletionProtection(com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getIsEnterpriseSecurityGroup}
         * @param isEnterpriseSecurityGroup the value to be set.
         * @return {@code this}
         */
        public Builder isEnterpriseSecurityGroup(java.lang.Boolean isEnterpriseSecurityGroup) {
            this.isEnterpriseSecurityGroup = isEnterpriseSecurityGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getIsEnterpriseSecurityGroup}
         * @param isEnterpriseSecurityGroup the value to be set.
         * @return {@code this}
         */
        public Builder isEnterpriseSecurityGroup(com.aliyun.ros.cdk.core.IResolvable isEnterpriseSecurityGroup) {
            this.isEnterpriseSecurityGroup = isEnterpriseSecurityGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getManager}
         * @param manager the value to be set.
         * @return {@code this}
         */
        public Builder manager(com.aliyun.ros.cdk.core.IResolvable manager) {
            this.manager = manager;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getManager}
         * @param manager the value to be set.
         * @return {@code this}
         */
        public Builder manager(com.aliyun.ros.cdk.ehpc.RosClusterV2.ManagerProperty manager) {
            this.manager = manager;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getMaxCoreCount}
         * @param maxCoreCount the value to be set.
         * @return {@code this}
         */
        public Builder maxCoreCount(java.lang.Number maxCoreCount) {
            this.maxCoreCount = maxCoreCount;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getMaxCoreCount}
         * @param maxCoreCount the value to be set.
         * @return {@code this}
         */
        public Builder maxCoreCount(com.aliyun.ros.cdk.core.IResolvable maxCoreCount) {
            this.maxCoreCount = maxCoreCount;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getMaxCount}
         * @param maxCount the value to be set.
         * @return {@code this}
         */
        public Builder maxCount(java.lang.Number maxCount) {
            this.maxCount = maxCount;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getMaxCount}
         * @param maxCount the value to be set.
         * @return {@code this}
         */
        public Builder maxCount(com.aliyun.ros.cdk.core.IResolvable maxCount) {
            this.maxCount = maxCount;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getQueues}
         * @param queues the value to be set.
         * @return {@code this}
         */
        public Builder queues(com.aliyun.ros.cdk.core.IResolvable queues) {
            this.queues = queues;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getQueues}
         * @param queues the value to be set.
         * @return {@code this}
         */
        public Builder queues(java.util.List<? extends java.lang.Object> queues) {
            this.queues = queues;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterV2Props#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosClusterV2Props}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosClusterV2Props build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosClusterV2Props}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosClusterV2Props {
        private final java.lang.Object clusterName;
        private final java.lang.Object sharedStorages;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object additionalPackages;
        private final java.lang.Object addons;
        private final java.lang.Object clientVersion;
        private final java.lang.Object clusterCategory;
        private final java.lang.Object clusterCredentials;
        private final java.lang.Object clusterCustomConfiguration;
        private final java.lang.Object clusterDescription;
        private final java.lang.Object clusterMode;
        private final java.lang.Object deletionProtection;
        private final java.lang.Object isEnterpriseSecurityGroup;
        private final java.lang.Object manager;
        private final java.lang.Object maxCoreCount;
        private final java.lang.Object maxCount;
        private final java.lang.Object queues;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityGroupId;
        private final java.util.List<com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterName = software.amazon.jsii.Kernel.get(this, "clusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sharedStorages = software.amazon.jsii.Kernel.get(this, "sharedStorages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.additionalPackages = software.amazon.jsii.Kernel.get(this, "additionalPackages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addons = software.amazon.jsii.Kernel.get(this, "addons", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clientVersion = software.amazon.jsii.Kernel.get(this, "clientVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterCategory = software.amazon.jsii.Kernel.get(this, "clusterCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterCredentials = software.amazon.jsii.Kernel.get(this, "clusterCredentials", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterCustomConfiguration = software.amazon.jsii.Kernel.get(this, "clusterCustomConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterDescription = software.amazon.jsii.Kernel.get(this, "clusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterMode = software.amazon.jsii.Kernel.get(this, "clusterMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isEnterpriseSecurityGroup = software.amazon.jsii.Kernel.get(this, "isEnterpriseSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.manager = software.amazon.jsii.Kernel.get(this, "manager", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxCoreCount = software.amazon.jsii.Kernel.get(this, "maxCoreCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxCount = software.amazon.jsii.Kernel.get(this, "maxCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queues = software.amazon.jsii.Kernel.get(this, "queues", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterName = java.util.Objects.requireNonNull(builder.clusterName, "clusterName is required");
            this.sharedStorages = java.util.Objects.requireNonNull(builder.sharedStorages, "sharedStorages is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.additionalPackages = builder.additionalPackages;
            this.addons = builder.addons;
            this.clientVersion = builder.clientVersion;
            this.clusterCategory = builder.clusterCategory;
            this.clusterCredentials = builder.clusterCredentials;
            this.clusterCustomConfiguration = builder.clusterCustomConfiguration;
            this.clusterDescription = builder.clusterDescription;
            this.clusterMode = builder.clusterMode;
            this.deletionProtection = builder.deletionProtection;
            this.isEnterpriseSecurityGroup = builder.isEnterpriseSecurityGroup;
            this.manager = builder.manager;
            this.maxCoreCount = builder.maxCoreCount;
            this.maxCount = builder.maxCount;
            this.queues = builder.queues;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityGroupId = builder.securityGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getClusterName() {
            return this.clusterName;
        }

        @Override
        public final java.lang.Object getSharedStorages() {
            return this.sharedStorages;
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
        public final java.lang.Object getAdditionalPackages() {
            return this.additionalPackages;
        }

        @Override
        public final java.lang.Object getAddons() {
            return this.addons;
        }

        @Override
        public final java.lang.Object getClientVersion() {
            return this.clientVersion;
        }

        @Override
        public final java.lang.Object getClusterCategory() {
            return this.clusterCategory;
        }

        @Override
        public final java.lang.Object getClusterCredentials() {
            return this.clusterCredentials;
        }

        @Override
        public final java.lang.Object getClusterCustomConfiguration() {
            return this.clusterCustomConfiguration;
        }

        @Override
        public final java.lang.Object getClusterDescription() {
            return this.clusterDescription;
        }

        @Override
        public final java.lang.Object getClusterMode() {
            return this.clusterMode;
        }

        @Override
        public final java.lang.Object getDeletionProtection() {
            return this.deletionProtection;
        }

        @Override
        public final java.lang.Object getIsEnterpriseSecurityGroup() {
            return this.isEnterpriseSecurityGroup;
        }

        @Override
        public final java.lang.Object getManager() {
            return this.manager;
        }

        @Override
        public final java.lang.Object getMaxCoreCount() {
            return this.maxCoreCount;
        }

        @Override
        public final java.lang.Object getMaxCount() {
            return this.maxCount;
        }

        @Override
        public final java.lang.Object getQueues() {
            return this.queues;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterName", om.valueToTree(this.getClusterName()));
            data.set("sharedStorages", om.valueToTree(this.getSharedStorages()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getAdditionalPackages() != null) {
                data.set("additionalPackages", om.valueToTree(this.getAdditionalPackages()));
            }
            if (this.getAddons() != null) {
                data.set("addons", om.valueToTree(this.getAddons()));
            }
            if (this.getClientVersion() != null) {
                data.set("clientVersion", om.valueToTree(this.getClientVersion()));
            }
            if (this.getClusterCategory() != null) {
                data.set("clusterCategory", om.valueToTree(this.getClusterCategory()));
            }
            if (this.getClusterCredentials() != null) {
                data.set("clusterCredentials", om.valueToTree(this.getClusterCredentials()));
            }
            if (this.getClusterCustomConfiguration() != null) {
                data.set("clusterCustomConfiguration", om.valueToTree(this.getClusterCustomConfiguration()));
            }
            if (this.getClusterDescription() != null) {
                data.set("clusterDescription", om.valueToTree(this.getClusterDescription()));
            }
            if (this.getClusterMode() != null) {
                data.set("clusterMode", om.valueToTree(this.getClusterMode()));
            }
            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getIsEnterpriseSecurityGroup() != null) {
                data.set("isEnterpriseSecurityGroup", om.valueToTree(this.getIsEnterpriseSecurityGroup()));
            }
            if (this.getManager() != null) {
                data.set("manager", om.valueToTree(this.getManager()));
            }
            if (this.getMaxCoreCount() != null) {
                data.set("maxCoreCount", om.valueToTree(this.getMaxCoreCount()));
            }
            if (this.getMaxCount() != null) {
                data.set("maxCount", om.valueToTree(this.getMaxCount()));
            }
            if (this.getQueues() != null) {
                data.set("queues", om.valueToTree(this.getQueues()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2Props"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosClusterV2Props.Jsii$Proxy that = (RosClusterV2Props.Jsii$Proxy) o;

            if (!clusterName.equals(that.clusterName)) return false;
            if (!sharedStorages.equals(that.sharedStorages)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.additionalPackages != null ? !this.additionalPackages.equals(that.additionalPackages) : that.additionalPackages != null) return false;
            if (this.addons != null ? !this.addons.equals(that.addons) : that.addons != null) return false;
            if (this.clientVersion != null ? !this.clientVersion.equals(that.clientVersion) : that.clientVersion != null) return false;
            if (this.clusterCategory != null ? !this.clusterCategory.equals(that.clusterCategory) : that.clusterCategory != null) return false;
            if (this.clusterCredentials != null ? !this.clusterCredentials.equals(that.clusterCredentials) : that.clusterCredentials != null) return false;
            if (this.clusterCustomConfiguration != null ? !this.clusterCustomConfiguration.equals(that.clusterCustomConfiguration) : that.clusterCustomConfiguration != null) return false;
            if (this.clusterDescription != null ? !this.clusterDescription.equals(that.clusterDescription) : that.clusterDescription != null) return false;
            if (this.clusterMode != null ? !this.clusterMode.equals(that.clusterMode) : that.clusterMode != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.isEnterpriseSecurityGroup != null ? !this.isEnterpriseSecurityGroup.equals(that.isEnterpriseSecurityGroup) : that.isEnterpriseSecurityGroup != null) return false;
            if (this.manager != null ? !this.manager.equals(that.manager) : that.manager != null) return false;
            if (this.maxCoreCount != null ? !this.maxCoreCount.equals(that.maxCoreCount) : that.maxCoreCount != null) return false;
            if (this.maxCount != null ? !this.maxCount.equals(that.maxCount) : that.maxCount != null) return false;
            if (this.queues != null ? !this.queues.equals(that.queues) : that.queues != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterName.hashCode();
            result = 31 * result + (this.sharedStorages.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.additionalPackages != null ? this.additionalPackages.hashCode() : 0);
            result = 31 * result + (this.addons != null ? this.addons.hashCode() : 0);
            result = 31 * result + (this.clientVersion != null ? this.clientVersion.hashCode() : 0);
            result = 31 * result + (this.clusterCategory != null ? this.clusterCategory.hashCode() : 0);
            result = 31 * result + (this.clusterCredentials != null ? this.clusterCredentials.hashCode() : 0);
            result = 31 * result + (this.clusterCustomConfiguration != null ? this.clusterCustomConfiguration.hashCode() : 0);
            result = 31 * result + (this.clusterDescription != null ? this.clusterDescription.hashCode() : 0);
            result = 31 * result + (this.clusterMode != null ? this.clusterMode.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.isEnterpriseSecurityGroup != null ? this.isEnterpriseSecurityGroup.hashCode() : 0);
            result = 31 * result + (this.manager != null ? this.manager.hashCode() : 0);
            result = 31 * result + (this.maxCoreCount != null ? this.maxCoreCount.hashCode() : 0);
            result = 31 * result + (this.maxCount != null ? this.maxCount.hashCode() : 0);
            result = 31 * result + (this.queues != null ? this.queues.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
