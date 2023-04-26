package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::CustomImage`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:50.397Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosCustomImageProps")
@software.amazon.jsii.Jsii.Proxy(RosCustomImageProps.Jsii$Proxy.class)
public interface RosCustomImageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArchitecture() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskDeviceMapping() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageFamily() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPlatform() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTag() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCustomImageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCustomImageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCustomImageProps> {
        java.lang.Object architecture;
        java.lang.Object description;
        java.lang.Object diskDeviceMapping;
        java.lang.Object imageFamily;
        java.lang.Object imageName;
        java.lang.Object instanceId;
        java.lang.Object platform;
        java.lang.Object resourceGroupId;
        java.lang.Object snapshotId;
        java.lang.Object sourceRegionId;
        java.lang.Object tag;

        /**
         * Sets the value of {@link RosCustomImageProps#getArchitecture}
         * @param architecture the value to be set.
         * @return {@code this}
         */
        public Builder architecture(java.lang.String architecture) {
            this.architecture = architecture;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getArchitecture}
         * @param architecture the value to be set.
         * @return {@code this}
         */
        public Builder architecture(com.aliyun.ros.cdk.core.IResolvable architecture) {
            this.architecture = architecture;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getDiskDeviceMapping}
         * @param diskDeviceMapping the value to be set.
         * @return {@code this}
         */
        public Builder diskDeviceMapping(com.aliyun.ros.cdk.core.IResolvable diskDeviceMapping) {
            this.diskDeviceMapping = diskDeviceMapping;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getDiskDeviceMapping}
         * @param diskDeviceMapping the value to be set.
         * @return {@code this}
         */
        public Builder diskDeviceMapping(java.util.List<? extends java.lang.Object> diskDeviceMapping) {
            this.diskDeviceMapping = diskDeviceMapping;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getImageFamily}
         * @param imageFamily the value to be set.
         * @return {@code this}
         */
        public Builder imageFamily(java.lang.String imageFamily) {
            this.imageFamily = imageFamily;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getImageFamily}
         * @param imageFamily the value to be set.
         * @return {@code this}
         */
        public Builder imageFamily(com.aliyun.ros.cdk.core.IResolvable imageFamily) {
            this.imageFamily = imageFamily;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getImageName}
         * @param imageName the value to be set.
         * @return {@code this}
         */
        public Builder imageName(java.lang.String imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getImageName}
         * @param imageName the value to be set.
         * @return {@code this}
         */
        public Builder imageName(com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getPlatform}
         * @param platform the value to be set.
         * @return {@code this}
         */
        public Builder platform(java.lang.String platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getPlatform}
         * @param platform the value to be set.
         * @return {@code this}
         */
        public Builder platform(com.aliyun.ros.cdk.core.IResolvable platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getSnapshotId}
         * @param snapshotId the value to be set.
         * @return {@code this}
         */
        public Builder snapshotId(java.lang.String snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getSnapshotId}
         * @param snapshotId the value to be set.
         * @return {@code this}
         */
        public Builder snapshotId(com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getSourceRegionId}
         * @param sourceRegionId the value to be set.
         * @return {@code this}
         */
        public Builder sourceRegionId(java.lang.String sourceRegionId) {
            this.sourceRegionId = sourceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getSourceRegionId}
         * @param sourceRegionId the value to be set.
         * @return {@code this}
         */
        public Builder sourceRegionId(com.aliyun.ros.cdk.core.IResolvable sourceRegionId) {
            this.sourceRegionId = sourceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getTag}
         * @param tag the value to be set.
         * @return {@code this}
         */
        public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomImageProps#getTag}
         * @param tag the value to be set.
         * @return {@code this}
         */
        public Builder tag(java.util.List<? extends java.lang.Object> tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCustomImageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCustomImageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCustomImageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCustomImageProps {
        private final java.lang.Object architecture;
        private final java.lang.Object description;
        private final java.lang.Object diskDeviceMapping;
        private final java.lang.Object imageFamily;
        private final java.lang.Object imageName;
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
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskDeviceMapping = software.amazon.jsii.Kernel.get(this, "diskDeviceMapping", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageFamily = software.amazon.jsii.Kernel.get(this, "imageFamily", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageName = software.amazon.jsii.Kernel.get(this, "imageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.description = builder.description;
            this.diskDeviceMapping = builder.diskDeviceMapping;
            this.imageFamily = builder.imageFamily;
            this.imageName = builder.imageName;
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
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDiskDeviceMapping() {
            return this.diskDeviceMapping;
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
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDiskDeviceMapping() != null) {
                data.set("diskDeviceMapping", om.valueToTree(this.getDiskDeviceMapping()));
            }
            if (this.getImageFamily() != null) {
                data.set("imageFamily", om.valueToTree(this.getImageFamily()));
            }
            if (this.getImageName() != null) {
                data.set("imageName", om.valueToTree(this.getImageName()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosCustomImageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCustomImageProps.Jsii$Proxy that = (RosCustomImageProps.Jsii$Proxy) o;

            if (this.architecture != null ? !this.architecture.equals(that.architecture) : that.architecture != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskDeviceMapping != null ? !this.diskDeviceMapping.equals(that.diskDeviceMapping) : that.diskDeviceMapping != null) return false;
            if (this.imageFamily != null ? !this.imageFamily.equals(that.imageFamily) : that.imageFamily != null) return false;
            if (this.imageName != null ? !this.imageName.equals(that.imageName) : that.imageName != null) return false;
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
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.diskDeviceMapping != null ? this.diskDeviceMapping.hashCode() : 0);
            result = 31 * result + (this.imageFamily != null ? this.imageFamily.hashCode() : 0);
            result = 31 * result + (this.imageName != null ? this.imageName.hashCode() : 0);
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
