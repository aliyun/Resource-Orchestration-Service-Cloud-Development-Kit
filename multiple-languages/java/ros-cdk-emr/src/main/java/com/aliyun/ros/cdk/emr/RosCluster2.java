package com.aliyun.ros.cdk.emr;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::EMR::Cluster2</code>, which is used to create an E-MapReduce (EMR) cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:52.324Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster2")
public class RosCluster2 extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCluster2(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCluster2(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.emr.RosCluster2.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCluster2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.RosCluster2Props props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApplicationLinks() {
        return software.amazon.jsii.Kernel.get(this, "attrApplicationLinks", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

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
    public @org.jetbrains.annotations.NotNull java.lang.Object getApplications() {
        return software.amazon.jsii.Kernel.get(this, "applications", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApplications(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "applications", java.util.Objects.requireNonNull(value, "applications is required"));
    }

    /**
     */
    public void setApplications(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.emr.RosCluster2.ApplicationsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.emr.RosCluster2.ApplicationsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "applications", java.util.Objects.requireNonNull(value, "applications is required"));
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

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getClusterType() {
        return software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterType", java.util.Objects.requireNonNull(value, "clusterType is required"));
    }

    /**
     */
    public void setClusterType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterType", java.util.Objects.requireNonNull(value, "clusterType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNodeAttributes() {
        return software.amazon.jsii.Kernel.get(this, "nodeAttributes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNodeAttributes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nodeAttributes", java.util.Objects.requireNonNull(value, "nodeAttributes is required"));
    }

    /**
     */
    public void setNodeAttributes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.RosCluster2.NodeAttributesProperty value) {
        software.amazon.jsii.Kernel.set(this, "nodeAttributes", java.util.Objects.requireNonNull(value, "nodeAttributes is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNodeGroups() {
        return software.amazon.jsii.Kernel.get(this, "nodeGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNodeGroups(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nodeGroups", java.util.Objects.requireNonNull(value, "nodeGroups is required"));
    }

    /**
     */
    public void setNodeGroups(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.emr.RosCluster2.NodeGroupsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.emr.RosCluster2.NodeGroupsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "nodeGroups", java.util.Objects.requireNonNull(value, "nodeGroups is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getReleaseVersion() {
        return software.amazon.jsii.Kernel.get(this, "releaseVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReleaseVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "releaseVersion", java.util.Objects.requireNonNull(value, "releaseVersion is required"));
    }

    /**
     */
    public void setReleaseVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "releaseVersion", java.util.Objects.requireNonNull(value, "releaseVersion is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getApplicationConfigs() {
        return software.amazon.jsii.Kernel.get(this, "applicationConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApplicationConfigs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "applicationConfigs", value);
    }

    /**
     */
    public void setApplicationConfigs(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.emr.RosCluster2.ApplicationConfigsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.emr.RosCluster2.ApplicationConfigsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "applicationConfigs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBootstrapScripts() {
        return software.amazon.jsii.Kernel.get(this, "bootstrapScripts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBootstrapScripts(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bootstrapScripts", value);
    }

    /**
     */
    public void setBootstrapScripts(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.emr.RosCluster2.BootstrapScriptsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.emr.RosCluster2.BootstrapScriptsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "bootstrapScripts", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeployMode() {
        return software.amazon.jsii.Kernel.get(this, "deployMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeployMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deployMode", value);
    }

    /**
     */
    public void setDeployMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deployMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", value);
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityMode() {
        return software.amazon.jsii.Kernel.get(this, "securityMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityMode", value);
    }

    /**
     */
    public void setSecurityMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSubscriptionConfig() {
        return software.amazon.jsii.Kernel.get(this, "subscriptionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSubscriptionConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "subscriptionConfig", value);
    }

    /**
     */
    public void setSubscriptionConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.emr.RosCluster2.SubscriptionConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "subscriptionConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.emr.RosCluster2.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.emr.RosCluster2.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.RosCluster2.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.emr.RosCluster2.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster2.ApplicationConfigsProperty")
    @software.amazon.jsii.Jsii.Proxy(ApplicationConfigsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ApplicationConfigsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getApplicationName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigFileName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigItemKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigItemValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigScope() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNodeGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNodeGroupName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ApplicationConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ApplicationConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ApplicationConfigsProperty> {
            java.lang.Object applicationName;
            java.lang.Object configFileName;
            java.lang.Object configItemKey;
            java.lang.Object configItemValue;
            java.lang.Object configScope;
            java.lang.Object nodeGroupId;
            java.lang.Object nodeGroupName;

            /**
             * Sets the value of {@link ApplicationConfigsProperty#getApplicationName}
             * @param applicationName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder applicationName(java.lang.String applicationName) {
                this.applicationName = applicationName;
                return this;
            }

            /**
             * Sets the value of {@link ApplicationConfigsProperty#getApplicationName}
             * @param applicationName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder applicationName(com.aliyun.ros.cdk.core.IResolvable applicationName) {
                this.applicationName = applicationName;
                return this;
            }

            /**
             * Sets the value of {@link ApplicationConfigsProperty#getConfigFileName}
             * @param configFileName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configFileName(java.lang.String configFileName) {
                this.configFileName = configFileName;
                return this;
            }

            /**
             * Sets the value of {@link ApplicationConfigsProperty#getConfigFileName}
             * @param configFileName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configFileName(com.aliyun.ros.cdk.core.IResolvable configFileName) {
                this.configFileName = configFileName;
                return this;
            }

            /**
             * Sets the value of {@link ApplicationConfigsProperty#getConfigItemKey}
             * @param configItemKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configItemKey(java.lang.String configItemKey) {
                this.configItemKey = configItemKey;
                return this;
            }

            /**
             * Sets the value of {@link ApplicationConfigsProperty#getConfigItemKey}
             * @param configItemKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configItemKey(com.aliyun.ros.cdk.core.IResolvable configItemKey) {
                this.configItemKey = configItemKey;
                return this;
            }

            /**
             * Sets the value of {@link ApplicationConfigsProperty#getConfigItemValue}
             * @param configItemValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configItemValue(java.lang.String configItemValue) {
                this.configItemValue = configItemValue;
                return this;
            }

            /**
             * Sets the value of {@link ApplicationConfigsProperty#getConfigItemValue}
             * @param configItemValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configItemValue(com.aliyun.ros.cdk.core.IResolvable configItemValue) {
                this.configItemValue = configItemValue;
                return this;
            }

            /**
             * Sets the value of {@link ApplicationConfigsProperty#getConfigScope}
             * @param configScope the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configScope(java.lang.String configScope) {
                this.configScope = configScope;
                return this;
            }

            /**
             * Sets the value of {@link ApplicationConfigsProperty#getConfigScope}
             * @param configScope the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configScope(com.aliyun.ros.cdk.core.IResolvable configScope) {
                this.configScope = configScope;
                return this;
            }

            /**
             * Sets the value of {@link ApplicationConfigsProperty#getNodeGroupId}
             * @param nodeGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeGroupId(java.lang.String nodeGroupId) {
                this.nodeGroupId = nodeGroupId;
                return this;
            }

            /**
             * Sets the value of {@link ApplicationConfigsProperty#getNodeGroupId}
             * @param nodeGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeGroupId(com.aliyun.ros.cdk.core.IResolvable nodeGroupId) {
                this.nodeGroupId = nodeGroupId;
                return this;
            }

            /**
             * Sets the value of {@link ApplicationConfigsProperty#getNodeGroupName}
             * @param nodeGroupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeGroupName(java.lang.String nodeGroupName) {
                this.nodeGroupName = nodeGroupName;
                return this;
            }

            /**
             * Sets the value of {@link ApplicationConfigsProperty#getNodeGroupName}
             * @param nodeGroupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeGroupName(com.aliyun.ros.cdk.core.IResolvable nodeGroupName) {
                this.nodeGroupName = nodeGroupName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ApplicationConfigsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ApplicationConfigsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ApplicationConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApplicationConfigsProperty {
            private final java.lang.Object applicationName;
            private final java.lang.Object configFileName;
            private final java.lang.Object configItemKey;
            private final java.lang.Object configItemValue;
            private final java.lang.Object configScope;
            private final java.lang.Object nodeGroupId;
            private final java.lang.Object nodeGroupName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.applicationName = software.amazon.jsii.Kernel.get(this, "applicationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.configFileName = software.amazon.jsii.Kernel.get(this, "configFileName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.configItemKey = software.amazon.jsii.Kernel.get(this, "configItemKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.configItemValue = software.amazon.jsii.Kernel.get(this, "configItemValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.configScope = software.amazon.jsii.Kernel.get(this, "configScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodeGroupId = software.amazon.jsii.Kernel.get(this, "nodeGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodeGroupName = software.amazon.jsii.Kernel.get(this, "nodeGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.applicationName = java.util.Objects.requireNonNull(builder.applicationName, "applicationName is required");
                this.configFileName = builder.configFileName;
                this.configItemKey = builder.configItemKey;
                this.configItemValue = builder.configItemValue;
                this.configScope = builder.configScope;
                this.nodeGroupId = builder.nodeGroupId;
                this.nodeGroupName = builder.nodeGroupName;
            }

            @Override
            public final java.lang.Object getApplicationName() {
                return this.applicationName;
            }

            @Override
            public final java.lang.Object getConfigFileName() {
                return this.configFileName;
            }

            @Override
            public final java.lang.Object getConfigItemKey() {
                return this.configItemKey;
            }

            @Override
            public final java.lang.Object getConfigItemValue() {
                return this.configItemValue;
            }

            @Override
            public final java.lang.Object getConfigScope() {
                return this.configScope;
            }

            @Override
            public final java.lang.Object getNodeGroupId() {
                return this.nodeGroupId;
            }

            @Override
            public final java.lang.Object getNodeGroupName() {
                return this.nodeGroupName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("applicationName", om.valueToTree(this.getApplicationName()));
                if (this.getConfigFileName() != null) {
                    data.set("configFileName", om.valueToTree(this.getConfigFileName()));
                }
                if (this.getConfigItemKey() != null) {
                    data.set("configItemKey", om.valueToTree(this.getConfigItemKey()));
                }
                if (this.getConfigItemValue() != null) {
                    data.set("configItemValue", om.valueToTree(this.getConfigItemValue()));
                }
                if (this.getConfigScope() != null) {
                    data.set("configScope", om.valueToTree(this.getConfigScope()));
                }
                if (this.getNodeGroupId() != null) {
                    data.set("nodeGroupId", om.valueToTree(this.getNodeGroupId()));
                }
                if (this.getNodeGroupName() != null) {
                    data.set("nodeGroupName", om.valueToTree(this.getNodeGroupName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster2.ApplicationConfigsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ApplicationConfigsProperty.Jsii$Proxy that = (ApplicationConfigsProperty.Jsii$Proxy) o;

                if (!applicationName.equals(that.applicationName)) return false;
                if (this.configFileName != null ? !this.configFileName.equals(that.configFileName) : that.configFileName != null) return false;
                if (this.configItemKey != null ? !this.configItemKey.equals(that.configItemKey) : that.configItemKey != null) return false;
                if (this.configItemValue != null ? !this.configItemValue.equals(that.configItemValue) : that.configItemValue != null) return false;
                if (this.configScope != null ? !this.configScope.equals(that.configScope) : that.configScope != null) return false;
                if (this.nodeGroupId != null ? !this.nodeGroupId.equals(that.nodeGroupId) : that.nodeGroupId != null) return false;
                return this.nodeGroupName != null ? this.nodeGroupName.equals(that.nodeGroupName) : that.nodeGroupName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.applicationName.hashCode();
                result = 31 * result + (this.configFileName != null ? this.configFileName.hashCode() : 0);
                result = 31 * result + (this.configItemKey != null ? this.configItemKey.hashCode() : 0);
                result = 31 * result + (this.configItemValue != null ? this.configItemValue.hashCode() : 0);
                result = 31 * result + (this.configScope != null ? this.configScope.hashCode() : 0);
                result = 31 * result + (this.nodeGroupId != null ? this.nodeGroupId.hashCode() : 0);
                result = 31 * result + (this.nodeGroupName != null ? this.nodeGroupName.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster2.ApplicationsProperty")
    @software.amazon.jsii.Jsii.Proxy(ApplicationsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ApplicationsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getApplicationName();

        /**
         * @return a {@link Builder} of {@link ApplicationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ApplicationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ApplicationsProperty> {
            java.lang.Object applicationName;

            /**
             * Sets the value of {@link ApplicationsProperty#getApplicationName}
             * @param applicationName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder applicationName(java.lang.String applicationName) {
                this.applicationName = applicationName;
                return this;
            }

            /**
             * Sets the value of {@link ApplicationsProperty#getApplicationName}
             * @param applicationName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder applicationName(com.aliyun.ros.cdk.core.IResolvable applicationName) {
                this.applicationName = applicationName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ApplicationsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ApplicationsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ApplicationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApplicationsProperty {
            private final java.lang.Object applicationName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.applicationName = software.amazon.jsii.Kernel.get(this, "applicationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.applicationName = java.util.Objects.requireNonNull(builder.applicationName, "applicationName is required");
            }

            @Override
            public final java.lang.Object getApplicationName() {
                return this.applicationName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("applicationName", om.valueToTree(this.getApplicationName()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster2.ApplicationsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ApplicationsProperty.Jsii$Proxy that = (ApplicationsProperty.Jsii$Proxy) o;

                return this.applicationName.equals(that.applicationName);
            }

            @Override
            public final int hashCode() {
                int result = this.applicationName.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster2.BootstrapScriptsProperty")
    @software.amazon.jsii.Jsii.Proxy(BootstrapScriptsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface BootstrapScriptsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getNodeSelector();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getScriptName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getScriptPath();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExecutionFailStrategy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExecutionMoment() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScriptArgs() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link BootstrapScriptsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link BootstrapScriptsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<BootstrapScriptsProperty> {
            java.lang.Object nodeSelector;
            java.lang.Object scriptName;
            java.lang.Object scriptPath;
            java.lang.Object executionFailStrategy;
            java.lang.Object executionMoment;
            java.lang.Object priority;
            java.lang.Object scriptArgs;

            /**
             * Sets the value of {@link BootstrapScriptsProperty#getNodeSelector}
             * @param nodeSelector the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeSelector(com.aliyun.ros.cdk.core.IResolvable nodeSelector) {
                this.nodeSelector = nodeSelector;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapScriptsProperty#getNodeSelector}
             * @param nodeSelector the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeSelector(com.aliyun.ros.cdk.emr.RosCluster2.NodeSelectorProperty nodeSelector) {
                this.nodeSelector = nodeSelector;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapScriptsProperty#getScriptName}
             * @param scriptName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scriptName(java.lang.String scriptName) {
                this.scriptName = scriptName;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapScriptsProperty#getScriptName}
             * @param scriptName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scriptName(com.aliyun.ros.cdk.core.IResolvable scriptName) {
                this.scriptName = scriptName;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapScriptsProperty#getScriptPath}
             * @param scriptPath the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scriptPath(java.lang.String scriptPath) {
                this.scriptPath = scriptPath;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapScriptsProperty#getScriptPath}
             * @param scriptPath the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scriptPath(com.aliyun.ros.cdk.core.IResolvable scriptPath) {
                this.scriptPath = scriptPath;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapScriptsProperty#getExecutionFailStrategy}
             * @param executionFailStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder executionFailStrategy(java.lang.String executionFailStrategy) {
                this.executionFailStrategy = executionFailStrategy;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapScriptsProperty#getExecutionFailStrategy}
             * @param executionFailStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder executionFailStrategy(com.aliyun.ros.cdk.core.IResolvable executionFailStrategy) {
                this.executionFailStrategy = executionFailStrategy;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapScriptsProperty#getExecutionMoment}
             * @param executionMoment the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder executionMoment(java.lang.String executionMoment) {
                this.executionMoment = executionMoment;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapScriptsProperty#getExecutionMoment}
             * @param executionMoment the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder executionMoment(com.aliyun.ros.cdk.core.IResolvable executionMoment) {
                this.executionMoment = executionMoment;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapScriptsProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(java.lang.Number priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapScriptsProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapScriptsProperty#getScriptArgs}
             * @param scriptArgs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scriptArgs(java.lang.String scriptArgs) {
                this.scriptArgs = scriptArgs;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapScriptsProperty#getScriptArgs}
             * @param scriptArgs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scriptArgs(com.aliyun.ros.cdk.core.IResolvable scriptArgs) {
                this.scriptArgs = scriptArgs;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link BootstrapScriptsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public BootstrapScriptsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link BootstrapScriptsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BootstrapScriptsProperty {
            private final java.lang.Object nodeSelector;
            private final java.lang.Object scriptName;
            private final java.lang.Object scriptPath;
            private final java.lang.Object executionFailStrategy;
            private final java.lang.Object executionMoment;
            private final java.lang.Object priority;
            private final java.lang.Object scriptArgs;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.nodeSelector = software.amazon.jsii.Kernel.get(this, "nodeSelector", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scriptName = software.amazon.jsii.Kernel.get(this, "scriptName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scriptPath = software.amazon.jsii.Kernel.get(this, "scriptPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.executionFailStrategy = software.amazon.jsii.Kernel.get(this, "executionFailStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.executionMoment = software.amazon.jsii.Kernel.get(this, "executionMoment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scriptArgs = software.amazon.jsii.Kernel.get(this, "scriptArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.nodeSelector = java.util.Objects.requireNonNull(builder.nodeSelector, "nodeSelector is required");
                this.scriptName = java.util.Objects.requireNonNull(builder.scriptName, "scriptName is required");
                this.scriptPath = java.util.Objects.requireNonNull(builder.scriptPath, "scriptPath is required");
                this.executionFailStrategy = builder.executionFailStrategy;
                this.executionMoment = builder.executionMoment;
                this.priority = builder.priority;
                this.scriptArgs = builder.scriptArgs;
            }

            @Override
            public final java.lang.Object getNodeSelector() {
                return this.nodeSelector;
            }

            @Override
            public final java.lang.Object getScriptName() {
                return this.scriptName;
            }

            @Override
            public final java.lang.Object getScriptPath() {
                return this.scriptPath;
            }

            @Override
            public final java.lang.Object getExecutionFailStrategy() {
                return this.executionFailStrategy;
            }

            @Override
            public final java.lang.Object getExecutionMoment() {
                return this.executionMoment;
            }

            @Override
            public final java.lang.Object getPriority() {
                return this.priority;
            }

            @Override
            public final java.lang.Object getScriptArgs() {
                return this.scriptArgs;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("nodeSelector", om.valueToTree(this.getNodeSelector()));
                data.set("scriptName", om.valueToTree(this.getScriptName()));
                data.set("scriptPath", om.valueToTree(this.getScriptPath()));
                if (this.getExecutionFailStrategy() != null) {
                    data.set("executionFailStrategy", om.valueToTree(this.getExecutionFailStrategy()));
                }
                if (this.getExecutionMoment() != null) {
                    data.set("executionMoment", om.valueToTree(this.getExecutionMoment()));
                }
                if (this.getPriority() != null) {
                    data.set("priority", om.valueToTree(this.getPriority()));
                }
                if (this.getScriptArgs() != null) {
                    data.set("scriptArgs", om.valueToTree(this.getScriptArgs()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster2.BootstrapScriptsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                BootstrapScriptsProperty.Jsii$Proxy that = (BootstrapScriptsProperty.Jsii$Proxy) o;

                if (!nodeSelector.equals(that.nodeSelector)) return false;
                if (!scriptName.equals(that.scriptName)) return false;
                if (!scriptPath.equals(that.scriptPath)) return false;
                if (this.executionFailStrategy != null ? !this.executionFailStrategy.equals(that.executionFailStrategy) : that.executionFailStrategy != null) return false;
                if (this.executionMoment != null ? !this.executionMoment.equals(that.executionMoment) : that.executionMoment != null) return false;
                if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
                return this.scriptArgs != null ? this.scriptArgs.equals(that.scriptArgs) : that.scriptArgs == null;
            }

            @Override
            public final int hashCode() {
                int result = this.nodeSelector.hashCode();
                result = 31 * result + (this.scriptName.hashCode());
                result = 31 * result + (this.scriptPath.hashCode());
                result = 31 * result + (this.executionFailStrategy != null ? this.executionFailStrategy.hashCode() : 0);
                result = 31 * result + (this.executionMoment != null ? this.executionMoment.hashCode() : 0);
                result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
                result = 31 * result + (this.scriptArgs != null ? this.scriptArgs.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster2.CostOptimizedConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(CostOptimizedConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CostOptimizedConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getOnDemandBaseCapacity();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getOnDemandPercentageAboveBaseCapacity();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSpotInstancePools();

        /**
         * @return a {@link Builder} of {@link CostOptimizedConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CostOptimizedConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CostOptimizedConfigProperty> {
            java.lang.Object onDemandBaseCapacity;
            java.lang.Object onDemandPercentageAboveBaseCapacity;
            java.lang.Object spotInstancePools;

            /**
             * Sets the value of {@link CostOptimizedConfigProperty#getOnDemandBaseCapacity}
             * @param onDemandBaseCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onDemandBaseCapacity(java.lang.Number onDemandBaseCapacity) {
                this.onDemandBaseCapacity = onDemandBaseCapacity;
                return this;
            }

            /**
             * Sets the value of {@link CostOptimizedConfigProperty#getOnDemandBaseCapacity}
             * @param onDemandBaseCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onDemandBaseCapacity(com.aliyun.ros.cdk.core.IResolvable onDemandBaseCapacity) {
                this.onDemandBaseCapacity = onDemandBaseCapacity;
                return this;
            }

            /**
             * Sets the value of {@link CostOptimizedConfigProperty#getOnDemandPercentageAboveBaseCapacity}
             * @param onDemandPercentageAboveBaseCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onDemandPercentageAboveBaseCapacity(java.lang.Number onDemandPercentageAboveBaseCapacity) {
                this.onDemandPercentageAboveBaseCapacity = onDemandPercentageAboveBaseCapacity;
                return this;
            }

            /**
             * Sets the value of {@link CostOptimizedConfigProperty#getOnDemandPercentageAboveBaseCapacity}
             * @param onDemandPercentageAboveBaseCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onDemandPercentageAboveBaseCapacity(com.aliyun.ros.cdk.core.IResolvable onDemandPercentageAboveBaseCapacity) {
                this.onDemandPercentageAboveBaseCapacity = onDemandPercentageAboveBaseCapacity;
                return this;
            }

            /**
             * Sets the value of {@link CostOptimizedConfigProperty#getSpotInstancePools}
             * @param spotInstancePools the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotInstancePools(java.lang.Number spotInstancePools) {
                this.spotInstancePools = spotInstancePools;
                return this;
            }

            /**
             * Sets the value of {@link CostOptimizedConfigProperty#getSpotInstancePools}
             * @param spotInstancePools the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotInstancePools(com.aliyun.ros.cdk.core.IResolvable spotInstancePools) {
                this.spotInstancePools = spotInstancePools;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CostOptimizedConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CostOptimizedConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CostOptimizedConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CostOptimizedConfigProperty {
            private final java.lang.Object onDemandBaseCapacity;
            private final java.lang.Object onDemandPercentageAboveBaseCapacity;
            private final java.lang.Object spotInstancePools;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.onDemandBaseCapacity = software.amazon.jsii.Kernel.get(this, "onDemandBaseCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.onDemandPercentageAboveBaseCapacity = software.amazon.jsii.Kernel.get(this, "onDemandPercentageAboveBaseCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotInstancePools = software.amazon.jsii.Kernel.get(this, "spotInstancePools", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.onDemandBaseCapacity = java.util.Objects.requireNonNull(builder.onDemandBaseCapacity, "onDemandBaseCapacity is required");
                this.onDemandPercentageAboveBaseCapacity = java.util.Objects.requireNonNull(builder.onDemandPercentageAboveBaseCapacity, "onDemandPercentageAboveBaseCapacity is required");
                this.spotInstancePools = java.util.Objects.requireNonNull(builder.spotInstancePools, "spotInstancePools is required");
            }

            @Override
            public final java.lang.Object getOnDemandBaseCapacity() {
                return this.onDemandBaseCapacity;
            }

            @Override
            public final java.lang.Object getOnDemandPercentageAboveBaseCapacity() {
                return this.onDemandPercentageAboveBaseCapacity;
            }

            @Override
            public final java.lang.Object getSpotInstancePools() {
                return this.spotInstancePools;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("onDemandBaseCapacity", om.valueToTree(this.getOnDemandBaseCapacity()));
                data.set("onDemandPercentageAboveBaseCapacity", om.valueToTree(this.getOnDemandPercentageAboveBaseCapacity()));
                data.set("spotInstancePools", om.valueToTree(this.getSpotInstancePools()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster2.CostOptimizedConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CostOptimizedConfigProperty.Jsii$Proxy that = (CostOptimizedConfigProperty.Jsii$Proxy) o;

                if (!onDemandBaseCapacity.equals(that.onDemandBaseCapacity)) return false;
                if (!onDemandPercentageAboveBaseCapacity.equals(that.onDemandPercentageAboveBaseCapacity)) return false;
                return this.spotInstancePools.equals(that.spotInstancePools);
            }

            @Override
            public final int hashCode() {
                int result = this.onDemandBaseCapacity.hashCode();
                result = 31 * result + (this.onDemandPercentageAboveBaseCapacity.hashCode());
                result = 31 * result + (this.spotInstancePools.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster2.DataDisksProperty")
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPerformanceLevel() {
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
            java.lang.Object count;
            java.lang.Object performanceLevel;

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
             * Sets the value of {@link DataDisksProperty#getCount}
             * @param count the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder count(java.lang.Number count) {
                this.count = count;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getCount}
             * @param count the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder count(com.aliyun.ros.cdk.core.IResolvable count) {
                this.count = count;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(java.lang.String performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(com.aliyun.ros.cdk.core.IResolvable performanceLevel) {
                this.performanceLevel = performanceLevel;
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
            private final java.lang.Object count;
            private final java.lang.Object performanceLevel;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.count = software.amazon.jsii.Kernel.get(this, "count", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.performanceLevel = software.amazon.jsii.Kernel.get(this, "performanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.category = java.util.Objects.requireNonNull(builder.category, "category is required");
                this.size = java.util.Objects.requireNonNull(builder.size, "size is required");
                this.count = builder.count;
                this.performanceLevel = builder.performanceLevel;
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
            public final java.lang.Object getCount() {
                return this.count;
            }

            @Override
            public final java.lang.Object getPerformanceLevel() {
                return this.performanceLevel;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("category", om.valueToTree(this.getCategory()));
                data.set("size", om.valueToTree(this.getSize()));
                if (this.getCount() != null) {
                    data.set("count", om.valueToTree(this.getCount()));
                }
                if (this.getPerformanceLevel() != null) {
                    data.set("performanceLevel", om.valueToTree(this.getPerformanceLevel()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster2.DataDisksProperty"));
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
                if (this.count != null ? !this.count.equals(that.count) : that.count != null) return false;
                return this.performanceLevel != null ? this.performanceLevel.equals(that.performanceLevel) : that.performanceLevel == null;
            }

            @Override
            public final int hashCode() {
                int result = this.category.hashCode();
                result = 31 * result + (this.size.hashCode());
                result = 31 * result + (this.count != null ? this.count.hashCode() : 0);
                result = 31 * result + (this.performanceLevel != null ? this.performanceLevel.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster2.NodeAttributesProperty")
    @software.amazon.jsii.Jsii.Proxy(NodeAttributesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NodeAttributesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMasterRootPassword() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRamRole() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NodeAttributesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NodeAttributesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NodeAttributesProperty> {
            java.lang.Object securityGroupId;
            java.lang.Object vpcId;
            java.lang.Object zoneId;
            java.lang.Object keyPairName;
            java.lang.Object masterRootPassword;
            java.lang.Object ramRole;

            /**
             * Sets the value of {@link NodeAttributesProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(java.lang.String securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link NodeAttributesProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link NodeAttributesProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link NodeAttributesProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link NodeAttributesProperty#getZoneId}
             * @param zoneId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(java.lang.String zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link NodeAttributesProperty#getZoneId}
             * @param zoneId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link NodeAttributesProperty#getKeyPairName}
             * @param keyPairName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPairName(java.lang.String keyPairName) {
                this.keyPairName = keyPairName;
                return this;
            }

            /**
             * Sets the value of {@link NodeAttributesProperty#getKeyPairName}
             * @param keyPairName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
                this.keyPairName = keyPairName;
                return this;
            }

            /**
             * Sets the value of {@link NodeAttributesProperty#getMasterRootPassword}
             * @param masterRootPassword the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder masterRootPassword(java.lang.String masterRootPassword) {
                this.masterRootPassword = masterRootPassword;
                return this;
            }

            /**
             * Sets the value of {@link NodeAttributesProperty#getMasterRootPassword}
             * @param masterRootPassword the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder masterRootPassword(com.aliyun.ros.cdk.core.IResolvable masterRootPassword) {
                this.masterRootPassword = masterRootPassword;
                return this;
            }

            /**
             * Sets the value of {@link NodeAttributesProperty#getRamRole}
             * @param ramRole the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ramRole(java.lang.String ramRole) {
                this.ramRole = ramRole;
                return this;
            }

            /**
             * Sets the value of {@link NodeAttributesProperty#getRamRole}
             * @param ramRole the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ramRole(com.aliyun.ros.cdk.core.IResolvable ramRole) {
                this.ramRole = ramRole;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NodeAttributesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NodeAttributesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NodeAttributesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NodeAttributesProperty {
            private final java.lang.Object securityGroupId;
            private final java.lang.Object vpcId;
            private final java.lang.Object zoneId;
            private final java.lang.Object keyPairName;
            private final java.lang.Object masterRootPassword;
            private final java.lang.Object ramRole;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.masterRootPassword = software.amazon.jsii.Kernel.get(this, "masterRootPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ramRole = software.amazon.jsii.Kernel.get(this, "ramRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.securityGroupId = java.util.Objects.requireNonNull(builder.securityGroupId, "securityGroupId is required");
                this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
                this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
                this.keyPairName = builder.keyPairName;
                this.masterRootPassword = builder.masterRootPassword;
                this.ramRole = builder.ramRole;
            }

            @Override
            public final java.lang.Object getSecurityGroupId() {
                return this.securityGroupId;
            }

            @Override
            public final java.lang.Object getVpcId() {
                return this.vpcId;
            }

            @Override
            public final java.lang.Object getZoneId() {
                return this.zoneId;
            }

            @Override
            public final java.lang.Object getKeyPairName() {
                return this.keyPairName;
            }

            @Override
            public final java.lang.Object getMasterRootPassword() {
                return this.masterRootPassword;
            }

            @Override
            public final java.lang.Object getRamRole() {
                return this.ramRole;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
                data.set("vpcId", om.valueToTree(this.getVpcId()));
                data.set("zoneId", om.valueToTree(this.getZoneId()));
                if (this.getKeyPairName() != null) {
                    data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
                }
                if (this.getMasterRootPassword() != null) {
                    data.set("masterRootPassword", om.valueToTree(this.getMasterRootPassword()));
                }
                if (this.getRamRole() != null) {
                    data.set("ramRole", om.valueToTree(this.getRamRole()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster2.NodeAttributesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NodeAttributesProperty.Jsii$Proxy that = (NodeAttributesProperty.Jsii$Proxy) o;

                if (!securityGroupId.equals(that.securityGroupId)) return false;
                if (!vpcId.equals(that.vpcId)) return false;
                if (!zoneId.equals(that.zoneId)) return false;
                if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
                if (this.masterRootPassword != null ? !this.masterRootPassword.equals(that.masterRootPassword) : that.masterRootPassword != null) return false;
                return this.ramRole != null ? this.ramRole.equals(that.ramRole) : that.ramRole == null;
            }

            @Override
            public final int hashCode() {
                int result = this.securityGroupId.hashCode();
                result = 31 * result + (this.vpcId.hashCode());
                result = 31 * result + (this.zoneId.hashCode());
                result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
                result = 31 * result + (this.masterRootPassword != null ? this.masterRootPassword.hashCode() : 0);
                result = 31 * result + (this.ramRole != null ? this.ramRole.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster2.NodeGroupsProperty")
    @software.amazon.jsii.Jsii.Proxy(NodeGroupsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NodeGroupsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getInstanceTypes();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getNodeGroupType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAdditionalSecurityGroupIds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCostOptimizedConfig() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getDeploymentSetStrategy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGracefulShutdown() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNodeCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNodeGroupName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNodeResizeStrategy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpotBidPrices() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpotInstanceRemedy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDisk() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWithPublicIp() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NodeGroupsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NodeGroupsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NodeGroupsProperty> {
            java.lang.Object instanceTypes;
            java.lang.Object nodeGroupType;
            java.lang.Object additionalSecurityGroupIds;
            java.lang.Object costOptimizedConfig;
            java.lang.Object dataDisks;
            java.lang.Object deploymentSetStrategy;
            java.lang.Object gracefulShutdown;
            java.lang.Object nodeCount;
            java.lang.Object nodeGroupName;
            java.lang.Object nodeResizeStrategy;
            java.lang.Object spotBidPrices;
            java.lang.Object spotInstanceRemedy;
            java.lang.Object spotStrategy;
            java.lang.Object systemDisk;
            java.lang.Object vSwitchIds;
            java.lang.Object withPublicIp;

            /**
             * Sets the value of {@link NodeGroupsProperty#getInstanceTypes}
             * @param instanceTypes the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceTypes(com.aliyun.ros.cdk.core.IResolvable instanceTypes) {
                this.instanceTypes = instanceTypes;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getInstanceTypes}
             * @param instanceTypes the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceTypes(java.util.List<? extends java.lang.Object> instanceTypes) {
                this.instanceTypes = instanceTypes;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getNodeGroupType}
             * @param nodeGroupType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeGroupType(java.lang.String nodeGroupType) {
                this.nodeGroupType = nodeGroupType;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getNodeGroupType}
             * @param nodeGroupType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeGroupType(com.aliyun.ros.cdk.core.IResolvable nodeGroupType) {
                this.nodeGroupType = nodeGroupType;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getAdditionalSecurityGroupIds}
             * @param additionalSecurityGroupIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder additionalSecurityGroupIds(com.aliyun.ros.cdk.core.IResolvable additionalSecurityGroupIds) {
                this.additionalSecurityGroupIds = additionalSecurityGroupIds;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getAdditionalSecurityGroupIds}
             * @param additionalSecurityGroupIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder additionalSecurityGroupIds(java.util.List<? extends java.lang.Object> additionalSecurityGroupIds) {
                this.additionalSecurityGroupIds = additionalSecurityGroupIds;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getCostOptimizedConfig}
             * @param costOptimizedConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder costOptimizedConfig(com.aliyun.ros.cdk.core.IResolvable costOptimizedConfig) {
                this.costOptimizedConfig = costOptimizedConfig;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getCostOptimizedConfig}
             * @param costOptimizedConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder costOptimizedConfig(com.aliyun.ros.cdk.emr.RosCluster2.CostOptimizedConfigProperty costOptimizedConfig) {
                this.costOptimizedConfig = costOptimizedConfig;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getDataDisks}
             * @param dataDisks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisks(com.aliyun.ros.cdk.core.IResolvable dataDisks) {
                this.dataDisks = dataDisks;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getDataDisks}
             * @param dataDisks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisks(java.util.List<? extends java.lang.Object> dataDisks) {
                this.dataDisks = dataDisks;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getDeploymentSetStrategy}
             * @param deploymentSetStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deploymentSetStrategy(java.lang.String deploymentSetStrategy) {
                this.deploymentSetStrategy = deploymentSetStrategy;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getDeploymentSetStrategy}
             * @param deploymentSetStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deploymentSetStrategy(com.aliyun.ros.cdk.core.IResolvable deploymentSetStrategy) {
                this.deploymentSetStrategy = deploymentSetStrategy;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getGracefulShutdown}
             * @param gracefulShutdown the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gracefulShutdown(java.lang.Boolean gracefulShutdown) {
                this.gracefulShutdown = gracefulShutdown;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getGracefulShutdown}
             * @param gracefulShutdown the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gracefulShutdown(com.aliyun.ros.cdk.core.IResolvable gracefulShutdown) {
                this.gracefulShutdown = gracefulShutdown;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getNodeCount}
             * @param nodeCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeCount(java.lang.Number nodeCount) {
                this.nodeCount = nodeCount;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getNodeCount}
             * @param nodeCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeCount(com.aliyun.ros.cdk.core.IResolvable nodeCount) {
                this.nodeCount = nodeCount;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getNodeGroupName}
             * @param nodeGroupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeGroupName(java.lang.String nodeGroupName) {
                this.nodeGroupName = nodeGroupName;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getNodeGroupName}
             * @param nodeGroupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeGroupName(com.aliyun.ros.cdk.core.IResolvable nodeGroupName) {
                this.nodeGroupName = nodeGroupName;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getNodeResizeStrategy}
             * @param nodeResizeStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeResizeStrategy(java.lang.String nodeResizeStrategy) {
                this.nodeResizeStrategy = nodeResizeStrategy;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getNodeResizeStrategy}
             * @param nodeResizeStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeResizeStrategy(com.aliyun.ros.cdk.core.IResolvable nodeResizeStrategy) {
                this.nodeResizeStrategy = nodeResizeStrategy;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getSpotBidPrices}
             * @param spotBidPrices the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotBidPrices(com.aliyun.ros.cdk.core.IResolvable spotBidPrices) {
                this.spotBidPrices = spotBidPrices;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getSpotBidPrices}
             * @param spotBidPrices the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotBidPrices(java.util.List<? extends java.lang.Object> spotBidPrices) {
                this.spotBidPrices = spotBidPrices;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getSpotInstanceRemedy}
             * @param spotInstanceRemedy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotInstanceRemedy(java.lang.Boolean spotInstanceRemedy) {
                this.spotInstanceRemedy = spotInstanceRemedy;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getSpotInstanceRemedy}
             * @param spotInstanceRemedy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotInstanceRemedy(com.aliyun.ros.cdk.core.IResolvable spotInstanceRemedy) {
                this.spotInstanceRemedy = spotInstanceRemedy;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getSpotStrategy}
             * @param spotStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotStrategy(java.lang.String spotStrategy) {
                this.spotStrategy = spotStrategy;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getSpotStrategy}
             * @param spotStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
                this.spotStrategy = spotStrategy;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getSystemDisk}
             * @param systemDisk the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDisk(com.aliyun.ros.cdk.core.IResolvable systemDisk) {
                this.systemDisk = systemDisk;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getSystemDisk}
             * @param systemDisk the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDisk(com.aliyun.ros.cdk.emr.RosCluster2.SystemDiskProperty systemDisk) {
                this.systemDisk = systemDisk;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getWithPublicIp}
             * @param withPublicIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder withPublicIp(java.lang.Boolean withPublicIp) {
                this.withPublicIp = withPublicIp;
                return this;
            }

            /**
             * Sets the value of {@link NodeGroupsProperty#getWithPublicIp}
             * @param withPublicIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder withPublicIp(com.aliyun.ros.cdk.core.IResolvable withPublicIp) {
                this.withPublicIp = withPublicIp;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NodeGroupsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NodeGroupsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NodeGroupsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NodeGroupsProperty {
            private final java.lang.Object instanceTypes;
            private final java.lang.Object nodeGroupType;
            private final java.lang.Object additionalSecurityGroupIds;
            private final java.lang.Object costOptimizedConfig;
            private final java.lang.Object dataDisks;
            private final java.lang.Object deploymentSetStrategy;
            private final java.lang.Object gracefulShutdown;
            private final java.lang.Object nodeCount;
            private final java.lang.Object nodeGroupName;
            private final java.lang.Object nodeResizeStrategy;
            private final java.lang.Object spotBidPrices;
            private final java.lang.Object spotInstanceRemedy;
            private final java.lang.Object spotStrategy;
            private final java.lang.Object systemDisk;
            private final java.lang.Object vSwitchIds;
            private final java.lang.Object withPublicIp;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.instanceTypes = software.amazon.jsii.Kernel.get(this, "instanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodeGroupType = software.amazon.jsii.Kernel.get(this, "nodeGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.additionalSecurityGroupIds = software.amazon.jsii.Kernel.get(this, "additionalSecurityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.costOptimizedConfig = software.amazon.jsii.Kernel.get(this, "costOptimizedConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dataDisks = software.amazon.jsii.Kernel.get(this, "dataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.deploymentSetStrategy = software.amazon.jsii.Kernel.get(this, "deploymentSetStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gracefulShutdown = software.amazon.jsii.Kernel.get(this, "gracefulShutdown", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodeCount = software.amazon.jsii.Kernel.get(this, "nodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodeGroupName = software.amazon.jsii.Kernel.get(this, "nodeGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodeResizeStrategy = software.amazon.jsii.Kernel.get(this, "nodeResizeStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotBidPrices = software.amazon.jsii.Kernel.get(this, "spotBidPrices", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotInstanceRemedy = software.amazon.jsii.Kernel.get(this, "spotInstanceRemedy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDisk = software.amazon.jsii.Kernel.get(this, "systemDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.withPublicIp = software.amazon.jsii.Kernel.get(this, "withPublicIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.instanceTypes = java.util.Objects.requireNonNull(builder.instanceTypes, "instanceTypes is required");
                this.nodeGroupType = java.util.Objects.requireNonNull(builder.nodeGroupType, "nodeGroupType is required");
                this.additionalSecurityGroupIds = builder.additionalSecurityGroupIds;
                this.costOptimizedConfig = builder.costOptimizedConfig;
                this.dataDisks = builder.dataDisks;
                this.deploymentSetStrategy = builder.deploymentSetStrategy;
                this.gracefulShutdown = builder.gracefulShutdown;
                this.nodeCount = builder.nodeCount;
                this.nodeGroupName = builder.nodeGroupName;
                this.nodeResizeStrategy = builder.nodeResizeStrategy;
                this.spotBidPrices = builder.spotBidPrices;
                this.spotInstanceRemedy = builder.spotInstanceRemedy;
                this.spotStrategy = builder.spotStrategy;
                this.systemDisk = builder.systemDisk;
                this.vSwitchIds = builder.vSwitchIds;
                this.withPublicIp = builder.withPublicIp;
            }

            @Override
            public final java.lang.Object getInstanceTypes() {
                return this.instanceTypes;
            }

            @Override
            public final java.lang.Object getNodeGroupType() {
                return this.nodeGroupType;
            }

            @Override
            public final java.lang.Object getAdditionalSecurityGroupIds() {
                return this.additionalSecurityGroupIds;
            }

            @Override
            public final java.lang.Object getCostOptimizedConfig() {
                return this.costOptimizedConfig;
            }

            @Override
            public final java.lang.Object getDataDisks() {
                return this.dataDisks;
            }

            @Override
            public final java.lang.Object getDeploymentSetStrategy() {
                return this.deploymentSetStrategy;
            }

            @Override
            public final java.lang.Object getGracefulShutdown() {
                return this.gracefulShutdown;
            }

            @Override
            public final java.lang.Object getNodeCount() {
                return this.nodeCount;
            }

            @Override
            public final java.lang.Object getNodeGroupName() {
                return this.nodeGroupName;
            }

            @Override
            public final java.lang.Object getNodeResizeStrategy() {
                return this.nodeResizeStrategy;
            }

            @Override
            public final java.lang.Object getSpotBidPrices() {
                return this.spotBidPrices;
            }

            @Override
            public final java.lang.Object getSpotInstanceRemedy() {
                return this.spotInstanceRemedy;
            }

            @Override
            public final java.lang.Object getSpotStrategy() {
                return this.spotStrategy;
            }

            @Override
            public final java.lang.Object getSystemDisk() {
                return this.systemDisk;
            }

            @Override
            public final java.lang.Object getVSwitchIds() {
                return this.vSwitchIds;
            }

            @Override
            public final java.lang.Object getWithPublicIp() {
                return this.withPublicIp;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("instanceTypes", om.valueToTree(this.getInstanceTypes()));
                data.set("nodeGroupType", om.valueToTree(this.getNodeGroupType()));
                if (this.getAdditionalSecurityGroupIds() != null) {
                    data.set("additionalSecurityGroupIds", om.valueToTree(this.getAdditionalSecurityGroupIds()));
                }
                if (this.getCostOptimizedConfig() != null) {
                    data.set("costOptimizedConfig", om.valueToTree(this.getCostOptimizedConfig()));
                }
                if (this.getDataDisks() != null) {
                    data.set("dataDisks", om.valueToTree(this.getDataDisks()));
                }
                if (this.getDeploymentSetStrategy() != null) {
                    data.set("deploymentSetStrategy", om.valueToTree(this.getDeploymentSetStrategy()));
                }
                if (this.getGracefulShutdown() != null) {
                    data.set("gracefulShutdown", om.valueToTree(this.getGracefulShutdown()));
                }
                if (this.getNodeCount() != null) {
                    data.set("nodeCount", om.valueToTree(this.getNodeCount()));
                }
                if (this.getNodeGroupName() != null) {
                    data.set("nodeGroupName", om.valueToTree(this.getNodeGroupName()));
                }
                if (this.getNodeResizeStrategy() != null) {
                    data.set("nodeResizeStrategy", om.valueToTree(this.getNodeResizeStrategy()));
                }
                if (this.getSpotBidPrices() != null) {
                    data.set("spotBidPrices", om.valueToTree(this.getSpotBidPrices()));
                }
                if (this.getSpotInstanceRemedy() != null) {
                    data.set("spotInstanceRemedy", om.valueToTree(this.getSpotInstanceRemedy()));
                }
                if (this.getSpotStrategy() != null) {
                    data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
                }
                if (this.getSystemDisk() != null) {
                    data.set("systemDisk", om.valueToTree(this.getSystemDisk()));
                }
                if (this.getVSwitchIds() != null) {
                    data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
                }
                if (this.getWithPublicIp() != null) {
                    data.set("withPublicIp", om.valueToTree(this.getWithPublicIp()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster2.NodeGroupsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NodeGroupsProperty.Jsii$Proxy that = (NodeGroupsProperty.Jsii$Proxy) o;

                if (!instanceTypes.equals(that.instanceTypes)) return false;
                if (!nodeGroupType.equals(that.nodeGroupType)) return false;
                if (this.additionalSecurityGroupIds != null ? !this.additionalSecurityGroupIds.equals(that.additionalSecurityGroupIds) : that.additionalSecurityGroupIds != null) return false;
                if (this.costOptimizedConfig != null ? !this.costOptimizedConfig.equals(that.costOptimizedConfig) : that.costOptimizedConfig != null) return false;
                if (this.dataDisks != null ? !this.dataDisks.equals(that.dataDisks) : that.dataDisks != null) return false;
                if (this.deploymentSetStrategy != null ? !this.deploymentSetStrategy.equals(that.deploymentSetStrategy) : that.deploymentSetStrategy != null) return false;
                if (this.gracefulShutdown != null ? !this.gracefulShutdown.equals(that.gracefulShutdown) : that.gracefulShutdown != null) return false;
                if (this.nodeCount != null ? !this.nodeCount.equals(that.nodeCount) : that.nodeCount != null) return false;
                if (this.nodeGroupName != null ? !this.nodeGroupName.equals(that.nodeGroupName) : that.nodeGroupName != null) return false;
                if (this.nodeResizeStrategy != null ? !this.nodeResizeStrategy.equals(that.nodeResizeStrategy) : that.nodeResizeStrategy != null) return false;
                if (this.spotBidPrices != null ? !this.spotBidPrices.equals(that.spotBidPrices) : that.spotBidPrices != null) return false;
                if (this.spotInstanceRemedy != null ? !this.spotInstanceRemedy.equals(that.spotInstanceRemedy) : that.spotInstanceRemedy != null) return false;
                if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
                if (this.systemDisk != null ? !this.systemDisk.equals(that.systemDisk) : that.systemDisk != null) return false;
                if (this.vSwitchIds != null ? !this.vSwitchIds.equals(that.vSwitchIds) : that.vSwitchIds != null) return false;
                return this.withPublicIp != null ? this.withPublicIp.equals(that.withPublicIp) : that.withPublicIp == null;
            }

            @Override
            public final int hashCode() {
                int result = this.instanceTypes.hashCode();
                result = 31 * result + (this.nodeGroupType.hashCode());
                result = 31 * result + (this.additionalSecurityGroupIds != null ? this.additionalSecurityGroupIds.hashCode() : 0);
                result = 31 * result + (this.costOptimizedConfig != null ? this.costOptimizedConfig.hashCode() : 0);
                result = 31 * result + (this.dataDisks != null ? this.dataDisks.hashCode() : 0);
                result = 31 * result + (this.deploymentSetStrategy != null ? this.deploymentSetStrategy.hashCode() : 0);
                result = 31 * result + (this.gracefulShutdown != null ? this.gracefulShutdown.hashCode() : 0);
                result = 31 * result + (this.nodeCount != null ? this.nodeCount.hashCode() : 0);
                result = 31 * result + (this.nodeGroupName != null ? this.nodeGroupName.hashCode() : 0);
                result = 31 * result + (this.nodeResizeStrategy != null ? this.nodeResizeStrategy.hashCode() : 0);
                result = 31 * result + (this.spotBidPrices != null ? this.spotBidPrices.hashCode() : 0);
                result = 31 * result + (this.spotInstanceRemedy != null ? this.spotInstanceRemedy.hashCode() : 0);
                result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
                result = 31 * result + (this.systemDisk != null ? this.systemDisk.hashCode() : 0);
                result = 31 * result + (this.vSwitchIds != null ? this.vSwitchIds.hashCode() : 0);
                result = 31 * result + (this.withPublicIp != null ? this.withPublicIp.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster2.NodeSelectorProperty")
    @software.amazon.jsii.Jsii.Proxy(NodeSelectorProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NodeSelectorProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getNodeSelectType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNodeGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNodeGroupName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNodeGroupTypes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNodeNames() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NodeSelectorProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NodeSelectorProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NodeSelectorProperty> {
            java.lang.Object nodeSelectType;
            java.lang.Object nodeGroupId;
            java.lang.Object nodeGroupName;
            java.lang.Object nodeGroupTypes;
            java.lang.Object nodeNames;

            /**
             * Sets the value of {@link NodeSelectorProperty#getNodeSelectType}
             * @param nodeSelectType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeSelectType(java.lang.String nodeSelectType) {
                this.nodeSelectType = nodeSelectType;
                return this;
            }

            /**
             * Sets the value of {@link NodeSelectorProperty#getNodeSelectType}
             * @param nodeSelectType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeSelectType(com.aliyun.ros.cdk.core.IResolvable nodeSelectType) {
                this.nodeSelectType = nodeSelectType;
                return this;
            }

            /**
             * Sets the value of {@link NodeSelectorProperty#getNodeGroupId}
             * @param nodeGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeGroupId(java.lang.String nodeGroupId) {
                this.nodeGroupId = nodeGroupId;
                return this;
            }

            /**
             * Sets the value of {@link NodeSelectorProperty#getNodeGroupId}
             * @param nodeGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeGroupId(com.aliyun.ros.cdk.core.IResolvable nodeGroupId) {
                this.nodeGroupId = nodeGroupId;
                return this;
            }

            /**
             * Sets the value of {@link NodeSelectorProperty#getNodeGroupName}
             * @param nodeGroupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeGroupName(java.lang.String nodeGroupName) {
                this.nodeGroupName = nodeGroupName;
                return this;
            }

            /**
             * Sets the value of {@link NodeSelectorProperty#getNodeGroupName}
             * @param nodeGroupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeGroupName(com.aliyun.ros.cdk.core.IResolvable nodeGroupName) {
                this.nodeGroupName = nodeGroupName;
                return this;
            }

            /**
             * Sets the value of {@link NodeSelectorProperty#getNodeGroupTypes}
             * @param nodeGroupTypes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeGroupTypes(com.aliyun.ros.cdk.core.IResolvable nodeGroupTypes) {
                this.nodeGroupTypes = nodeGroupTypes;
                return this;
            }

            /**
             * Sets the value of {@link NodeSelectorProperty#getNodeGroupTypes}
             * @param nodeGroupTypes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeGroupTypes(java.util.List<? extends java.lang.Object> nodeGroupTypes) {
                this.nodeGroupTypes = nodeGroupTypes;
                return this;
            }

            /**
             * Sets the value of {@link NodeSelectorProperty#getNodeNames}
             * @param nodeNames the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeNames(com.aliyun.ros.cdk.core.IResolvable nodeNames) {
                this.nodeNames = nodeNames;
                return this;
            }

            /**
             * Sets the value of {@link NodeSelectorProperty#getNodeNames}
             * @param nodeNames the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeNames(java.util.List<? extends java.lang.Object> nodeNames) {
                this.nodeNames = nodeNames;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NodeSelectorProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NodeSelectorProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NodeSelectorProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NodeSelectorProperty {
            private final java.lang.Object nodeSelectType;
            private final java.lang.Object nodeGroupId;
            private final java.lang.Object nodeGroupName;
            private final java.lang.Object nodeGroupTypes;
            private final java.lang.Object nodeNames;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.nodeSelectType = software.amazon.jsii.Kernel.get(this, "nodeSelectType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodeGroupId = software.amazon.jsii.Kernel.get(this, "nodeGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodeGroupName = software.amazon.jsii.Kernel.get(this, "nodeGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodeGroupTypes = software.amazon.jsii.Kernel.get(this, "nodeGroupTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodeNames = software.amazon.jsii.Kernel.get(this, "nodeNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.nodeSelectType = java.util.Objects.requireNonNull(builder.nodeSelectType, "nodeSelectType is required");
                this.nodeGroupId = builder.nodeGroupId;
                this.nodeGroupName = builder.nodeGroupName;
                this.nodeGroupTypes = builder.nodeGroupTypes;
                this.nodeNames = builder.nodeNames;
            }

            @Override
            public final java.lang.Object getNodeSelectType() {
                return this.nodeSelectType;
            }

            @Override
            public final java.lang.Object getNodeGroupId() {
                return this.nodeGroupId;
            }

            @Override
            public final java.lang.Object getNodeGroupName() {
                return this.nodeGroupName;
            }

            @Override
            public final java.lang.Object getNodeGroupTypes() {
                return this.nodeGroupTypes;
            }

            @Override
            public final java.lang.Object getNodeNames() {
                return this.nodeNames;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("nodeSelectType", om.valueToTree(this.getNodeSelectType()));
                if (this.getNodeGroupId() != null) {
                    data.set("nodeGroupId", om.valueToTree(this.getNodeGroupId()));
                }
                if (this.getNodeGroupName() != null) {
                    data.set("nodeGroupName", om.valueToTree(this.getNodeGroupName()));
                }
                if (this.getNodeGroupTypes() != null) {
                    data.set("nodeGroupTypes", om.valueToTree(this.getNodeGroupTypes()));
                }
                if (this.getNodeNames() != null) {
                    data.set("nodeNames", om.valueToTree(this.getNodeNames()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster2.NodeSelectorProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NodeSelectorProperty.Jsii$Proxy that = (NodeSelectorProperty.Jsii$Proxy) o;

                if (!nodeSelectType.equals(that.nodeSelectType)) return false;
                if (this.nodeGroupId != null ? !this.nodeGroupId.equals(that.nodeGroupId) : that.nodeGroupId != null) return false;
                if (this.nodeGroupName != null ? !this.nodeGroupName.equals(that.nodeGroupName) : that.nodeGroupName != null) return false;
                if (this.nodeGroupTypes != null ? !this.nodeGroupTypes.equals(that.nodeGroupTypes) : that.nodeGroupTypes != null) return false;
                return this.nodeNames != null ? this.nodeNames.equals(that.nodeNames) : that.nodeNames == null;
            }

            @Override
            public final int hashCode() {
                int result = this.nodeSelectType.hashCode();
                result = 31 * result + (this.nodeGroupId != null ? this.nodeGroupId.hashCode() : 0);
                result = 31 * result + (this.nodeGroupName != null ? this.nodeGroupName.hashCode() : 0);
                result = 31 * result + (this.nodeGroupTypes != null ? this.nodeGroupTypes.hashCode() : 0);
                result = 31 * result + (this.nodeNames != null ? this.nodeNames.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster2.SpotBidPricesProperty")
    @software.amazon.jsii.Jsii.Proxy(SpotBidPricesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SpotBidPricesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBidPrice() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SpotBidPricesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SpotBidPricesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SpotBidPricesProperty> {
            java.lang.Object bidPrice;
            java.lang.Object instanceType;

            /**
             * Sets the value of {@link SpotBidPricesProperty#getBidPrice}
             * @param bidPrice the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bidPrice(java.lang.Number bidPrice) {
                this.bidPrice = bidPrice;
                return this;
            }

            /**
             * Sets the value of {@link SpotBidPricesProperty#getBidPrice}
             * @param bidPrice the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bidPrice(com.aliyun.ros.cdk.core.IResolvable bidPrice) {
                this.bidPrice = bidPrice;
                return this;
            }

            /**
             * Sets the value of {@link SpotBidPricesProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link SpotBidPricesProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SpotBidPricesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SpotBidPricesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SpotBidPricesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SpotBidPricesProperty {
            private final java.lang.Object bidPrice;
            private final java.lang.Object instanceType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.bidPrice = software.amazon.jsii.Kernel.get(this, "bidPrice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.bidPrice = builder.bidPrice;
                this.instanceType = builder.instanceType;
            }

            @Override
            public final java.lang.Object getBidPrice() {
                return this.bidPrice;
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBidPrice() != null) {
                    data.set("bidPrice", om.valueToTree(this.getBidPrice()));
                }
                if (this.getInstanceType() != null) {
                    data.set("instanceType", om.valueToTree(this.getInstanceType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster2.SpotBidPricesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SpotBidPricesProperty.Jsii$Proxy that = (SpotBidPricesProperty.Jsii$Proxy) o;

                if (this.bidPrice != null ? !this.bidPrice.equals(that.bidPrice) : that.bidPrice != null) return false;
                return this.instanceType != null ? this.instanceType.equals(that.instanceType) : that.instanceType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.bidPrice != null ? this.bidPrice.hashCode() : 0;
                result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster2.SubscriptionConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(SubscriptionConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SubscriptionConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewDuration() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewDurationUnit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentDuration() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentDurationUnit() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SubscriptionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SubscriptionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SubscriptionConfigProperty> {
            java.lang.Object autoRenew;
            java.lang.Object autoRenewDuration;
            java.lang.Object autoRenewDurationUnit;
            java.lang.Object paymentDuration;
            java.lang.Object paymentDurationUnit;

            /**
             * Sets the value of {@link SubscriptionConfigProperty#getAutoRenew}
             * @param autoRenew the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenew(java.lang.Boolean autoRenew) {
                this.autoRenew = autoRenew;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionConfigProperty#getAutoRenew}
             * @param autoRenew the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
                this.autoRenew = autoRenew;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionConfigProperty#getAutoRenewDuration}
             * @param autoRenewDuration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenewDuration(java.lang.Number autoRenewDuration) {
                this.autoRenewDuration = autoRenewDuration;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionConfigProperty#getAutoRenewDuration}
             * @param autoRenewDuration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenewDuration(com.aliyun.ros.cdk.core.IResolvable autoRenewDuration) {
                this.autoRenewDuration = autoRenewDuration;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionConfigProperty#getAutoRenewDurationUnit}
             * @param autoRenewDurationUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenewDurationUnit(java.lang.String autoRenewDurationUnit) {
                this.autoRenewDurationUnit = autoRenewDurationUnit;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionConfigProperty#getAutoRenewDurationUnit}
             * @param autoRenewDurationUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenewDurationUnit(com.aliyun.ros.cdk.core.IResolvable autoRenewDurationUnit) {
                this.autoRenewDurationUnit = autoRenewDurationUnit;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionConfigProperty#getPaymentDuration}
             * @param paymentDuration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder paymentDuration(java.lang.Number paymentDuration) {
                this.paymentDuration = paymentDuration;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionConfigProperty#getPaymentDuration}
             * @param paymentDuration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder paymentDuration(com.aliyun.ros.cdk.core.IResolvable paymentDuration) {
                this.paymentDuration = paymentDuration;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionConfigProperty#getPaymentDurationUnit}
             * @param paymentDurationUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder paymentDurationUnit(java.lang.String paymentDurationUnit) {
                this.paymentDurationUnit = paymentDurationUnit;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionConfigProperty#getPaymentDurationUnit}
             * @param paymentDurationUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder paymentDurationUnit(com.aliyun.ros.cdk.core.IResolvable paymentDurationUnit) {
                this.paymentDurationUnit = paymentDurationUnit;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SubscriptionConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SubscriptionConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SubscriptionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SubscriptionConfigProperty {
            private final java.lang.Object autoRenew;
            private final java.lang.Object autoRenewDuration;
            private final java.lang.Object autoRenewDurationUnit;
            private final java.lang.Object paymentDuration;
            private final java.lang.Object paymentDurationUnit;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.autoRenewDuration = software.amazon.jsii.Kernel.get(this, "autoRenewDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.autoRenewDurationUnit = software.amazon.jsii.Kernel.get(this, "autoRenewDurationUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.paymentDuration = software.amazon.jsii.Kernel.get(this, "paymentDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.paymentDurationUnit = software.amazon.jsii.Kernel.get(this, "paymentDurationUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.autoRenew = builder.autoRenew;
                this.autoRenewDuration = builder.autoRenewDuration;
                this.autoRenewDurationUnit = builder.autoRenewDurationUnit;
                this.paymentDuration = builder.paymentDuration;
                this.paymentDurationUnit = builder.paymentDurationUnit;
            }

            @Override
            public final java.lang.Object getAutoRenew() {
                return this.autoRenew;
            }

            @Override
            public final java.lang.Object getAutoRenewDuration() {
                return this.autoRenewDuration;
            }

            @Override
            public final java.lang.Object getAutoRenewDurationUnit() {
                return this.autoRenewDurationUnit;
            }

            @Override
            public final java.lang.Object getPaymentDuration() {
                return this.paymentDuration;
            }

            @Override
            public final java.lang.Object getPaymentDurationUnit() {
                return this.paymentDurationUnit;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAutoRenew() != null) {
                    data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
                }
                if (this.getAutoRenewDuration() != null) {
                    data.set("autoRenewDuration", om.valueToTree(this.getAutoRenewDuration()));
                }
                if (this.getAutoRenewDurationUnit() != null) {
                    data.set("autoRenewDurationUnit", om.valueToTree(this.getAutoRenewDurationUnit()));
                }
                if (this.getPaymentDuration() != null) {
                    data.set("paymentDuration", om.valueToTree(this.getPaymentDuration()));
                }
                if (this.getPaymentDurationUnit() != null) {
                    data.set("paymentDurationUnit", om.valueToTree(this.getPaymentDurationUnit()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster2.SubscriptionConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SubscriptionConfigProperty.Jsii$Proxy that = (SubscriptionConfigProperty.Jsii$Proxy) o;

                if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
                if (this.autoRenewDuration != null ? !this.autoRenewDuration.equals(that.autoRenewDuration) : that.autoRenewDuration != null) return false;
                if (this.autoRenewDurationUnit != null ? !this.autoRenewDurationUnit.equals(that.autoRenewDurationUnit) : that.autoRenewDurationUnit != null) return false;
                if (this.paymentDuration != null ? !this.paymentDuration.equals(that.paymentDuration) : that.paymentDuration != null) return false;
                return this.paymentDurationUnit != null ? this.paymentDurationUnit.equals(that.paymentDurationUnit) : that.paymentDurationUnit == null;
            }

            @Override
            public final int hashCode() {
                int result = this.autoRenew != null ? this.autoRenew.hashCode() : 0;
                result = 31 * result + (this.autoRenewDuration != null ? this.autoRenewDuration.hashCode() : 0);
                result = 31 * result + (this.autoRenewDurationUnit != null ? this.autoRenewDurationUnit.hashCode() : 0);
                result = 31 * result + (this.paymentDuration != null ? this.paymentDuration.hashCode() : 0);
                result = 31 * result + (this.paymentDurationUnit != null ? this.paymentDurationUnit.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster2.SystemDiskProperty")
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPerformanceLevel() {
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
            java.lang.Object count;
            java.lang.Object performanceLevel;

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
             * Sets the value of {@link SystemDiskProperty#getCount}
             * @param count the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder count(java.lang.Number count) {
                this.count = count;
                return this;
            }

            /**
             * Sets the value of {@link SystemDiskProperty#getCount}
             * @param count the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder count(com.aliyun.ros.cdk.core.IResolvable count) {
                this.count = count;
                return this;
            }

            /**
             * Sets the value of {@link SystemDiskProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(java.lang.String performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link SystemDiskProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(com.aliyun.ros.cdk.core.IResolvable performanceLevel) {
                this.performanceLevel = performanceLevel;
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
            private final java.lang.Object count;
            private final java.lang.Object performanceLevel;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.count = software.amazon.jsii.Kernel.get(this, "count", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.performanceLevel = software.amazon.jsii.Kernel.get(this, "performanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.category = java.util.Objects.requireNonNull(builder.category, "category is required");
                this.size = java.util.Objects.requireNonNull(builder.size, "size is required");
                this.count = builder.count;
                this.performanceLevel = builder.performanceLevel;
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
            public final java.lang.Object getCount() {
                return this.count;
            }

            @Override
            public final java.lang.Object getPerformanceLevel() {
                return this.performanceLevel;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("category", om.valueToTree(this.getCategory()));
                data.set("size", om.valueToTree(this.getSize()));
                if (this.getCount() != null) {
                    data.set("count", om.valueToTree(this.getCount()));
                }
                if (this.getPerformanceLevel() != null) {
                    data.set("performanceLevel", om.valueToTree(this.getPerformanceLevel()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster2.SystemDiskProperty"));
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
                if (this.count != null ? !this.count.equals(that.count) : that.count != null) return false;
                return this.performanceLevel != null ? this.performanceLevel.equals(that.performanceLevel) : that.performanceLevel == null;
            }

            @Override
            public final int hashCode() {
                int result = this.category.hashCode();
                result = 31 * result + (this.size.hashCode());
                result = 31 * result + (this.count != null ? this.count.hashCode() : 0);
                result = 31 * result + (this.performanceLevel != null ? this.performanceLevel.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster2.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster2.TagsProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.RosCluster2}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.RosCluster2> {
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
        private final com.aliyun.ros.cdk.emr.RosCluster2Props.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.emr.RosCluster2Props.Builder();
        }

        /**
         * @return {@code this}
         * @param applications This parameter is required.
         */
        public Builder applications(final com.aliyun.ros.cdk.core.IResolvable applications) {
            this.props.applications(applications);
            return this;
        }
        /**
         * @return {@code this}
         * @param applications This parameter is required.
         */
        public Builder applications(final java.util.List<? extends java.lang.Object> applications) {
            this.props.applications(applications);
            return this;
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
         * @param clusterType This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterType This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * @return {@code this}
         * @param nodeAttributes This parameter is required.
         */
        public Builder nodeAttributes(final com.aliyun.ros.cdk.core.IResolvable nodeAttributes) {
            this.props.nodeAttributes(nodeAttributes);
            return this;
        }
        /**
         * @return {@code this}
         * @param nodeAttributes This parameter is required.
         */
        public Builder nodeAttributes(final com.aliyun.ros.cdk.emr.RosCluster2.NodeAttributesProperty nodeAttributes) {
            this.props.nodeAttributes(nodeAttributes);
            return this;
        }

        /**
         * @return {@code this}
         * @param nodeGroups This parameter is required.
         */
        public Builder nodeGroups(final com.aliyun.ros.cdk.core.IResolvable nodeGroups) {
            this.props.nodeGroups(nodeGroups);
            return this;
        }
        /**
         * @return {@code this}
         * @param nodeGroups This parameter is required.
         */
        public Builder nodeGroups(final java.util.List<? extends java.lang.Object> nodeGroups) {
            this.props.nodeGroups(nodeGroups);
            return this;
        }

        /**
         * @return {@code this}
         * @param releaseVersion This parameter is required.
         */
        public Builder releaseVersion(final java.lang.String releaseVersion) {
            this.props.releaseVersion(releaseVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param releaseVersion This parameter is required.
         */
        public Builder releaseVersion(final com.aliyun.ros.cdk.core.IResolvable releaseVersion) {
            this.props.releaseVersion(releaseVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param applicationConfigs This parameter is required.
         */
        public Builder applicationConfigs(final com.aliyun.ros.cdk.core.IResolvable applicationConfigs) {
            this.props.applicationConfigs(applicationConfigs);
            return this;
        }
        /**
         * @return {@code this}
         * @param applicationConfigs This parameter is required.
         */
        public Builder applicationConfigs(final java.util.List<? extends java.lang.Object> applicationConfigs) {
            this.props.applicationConfigs(applicationConfigs);
            return this;
        }

        /**
         * @return {@code this}
         * @param bootstrapScripts This parameter is required.
         */
        public Builder bootstrapScripts(final com.aliyun.ros.cdk.core.IResolvable bootstrapScripts) {
            this.props.bootstrapScripts(bootstrapScripts);
            return this;
        }
        /**
         * @return {@code this}
         * @param bootstrapScripts This parameter is required.
         */
        public Builder bootstrapScripts(final java.util.List<? extends java.lang.Object> bootstrapScripts) {
            this.props.bootstrapScripts(bootstrapScripts);
            return this;
        }

        /**
         * @return {@code this}
         * @param deployMode This parameter is required.
         */
        public Builder deployMode(final java.lang.String deployMode) {
            this.props.deployMode(deployMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param deployMode This parameter is required.
         */
        public Builder deployMode(final com.aliyun.ros.cdk.core.IResolvable deployMode) {
            this.props.deployMode(deployMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * @return {@code this}
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
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
         * @param securityMode This parameter is required.
         */
        public Builder securityMode(final java.lang.String securityMode) {
            this.props.securityMode(securityMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityMode This parameter is required.
         */
        public Builder securityMode(final com.aliyun.ros.cdk.core.IResolvable securityMode) {
            this.props.securityMode(securityMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param subscriptionConfig This parameter is required.
         */
        public Builder subscriptionConfig(final com.aliyun.ros.cdk.core.IResolvable subscriptionConfig) {
            this.props.subscriptionConfig(subscriptionConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param subscriptionConfig This parameter is required.
         */
        public Builder subscriptionConfig(final com.aliyun.ros.cdk.emr.RosCluster2.SubscriptionConfigProperty subscriptionConfig) {
            this.props.subscriptionConfig(subscriptionConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.emr.RosCluster2.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.emr.RosCluster2}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.RosCluster2 build() {
            return new com.aliyun.ros.cdk.emr.RosCluster2(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
