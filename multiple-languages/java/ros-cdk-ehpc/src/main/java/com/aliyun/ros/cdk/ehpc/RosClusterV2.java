package com.aliyun.ros.cdk.ehpc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::EHPC::ClusterV2</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:39.078Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2")
public class RosClusterV2 extends com.aliyun.ros.cdk.core.RosResource {

    protected RosClusterV2(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosClusterV2(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ehpc.RosClusterV2.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosClusterV2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.RosClusterV2Props props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getClusterName() {
        return software.amazon.jsii.Kernel.get(this, "clusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterName", java.util.Objects.requireNonNull(value, "clusterName is required"));
    }

    /**
     */
    public void setClusterName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterName", java.util.Objects.requireNonNull(value, "clusterName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSharedStorages() {
        return software.amazon.jsii.Kernel.get(this, "sharedStorages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSharedStorages(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sharedStorages", java.util.Objects.requireNonNull(value, "sharedStorages is required"));
    }

    /**
     */
    public void setSharedStorages(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ehpc.RosClusterV2.SharedStoragesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ehpc.RosClusterV2.SharedStoragesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "sharedStorages", java.util.Objects.requireNonNull(value, "sharedStorages is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", java.util.Objects.requireNonNull(value, "vSwitchId is required"));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", java.util.Objects.requireNonNull(value, "vSwitchId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAdditionalPackages() {
        return software.amazon.jsii.Kernel.get(this, "additionalPackages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAdditionalPackages(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "additionalPackages", value);
    }

    /**
     */
    public void setAdditionalPackages(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ehpc.RosClusterV2.AdditionalPackagesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ehpc.RosClusterV2.AdditionalPackagesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "additionalPackages", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAddons() {
        return software.amazon.jsii.Kernel.get(this, "addons", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAddons(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "addons", value);
    }

    /**
     */
    public void setAddons(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ehpc.RosClusterV2.AddonsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ehpc.RosClusterV2.AddonsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "addons", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClientVersion() {
        return software.amazon.jsii.Kernel.get(this, "clientVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClientVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clientVersion", value);
    }

    /**
     */
    public void setClientVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clientVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClusterCategory() {
        return software.amazon.jsii.Kernel.get(this, "clusterCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterCategory(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterCategory", value);
    }

    /**
     */
    public void setClusterCategory(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterCategory", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClusterCredentials() {
        return software.amazon.jsii.Kernel.get(this, "clusterCredentials", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterCredentials(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterCredentials", value);
    }

    /**
     */
    public void setClusterCredentials(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ehpc.RosClusterV2.ClusterCredentialsProperty value) {
        software.amazon.jsii.Kernel.set(this, "clusterCredentials", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClusterCustomConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "clusterCustomConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterCustomConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterCustomConfiguration", value);
    }

    /**
     */
    public void setClusterCustomConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ehpc.RosClusterV2.ClusterCustomConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "clusterCustomConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClusterDescription() {
        return software.amazon.jsii.Kernel.get(this, "clusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterDescription", value);
    }

    /**
     */
    public void setClusterDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClusterMode() {
        return software.amazon.jsii.Kernel.get(this, "clusterMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterMode", value);
    }

    /**
     */
    public void setClusterMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeletionProtection(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deletionProtection", value);
    }

    /**
     */
    public void setDeletionProtection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deletionProtection", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIsEnterpriseSecurityGroup() {
        return software.amazon.jsii.Kernel.get(this, "isEnterpriseSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIsEnterpriseSecurityGroup(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "isEnterpriseSecurityGroup", value);
    }

    /**
     */
    public void setIsEnterpriseSecurityGroup(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "isEnterpriseSecurityGroup", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getManager() {
        return software.amazon.jsii.Kernel.get(this, "manager", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setManager(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "manager", value);
    }

    /**
     */
    public void setManager(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ehpc.RosClusterV2.ManagerProperty value) {
        software.amazon.jsii.Kernel.set(this, "manager", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxCoreCount() {
        return software.amazon.jsii.Kernel.get(this, "maxCoreCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxCoreCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxCoreCount", value);
    }

    /**
     */
    public void setMaxCoreCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxCoreCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxCount() {
        return software.amazon.jsii.Kernel.get(this, "maxCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxCount", value);
    }

    /**
     */
    public void setMaxCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQueues() {
        return software.amazon.jsii.Kernel.get(this, "queues", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQueues(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "queues", value);
    }

    /**
     */
    public void setQueues(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ehpc.RosClusterV2.QueuesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ehpc.RosClusterV2.QueuesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "queues", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.AdditionalPackagesProperty")
    @software.amazon.jsii.Jsii.Proxy(AdditionalPackagesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AdditionalPackagesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVersion();

        /**
         * @return a {@link Builder} of {@link AdditionalPackagesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AdditionalPackagesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AdditionalPackagesProperty> {
            java.lang.Object name;
            java.lang.Object version;

            /**
             * Sets the value of {@link AdditionalPackagesProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalPackagesProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalPackagesProperty#getVersion}
             * @param version the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalPackagesProperty#getVersion}
             * @param version the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AdditionalPackagesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AdditionalPackagesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AdditionalPackagesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AdditionalPackagesProperty {
            private final java.lang.Object name;
            private final java.lang.Object version;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.version = java.util.Objects.requireNonNull(builder.version, "version is required");
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                data.set("version", om.valueToTree(this.getVersion()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.AdditionalPackagesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AdditionalPackagesProperty.Jsii$Proxy that = (AdditionalPackagesProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                return this.version.equals(that.version);
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.version.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.AddonsProperty")
    @software.amazon.jsii.Jsii.Proxy(AddonsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AddonsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVersion();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResourcesSpec() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServicesSpec() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AddonsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AddonsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AddonsProperty> {
            java.lang.Object name;
            java.lang.Object version;
            java.lang.Object resourcesSpec;
            java.lang.Object servicesSpec;

            /**
             * Sets the value of {@link AddonsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link AddonsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link AddonsProperty#getVersion}
             * @param version the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link AddonsProperty#getVersion}
             * @param version the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link AddonsProperty#getResourcesSpec}
             * @param resourcesSpec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourcesSpec(java.lang.String resourcesSpec) {
                this.resourcesSpec = resourcesSpec;
                return this;
            }

            /**
             * Sets the value of {@link AddonsProperty#getResourcesSpec}
             * @param resourcesSpec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourcesSpec(com.aliyun.ros.cdk.core.IResolvable resourcesSpec) {
                this.resourcesSpec = resourcesSpec;
                return this;
            }

            /**
             * Sets the value of {@link AddonsProperty#getServicesSpec}
             * @param servicesSpec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder servicesSpec(java.lang.String servicesSpec) {
                this.servicesSpec = servicesSpec;
                return this;
            }

            /**
             * Sets the value of {@link AddonsProperty#getServicesSpec}
             * @param servicesSpec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder servicesSpec(com.aliyun.ros.cdk.core.IResolvable servicesSpec) {
                this.servicesSpec = servicesSpec;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AddonsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AddonsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AddonsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AddonsProperty {
            private final java.lang.Object name;
            private final java.lang.Object version;
            private final java.lang.Object resourcesSpec;
            private final java.lang.Object servicesSpec;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourcesSpec = software.amazon.jsii.Kernel.get(this, "resourcesSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.servicesSpec = software.amazon.jsii.Kernel.get(this, "servicesSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.version = java.util.Objects.requireNonNull(builder.version, "version is required");
                this.resourcesSpec = builder.resourcesSpec;
                this.servicesSpec = builder.servicesSpec;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            public final java.lang.Object getResourcesSpec() {
                return this.resourcesSpec;
            }

            @Override
            public final java.lang.Object getServicesSpec() {
                return this.servicesSpec;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                data.set("version", om.valueToTree(this.getVersion()));
                if (this.getResourcesSpec() != null) {
                    data.set("resourcesSpec", om.valueToTree(this.getResourcesSpec()));
                }
                if (this.getServicesSpec() != null) {
                    data.set("servicesSpec", om.valueToTree(this.getServicesSpec()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.AddonsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AddonsProperty.Jsii$Proxy that = (AddonsProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                if (!version.equals(that.version)) return false;
                if (this.resourcesSpec != null ? !this.resourcesSpec.equals(that.resourcesSpec) : that.resourcesSpec != null) return false;
                return this.servicesSpec != null ? this.servicesSpec.equals(that.servicesSpec) : that.servicesSpec == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.version.hashCode());
                result = 31 * result + (this.resourcesSpec != null ? this.resourcesSpec.hashCode() : 0);
                result = 31 * result + (this.servicesSpec != null ? this.servicesSpec.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.ClusterCredentialsProperty")
    @software.amazon.jsii.Jsii.Proxy(ClusterCredentialsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ClusterCredentialsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ClusterCredentialsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ClusterCredentialsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ClusterCredentialsProperty> {
            java.lang.Object keyPairName;
            java.lang.Object password;

            /**
             * Sets the value of {@link ClusterCredentialsProperty#getKeyPairName}
             * @param keyPairName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPairName(java.lang.String keyPairName) {
                this.keyPairName = keyPairName;
                return this;
            }

            /**
             * Sets the value of {@link ClusterCredentialsProperty#getKeyPairName}
             * @param keyPairName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
                this.keyPairName = keyPairName;
                return this;
            }

            /**
             * Sets the value of {@link ClusterCredentialsProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link ClusterCredentialsProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
                this.password = password;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ClusterCredentialsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ClusterCredentialsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ClusterCredentialsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterCredentialsProperty {
            private final java.lang.Object keyPairName;
            private final java.lang.Object password;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.keyPairName = builder.keyPairName;
                this.password = builder.password;
            }

            @Override
            public final java.lang.Object getKeyPairName() {
                return this.keyPairName;
            }

            @Override
            public final java.lang.Object getPassword() {
                return this.password;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKeyPairName() != null) {
                    data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
                }
                if (this.getPassword() != null) {
                    data.set("password", om.valueToTree(this.getPassword()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.ClusterCredentialsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ClusterCredentialsProperty.Jsii$Proxy that = (ClusterCredentialsProperty.Jsii$Proxy) o;

                if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
                return this.password != null ? this.password.equals(that.password) : that.password == null;
            }

            @Override
            public final int hashCode() {
                int result = this.keyPairName != null ? this.keyPairName.hashCode() : 0;
                result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.ClusterCustomConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(ClusterCustomConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ClusterCustomConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getArgs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScript() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ClusterCustomConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ClusterCustomConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ClusterCustomConfigurationProperty> {
            java.lang.Object args;
            java.lang.Object script;

            /**
             * Sets the value of {@link ClusterCustomConfigurationProperty#getArgs}
             * @param args the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder args(java.lang.String args) {
                this.args = args;
                return this;
            }

            /**
             * Sets the value of {@link ClusterCustomConfigurationProperty#getArgs}
             * @param args the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder args(com.aliyun.ros.cdk.core.IResolvable args) {
                this.args = args;
                return this;
            }

            /**
             * Sets the value of {@link ClusterCustomConfigurationProperty#getScript}
             * @param script the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder script(java.lang.String script) {
                this.script = script;
                return this;
            }

            /**
             * Sets the value of {@link ClusterCustomConfigurationProperty#getScript}
             * @param script the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder script(com.aliyun.ros.cdk.core.IResolvable script) {
                this.script = script;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ClusterCustomConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ClusterCustomConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ClusterCustomConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterCustomConfigurationProperty {
            private final java.lang.Object args;
            private final java.lang.Object script;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.args = software.amazon.jsii.Kernel.get(this, "args", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.script = software.amazon.jsii.Kernel.get(this, "script", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.args = builder.args;
                this.script = builder.script;
            }

            @Override
            public final java.lang.Object getArgs() {
                return this.args;
            }

            @Override
            public final java.lang.Object getScript() {
                return this.script;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getArgs() != null) {
                    data.set("args", om.valueToTree(this.getArgs()));
                }
                if (this.getScript() != null) {
                    data.set("script", om.valueToTree(this.getScript()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.ClusterCustomConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ClusterCustomConfigurationProperty.Jsii$Proxy that = (ClusterCustomConfigurationProperty.Jsii$Proxy) o;

                if (this.args != null ? !this.args.equals(that.args) : that.args != null) return false;
                return this.script != null ? this.script.equals(that.script) : that.script == null;
            }

            @Override
            public final int hashCode() {
                int result = this.args != null ? this.args.hashCode() : 0;
                result = 31 * result + (this.script != null ? this.script.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.ComputeNodesProperty")
    @software.amazon.jsii.Jsii.Proxy(ComputeNodesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ComputeNodesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getImageId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSystemDisk();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDataDisks() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableHt() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ComputeNodesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ComputeNodesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ComputeNodesProperty> {
            java.lang.Object imageId;
            java.lang.Object instanceType;
            java.lang.Object systemDisk;
            java.lang.Object dataDisks;
            java.lang.Object duration;
            java.lang.Object enableHt;
            java.lang.Object spotPriceLimit;
            java.lang.Object spotStrategy;

            /**
             * Sets the value of {@link ComputeNodesProperty#getImageId}
             * @param imageId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageId(java.lang.String imageId) {
                this.imageId = imageId;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getImageId}
             * @param imageId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
                this.imageId = imageId;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getSystemDisk}
             * @param systemDisk the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDisk(com.aliyun.ros.cdk.core.IResolvable systemDisk) {
                this.systemDisk = systemDisk;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getSystemDisk}
             * @param systemDisk the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDisk(com.aliyun.ros.cdk.ehpc.RosClusterV2.SystemDiskProperty systemDisk) {
                this.systemDisk = systemDisk;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getDataDisks}
             * @param dataDisks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisks(com.aliyun.ros.cdk.core.IResolvable dataDisks) {
                this.dataDisks = dataDisks;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getDataDisks}
             * @param dataDisks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisks(java.util.List<? extends java.lang.Object> dataDisks) {
                this.dataDisks = dataDisks;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getDuration}
             * @param duration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder duration(java.lang.Number duration) {
                this.duration = duration;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getDuration}
             * @param duration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
                this.duration = duration;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getEnableHt}
             * @param enableHt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableHt(java.lang.Boolean enableHt) {
                this.enableHt = enableHt;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getEnableHt}
             * @param enableHt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableHt(com.aliyun.ros.cdk.core.IResolvable enableHt) {
                this.enableHt = enableHt;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getSpotPriceLimit}
             * @param spotPriceLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotPriceLimit(java.lang.Number spotPriceLimit) {
                this.spotPriceLimit = spotPriceLimit;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getSpotPriceLimit}
             * @param spotPriceLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
                this.spotPriceLimit = spotPriceLimit;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getSpotStrategy}
             * @param spotStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotStrategy(java.lang.String spotStrategy) {
                this.spotStrategy = spotStrategy;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getSpotStrategy}
             * @param spotStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
                this.spotStrategy = spotStrategy;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ComputeNodesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ComputeNodesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ComputeNodesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ComputeNodesProperty {
            private final java.lang.Object imageId;
            private final java.lang.Object instanceType;
            private final java.lang.Object systemDisk;
            private final java.lang.Object dataDisks;
            private final java.lang.Object duration;
            private final java.lang.Object enableHt;
            private final java.lang.Object spotPriceLimit;
            private final java.lang.Object spotStrategy;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDisk = software.amazon.jsii.Kernel.get(this, "systemDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dataDisks = software.amazon.jsii.Kernel.get(this, "dataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableHt = software.amazon.jsii.Kernel.get(this, "enableHt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.imageId = java.util.Objects.requireNonNull(builder.imageId, "imageId is required");
                this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
                this.systemDisk = java.util.Objects.requireNonNull(builder.systemDisk, "systemDisk is required");
                this.dataDisks = builder.dataDisks;
                this.duration = builder.duration;
                this.enableHt = builder.enableHt;
                this.spotPriceLimit = builder.spotPriceLimit;
                this.spotStrategy = builder.spotStrategy;
            }

            @Override
            public final java.lang.Object getImageId() {
                return this.imageId;
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.Object getSystemDisk() {
                return this.systemDisk;
            }

            @Override
            public final java.lang.Object getDataDisks() {
                return this.dataDisks;
            }

            @Override
            public final java.lang.Object getDuration() {
                return this.duration;
            }

            @Override
            public final java.lang.Object getEnableHt() {
                return this.enableHt;
            }

            @Override
            public final java.lang.Object getSpotPriceLimit() {
                return this.spotPriceLimit;
            }

            @Override
            public final java.lang.Object getSpotStrategy() {
                return this.spotStrategy;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("imageId", om.valueToTree(this.getImageId()));
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
                data.set("systemDisk", om.valueToTree(this.getSystemDisk()));
                if (this.getDataDisks() != null) {
                    data.set("dataDisks", om.valueToTree(this.getDataDisks()));
                }
                if (this.getDuration() != null) {
                    data.set("duration", om.valueToTree(this.getDuration()));
                }
                if (this.getEnableHt() != null) {
                    data.set("enableHt", om.valueToTree(this.getEnableHt()));
                }
                if (this.getSpotPriceLimit() != null) {
                    data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
                }
                if (this.getSpotStrategy() != null) {
                    data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.ComputeNodesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ComputeNodesProperty.Jsii$Proxy that = (ComputeNodesProperty.Jsii$Proxy) o;

                if (!imageId.equals(that.imageId)) return false;
                if (!instanceType.equals(that.instanceType)) return false;
                if (!systemDisk.equals(that.systemDisk)) return false;
                if (this.dataDisks != null ? !this.dataDisks.equals(that.dataDisks) : that.dataDisks != null) return false;
                if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
                if (this.enableHt != null ? !this.enableHt.equals(that.enableHt) : that.enableHt != null) return false;
                if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
                return this.spotStrategy != null ? this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy == null;
            }

            @Override
            public final int hashCode() {
                int result = this.imageId.hashCode();
                result = 31 * result + (this.instanceType.hashCode());
                result = 31 * result + (this.systemDisk.hashCode());
                result = 31 * result + (this.dataDisks != null ? this.dataDisks.hashCode() : 0);
                result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
                result = 31 * result + (this.enableHt != null ? this.enableHt.hashCode() : 0);
                result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
                result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.DNSProperty")
    @software.amazon.jsii.Jsii.Proxy(DNSProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DNSProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVersion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DNSProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DNSProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DNSProperty> {
            java.lang.Object type;
            java.lang.Object version;

            /**
             * Sets the value of {@link DNSProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link DNSProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link DNSProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link DNSProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DNSProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DNSProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DNSProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DNSProperty {
            private final java.lang.Object type;
            private final java.lang.Object version;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.type = builder.type;
                this.version = builder.version;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }
                if (this.getVersion() != null) {
                    data.set("version", om.valueToTree(this.getVersion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.DNSProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DNSProperty.Jsii$Proxy that = (DNSProperty.Jsii$Proxy) o;

                if (this.type != null ? !this.type.equals(that.type) : that.type != null) return false;
                return this.version != null ? this.version.equals(that.version) : that.version == null;
            }

            @Override
            public final int hashCode() {
                int result = this.type != null ? this.type.hashCode() : 0;
                result = 31 * result + (this.version != null ? this.version.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.DataDisksProperty")
    @software.amazon.jsii.Jsii.Proxy(DataDisksProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DataDisksProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCategory();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSize();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteWithInstance() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountDir() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DataDisksProperty> {
            java.lang.Object category;
            java.lang.Object size;
            java.lang.Object deleteWithInstance;
            java.lang.Object level;
            java.lang.Object mountDir;

            /**
             * Sets the value of {@link DataDisksProperty#getCategory}
             * @param category the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(java.lang.String category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getCategory}
             * @param category the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(java.lang.Number size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDeleteWithInstance}
             * @param deleteWithInstance the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deleteWithInstance(java.lang.Boolean deleteWithInstance) {
                this.deleteWithInstance = deleteWithInstance;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDeleteWithInstance}
             * @param deleteWithInstance the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deleteWithInstance(com.aliyun.ros.cdk.core.IResolvable deleteWithInstance) {
                this.deleteWithInstance = deleteWithInstance;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getLevel}
             * @param level the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(java.lang.String level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getLevel}
             * @param level the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(com.aliyun.ros.cdk.core.IResolvable level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getMountDir}
             * @param mountDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountDir(java.lang.String mountDir) {
                this.mountDir = mountDir;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getMountDir}
             * @param mountDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountDir(com.aliyun.ros.cdk.core.IResolvable mountDir) {
                this.mountDir = mountDir;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DataDisksProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DataDisksProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DataDisksProperty {
            private final java.lang.Object category;
            private final java.lang.Object size;
            private final java.lang.Object deleteWithInstance;
            private final java.lang.Object level;
            private final java.lang.Object mountDir;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.deleteWithInstance = software.amazon.jsii.Kernel.get(this, "deleteWithInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.level = software.amazon.jsii.Kernel.get(this, "level", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountDir = software.amazon.jsii.Kernel.get(this, "mountDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.category = java.util.Objects.requireNonNull(builder.category, "category is required");
                this.size = java.util.Objects.requireNonNull(builder.size, "size is required");
                this.deleteWithInstance = builder.deleteWithInstance;
                this.level = builder.level;
                this.mountDir = builder.mountDir;
            }

            @Override
            public final java.lang.Object getCategory() {
                return this.category;
            }

            @Override
            public final java.lang.Object getSize() {
                return this.size;
            }

            @Override
            public final java.lang.Object getDeleteWithInstance() {
                return this.deleteWithInstance;
            }

            @Override
            public final java.lang.Object getLevel() {
                return this.level;
            }

            @Override
            public final java.lang.Object getMountDir() {
                return this.mountDir;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("category", om.valueToTree(this.getCategory()));
                data.set("size", om.valueToTree(this.getSize()));
                if (this.getDeleteWithInstance() != null) {
                    data.set("deleteWithInstance", om.valueToTree(this.getDeleteWithInstance()));
                }
                if (this.getLevel() != null) {
                    data.set("level", om.valueToTree(this.getLevel()));
                }
                if (this.getMountDir() != null) {
                    data.set("mountDir", om.valueToTree(this.getMountDir()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.DataDisksProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DataDisksProperty.Jsii$Proxy that = (DataDisksProperty.Jsii$Proxy) o;

                if (!category.equals(that.category)) return false;
                if (!size.equals(that.size)) return false;
                if (this.deleteWithInstance != null ? !this.deleteWithInstance.equals(that.deleteWithInstance) : that.deleteWithInstance != null) return false;
                if (this.level != null ? !this.level.equals(that.level) : that.level != null) return false;
                return this.mountDir != null ? this.mountDir.equals(that.mountDir) : that.mountDir == null;
            }

            @Override
            public final int hashCode() {
                int result = this.category.hashCode();
                result = 31 * result + (this.size.hashCode());
                result = 31 * result + (this.deleteWithInstance != null ? this.deleteWithInstance.hashCode() : 0);
                result = 31 * result + (this.level != null ? this.level.hashCode() : 0);
                result = 31 * result + (this.mountDir != null ? this.mountDir.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.DirectoryServiceProperty")
    @software.amazon.jsii.Jsii.Proxy(DirectoryServiceProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DirectoryServiceProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVersion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DirectoryServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DirectoryServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DirectoryServiceProperty> {
            java.lang.Object type;
            java.lang.Object version;

            /**
             * Sets the value of {@link DirectoryServiceProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link DirectoryServiceProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link DirectoryServiceProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link DirectoryServiceProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DirectoryServiceProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DirectoryServiceProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DirectoryServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DirectoryServiceProperty {
            private final java.lang.Object type;
            private final java.lang.Object version;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.type = builder.type;
                this.version = builder.version;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }
                if (this.getVersion() != null) {
                    data.set("version", om.valueToTree(this.getVersion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.DirectoryServiceProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DirectoryServiceProperty.Jsii$Proxy that = (DirectoryServiceProperty.Jsii$Proxy) o;

                if (this.type != null ? !this.type.equals(that.type) : that.type != null) return false;
                return this.version != null ? this.version.equals(that.version) : that.version == null;
            }

            @Override
            public final int hashCode() {
                int result = this.type != null ? this.type.hashCode() : 0;
                result = 31 * result + (this.version != null ? this.version.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.ManagerNodeDataDisksProperty")
    @software.amazon.jsii.Jsii.Proxy(ManagerNodeDataDisksProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ManagerNodeDataDisksProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCategory();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSize();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteWithInstance() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountDir() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ManagerNodeDataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ManagerNodeDataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ManagerNodeDataDisksProperty> {
            java.lang.Object category;
            java.lang.Object size;
            java.lang.Object deleteWithInstance;
            java.lang.Object level;
            java.lang.Object mountDir;

            /**
             * Sets the value of {@link ManagerNodeDataDisksProperty#getCategory}
             * @param category the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(java.lang.String category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeDataDisksProperty#getCategory}
             * @param category the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeDataDisksProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(java.lang.Number size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeDataDisksProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeDataDisksProperty#getDeleteWithInstance}
             * @param deleteWithInstance the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deleteWithInstance(java.lang.Boolean deleteWithInstance) {
                this.deleteWithInstance = deleteWithInstance;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeDataDisksProperty#getDeleteWithInstance}
             * @param deleteWithInstance the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deleteWithInstance(com.aliyun.ros.cdk.core.IResolvable deleteWithInstance) {
                this.deleteWithInstance = deleteWithInstance;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeDataDisksProperty#getLevel}
             * @param level the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(java.lang.String level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeDataDisksProperty#getLevel}
             * @param level the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(com.aliyun.ros.cdk.core.IResolvable level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeDataDisksProperty#getMountDir}
             * @param mountDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountDir(java.lang.String mountDir) {
                this.mountDir = mountDir;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeDataDisksProperty#getMountDir}
             * @param mountDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountDir(com.aliyun.ros.cdk.core.IResolvable mountDir) {
                this.mountDir = mountDir;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ManagerNodeDataDisksProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ManagerNodeDataDisksProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ManagerNodeDataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ManagerNodeDataDisksProperty {
            private final java.lang.Object category;
            private final java.lang.Object size;
            private final java.lang.Object deleteWithInstance;
            private final java.lang.Object level;
            private final java.lang.Object mountDir;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.deleteWithInstance = software.amazon.jsii.Kernel.get(this, "deleteWithInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.level = software.amazon.jsii.Kernel.get(this, "level", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountDir = software.amazon.jsii.Kernel.get(this, "mountDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.category = java.util.Objects.requireNonNull(builder.category, "category is required");
                this.size = java.util.Objects.requireNonNull(builder.size, "size is required");
                this.deleteWithInstance = builder.deleteWithInstance;
                this.level = builder.level;
                this.mountDir = builder.mountDir;
            }

            @Override
            public final java.lang.Object getCategory() {
                return this.category;
            }

            @Override
            public final java.lang.Object getSize() {
                return this.size;
            }

            @Override
            public final java.lang.Object getDeleteWithInstance() {
                return this.deleteWithInstance;
            }

            @Override
            public final java.lang.Object getLevel() {
                return this.level;
            }

            @Override
            public final java.lang.Object getMountDir() {
                return this.mountDir;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("category", om.valueToTree(this.getCategory()));
                data.set("size", om.valueToTree(this.getSize()));
                if (this.getDeleteWithInstance() != null) {
                    data.set("deleteWithInstance", om.valueToTree(this.getDeleteWithInstance()));
                }
                if (this.getLevel() != null) {
                    data.set("level", om.valueToTree(this.getLevel()));
                }
                if (this.getMountDir() != null) {
                    data.set("mountDir", om.valueToTree(this.getMountDir()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.ManagerNodeDataDisksProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ManagerNodeDataDisksProperty.Jsii$Proxy that = (ManagerNodeDataDisksProperty.Jsii$Proxy) o;

                if (!category.equals(that.category)) return false;
                if (!size.equals(that.size)) return false;
                if (this.deleteWithInstance != null ? !this.deleteWithInstance.equals(that.deleteWithInstance) : that.deleteWithInstance != null) return false;
                if (this.level != null ? !this.level.equals(that.level) : that.level != null) return false;
                return this.mountDir != null ? this.mountDir.equals(that.mountDir) : that.mountDir == null;
            }

            @Override
            public final int hashCode() {
                int result = this.category.hashCode();
                result = 31 * result + (this.size.hashCode());
                result = 31 * result + (this.deleteWithInstance != null ? this.deleteWithInstance.hashCode() : 0);
                result = 31 * result + (this.level != null ? this.level.hashCode() : 0);
                result = 31 * result + (this.mountDir != null ? this.mountDir.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.ManagerNodeProperty")
    @software.amazon.jsii.Jsii.Proxy(ManagerNodeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ManagerNodeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getImageId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSystemDisk();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDataDisks() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableHt() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ManagerNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ManagerNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ManagerNodeProperty> {
            java.lang.Object imageId;
            java.lang.Object instanceType;
            java.lang.Object systemDisk;
            java.lang.Object autoRenew;
            java.lang.Object autoRenewPeriod;
            java.lang.Object dataDisks;
            java.lang.Object enableHt;
            java.lang.Object instanceChargeType;
            java.lang.Object period;
            java.lang.Object periodUnit;

            /**
             * Sets the value of {@link ManagerNodeProperty#getImageId}
             * @param imageId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageId(java.lang.String imageId) {
                this.imageId = imageId;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getImageId}
             * @param imageId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
                this.imageId = imageId;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getSystemDisk}
             * @param systemDisk the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDisk(com.aliyun.ros.cdk.core.IResolvable systemDisk) {
                this.systemDisk = systemDisk;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getSystemDisk}
             * @param systemDisk the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDisk(com.aliyun.ros.cdk.ehpc.RosClusterV2.ManagerNodeSystemDiskProperty systemDisk) {
                this.systemDisk = systemDisk;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getAutoRenew}
             * @param autoRenew the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenew(java.lang.Boolean autoRenew) {
                this.autoRenew = autoRenew;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getAutoRenew}
             * @param autoRenew the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
                this.autoRenew = autoRenew;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getAutoRenewPeriod}
             * @param autoRenewPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
                this.autoRenewPeriod = autoRenewPeriod;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getAutoRenewPeriod}
             * @param autoRenewPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
                this.autoRenewPeriod = autoRenewPeriod;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getDataDisks}
             * @param dataDisks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisks(com.aliyun.ros.cdk.core.IResolvable dataDisks) {
                this.dataDisks = dataDisks;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getDataDisks}
             * @param dataDisks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisks(java.util.List<? extends java.lang.Object> dataDisks) {
                this.dataDisks = dataDisks;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getEnableHt}
             * @param enableHt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableHt(java.lang.Boolean enableHt) {
                this.enableHt = enableHt;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getEnableHt}
             * @param enableHt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableHt(com.aliyun.ros.cdk.core.IResolvable enableHt) {
                this.enableHt = enableHt;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getInstanceChargeType}
             * @param instanceChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceChargeType(java.lang.String instanceChargeType) {
                this.instanceChargeType = instanceChargeType;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getInstanceChargeType}
             * @param instanceChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
                this.instanceChargeType = instanceChargeType;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getPeriod}
             * @param period the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(java.lang.Number period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getPeriod}
             * @param period the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getPeriodUnit}
             * @param periodUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodUnit(java.lang.String periodUnit) {
                this.periodUnit = periodUnit;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeProperty#getPeriodUnit}
             * @param periodUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
                this.periodUnit = periodUnit;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ManagerNodeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ManagerNodeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ManagerNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ManagerNodeProperty {
            private final java.lang.Object imageId;
            private final java.lang.Object instanceType;
            private final java.lang.Object systemDisk;
            private final java.lang.Object autoRenew;
            private final java.lang.Object autoRenewPeriod;
            private final java.lang.Object dataDisks;
            private final java.lang.Object enableHt;
            private final java.lang.Object instanceChargeType;
            private final java.lang.Object period;
            private final java.lang.Object periodUnit;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDisk = software.amazon.jsii.Kernel.get(this, "systemDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dataDisks = software.amazon.jsii.Kernel.get(this, "dataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableHt = software.amazon.jsii.Kernel.get(this, "enableHt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.imageId = java.util.Objects.requireNonNull(builder.imageId, "imageId is required");
                this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
                this.systemDisk = java.util.Objects.requireNonNull(builder.systemDisk, "systemDisk is required");
                this.autoRenew = builder.autoRenew;
                this.autoRenewPeriod = builder.autoRenewPeriod;
                this.dataDisks = builder.dataDisks;
                this.enableHt = builder.enableHt;
                this.instanceChargeType = builder.instanceChargeType;
                this.period = builder.period;
                this.periodUnit = builder.periodUnit;
            }

            @Override
            public final java.lang.Object getImageId() {
                return this.imageId;
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.Object getSystemDisk() {
                return this.systemDisk;
            }

            @Override
            public final java.lang.Object getAutoRenew() {
                return this.autoRenew;
            }

            @Override
            public final java.lang.Object getAutoRenewPeriod() {
                return this.autoRenewPeriod;
            }

            @Override
            public final java.lang.Object getDataDisks() {
                return this.dataDisks;
            }

            @Override
            public final java.lang.Object getEnableHt() {
                return this.enableHt;
            }

            @Override
            public final java.lang.Object getInstanceChargeType() {
                return this.instanceChargeType;
            }

            @Override
            public final java.lang.Object getPeriod() {
                return this.period;
            }

            @Override
            public final java.lang.Object getPeriodUnit() {
                return this.periodUnit;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("imageId", om.valueToTree(this.getImageId()));
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
                data.set("systemDisk", om.valueToTree(this.getSystemDisk()));
                if (this.getAutoRenew() != null) {
                    data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
                }
                if (this.getAutoRenewPeriod() != null) {
                    data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
                }
                if (this.getDataDisks() != null) {
                    data.set("dataDisks", om.valueToTree(this.getDataDisks()));
                }
                if (this.getEnableHt() != null) {
                    data.set("enableHt", om.valueToTree(this.getEnableHt()));
                }
                if (this.getInstanceChargeType() != null) {
                    data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
                }
                if (this.getPeriod() != null) {
                    data.set("period", om.valueToTree(this.getPeriod()));
                }
                if (this.getPeriodUnit() != null) {
                    data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.ManagerNodeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ManagerNodeProperty.Jsii$Proxy that = (ManagerNodeProperty.Jsii$Proxy) o;

                if (!imageId.equals(that.imageId)) return false;
                if (!instanceType.equals(that.instanceType)) return false;
                if (!systemDisk.equals(that.systemDisk)) return false;
                if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
                if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
                if (this.dataDisks != null ? !this.dataDisks.equals(that.dataDisks) : that.dataDisks != null) return false;
                if (this.enableHt != null ? !this.enableHt.equals(that.enableHt) : that.enableHt != null) return false;
                if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
                if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
                return this.periodUnit != null ? this.periodUnit.equals(that.periodUnit) : that.periodUnit == null;
            }

            @Override
            public final int hashCode() {
                int result = this.imageId.hashCode();
                result = 31 * result + (this.instanceType.hashCode());
                result = 31 * result + (this.systemDisk.hashCode());
                result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
                result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
                result = 31 * result + (this.dataDisks != null ? this.dataDisks.hashCode() : 0);
                result = 31 * result + (this.enableHt != null ? this.enableHt.hashCode() : 0);
                result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
                result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
                result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.ManagerNodeSystemDiskProperty")
    @software.amazon.jsii.Jsii.Proxy(ManagerNodeSystemDiskProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ManagerNodeSystemDiskProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCategory();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSize();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLevel() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ManagerNodeSystemDiskProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ManagerNodeSystemDiskProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ManagerNodeSystemDiskProperty> {
            java.lang.Object category;
            java.lang.Object size;
            java.lang.Object level;

            /**
             * Sets the value of {@link ManagerNodeSystemDiskProperty#getCategory}
             * @param category the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(java.lang.String category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeSystemDiskProperty#getCategory}
             * @param category the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeSystemDiskProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(java.lang.Number size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeSystemDiskProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeSystemDiskProperty#getLevel}
             * @param level the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(java.lang.String level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link ManagerNodeSystemDiskProperty#getLevel}
             * @param level the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(com.aliyun.ros.cdk.core.IResolvable level) {
                this.level = level;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ManagerNodeSystemDiskProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ManagerNodeSystemDiskProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ManagerNodeSystemDiskProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ManagerNodeSystemDiskProperty {
            private final java.lang.Object category;
            private final java.lang.Object size;
            private final java.lang.Object level;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.level = software.amazon.jsii.Kernel.get(this, "level", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.category = java.util.Objects.requireNonNull(builder.category, "category is required");
                this.size = java.util.Objects.requireNonNull(builder.size, "size is required");
                this.level = builder.level;
            }

            @Override
            public final java.lang.Object getCategory() {
                return this.category;
            }

            @Override
            public final java.lang.Object getSize() {
                return this.size;
            }

            @Override
            public final java.lang.Object getLevel() {
                return this.level;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("category", om.valueToTree(this.getCategory()));
                data.set("size", om.valueToTree(this.getSize()));
                if (this.getLevel() != null) {
                    data.set("level", om.valueToTree(this.getLevel()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.ManagerNodeSystemDiskProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ManagerNodeSystemDiskProperty.Jsii$Proxy that = (ManagerNodeSystemDiskProperty.Jsii$Proxy) o;

                if (!category.equals(that.category)) return false;
                if (!size.equals(that.size)) return false;
                return this.level != null ? this.level.equals(that.level) : that.level == null;
            }

            @Override
            public final int hashCode() {
                int result = this.category.hashCode();
                result = 31 * result + (this.size.hashCode());
                result = 31 * result + (this.level != null ? this.level.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.ManagerProperty")
    @software.amazon.jsii.Jsii.Proxy(ManagerProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ManagerProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDirectoryService() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDns() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getManagerNode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScheduler() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ManagerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ManagerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ManagerProperty> {
            java.lang.Object directoryService;
            java.lang.Object dns;
            java.lang.Object managerNode;
            java.lang.Object scheduler;

            /**
             * Sets the value of {@link ManagerProperty#getDirectoryService}
             * @param directoryService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder directoryService(com.aliyun.ros.cdk.core.IResolvable directoryService) {
                this.directoryService = directoryService;
                return this;
            }

            /**
             * Sets the value of {@link ManagerProperty#getDirectoryService}
             * @param directoryService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder directoryService(com.aliyun.ros.cdk.ehpc.RosClusterV2.DirectoryServiceProperty directoryService) {
                this.directoryService = directoryService;
                return this;
            }

            /**
             * Sets the value of {@link ManagerProperty#getDns}
             * @param dns the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dns(com.aliyun.ros.cdk.core.IResolvable dns) {
                this.dns = dns;
                return this;
            }

            /**
             * Sets the value of {@link ManagerProperty#getDns}
             * @param dns the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dns(com.aliyun.ros.cdk.ehpc.RosClusterV2.DNSProperty dns) {
                this.dns = dns;
                return this;
            }

            /**
             * Sets the value of {@link ManagerProperty#getManagerNode}
             * @param managerNode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managerNode(com.aliyun.ros.cdk.core.IResolvable managerNode) {
                this.managerNode = managerNode;
                return this;
            }

            /**
             * Sets the value of {@link ManagerProperty#getManagerNode}
             * @param managerNode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managerNode(com.aliyun.ros.cdk.ehpc.RosClusterV2.ManagerNodeProperty managerNode) {
                this.managerNode = managerNode;
                return this;
            }

            /**
             * Sets the value of {@link ManagerProperty#getScheduler}
             * @param scheduler the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheduler(com.aliyun.ros.cdk.core.IResolvable scheduler) {
                this.scheduler = scheduler;
                return this;
            }

            /**
             * Sets the value of {@link ManagerProperty#getScheduler}
             * @param scheduler the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheduler(com.aliyun.ros.cdk.ehpc.RosClusterV2.SchedulerProperty scheduler) {
                this.scheduler = scheduler;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ManagerProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ManagerProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ManagerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ManagerProperty {
            private final java.lang.Object directoryService;
            private final java.lang.Object dns;
            private final java.lang.Object managerNode;
            private final java.lang.Object scheduler;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.directoryService = software.amazon.jsii.Kernel.get(this, "directoryService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dns = software.amazon.jsii.Kernel.get(this, "dns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.managerNode = software.amazon.jsii.Kernel.get(this, "managerNode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scheduler = software.amazon.jsii.Kernel.get(this, "scheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.directoryService = builder.directoryService;
                this.dns = builder.dns;
                this.managerNode = builder.managerNode;
                this.scheduler = builder.scheduler;
            }

            @Override
            public final java.lang.Object getDirectoryService() {
                return this.directoryService;
            }

            @Override
            public final java.lang.Object getDns() {
                return this.dns;
            }

            @Override
            public final java.lang.Object getManagerNode() {
                return this.managerNode;
            }

            @Override
            public final java.lang.Object getScheduler() {
                return this.scheduler;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDirectoryService() != null) {
                    data.set("directoryService", om.valueToTree(this.getDirectoryService()));
                }
                if (this.getDns() != null) {
                    data.set("dns", om.valueToTree(this.getDns()));
                }
                if (this.getManagerNode() != null) {
                    data.set("managerNode", om.valueToTree(this.getManagerNode()));
                }
                if (this.getScheduler() != null) {
                    data.set("scheduler", om.valueToTree(this.getScheduler()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.ManagerProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ManagerProperty.Jsii$Proxy that = (ManagerProperty.Jsii$Proxy) o;

                if (this.directoryService != null ? !this.directoryService.equals(that.directoryService) : that.directoryService != null) return false;
                if (this.dns != null ? !this.dns.equals(that.dns) : that.dns != null) return false;
                if (this.managerNode != null ? !this.managerNode.equals(that.managerNode) : that.managerNode != null) return false;
                return this.scheduler != null ? this.scheduler.equals(that.scheduler) : that.scheduler == null;
            }

            @Override
            public final int hashCode() {
                int result = this.directoryService != null ? this.directoryService.hashCode() : 0;
                result = 31 * result + (this.dns != null ? this.dns.hashCode() : 0);
                result = 31 * result + (this.managerNode != null ? this.managerNode.hashCode() : 0);
                result = 31 * result + (this.scheduler != null ? this.scheduler.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.QueuesProperty")
    @software.amazon.jsii.Jsii.Proxy(QueuesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface QueuesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getQueueName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAllocationStrategy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getComputeNodes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableScaleIn() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableScaleOut() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostnamePrefix() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostnameSuffix() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInitialCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInterConnect() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeepAliveNodes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxCountPerCycle() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMinCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRamRole() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link QueuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link QueuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<QueuesProperty> {
            java.lang.Object queueName;
            java.lang.Object allocationStrategy;
            java.lang.Object computeNodes;
            java.lang.Object enableScaleIn;
            java.lang.Object enableScaleOut;
            java.lang.Object hostnamePrefix;
            java.lang.Object hostnameSuffix;
            java.lang.Object initialCount;
            java.lang.Object interConnect;
            java.lang.Object keepAliveNodes;
            java.lang.Object maxCount;
            java.lang.Object maxCountPerCycle;
            java.lang.Object minCount;
            java.lang.Object ramRole;
            java.lang.Object vSwitchIds;

            /**
             * Sets the value of {@link QueuesProperty#getQueueName}
             * @param queueName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queueName(java.lang.String queueName) {
                this.queueName = queueName;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getQueueName}
             * @param queueName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queueName(com.aliyun.ros.cdk.core.IResolvable queueName) {
                this.queueName = queueName;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getAllocationStrategy}
             * @param allocationStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allocationStrategy(java.lang.String allocationStrategy) {
                this.allocationStrategy = allocationStrategy;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getAllocationStrategy}
             * @param allocationStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allocationStrategy(com.aliyun.ros.cdk.core.IResolvable allocationStrategy) {
                this.allocationStrategy = allocationStrategy;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getComputeNodes}
             * @param computeNodes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder computeNodes(com.aliyun.ros.cdk.core.IResolvable computeNodes) {
                this.computeNodes = computeNodes;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getComputeNodes}
             * @param computeNodes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder computeNodes(java.util.List<? extends java.lang.Object> computeNodes) {
                this.computeNodes = computeNodes;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getEnableScaleIn}
             * @param enableScaleIn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableScaleIn(java.lang.Boolean enableScaleIn) {
                this.enableScaleIn = enableScaleIn;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getEnableScaleIn}
             * @param enableScaleIn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableScaleIn(com.aliyun.ros.cdk.core.IResolvable enableScaleIn) {
                this.enableScaleIn = enableScaleIn;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getEnableScaleOut}
             * @param enableScaleOut the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableScaleOut(java.lang.Boolean enableScaleOut) {
                this.enableScaleOut = enableScaleOut;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getEnableScaleOut}
             * @param enableScaleOut the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableScaleOut(com.aliyun.ros.cdk.core.IResolvable enableScaleOut) {
                this.enableScaleOut = enableScaleOut;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getHostnamePrefix}
             * @param hostnamePrefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostnamePrefix(java.lang.String hostnamePrefix) {
                this.hostnamePrefix = hostnamePrefix;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getHostnamePrefix}
             * @param hostnamePrefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostnamePrefix(com.aliyun.ros.cdk.core.IResolvable hostnamePrefix) {
                this.hostnamePrefix = hostnamePrefix;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getHostnameSuffix}
             * @param hostnameSuffix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostnameSuffix(java.lang.String hostnameSuffix) {
                this.hostnameSuffix = hostnameSuffix;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getHostnameSuffix}
             * @param hostnameSuffix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostnameSuffix(com.aliyun.ros.cdk.core.IResolvable hostnameSuffix) {
                this.hostnameSuffix = hostnameSuffix;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getInitialCount}
             * @param initialCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialCount(java.lang.Number initialCount) {
                this.initialCount = initialCount;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getInitialCount}
             * @param initialCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialCount(com.aliyun.ros.cdk.core.IResolvable initialCount) {
                this.initialCount = initialCount;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getInterConnect}
             * @param interConnect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder interConnect(java.lang.String interConnect) {
                this.interConnect = interConnect;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getInterConnect}
             * @param interConnect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder interConnect(com.aliyun.ros.cdk.core.IResolvable interConnect) {
                this.interConnect = interConnect;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getKeepAliveNodes}
             * @param keepAliveNodes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keepAliveNodes(com.aliyun.ros.cdk.core.IResolvable keepAliveNodes) {
                this.keepAliveNodes = keepAliveNodes;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getKeepAliveNodes}
             * @param keepAliveNodes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keepAliveNodes(java.util.List<? extends java.lang.Object> keepAliveNodes) {
                this.keepAliveNodes = keepAliveNodes;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getMaxCount}
             * @param maxCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxCount(java.lang.Number maxCount) {
                this.maxCount = maxCount;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getMaxCount}
             * @param maxCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxCount(com.aliyun.ros.cdk.core.IResolvable maxCount) {
                this.maxCount = maxCount;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getMaxCountPerCycle}
             * @param maxCountPerCycle the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxCountPerCycle(java.lang.Number maxCountPerCycle) {
                this.maxCountPerCycle = maxCountPerCycle;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getMaxCountPerCycle}
             * @param maxCountPerCycle the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxCountPerCycle(com.aliyun.ros.cdk.core.IResolvable maxCountPerCycle) {
                this.maxCountPerCycle = maxCountPerCycle;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getMinCount}
             * @param minCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minCount(java.lang.Number minCount) {
                this.minCount = minCount;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getMinCount}
             * @param minCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minCount(com.aliyun.ros.cdk.core.IResolvable minCount) {
                this.minCount = minCount;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getRamRole}
             * @param ramRole the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ramRole(java.lang.String ramRole) {
                this.ramRole = ramRole;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getRamRole}
             * @param ramRole the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ramRole(com.aliyun.ros.cdk.core.IResolvable ramRole) {
                this.ramRole = ramRole;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link QueuesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public QueuesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link QueuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueuesProperty {
            private final java.lang.Object queueName;
            private final java.lang.Object allocationStrategy;
            private final java.lang.Object computeNodes;
            private final java.lang.Object enableScaleIn;
            private final java.lang.Object enableScaleOut;
            private final java.lang.Object hostnamePrefix;
            private final java.lang.Object hostnameSuffix;
            private final java.lang.Object initialCount;
            private final java.lang.Object interConnect;
            private final java.lang.Object keepAliveNodes;
            private final java.lang.Object maxCount;
            private final java.lang.Object maxCountPerCycle;
            private final java.lang.Object minCount;
            private final java.lang.Object ramRole;
            private final java.lang.Object vSwitchIds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.queueName = software.amazon.jsii.Kernel.get(this, "queueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.allocationStrategy = software.amazon.jsii.Kernel.get(this, "allocationStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.computeNodes = software.amazon.jsii.Kernel.get(this, "computeNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableScaleIn = software.amazon.jsii.Kernel.get(this, "enableScaleIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableScaleOut = software.amazon.jsii.Kernel.get(this, "enableScaleOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostnamePrefix = software.amazon.jsii.Kernel.get(this, "hostnamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostnameSuffix = software.amazon.jsii.Kernel.get(this, "hostnameSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.initialCount = software.amazon.jsii.Kernel.get(this, "initialCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.interConnect = software.amazon.jsii.Kernel.get(this, "interConnect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.keepAliveNodes = software.amazon.jsii.Kernel.get(this, "keepAliveNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxCount = software.amazon.jsii.Kernel.get(this, "maxCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxCountPerCycle = software.amazon.jsii.Kernel.get(this, "maxCountPerCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.minCount = software.amazon.jsii.Kernel.get(this, "minCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ramRole = software.amazon.jsii.Kernel.get(this, "ramRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.queueName = java.util.Objects.requireNonNull(builder.queueName, "queueName is required");
                this.allocationStrategy = builder.allocationStrategy;
                this.computeNodes = builder.computeNodes;
                this.enableScaleIn = builder.enableScaleIn;
                this.enableScaleOut = builder.enableScaleOut;
                this.hostnamePrefix = builder.hostnamePrefix;
                this.hostnameSuffix = builder.hostnameSuffix;
                this.initialCount = builder.initialCount;
                this.interConnect = builder.interConnect;
                this.keepAliveNodes = builder.keepAliveNodes;
                this.maxCount = builder.maxCount;
                this.maxCountPerCycle = builder.maxCountPerCycle;
                this.minCount = builder.minCount;
                this.ramRole = builder.ramRole;
                this.vSwitchIds = builder.vSwitchIds;
            }

            @Override
            public final java.lang.Object getQueueName() {
                return this.queueName;
            }

            @Override
            public final java.lang.Object getAllocationStrategy() {
                return this.allocationStrategy;
            }

            @Override
            public final java.lang.Object getComputeNodes() {
                return this.computeNodes;
            }

            @Override
            public final java.lang.Object getEnableScaleIn() {
                return this.enableScaleIn;
            }

            @Override
            public final java.lang.Object getEnableScaleOut() {
                return this.enableScaleOut;
            }

            @Override
            public final java.lang.Object getHostnamePrefix() {
                return this.hostnamePrefix;
            }

            @Override
            public final java.lang.Object getHostnameSuffix() {
                return this.hostnameSuffix;
            }

            @Override
            public final java.lang.Object getInitialCount() {
                return this.initialCount;
            }

            @Override
            public final java.lang.Object getInterConnect() {
                return this.interConnect;
            }

            @Override
            public final java.lang.Object getKeepAliveNodes() {
                return this.keepAliveNodes;
            }

            @Override
            public final java.lang.Object getMaxCount() {
                return this.maxCount;
            }

            @Override
            public final java.lang.Object getMaxCountPerCycle() {
                return this.maxCountPerCycle;
            }

            @Override
            public final java.lang.Object getMinCount() {
                return this.minCount;
            }

            @Override
            public final java.lang.Object getRamRole() {
                return this.ramRole;
            }

            @Override
            public final java.lang.Object getVSwitchIds() {
                return this.vSwitchIds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("queueName", om.valueToTree(this.getQueueName()));
                if (this.getAllocationStrategy() != null) {
                    data.set("allocationStrategy", om.valueToTree(this.getAllocationStrategy()));
                }
                if (this.getComputeNodes() != null) {
                    data.set("computeNodes", om.valueToTree(this.getComputeNodes()));
                }
                if (this.getEnableScaleIn() != null) {
                    data.set("enableScaleIn", om.valueToTree(this.getEnableScaleIn()));
                }
                if (this.getEnableScaleOut() != null) {
                    data.set("enableScaleOut", om.valueToTree(this.getEnableScaleOut()));
                }
                if (this.getHostnamePrefix() != null) {
                    data.set("hostnamePrefix", om.valueToTree(this.getHostnamePrefix()));
                }
                if (this.getHostnameSuffix() != null) {
                    data.set("hostnameSuffix", om.valueToTree(this.getHostnameSuffix()));
                }
                if (this.getInitialCount() != null) {
                    data.set("initialCount", om.valueToTree(this.getInitialCount()));
                }
                if (this.getInterConnect() != null) {
                    data.set("interConnect", om.valueToTree(this.getInterConnect()));
                }
                if (this.getKeepAliveNodes() != null) {
                    data.set("keepAliveNodes", om.valueToTree(this.getKeepAliveNodes()));
                }
                if (this.getMaxCount() != null) {
                    data.set("maxCount", om.valueToTree(this.getMaxCount()));
                }
                if (this.getMaxCountPerCycle() != null) {
                    data.set("maxCountPerCycle", om.valueToTree(this.getMaxCountPerCycle()));
                }
                if (this.getMinCount() != null) {
                    data.set("minCount", om.valueToTree(this.getMinCount()));
                }
                if (this.getRamRole() != null) {
                    data.set("ramRole", om.valueToTree(this.getRamRole()));
                }
                if (this.getVSwitchIds() != null) {
                    data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.QueuesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                QueuesProperty.Jsii$Proxy that = (QueuesProperty.Jsii$Proxy) o;

                if (!queueName.equals(that.queueName)) return false;
                if (this.allocationStrategy != null ? !this.allocationStrategy.equals(that.allocationStrategy) : that.allocationStrategy != null) return false;
                if (this.computeNodes != null ? !this.computeNodes.equals(that.computeNodes) : that.computeNodes != null) return false;
                if (this.enableScaleIn != null ? !this.enableScaleIn.equals(that.enableScaleIn) : that.enableScaleIn != null) return false;
                if (this.enableScaleOut != null ? !this.enableScaleOut.equals(that.enableScaleOut) : that.enableScaleOut != null) return false;
                if (this.hostnamePrefix != null ? !this.hostnamePrefix.equals(that.hostnamePrefix) : that.hostnamePrefix != null) return false;
                if (this.hostnameSuffix != null ? !this.hostnameSuffix.equals(that.hostnameSuffix) : that.hostnameSuffix != null) return false;
                if (this.initialCount != null ? !this.initialCount.equals(that.initialCount) : that.initialCount != null) return false;
                if (this.interConnect != null ? !this.interConnect.equals(that.interConnect) : that.interConnect != null) return false;
                if (this.keepAliveNodes != null ? !this.keepAliveNodes.equals(that.keepAliveNodes) : that.keepAliveNodes != null) return false;
                if (this.maxCount != null ? !this.maxCount.equals(that.maxCount) : that.maxCount != null) return false;
                if (this.maxCountPerCycle != null ? !this.maxCountPerCycle.equals(that.maxCountPerCycle) : that.maxCountPerCycle != null) return false;
                if (this.minCount != null ? !this.minCount.equals(that.minCount) : that.minCount != null) return false;
                if (this.ramRole != null ? !this.ramRole.equals(that.ramRole) : that.ramRole != null) return false;
                return this.vSwitchIds != null ? this.vSwitchIds.equals(that.vSwitchIds) : that.vSwitchIds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.queueName.hashCode();
                result = 31 * result + (this.allocationStrategy != null ? this.allocationStrategy.hashCode() : 0);
                result = 31 * result + (this.computeNodes != null ? this.computeNodes.hashCode() : 0);
                result = 31 * result + (this.enableScaleIn != null ? this.enableScaleIn.hashCode() : 0);
                result = 31 * result + (this.enableScaleOut != null ? this.enableScaleOut.hashCode() : 0);
                result = 31 * result + (this.hostnamePrefix != null ? this.hostnamePrefix.hashCode() : 0);
                result = 31 * result + (this.hostnameSuffix != null ? this.hostnameSuffix.hashCode() : 0);
                result = 31 * result + (this.initialCount != null ? this.initialCount.hashCode() : 0);
                result = 31 * result + (this.interConnect != null ? this.interConnect.hashCode() : 0);
                result = 31 * result + (this.keepAliveNodes != null ? this.keepAliveNodes.hashCode() : 0);
                result = 31 * result + (this.maxCount != null ? this.maxCount.hashCode() : 0);
                result = 31 * result + (this.maxCountPerCycle != null ? this.maxCountPerCycle.hashCode() : 0);
                result = 31 * result + (this.minCount != null ? this.minCount.hashCode() : 0);
                result = 31 * result + (this.ramRole != null ? this.ramRole.hashCode() : 0);
                result = 31 * result + (this.vSwitchIds != null ? this.vSwitchIds.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.SchedulerProperty")
    @software.amazon.jsii.Jsii.Proxy(SchedulerProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SchedulerProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVersion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SchedulerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SchedulerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SchedulerProperty> {
            java.lang.Object type;
            java.lang.Object version;

            /**
             * Sets the value of {@link SchedulerProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link SchedulerProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link SchedulerProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link SchedulerProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SchedulerProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SchedulerProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SchedulerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SchedulerProperty {
            private final java.lang.Object type;
            private final java.lang.Object version;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.type = builder.type;
                this.version = builder.version;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }
                if (this.getVersion() != null) {
                    data.set("version", om.valueToTree(this.getVersion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.SchedulerProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SchedulerProperty.Jsii$Proxy that = (SchedulerProperty.Jsii$Proxy) o;

                if (this.type != null ? !this.type.equals(that.type) : that.type != null) return false;
                return this.version != null ? this.version.equals(that.version) : that.version == null;
            }

            @Override
            public final int hashCode() {
                int result = this.type != null ? this.type.hashCode() : 0;
                result = 31 * result + (this.version != null ? this.version.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.SharedStoragesProperty")
    @software.amazon.jsii.Jsii.Proxy(SharedStoragesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SharedStoragesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getFileSystemId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMountTargetDomain();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountDirectory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountOptions() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNasDirectory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProtocolType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SharedStoragesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SharedStoragesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SharedStoragesProperty> {
            java.lang.Object fileSystemId;
            java.lang.Object mountTargetDomain;
            java.lang.Object mountDirectory;
            java.lang.Object mountOptions;
            java.lang.Object nasDirectory;
            java.lang.Object protocolType;

            /**
             * Sets the value of {@link SharedStoragesProperty#getFileSystemId}
             * @param fileSystemId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fileSystemId(java.lang.String fileSystemId) {
                this.fileSystemId = fileSystemId;
                return this;
            }

            /**
             * Sets the value of {@link SharedStoragesProperty#getFileSystemId}
             * @param fileSystemId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fileSystemId(com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
                this.fileSystemId = fileSystemId;
                return this;
            }

            /**
             * Sets the value of {@link SharedStoragesProperty#getMountTargetDomain}
             * @param mountTargetDomain the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountTargetDomain(java.lang.String mountTargetDomain) {
                this.mountTargetDomain = mountTargetDomain;
                return this;
            }

            /**
             * Sets the value of {@link SharedStoragesProperty#getMountTargetDomain}
             * @param mountTargetDomain the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountTargetDomain(com.aliyun.ros.cdk.core.IResolvable mountTargetDomain) {
                this.mountTargetDomain = mountTargetDomain;
                return this;
            }

            /**
             * Sets the value of {@link SharedStoragesProperty#getMountDirectory}
             * @param mountDirectory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountDirectory(java.lang.String mountDirectory) {
                this.mountDirectory = mountDirectory;
                return this;
            }

            /**
             * Sets the value of {@link SharedStoragesProperty#getMountDirectory}
             * @param mountDirectory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountDirectory(com.aliyun.ros.cdk.core.IResolvable mountDirectory) {
                this.mountDirectory = mountDirectory;
                return this;
            }

            /**
             * Sets the value of {@link SharedStoragesProperty#getMountOptions}
             * @param mountOptions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountOptions(java.lang.String mountOptions) {
                this.mountOptions = mountOptions;
                return this;
            }

            /**
             * Sets the value of {@link SharedStoragesProperty#getMountOptions}
             * @param mountOptions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountOptions(com.aliyun.ros.cdk.core.IResolvable mountOptions) {
                this.mountOptions = mountOptions;
                return this;
            }

            /**
             * Sets the value of {@link SharedStoragesProperty#getNasDirectory}
             * @param nasDirectory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nasDirectory(java.lang.String nasDirectory) {
                this.nasDirectory = nasDirectory;
                return this;
            }

            /**
             * Sets the value of {@link SharedStoragesProperty#getNasDirectory}
             * @param nasDirectory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nasDirectory(com.aliyun.ros.cdk.core.IResolvable nasDirectory) {
                this.nasDirectory = nasDirectory;
                return this;
            }

            /**
             * Sets the value of {@link SharedStoragesProperty#getProtocolType}
             * @param protocolType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocolType(java.lang.String protocolType) {
                this.protocolType = protocolType;
                return this;
            }

            /**
             * Sets the value of {@link SharedStoragesProperty#getProtocolType}
             * @param protocolType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocolType(com.aliyun.ros.cdk.core.IResolvable protocolType) {
                this.protocolType = protocolType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SharedStoragesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SharedStoragesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SharedStoragesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SharedStoragesProperty {
            private final java.lang.Object fileSystemId;
            private final java.lang.Object mountTargetDomain;
            private final java.lang.Object mountDirectory;
            private final java.lang.Object mountOptions;
            private final java.lang.Object nasDirectory;
            private final java.lang.Object protocolType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.fileSystemId = software.amazon.jsii.Kernel.get(this, "fileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountTargetDomain = software.amazon.jsii.Kernel.get(this, "mountTargetDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountDirectory = software.amazon.jsii.Kernel.get(this, "mountDirectory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountOptions = software.amazon.jsii.Kernel.get(this, "mountOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nasDirectory = software.amazon.jsii.Kernel.get(this, "nasDirectory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocolType = software.amazon.jsii.Kernel.get(this, "protocolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.fileSystemId = java.util.Objects.requireNonNull(builder.fileSystemId, "fileSystemId is required");
                this.mountTargetDomain = java.util.Objects.requireNonNull(builder.mountTargetDomain, "mountTargetDomain is required");
                this.mountDirectory = builder.mountDirectory;
                this.mountOptions = builder.mountOptions;
                this.nasDirectory = builder.nasDirectory;
                this.protocolType = builder.protocolType;
            }

            @Override
            public final java.lang.Object getFileSystemId() {
                return this.fileSystemId;
            }

            @Override
            public final java.lang.Object getMountTargetDomain() {
                return this.mountTargetDomain;
            }

            @Override
            public final java.lang.Object getMountDirectory() {
                return this.mountDirectory;
            }

            @Override
            public final java.lang.Object getMountOptions() {
                return this.mountOptions;
            }

            @Override
            public final java.lang.Object getNasDirectory() {
                return this.nasDirectory;
            }

            @Override
            public final java.lang.Object getProtocolType() {
                return this.protocolType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("fileSystemId", om.valueToTree(this.getFileSystemId()));
                data.set("mountTargetDomain", om.valueToTree(this.getMountTargetDomain()));
                if (this.getMountDirectory() != null) {
                    data.set("mountDirectory", om.valueToTree(this.getMountDirectory()));
                }
                if (this.getMountOptions() != null) {
                    data.set("mountOptions", om.valueToTree(this.getMountOptions()));
                }
                if (this.getNasDirectory() != null) {
                    data.set("nasDirectory", om.valueToTree(this.getNasDirectory()));
                }
                if (this.getProtocolType() != null) {
                    data.set("protocolType", om.valueToTree(this.getProtocolType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.SharedStoragesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SharedStoragesProperty.Jsii$Proxy that = (SharedStoragesProperty.Jsii$Proxy) o;

                if (!fileSystemId.equals(that.fileSystemId)) return false;
                if (!mountTargetDomain.equals(that.mountTargetDomain)) return false;
                if (this.mountDirectory != null ? !this.mountDirectory.equals(that.mountDirectory) : that.mountDirectory != null) return false;
                if (this.mountOptions != null ? !this.mountOptions.equals(that.mountOptions) : that.mountOptions != null) return false;
                if (this.nasDirectory != null ? !this.nasDirectory.equals(that.nasDirectory) : that.nasDirectory != null) return false;
                return this.protocolType != null ? this.protocolType.equals(that.protocolType) : that.protocolType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.fileSystemId.hashCode();
                result = 31 * result + (this.mountTargetDomain.hashCode());
                result = 31 * result + (this.mountDirectory != null ? this.mountDirectory.hashCode() : 0);
                result = 31 * result + (this.mountOptions != null ? this.mountOptions.hashCode() : 0);
                result = 31 * result + (this.nasDirectory != null ? this.nasDirectory.hashCode() : 0);
                result = 31 * result + (this.protocolType != null ? this.protocolType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.SystemDiskProperty")
    @software.amazon.jsii.Jsii.Proxy(SystemDiskProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SystemDiskProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCategory();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSize();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLevel() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SystemDiskProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SystemDiskProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SystemDiskProperty> {
            java.lang.Object category;
            java.lang.Object size;
            java.lang.Object level;

            /**
             * Sets the value of {@link SystemDiskProperty#getCategory}
             * @param category the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(java.lang.String category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link SystemDiskProperty#getCategory}
             * @param category the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link SystemDiskProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(java.lang.Number size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link SystemDiskProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link SystemDiskProperty#getLevel}
             * @param level the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(java.lang.String level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link SystemDiskProperty#getLevel}
             * @param level the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(com.aliyun.ros.cdk.core.IResolvable level) {
                this.level = level;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SystemDiskProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SystemDiskProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SystemDiskProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SystemDiskProperty {
            private final java.lang.Object category;
            private final java.lang.Object size;
            private final java.lang.Object level;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.level = software.amazon.jsii.Kernel.get(this, "level", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.category = java.util.Objects.requireNonNull(builder.category, "category is required");
                this.size = java.util.Objects.requireNonNull(builder.size, "size is required");
                this.level = builder.level;
            }

            @Override
            public final java.lang.Object getCategory() {
                return this.category;
            }

            @Override
            public final java.lang.Object getSize() {
                return this.size;
            }

            @Override
            public final java.lang.Object getLevel() {
                return this.level;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("category", om.valueToTree(this.getCategory()));
                data.set("size", om.valueToTree(this.getSize()));
                if (this.getLevel() != null) {
                    data.set("level", om.valueToTree(this.getLevel()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.SystemDiskProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SystemDiskProperty.Jsii$Proxy that = (SystemDiskProperty.Jsii$Proxy) o;

                if (!category.equals(that.category)) return false;
                if (!size.equals(that.size)) return false;
                return this.level != null ? this.level.equals(that.level) : that.level == null;
            }

            @Override
            public final int hashCode() {
                int result = this.category.hashCode();
                result = 31 * result + (this.size.hashCode());
                result = 31 * result + (this.level != null ? this.level.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterV2.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterV2.TagsProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ehpc.RosClusterV2}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ehpc.RosClusterV2> {
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
        private final com.aliyun.ros.cdk.ehpc.RosClusterV2Props.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ehpc.RosClusterV2Props.Builder();
        }

        /**
         * @return {@code this}
         * @param clusterName This parameter is required.
         */
        public Builder clusterName(final java.lang.String clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterName This parameter is required.
         */
        public Builder clusterName(final com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }

        /**
         * @return {@code this}
         * @param sharedStorages This parameter is required.
         */
        public Builder sharedStorages(final com.aliyun.ros.cdk.core.IResolvable sharedStorages) {
            this.props.sharedStorages(sharedStorages);
            return this;
        }
        /**
         * @return {@code this}
         * @param sharedStorages This parameter is required.
         */
        public Builder sharedStorages(final java.util.List<? extends java.lang.Object> sharedStorages) {
            this.props.sharedStorages(sharedStorages);
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
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param additionalPackages This parameter is required.
         */
        public Builder additionalPackages(final com.aliyun.ros.cdk.core.IResolvable additionalPackages) {
            this.props.additionalPackages(additionalPackages);
            return this;
        }
        /**
         * @return {@code this}
         * @param additionalPackages This parameter is required.
         */
        public Builder additionalPackages(final java.util.List<? extends java.lang.Object> additionalPackages) {
            this.props.additionalPackages(additionalPackages);
            return this;
        }

        /**
         * @return {@code this}
         * @param addons This parameter is required.
         */
        public Builder addons(final com.aliyun.ros.cdk.core.IResolvable addons) {
            this.props.addons(addons);
            return this;
        }
        /**
         * @return {@code this}
         * @param addons This parameter is required.
         */
        public Builder addons(final java.util.List<? extends java.lang.Object> addons) {
            this.props.addons(addons);
            return this;
        }

        /**
         * @return {@code this}
         * @param clientVersion This parameter is required.
         */
        public Builder clientVersion(final java.lang.String clientVersion) {
            this.props.clientVersion(clientVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param clientVersion This parameter is required.
         */
        public Builder clientVersion(final com.aliyun.ros.cdk.core.IResolvable clientVersion) {
            this.props.clientVersion(clientVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterCategory This parameter is required.
         */
        public Builder clusterCategory(final java.lang.String clusterCategory) {
            this.props.clusterCategory(clusterCategory);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterCategory This parameter is required.
         */
        public Builder clusterCategory(final com.aliyun.ros.cdk.core.IResolvable clusterCategory) {
            this.props.clusterCategory(clusterCategory);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterCredentials This parameter is required.
         */
        public Builder clusterCredentials(final com.aliyun.ros.cdk.core.IResolvable clusterCredentials) {
            this.props.clusterCredentials(clusterCredentials);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterCredentials This parameter is required.
         */
        public Builder clusterCredentials(final com.aliyun.ros.cdk.ehpc.RosClusterV2.ClusterCredentialsProperty clusterCredentials) {
            this.props.clusterCredentials(clusterCredentials);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterCustomConfiguration This parameter is required.
         */
        public Builder clusterCustomConfiguration(final com.aliyun.ros.cdk.core.IResolvable clusterCustomConfiguration) {
            this.props.clusterCustomConfiguration(clusterCustomConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterCustomConfiguration This parameter is required.
         */
        public Builder clusterCustomConfiguration(final com.aliyun.ros.cdk.ehpc.RosClusterV2.ClusterCustomConfigurationProperty clusterCustomConfiguration) {
            this.props.clusterCustomConfiguration(clusterCustomConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterDescription This parameter is required.
         */
        public Builder clusterDescription(final java.lang.String clusterDescription) {
            this.props.clusterDescription(clusterDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterDescription This parameter is required.
         */
        public Builder clusterDescription(final com.aliyun.ros.cdk.core.IResolvable clusterDescription) {
            this.props.clusterDescription(clusterDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterMode This parameter is required.
         */
        public Builder clusterMode(final java.lang.String clusterMode) {
            this.props.clusterMode(clusterMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterMode This parameter is required.
         */
        public Builder clusterMode(final com.aliyun.ros.cdk.core.IResolvable clusterMode) {
            this.props.clusterMode(clusterMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param deletionProtection This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }
        /**
         * @return {@code this}
         * @param deletionProtection This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }

        /**
         * @return {@code this}
         * @param isEnterpriseSecurityGroup This parameter is required.
         */
        public Builder isEnterpriseSecurityGroup(final java.lang.Boolean isEnterpriseSecurityGroup) {
            this.props.isEnterpriseSecurityGroup(isEnterpriseSecurityGroup);
            return this;
        }
        /**
         * @return {@code this}
         * @param isEnterpriseSecurityGroup This parameter is required.
         */
        public Builder isEnterpriseSecurityGroup(final com.aliyun.ros.cdk.core.IResolvable isEnterpriseSecurityGroup) {
            this.props.isEnterpriseSecurityGroup(isEnterpriseSecurityGroup);
            return this;
        }

        /**
         * @return {@code this}
         * @param manager This parameter is required.
         */
        public Builder manager(final com.aliyun.ros.cdk.core.IResolvable manager) {
            this.props.manager(manager);
            return this;
        }
        /**
         * @return {@code this}
         * @param manager This parameter is required.
         */
        public Builder manager(final com.aliyun.ros.cdk.ehpc.RosClusterV2.ManagerProperty manager) {
            this.props.manager(manager);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxCoreCount This parameter is required.
         */
        public Builder maxCoreCount(final java.lang.Number maxCoreCount) {
            this.props.maxCoreCount(maxCoreCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxCoreCount This parameter is required.
         */
        public Builder maxCoreCount(final com.aliyun.ros.cdk.core.IResolvable maxCoreCount) {
            this.props.maxCoreCount(maxCoreCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxCount This parameter is required.
         */
        public Builder maxCount(final java.lang.Number maxCount) {
            this.props.maxCount(maxCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxCount This parameter is required.
         */
        public Builder maxCount(final com.aliyun.ros.cdk.core.IResolvable maxCount) {
            this.props.maxCount(maxCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param queues This parameter is required.
         */
        public Builder queues(final com.aliyun.ros.cdk.core.IResolvable queues) {
            this.props.queues(queues);
            return this;
        }
        /**
         * @return {@code this}
         * @param queues This parameter is required.
         */
        public Builder queues(final java.util.List<? extends java.lang.Object> queues) {
            this.props.queues(queues);
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
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ehpc.RosClusterV2}.
         */
        @Override
        public com.aliyun.ros.cdk.ehpc.RosClusterV2 build() {
            return new com.aliyun.ros.cdk.ehpc.RosClusterV2(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
