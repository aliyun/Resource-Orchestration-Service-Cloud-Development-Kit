package com.aliyun.ros.cdk.dbs;

/**
 * Properties for defining a <code>RosDownload</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-download
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.660Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dbs.$Module.class, fqn = "@alicloud/ros-cdk-dbs.RosDownloadProps")
@software.amazon.jsii.Jsii.Proxy(RosDownloadProps.Jsii$Proxy.class)
public interface RosDownloadProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFormatType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBakSetId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBakSetSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBakSetType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteBackupSetInOss() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDownloadAddressDuration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDownloadPointInTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetBucket() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetOssRegion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetPath() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDownloadProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDownloadProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDownloadProps> {
        java.lang.Object formatType;
        java.lang.Object instanceName;
        java.lang.Object bakSetId;
        java.lang.Object bakSetSize;
        java.lang.Object bakSetType;
        java.lang.Object deleteBackupSetInOss;
        java.lang.Object downloadAddressDuration;
        java.lang.Object downloadPointInTime;
        java.lang.Object targetBucket;
        java.lang.Object targetOssRegion;
        java.lang.Object targetPath;
        java.lang.Object targetType;

        /**
         * Sets the value of {@link RosDownloadProps#getFormatType}
         * @param formatType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder formatType(java.lang.String formatType) {
            this.formatType = formatType;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getFormatType}
         * @param formatType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder formatType(com.aliyun.ros.cdk.core.IResolvable formatType) {
            this.formatType = formatType;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getInstanceName}
         * @param instanceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getInstanceName}
         * @param instanceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getBakSetId}
         * @param bakSetId the value to be set.
         * @return {@code this}
         */
        public Builder bakSetId(java.lang.String bakSetId) {
            this.bakSetId = bakSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getBakSetId}
         * @param bakSetId the value to be set.
         * @return {@code this}
         */
        public Builder bakSetId(com.aliyun.ros.cdk.core.IResolvable bakSetId) {
            this.bakSetId = bakSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getBakSetSize}
         * @param bakSetSize the value to be set.
         * @return {@code this}
         */
        public Builder bakSetSize(java.lang.String bakSetSize) {
            this.bakSetSize = bakSetSize;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getBakSetSize}
         * @param bakSetSize the value to be set.
         * @return {@code this}
         */
        public Builder bakSetSize(com.aliyun.ros.cdk.core.IResolvable bakSetSize) {
            this.bakSetSize = bakSetSize;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getBakSetType}
         * @param bakSetType the value to be set.
         * @return {@code this}
         */
        public Builder bakSetType(java.lang.String bakSetType) {
            this.bakSetType = bakSetType;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getBakSetType}
         * @param bakSetType the value to be set.
         * @return {@code this}
         */
        public Builder bakSetType(com.aliyun.ros.cdk.core.IResolvable bakSetType) {
            this.bakSetType = bakSetType;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getDeleteBackupSetInOss}
         * @param deleteBackupSetInOss the value to be set.
         * @return {@code this}
         */
        public Builder deleteBackupSetInOss(java.lang.Boolean deleteBackupSetInOss) {
            this.deleteBackupSetInOss = deleteBackupSetInOss;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getDeleteBackupSetInOss}
         * @param deleteBackupSetInOss the value to be set.
         * @return {@code this}
         */
        public Builder deleteBackupSetInOss(com.aliyun.ros.cdk.core.IResolvable deleteBackupSetInOss) {
            this.deleteBackupSetInOss = deleteBackupSetInOss;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getDownloadAddressDuration}
         * @param downloadAddressDuration the value to be set.
         * @return {@code this}
         */
        public Builder downloadAddressDuration(java.lang.Number downloadAddressDuration) {
            this.downloadAddressDuration = downloadAddressDuration;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getDownloadAddressDuration}
         * @param downloadAddressDuration the value to be set.
         * @return {@code this}
         */
        public Builder downloadAddressDuration(com.aliyun.ros.cdk.core.IResolvable downloadAddressDuration) {
            this.downloadAddressDuration = downloadAddressDuration;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getDownloadPointInTime}
         * @param downloadPointInTime the value to be set.
         * @return {@code this}
         */
        public Builder downloadPointInTime(java.lang.String downloadPointInTime) {
            this.downloadPointInTime = downloadPointInTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getDownloadPointInTime}
         * @param downloadPointInTime the value to be set.
         * @return {@code this}
         */
        public Builder downloadPointInTime(com.aliyun.ros.cdk.core.IResolvable downloadPointInTime) {
            this.downloadPointInTime = downloadPointInTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getTargetBucket}
         * @param targetBucket the value to be set.
         * @return {@code this}
         */
        public Builder targetBucket(java.lang.String targetBucket) {
            this.targetBucket = targetBucket;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getTargetBucket}
         * @param targetBucket the value to be set.
         * @return {@code this}
         */
        public Builder targetBucket(com.aliyun.ros.cdk.core.IResolvable targetBucket) {
            this.targetBucket = targetBucket;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getTargetOssRegion}
         * @param targetOssRegion the value to be set.
         * @return {@code this}
         */
        public Builder targetOssRegion(java.lang.String targetOssRegion) {
            this.targetOssRegion = targetOssRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getTargetOssRegion}
         * @param targetOssRegion the value to be set.
         * @return {@code this}
         */
        public Builder targetOssRegion(com.aliyun.ros.cdk.core.IResolvable targetOssRegion) {
            this.targetOssRegion = targetOssRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getTargetPath}
         * @param targetPath the value to be set.
         * @return {@code this}
         */
        public Builder targetPath(java.lang.String targetPath) {
            this.targetPath = targetPath;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getTargetPath}
         * @param targetPath the value to be set.
         * @return {@code this}
         */
        public Builder targetPath(com.aliyun.ros.cdk.core.IResolvable targetPath) {
            this.targetPath = targetPath;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getTargetType}
         * @param targetType the value to be set.
         * @return {@code this}
         */
        public Builder targetType(java.lang.String targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Sets the value of {@link RosDownloadProps#getTargetType}
         * @param targetType the value to be set.
         * @return {@code this}
         */
        public Builder targetType(com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDownloadProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDownloadProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDownloadProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDownloadProps {
        private final java.lang.Object formatType;
        private final java.lang.Object instanceName;
        private final java.lang.Object bakSetId;
        private final java.lang.Object bakSetSize;
        private final java.lang.Object bakSetType;
        private final java.lang.Object deleteBackupSetInOss;
        private final java.lang.Object downloadAddressDuration;
        private final java.lang.Object downloadPointInTime;
        private final java.lang.Object targetBucket;
        private final java.lang.Object targetOssRegion;
        private final java.lang.Object targetPath;
        private final java.lang.Object targetType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.formatType = software.amazon.jsii.Kernel.get(this, "formatType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bakSetId = software.amazon.jsii.Kernel.get(this, "bakSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bakSetSize = software.amazon.jsii.Kernel.get(this, "bakSetSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bakSetType = software.amazon.jsii.Kernel.get(this, "bakSetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deleteBackupSetInOss = software.amazon.jsii.Kernel.get(this, "deleteBackupSetInOss", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.downloadAddressDuration = software.amazon.jsii.Kernel.get(this, "downloadAddressDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.downloadPointInTime = software.amazon.jsii.Kernel.get(this, "downloadPointInTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetBucket = software.amazon.jsii.Kernel.get(this, "targetBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetOssRegion = software.amazon.jsii.Kernel.get(this, "targetOssRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetPath = software.amazon.jsii.Kernel.get(this, "targetPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetType = software.amazon.jsii.Kernel.get(this, "targetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.formatType = java.util.Objects.requireNonNull(builder.formatType, "formatType is required");
            this.instanceName = java.util.Objects.requireNonNull(builder.instanceName, "instanceName is required");
            this.bakSetId = builder.bakSetId;
            this.bakSetSize = builder.bakSetSize;
            this.bakSetType = builder.bakSetType;
            this.deleteBackupSetInOss = builder.deleteBackupSetInOss;
            this.downloadAddressDuration = builder.downloadAddressDuration;
            this.downloadPointInTime = builder.downloadPointInTime;
            this.targetBucket = builder.targetBucket;
            this.targetOssRegion = builder.targetOssRegion;
            this.targetPath = builder.targetPath;
            this.targetType = builder.targetType;
        }

        @Override
        public final java.lang.Object getFormatType() {
            return this.formatType;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getBakSetId() {
            return this.bakSetId;
        }

        @Override
        public final java.lang.Object getBakSetSize() {
            return this.bakSetSize;
        }

        @Override
        public final java.lang.Object getBakSetType() {
            return this.bakSetType;
        }

        @Override
        public final java.lang.Object getDeleteBackupSetInOss() {
            return this.deleteBackupSetInOss;
        }

        @Override
        public final java.lang.Object getDownloadAddressDuration() {
            return this.downloadAddressDuration;
        }

        @Override
        public final java.lang.Object getDownloadPointInTime() {
            return this.downloadPointInTime;
        }

        @Override
        public final java.lang.Object getTargetBucket() {
            return this.targetBucket;
        }

        @Override
        public final java.lang.Object getTargetOssRegion() {
            return this.targetOssRegion;
        }

        @Override
        public final java.lang.Object getTargetPath() {
            return this.targetPath;
        }

        @Override
        public final java.lang.Object getTargetType() {
            return this.targetType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("formatType", om.valueToTree(this.getFormatType()));
            data.set("instanceName", om.valueToTree(this.getInstanceName()));
            if (this.getBakSetId() != null) {
                data.set("bakSetId", om.valueToTree(this.getBakSetId()));
            }
            if (this.getBakSetSize() != null) {
                data.set("bakSetSize", om.valueToTree(this.getBakSetSize()));
            }
            if (this.getBakSetType() != null) {
                data.set("bakSetType", om.valueToTree(this.getBakSetType()));
            }
            if (this.getDeleteBackupSetInOss() != null) {
                data.set("deleteBackupSetInOss", om.valueToTree(this.getDeleteBackupSetInOss()));
            }
            if (this.getDownloadAddressDuration() != null) {
                data.set("downloadAddressDuration", om.valueToTree(this.getDownloadAddressDuration()));
            }
            if (this.getDownloadPointInTime() != null) {
                data.set("downloadPointInTime", om.valueToTree(this.getDownloadPointInTime()));
            }
            if (this.getTargetBucket() != null) {
                data.set("targetBucket", om.valueToTree(this.getTargetBucket()));
            }
            if (this.getTargetOssRegion() != null) {
                data.set("targetOssRegion", om.valueToTree(this.getTargetOssRegion()));
            }
            if (this.getTargetPath() != null) {
                data.set("targetPath", om.valueToTree(this.getTargetPath()));
            }
            if (this.getTargetType() != null) {
                data.set("targetType", om.valueToTree(this.getTargetType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dbs.RosDownloadProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDownloadProps.Jsii$Proxy that = (RosDownloadProps.Jsii$Proxy) o;

            if (!formatType.equals(that.formatType)) return false;
            if (!instanceName.equals(that.instanceName)) return false;
            if (this.bakSetId != null ? !this.bakSetId.equals(that.bakSetId) : that.bakSetId != null) return false;
            if (this.bakSetSize != null ? !this.bakSetSize.equals(that.bakSetSize) : that.bakSetSize != null) return false;
            if (this.bakSetType != null ? !this.bakSetType.equals(that.bakSetType) : that.bakSetType != null) return false;
            if (this.deleteBackupSetInOss != null ? !this.deleteBackupSetInOss.equals(that.deleteBackupSetInOss) : that.deleteBackupSetInOss != null) return false;
            if (this.downloadAddressDuration != null ? !this.downloadAddressDuration.equals(that.downloadAddressDuration) : that.downloadAddressDuration != null) return false;
            if (this.downloadPointInTime != null ? !this.downloadPointInTime.equals(that.downloadPointInTime) : that.downloadPointInTime != null) return false;
            if (this.targetBucket != null ? !this.targetBucket.equals(that.targetBucket) : that.targetBucket != null) return false;
            if (this.targetOssRegion != null ? !this.targetOssRegion.equals(that.targetOssRegion) : that.targetOssRegion != null) return false;
            if (this.targetPath != null ? !this.targetPath.equals(that.targetPath) : that.targetPath != null) return false;
            return this.targetType != null ? this.targetType.equals(that.targetType) : that.targetType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.formatType.hashCode();
            result = 31 * result + (this.instanceName.hashCode());
            result = 31 * result + (this.bakSetId != null ? this.bakSetId.hashCode() : 0);
            result = 31 * result + (this.bakSetSize != null ? this.bakSetSize.hashCode() : 0);
            result = 31 * result + (this.bakSetType != null ? this.bakSetType.hashCode() : 0);
            result = 31 * result + (this.deleteBackupSetInOss != null ? this.deleteBackupSetInOss.hashCode() : 0);
            result = 31 * result + (this.downloadAddressDuration != null ? this.downloadAddressDuration.hashCode() : 0);
            result = 31 * result + (this.downloadPointInTime != null ? this.downloadPointInTime.hashCode() : 0);
            result = 31 * result + (this.targetBucket != null ? this.targetBucket.hashCode() : 0);
            result = 31 * result + (this.targetOssRegion != null ? this.targetOssRegion.hashCode() : 0);
            result = 31 * result + (this.targetPath != null ? this.targetPath.hashCode() : 0);
            result = 31 * result + (this.targetType != null ? this.targetType.hashCode() : 0);
            return result;
        }
    }
}
