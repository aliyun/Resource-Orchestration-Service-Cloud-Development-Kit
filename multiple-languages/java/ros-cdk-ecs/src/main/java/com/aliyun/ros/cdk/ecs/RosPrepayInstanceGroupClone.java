package com.aliyun.ros.cdk.ecs;

/**
 * A ROS template type:  `ALIYUN::ECS::PrepayInstanceGroupClone`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:02.781Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone")
public class RosPrepayInstanceGroupClone extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPrepayInstanceGroupClone(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPrepayInstanceGroupClone(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ECS::PrepayInstanceGroupClone`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPrepayInstanceGroupClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupCloneProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostNames() {
        return software.amazon.jsii.Kernel.get(this, "attrHostNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIps() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIps() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIps() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRelatedOrderIds() {
        return software.amazon.jsii.Kernel.get(this, "attrRelatedOrderIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneIds() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TagManager getTags() {
        return software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TagManager.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Number getMaxAmount() {
        return software.amazon.jsii.Kernel.get(this, "maxAmount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setMaxAmount(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxAmount", java.util.Objects.requireNonNull(value, "maxAmount is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Number getMinAmount() {
        return software.amazon.jsii.Kernel.get(this, "minAmount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setMinAmount(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "minAmount", java.util.Objects.requireNonNull(value, "minAmount is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Number getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", java.util.Objects.requireNonNull(value, "period is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getPeriodType() {
        return software.amazon.jsii.Kernel.get(this, "periodType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPeriodType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodType", java.util.Objects.requireNonNull(value, "periodType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getSourceInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "sourceInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSourceInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceInstanceId", java.util.Objects.requireNonNull(value, "sourceInstanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getAutoRenewPeriod() {
        return software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setAutoRenewPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "autoRenewPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDeploymentSetId() {
        return software.amazon.jsii.Kernel.get(this, "deploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDeploymentSetId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deploymentSetId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDiskMappings() {
        return software.amazon.jsii.Kernel.get(this, "diskMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDiskMappings(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "diskMappings", value);
    }

    /**
     */
    public void setDiskMappings(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "diskMappings", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEniMappings() {
        return software.amazon.jsii.Kernel.get(this, "eniMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEniMappings(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eniMappings", value);
    }

    /**
     */
    public void setEniMappings(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "eniMappings", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getHpcClusterId() {
        return software.amazon.jsii.Kernel.get(this, "hpcClusterId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setHpcClusterId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hpcClusterId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getImageId() {
        return software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setImageId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "imageId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getInternetMaxBandwidthIn() {
        return software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setInternetMaxBandwidthIn(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "internetMaxBandwidthIn", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getInternetMaxBandwidthOut() {
        return software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setInternetMaxBandwidthOut(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "internetMaxBandwidthOut", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getKeyPairName() {
        return software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setKeyPairName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "keyPairName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getLaunchTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setLaunchTemplateId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getLaunchTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "launchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setLaunchTemplateName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getLaunchTemplateVersion() {
        return software.amazon.jsii.Kernel.get(this, "launchTemplateVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setLaunchTemplateVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPassword() {
        return software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "password", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPasswordInherit() {
        return software.amazon.jsii.Kernel.get(this, "passwordInherit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPasswordInherit(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "passwordInherit", value);
    }

    /**
     */
    public void setPasswordInherit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "passwordInherit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getRamRoleName() {
        return software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRamRoleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ramRoleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIds() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupIds", value);
    }

    /**
     */
    public void setSecurityGroupIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSystemDiskAutoSnapshotPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskAutoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSystemDiskAutoSnapshotPolicyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskAutoSnapshotPolicyId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSystemDiskCategory() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSystemDiskCategory(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskCategory", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSystemDiskDescription() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSystemDiskDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSystemDiskDiskName() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskDiskName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSystemDiskDiskName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskDiskName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone.DiskMappingsProperty")
    @software.amazon.jsii.Jsii.Proxy(DiskMappingsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DiskMappingsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getSize();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getAutoSnapshotPolicyId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getCategory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDevice() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDiskName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getEncrypted() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getKmsKeyId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getPerformanceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getSnapshotId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DiskMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DiskMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DiskMappingsProperty> {
            private java.lang.String size;
            private java.lang.String autoSnapshotPolicyId;
            private java.lang.String category;
            private java.lang.String description;
            private java.lang.String device;
            private java.lang.String diskName;
            private java.lang.String encrypted;
            private java.lang.String kmsKeyId;
            private java.lang.String performanceLevel;
            private java.lang.String snapshotId;

            /**
             * Sets the value of {@link DiskMappingsProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(java.lang.String size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getAutoSnapshotPolicyId}
             * @param autoSnapshotPolicyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoSnapshotPolicyId(java.lang.String autoSnapshotPolicyId) {
                this.autoSnapshotPolicyId = autoSnapshotPolicyId;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getCategory}
             * @param category the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(java.lang.String category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getDevice}
             * @param device the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder device(java.lang.String device) {
                this.device = device;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getDiskName}
             * @param diskName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskName(java.lang.String diskName) {
                this.diskName = diskName;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getEncrypted}
             * @param encrypted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encrypted(java.lang.String encrypted) {
                this.encrypted = encrypted;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getKmsKeyId}
             * @param kmsKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder kmsKeyId(java.lang.String kmsKeyId) {
                this.kmsKeyId = kmsKeyId;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(java.lang.String performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getSnapshotId}
             * @param snapshotId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder snapshotId(java.lang.String snapshotId) {
                this.snapshotId = snapshotId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DiskMappingsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DiskMappingsProperty build() {
                return new Jsii$Proxy(size, autoSnapshotPolicyId, category, description, device, diskName, encrypted, kmsKeyId, performanceLevel, snapshotId);
            }
        }

        /**
         * An implementation for {@link DiskMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DiskMappingsProperty {
            private final java.lang.String size;
            private final java.lang.String autoSnapshotPolicyId;
            private final java.lang.String category;
            private final java.lang.String description;
            private final java.lang.String device;
            private final java.lang.String diskName;
            private final java.lang.String encrypted;
            private final java.lang.String kmsKeyId;
            private final java.lang.String performanceLevel;
            private final java.lang.String snapshotId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.autoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "autoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.device = software.amazon.jsii.Kernel.get(this, "device", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.diskName = software.amazon.jsii.Kernel.get(this, "diskName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.performanceLevel = software.amazon.jsii.Kernel.get(this, "performanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String size, final java.lang.String autoSnapshotPolicyId, final java.lang.String category, final java.lang.String description, final java.lang.String device, final java.lang.String diskName, final java.lang.String encrypted, final java.lang.String kmsKeyId, final java.lang.String performanceLevel, final java.lang.String snapshotId) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.size = java.util.Objects.requireNonNull(size, "size is required");
                this.autoSnapshotPolicyId = autoSnapshotPolicyId;
                this.category = category;
                this.description = description;
                this.device = device;
                this.diskName = diskName;
                this.encrypted = encrypted;
                this.kmsKeyId = kmsKeyId;
                this.performanceLevel = performanceLevel;
                this.snapshotId = snapshotId;
            }

            @Override
            public final java.lang.String getSize() {
                return this.size;
            }

            @Override
            public final java.lang.String getAutoSnapshotPolicyId() {
                return this.autoSnapshotPolicyId;
            }

            @Override
            public final java.lang.String getCategory() {
                return this.category;
            }

            @Override
            public final java.lang.String getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.String getDevice() {
                return this.device;
            }

            @Override
            public final java.lang.String getDiskName() {
                return this.diskName;
            }

            @Override
            public final java.lang.String getEncrypted() {
                return this.encrypted;
            }

            @Override
            public final java.lang.String getKmsKeyId() {
                return this.kmsKeyId;
            }

            @Override
            public final java.lang.String getPerformanceLevel() {
                return this.performanceLevel;
            }

            @Override
            public final java.lang.String getSnapshotId() {
                return this.snapshotId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("size", om.valueToTree(this.getSize()));
                if (this.getAutoSnapshotPolicyId() != null) {
                    data.set("autoSnapshotPolicyId", om.valueToTree(this.getAutoSnapshotPolicyId()));
                }
                if (this.getCategory() != null) {
                    data.set("category", om.valueToTree(this.getCategory()));
                }
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }
                if (this.getDevice() != null) {
                    data.set("device", om.valueToTree(this.getDevice()));
                }
                if (this.getDiskName() != null) {
                    data.set("diskName", om.valueToTree(this.getDiskName()));
                }
                if (this.getEncrypted() != null) {
                    data.set("encrypted", om.valueToTree(this.getEncrypted()));
                }
                if (this.getKmsKeyId() != null) {
                    data.set("kmsKeyId", om.valueToTree(this.getKmsKeyId()));
                }
                if (this.getPerformanceLevel() != null) {
                    data.set("performanceLevel", om.valueToTree(this.getPerformanceLevel()));
                }
                if (this.getSnapshotId() != null) {
                    data.set("snapshotId", om.valueToTree(this.getSnapshotId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone.DiskMappingsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DiskMappingsProperty.Jsii$Proxy that = (DiskMappingsProperty.Jsii$Proxy) o;

                if (!size.equals(that.size)) return false;
                if (this.autoSnapshotPolicyId != null ? !this.autoSnapshotPolicyId.equals(that.autoSnapshotPolicyId) : that.autoSnapshotPolicyId != null) return false;
                if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                if (this.device != null ? !this.device.equals(that.device) : that.device != null) return false;
                if (this.diskName != null ? !this.diskName.equals(that.diskName) : that.diskName != null) return false;
                if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
                if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
                if (this.performanceLevel != null ? !this.performanceLevel.equals(that.performanceLevel) : that.performanceLevel != null) return false;
                return this.snapshotId != null ? this.snapshotId.equals(that.snapshotId) : that.snapshotId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.size.hashCode();
                result = 31 * result + (this.autoSnapshotPolicyId != null ? this.autoSnapshotPolicyId.hashCode() : 0);
                result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.device != null ? this.device.hashCode() : 0);
                result = 31 * result + (this.diskName != null ? this.diskName.hashCode() : 0);
                result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
                result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
                result = 31 * result + (this.performanceLevel != null ? this.performanceLevel.hashCode() : 0);
                result = 31 * result + (this.snapshotId != null ? this.snapshotId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone.EniMappingsProperty")
    @software.amazon.jsii.Jsii.Proxy(EniMappingsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EniMappingsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getSecurityGroupId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getVSwitchId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getNetworkInterfaceName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getPrimaryIpAddress() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EniMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EniMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EniMappingsProperty> {
            private java.lang.String securityGroupId;
            private java.lang.String vSwitchId;
            private java.lang.String description;
            private java.lang.String networkInterfaceName;
            private java.lang.String primaryIpAddress;

            /**
             * Sets the value of {@link EniMappingsProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(java.lang.String securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getNetworkInterfaceName}
             * @param networkInterfaceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkInterfaceName(java.lang.String networkInterfaceName) {
                this.networkInterfaceName = networkInterfaceName;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getPrimaryIpAddress}
             * @param primaryIpAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder primaryIpAddress(java.lang.String primaryIpAddress) {
                this.primaryIpAddress = primaryIpAddress;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EniMappingsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EniMappingsProperty build() {
                return new Jsii$Proxy(securityGroupId, vSwitchId, description, networkInterfaceName, primaryIpAddress);
            }
        }

        /**
         * An implementation for {@link EniMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EniMappingsProperty {
            private final java.lang.String securityGroupId;
            private final java.lang.String vSwitchId;
            private final java.lang.String description;
            private final java.lang.String networkInterfaceName;
            private final java.lang.String primaryIpAddress;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.networkInterfaceName = software.amazon.jsii.Kernel.get(this, "networkInterfaceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.primaryIpAddress = software.amazon.jsii.Kernel.get(this, "primaryIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String securityGroupId, final java.lang.String vSwitchId, final java.lang.String description, final java.lang.String networkInterfaceName, final java.lang.String primaryIpAddress) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.securityGroupId = java.util.Objects.requireNonNull(securityGroupId, "securityGroupId is required");
                this.vSwitchId = java.util.Objects.requireNonNull(vSwitchId, "vSwitchId is required");
                this.description = description;
                this.networkInterfaceName = networkInterfaceName;
                this.primaryIpAddress = primaryIpAddress;
            }

            @Override
            public final java.lang.String getSecurityGroupId() {
                return this.securityGroupId;
            }

            @Override
            public final java.lang.String getVSwitchId() {
                return this.vSwitchId;
            }

            @Override
            public final java.lang.String getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.String getNetworkInterfaceName() {
                return this.networkInterfaceName;
            }

            @Override
            public final java.lang.String getPrimaryIpAddress() {
                return this.primaryIpAddress;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }
                if (this.getNetworkInterfaceName() != null) {
                    data.set("networkInterfaceName", om.valueToTree(this.getNetworkInterfaceName()));
                }
                if (this.getPrimaryIpAddress() != null) {
                    data.set("primaryIpAddress", om.valueToTree(this.getPrimaryIpAddress()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosPrepayInstanceGroupClone.EniMappingsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EniMappingsProperty.Jsii$Proxy that = (EniMappingsProperty.Jsii$Proxy) o;

                if (!securityGroupId.equals(that.securityGroupId)) return false;
                if (!vSwitchId.equals(that.vSwitchId)) return false;
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                if (this.networkInterfaceName != null ? !this.networkInterfaceName.equals(that.networkInterfaceName) : that.networkInterfaceName != null) return false;
                return this.primaryIpAddress != null ? this.primaryIpAddress.equals(that.primaryIpAddress) : that.primaryIpAddress == null;
            }

            @Override
            public final int hashCode() {
                int result = this.securityGroupId.hashCode();
                result = 31 * result + (this.vSwitchId.hashCode());
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.networkInterfaceName != null ? this.networkInterfaceName.hashCode() : 0);
                result = 31 * result + (this.primaryIpAddress != null ? this.primaryIpAddress.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupCloneProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupCloneProps.Builder();
        }

        /**
         * @return {@code this}
         * @param maxAmount This parameter is required.
         */
        public Builder maxAmount(final java.lang.Number maxAmount) {
            this.props.maxAmount(maxAmount);
            return this;
        }

        /**
         * @return {@code this}
         * @param minAmount This parameter is required.
         */
        public Builder minAmount(final java.lang.Number minAmount) {
            this.props.minAmount(minAmount);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param periodType This parameter is required.
         */
        public Builder periodType(final java.lang.String periodType) {
            this.props.periodType(periodType);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceInstanceId This parameter is required.
         */
        public Builder sourceInstanceId(final java.lang.String sourceInstanceId) {
            this.props.sourceInstanceId(sourceInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final java.lang.String autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenewPeriod This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param deploymentSetId This parameter is required.
         */
        public Builder deploymentSetId(final java.lang.String deploymentSetId) {
            this.props.deploymentSetId(deploymentSetId);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param diskMappings This parameter is required.
         */
        public Builder diskMappings(final com.aliyun.ros.cdk.core.IResolvable diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }
        /**
         * @return {@code this}
         * @param diskMappings This parameter is required.
         */
        public Builder diskMappings(final java.util.List<? extends java.lang.Object> diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }

        /**
         * @return {@code this}
         * @param eniMappings This parameter is required.
         */
        public Builder eniMappings(final com.aliyun.ros.cdk.core.IResolvable eniMappings) {
            this.props.eniMappings(eniMappings);
            return this;
        }
        /**
         * @return {@code this}
         * @param eniMappings This parameter is required.
         */
        public Builder eniMappings(final java.util.List<? extends java.lang.Object> eniMappings) {
            this.props.eniMappings(eniMappings);
            return this;
        }

        /**
         * @return {@code this}
         * @param hpcClusterId This parameter is required.
         */
        public Builder hpcClusterId(final java.lang.String hpcClusterId) {
            this.props.hpcClusterId(hpcClusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageId This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param internetMaxBandwidthIn This parameter is required.
         */
        public Builder internetMaxBandwidthIn(final java.lang.Number internetMaxBandwidthIn) {
            this.props.internetMaxBandwidthIn(internetMaxBandwidthIn);
            return this;
        }

        /**
         * @return {@code this}
         * @param internetMaxBandwidthOut This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final java.lang.Number internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }

        /**
         * @return {@code this}
         * @param keyPairName This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * @return {@code this}
         * @param launchTemplateId This parameter is required.
         */
        public Builder launchTemplateId(final java.lang.String launchTemplateId) {
            this.props.launchTemplateId(launchTemplateId);
            return this;
        }

        /**
         * @return {@code this}
         * @param launchTemplateName This parameter is required.
         */
        public Builder launchTemplateName(final java.lang.String launchTemplateName) {
            this.props.launchTemplateName(launchTemplateName);
            return this;
        }

        /**
         * @return {@code this}
         * @param launchTemplateVersion This parameter is required.
         */
        public Builder launchTemplateVersion(final java.lang.String launchTemplateVersion) {
            this.props.launchTemplateVersion(launchTemplateVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }

        /**
         * @return {@code this}
         * @param passwordInherit This parameter is required.
         */
        public Builder passwordInherit(final java.lang.Boolean passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }
        /**
         * @return {@code this}
         * @param passwordInherit This parameter is required.
         */
        public Builder passwordInherit(final com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }

        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param ramRoleName This parameter is required.
         */
        public Builder ramRoleName(final java.lang.String ramRoleName) {
            this.props.ramRoleName(ramRoleName);
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
         * @param securityGroupIds This parameter is required.
         */
        public Builder securityGroupIds(final java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupIds This parameter is required.
         */
        public Builder securityGroupIds(final com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskAutoSnapshotPolicyId This parameter is required.
         */
        public Builder systemDiskAutoSnapshotPolicyId(final java.lang.String systemDiskAutoSnapshotPolicyId) {
            this.props.systemDiskAutoSnapshotPolicyId(systemDiskAutoSnapshotPolicyId);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskCategory This parameter is required.
         */
        public Builder systemDiskCategory(final java.lang.String systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskDescription This parameter is required.
         */
        public Builder systemDiskDescription(final java.lang.String systemDiskDescription) {
            this.props.systemDiskDescription(systemDiskDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskDiskName This parameter is required.
         */
        public Builder systemDiskDiskName(final java.lang.String systemDiskDiskName) {
            this.props.systemDiskDiskName(systemDiskDiskName);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone build() {
            return new com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
