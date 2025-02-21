package com.aliyun.ros.cdk.ens;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ENS::Image</code>, which is used to create an image from an instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:16.498Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.Image")
public class Image extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ens.IImage {

    protected Image(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Image(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Image(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.ImageProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Image(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.ImageProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Architecture: The image architecture.
     * <p>
     * Valid values:
     * i386
     * x86_64
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArchitecture() {
        return software.amazon.jsii.Kernel.get(this, "attrArchitecture", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ComputeType: Computing type.
     * <p>
     * ens_vm/ens: x86 computing.
     * bare_metal: x86 bare machine or x86 bare metal.
     * arm_vm: ARM computing.
     * arm_bare_metal: ARM bare machine or ARM bare metal.
     * pcfarm: heterogeneous computing.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrComputeType() {
        return software.amazon.jsii.Kernel.get(this, "attrComputeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The image creation time.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageId: The ID of the image.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
        return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageName: The name of the image.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageName() {
        return software.amazon.jsii.Kernel.get(this, "attrImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageOwnerAlias: The source of the image.
     * <p>
     * Valid values:
     * system: public images
     * self: your custom images
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageOwnerAlias() {
        return software.amazon.jsii.Kernel.get(this, "attrImageOwnerAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageSize: The size of the image.
     * <p>
     * Unit: GiB.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageSize() {
        return software.amazon.jsii.Kernel.get(this, "attrImageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The ID of the instance corresponding to the image.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OsVersion: The operating system version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrOsVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Platform: The type of operating system used by the image.
     * <p>
     * centos
     * ubuntu
     * alios
     * debian
     * rhel
     * windows
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlatform() {
        return software.amazon.jsii.Kernel.get(this, "attrPlatform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SnapshotId: The ID of the snapshot corresponding to the image.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId() {
        return software.amazon.jsii.Kernel.get(this, "attrSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.ImageProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ens.ImageProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ens.Image}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ens.Image> {
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
        private final com.aliyun.ros.cdk.ens.ImageProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ens.ImageProps.Builder();
        }

        /**
         * Property imageName: The name of the image.
         * <p>
         * The name must be 2 to 128 characters in length.
         * The name can contain letters, digits, colons (:), underscores (<em>), and hyphens (-).
         * It must start with a letter but cannot start with http:// or https://.
         * The name can contain letters, digits, colons (:), underscores (</em>), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param imageName Property imageName: The name of the image. This parameter is required.
         */
        public Builder imageName(final java.lang.String imageName) {
            this.props.imageName(imageName);
            return this;
        }
        /**
         * Property imageName: The name of the image.
         * <p>
         * The name must be 2 to 128 characters in length.
         * The name can contain letters, digits, colons (:), underscores (<em>), and hyphens (-).
         * It must start with a letter but cannot start with http:// or https://.
         * The name can contain letters, digits, colons (:), underscores (</em>), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param imageName Property imageName: The name of the image. This parameter is required.
         */
        public Builder imageName(final com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.props.imageName(imageName);
            return this;
        }

        /**
         * Property deleteAfterImageUpload: Whether the instance is automatically released after the image is packaged and uploaded successfully, only the build machine is supported.
         * <p>
         * Optional values:
         * true: When the instance is released, the image is released together with the instance.
         * false: When the instance is released, the image is retained and is not released together with the instance.
         * Empty means false by default.
         * <p>
         * @return {@code this}
         * @param deleteAfterImageUpload Property deleteAfterImageUpload: Whether the instance is automatically released after the image is packaged and uploaded successfully, only the build machine is supported. This parameter is required.
         */
        public Builder deleteAfterImageUpload(final java.lang.Boolean deleteAfterImageUpload) {
            this.props.deleteAfterImageUpload(deleteAfterImageUpload);
            return this;
        }
        /**
         * Property deleteAfterImageUpload: Whether the instance is automatically released after the image is packaged and uploaded successfully, only the build machine is supported.
         * <p>
         * Optional values:
         * true: When the instance is released, the image is released together with the instance.
         * false: When the instance is released, the image is retained and is not released together with the instance.
         * Empty means false by default.
         * <p>
         * @return {@code this}
         * @param deleteAfterImageUpload Property deleteAfterImageUpload: Whether the instance is automatically released after the image is packaged and uploaded successfully, only the build machine is supported. This parameter is required.
         */
        public Builder deleteAfterImageUpload(final com.aliyun.ros.cdk.core.IResolvable deleteAfterImageUpload) {
            this.props.deleteAfterImageUpload(deleteAfterImageUpload);
            return this;
        }

        /**
         * Property instanceId: The ID of the instance corresponding to the image.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance corresponding to the image. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the instance corresponding to the image.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance corresponding to the image. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ens.Image}.
         */
        @Override
        public com.aliyun.ros.cdk.ens.Image build() {
            return new com.aliyun.ros.cdk.ens.Image(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
