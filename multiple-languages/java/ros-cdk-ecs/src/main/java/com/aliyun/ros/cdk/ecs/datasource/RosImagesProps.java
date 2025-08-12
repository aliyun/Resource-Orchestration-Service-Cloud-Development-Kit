package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>RosImages</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-images
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.862Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.RosImagesProps")
@software.amazon.jsii.Jsii.Proxy(RosImagesProps.Jsii$Proxy.class)
public interface RosImagesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getActionType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArchitecture() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageFamily() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageOwnerAlias() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsPublic() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsSupportCloudinit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsSupportIoOptimized() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOsType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosImages.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsage() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosImagesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosImagesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosImagesProps> {
        java.lang.Object actionType;
        java.lang.Object architecture;
        java.lang.Object imageFamily;
        java.lang.Object imageId;
        java.lang.Object imageName;
        java.lang.Object imageOwnerAlias;
        java.lang.Object instanceType;
        java.lang.Object isPublic;
        java.lang.Object isSupportCloudinit;
        java.lang.Object isSupportIoOptimized;
        java.lang.Object osType;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;
        java.lang.Object snapshotId;
        java.lang.Object status;
        java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosImages.TagsProperty> tags;
        java.lang.Object usage;

        /**
         * Sets the value of {@link RosImagesProps#getActionType}
         * @param actionType the value to be set.
         * @return {@code this}
         */
        public Builder actionType(java.lang.String actionType) {
            this.actionType = actionType;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getActionType}
         * @param actionType the value to be set.
         * @return {@code this}
         */
        public Builder actionType(com.aliyun.ros.cdk.core.IResolvable actionType) {
            this.actionType = actionType;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getArchitecture}
         * @param architecture the value to be set.
         * @return {@code this}
         */
        public Builder architecture(java.lang.String architecture) {
            this.architecture = architecture;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getArchitecture}
         * @param architecture the value to be set.
         * @return {@code this}
         */
        public Builder architecture(com.aliyun.ros.cdk.core.IResolvable architecture) {
            this.architecture = architecture;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getImageFamily}
         * @param imageFamily the value to be set.
         * @return {@code this}
         */
        public Builder imageFamily(java.lang.String imageFamily) {
            this.imageFamily = imageFamily;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getImageFamily}
         * @param imageFamily the value to be set.
         * @return {@code this}
         */
        public Builder imageFamily(com.aliyun.ros.cdk.core.IResolvable imageFamily) {
            this.imageFamily = imageFamily;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getImageName}
         * @param imageName the value to be set.
         * @return {@code this}
         */
        public Builder imageName(java.lang.String imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getImageName}
         * @param imageName the value to be set.
         * @return {@code this}
         */
        public Builder imageName(com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getImageOwnerAlias}
         * @param imageOwnerAlias the value to be set.
         * @return {@code this}
         */
        public Builder imageOwnerAlias(java.lang.String imageOwnerAlias) {
            this.imageOwnerAlias = imageOwnerAlias;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getImageOwnerAlias}
         * @param imageOwnerAlias the value to be set.
         * @return {@code this}
         */
        public Builder imageOwnerAlias(com.aliyun.ros.cdk.core.IResolvable imageOwnerAlias) {
            this.imageOwnerAlias = imageOwnerAlias;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getIsPublic}
         * @param isPublic the value to be set.
         * @return {@code this}
         */
        public Builder isPublic(java.lang.Boolean isPublic) {
            this.isPublic = isPublic;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getIsPublic}
         * @param isPublic the value to be set.
         * @return {@code this}
         */
        public Builder isPublic(com.aliyun.ros.cdk.core.IResolvable isPublic) {
            this.isPublic = isPublic;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getIsSupportCloudinit}
         * @param isSupportCloudinit the value to be set.
         * @return {@code this}
         */
        public Builder isSupportCloudinit(java.lang.Boolean isSupportCloudinit) {
            this.isSupportCloudinit = isSupportCloudinit;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getIsSupportCloudinit}
         * @param isSupportCloudinit the value to be set.
         * @return {@code this}
         */
        public Builder isSupportCloudinit(com.aliyun.ros.cdk.core.IResolvable isSupportCloudinit) {
            this.isSupportCloudinit = isSupportCloudinit;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getIsSupportIoOptimized}
         * @param isSupportIoOptimized the value to be set.
         * @return {@code this}
         */
        public Builder isSupportIoOptimized(java.lang.Boolean isSupportIoOptimized) {
            this.isSupportIoOptimized = isSupportIoOptimized;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getIsSupportIoOptimized}
         * @param isSupportIoOptimized the value to be set.
         * @return {@code this}
         */
        public Builder isSupportIoOptimized(com.aliyun.ros.cdk.core.IResolvable isSupportIoOptimized) {
            this.isSupportIoOptimized = isSupportIoOptimized;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getOsType}
         * @param osType the value to be set.
         * @return {@code this}
         */
        public Builder osType(java.lang.String osType) {
            this.osType = osType;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getOsType}
         * @param osType the value to be set.
         * @return {@code this}
         */
        public Builder osType(com.aliyun.ros.cdk.core.IResolvable osType) {
            this.osType = osType;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getSnapshotId}
         * @param snapshotId the value to be set.
         * @return {@code this}
         */
        public Builder snapshotId(java.lang.String snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getSnapshotId}
         * @param snapshotId the value to be set.
         * @return {@code this}
         */
        public Builder snapshotId(com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosImages.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosImages.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getUsage}
         * @param usage the value to be set.
         * @return {@code this}
         */
        public Builder usage(java.lang.String usage) {
            this.usage = usage;
            return this;
        }

