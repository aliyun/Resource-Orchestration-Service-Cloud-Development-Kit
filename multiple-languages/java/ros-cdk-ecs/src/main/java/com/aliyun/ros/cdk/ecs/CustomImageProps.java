package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>CustomImage</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-customimage
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:55.148Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.CustomImageProps")
@software.amazon.jsii.Jsii.Proxy(CustomImageProps.Jsii$Proxy.class)
public interface CustomImageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture.
     * <p>
     * Ranges:
     * I386
     * X86_64 (default)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArchitecture() {
        return null;
    }

    /**
     * Property bootMode: Modify the startup mode of the image.
     * <p>
     * Ranges:
     * BIOS: BIOS boot mode.
     * UEFI: UEFI boot mode.
     * You need to know the startup mode supported by the specified image. After modifying the startup mode through this parameter, it must match the startup mode supported by the image itself so that the instance can start normally.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBootMode() {
        return null;
    }

    /**
     * Property description: The description of the image.
     * <p>
     * It can be [0, 256] letters in length.
     * It cannot begin with http:// or https://.
     * Default value: null.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property detectionStrategy: Image detection policy.
     * <p>
     * If this parameter is not configured, detection will not be triggered. Only Standard detection mode is supported.Currently, most Linux/Windows versions are supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDetectionStrategy() {
        return null;
    }

    /**
     * Property diskDeviceMapping:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskDeviceMapping() {
        return null;
    }

    /**
     * Property features: Mirror feature-related properties.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFeatures() {
        return null;
    }

    /**
     * Property imageFamily: The name of the image family of the image.
     * <p>
     * The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It cannot contain http:// or https://. It must start with a letter and cannot start with acs: or aliyun.This parameter is empty by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageFamily() {
        return null;
    }

    /**
     * Property imageName: Image name.
     * <p>
     * Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
     * Cannot begin with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageName() {
        return null;
    }

    /**
     * Property imageVersion: Image version.
     * <p>
     * When you specify an instance ID (InstanceId) and the image of the instance is a cloud market image or a custom image created from a cloud market image. This parameter must be the same as the ImageVersion of the current instance image or set to empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageVersion() {
        return null;
    }

    /**
     * Property instanceId: Instance ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPlatform() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which to assign the custom image.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property snapshotId: The snapshot ID.
     * <p>
     * A custom image is created from the specified snapshot.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotId() {
        return null;
    }

    /**
     * Property sourceRegionId: ID of the region to where the instance/snapshot belongs.
     * <p>
     * Default is current region ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceRegionId() {
        return null;
    }

    /**
     * Property tag:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTag() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CustomImageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CustomImageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CustomImageProps> {
        java.lang.Object architecture;
        java.lang.Object bootMode;
        java.lang.Object description;
        java.lang.Object detectionStrategy;
        java.lang.Object diskDeviceMapping;
        java.lang.Object features;
        java.lang.Object imageFamily;
        java.lang.Object imageName;
        java.lang.Object imageVersion;
        java.lang.Object instanceId;
        java.lang.Object platform;
        java.lang.Object resourceGroupId;
        java.lang.Object snapshotId;
        java.lang.Object sourceRegionId;
        java.lang.Object tag;

        /**
         * Sets the value of {@link CustomImageProps#getArchitecture}
         * @param architecture Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture.
         *                     Ranges:
         *                     I386
         *                     X86_64 (default)
         * @return {@code this}
         */
        public Builder architecture(java.lang.String architecture) {
            this.architecture = architecture;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getArchitecture}
         * @param architecture Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture.
         *                     Ranges:
         *                     I386
         *                     X86_64 (default)
         * @return {@code this}
         */
        public Builder architecture(com.aliyun.ros.cdk.core.IResolvable architecture) {
            this.architecture = architecture;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getBootMode}
         * @param bootMode Property bootMode: Modify the startup mode of the image.
         *                 Ranges:
         *                 BIOS: BIOS boot mode.
         *                 UEFI: UEFI boot mode.
         *                 You need to know the startup mode supported by the specified image. After modifying the startup mode through this parameter, it must match the startup mode supported by the image itself so that the instance can start normally.
         * @return {@code this}
         */
        public Builder bootMode(java.lang.String bootMode) {
            this.bootMode = bootMode;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getBootMode}
         * @param bootMode Property bootMode: Modify the startup mode of the image.
         *                 Ranges:
         *                 BIOS: BIOS boot mode.
         *                 UEFI: UEFI boot mode.
         *                 You need to know the startup mode supported by the specified image. After modifying the startup mode through this parameter, it must match the startup mode supported by the image itself so that the instance can start normally.
         * @return {@code this}
         */
        public Builder bootMode(com.aliyun.ros.cdk.core.IResolvable bootMode) {
            this.bootMode = bootMode;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getDescription}
         * @param description Property description: The description of the image.
         *                    It can be [0, 256] letters in length.
         *                    It cannot begin with http:// or https://.
         *                    Default value: null.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getDescription}
         * @param description Property description: The description of the image.
         *                    It can be [0, 256] letters in length.
         *                    It cannot begin with http:// or https://.
         *                    Default value: null.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getDetectionStrategy}
         * @param detectionStrategy Property detectionStrategy: Image detection policy.
         *                          If this parameter is not configured, detection will not be triggered. Only Standard detection mode is supported.Currently, most Linux/Windows versions are supported.
         * @return {@code this}
         */
        public Builder detectionStrategy(java.lang.String detectionStrategy) {
            this.detectionStrategy = detectionStrategy;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getDetectionStrategy}
         * @param detectionStrategy Property detectionStrategy: Image detection policy.
         *                          If this parameter is not configured, detection will not be triggered. Only Standard detection mode is supported.Currently, most Linux/Windows versions are supported.
         * @return {@code this}
         */
        public Builder detectionStrategy(com.aliyun.ros.cdk.core.IResolvable detectionStrategy) {
            this.detectionStrategy = detectionStrategy;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getDiskDeviceMapping}
         * @param diskDeviceMapping Property diskDeviceMapping:.
         * @return {@code this}
         */
        public Builder diskDeviceMapping(com.aliyun.ros.cdk.core.IResolvable diskDeviceMapping) {
            this.diskDeviceMapping = diskDeviceMapping;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getDiskDeviceMapping}
         * @param diskDeviceMapping Property diskDeviceMapping:.
         * @return {@code this}
         */
        public Builder diskDeviceMapping(java.util.List<? extends java.lang.Object> diskDeviceMapping) {
            this.diskDeviceMapping = diskDeviceMapping;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getFeatures}
         * @param features Property features: Mirror feature-related properties.
         * @return {@code this}
         */
        public Builder features(com.aliyun.ros.cdk.core.IResolvable features) {
            this.features = features;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getFeatures}
         * @param features Property features: Mirror feature-related properties.
         * @return {@code this}
         */
        public Builder features(com.aliyun.ros.cdk.ecs.RosCustomImage.FeaturesProperty features) {
            this.features = features;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getImageFamily}
         * @param imageFamily Property imageFamily: The name of the image family of the image.
         *                    The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It cannot contain http:// or https://. It must start with a letter and cannot start with acs: or aliyun.This parameter is empty by default.
         * @return {@code this}
         */
        public Builder imageFamily(java.lang.String imageFamily) {
            this.imageFamily = imageFamily;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getImageFamily}
         * @param imageFamily Property imageFamily: The name of the image family of the image.
         *                    The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It cannot contain http:// or https://. It must start with a letter and cannot start with acs: or aliyun.This parameter is empty by default.
         * @return {@code this}
         */
        public Builder imageFamily(com.aliyun.ros.cdk.core.IResolvable imageFamily) {
            this.imageFamily = imageFamily;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getImageName}
         * @param imageName Property imageName: Image name.
         *                  Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
         *                  Cannot begin with http:// or https://.
         * @return {@code this}
         */
        public Builder imageName(java.lang.String imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getImageName}
         * @param imageName Property imageName: Image name.
         *                  Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
         *                  Cannot begin with http:// or https://.
         * @return {@code this}
         */
        public Builder imageName(com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getImageVersion}
         * @param imageVersion Property imageVersion: Image version.
         *                     When you specify an instance ID (InstanceId) and the image of the instance is a cloud market image or a custom image created from a cloud market image. This parameter must be the same as the ImageVersion of the current instance image or set to empty.
         * @return {@code this}
         */
        public Builder imageVersion(java.lang.String imageVersion) {
            this.imageVersion = imageVersion;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getImageVersion}
         * @param imageVersion Property imageVersion: Image version.
         *                     When you specify an instance ID (InstanceId) and the image of the instance is a cloud market image or a custom image created from a cloud market image. This parameter must be the same as the ImageVersion of the current instance image or set to empty.
         * @return {@code this}
         */
        public Builder imageVersion(com.aliyun.ros.cdk.core.IResolvable imageVersion) {
            this.imageVersion = imageVersion;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getInstanceId}
         * @param instanceId Property instanceId: Instance ID.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getInstanceId}
         * @param instanceId Property instanceId: Instance ID.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getPlatform}
         * @param platform Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform.
         * @return {@code this}
         */
        public Builder platform(java.lang.String platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getPlatform}
         * @param platform Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform.
         * @return {@code this}
         */
        public Builder platform(com.aliyun.ros.cdk.core.IResolvable platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the custom image.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the custom image.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getSnapshotId}
         * @param snapshotId Property snapshotId: The snapshot ID.
         *                   A custom image is created from the specified snapshot.
         * @return {@code this}
         */
        public Builder snapshotId(java.lang.String snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getSnapshotId}
         * @param snapshotId Property snapshotId: The snapshot ID.
         *                   A custom image is created from the specified snapshot.
         * @return {@code this}
         */
        public Builder snapshotId(com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getSourceRegionId}
         * @param sourceRegionId Property sourceRegionId: ID of the region to where the instance/snapshot belongs.
         *                       Default is current region ID.
         * @return {@code this}
         */
        public Builder sourceRegionId(java.lang.String sourceRegionId) {
            this.sourceRegionId = sourceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getSourceRegionId}
         * @param sourceRegionId Property sourceRegionId: ID of the region to where the instance/snapshot belongs.
         *                       Default is current region ID.
         * @return {@code this}
         */
        public Builder sourceRegionId(com.aliyun.ros.cdk.core.IResolvable sourceRegionId) {
            this.sourceRegionId = sourceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getTag}
         * @param tag Property tag:.
         * @return {@code this}
         */
        public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link CustomImageProps#getTag}
         * @param tag Property tag:.
         * @return {@code this}
         */
        public Builder tag(java.util.List<? extends java.lang.Object> tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CustomImageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CustomImageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CustomImageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomImageProps {
        private final java.lang.Object architecture;
        private final java.lang.Object bootMode;
        private final java.lang.Object description;
        private final java.lang.Object detectionStrategy;
        private final java.lang.Object diskDeviceMapping;
        private final java.lang.Object features;
        private final java.lang.Object imageFamily;
        private final java.lang.Object imageName;
        private final java.lang.Object imageVersion;
        private final java.lang.Object instanceId;
        private final java.lang.Object platform;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object snapshotId;
        private final java.lang.Object sourceRegionId;
        private final java.lang.Object tag;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.architecture = software.amazon.jsii.Kernel.get(this, "architecture", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bootMode = software.amazon.jsii.Kernel.get(this, "bootMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.detectionStrategy = software.amazon.jsii.Kernel.get(this, "detectionStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskDeviceMapping = software.amazon.jsii.Kernel.get(this, "diskDeviceMapping", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.features = software.amazon.jsii.Kernel.get(this, "features", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageFamily = software.amazon.jsii.Kernel.get(this, "imageFamily", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageName = software.amazon.jsii.Kernel.get(this, "imageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageVersion = software.amazon.jsii.Kernel.get(this, "imageVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.platform = software.amazon.jsii.Kernel.get(this, "platform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceRegionId = software.amazon.jsii.Kernel.get(this, "sourceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tag = software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.architecture = builder.architecture;
            this.bootMode = builder.bootMode;
            this.description = builder.description;
            this.detectionStrategy = builder.detectionStrategy;
            this.diskDeviceMapping = builder.diskDeviceMapping;
            this.features = builder.features;
            this.imageFamily = builder.imageFamily;
            this.imageName = builder.imageName;
            this.imageVersion = builder.imageVersion;
            this.instanceId = builder.instanceId;
            this.platform = builder.platform;
            this.resourceGroupId = builder.resourceGroupId;
            this.snapshotId = builder.snapshotId;
            this.sourceRegionId = builder.sourceRegionId;
            this.tag = builder.tag;
        }

        @Override
        public final java.lang.Object getArchitecture() {
            return this.architecture;
        }

        @Override
        public final java.lang.Object getBootMode() {
            return this.bootMode;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDetectionStrategy() {
            return this.detectionStrategy;
        }

        @Override
        public final java.lang.Object getDiskDeviceMapping() {
            return this.diskDeviceMapping;
        }

        @Override
        public final java.lang.Object getFeatures() {
            return this.features;
        }

        @Override
        public final java.lang.Object getImageFamily() {
            return this.imageFamily;
        }

        @Override
        public final java.lang.Object getImageName() {
            return this.imageName;
        }

        @Override
        public final java.lang.Object getImageVersion() {
            return this.imageVersion;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getPlatform() {
            return this.platform;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSnapshotId() {
            return this.snapshotId;
        }

        @Override
        public final java.lang.Object getSourceRegionId() {
            return this.sourceRegionId;
        }

        @Override
        public final java.lang.Object getTag() {
            return this.tag;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getArchitecture() != null) {
                data.set("architecture", om.valueToTree(this.getArchitecture()));
            }
            if (this.getBootMode() != null) {
                data.set("bootMode", om.valueToTree(this.getBootMode()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDetectionStrategy() != null) {
                data.set("detectionStrategy", om.valueToTree(this.getDetectionStrategy()));
            }
            if (this.getDiskDeviceMapping() != null) {
                data.set("diskDeviceMapping", om.valueToTree(this.getDiskDeviceMapping()));
            }
            if (this.getFeatures() != null) {
                data.set("features", om.valueToTree(this.getFeatures()));
            }
            if (this.getImageFamily() != null) {
                data.set("imageFamily", om.valueToTree(this.getImageFamily()));
            }
            if (this.getImageName() != null) {
                data.set("imageName", om.valueToTree(this.getImageName()));
            }
            if (this.getImageVersion() != null) {
                data.set("imageVersion", om.valueToTree(this.getImageVersion()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getPlatform() != null) {
                data.set("platform", om.valueToTree(this.getPlatform()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSnapshotId() != null) {
                data.set("snapshotId", om.valueToTree(this.getSnapshotId()));
            }
            if (this.getSourceRegionId() != null) {
                data.set("sourceRegionId", om.valueToTree(this.getSourceRegionId()));
            }
            if (this.getTag() != null) {
                data.set("tag", om.valueToTree(this.getTag()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.CustomImageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CustomImageProps.Jsii$Proxy that = (CustomImageProps.Jsii$Proxy) o;

            if (this.architecture != null ? !this.architecture.equals(that.architecture) : that.architecture != null) return false;
            if (this.bootMode != null ? !this.bootMode.equals(that.bootMode) : that.bootMode != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.detectionStrategy != null ? !this.detectionStrategy.equals(that.detectionStrategy) : that.detectionStrategy != null) return false;
            if (this.diskDeviceMapping != null ? !this.diskDeviceMapping.equals(that.diskDeviceMapping) : that.diskDeviceMapping != null) return false;
            if (this.features != null ? !this.features.equals(that.features) : that.features != null) return false;
            if (this.imageFamily != null ? !this.imageFamily.equals(that.imageFamily) : that.imageFamily != null) return false;
            if (this.imageName != null ? !this.imageName.equals(that.imageName) : that.imageName != null) return false;
            if (this.imageVersion != null ? !this.imageVersion.equals(that.imageVersion) : that.imageVersion != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.platform != null ? !this.platform.equals(that.platform) : that.platform != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.snapshotId != null ? !this.snapshotId.equals(that.snapshotId) : that.snapshotId != null) return false;
            if (this.sourceRegionId != null ? !this.sourceRegionId.equals(that.sourceRegionId) : that.sourceRegionId != null) return false;
            return this.tag != null ? this.tag.equals(that.tag) : that.tag == null;
        }

        @Override
        public final int hashCode() {
            int result = this.architecture != null ? this.architecture.hashCode() : 0;
            result = 31 * result + (this.bootMode != null ? this.bootMode.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.detectionStrategy != null ? this.detectionStrategy.hashCode() : 0);
            result = 31 * result + (this.diskDeviceMapping != null ? this.diskDeviceMapping.hashCode() : 0);
            result = 31 * result + (this.features != null ? this.features.hashCode() : 0);
            result = 31 * result + (this.imageFamily != null ? this.imageFamily.hashCode() : 0);
            result = 31 * result + (this.imageName != null ? this.imageName.hashCode() : 0);
            result = 31 * result + (this.imageVersion != null ? this.imageVersion.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.platform != null ? this.platform.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.snapshotId != null ? this.snapshotId.hashCode() : 0);
            result = 31 * result + (this.sourceRegionId != null ? this.sourceRegionId.hashCode() : 0);
            result = 31 * result + (this.tag != null ? this.tag.hashCode() : 0);
            return result;
        }
    }
}
