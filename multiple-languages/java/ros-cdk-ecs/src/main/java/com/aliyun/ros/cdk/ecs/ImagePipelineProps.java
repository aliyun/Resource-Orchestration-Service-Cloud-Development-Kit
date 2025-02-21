package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>ImagePipeline</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagepipeline
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:15.208Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.ImagePipelineProps")
@software.amazon.jsii.Jsii.Proxy(ImagePipelineProps.Jsii$Proxy.class)
public interface ImagePipelineProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property baseImage: The source image.
     * <p>
     * If you set BaseImageType to IMAGE, set the BaseImage parameter to the ID of a custom image.
     * If you set BaseImageType to IMAGE_FAMILY, set the BaseImage parameter to the name of an image family.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBaseImage();

    /**
     * Property baseImageType: The type of the source image.
     * <p>
     * Valid values:
     * IMAGE: image
     * IMAGE_FAMILY: image family
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBaseImageType();

    /**
     * Property addAccount: The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template.
     * <p>
     * You can specify up to 20 account IDs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddAccount() {
        return null;
    }

    /**
     * Property buildContent: The content of the image template.
     * <p>
     * The content cannot exceed 16 KB in size and can contain up to 127 commands. For more information about the commands that are supported, see the "Usage notes" section of this topic.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBuildContent() {
        return null;
    }

    /**
     * Property deleteInstanceOnFailure: Specifies whether to release the intermediate instance when the image cannot be created.
     * <p>
     * Valid values:
     * true
     * false
     * Default value: true.
     * Note If the intermediate instance cannot be started, the instance is released by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteInstanceOnFailure() {
        return null;
    }

    /**
     * Property description: The description of the image template.
     * <p>
     * The description must be 2 to 256 characters in length. It cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property executePipeline: Whether execute pipeline.
     * <p>
     * Default value is true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExecutePipeline() {
        return null;
    }

    /**
     * Property imageName: The prefix of the image name.
     * <p>
     * The prefix must be 2 to 64 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (<em>), periods (.), and hyphens (-).
     * The system generates the final complete image name that consists of the specified prefix and the ID of the build task (ExecutionId) in the format of {ImageName}</em>{ExecutionId}.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageName() {
        return null;
    }

    /**
     * Property instanceType: The instance type.
     * <p>
     * You can call the  DescribeInstanceTypes  to query instance types.
     * If you do not configure this parameter, an instance type that provides the fewest vCPUs and memory resources is automatically selected. This configuration is subject to resource availability of instance types. For example, the ecs.g6.large instance type is automatically selected. If available ecs.g6.large resources are insufficient, the ecs.g6.xlarge instance type is selected.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     * Property internetMaxBandwidthOut: The size of the outbound public bandwidth for the intermediate instance.
     * <p>
     * Unit: Mbit/s. Valid values: 0 to 100.
     * Default value: 0.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthOut() {
        return null;
    }

    /**
     * Property name: The name of the image template.
     * <p>
     * The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     * Note If you do not specify the Name parameter, the return value of ImagePipelineId is used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property systemDiskSize: The system disk size of the intermediate instance.
     * <p>
     * Unit: GiB. Valid values: 20 to 500.
     * Default value: 40.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskSize() {
        return null;
    }

    /**
     * Property tags:.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosImagePipeline.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property toRegionId: The IDs of regions to which you want to distribute the image that is created based on the image template.
     * <p>
     * You can specify up to 20 region IDs.
     * If you do not specify this parameter, the image is created only in the current region.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getToRegionId() {
        return null;
    }

    /**
     * Property vSwitchId: The ID of the vSwitch.
     * <p>
     * If you do not specify this parameter, a new VPC and vSwitch are created. Make sure that the VPC quota in your account is sufficient. For more information, see Limits and quotas.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ImagePipelineProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ImagePipelineProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ImagePipelineProps> {
        java.lang.Object baseImage;
        java.lang.Object baseImageType;
        java.lang.Object addAccount;
        java.lang.Object buildContent;
        java.lang.Object deleteInstanceOnFailure;
        java.lang.Object description;
        java.lang.Object executePipeline;
        java.lang.Object imageName;
        java.lang.Object instanceType;
        java.lang.Object internetMaxBandwidthOut;
        java.lang.Object name;
        java.lang.Object resourceGroupId;
        java.lang.Object systemDiskSize;
        java.util.List<com.aliyun.ros.cdk.ecs.RosImagePipeline.TagsProperty> tags;
        java.lang.Object toRegionId;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link ImagePipelineProps#getBaseImage}
         * @param baseImage Property baseImage: The source image. This parameter is required.
         *                  If you set BaseImageType to IMAGE, set the BaseImage parameter to the ID of a custom image.
         *                  If you set BaseImageType to IMAGE_FAMILY, set the BaseImage parameter to the name of an image family.
         * @return {@code this}
         */
        public Builder baseImage(java.lang.String baseImage) {
            this.baseImage = baseImage;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getBaseImage}
         * @param baseImage Property baseImage: The source image. This parameter is required.
         *                  If you set BaseImageType to IMAGE, set the BaseImage parameter to the ID of a custom image.
         *                  If you set BaseImageType to IMAGE_FAMILY, set the BaseImage parameter to the name of an image family.
         * @return {@code this}
         */
        public Builder baseImage(com.aliyun.ros.cdk.core.IResolvable baseImage) {
            this.baseImage = baseImage;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getBaseImageType}
         * @param baseImageType Property baseImageType: The type of the source image. This parameter is required.
         *                      Valid values:
         *                      IMAGE: image
         *                      IMAGE_FAMILY: image family
         * @return {@code this}
         */
        public Builder baseImageType(java.lang.String baseImageType) {
            this.baseImageType = baseImageType;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getBaseImageType}
         * @param baseImageType Property baseImageType: The type of the source image. This parameter is required.
         *                      Valid values:
         *                      IMAGE: image
         *                      IMAGE_FAMILY: image family
         * @return {@code this}
         */
        public Builder baseImageType(com.aliyun.ros.cdk.core.IResolvable baseImageType) {
            this.baseImageType = baseImageType;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getAddAccount}
         * @param addAccount Property addAccount: The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template.
         *                   You can specify up to 20 account IDs.
         * @return {@code this}
         */
        public Builder addAccount(com.aliyun.ros.cdk.core.IResolvable addAccount) {
            this.addAccount = addAccount;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getAddAccount}
         * @param addAccount Property addAccount: The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template.
         *                   You can specify up to 20 account IDs.
         * @return {@code this}
         */
        public Builder addAccount(java.util.List<? extends java.lang.Object> addAccount) {
            this.addAccount = addAccount;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getBuildContent}
         * @param buildContent Property buildContent: The content of the image template.
         *                     The content cannot exceed 16 KB in size and can contain up to 127 commands. For more information about the commands that are supported, see the "Usage notes" section of this topic.
         * @return {@code this}
         */
        public Builder buildContent(java.lang.String buildContent) {
            this.buildContent = buildContent;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getBuildContent}
         * @param buildContent Property buildContent: The content of the image template.
         *                     The content cannot exceed 16 KB in size and can contain up to 127 commands. For more information about the commands that are supported, see the "Usage notes" section of this topic.
         * @return {@code this}
         */
        public Builder buildContent(com.aliyun.ros.cdk.core.IResolvable buildContent) {
            this.buildContent = buildContent;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getDeleteInstanceOnFailure}
         * @param deleteInstanceOnFailure Property deleteInstanceOnFailure: Specifies whether to release the intermediate instance when the image cannot be created.
         *                                Valid values:
         *                                true
         *                                false
         *                                Default value: true.
         *                                Note If the intermediate instance cannot be started, the instance is released by default.
         * @return {@code this}
         */
        public Builder deleteInstanceOnFailure(java.lang.Boolean deleteInstanceOnFailure) {
            this.deleteInstanceOnFailure = deleteInstanceOnFailure;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getDeleteInstanceOnFailure}
         * @param deleteInstanceOnFailure Property deleteInstanceOnFailure: Specifies whether to release the intermediate instance when the image cannot be created.
         *                                Valid values:
         *                                true
         *                                false
         *                                Default value: true.
         *                                Note If the intermediate instance cannot be started, the instance is released by default.
         * @return {@code this}
         */
        public Builder deleteInstanceOnFailure(com.aliyun.ros.cdk.core.IResolvable deleteInstanceOnFailure) {
            this.deleteInstanceOnFailure = deleteInstanceOnFailure;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getDescription}
         * @param description Property description: The description of the image template.
         *                    The description must be 2 to 256 characters in length. It cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getDescription}
         * @param description Property description: The description of the image template.
         *                    The description must be 2 to 256 characters in length. It cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getExecutePipeline}
         * @param executePipeline Property executePipeline: Whether execute pipeline.
         *                        Default value is true
         * @return {@code this}
         */
        public Builder executePipeline(java.lang.Boolean executePipeline) {
            this.executePipeline = executePipeline;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getExecutePipeline}
         * @param executePipeline Property executePipeline: Whether execute pipeline.
         *                        Default value is true
         * @return {@code this}
         */
        public Builder executePipeline(com.aliyun.ros.cdk.core.IResolvable executePipeline) {
            this.executePipeline = executePipeline;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getImageName}
         * @param imageName Property imageName: The prefix of the image name.
         *                  The prefix must be 2 to 64 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (<em>), periods (.), and hyphens (-).
         *                  The system generates the final complete image name that consists of the specified prefix and the ID of the build task (ExecutionId) in the format of {ImageName}</em>{ExecutionId}.
         * @return {@code this}
         */
        public Builder imageName(java.lang.String imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getImageName}
         * @param imageName Property imageName: The prefix of the image name.
         *                  The prefix must be 2 to 64 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (<em>), periods (.), and hyphens (-).
         *                  The system generates the final complete image name that consists of the specified prefix and the ID of the build task (ExecutionId) in the format of {ImageName}</em>{ExecutionId}.
         * @return {@code this}
         */
        public Builder imageName(com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getInstanceType}
         * @param instanceType Property instanceType: The instance type.
         *                     You can call the  DescribeInstanceTypes  to query instance types.
         *                     If you do not configure this parameter, an instance type that provides the fewest vCPUs and memory resources is automatically selected. This configuration is subject to resource availability of instance types. For example, the ecs.g6.large instance type is automatically selected. If available ecs.g6.large resources are insufficient, the ecs.g6.xlarge instance type is selected.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getInstanceType}
         * @param instanceType Property instanceType: The instance type.
         *                     You can call the  DescribeInstanceTypes  to query instance types.
         *                     If you do not configure this parameter, an instance type that provides the fewest vCPUs and memory resources is automatically selected. This configuration is subject to resource availability of instance types. For example, the ecs.g6.large instance type is automatically selected. If available ecs.g6.large resources are insufficient, the ecs.g6.xlarge instance type is selected.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: The size of the outbound public bandwidth for the intermediate instance.
         *                                Unit: Mbit/s. Valid values: 0 to 100.
         *                                Default value: 0.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: The size of the outbound public bandwidth for the intermediate instance.
         *                                Unit: Mbit/s. Valid values: 0 to 100.
         *                                Default value: 0.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getName}
         * @param name Property name: The name of the image template.
         *             The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
         *             Note If you do not specify the Name parameter, the return value of ImagePipelineId is used.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getName}
         * @param name Property name: The name of the image template.
         *             The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
         *             Note If you do not specify the Name parameter, the return value of ImagePipelineId is used.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getSystemDiskSize}
         * @param systemDiskSize Property systemDiskSize: The system disk size of the intermediate instance.
         *                       Unit: GiB. Valid values: 20 to 500.
         *                       Default value: 40.
         * @return {@code this}
         */
        public Builder systemDiskSize(java.lang.Number systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getSystemDiskSize}
         * @param systemDiskSize Property systemDiskSize: The system disk size of the intermediate instance.
         *                       Unit: GiB. Valid values: 20 to 500.
         *                       Default value: 40.
         * @return {@code this}
         */
        public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getTags}
         * @param tags Property tags:.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosImagePipeline.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosImagePipeline.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getToRegionId}
         * @param toRegionId Property toRegionId: The IDs of regions to which you want to distribute the image that is created based on the image template.
         *                   You can specify up to 20 region IDs.
         *                   If you do not specify this parameter, the image is created only in the current region.
         * @return {@code this}
         */
        public Builder toRegionId(com.aliyun.ros.cdk.core.IResolvable toRegionId) {
            this.toRegionId = toRegionId;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getToRegionId}
         * @param toRegionId Property toRegionId: The IDs of regions to which you want to distribute the image that is created based on the image template.
         *                   You can specify up to 20 region IDs.
         *                   If you do not specify this parameter, the image is created only in the current region.
         * @return {@code this}
         */
        public Builder toRegionId(java.util.List<? extends java.lang.Object> toRegionId) {
            this.toRegionId = toRegionId;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch.
         *                  If you do not specify this parameter, a new VPC and vSwitch are created. Make sure that the VPC quota in your account is sufficient. For more information, see Limits and quotas.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ImagePipelineProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch.
         *                  If you do not specify this parameter, a new VPC and vSwitch are created. Make sure that the VPC quota in your account is sufficient. For more information, see Limits and quotas.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ImagePipelineProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ImagePipelineProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ImagePipelineProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ImagePipelineProps {
        private final java.lang.Object baseImage;
        private final java.lang.Object baseImageType;
        private final java.lang.Object addAccount;
        private final java.lang.Object buildContent;
        private final java.lang.Object deleteInstanceOnFailure;
        private final java.lang.Object description;
        private final java.lang.Object executePipeline;
        private final java.lang.Object imageName;
        private final java.lang.Object instanceType;
        private final java.lang.Object internetMaxBandwidthOut;
        private final java.lang.Object name;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object systemDiskSize;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosImagePipeline.TagsProperty> tags;
        private final java.lang.Object toRegionId;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.baseImage = software.amazon.jsii.Kernel.get(this, "baseImage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.baseImageType = software.amazon.jsii.Kernel.get(this, "baseImageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addAccount = software.amazon.jsii.Kernel.get(this, "addAccount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.buildContent = software.amazon.jsii.Kernel.get(this, "buildContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deleteInstanceOnFailure = software.amazon.jsii.Kernel.get(this, "deleteInstanceOnFailure", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.executePipeline = software.amazon.jsii.Kernel.get(this, "executePipeline", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageName = software.amazon.jsii.Kernel.get(this, "imageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosImagePipeline.TagsProperty.class)));
            this.toRegionId = software.amazon.jsii.Kernel.get(this, "toRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.baseImage = java.util.Objects.requireNonNull(builder.baseImage, "baseImage is required");
            this.baseImageType = java.util.Objects.requireNonNull(builder.baseImageType, "baseImageType is required");
            this.addAccount = builder.addAccount;
            this.buildContent = builder.buildContent;
            this.deleteInstanceOnFailure = builder.deleteInstanceOnFailure;
            this.description = builder.description;
            this.executePipeline = builder.executePipeline;
            this.imageName = builder.imageName;
            this.instanceType = builder.instanceType;
            this.internetMaxBandwidthOut = builder.internetMaxBandwidthOut;
            this.name = builder.name;
            this.resourceGroupId = builder.resourceGroupId;
            this.systemDiskSize = builder.systemDiskSize;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosImagePipeline.TagsProperty>)builder.tags;
            this.toRegionId = builder.toRegionId;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getBaseImage() {
            return this.baseImage;
        }

        @Override
        public final java.lang.Object getBaseImageType() {
            return this.baseImageType;
        }

        @Override
        public final java.lang.Object getAddAccount() {
            return this.addAccount;
        }

        @Override
        public final java.lang.Object getBuildContent() {
            return this.buildContent;
        }

        @Override
        public final java.lang.Object getDeleteInstanceOnFailure() {
            return this.deleteInstanceOnFailure;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getExecutePipeline() {
            return this.executePipeline;
        }

        @Override
        public final java.lang.Object getImageName() {
            return this.imageName;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getInternetMaxBandwidthOut() {
            return this.internetMaxBandwidthOut;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSystemDiskSize() {
            return this.systemDiskSize;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosImagePipeline.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getToRegionId() {
            return this.toRegionId;
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

            data.set("baseImage", om.valueToTree(this.getBaseImage()));
            data.set("baseImageType", om.valueToTree(this.getBaseImageType()));
            if (this.getAddAccount() != null) {
                data.set("addAccount", om.valueToTree(this.getAddAccount()));
            }
            if (this.getBuildContent() != null) {
                data.set("buildContent", om.valueToTree(this.getBuildContent()));
            }
            if (this.getDeleteInstanceOnFailure() != null) {
                data.set("deleteInstanceOnFailure", om.valueToTree(this.getDeleteInstanceOnFailure()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getExecutePipeline() != null) {
                data.set("executePipeline", om.valueToTree(this.getExecutePipeline()));
            }
            if (this.getImageName() != null) {
                data.set("imageName", om.valueToTree(this.getImageName()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getInternetMaxBandwidthOut() != null) {
                data.set("internetMaxBandwidthOut", om.valueToTree(this.getInternetMaxBandwidthOut()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSystemDiskSize() != null) {
                data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getToRegionId() != null) {
                data.set("toRegionId", om.valueToTree(this.getToRegionId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.ImagePipelineProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ImagePipelineProps.Jsii$Proxy that = (ImagePipelineProps.Jsii$Proxy) o;

            if (!baseImage.equals(that.baseImage)) return false;
            if (!baseImageType.equals(that.baseImageType)) return false;
            if (this.addAccount != null ? !this.addAccount.equals(that.addAccount) : that.addAccount != null) return false;
            if (this.buildContent != null ? !this.buildContent.equals(that.buildContent) : that.buildContent != null) return false;
            if (this.deleteInstanceOnFailure != null ? !this.deleteInstanceOnFailure.equals(that.deleteInstanceOnFailure) : that.deleteInstanceOnFailure != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.executePipeline != null ? !this.executePipeline.equals(that.executePipeline) : that.executePipeline != null) return false;
            if (this.imageName != null ? !this.imageName.equals(that.imageName) : that.imageName != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.systemDiskSize != null ? !this.systemDiskSize.equals(that.systemDiskSize) : that.systemDiskSize != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.toRegionId != null ? !this.toRegionId.equals(that.toRegionId) : that.toRegionId != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.baseImage.hashCode();
            result = 31 * result + (this.baseImageType.hashCode());
            result = 31 * result + (this.addAccount != null ? this.addAccount.hashCode() : 0);
            result = 31 * result + (this.buildContent != null ? this.buildContent.hashCode() : 0);
            result = 31 * result + (this.deleteInstanceOnFailure != null ? this.deleteInstanceOnFailure.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.executePipeline != null ? this.executePipeline.hashCode() : 0);
            result = 31 * result + (this.imageName != null ? this.imageName.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.systemDiskSize != null ? this.systemDiskSize.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.toRegionId != null ? this.toRegionId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
