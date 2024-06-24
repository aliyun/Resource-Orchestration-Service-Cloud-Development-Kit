package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::CustomImage</code>, which is used to create a custom image.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:06.093Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.CustomImage")
public class CustomImage extends com.aliyun.ros.cdk.core.Resource {

    protected CustomImage(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CustomImage(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public CustomImage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.CustomImageProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public CustomImage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.CustomImageProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public CustomImage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ImageId: Image ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageId() {
        return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SourceRegionId: ID of the region to where the instance/snapshot belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceRegionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.CustomImageProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.CustomImageProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.CustomImageProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.CustomImage}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.CustomImage> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private com.aliyun.ros.cdk.ecs.CustomImageProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture.
         * <p>
         * Ranges:
         * I386
         * X86_64 (default)
         * <p>
         * @return {@code this}
         * @param architecture Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture. This parameter is required.
         */
        public Builder architecture(final java.lang.String architecture) {
            this.props().architecture(architecture);
            return this;
        }
        /**
         * Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture.
         * <p>
         * Ranges:
         * I386
         * X86_64 (default)
         * <p>
         * @return {@code this}
         * @param architecture Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture. This parameter is required.
         */
        public Builder architecture(final com.aliyun.ros.cdk.core.IResolvable architecture) {
            this.props().architecture(architecture);
            return this;
        }

        /**
         * Property bootMode: Modify the startup mode of the image.
         * <p>
         * Ranges:
         * BIOS: BIOS boot mode.
         * UEFI: UEFI boot mode.
         * You need to know the startup mode supported by the specified image. After modifying the startup mode through this parameter, it must match the startup mode supported by the image itself so that the instance can start normally.
         * <p>
         * @return {@code this}
         * @param bootMode Property bootMode: Modify the startup mode of the image. This parameter is required.
         */
        public Builder bootMode(final java.lang.String bootMode) {
            this.props().bootMode(bootMode);
            return this;
        }
        /**
         * Property bootMode: Modify the startup mode of the image.
         * <p>
         * Ranges:
         * BIOS: BIOS boot mode.
         * UEFI: UEFI boot mode.
         * You need to know the startup mode supported by the specified image. After modifying the startup mode through this parameter, it must match the startup mode supported by the image itself so that the instance can start normally.
         * <p>
         * @return {@code this}
         * @param bootMode Property bootMode: Modify the startup mode of the image. This parameter is required.
         */
        public Builder bootMode(final com.aliyun.ros.cdk.core.IResolvable bootMode) {
            this.props().bootMode(bootMode);
            return this;
        }

        /**
         * Property description: The description of the image.
         * <p>
         * It can be [0, 256] letters in length.
         * It cannot begin with http:// or https://.
         * Default value: null.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the image. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: The description of the image.
         * <p>
         * It can be [0, 256] letters in length.
         * It cannot begin with http:// or https://.
         * Default value: null.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the image. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property detectionStrategy: Image detection policy.
         * <p>
         * If this parameter is not configured, detection will not be triggered. Only Standard detection mode is supported.Currently, most Linux/Windows versions are supported.
         * <p>
         * @return {@code this}
         * @param detectionStrategy Property detectionStrategy: Image detection policy. This parameter is required.
         */
        public Builder detectionStrategy(final java.lang.String detectionStrategy) {
            this.props().detectionStrategy(detectionStrategy);
            return this;
        }
        /**
         * Property detectionStrategy: Image detection policy.
         * <p>
         * If this parameter is not configured, detection will not be triggered. Only Standard detection mode is supported.Currently, most Linux/Windows versions are supported.
         * <p>
         * @return {@code this}
         * @param detectionStrategy Property detectionStrategy: Image detection policy. This parameter is required.
         */
        public Builder detectionStrategy(final com.aliyun.ros.cdk.core.IResolvable detectionStrategy) {
            this.props().detectionStrategy(detectionStrategy);
            return this;
        }

        /**
         * Property diskDeviceMapping:.
         * <p>
         * @return {@code this}
         * @param diskDeviceMapping Property diskDeviceMapping:. This parameter is required.
         */
        public Builder diskDeviceMapping(final com.aliyun.ros.cdk.core.IResolvable diskDeviceMapping) {
            this.props().diskDeviceMapping(diskDeviceMapping);
            return this;
        }
        /**
         * Property diskDeviceMapping:.
         * <p>
         * @return {@code this}
         * @param diskDeviceMapping Property diskDeviceMapping:. This parameter is required.
         */
        public Builder diskDeviceMapping(final java.util.List<? extends java.lang.Object> diskDeviceMapping) {
            this.props().diskDeviceMapping(diskDeviceMapping);
            return this;
        }

        /**
         * Property imageFamily: The name of the image family of the image.
         * <p>
         * The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It cannot contain http:// or https://. It must start with a letter and cannot start with acs: or aliyun.This parameter is empty by default.
         * <p>
         * @return {@code this}
         * @param imageFamily Property imageFamily: The name of the image family of the image. This parameter is required.
         */
        public Builder imageFamily(final java.lang.String imageFamily) {
            this.props().imageFamily(imageFamily);
            return this;
        }
        /**
         * Property imageFamily: The name of the image family of the image.
         * <p>
         * The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It cannot contain http:// or https://. It must start with a letter and cannot start with acs: or aliyun.This parameter is empty by default.
         * <p>
         * @return {@code this}
         * @param imageFamily Property imageFamily: The name of the image family of the image. This parameter is required.
         */
        public Builder imageFamily(final com.aliyun.ros.cdk.core.IResolvable imageFamily) {
            this.props().imageFamily(imageFamily);
            return this;
        }

        /**
         * Property imageName: Image name.
         * <p>
         * Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
         * Cannot begin with http:// or https://.
         * <p>
         * @return {@code this}
         * @param imageName Property imageName: Image name. This parameter is required.
         */
        public Builder imageName(final java.lang.String imageName) {
            this.props().imageName(imageName);
            return this;
        }
        /**
         * Property imageName: Image name.
         * <p>
         * Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
         * Cannot begin with http:// or https://.
         * <p>
         * @return {@code this}
         * @param imageName Property imageName: Image name. This parameter is required.
         */
        public Builder imageName(final com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.props().imageName(imageName);
            return this;
        }

        /**
         * Property imageVersion: Image version.
         * <p>
         * When you specify an instance ID (InstanceId) and the image of the instance is a cloud market image or a custom image created from a cloud market image. This parameter must be the same as the ImageVersion of the current instance image or set to empty.
         * <p>
         * @return {@code this}
         * @param imageVersion Property imageVersion: Image version. This parameter is required.
         */
        public Builder imageVersion(final java.lang.String imageVersion) {
            this.props().imageVersion(imageVersion);
            return this;
        }
        /**
         * Property imageVersion: Image version.
         * <p>
         * When you specify an instance ID (InstanceId) and the image of the instance is a cloud market image or a custom image created from a cloud market image. This parameter must be the same as the ImageVersion of the current instance image or set to empty.
         * <p>
         * @return {@code this}
         * @param imageVersion Property imageVersion: Image version. This parameter is required.
         */
        public Builder imageVersion(final com.aliyun.ros.cdk.core.IResolvable imageVersion) {
            this.props().imageVersion(imageVersion);
            return this;
        }

        /**
         * Property instanceId: Instance ID.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance ID. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: Instance ID.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance ID. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }

        /**
         * Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform.
         * <p>
         * @return {@code this}
         * @param platform Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform. This parameter is required.
         */
        public Builder platform(final java.lang.String platform) {
            this.props().platform(platform);
            return this;
        }
        /**
         * Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform.
         * <p>
         * @return {@code this}
         * @param platform Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform. This parameter is required.
         */
        public Builder platform(final com.aliyun.ros.cdk.core.IResolvable platform) {
            this.props().platform(platform);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which to assign the custom image.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the custom image. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which to assign the custom image.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the custom image. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property snapshotId: The snapshot ID.
         * <p>
         * A custom image is created from the specified snapshot.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: The snapshot ID. This parameter is required.
         */
        public Builder snapshotId(final java.lang.String snapshotId) {
            this.props().snapshotId(snapshotId);
            return this;
        }
        /**
         * Property snapshotId: The snapshot ID.
         * <p>
         * A custom image is created from the specified snapshot.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: The snapshot ID. This parameter is required.
         */
        public Builder snapshotId(final com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.props().snapshotId(snapshotId);
            return this;
        }

        /**
         * Property sourceRegionId: ID of the region to where the instance/snapshot belongs.
         * <p>
         * Default is current region ID.
         * <p>
         * @return {@code this}
         * @param sourceRegionId Property sourceRegionId: ID of the region to where the instance/snapshot belongs. This parameter is required.
         */
        public Builder sourceRegionId(final java.lang.String sourceRegionId) {
            this.props().sourceRegionId(sourceRegionId);
            return this;
        }
        /**
         * Property sourceRegionId: ID of the region to where the instance/snapshot belongs.
         * <p>
         * Default is current region ID.
         * <p>
         * @return {@code this}
         * @param sourceRegionId Property sourceRegionId: ID of the region to where the instance/snapshot belongs. This parameter is required.
         */
        public Builder sourceRegionId(final com.aliyun.ros.cdk.core.IResolvable sourceRegionId) {
            this.props().sourceRegionId(sourceRegionId);
            return this;
        }

        /**
         * Property tag:.
         * <p>
         * @return {@code this}
         * @param tag Property tag:. This parameter is required.
         */
        public Builder tag(final com.aliyun.ros.cdk.core.IResolvable tag) {
            this.props().tag(tag);
            return this;
        }
        /**
         * Property tag:.
         * <p>
         * @return {@code this}
         * @param tag Property tag:. This parameter is required.
         */
        public Builder tag(final java.util.List<? extends java.lang.Object> tag) {
            this.props().tag(tag);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.CustomImage}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.CustomImage build() {
            return new com.aliyun.ros.cdk.ecs.CustomImage(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.CustomImageProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.CustomImageProps.Builder();
            }
            return this.props;
        }
    }
}
