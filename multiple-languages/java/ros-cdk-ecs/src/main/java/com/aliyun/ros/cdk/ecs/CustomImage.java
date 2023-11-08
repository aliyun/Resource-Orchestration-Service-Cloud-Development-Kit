package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  <code>ALIYUN::ECS::CustomImage</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:34.728Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.CustomImage")
public class CustomImage extends com.aliyun.ros.cdk.core.Resource {

    protected CustomImage(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CustomImage(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ECS::CustomImage</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
     * Create a new <code>ALIYUN::ECS::CustomImage</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
     * Create a new <code>ALIYUN::ECS::CustomImage</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
         * Property imageFamily: The name of the image family of the custom image.
         * <p>
         * The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It cannot contain http:// or https://. It must start with a letter and cannot start with acs: or aliyun.This parameter is empty by default.
         * <p>
         * @return {@code this}
         * @param imageFamily Property imageFamily: The name of the image family of the custom image. This parameter is required.
         */
        public Builder imageFamily(final java.lang.String imageFamily) {
            this.props().imageFamily(imageFamily);
            return this;
        }
        /**
         * Property imageFamily: The name of the image family of the custom image.
         * <p>
         * The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It cannot contain http:// or https://. It must start with a letter and cannot start with acs: or aliyun.This parameter is empty by default.
         * <p>
         * @return {@code this}
         * @param imageFamily Property imageFamily: The name of the image family of the custom image. This parameter is required.
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
