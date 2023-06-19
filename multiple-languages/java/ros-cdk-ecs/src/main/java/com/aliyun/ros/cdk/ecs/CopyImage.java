package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  <code>ALIYUN::ECS::CopyImage</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:09.301Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.CopyImage")
public class CopyImage extends com.aliyun.ros.cdk.core.Resource {

    protected CopyImage(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CopyImage(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ECS::CopyImage</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public CopyImage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.CopyImageProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ECS::CopyImage</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public CopyImage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.CopyImageProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DestinationRegionId: ID of the region to where the destination custom image belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationRegionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ImageId: ID of the source custom image.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageId() {
        return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SourceRegionId: ID of the region to where the source image belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceRegionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.CopyImage}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.CopyImage> {
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
        private final com.aliyun.ros.cdk.ecs.CopyImageProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.CopyImageProps.Builder();
        }

        /**
         * Property destinationRegionId: ID of the region to where the destination custom image belongs.
         * <p>
         * @return {@code this}
         * @param destinationRegionId Property destinationRegionId: ID of the region to where the destination custom image belongs. This parameter is required.
         */
        public Builder destinationRegionId(final java.lang.String destinationRegionId) {
            this.props.destinationRegionId(destinationRegionId);
            return this;
        }
        /**
         * Property destinationRegionId: ID of the region to where the destination custom image belongs.
         * <p>
         * @return {@code this}
         * @param destinationRegionId Property destinationRegionId: ID of the region to where the destination custom image belongs. This parameter is required.
         */
        public Builder destinationRegionId(final com.aliyun.ros.cdk.core.IResolvable destinationRegionId) {
            this.props.destinationRegionId(destinationRegionId);
            return this;
        }

        /**
         * Property imageId: ID of the source custom image.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: ID of the source custom image. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * Property imageId: ID of the source custom image.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: ID of the source custom image. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null.
         * <p>
         * @return {@code this}
         * @param destinationDescription Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null. This parameter is required.
         */
        public Builder destinationDescription(final java.lang.String destinationDescription) {
            this.props.destinationDescription(destinationDescription);
            return this;
        }
        /**
         * Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null.
         * <p>
         * @return {@code this}
         * @param destinationDescription Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null. This parameter is required.
         */
        public Builder destinationDescription(final com.aliyun.ros.cdk.core.IResolvable destinationDescription) {
            this.props.destinationDescription(destinationDescription);
            return this;
        }

        /**
         * Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.
         * <p>
         * @return {@code this}
         * @param destinationImageName Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null. This parameter is required.
         */
        public Builder destinationImageName(final java.lang.String destinationImageName) {
            this.props.destinationImageName(destinationImageName);
            return this;
        }
        /**
         * Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.
         * <p>
         * @return {@code this}
         * @param destinationImageName Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null. This parameter is required.
         */
        public Builder destinationImageName(final com.aliyun.ros.cdk.core.IResolvable destinationImageName) {
            this.props.destinationImageName(destinationImageName);
            return this;
        }

        /**
         * Property encrypted: Whether to encrypt the image.
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Whether to encrypt the image. This parameter is required.
         */
        public Builder encrypted(final java.lang.Boolean encrypted) {
            this.props.encrypted(encrypted);
            return this;
        }
        /**
         * Property encrypted: Whether to encrypt the image.
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Whether to encrypt the image. This parameter is required.
         */
        public Builder encrypted(final com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.props.encrypted(encrypted);
            return this;
        }

        /**
         * Property kmsKeyId: The ID of the key used to encrypt the image.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the key used to encrypt the image. This parameter is required.
         */
        public Builder kmsKeyId(final java.lang.String kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }
        /**
         * Property kmsKeyId: The ID of the key used to encrypt the image.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the key used to encrypt the image. This parameter is required.
         */
        public Builder kmsKeyId(final com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the image copy belongs.
         * <p>
         * If not provided, the image copy belongs to the default resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the image copy belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the image copy belongs.
         * <p>
         * If not provided, the image copy belongs to the default resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the image copy belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property sourceRegionId: ID of the region to where the source image belongs.
         * <p>
         * Default is current region ID.
         * <p>
         * @return {@code this}
         * @param sourceRegionId Property sourceRegionId: ID of the region to where the source image belongs. This parameter is required.
         */
        public Builder sourceRegionId(final java.lang.String sourceRegionId) {
            this.props.sourceRegionId(sourceRegionId);
            return this;
        }
        /**
         * Property sourceRegionId: ID of the region to where the source image belongs.
         * <p>
         * Default is current region ID.
         * <p>
         * @return {@code this}
         * @param sourceRegionId Property sourceRegionId: ID of the region to where the source image belongs. This parameter is required.
         */
        public Builder sourceRegionId(final com.aliyun.ros.cdk.core.IResolvable sourceRegionId) {
            this.props.sourceRegionId(sourceRegionId);
            return this;
        }

        /**
         * Property tag:.
         * <p>
         * @return {@code this}
         * @param tag Property tag:. This parameter is required.
         */
        public Builder tag(final com.aliyun.ros.cdk.core.IResolvable tag) {
            this.props.tag(tag);
            return this;
        }
        /**
         * Property tag:.
         * <p>
         * @return {@code this}
         * @param tag Property tag:. This parameter is required.
         */
        public Builder tag(final java.util.List<? extends java.lang.Object> tag) {
            this.props.tag(tag);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.CopyImage}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.CopyImage build() {
            return new com.aliyun.ros.cdk.ecs.CopyImage(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
