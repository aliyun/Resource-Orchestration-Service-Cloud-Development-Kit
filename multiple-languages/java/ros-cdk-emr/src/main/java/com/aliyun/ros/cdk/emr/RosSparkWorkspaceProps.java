package com.aliyun.ros.cdk.emr;

/**
 * Properties for defining a <code>RosSparkWorkspace</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-sparkworkspace
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T08:59:08.339Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosSparkWorkspaceProps")
@software.amazon.jsii.Jsii.Proxy(RosSparkWorkspaceProps.Jsii$Proxy.class)
public interface RosSparkWorkspaceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOssBucket();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPaymentType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRamRoleName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceSpec();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoStartSessionCluster() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDlfCatalogId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDlfType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGpuSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGpuSubscription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpWhiteList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentDurationUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReleaseType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSubscription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.emr.RosSparkWorkspace.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSparkWorkspaceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSparkWorkspaceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSparkWorkspaceProps> {
        java.lang.Object ossBucket;
        java.lang.Object paymentType;
        java.lang.Object ramRoleName;
        java.lang.Object resourceSpec;
        java.lang.Object workspaceName;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewPeriod;
        java.lang.Object autoRenewPeriodUnit;
        java.lang.Object autoStartSessionCluster;
        java.lang.Object dlfCatalogId;
        java.lang.Object dlfType;
        java.lang.Object duration;
        java.lang.Object gpuSpec;
        java.lang.Object gpuSubscription;
        java.lang.Object ipWhiteList;
        java.lang.Object paymentDurationUnit;
        java.lang.Object releaseType;
        java.lang.Object resourceGroupId;
        java.lang.Object subscription;
        java.util.List<com.aliyun.ros.cdk.emr.RosSparkWorkspace.TagsProperty> tags;

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getOssBucket}
         * @param ossBucket the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ossBucket(java.lang.String ossBucket) {
            this.ossBucket = ossBucket;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getOssBucket}
         * @param ossBucket the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ossBucket(com.aliyun.ros.cdk.core.IResolvable ossBucket) {
            this.ossBucket = ossBucket;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getPaymentType}
         * @param paymentType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getPaymentType}
         * @param paymentType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getRamRoleName}
         * @param ramRoleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getRamRoleName}
         * @param ramRoleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getResourceSpec}
         * @param resourceSpec the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceSpec(com.aliyun.ros.cdk.core.IResolvable resourceSpec) {
            this.resourceSpec = resourceSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getResourceSpec}
         * @param resourceSpec the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceSpec(com.aliyun.ros.cdk.emr.RosSparkWorkspace.ResourceSpecProperty resourceSpec) {
            this.resourceSpec = resourceSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getWorkspaceName}
         * @param workspaceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceName(java.lang.String workspaceName) {
            this.workspaceName = workspaceName;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getWorkspaceName}
         * @param workspaceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceName(com.aliyun.ros.cdk.core.IResolvable workspaceName) {
            this.workspaceName = workspaceName;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.String autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getAutoRenewPeriodUnit}
         * @param autoRenewPeriodUnit the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriodUnit(java.lang.String autoRenewPeriodUnit) {
            this.autoRenewPeriodUnit = autoRenewPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getAutoRenewPeriodUnit}
         * @param autoRenewPeriodUnit the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriodUnit(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriodUnit) {
            this.autoRenewPeriodUnit = autoRenewPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getAutoStartSessionCluster}
         * @param autoStartSessionCluster the value to be set.
         * @return {@code this}
         */
        public Builder autoStartSessionCluster(java.lang.Boolean autoStartSessionCluster) {
            this.autoStartSessionCluster = autoStartSessionCluster;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getAutoStartSessionCluster}
         * @param autoStartSessionCluster the value to be set.
         * @return {@code this}
         */
        public Builder autoStartSessionCluster(com.aliyun.ros.cdk.core.IResolvable autoStartSessionCluster) {
            this.autoStartSessionCluster = autoStartSessionCluster;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getDlfCatalogId}
         * @param dlfCatalogId the value to be set.
         * @return {@code this}
         */
        public Builder dlfCatalogId(java.lang.String dlfCatalogId) {
            this.dlfCatalogId = dlfCatalogId;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getDlfCatalogId}
         * @param dlfCatalogId the value to be set.
         * @return {@code this}
         */
        public Builder dlfCatalogId(com.aliyun.ros.cdk.core.IResolvable dlfCatalogId) {
            this.dlfCatalogId = dlfCatalogId;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getDlfType}
         * @param dlfType the value to be set.
         * @return {@code this}
         */
        public Builder dlfType(java.lang.String dlfType) {
            this.dlfType = dlfType;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getDlfType}
         * @param dlfType the value to be set.
         * @return {@code this}
         */
        public Builder dlfType(com.aliyun.ros.cdk.core.IResolvable dlfType) {
            this.dlfType = dlfType;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getDuration}
         * @param duration the value to be set.
         * @return {@code this}
         */
        public Builder duration(java.lang.String duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getDuration}
         * @param duration the value to be set.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getGpuSpec}
         * @param gpuSpec the value to be set.
         * @return {@code this}
         */
        public Builder gpuSpec(com.aliyun.ros.cdk.core.IResolvable gpuSpec) {
            this.gpuSpec = gpuSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getGpuSpec}
         * @param gpuSpec the value to be set.
         * @return {@code this}
         */
        public Builder gpuSpec(java.util.List<? extends java.lang.Object> gpuSpec) {
            this.gpuSpec = gpuSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getGpuSubscription}
         * @param gpuSubscription the value to be set.
         * @return {@code this}
         */
        public Builder gpuSubscription(com.aliyun.ros.cdk.core.IResolvable gpuSubscription) {
            this.gpuSubscription = gpuSubscription;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getGpuSubscription}
         * @param gpuSubscription the value to be set.
         * @return {@code this}
         */
        public Builder gpuSubscription(com.aliyun.ros.cdk.emr.RosSparkWorkspace.GpuSubscriptionProperty gpuSubscription) {
            this.gpuSubscription = gpuSubscription;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getIpWhiteList}
         * @param ipWhiteList the value to be set.
         * @return {@code this}
         */
        public Builder ipWhiteList(com.aliyun.ros.cdk.core.IResolvable ipWhiteList) {
            this.ipWhiteList = ipWhiteList;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getIpWhiteList}
         * @param ipWhiteList the value to be set.
         * @return {@code this}
         */
        public Builder ipWhiteList(java.util.List<? extends java.lang.Object> ipWhiteList) {
            this.ipWhiteList = ipWhiteList;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getPaymentDurationUnit}
         * @param paymentDurationUnit the value to be set.
         * @return {@code this}
         */
        public Builder paymentDurationUnit(java.lang.String paymentDurationUnit) {
            this.paymentDurationUnit = paymentDurationUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getPaymentDurationUnit}
         * @param paymentDurationUnit the value to be set.
         * @return {@code this}
         */
        public Builder paymentDurationUnit(com.aliyun.ros.cdk.core.IResolvable paymentDurationUnit) {
            this.paymentDurationUnit = paymentDurationUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getReleaseType}
         * @param releaseType the value to be set.
         * @return {@code this}
         */
        public Builder releaseType(java.lang.String releaseType) {
            this.releaseType = releaseType;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getReleaseType}
         * @param releaseType the value to be set.
         * @return {@code this}
         */
        public Builder releaseType(com.aliyun.ros.cdk.core.IResolvable releaseType) {
            this.releaseType = releaseType;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getSubscription}
         * @param subscription the value to be set.
         * @return {@code this}
         */
        public Builder subscription(com.aliyun.ros.cdk.core.IResolvable subscription) {
            this.subscription = subscription;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getSubscription}
         * @param subscription the value to be set.
         * @return {@code this}
         */
        public Builder subscription(com.aliyun.ros.cdk.emr.RosSparkWorkspace.SubscriptionProperty subscription) {
            this.subscription = subscription;
            return this;
        }

        /**
         * Sets the value of {@link RosSparkWorkspaceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.emr.RosSparkWorkspace.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.emr.RosSparkWorkspace.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSparkWorkspaceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSparkWorkspaceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSparkWorkspaceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSparkWorkspaceProps {
        private final java.lang.Object ossBucket;
        private final java.lang.Object paymentType;
        private final java.lang.Object ramRoleName;
        private final java.lang.Object resourceSpec;
        private final java.lang.Object workspaceName;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object autoRenewPeriodUnit;
        private final java.lang.Object autoStartSessionCluster;
        private final java.lang.Object dlfCatalogId;
        private final java.lang.Object dlfType;
        private final java.lang.Object duration;
        private final java.lang.Object gpuSpec;
        private final java.lang.Object gpuSubscription;
        private final java.lang.Object ipWhiteList;
        private final java.lang.Object paymentDurationUnit;
        private final java.lang.Object releaseType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object subscription;
        private final java.util.List<com.aliyun.ros.cdk.emr.RosSparkWorkspace.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ossBucket = software.amazon.jsii.Kernel.get(this, "ossBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceSpec = software.amazon.jsii.Kernel.get(this, "resourceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceName = software.amazon.jsii.Kernel.get(this, "workspaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriodUnit = software.amazon.jsii.Kernel.get(this, "autoRenewPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoStartSessionCluster = software.amazon.jsii.Kernel.get(this, "autoStartSessionCluster", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dlfCatalogId = software.amazon.jsii.Kernel.get(this, "dlfCatalogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dlfType = software.amazon.jsii.Kernel.get(this, "dlfType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gpuSpec = software.amazon.jsii.Kernel.get(this, "gpuSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gpuSubscription = software.amazon.jsii.Kernel.get(this, "gpuSubscription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipWhiteList = software.amazon.jsii.Kernel.get(this, "ipWhiteList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentDurationUnit = software.amazon.jsii.Kernel.get(this, "paymentDurationUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.releaseType = software.amazon.jsii.Kernel.get(this, "releaseType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.subscription = software.amazon.jsii.Kernel.get(this, "subscription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.RosSparkWorkspace.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ossBucket = java.util.Objects.requireNonNull(builder.ossBucket, "ossBucket is required");
            this.paymentType = java.util.Objects.requireNonNull(builder.paymentType, "paymentType is required");
            this.ramRoleName = java.util.Objects.requireNonNull(builder.ramRoleName, "ramRoleName is required");
            this.resourceSpec = java.util.Objects.requireNonNull(builder.resourceSpec, "resourceSpec is required");
            this.workspaceName = java.util.Objects.requireNonNull(builder.workspaceName, "workspaceName is required");
            this.autoRenew = builder.autoRenew;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.autoRenewPeriodUnit = builder.autoRenewPeriodUnit;
            this.autoStartSessionCluster = builder.autoStartSessionCluster;
            this.dlfCatalogId = builder.dlfCatalogId;
            this.dlfType = builder.dlfType;
            this.duration = builder.duration;
            this.gpuSpec = builder.gpuSpec;
            this.gpuSubscription = builder.gpuSubscription;
            this.ipWhiteList = builder.ipWhiteList;
            this.paymentDurationUnit = builder.paymentDurationUnit;
            this.releaseType = builder.releaseType;
            this.resourceGroupId = builder.resourceGroupId;
            this.subscription = builder.subscription;
            this.tags = (java.util.List<com.aliyun.ros.cdk.emr.RosSparkWorkspace.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getOssBucket() {
            return this.ossBucket;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
        }

        @Override
        public final java.lang.Object getRamRoleName() {
            return this.ramRoleName;
        }

        @Override
        public final java.lang.Object getResourceSpec() {
            return this.resourceSpec;
        }

        @Override
        public final java.lang.Object getWorkspaceName() {
            return this.workspaceName;
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
        public final java.lang.Object getAutoRenewPeriodUnit() {
            return this.autoRenewPeriodUnit;
        }

        @Override
        public final java.lang.Object getAutoStartSessionCluster() {
            return this.autoStartSessionCluster;
        }

        @Override
        public final java.lang.Object getDlfCatalogId() {
            return this.dlfCatalogId;
        }

        @Override
        public final java.lang.Object getDlfType() {
            return this.dlfType;
        }

        @Override
        public final java.lang.Object getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Object getGpuSpec() {
            return this.gpuSpec;
        }

        @Override
        public final java.lang.Object getGpuSubscription() {
            return this.gpuSubscription;
        }

        @Override
        public final java.lang.Object getIpWhiteList() {
            return this.ipWhiteList;
        }

        @Override
        public final java.lang.Object getPaymentDurationUnit() {
            return this.paymentDurationUnit;
        }

        @Override
        public final java.lang.Object getReleaseType() {
            return this.releaseType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSubscription() {
            return this.subscription;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.emr.RosSparkWorkspace.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ossBucket", om.valueToTree(this.getOssBucket()));
            data.set("paymentType", om.valueToTree(this.getPaymentType()));
            data.set("ramRoleName", om.valueToTree(this.getRamRoleName()));
            data.set("resourceSpec", om.valueToTree(this.getResourceSpec()));
            data.set("workspaceName", om.valueToTree(this.getWorkspaceName()));
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getAutoRenewPeriodUnit() != null) {
                data.set("autoRenewPeriodUnit", om.valueToTree(this.getAutoRenewPeriodUnit()));
            }
            if (this.getAutoStartSessionCluster() != null) {
                data.set("autoStartSessionCluster", om.valueToTree(this.getAutoStartSessionCluster()));
            }
            if (this.getDlfCatalogId() != null) {
                data.set("dlfCatalogId", om.valueToTree(this.getDlfCatalogId()));
            }
            if (this.getDlfType() != null) {
                data.set("dlfType", om.valueToTree(this.getDlfType()));
            }
            if (this.getDuration() != null) {
                data.set("duration", om.valueToTree(this.getDuration()));
            }
            if (this.getGpuSpec() != null) {
                data.set("gpuSpec", om.valueToTree(this.getGpuSpec()));
            }
            if (this.getGpuSubscription() != null) {
                data.set("gpuSubscription", om.valueToTree(this.getGpuSubscription()));
            }
            if (this.getIpWhiteList() != null) {
                data.set("ipWhiteList", om.valueToTree(this.getIpWhiteList()));
            }
            if (this.getPaymentDurationUnit() != null) {
                data.set("paymentDurationUnit", om.valueToTree(this.getPaymentDurationUnit()));
            }
            if (this.getReleaseType() != null) {
                data.set("releaseType", om.valueToTree(this.getReleaseType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSubscription() != null) {
                data.set("subscription", om.valueToTree(this.getSubscription()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosSparkWorkspaceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSparkWorkspaceProps.Jsii$Proxy that = (RosSparkWorkspaceProps.Jsii$Proxy) o;

            if (!ossBucket.equals(that.ossBucket)) return false;
            if (!paymentType.equals(that.paymentType)) return false;
            if (!ramRoleName.equals(that.ramRoleName)) return false;
            if (!resourceSpec.equals(that.resourceSpec)) return false;
            if (!workspaceName.equals(that.workspaceName)) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.autoRenewPeriodUnit != null ? !this.autoRenewPeriodUnit.equals(that.autoRenewPeriodUnit) : that.autoRenewPeriodUnit != null) return false;
            if (this.autoStartSessionCluster != null ? !this.autoStartSessionCluster.equals(that.autoStartSessionCluster) : that.autoStartSessionCluster != null) return false;
            if (this.dlfCatalogId != null ? !this.dlfCatalogId.equals(that.dlfCatalogId) : that.dlfCatalogId != null) return false;
            if (this.dlfType != null ? !this.dlfType.equals(that.dlfType) : that.dlfType != null) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.gpuSpec != null ? !this.gpuSpec.equals(that.gpuSpec) : that.gpuSpec != null) return false;
            if (this.gpuSubscription != null ? !this.gpuSubscription.equals(that.gpuSubscription) : that.gpuSubscription != null) return false;
            if (this.ipWhiteList != null ? !this.ipWhiteList.equals(that.ipWhiteList) : that.ipWhiteList != null) return false;
            if (this.paymentDurationUnit != null ? !this.paymentDurationUnit.equals(that.paymentDurationUnit) : that.paymentDurationUnit != null) return false;
            if (this.releaseType != null ? !this.releaseType.equals(that.releaseType) : that.releaseType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.subscription != null ? !this.subscription.equals(that.subscription) : that.subscription != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ossBucket.hashCode();
            result = 31 * result + (this.paymentType.hashCode());
            result = 31 * result + (this.ramRoleName.hashCode());
            result = 31 * result + (this.resourceSpec.hashCode());
            result = 31 * result + (this.workspaceName.hashCode());
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriodUnit != null ? this.autoRenewPeriodUnit.hashCode() : 0);
            result = 31 * result + (this.autoStartSessionCluster != null ? this.autoStartSessionCluster.hashCode() : 0);
            result = 31 * result + (this.dlfCatalogId != null ? this.dlfCatalogId.hashCode() : 0);
            result = 31 * result + (this.dlfType != null ? this.dlfType.hashCode() : 0);
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.gpuSpec != null ? this.gpuSpec.hashCode() : 0);
            result = 31 * result + (this.gpuSubscription != null ? this.gpuSubscription.hashCode() : 0);
            result = 31 * result + (this.ipWhiteList != null ? this.ipWhiteList.hashCode() : 0);
            result = 31 * result + (this.paymentDurationUnit != null ? this.paymentDurationUnit.hashCode() : 0);
            result = 31 * result + (this.releaseType != null ? this.releaseType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.subscription != null ? this.subscription.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
