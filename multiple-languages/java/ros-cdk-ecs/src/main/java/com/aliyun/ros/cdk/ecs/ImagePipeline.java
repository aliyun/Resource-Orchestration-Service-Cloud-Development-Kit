package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::ImagePipeline</code>, which is used to create an image template.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:28.962Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.ImagePipeline")
public class ImagePipeline extends com.aliyun.ros.cdk.core.Resource {

    protected ImagePipeline(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ImagePipeline(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ImagePipeline(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.ImagePipelineProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ImagePipeline(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.ImagePipelineProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ImagePipelineId: The ID of the image template.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImagePipelineId() {
        return software.amazon.jsii.Kernel.get(this, "attrImagePipelineId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.ImagePipelineProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.ImagePipelineProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.ImagePipelineProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.ImagePipeline}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.ImagePipeline> {
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
        private final com.aliyun.ros.cdk.ecs.ImagePipelineProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.ImagePipelineProps.Builder();
        }

        /**
         * Property baseImage: The source image.
         * <p>
         * If you set BaseImageType to IMAGE, set the BaseImage parameter to the ID of a custom image.
         * If you set BaseImageType to IMAGE_FAMILY, set the BaseImage parameter to the name of an image family.
         * <p>
         * @return {@code this}
         * @param baseImage Property baseImage: The source image. This parameter is required.
         */
        public Builder baseImage(final java.lang.String baseImage) {
            this.props.baseImage(baseImage);
            return this;
        }
        /**
         * Property baseImage: The source image.
         * <p>
         * If you set BaseImageType to IMAGE, set the BaseImage parameter to the ID of a custom image.
         * If you set BaseImageType to IMAGE_FAMILY, set the BaseImage parameter to the name of an image family.
         * <p>
         * @return {@code this}
         * @param baseImage Property baseImage: The source image. This parameter is required.
         */
        public Builder baseImage(final com.aliyun.ros.cdk.core.IResolvable baseImage) {
            this.props.baseImage(baseImage);
            return this;
        }

        /**
         * Property baseImageType: The type of the source image.
         * <p>
         * Valid values:
         * IMAGE: image
         * IMAGE_FAMILY: image family
         * <p>
         * @return {@code this}
         * @param baseImageType Property baseImageType: The type of the source image. This parameter is required.
         */
        public Builder baseImageType(final java.lang.String baseImageType) {
            this.props.baseImageType(baseImageType);
            return this;
        }
        /**
         * Property baseImageType: The type of the source image.
         * <p>
         * Valid values:
         * IMAGE: image
         * IMAGE_FAMILY: image family
         * <p>
         * @return {@code this}
         * @param baseImageType Property baseImageType: The type of the source image. This parameter is required.
         */
        public Builder baseImageType(final com.aliyun.ros.cdk.core.IResolvable baseImageType) {
            this.props.baseImageType(baseImageType);
            return this;
        }

        /**
         * Property addAccount: The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template.
         * <p>
         * You can specify up to 20 account IDs.
         * <p>
         * @return {@code this}
         * @param addAccount Property addAccount: The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template. This parameter is required.
         */
        public Builder addAccount(final com.aliyun.ros.cdk.core.IResolvable addAccount) {
            this.props.addAccount(addAccount);
            return this;
        }
        /**
         * Property addAccount: The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template.
         * <p>
         * You can specify up to 20 account IDs.
         * <p>
         * @return {@code this}
         * @param addAccount Property addAccount: The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template. This parameter is required.
         */
        public Builder addAccount(final java.util.List<? extends java.lang.Object> addAccount) {
            this.props.addAccount(addAccount);
            return this;
        }

        /**
         * Property buildContent: The content of the image template.
         * <p>
         * The content cannot exceed 16 KB in size and can contain up to 127 commands. For more information about the commands that are supported, see the "Usage notes" section of this topic.
         * <p>
         * @return {@code this}
         * @param buildContent Property buildContent: The content of the image template. This parameter is required.
         */
        public Builder buildContent(final java.lang.String buildContent) {
            this.props.buildContent(buildContent);
            return this;
        }
        /**
         * Property buildContent: The content of the image template.
         * <p>
         * The content cannot exceed 16 KB in size and can contain up to 127 commands. For more information about the commands that are supported, see the "Usage notes" section of this topic.
         * <p>
         * @return {@code this}
         * @param buildContent Property buildContent: The content of the image template. This parameter is required.
         */
        public Builder buildContent(final com.aliyun.ros.cdk.core.IResolvable buildContent) {
            this.props.buildContent(buildContent);
            return this;
        }

        /**
         * Property deleteInstanceOnFailure: Specifies whether to release the intermediate instance when the image cannot be created.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: true.
         * Note If the intermediate instance cannot be started, the instance is released by default.
         * <p>
         * @return {@code this}
         * @param deleteInstanceOnFailure Property deleteInstanceOnFailure: Specifies whether to release the intermediate instance when the image cannot be created. This parameter is required.
         */
        public Builder deleteInstanceOnFailure(final java.lang.Boolean deleteInstanceOnFailure) {
            this.props.deleteInstanceOnFailure(deleteInstanceOnFailure);
            return this;
        }
        /**
         * Property deleteInstanceOnFailure: Specifies whether to release the intermediate instance when the image cannot be created.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: true.
         * Note If the intermediate instance cannot be started, the instance is released by default.
         * <p>
         * @return {@code this}
         * @param deleteInstanceOnFailure Property deleteInstanceOnFailure: Specifies whether to release the intermediate instance when the image cannot be created. This parameter is required.
         */
        public Builder deleteInstanceOnFailure(final com.aliyun.ros.cdk.core.IResolvable deleteInstanceOnFailure) {
            this.props.deleteInstanceOnFailure(deleteInstanceOnFailure);
            return this;
        }

        /**
         * Property description: The description of the image template.
         * <p>
         * The description must be 2 to 256 characters in length. It cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the image template. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the image template.
         * <p>
         * The description must be 2 to 256 characters in length. It cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the image template. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property executePipeline: Whether execute pipeline.
         * <p>
         * Default value is true
         * <p>
         * @return {@code this}
         * @param executePipeline Property executePipeline: Whether execute pipeline. This parameter is required.
         */
        public Builder executePipeline(final java.lang.Boolean executePipeline) {
            this.props.executePipeline(executePipeline);
            return this;
        }
        /**
         * Property executePipeline: Whether execute pipeline.
         * <p>
         * Default value is true
         * <p>
         * @return {@code this}
         * @param executePipeline Property executePipeline: Whether execute pipeline. This parameter is required.
         */
        public Builder executePipeline(final com.aliyun.ros.cdk.core.IResolvable executePipeline) {
            this.props.executePipeline(executePipeline);
            return this;
        }

        /**
         * Property imageName: The prefix of the image name.
         * <p>
         * The prefix must be 2 to 64 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (<em>), periods (.), and hyphens (-).
         * The system generates the final complete image name that consists of the specified prefix and the ID of the build task (ExecutionId) in the format of {ImageName}</em>{ExecutionId}.
         * <p>
         * @return {@code this}
         * @param imageName Property imageName: The prefix of the image name. This parameter is required.
         */
        public Builder imageName(final java.lang.String imageName) {
            this.props.imageName(imageName);
            return this;
        }
        /**
         * Property imageName: The prefix of the image name.
         * <p>
         * The prefix must be 2 to 64 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (<em>), periods (.), and hyphens (-).
         * The system generates the final complete image name that consists of the specified prefix and the ID of the build task (ExecutionId) in the format of {ImageName}</em>{ExecutionId}.
         * <p>
         * @return {@code this}
         * @param imageName Property imageName: The prefix of the image name. This parameter is required.
         */
        public Builder imageName(final com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.props.imageName(imageName);
            return this;
        }

        /**
         * Property instanceType: The instance type.
         * <p>
         * You can call the  DescribeInstanceTypes  to query instance types.
         * If you do not configure this parameter, an instance type that provides the fewest vCPUs and memory resources is automatically selected. This configuration is subject to resource availability of instance types. For example, the ecs.g6.large instance type is automatically selected. If available ecs.g6.large resources are insufficient, the ecs.g6.xlarge instance type is selected.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The instance type.
         * <p>
         * You can call the  DescribeInstanceTypes  to query instance types.
         * If you do not configure this parameter, an instance type that provides the fewest vCPUs and memory resources is automatically selected. This configuration is subject to resource availability of instance types. For example, the ecs.g6.large instance type is automatically selected. If available ecs.g6.large resources are insufficient, the ecs.g6.xlarge instance type is selected.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property internetMaxBandwidthOut: The size of the outbound public bandwidth for the intermediate instance.
         * <p>
         * Unit: Mbit/s. Valid values: 0 to 100.
         * Default value: 0.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: The size of the outbound public bandwidth for the intermediate instance. This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final java.lang.Number internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }
        /**
         * Property internetMaxBandwidthOut: The size of the outbound public bandwidth for the intermediate instance.
         * <p>
         * Unit: Mbit/s. Valid values: 0 to 100.
         * Default value: 0.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: The size of the outbound public bandwidth for the intermediate instance. This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }

        /**
         * Property name: The name of the image template.
         * <p>
         * The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
         * Note If you do not specify the Name parameter, the return value of ImagePipelineId is used.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the image template. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the image template.
         * <p>
         * The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
         * Note If you do not specify the Name parameter, the return value of ImagePipelineId is used.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the image template. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property systemDiskSize: The system disk size of the intermediate instance.
         * <p>
         * Unit: GiB. Valid values: 20 to 500.
         * Default value: 40.
         * <p>
         * @return {@code this}
         * @param systemDiskSize Property systemDiskSize: The system disk size of the intermediate instance. This parameter is required.
         */
        public Builder systemDiskSize(final java.lang.Number systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }
        /**
         * Property systemDiskSize: The system disk size of the intermediate instance.
         * <p>
         * Unit: GiB. Valid values: 20 to 500.
         * Default value: 40.
         * <p>
         * @return {@code this}
         * @param systemDiskSize Property systemDiskSize: The system disk size of the intermediate instance. This parameter is required.
         */
        public Builder systemDiskSize(final com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }

        /**
         * Property tags:.
         * <p>
         * @return {@code this}
         * @param tags Property tags:. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosImagePipeline.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property toRegionId: The IDs of regions to which you want to distribute the image that is created based on the image template.
         * <p>
         * You can specify up to 20 region IDs.
         * If you do not specify this parameter, the image is created only in the current region.
         * <p>
         * @return {@code this}
         * @param toRegionId Property toRegionId: The IDs of regions to which you want to distribute the image that is created based on the image template. This parameter is required.
         */
        public Builder toRegionId(final com.aliyun.ros.cdk.core.IResolvable toRegionId) {
            this.props.toRegionId(toRegionId);
            return this;
        }
        /**
         * Property toRegionId: The IDs of regions to which you want to distribute the image that is created based on the image template.
         * <p>
         * You can specify up to 20 region IDs.
         * If you do not specify this parameter, the image is created only in the current region.
         * <p>
         * @return {@code this}
         * @param toRegionId Property toRegionId: The IDs of regions to which you want to distribute the image that is created based on the image template. This parameter is required.
         */
        public Builder toRegionId(final java.util.List<? extends java.lang.Object> toRegionId) {
            this.props.toRegionId(toRegionId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the vSwitch.
         * <p>
         * If you do not specify this parameter, a new VPC and vSwitch are created. Make sure that the VPC quota in your account is sufficient. For more information, see Limits and quotas.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the vSwitch.
         * <p>
         * If you do not specify this parameter, a new VPC and vSwitch are created. Make sure that the VPC quota in your account is sufficient. For more information, see Limits and quotas.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.ImagePipeline}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.ImagePipeline build() {
            return new com.aliyun.ros.cdk.ecs.ImagePipeline(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
