package com.aliyun.ros.cdk.ecs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ECS::LaunchTemplateVersion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:48.913Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosLaunchTemplateVersion")
public class RosLaunchTemplateVersion extends com.aliyun.ros.cdk.core.RosResource {

    protected RosLaunchTemplateVersion(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosLaunchTemplateVersion(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosLaunchTemplateVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreatedBy() {
        return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDefaultVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrDefaultVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLaunchTemplateData() {
        return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateData", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLaunchTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLaunchTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrModifiedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVersionDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrVersionDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVersionNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrVersionNumber", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateData() {
        return software.amazon.jsii.Kernel.get(this, "launchTemplateData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLaunchTemplateData(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateData", value);
    }

    /**
     */
    public void setLaunchTemplateData(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion.LaunchTemplateDataProperty value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateData", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLaunchTemplateId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateId", value);
    }

    /**
     */
    public void setLaunchTemplateId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "launchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLaunchTemplateName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateName", value);
    }

    /**
     */
    public void setLaunchTemplateName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateName", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getVersionDescription() {
        return software.amazon.jsii.Kernel.get(this, "versionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVersionDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "versionDescription", value);
    }

    /**
     */
    public void setVersionDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "versionDescription", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosLaunchTemplateVersion.DataDisksProperty")
    @software.amazon.jsii.Jsii.Proxy(DataDisksProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DataDisksProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoSnapshotPolicyId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBurstingEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteWithInstance() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDevice() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDiskName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPerformanceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProvisionedIops() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotId() {
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
            java.lang.Object autoSnapshotPolicyId;
            java.lang.Object burstingEnabled;
            java.lang.Object category;
            java.lang.Object deleteWithInstance;
            java.lang.Object description;
            java.lang.Object device;
            java.lang.Object diskName;
            java.lang.Object encrypted;
            java.lang.Object performanceLevel;
            java.lang.Object provisionedIops;
            java.lang.Object size;
            java.lang.Object snapshotId;

            /**
             * Sets the value of {@link DataDisksProperty#getAutoSnapshotPolicyId}
             * @param autoSnapshotPolicyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoSnapshotPolicyId(java.lang.String autoSnapshotPolicyId) {
                this.autoSnapshotPolicyId = autoSnapshotPolicyId;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getAutoSnapshotPolicyId}
             * @param autoSnapshotPolicyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoSnapshotPolicyId(com.aliyun.ros.cdk.core.IResolvable autoSnapshotPolicyId) {
                this.autoSnapshotPolicyId = autoSnapshotPolicyId;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getBurstingEnabled}
             * @param burstingEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder burstingEnabled(java.lang.Boolean burstingEnabled) {
                this.burstingEnabled = burstingEnabled;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getBurstingEnabled}
             * @param burstingEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder burstingEnabled(com.aliyun.ros.cdk.core.IResolvable burstingEnabled) {
                this.burstingEnabled = burstingEnabled;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getCategory}
             * @param category the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(java.lang.String category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getCategory}
             * @param category the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
                this.category = category;
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
             * Sets the value of {@link DataDisksProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDevice}
             * @param device the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder device(java.lang.String device) {
                this.device = device;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDevice}
             * @param device the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder device(com.aliyun.ros.cdk.core.IResolvable device) {
                this.device = device;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDiskName}
             * @param diskName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskName(java.lang.String diskName) {
                this.diskName = diskName;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDiskName}
             * @param diskName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskName(com.aliyun.ros.cdk.core.IResolvable diskName) {
                this.diskName = diskName;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getEncrypted}
             * @param encrypted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encrypted(java.lang.String encrypted) {
                this.encrypted = encrypted;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getEncrypted}
             * @param encrypted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
                this.encrypted = encrypted;
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
             * Sets the value of {@link DataDisksProperty#getProvisionedIops}
             * @param provisionedIops the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder provisionedIops(java.lang.Number provisionedIops) {
                this.provisionedIops = provisionedIops;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getProvisionedIops}
             * @param provisionedIops the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder provisionedIops(com.aliyun.ros.cdk.core.IResolvable provisionedIops) {
                this.provisionedIops = provisionedIops;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getSize}
             * @param size the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(java.lang.Number size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getSize}
             * @param size the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getSnapshotId}
             * @param snapshotId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder snapshotId(java.lang.String snapshotId) {
                this.snapshotId = snapshotId;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getSnapshotId}
             * @param snapshotId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder snapshotId(com.aliyun.ros.cdk.core.IResolvable snapshotId) {
                this.snapshotId = snapshotId;
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
            private final java.lang.Object autoSnapshotPolicyId;
            private final java.lang.Object burstingEnabled;
            private final java.lang.Object category;
            private final java.lang.Object deleteWithInstance;
            private final java.lang.Object description;
            private final java.lang.Object device;
            private final java.lang.Object diskName;
            private final java.lang.Object encrypted;
            private final java.lang.Object performanceLevel;
            private final java.lang.Object provisionedIops;
            private final java.lang.Object size;
            private final java.lang.Object snapshotId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.autoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "autoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.burstingEnabled = software.amazon.jsii.Kernel.get(this, "burstingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.deleteWithInstance = software.amazon.jsii.Kernel.get(this, "deleteWithInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.device = software.amazon.jsii.Kernel.get(this, "device", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskName = software.amazon.jsii.Kernel.get(this, "diskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.performanceLevel = software.amazon.jsii.Kernel.get(this, "performanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.provisionedIops = software.amazon.jsii.Kernel.get(this, "provisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.autoSnapshotPolicyId = builder.autoSnapshotPolicyId;
                this.burstingEnabled = builder.burstingEnabled;
                this.category = builder.category;
                this.deleteWithInstance = builder.deleteWithInstance;
                this.description = builder.description;
                this.device = builder.device;
                this.diskName = builder.diskName;
                this.encrypted = builder.encrypted;
                this.performanceLevel = builder.performanceLevel;
                this.provisionedIops = builder.provisionedIops;
                this.size = builder.size;
                this.snapshotId = builder.snapshotId;
            }

            @Override
            public final java.lang.Object getAutoSnapshotPolicyId() {
                return this.autoSnapshotPolicyId;
            }

            @Override
            public final java.lang.Object getBurstingEnabled() {
                return this.burstingEnabled;
            }

            @Override
            public final java.lang.Object getCategory() {
                return this.category;
            }

            @Override
            public final java.lang.Object getDeleteWithInstance() {
                return this.deleteWithInstance;
            }

            @Override
            public final java.lang.Object getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.Object getDevice() {
                return this.device;
            }

            @Override
            public final java.lang.Object getDiskName() {
                return this.diskName;
            }

            @Override
            public final java.lang.Object getEncrypted() {
                return this.encrypted;
            }

            @Override
            public final java.lang.Object getPerformanceLevel() {
                return this.performanceLevel;
            }

            @Override
            public final java.lang.Object getProvisionedIops() {
                return this.provisionedIops;
            }

            @Override
            public final java.lang.Object getSize() {
                return this.size;
            }

            @Override
            public final java.lang.Object getSnapshotId() {
                return this.snapshotId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAutoSnapshotPolicyId() != null) {
                    data.set("autoSnapshotPolicyId", om.valueToTree(this.getAutoSnapshotPolicyId()));
                }
                if (this.getBurstingEnabled() != null) {
                    data.set("burstingEnabled", om.valueToTree(this.getBurstingEnabled()));
                }
                if (this.getCategory() != null) {
                    data.set("category", om.valueToTree(this.getCategory()));
                }
                if (this.getDeleteWithInstance() != null) {
                    data.set("deleteWithInstance", om.valueToTree(this.getDeleteWithInstance()));
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
                if (this.getPerformanceLevel() != null) {
                    data.set("performanceLevel", om.valueToTree(this.getPerformanceLevel()));
                }
                if (this.getProvisionedIops() != null) {
                    data.set("provisionedIops", om.valueToTree(this.getProvisionedIops()));
                }
                if (this.getSize() != null) {
                    data.set("size", om.valueToTree(this.getSize()));
                }
                if (this.getSnapshotId() != null) {
                    data.set("snapshotId", om.valueToTree(this.getSnapshotId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosLaunchTemplateVersion.DataDisksProperty"));
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

                if (this.autoSnapshotPolicyId != null ? !this.autoSnapshotPolicyId.equals(that.autoSnapshotPolicyId) : that.autoSnapshotPolicyId != null) return false;
                if (this.burstingEnabled != null ? !this.burstingEnabled.equals(that.burstingEnabled) : that.burstingEnabled != null) return false;
                if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
                if (this.deleteWithInstance != null ? !this.deleteWithInstance.equals(that.deleteWithInstance) : that.deleteWithInstance != null) return false;
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                if (this.device != null ? !this.device.equals(that.device) : that.device != null) return false;
                if (this.diskName != null ? !this.diskName.equals(that.diskName) : that.diskName != null) return false;
                if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
                if (this.performanceLevel != null ? !this.performanceLevel.equals(that.performanceLevel) : that.performanceLevel != null) return false;
                if (this.provisionedIops != null ? !this.provisionedIops.equals(that.provisionedIops) : that.provisionedIops != null) return false;
                if (this.size != null ? !this.size.equals(that.size) : that.size != null) return false;
                return this.snapshotId != null ? this.snapshotId.equals(that.snapshotId) : that.snapshotId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.autoSnapshotPolicyId != null ? this.autoSnapshotPolicyId.hashCode() : 0;
                result = 31 * result + (this.burstingEnabled != null ? this.burstingEnabled.hashCode() : 0);
                result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
                result = 31 * result + (this.deleteWithInstance != null ? this.deleteWithInstance.hashCode() : 0);
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.device != null ? this.device.hashCode() : 0);
                result = 31 * result + (this.diskName != null ? this.diskName.hashCode() : 0);
                result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
                result = 31 * result + (this.performanceLevel != null ? this.performanceLevel.hashCode() : 0);
                result = 31 * result + (this.provisionedIops != null ? this.provisionedIops.hashCode() : 0);
                result = 31 * result + (this.size != null ? this.size.hashCode() : 0);
                result = 31 * result + (this.snapshotId != null ? this.snapshotId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosLaunchTemplateVersion.LaunchTemplateDataProperty")
    @software.amazon.jsii.Jsii.Proxy(LaunchTemplateDataProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LaunchTemplateDataProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoReleaseTime() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDeploymentSetId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableVmOsConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getImageOwnerAlias() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthIn() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthOut() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIoOptimized() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6AddressCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaces() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPasswordInherit() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRamRoleName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityEnhancementStrategy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpotDuration() {
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
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskAutoSnapshotPolicyId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskBurstingEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDeleteWithInstance() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDiskName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskEncrypted() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskIops() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskPerformanceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskProvisionedIops() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion.TagsProperty> getTags() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link LaunchTemplateDataProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LaunchTemplateDataProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LaunchTemplateDataProperty> {
            java.lang.Object autoReleaseTime;
            java.lang.Object dataDisks;
            java.lang.Object deletionProtection;
            java.lang.Object deploymentSetId;
            java.lang.Object description;
            java.lang.Object enableVmOsConfig;
            java.lang.Object hostName;
            java.lang.Object imageId;
            java.lang.Object imageOwnerAlias;
            java.lang.Object instanceChargeType;
            java.lang.Object instanceName;
            java.lang.Object instanceType;
            java.lang.Object internetChargeType;
            java.lang.Object internetMaxBandwidthIn;
            java.lang.Object internetMaxBandwidthOut;
            java.lang.Object ioOptimized;
            java.lang.Object ipv6AddressCount;
            java.lang.Object keyPairName;
            java.lang.Object networkInterfaces;
            java.lang.Object networkType;
            java.lang.Object passwordInherit;
            java.lang.Object period;
            java.lang.Object privateIpAddress;
            java.lang.Object ramRoleName;
            java.lang.Object securityEnhancementStrategy;
            java.lang.Object securityGroupId;
            java.lang.Object securityGroupIds;
            java.lang.Object spotDuration;
            java.lang.Object spotPriceLimit;
            java.lang.Object spotStrategy;
            java.lang.Object systemDiskAutoSnapshotPolicyId;
            java.lang.Object systemDiskBurstingEnabled;
            java.lang.Object systemDiskCategory;
            java.lang.Object systemDiskDeleteWithInstance;
            java.lang.Object systemDiskDescription;
            java.lang.Object systemDiskDiskName;
            java.lang.Object systemDiskEncrypted;
            java.lang.Object systemDiskIops;
            java.lang.Object systemDiskPerformanceLevel;
            java.lang.Object systemDiskProvisionedIops;
            java.lang.Object systemDiskSize;
            java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion.TagsProperty> tags;
            java.lang.Object userData;
            java.lang.Object vpcId;
            java.lang.Object vSwitchId;
            java.lang.Object zoneId;

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getAutoReleaseTime}
             * @param autoReleaseTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoReleaseTime(java.lang.String autoReleaseTime) {
                this.autoReleaseTime = autoReleaseTime;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getAutoReleaseTime}
             * @param autoReleaseTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoReleaseTime(com.aliyun.ros.cdk.core.IResolvable autoReleaseTime) {
                this.autoReleaseTime = autoReleaseTime;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getDataDisks}
             * @param dataDisks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisks(com.aliyun.ros.cdk.core.IResolvable dataDisks) {
                this.dataDisks = dataDisks;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getDataDisks}
             * @param dataDisks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisks(java.util.List<? extends java.lang.Object> dataDisks) {
                this.dataDisks = dataDisks;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getDeletionProtection}
             * @param deletionProtection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deletionProtection(java.lang.Boolean deletionProtection) {
                this.deletionProtection = deletionProtection;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getDeletionProtection}
             * @param deletionProtection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deletionProtection(com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
                this.deletionProtection = deletionProtection;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getDeploymentSetId}
             * @param deploymentSetId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deploymentSetId(java.lang.String deploymentSetId) {
                this.deploymentSetId = deploymentSetId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getDeploymentSetId}
             * @param deploymentSetId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deploymentSetId(com.aliyun.ros.cdk.core.IResolvable deploymentSetId) {
                this.deploymentSetId = deploymentSetId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getEnableVmOsConfig}
             * @param enableVmOsConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableVmOsConfig(java.lang.Boolean enableVmOsConfig) {
                this.enableVmOsConfig = enableVmOsConfig;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getEnableVmOsConfig}
             * @param enableVmOsConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableVmOsConfig(com.aliyun.ros.cdk.core.IResolvable enableVmOsConfig) {
                this.enableVmOsConfig = enableVmOsConfig;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getHostName}
             * @param hostName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostName(java.lang.String hostName) {
                this.hostName = hostName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getHostName}
             * @param hostName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
                this.hostName = hostName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getImageId}
             * @param imageId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageId(java.lang.String imageId) {
                this.imageId = imageId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getImageId}
             * @param imageId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
                this.imageId = imageId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getImageOwnerAlias}
             * @param imageOwnerAlias the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageOwnerAlias(java.lang.String imageOwnerAlias) {
                this.imageOwnerAlias = imageOwnerAlias;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getImageOwnerAlias}
             * @param imageOwnerAlias the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageOwnerAlias(com.aliyun.ros.cdk.core.IResolvable imageOwnerAlias) {
                this.imageOwnerAlias = imageOwnerAlias;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getInstanceChargeType}
             * @param instanceChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceChargeType(java.lang.String instanceChargeType) {
                this.instanceChargeType = instanceChargeType;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getInstanceChargeType}
             * @param instanceChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
                this.instanceChargeType = instanceChargeType;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getInstanceName}
             * @param instanceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceName(java.lang.String instanceName) {
                this.instanceName = instanceName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getInstanceName}
             * @param instanceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
                this.instanceName = instanceName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getInternetChargeType}
             * @param internetChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetChargeType(java.lang.String internetChargeType) {
                this.internetChargeType = internetChargeType;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getInternetChargeType}
             * @param internetChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
                this.internetChargeType = internetChargeType;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getInternetMaxBandwidthIn}
             * @param internetMaxBandwidthIn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetMaxBandwidthIn(java.lang.Number internetMaxBandwidthIn) {
                this.internetMaxBandwidthIn = internetMaxBandwidthIn;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getInternetMaxBandwidthIn}
             * @param internetMaxBandwidthIn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetMaxBandwidthIn(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthIn) {
                this.internetMaxBandwidthIn = internetMaxBandwidthIn;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getInternetMaxBandwidthOut}
             * @param internetMaxBandwidthOut the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
                this.internetMaxBandwidthOut = internetMaxBandwidthOut;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getInternetMaxBandwidthOut}
             * @param internetMaxBandwidthOut the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
                this.internetMaxBandwidthOut = internetMaxBandwidthOut;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getIoOptimized}
             * @param ioOptimized the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ioOptimized(java.lang.String ioOptimized) {
                this.ioOptimized = ioOptimized;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getIoOptimized}
             * @param ioOptimized the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ioOptimized(com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
                this.ioOptimized = ioOptimized;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getIpv6AddressCount}
             * @param ipv6AddressCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
                this.ipv6AddressCount = ipv6AddressCount;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getIpv6AddressCount}
             * @param ipv6AddressCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6AddressCount(com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
                this.ipv6AddressCount = ipv6AddressCount;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getKeyPairName}
             * @param keyPairName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPairName(java.lang.String keyPairName) {
                this.keyPairName = keyPairName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getKeyPairName}
             * @param keyPairName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
                this.keyPairName = keyPairName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getNetworkInterfaces}
             * @param networkInterfaces the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkInterfaces(com.aliyun.ros.cdk.core.IResolvable networkInterfaces) {
                this.networkInterfaces = networkInterfaces;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getNetworkInterfaces}
             * @param networkInterfaces the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkInterfaces(java.util.List<? extends java.lang.Object> networkInterfaces) {
                this.networkInterfaces = networkInterfaces;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getNetworkType}
             * @param networkType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkType(java.lang.String networkType) {
                this.networkType = networkType;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getNetworkType}
             * @param networkType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
                this.networkType = networkType;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getPasswordInherit}
             * @param passwordInherit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passwordInherit(java.lang.Boolean passwordInherit) {
                this.passwordInherit = passwordInherit;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getPasswordInherit}
             * @param passwordInherit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passwordInherit(com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
                this.passwordInherit = passwordInherit;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getPeriod}
             * @param period the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(java.lang.Number period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getPeriod}
             * @param period the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getPrivateIpAddress}
             * @param privateIpAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder privateIpAddress(java.lang.String privateIpAddress) {
                this.privateIpAddress = privateIpAddress;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getPrivateIpAddress}
             * @param privateIpAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
                this.privateIpAddress = privateIpAddress;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getRamRoleName}
             * @param ramRoleName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ramRoleName(java.lang.String ramRoleName) {
                this.ramRoleName = ramRoleName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getRamRoleName}
             * @param ramRoleName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
                this.ramRoleName = ramRoleName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSecurityEnhancementStrategy}
             * @param securityEnhancementStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityEnhancementStrategy(java.lang.String securityEnhancementStrategy) {
                this.securityEnhancementStrategy = securityEnhancementStrategy;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSecurityEnhancementStrategy}
             * @param securityEnhancementStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityEnhancementStrategy(com.aliyun.ros.cdk.core.IResolvable securityEnhancementStrategy) {
                this.securityEnhancementStrategy = securityEnhancementStrategy;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(java.lang.String securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSecurityGroupIds}
             * @param securityGroupIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
                this.securityGroupIds = securityGroupIds;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSecurityGroupIds}
             * @param securityGroupIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
                this.securityGroupIds = securityGroupIds;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSpotDuration}
             * @param spotDuration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotDuration(java.lang.Number spotDuration) {
                this.spotDuration = spotDuration;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSpotDuration}
             * @param spotDuration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotDuration(com.aliyun.ros.cdk.core.IResolvable spotDuration) {
                this.spotDuration = spotDuration;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSpotPriceLimit}
             * @param spotPriceLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotPriceLimit(java.lang.Number spotPriceLimit) {
                this.spotPriceLimit = spotPriceLimit;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSpotPriceLimit}
             * @param spotPriceLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
                this.spotPriceLimit = spotPriceLimit;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSpotStrategy}
             * @param spotStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotStrategy(java.lang.String spotStrategy) {
                this.spotStrategy = spotStrategy;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSpotStrategy}
             * @param spotStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
                this.spotStrategy = spotStrategy;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskAutoSnapshotPolicyId}
             * @param systemDiskAutoSnapshotPolicyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskAutoSnapshotPolicyId(java.lang.String systemDiskAutoSnapshotPolicyId) {
                this.systemDiskAutoSnapshotPolicyId = systemDiskAutoSnapshotPolicyId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskAutoSnapshotPolicyId}
             * @param systemDiskAutoSnapshotPolicyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskAutoSnapshotPolicyId(com.aliyun.ros.cdk.core.IResolvable systemDiskAutoSnapshotPolicyId) {
                this.systemDiskAutoSnapshotPolicyId = systemDiskAutoSnapshotPolicyId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskBurstingEnabled}
             * @param systemDiskBurstingEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskBurstingEnabled(java.lang.Boolean systemDiskBurstingEnabled) {
                this.systemDiskBurstingEnabled = systemDiskBurstingEnabled;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskBurstingEnabled}
             * @param systemDiskBurstingEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskBurstingEnabled(com.aliyun.ros.cdk.core.IResolvable systemDiskBurstingEnabled) {
                this.systemDiskBurstingEnabled = systemDiskBurstingEnabled;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskCategory}
             * @param systemDiskCategory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
                this.systemDiskCategory = systemDiskCategory;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskCategory}
             * @param systemDiskCategory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
                this.systemDiskCategory = systemDiskCategory;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskDeleteWithInstance}
             * @param systemDiskDeleteWithInstance the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskDeleteWithInstance(java.lang.Boolean systemDiskDeleteWithInstance) {
                this.systemDiskDeleteWithInstance = systemDiskDeleteWithInstance;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskDeleteWithInstance}
             * @param systemDiskDeleteWithInstance the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskDeleteWithInstance(com.aliyun.ros.cdk.core.IResolvable systemDiskDeleteWithInstance) {
                this.systemDiskDeleteWithInstance = systemDiskDeleteWithInstance;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskDescription}
             * @param systemDiskDescription the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskDescription(java.lang.String systemDiskDescription) {
                this.systemDiskDescription = systemDiskDescription;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskDescription}
             * @param systemDiskDescription the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskDescription(com.aliyun.ros.cdk.core.IResolvable systemDiskDescription) {
                this.systemDiskDescription = systemDiskDescription;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskDiskName}
             * @param systemDiskDiskName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskDiskName(java.lang.String systemDiskDiskName) {
                this.systemDiskDiskName = systemDiskDiskName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskDiskName}
             * @param systemDiskDiskName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskDiskName(com.aliyun.ros.cdk.core.IResolvable systemDiskDiskName) {
                this.systemDiskDiskName = systemDiskDiskName;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskEncrypted}
             * @param systemDiskEncrypted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskEncrypted(java.lang.String systemDiskEncrypted) {
                this.systemDiskEncrypted = systemDiskEncrypted;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskEncrypted}
             * @param systemDiskEncrypted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskEncrypted(com.aliyun.ros.cdk.core.IResolvable systemDiskEncrypted) {
                this.systemDiskEncrypted = systemDiskEncrypted;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskIops}
             * @param systemDiskIops the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskIops(java.lang.Number systemDiskIops) {
                this.systemDiskIops = systemDiskIops;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskIops}
             * @param systemDiskIops the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskIops(com.aliyun.ros.cdk.core.IResolvable systemDiskIops) {
                this.systemDiskIops = systemDiskIops;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskPerformanceLevel}
             * @param systemDiskPerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskPerformanceLevel(java.lang.String systemDiskPerformanceLevel) {
                this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskPerformanceLevel}
             * @param systemDiskPerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskPerformanceLevel(com.aliyun.ros.cdk.core.IResolvable systemDiskPerformanceLevel) {
                this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskProvisionedIops}
             * @param systemDiskProvisionedIops the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskProvisionedIops(java.lang.Number systemDiskProvisionedIops) {
                this.systemDiskProvisionedIops = systemDiskProvisionedIops;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskProvisionedIops}
             * @param systemDiskProvisionedIops the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskProvisionedIops(com.aliyun.ros.cdk.core.IResolvable systemDiskProvisionedIops) {
                this.systemDiskProvisionedIops = systemDiskProvisionedIops;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskSize}
             * @param systemDiskSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskSize(java.lang.Number systemDiskSize) {
                this.systemDiskSize = systemDiskSize;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getSystemDiskSize}
             * @param systemDiskSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
                this.systemDiskSize = systemDiskSize;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getTags}
             * @param tags the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @SuppressWarnings("unchecked")
            public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion.TagsProperty> tags) {
                this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion.TagsProperty>)tags;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getUserData}
             * @param userData the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userData(java.lang.String userData) {
                this.userData = userData;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getUserData}
             * @param userData the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
                this.userData = userData;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getVpcId}
             * @param vpcId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getVpcId}
             * @param vpcId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getVSwitchId}
             * @param vSwitchId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getVSwitchId}
             * @param vSwitchId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getZoneId}
             * @param zoneId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(java.lang.String zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link LaunchTemplateDataProperty#getZoneId}
             * @param zoneId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LaunchTemplateDataProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LaunchTemplateDataProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LaunchTemplateDataProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LaunchTemplateDataProperty {
            private final java.lang.Object autoReleaseTime;
            private final java.lang.Object dataDisks;
            private final java.lang.Object deletionProtection;
            private final java.lang.Object deploymentSetId;
            private final java.lang.Object description;
            private final java.lang.Object enableVmOsConfig;
            private final java.lang.Object hostName;
            private final java.lang.Object imageId;
            private final java.lang.Object imageOwnerAlias;
            private final java.lang.Object instanceChargeType;
            private final java.lang.Object instanceName;
            private final java.lang.Object instanceType;
            private final java.lang.Object internetChargeType;
            private final java.lang.Object internetMaxBandwidthIn;
            private final java.lang.Object internetMaxBandwidthOut;
            private final java.lang.Object ioOptimized;
            private final java.lang.Object ipv6AddressCount;
            private final java.lang.Object keyPairName;
            private final java.lang.Object networkInterfaces;
            private final java.lang.Object networkType;
            private final java.lang.Object passwordInherit;
            private final java.lang.Object period;
            private final java.lang.Object privateIpAddress;
            private final java.lang.Object ramRoleName;
            private final java.lang.Object securityEnhancementStrategy;
            private final java.lang.Object securityGroupId;
            private final java.lang.Object securityGroupIds;
            private final java.lang.Object spotDuration;
            private final java.lang.Object spotPriceLimit;
            private final java.lang.Object spotStrategy;
            private final java.lang.Object systemDiskAutoSnapshotPolicyId;
            private final java.lang.Object systemDiskBurstingEnabled;
            private final java.lang.Object systemDiskCategory;
            private final java.lang.Object systemDiskDeleteWithInstance;
            private final java.lang.Object systemDiskDescription;
            private final java.lang.Object systemDiskDiskName;
            private final java.lang.Object systemDiskEncrypted;
            private final java.lang.Object systemDiskIops;
            private final java.lang.Object systemDiskPerformanceLevel;
            private final java.lang.Object systemDiskProvisionedIops;
            private final java.lang.Object systemDiskSize;
            private final java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion.TagsProperty> tags;
            private final java.lang.Object userData;
            private final java.lang.Object vpcId;
            private final java.lang.Object vSwitchId;
            private final java.lang.Object zoneId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.autoReleaseTime = software.amazon.jsii.Kernel.get(this, "autoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dataDisks = software.amazon.jsii.Kernel.get(this, "dataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.deploymentSetId = software.amazon.jsii.Kernel.get(this, "deploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableVmOsConfig = software.amazon.jsii.Kernel.get(this, "enableVmOsConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.imageOwnerAlias = software.amazon.jsii.Kernel.get(this, "imageOwnerAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.internetMaxBandwidthIn = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ioOptimized = software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipv6AddressCount = software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.networkInterfaces = software.amazon.jsii.Kernel.get(this, "networkInterfaces", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.passwordInherit = software.amazon.jsii.Kernel.get(this, "passwordInherit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityEnhancementStrategy = software.amazon.jsii.Kernel.get(this, "securityEnhancementStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotDuration = software.amazon.jsii.Kernel.get(this, "spotDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskAutoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "systemDiskAutoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskBurstingEnabled = software.amazon.jsii.Kernel.get(this, "systemDiskBurstingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskDeleteWithInstance = software.amazon.jsii.Kernel.get(this, "systemDiskDeleteWithInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskDescription = software.amazon.jsii.Kernel.get(this, "systemDiskDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskDiskName = software.amazon.jsii.Kernel.get(this, "systemDiskDiskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskEncrypted = software.amazon.jsii.Kernel.get(this, "systemDiskEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskIops = software.amazon.jsii.Kernel.get(this, "systemDiskIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "systemDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskProvisionedIops = software.amazon.jsii.Kernel.get(this, "systemDiskProvisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion.TagsProperty.class)));
                this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            @SuppressWarnings("unchecked")
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.autoReleaseTime = builder.autoReleaseTime;
                this.dataDisks = builder.dataDisks;
                this.deletionProtection = builder.deletionProtection;
                this.deploymentSetId = builder.deploymentSetId;
                this.description = builder.description;
                this.enableVmOsConfig = builder.enableVmOsConfig;
                this.hostName = builder.hostName;
                this.imageId = builder.imageId;
                this.imageOwnerAlias = builder.imageOwnerAlias;
                this.instanceChargeType = builder.instanceChargeType;
                this.instanceName = builder.instanceName;
                this.instanceType = builder.instanceType;
                this.internetChargeType = builder.internetChargeType;
                this.internetMaxBandwidthIn = builder.internetMaxBandwidthIn;
                this.internetMaxBandwidthOut = builder.internetMaxBandwidthOut;
                this.ioOptimized = builder.ioOptimized;
                this.ipv6AddressCount = builder.ipv6AddressCount;
                this.keyPairName = builder.keyPairName;
                this.networkInterfaces = builder.networkInterfaces;
                this.networkType = builder.networkType;
                this.passwordInherit = builder.passwordInherit;
                this.period = builder.period;
                this.privateIpAddress = builder.privateIpAddress;
                this.ramRoleName = builder.ramRoleName;
                this.securityEnhancementStrategy = builder.securityEnhancementStrategy;
                this.securityGroupId = builder.securityGroupId;
                this.securityGroupIds = builder.securityGroupIds;
                this.spotDuration = builder.spotDuration;
                this.spotPriceLimit = builder.spotPriceLimit;
                this.spotStrategy = builder.spotStrategy;
                this.systemDiskAutoSnapshotPolicyId = builder.systemDiskAutoSnapshotPolicyId;
                this.systemDiskBurstingEnabled = builder.systemDiskBurstingEnabled;
                this.systemDiskCategory = builder.systemDiskCategory;
                this.systemDiskDeleteWithInstance = builder.systemDiskDeleteWithInstance;
                this.systemDiskDescription = builder.systemDiskDescription;
                this.systemDiskDiskName = builder.systemDiskDiskName;
                this.systemDiskEncrypted = builder.systemDiskEncrypted;
                this.systemDiskIops = builder.systemDiskIops;
                this.systemDiskPerformanceLevel = builder.systemDiskPerformanceLevel;
                this.systemDiskProvisionedIops = builder.systemDiskProvisionedIops;
                this.systemDiskSize = builder.systemDiskSize;
                this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion.TagsProperty>)builder.tags;
                this.userData = builder.userData;
                this.vpcId = builder.vpcId;
                this.vSwitchId = builder.vSwitchId;
                this.zoneId = builder.zoneId;
            }

            @Override
            public final java.lang.Object getAutoReleaseTime() {
                return this.autoReleaseTime;
            }

            @Override
            public final java.lang.Object getDataDisks() {
                return this.dataDisks;
            }

            @Override
            public final java.lang.Object getDeletionProtection() {
                return this.deletionProtection;
            }

            @Override
            public final java.lang.Object getDeploymentSetId() {
                return this.deploymentSetId;
            }

            @Override
            public final java.lang.Object getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.Object getEnableVmOsConfig() {
                return this.enableVmOsConfig;
            }

            @Override
            public final java.lang.Object getHostName() {
                return this.hostName;
            }

            @Override
            public final java.lang.Object getImageId() {
                return this.imageId;
            }

            @Override
            public final java.lang.Object getImageOwnerAlias() {
                return this.imageOwnerAlias;
            }

            @Override
            public final java.lang.Object getInstanceChargeType() {
                return this.instanceChargeType;
            }

            @Override
            public final java.lang.Object getInstanceName() {
                return this.instanceName;
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.Object getInternetChargeType() {
                return this.internetChargeType;
            }

            @Override
            public final java.lang.Object getInternetMaxBandwidthIn() {
                return this.internetMaxBandwidthIn;
            }

            @Override
            public final java.lang.Object getInternetMaxBandwidthOut() {
                return this.internetMaxBandwidthOut;
            }

            @Override
            public final java.lang.Object getIoOptimized() {
                return this.ioOptimized;
            }

            @Override
            public final java.lang.Object getIpv6AddressCount() {
                return this.ipv6AddressCount;
            }

            @Override
            public final java.lang.Object getKeyPairName() {
                return this.keyPairName;
            }

            @Override
            public final java.lang.Object getNetworkInterfaces() {
                return this.networkInterfaces;
            }

            @Override
            public final java.lang.Object getNetworkType() {
                return this.networkType;
            }

            @Override
            public final java.lang.Object getPasswordInherit() {
                return this.passwordInherit;
            }

            @Override
            public final java.lang.Object getPeriod() {
                return this.period;
            }

            @Override
            public final java.lang.Object getPrivateIpAddress() {
                return this.privateIpAddress;
            }

            @Override
            public final java.lang.Object getRamRoleName() {
                return this.ramRoleName;
            }

            @Override
            public final java.lang.Object getSecurityEnhancementStrategy() {
                return this.securityEnhancementStrategy;
            }

            @Override
            public final java.lang.Object getSecurityGroupId() {
                return this.securityGroupId;
            }

            @Override
            public final java.lang.Object getSecurityGroupIds() {
                return this.securityGroupIds;
            }

            @Override
            public final java.lang.Object getSpotDuration() {
                return this.spotDuration;
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
            public final java.lang.Object getSystemDiskAutoSnapshotPolicyId() {
                return this.systemDiskAutoSnapshotPolicyId;
            }

            @Override
            public final java.lang.Object getSystemDiskBurstingEnabled() {
                return this.systemDiskBurstingEnabled;
            }

            @Override
            public final java.lang.Object getSystemDiskCategory() {
                return this.systemDiskCategory;
            }

            @Override
            public final java.lang.Object getSystemDiskDeleteWithInstance() {
                return this.systemDiskDeleteWithInstance;
            }

            @Override
            public final java.lang.Object getSystemDiskDescription() {
                return this.systemDiskDescription;
            }

            @Override
            public final java.lang.Object getSystemDiskDiskName() {
                return this.systemDiskDiskName;
            }

            @Override
            public final java.lang.Object getSystemDiskEncrypted() {
                return this.systemDiskEncrypted;
            }

            @Override
            public final java.lang.Object getSystemDiskIops() {
                return this.systemDiskIops;
            }

            @Override
            public final java.lang.Object getSystemDiskPerformanceLevel() {
                return this.systemDiskPerformanceLevel;
            }

            @Override
            public final java.lang.Object getSystemDiskProvisionedIops() {
                return this.systemDiskProvisionedIops;
            }

            @Override
            public final java.lang.Object getSystemDiskSize() {
                return this.systemDiskSize;
            }

            @Override
            public final java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion.TagsProperty> getTags() {
                return this.tags;
            }

            @Override
            public final java.lang.Object getUserData() {
                return this.userData;
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
            public final java.lang.Object getZoneId() {
                return this.zoneId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAutoReleaseTime() != null) {
                    data.set("autoReleaseTime", om.valueToTree(this.getAutoReleaseTime()));
                }
                if (this.getDataDisks() != null) {
                    data.set("dataDisks", om.valueToTree(this.getDataDisks()));
                }
                if (this.getDeletionProtection() != null) {
                    data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
                }
                if (this.getDeploymentSetId() != null) {
                    data.set("deploymentSetId", om.valueToTree(this.getDeploymentSetId()));
                }
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }
                if (this.getEnableVmOsConfig() != null) {
                    data.set("enableVmOsConfig", om.valueToTree(this.getEnableVmOsConfig()));
                }
                if (this.getHostName() != null) {
                    data.set("hostName", om.valueToTree(this.getHostName()));
                }
                if (this.getImageId() != null) {
                    data.set("imageId", om.valueToTree(this.getImageId()));
                }
                if (this.getImageOwnerAlias() != null) {
                    data.set("imageOwnerAlias", om.valueToTree(this.getImageOwnerAlias()));
                }
                if (this.getInstanceChargeType() != null) {
                    data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
                }
                if (this.getInstanceName() != null) {
                    data.set("instanceName", om.valueToTree(this.getInstanceName()));
                }
                if (this.getInstanceType() != null) {
                    data.set("instanceType", om.valueToTree(this.getInstanceType()));
                }
                if (this.getInternetChargeType() != null) {
                    data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
                }
                if (this.getInternetMaxBandwidthIn() != null) {
                    data.set("internetMaxBandwidthIn", om.valueToTree(this.getInternetMaxBandwidthIn()));
                }
                if (this.getInternetMaxBandwidthOut() != null) {
                    data.set("internetMaxBandwidthOut", om.valueToTree(this.getInternetMaxBandwidthOut()));
                }
                if (this.getIoOptimized() != null) {
                    data.set("ioOptimized", om.valueToTree(this.getIoOptimized()));
                }
                if (this.getIpv6AddressCount() != null) {
                    data.set("ipv6AddressCount", om.valueToTree(this.getIpv6AddressCount()));
                }
                if (this.getKeyPairName() != null) {
                    data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
                }
                if (this.getNetworkInterfaces() != null) {
                    data.set("networkInterfaces", om.valueToTree(this.getNetworkInterfaces()));
                }
                if (this.getNetworkType() != null) {
                    data.set("networkType", om.valueToTree(this.getNetworkType()));
                }
                if (this.getPasswordInherit() != null) {
                    data.set("passwordInherit", om.valueToTree(this.getPasswordInherit()));
                }
                if (this.getPeriod() != null) {
                    data.set("period", om.valueToTree(this.getPeriod()));
                }
                if (this.getPrivateIpAddress() != null) {
                    data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
                }
                if (this.getRamRoleName() != null) {
                    data.set("ramRoleName", om.valueToTree(this.getRamRoleName()));
                }
                if (this.getSecurityEnhancementStrategy() != null) {
                    data.set("securityEnhancementStrategy", om.valueToTree(this.getSecurityEnhancementStrategy()));
                }
                if (this.getSecurityGroupId() != null) {
                    data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
                }
                if (this.getSecurityGroupIds() != null) {
                    data.set("securityGroupIds", om.valueToTree(this.getSecurityGroupIds()));
                }
                if (this.getSpotDuration() != null) {
                    data.set("spotDuration", om.valueToTree(this.getSpotDuration()));
                }
                if (this.getSpotPriceLimit() != null) {
                    data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
                }
                if (this.getSpotStrategy() != null) {
                    data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
                }
                if (this.getSystemDiskAutoSnapshotPolicyId() != null) {
                    data.set("systemDiskAutoSnapshotPolicyId", om.valueToTree(this.getSystemDiskAutoSnapshotPolicyId()));
                }
                if (this.getSystemDiskBurstingEnabled() != null) {
                    data.set("systemDiskBurstingEnabled", om.valueToTree(this.getSystemDiskBurstingEnabled()));
                }
                if (this.getSystemDiskCategory() != null) {
                    data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
                }
                if (this.getSystemDiskDeleteWithInstance() != null) {
                    data.set("systemDiskDeleteWithInstance", om.valueToTree(this.getSystemDiskDeleteWithInstance()));
                }
                if (this.getSystemDiskDescription() != null) {
                    data.set("systemDiskDescription", om.valueToTree(this.getSystemDiskDescription()));
                }
                if (this.getSystemDiskDiskName() != null) {
                    data.set("systemDiskDiskName", om.valueToTree(this.getSystemDiskDiskName()));
                }
                if (this.getSystemDiskEncrypted() != null) {
                    data.set("systemDiskEncrypted", om.valueToTree(this.getSystemDiskEncrypted()));
                }
                if (this.getSystemDiskIops() != null) {
                    data.set("systemDiskIops", om.valueToTree(this.getSystemDiskIops()));
                }
                if (this.getSystemDiskPerformanceLevel() != null) {
                    data.set("systemDiskPerformanceLevel", om.valueToTree(this.getSystemDiskPerformanceLevel()));
                }
                if (this.getSystemDiskProvisionedIops() != null) {
                    data.set("systemDiskProvisionedIops", om.valueToTree(this.getSystemDiskProvisionedIops()));
                }
                if (this.getSystemDiskSize() != null) {
                    data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
                }
                if (this.getTags() != null) {
                    data.set("tags", om.valueToTree(this.getTags()));
                }
                if (this.getUserData() != null) {
                    data.set("userData", om.valueToTree(this.getUserData()));
                }
                if (this.getVpcId() != null) {
                    data.set("vpcId", om.valueToTree(this.getVpcId()));
                }
                if (this.getVSwitchId() != null) {
                    data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
                }
                if (this.getZoneId() != null) {
                    data.set("zoneId", om.valueToTree(this.getZoneId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosLaunchTemplateVersion.LaunchTemplateDataProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LaunchTemplateDataProperty.Jsii$Proxy that = (LaunchTemplateDataProperty.Jsii$Proxy) o;

                if (this.autoReleaseTime != null ? !this.autoReleaseTime.equals(that.autoReleaseTime) : that.autoReleaseTime != null) return false;
                if (this.dataDisks != null ? !this.dataDisks.equals(that.dataDisks) : that.dataDisks != null) return false;
                if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
                if (this.deploymentSetId != null ? !this.deploymentSetId.equals(that.deploymentSetId) : that.deploymentSetId != null) return false;
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                if (this.enableVmOsConfig != null ? !this.enableVmOsConfig.equals(that.enableVmOsConfig) : that.enableVmOsConfig != null) return false;
                if (this.hostName != null ? !this.hostName.equals(that.hostName) : that.hostName != null) return false;
                if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
                if (this.imageOwnerAlias != null ? !this.imageOwnerAlias.equals(that.imageOwnerAlias) : that.imageOwnerAlias != null) return false;
                if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
                if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
                if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
                if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
                if (this.internetMaxBandwidthIn != null ? !this.internetMaxBandwidthIn.equals(that.internetMaxBandwidthIn) : that.internetMaxBandwidthIn != null) return false;
                if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
                if (this.ioOptimized != null ? !this.ioOptimized.equals(that.ioOptimized) : that.ioOptimized != null) return false;
                if (this.ipv6AddressCount != null ? !this.ipv6AddressCount.equals(that.ipv6AddressCount) : that.ipv6AddressCount != null) return false;
                if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
                if (this.networkInterfaces != null ? !this.networkInterfaces.equals(that.networkInterfaces) : that.networkInterfaces != null) return false;
                if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
                if (this.passwordInherit != null ? !this.passwordInherit.equals(that.passwordInherit) : that.passwordInherit != null) return false;
                if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
                if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
                if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
                if (this.securityEnhancementStrategy != null ? !this.securityEnhancementStrategy.equals(that.securityEnhancementStrategy) : that.securityEnhancementStrategy != null) return false;
                if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
                if (this.securityGroupIds != null ? !this.securityGroupIds.equals(that.securityGroupIds) : that.securityGroupIds != null) return false;
                if (this.spotDuration != null ? !this.spotDuration.equals(that.spotDuration) : that.spotDuration != null) return false;
                if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
                if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
                if (this.systemDiskAutoSnapshotPolicyId != null ? !this.systemDiskAutoSnapshotPolicyId.equals(that.systemDiskAutoSnapshotPolicyId) : that.systemDiskAutoSnapshotPolicyId != null) return false;
                if (this.systemDiskBurstingEnabled != null ? !this.systemDiskBurstingEnabled.equals(that.systemDiskBurstingEnabled) : that.systemDiskBurstingEnabled != null) return false;
                if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
                if (this.systemDiskDeleteWithInstance != null ? !this.systemDiskDeleteWithInstance.equals(that.systemDiskDeleteWithInstance) : that.systemDiskDeleteWithInstance != null) return false;
                if (this.systemDiskDescription != null ? !this.systemDiskDescription.equals(that.systemDiskDescription) : that.systemDiskDescription != null) return false;
                if (this.systemDiskDiskName != null ? !this.systemDiskDiskName.equals(that.systemDiskDiskName) : that.systemDiskDiskName != null) return false;
                if (this.systemDiskEncrypted != null ? !this.systemDiskEncrypted.equals(that.systemDiskEncrypted) : that.systemDiskEncrypted != null) return false;
                if (this.systemDiskIops != null ? !this.systemDiskIops.equals(that.systemDiskIops) : that.systemDiskIops != null) return false;
                if (this.systemDiskPerformanceLevel != null ? !this.systemDiskPerformanceLevel.equals(that.systemDiskPerformanceLevel) : that.systemDiskPerformanceLevel != null) return false;
                if (this.systemDiskProvisionedIops != null ? !this.systemDiskProvisionedIops.equals(that.systemDiskProvisionedIops) : that.systemDiskProvisionedIops != null) return false;
                if (this.systemDiskSize != null ? !this.systemDiskSize.equals(that.systemDiskSize) : that.systemDiskSize != null) return false;
                if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
                if (this.userData != null ? !this.userData.equals(that.userData) : that.userData != null) return false;
                if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
                if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
                return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.autoReleaseTime != null ? this.autoReleaseTime.hashCode() : 0;
                result = 31 * result + (this.dataDisks != null ? this.dataDisks.hashCode() : 0);
                result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
                result = 31 * result + (this.deploymentSetId != null ? this.deploymentSetId.hashCode() : 0);
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.enableVmOsConfig != null ? this.enableVmOsConfig.hashCode() : 0);
                result = 31 * result + (this.hostName != null ? this.hostName.hashCode() : 0);
                result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
                result = 31 * result + (this.imageOwnerAlias != null ? this.imageOwnerAlias.hashCode() : 0);
                result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
                result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
                result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
                result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
                result = 31 * result + (this.internetMaxBandwidthIn != null ? this.internetMaxBandwidthIn.hashCode() : 0);
                result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
                result = 31 * result + (this.ioOptimized != null ? this.ioOptimized.hashCode() : 0);
                result = 31 * result + (this.ipv6AddressCount != null ? this.ipv6AddressCount.hashCode() : 0);
                result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
                result = 31 * result + (this.networkInterfaces != null ? this.networkInterfaces.hashCode() : 0);
                result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
                result = 31 * result + (this.passwordInherit != null ? this.passwordInherit.hashCode() : 0);
                result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
                result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
                result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
                result = 31 * result + (this.securityEnhancementStrategy != null ? this.securityEnhancementStrategy.hashCode() : 0);
                result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
                result = 31 * result + (this.securityGroupIds != null ? this.securityGroupIds.hashCode() : 0);
                result = 31 * result + (this.spotDuration != null ? this.spotDuration.hashCode() : 0);
                result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
                result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
                result = 31 * result + (this.systemDiskAutoSnapshotPolicyId != null ? this.systemDiskAutoSnapshotPolicyId.hashCode() : 0);
                result = 31 * result + (this.systemDiskBurstingEnabled != null ? this.systemDiskBurstingEnabled.hashCode() : 0);
                result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
                result = 31 * result + (this.systemDiskDeleteWithInstance != null ? this.systemDiskDeleteWithInstance.hashCode() : 0);
                result = 31 * result + (this.systemDiskDescription != null ? this.systemDiskDescription.hashCode() : 0);
                result = 31 * result + (this.systemDiskDiskName != null ? this.systemDiskDiskName.hashCode() : 0);
                result = 31 * result + (this.systemDiskEncrypted != null ? this.systemDiskEncrypted.hashCode() : 0);
                result = 31 * result + (this.systemDiskIops != null ? this.systemDiskIops.hashCode() : 0);
                result = 31 * result + (this.systemDiskPerformanceLevel != null ? this.systemDiskPerformanceLevel.hashCode() : 0);
                result = 31 * result + (this.systemDiskProvisionedIops != null ? this.systemDiskProvisionedIops.hashCode() : 0);
                result = 31 * result + (this.systemDiskSize != null ? this.systemDiskSize.hashCode() : 0);
                result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
                result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
                result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
                result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
                result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosLaunchTemplateVersion.NetworkInterfacesProperty")
    @software.amazon.jsii.Jsii.Proxy(NetworkInterfacesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NetworkInterfacesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaceName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaceTrafficMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrimaryIpAddress() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NetworkInterfacesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NetworkInterfacesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NetworkInterfacesProperty> {
            java.lang.Object description;
            java.lang.Object instanceType;
            java.lang.Object networkInterfaceName;
            java.lang.Object networkInterfaceTrafficMode;
            java.lang.Object primaryIpAddress;
            java.lang.Object securityGroupId;
            java.lang.Object securityGroupIds;
            java.lang.Object vSwitchId;

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getNetworkInterfaceName}
             * @param networkInterfaceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkInterfaceName(java.lang.String networkInterfaceName) {
                this.networkInterfaceName = networkInterfaceName;
                return this;
            }

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getNetworkInterfaceName}
             * @param networkInterfaceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkInterfaceName(com.aliyun.ros.cdk.core.IResolvable networkInterfaceName) {
                this.networkInterfaceName = networkInterfaceName;
                return this;
            }

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getNetworkInterfaceTrafficMode}
             * @param networkInterfaceTrafficMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkInterfaceTrafficMode(java.lang.String networkInterfaceTrafficMode) {
                this.networkInterfaceTrafficMode = networkInterfaceTrafficMode;
                return this;
            }

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getNetworkInterfaceTrafficMode}
             * @param networkInterfaceTrafficMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkInterfaceTrafficMode(com.aliyun.ros.cdk.core.IResolvable networkInterfaceTrafficMode) {
                this.networkInterfaceTrafficMode = networkInterfaceTrafficMode;
                return this;
            }

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getPrimaryIpAddress}
             * @param primaryIpAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder primaryIpAddress(java.lang.String primaryIpAddress) {
                this.primaryIpAddress = primaryIpAddress;
                return this;
            }

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getPrimaryIpAddress}
             * @param primaryIpAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder primaryIpAddress(com.aliyun.ros.cdk.core.IResolvable primaryIpAddress) {
                this.primaryIpAddress = primaryIpAddress;
                return this;
            }

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(java.lang.String securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getSecurityGroupIds}
             * @param securityGroupIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
                this.securityGroupIds = securityGroupIds;
                return this;
            }

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getSecurityGroupIds}
             * @param securityGroupIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
                this.securityGroupIds = securityGroupIds;
                return this;
            }

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getVSwitchId}
             * @param vSwitchId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkInterfacesProperty#getVSwitchId}
             * @param vSwitchId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NetworkInterfacesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NetworkInterfacesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NetworkInterfacesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkInterfacesProperty {
            private final java.lang.Object description;
            private final java.lang.Object instanceType;
            private final java.lang.Object networkInterfaceName;
            private final java.lang.Object networkInterfaceTrafficMode;
            private final java.lang.Object primaryIpAddress;
            private final java.lang.Object securityGroupId;
            private final java.lang.Object securityGroupIds;
            private final java.lang.Object vSwitchId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.networkInterfaceName = software.amazon.jsii.Kernel.get(this, "networkInterfaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.networkInterfaceTrafficMode = software.amazon.jsii.Kernel.get(this, "networkInterfaceTrafficMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.primaryIpAddress = software.amazon.jsii.Kernel.get(this, "primaryIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.description = builder.description;
                this.instanceType = builder.instanceType;
                this.networkInterfaceName = builder.networkInterfaceName;
                this.networkInterfaceTrafficMode = builder.networkInterfaceTrafficMode;
                this.primaryIpAddress = builder.primaryIpAddress;
                this.securityGroupId = builder.securityGroupId;
                this.securityGroupIds = builder.securityGroupIds;
                this.vSwitchId = builder.vSwitchId;
            }

            @Override
            public final java.lang.Object getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.Object getNetworkInterfaceName() {
                return this.networkInterfaceName;
            }

            @Override
            public final java.lang.Object getNetworkInterfaceTrafficMode() {
                return this.networkInterfaceTrafficMode;
            }

            @Override
            public final java.lang.Object getPrimaryIpAddress() {
                return this.primaryIpAddress;
            }

            @Override
            public final java.lang.Object getSecurityGroupId() {
                return this.securityGroupId;
            }

            @Override
            public final java.lang.Object getSecurityGroupIds() {
                return this.securityGroupIds;
            }

            @Override
            public final java.lang.Object getVSwitchId() {
                return this.vSwitchId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }
                if (this.getInstanceType() != null) {
                    data.set("instanceType", om.valueToTree(this.getInstanceType()));
                }
                if (this.getNetworkInterfaceName() != null) {
                    data.set("networkInterfaceName", om.valueToTree(this.getNetworkInterfaceName()));
                }
                if (this.getNetworkInterfaceTrafficMode() != null) {
                    data.set("networkInterfaceTrafficMode", om.valueToTree(this.getNetworkInterfaceTrafficMode()));
                }
                if (this.getPrimaryIpAddress() != null) {
                    data.set("primaryIpAddress", om.valueToTree(this.getPrimaryIpAddress()));
                }
                if (this.getSecurityGroupId() != null) {
                    data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
                }
                if (this.getSecurityGroupIds() != null) {
                    data.set("securityGroupIds", om.valueToTree(this.getSecurityGroupIds()));
                }
                if (this.getVSwitchId() != null) {
                    data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosLaunchTemplateVersion.NetworkInterfacesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NetworkInterfacesProperty.Jsii$Proxy that = (NetworkInterfacesProperty.Jsii$Proxy) o;

                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
                if (this.networkInterfaceName != null ? !this.networkInterfaceName.equals(that.networkInterfaceName) : that.networkInterfaceName != null) return false;
                if (this.networkInterfaceTrafficMode != null ? !this.networkInterfaceTrafficMode.equals(that.networkInterfaceTrafficMode) : that.networkInterfaceTrafficMode != null) return false;
                if (this.primaryIpAddress != null ? !this.primaryIpAddress.equals(that.primaryIpAddress) : that.primaryIpAddress != null) return false;
                if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
                if (this.securityGroupIds != null ? !this.securityGroupIds.equals(that.securityGroupIds) : that.securityGroupIds != null) return false;
                return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.description != null ? this.description.hashCode() : 0;
                result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
                result = 31 * result + (this.networkInterfaceName != null ? this.networkInterfaceName.hashCode() : 0);
                result = 31 * result + (this.networkInterfaceTrafficMode != null ? this.networkInterfaceTrafficMode.hashCode() : 0);
                result = 31 * result + (this.primaryIpAddress != null ? this.primaryIpAddress.hashCode() : 0);
                result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
                result = 31 * result + (this.securityGroupIds != null ? this.securityGroupIds.hashCode() : 0);
                result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosLaunchTemplateVersion.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

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
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set.
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
                this.key = builder.key;
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

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosLaunchTemplateVersion.TagsProperty"));
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

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion> {
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
        private final com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param launchTemplateData This parameter is required.
         */
        public Builder launchTemplateData(final com.aliyun.ros.cdk.core.IResolvable launchTemplateData) {
            this.props.launchTemplateData(launchTemplateData);
            return this;
        }
        /**
         * @return {@code this}
         * @param launchTemplateData This parameter is required.
         */
        public Builder launchTemplateData(final com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion.LaunchTemplateDataProperty launchTemplateData) {
            this.props.launchTemplateData(launchTemplateData);
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
         * @param launchTemplateId This parameter is required.
         */
        public Builder launchTemplateId(final com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
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
         * @param launchTemplateName This parameter is required.
         */
        public Builder launchTemplateName(final com.aliyun.ros.cdk.core.IResolvable launchTemplateName) {
            this.props.launchTemplateName(launchTemplateName);
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
         * @param versionDescription This parameter is required.
         */
        public Builder versionDescription(final java.lang.String versionDescription) {
            this.props.versionDescription(versionDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param versionDescription This parameter is required.
         */
        public Builder versionDescription(final com.aliyun.ros.cdk.core.IResolvable versionDescription) {
            this.props.versionDescription(versionDescription);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion build() {
            return new com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
