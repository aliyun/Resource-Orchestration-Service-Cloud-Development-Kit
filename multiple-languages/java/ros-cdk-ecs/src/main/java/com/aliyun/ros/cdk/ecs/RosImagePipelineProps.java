package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RosImagePipeline</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagepipeline
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:26.042Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosImagePipelineProps")
@software.amazon.jsii.Jsii.Proxy(RosImagePipelineProps.Jsii$Proxy.class)
public interface RosImagePipelineProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBaseImage();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBaseImageType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddAccount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBuildContent() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteInstanceOnFailure() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExecutePipeline() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthOut() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosImagePipeline.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getToRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosImagePipelineProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosImagePipelineProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosImagePipelineProps> {
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
         * Sets the value of {@link RosImagePipelineProps#getBaseImage}
         * @param baseImage the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder baseImage(java.lang.String baseImage) {
            this.baseImage = baseImage;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getBaseImage}
         * @param baseImage the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder baseImage(com.aliyun.ros.cdk.core.IResolvable baseImage) {
            this.baseImage = baseImage;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getBaseImageType}
         * @param baseImageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder baseImageType(java.lang.String baseImageType) {
            this.baseImageType = baseImageType;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getBaseImageType}
         * @param baseImageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder baseImageType(com.aliyun.ros.cdk.core.IResolvable baseImageType) {
            this.baseImageType = baseImageType;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getAddAccount}
         * @param addAccount the value to be set.
         * @return {@code this}
         */
        public Builder addAccount(com.aliyun.ros.cdk.core.IResolvable addAccount) {
            this.addAccount = addAccount;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getAddAccount}
         * @param addAccount the value to be set.
         * @return {@code this}
         */
        public Builder addAccount(java.util.List<? extends java.lang.Object> addAccount) {
            this.addAccount = addAccount;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getBuildContent}
         * @param buildContent the value to be set.
         * @return {@code this}
         */
        public Builder buildContent(java.lang.String buildContent) {
            this.buildContent = buildContent;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getBuildContent}
         * @param buildContent the value to be set.
         * @return {@code this}
         */
        public Builder buildContent(com.aliyun.ros.cdk.core.IResolvable buildContent) {
            this.buildContent = buildContent;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getDeleteInstanceOnFailure}
         * @param deleteInstanceOnFailure the value to be set.
         * @return {@code this}
         */
        public Builder deleteInstanceOnFailure(java.lang.Boolean deleteInstanceOnFailure) {
            this.deleteInstanceOnFailure = deleteInstanceOnFailure;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getDeleteInstanceOnFailure}
         * @param deleteInstanceOnFailure the value to be set.
         * @return {@code this}
         */
        public Builder deleteInstanceOnFailure(com.aliyun.ros.cdk.core.IResolvable deleteInstanceOnFailure) {
            this.deleteInstanceOnFailure = deleteInstanceOnFailure;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getExecutePipeline}
         * @param executePipeline the value to be set.
         * @return {@code this}
         */
        public Builder executePipeline(java.lang.Boolean executePipeline) {
            this.executePipeline = executePipeline;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getExecutePipeline}
         * @param executePipeline the value to be set.
         * @return {@code this}
         */
        public Builder executePipeline(com.aliyun.ros.cdk.core.IResolvable executePipeline) {
            this.executePipeline = executePipeline;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getImageName}
         * @param imageName the value to be set.
         * @return {@code this}
         */
        public Builder imageName(java.lang.String imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getImageName}
         * @param imageName the value to be set.
         * @return {@code this}
         */
        public Builder imageName(com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getSystemDiskSize}
         * @param systemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskSize(java.lang.Number systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getSystemDiskSize}
         * @param systemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosImagePipeline.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosImagePipeline.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getToRegionId}
         * @param toRegionId the value to be set.
         * @return {@code this}
         */
        public Builder toRegionId(com.aliyun.ros.cdk.core.IResolvable toRegionId) {
            this.toRegionId = toRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getToRegionId}
         * @param toRegionId the value to be set.
         * @return {@code this}
         */
        public Builder toRegionId(java.util.List<? extends java.lang.Object> toRegionId) {
            this.toRegionId = toRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosImagePipelineProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosImagePipelineProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosImagePipelineProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosImagePipelineProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosImagePipelineProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosImagePipelineProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosImagePipelineProps.Jsii$Proxy that = (RosImagePipelineProps.Jsii$Proxy) o;

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