        /**
         * Sets the value of {@link RosImagesProps#getUsage}
         * @param usage the value to be set.
         * @return {@code this}
         */
        public Builder usage(com.aliyun.ros.cdk.core.IResolvable usage) {
            this.usage = usage;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosImagesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosImagesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosImagesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosImagesProps {
        private final java.lang.Object actionType;
        private final java.lang.Object architecture;
        private final java.lang.Object imageFamily;
        private final java.lang.Object imageId;
        private final java.lang.Object imageName;
        private final java.lang.Object imageOwnerAlias;
        private final java.lang.Object instanceType;
        private final java.lang.Object isPublic;
        private final java.lang.Object isSupportCloudinit;
        private final java.lang.Object isSupportIoOptimized;
        private final java.lang.Object osType;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object snapshotId;
        private final java.lang.Object status;
        private final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosImages.TagsProperty> tags;
        private final java.lang.Object usage;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.actionType = software.amazon.jsii.Kernel.get(this, "actionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.architecture = software.amazon.jsii.Kernel.get(this, "architecture", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageFamily = software.amazon.jsii.Kernel.get(this, "imageFamily", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageName = software.amazon.jsii.Kernel.get(this, "imageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageOwnerAlias = software.amazon.jsii.Kernel.get(this, "imageOwnerAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isPublic = software.amazon.jsii.Kernel.get(this, "isPublic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isSupportCloudinit = software.amazon.jsii.Kernel.get(this, "isSupportCloudinit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isSupportIoOptimized = software.amazon.jsii.Kernel.get(this, "isSupportIoOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.osType = software.amazon.jsii.Kernel.get(this, "osType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.RosImages.TagsProperty.class)));
            this.usage = software.amazon.jsii.Kernel.get(this, "usage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.actionType = builder.actionType;
            this.architecture = builder.architecture;
            this.imageFamily = builder.imageFamily;
            this.imageId = builder.imageId;
            this.imageName = builder.imageName;
            this.imageOwnerAlias = builder.imageOwnerAlias;
            this.instanceType = builder.instanceType;
            this.isPublic = builder.isPublic;
            this.isSupportCloudinit = builder.isSupportCloudinit;
            this.isSupportIoOptimized = builder.isSupportIoOptimized;
            this.osType = builder.osType;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
            this.snapshotId = builder.snapshotId;
            this.status = builder.status;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosImages.TagsProperty>)builder.tags;
            this.usage = builder.usage;
        }

        @Override
        public final java.lang.Object getActionType() {
            return this.actionType;
        }

        @Override
        public final java.lang.Object getArchitecture() {
            return this.architecture;
        }

        @Override
        public final java.lang.Object getImageFamily() {
            return this.imageFamily;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getImageName() {
            return this.imageName;
        }

        @Override
        public final java.lang.Object getImageOwnerAlias() {
            return this.imageOwnerAlias;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getIsPublic() {
            return this.isPublic;
        }

        @Override
        public final java.lang.Object getIsSupportCloudinit() {
            return this.isSupportCloudinit;
        }

        @Override
        public final java.lang.Object getIsSupportIoOptimized() {
            return this.isSupportIoOptimized;
        }

        @Override
        public final java.lang.Object getOsType() {
            return this.osType;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
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
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosImages.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getUsage() {
            return this.usage;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getActionType() != null) {
                data.set("actionType", om.valueToTree(this.getActionType()));
            }
            if (this.getArchitecture() != null) {
                data.set("architecture", om.valueToTree(this.getArchitecture()));
            }
            if (this.getImageFamily() != null) {
                data.set("imageFamily", om.valueToTree(this.getImageFamily()));
            }
            if (this.getImageId() != null) {
                data.set("imageId", om.valueToTree(this.getImageId()));
            }
            if (this.getImageName() != null) {
                data.set("imageName", om.valueToTree(this.getImageName()));
            }
            if (this.getImageOwnerAlias() != null) {
                data.set("imageOwnerAlias", om.valueToTree(this.getImageOwnerAlias()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getIsPublic() != null) {
                data.set("isPublic", om.valueToTree(this.getIsPublic()));
            }
            if (this.getIsSupportCloudinit() != null) {
                data.set("isSupportCloudinit", om.valueToTree(this.getIsSupportCloudinit()));
            }
            if (this.getIsSupportIoOptimized() != null) {
                data.set("isSupportIoOptimized", om.valueToTree(this.getIsSupportIoOptimized()));
            }
            if (this.getOsType() != null) {
                data.set("osType", om.valueToTree(this.getOsType()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSnapshotId() != null) {
                data.set("snapshotId", om.valueToTree(this.getSnapshotId()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUsage() != null) {
                data.set("usage", om.valueToTree(this.getUsage()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.RosImagesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosImagesProps.Jsii$Proxy that = (RosImagesProps.Jsii$Proxy) o;

            if (this.actionType != null ? !this.actionType.equals(that.actionType) : that.actionType != null) return false;
            if (this.architecture != null ? !this.architecture.equals(that.architecture) : that.architecture != null) return false;
            if (this.imageFamily != null ? !this.imageFamily.equals(that.imageFamily) : that.imageFamily != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.imageName != null ? !this.imageName.equals(that.imageName) : that.imageName != null) return false;
            if (this.imageOwnerAlias != null ? !this.imageOwnerAlias.equals(that.imageOwnerAlias) : that.imageOwnerAlias != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.isPublic != null ? !this.isPublic.equals(that.isPublic) : that.isPublic != null) return false;
            if (this.isSupportCloudinit != null ? !this.isSupportCloudinit.equals(that.isSupportCloudinit) : that.isSupportCloudinit != null) return false;
            if (this.isSupportIoOptimized != null ? !this.isSupportIoOptimized.equals(that.isSupportIoOptimized) : that.isSupportIoOptimized != null) return false;
            if (this.osType != null ? !this.osType.equals(that.osType) : that.osType != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.snapshotId != null ? !this.snapshotId.equals(that.snapshotId) : that.snapshotId != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.usage != null ? this.usage.equals(that.usage) : that.usage == null;
        }

        @Override
        public final int hashCode() {
            int result = this.actionType != null ? this.actionType.hashCode() : 0;
            result = 31 * result + (this.architecture != null ? this.architecture.hashCode() : 0);
            result = 31 * result + (this.imageFamily != null ? this.imageFamily.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.imageName != null ? this.imageName.hashCode() : 0);
            result = 31 * result + (this.imageOwnerAlias != null ? this.imageOwnerAlias.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.isPublic != null ? this.isPublic.hashCode() : 0);
            result = 31 * result + (this.isSupportCloudinit != null ? this.isSupportCloudinit.hashCode() : 0);
            result = 31 * result + (this.isSupportIoOptimized != null ? this.isSupportIoOptimized.hashCode() : 0);
            result = 31 * result + (this.osType != null ? this.osType.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.snapshotId != null ? this.snapshotId.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.usage != null ? this.usage.hashCode() : 0);
            return result;
        }
    }
}
