package com.aliyun.ros.cdk.ecs.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::ECS::Images</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:25.793Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.Images")
public class Images extends com.aliyun.ros.cdk.core.Resource {

    protected Images(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Images(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::ECS::Images</code>.
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
    public Images(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.ImagesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::ECS::Images</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Images(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.ImagesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::ECS::Images</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Images(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ImageIds: The list of image IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageIds() {
        return software.amazon.jsii.Kernel.get(this, "attrImageIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Images: The list of images.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImages() {
        return software.amazon.jsii.Kernel.get(this, "attrImages", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.Images}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.Images> {
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
        private com.aliyun.ros.cdk.ecs.datasource.ImagesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property actionType: The scenario in which the image is used.
         * <p>
         * Default value: CreateEcs. Valid values:
         * CreateEcs: instance creation
         * ChangeOS: replacement of the system disk or operating system
         * <p>
         * @return {@code this}
         * @param actionType Property actionType: The scenario in which the image is used. This parameter is required.
         */
        public Builder actionType(final java.lang.String actionType) {
            this.props().actionType(actionType);
            return this;
        }
        /**
         * Property actionType: The scenario in which the image is used.
         * <p>
         * Default value: CreateEcs. Valid values:
         * CreateEcs: instance creation
         * ChangeOS: replacement of the system disk or operating system
         * <p>
         * @return {@code this}
         * @param actionType Property actionType: The scenario in which the image is used. This parameter is required.
         */
        public Builder actionType(final com.aliyun.ros.cdk.core.IResolvable actionType) {
            this.props().actionType(actionType);
            return this;
        }

        /**
         * Property architecture: The image architecture.
         * <p>
         * Valid values:
         * i38
         * x86_64
         * arm64
         * <p>
         * @return {@code this}
         * @param architecture Property architecture: The image architecture. This parameter is required.
         */
        public Builder architecture(final java.lang.String architecture) {
            this.props().architecture(architecture);
            return this;
        }
        /**
         * Property architecture: The image architecture.
         * <p>
         * Valid values:
         * i38
         * x86_64
         * arm64
         * <p>
         * @return {@code this}
         * @param architecture Property architecture: The image architecture. This parameter is required.
         */
        public Builder architecture(final com.aliyun.ros.cdk.core.IResolvable architecture) {
            this.props().architecture(architecture);
            return this;
        }

        /**
         * Property imageFamily: The name of the image family.
         * <p>
         * You can set this parameter to query images of the specified image family.
         * This parameter is empty by default.
         * <p>
         * @return {@code this}
         * @param imageFamily Property imageFamily: The name of the image family. This parameter is required.
         */
        public Builder imageFamily(final java.lang.String imageFamily) {
            this.props().imageFamily(imageFamily);
            return this;
        }
        /**
         * Property imageFamily: The name of the image family.
         * <p>
         * You can set this parameter to query images of the specified image family.
         * This parameter is empty by default.
         * <p>
         * @return {@code this}
         * @param imageFamily Property imageFamily: The name of the image family. This parameter is required.
         */
        public Builder imageFamily(final com.aliyun.ros.cdk.core.IResolvable imageFamily) {
            this.props().imageFamily(imageFamily);
            return this;
        }

        /**
         * Property imageId: The ID of the image.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The ID of the image. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props().imageId(imageId);
            return this;
        }
        /**
         * Property imageId: The ID of the image.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The ID of the image. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props().imageId(imageId);
            return this;
        }

        /**
         * Property imageName: The name of the image.
         * <p>
         * Support for fuzzy queries using *.
         * <p>
         * @return {@code this}
         * @param imageName Property imageName: The name of the image. This parameter is required.
         */
        public Builder imageName(final java.lang.String imageName) {
            this.props().imageName(imageName);
            return this;
        }
        /**
         * Property imageName: The name of the image.
         * <p>
         * Support for fuzzy queries using *.
         * <p>
         * @return {@code this}
         * @param imageName Property imageName: The name of the image. This parameter is required.
         */
        public Builder imageName(final com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.props().imageName(imageName);
            return this;
        }

        /**
         * Property imageOwnerAlias: The source of the image.
         * <p>
         * Valid values:
         * system: public images provided by Alibaba Cloud.
         * self: your custom images.
         * others: shared images from other Alibaba Cloud accounts, or community images published by other Alibaba Cloud accounts. Take note of the following items:
         * <p>
         * <ul>
         * <li>To query community images, you must set IsPublic to true.
         * To query shared images, you must set IsPublic to false or leave the IsPublic parameter empty.
         * marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are returned in the response, you can use the images without subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
         * This parameter is empty by default, which indicates that the results that match system, self, and others are returned.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param imageOwnerAlias Property imageOwnerAlias: The source of the image. This parameter is required.
         */
        public Builder imageOwnerAlias(final java.lang.String imageOwnerAlias) {
            this.props().imageOwnerAlias(imageOwnerAlias);
            return this;
        }
        /**
         * Property imageOwnerAlias: The source of the image.
         * <p>
         * Valid values:
         * system: public images provided by Alibaba Cloud.
         * self: your custom images.
         * others: shared images from other Alibaba Cloud accounts, or community images published by other Alibaba Cloud accounts. Take note of the following items:
         * <p>
         * <ul>
         * <li>To query community images, you must set IsPublic to true.
         * To query shared images, you must set IsPublic to false or leave the IsPublic parameter empty.
         * marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are returned in the response, you can use the images without subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
         * This parameter is empty by default, which indicates that the results that match system, self, and others are returned.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param imageOwnerAlias Property imageOwnerAlias: The source of the image. This parameter is required.
         */
        public Builder imageOwnerAlias(final com.aliyun.ros.cdk.core.IResolvable imageOwnerAlias) {
            this.props().imageOwnerAlias(imageOwnerAlias);
            return this;
        }

        /**
         * Property instanceType: The instance type for which the image can be used.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type for which the image can be used. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props().instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The instance type for which the image can be used.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type for which the image can be used. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props().instanceType(instanceType);
            return this;
        }

        /**
         * Property isPublic: Specifies whether to query published community images.
         * <p>
         * Valid values:
         * true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others.
         * false: queries other image types than community images. The specific image types to be queried are determined by the ImageOwnerAlias value.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param isPublic Property isPublic: Specifies whether to query published community images. This parameter is required.
         */
        public Builder isPublic(final java.lang.Boolean isPublic) {
            this.props().isPublic(isPublic);
            return this;
        }
        /**
         * Property isPublic: Specifies whether to query published community images.
         * <p>
         * Valid values:
         * true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others.
         * false: queries other image types than community images. The specific image types to be queried are determined by the ImageOwnerAlias value.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param isPublic Property isPublic: Specifies whether to query published community images. This parameter is required.
         */
        public Builder isPublic(final com.aliyun.ros.cdk.core.IResolvable isPublic) {
            this.props().isPublic(isPublic);
            return this;
        }

        /**
         * Property isSupportCloudinit: Specifies whether the image supports cloud-init.
         * <p>
         * @return {@code this}
         * @param isSupportCloudinit Property isSupportCloudinit: Specifies whether the image supports cloud-init. This parameter is required.
         */
        public Builder isSupportCloudinit(final java.lang.Boolean isSupportCloudinit) {
            this.props().isSupportCloudinit(isSupportCloudinit);
            return this;
        }
        /**
         * Property isSupportCloudinit: Specifies whether the image supports cloud-init.
         * <p>
         * @return {@code this}
         * @param isSupportCloudinit Property isSupportCloudinit: Specifies whether the image supports cloud-init. This parameter is required.
         */
        public Builder isSupportCloudinit(final com.aliyun.ros.cdk.core.IResolvable isSupportCloudinit) {
            this.props().isSupportCloudinit(isSupportCloudinit);
            return this;
        }

        /**
         * Property isSupportIoOptimized: Specifies whether the image can be used on I/O optimized instances.
         * <p>
         * @return {@code this}
         * @param isSupportIoOptimized Property isSupportIoOptimized: Specifies whether the image can be used on I/O optimized instances. This parameter is required.
         */
        public Builder isSupportIoOptimized(final java.lang.Boolean isSupportIoOptimized) {
            this.props().isSupportIoOptimized(isSupportIoOptimized);
            return this;
        }
        /**
         * Property isSupportIoOptimized: Specifies whether the image can be used on I/O optimized instances.
         * <p>
         * @return {@code this}
         * @param isSupportIoOptimized Property isSupportIoOptimized: Specifies whether the image can be used on I/O optimized instances. This parameter is required.
         */
        public Builder isSupportIoOptimized(final com.aliyun.ros.cdk.core.IResolvable isSupportIoOptimized) {
            this.props().isSupportIoOptimized(isSupportIoOptimized);
            return this;
        }

        /**
         * Property osType: The operating system type of the image.
         * <p>
         * Valid values:
         * windows
         * linux
         * <p>
         * @return {@code this}
         * @param osType Property osType: The operating system type of the image. This parameter is required.
         */
        public Builder osType(final java.lang.String osType) {
            this.props().osType(osType);
            return this;
        }
        /**
         * Property osType: The operating system type of the image.
         * <p>
         * Valid values:
         * windows
         * linux
         * <p>
         * @return {@code this}
         * @param osType Property osType: The operating system type of the image. This parameter is required.
         */
        public Builder osType(final com.aliyun.ros.cdk.core.IResolvable osType) {
            this.props().osType(osType);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the custom image belongs.
         * <p>
         * If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the custom image belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the custom image belongs.
         * <p>
         * If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the custom image belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property snapshotId: The ID of the snapshot used to create the custom image.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: The ID of the snapshot used to create the custom image. This parameter is required.
         */
        public Builder snapshotId(final java.lang.String snapshotId) {
            this.props().snapshotId(snapshotId);
            return this;
        }
        /**
         * Property snapshotId: The ID of the snapshot used to create the custom image.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: The ID of the snapshot used to create the custom image. This parameter is required.
         */
        public Builder snapshotId(final com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.props().snapshotId(snapshotId);
            return this;
        }

        /**
         * Property status: The state of the image.
         * <p>
         * Default value: Available. Valid values:
         * Creating: The image is being created.
         * Waiting: The image is waiting to be processed.
         * Available: The image is available.
         * UnAvailable: The image is unavailable.
         * CreateFailed: The image failed to be created.
         * Deprecated: The image is discontinued.
         * You can specify multiple values. Separate multiple values with commas (,).
         * <p>
         * @return {@code this}
         * @param status Property status: The state of the image. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props().status(status);
            return this;
        }
        /**
         * Property status: The state of the image.
         * <p>
         * Default value: Available. Valid values:
         * Creating: The image is being created.
         * Waiting: The image is waiting to be processed.
         * Available: The image is available.
         * UnAvailable: The image is unavailable.
         * CreateFailed: The image failed to be created.
         * Deprecated: The image is discontinued.
         * You can specify multiple values. Separate multiple values with commas (,).
         * <p>
         * @return {@code this}
         * @param status Property status: The state of the image. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props().status(status);
            return this;
        }

        /**
         * Property tags: Tags of image.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of image. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosImages.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance.
         * <p>
         * Valid values:
         * instance: The image is already in use and running on an ECS instance.
         * none: The image is not in use.
         * <p>
         * @return {@code this}
         * @param usage Property usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance. This parameter is required.
         */
        public Builder usage(final java.lang.String usage) {
            this.props().usage(usage);
            return this;
        }
        /**
         * Property usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance.
         * <p>
         * Valid values:
         * instance: The image is already in use and running on an ECS instance.
         * none: The image is not in use.
         * <p>
         * @return {@code this}
         * @param usage Property usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance. This parameter is required.
         */
        public Builder usage(final com.aliyun.ros.cdk.core.IResolvable usage) {
            this.props().usage(usage);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.Images}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.Images build() {
            return new com.aliyun.ros.cdk.ecs.datasource.Images(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.datasource.ImagesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.datasource.ImagesProps.Builder();
            }
            return this.props;
        }
    }
}
