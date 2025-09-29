package com.aliyun.ros.cdk.ice;

/**
 * Properties for defining a <code>UploadMedia</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-uploadmedia
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.545Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ice.$Module.class, fqn = "@alicloud/ros-cdk-ice.UploadMediaProps")
@software.amazon.jsii.Jsii.Proxy(UploadMediaProps.Jsii$Proxy.class)
public interface UploadMediaProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property appId: The application ID.
     * <p>
     * Default value: app-1000000.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppId() {
        return null;
    }

    /**
     * Property entityId: The entity ID.
     * <p>
     * You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEntityId() {
        return null;
    }

    /**
     * Property fileInfo: The file information, which is in the JSON format and contains the following fields: Type: required.
     * <p>
     * The file type. Valid values: video, image, audio, text, and other.
     * Name: required. The file name without the extension.
     * Size: optional. The file size.
     * Ext: required. The file name extension.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFileInfo() {
        return null;
    }

    /**
     * Property mediaMetaData: The metadata of the media asset, which is a JSON string that contains the following fields: Title: required.
     * <p>
     * The value can be up to 128 characters in length.
     * The value must be encoded in UTF-8.
     * Description: optional.
     * The value can be up to 1,024 characters in length.
     * The value must be encoded in UTF-8.
     * CateId: optional.
     * Tags: optional.
     * BusinessType: required. Valid values:
     * opening or ending if Type is set to video
     * default or cover if Type is set to image
     * subtitles or font if Type is set to text
     * watermark if Type is set to material
     * general CoverURL: optional.
     * DynamicMetaData: The value is a string.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMediaMetaData() {
        return null;
    }

    /**
     * Property postProcessConfig: Type = video || audio There is a post-upload processing action.
     * <p>
     * ProcessType Value: Workflow.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPostProcessConfig() {
        return null;
    }

    /**
     * Property uploadTargetConfig: The destination storage address.
     * <p>
     * Set StorageType to oss.
     * Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUploadTargetConfig() {
        return null;
    }

    /**
     * Property userData: The user data.
     * <p>
     * The value must be a JSON string. You can configure settings such as message callbacks.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link UploadMediaProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UploadMediaProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UploadMediaProps> {
        java.lang.Object appId;
        java.lang.Object entityId;
        java.lang.Object fileInfo;
        java.lang.Object mediaMetaData;
        java.lang.Object postProcessConfig;
        java.lang.Object uploadTargetConfig;
        java.lang.Object userData;

        /**
         * Sets the value of {@link UploadMediaProps#getAppId}
         * @param appId Property appId: The application ID.
         *              Default value: app-1000000.
         * @return {@code this}
         */
        public Builder appId(java.lang.String appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link UploadMediaProps#getAppId}
         * @param appId Property appId: The application ID.
         *              Default value: app-1000000.
         * @return {@code this}
         */
        public Builder appId(com.aliyun.ros.cdk.core.IResolvable appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link UploadMediaProps#getEntityId}
         * @param entityId Property entityId: The entity ID.
         *                 You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
         * @return {@code this}
         */
        public Builder entityId(java.lang.String entityId) {
            this.entityId = entityId;
            return this;
        }

        /**
         * Sets the value of {@link UploadMediaProps#getEntityId}
         * @param entityId Property entityId: The entity ID.
         *                 You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
         * @return {@code this}
         */
        public Builder entityId(com.aliyun.ros.cdk.core.IResolvable entityId) {
            this.entityId = entityId;
            return this;
        }

        /**
         * Sets the value of {@link UploadMediaProps#getFileInfo}
         * @param fileInfo Property fileInfo: The file information, which is in the JSON format and contains the following fields: Type: required.
         *                 The file type. Valid values: video, image, audio, text, and other.
         *                 Name: required. The file name without the extension.
         *                 Size: optional. The file size.
         *                 Ext: required. The file name extension.
         * @return {@code this}
         */
        public Builder fileInfo(com.aliyun.ros.cdk.core.IResolvable fileInfo) {
            this.fileInfo = fileInfo;
            return this;
        }

        /**
         * Sets the value of {@link UploadMediaProps#getFileInfo}
         * @param fileInfo Property fileInfo: The file information, which is in the JSON format and contains the following fields: Type: required.
         *                 The file type. Valid values: video, image, audio, text, and other.
         *                 Name: required. The file name without the extension.
         *                 Size: optional. The file size.
         *                 Ext: required. The file name extension.
         * @return {@code this}
         */
        public Builder fileInfo(java.util.Map<java.lang.String, ? extends java.lang.Object> fileInfo) {
            this.fileInfo = fileInfo;
            return this;
        }

        /**
         * Sets the value of {@link UploadMediaProps#getMediaMetaData}
         * @param mediaMetaData Property mediaMetaData: The metadata of the media asset, which is a JSON string that contains the following fields: Title: required.
         *                      The value can be up to 128 characters in length.
         *                      The value must be encoded in UTF-8.
         *                      Description: optional.
         *                      The value can be up to 1,024 characters in length.
         *                      The value must be encoded in UTF-8.
         *                      CateId: optional.
         *                      Tags: optional.
         *                      BusinessType: required. Valid values:
         *                      opening or ending if Type is set to video
         *                      default or cover if Type is set to image
         *                      subtitles or font if Type is set to text
         *                      watermark if Type is set to material
         *                      general CoverURL: optional.
         *                      DynamicMetaData: The value is a string.
         * @return {@code this}
         */
        public Builder mediaMetaData(com.aliyun.ros.cdk.core.IResolvable mediaMetaData) {
            this.mediaMetaData = mediaMetaData;
            return this;
        }

        /**
         * Sets the value of {@link UploadMediaProps#getMediaMetaData}
         * @param mediaMetaData Property mediaMetaData: The metadata of the media asset, which is a JSON string that contains the following fields: Title: required.
         *                      The value can be up to 128 characters in length.
         *                      The value must be encoded in UTF-8.
         *                      Description: optional.
         *                      The value can be up to 1,024 characters in length.
         *                      The value must be encoded in UTF-8.
         *                      CateId: optional.
         *                      Tags: optional.
         *                      BusinessType: required. Valid values:
         *                      opening or ending if Type is set to video
         *                      default or cover if Type is set to image
         *                      subtitles or font if Type is set to text
         *                      watermark if Type is set to material
         *                      general CoverURL: optional.
         *                      DynamicMetaData: The value is a string.
         * @return {@code this}
         */
        public Builder mediaMetaData(java.util.Map<java.lang.String, ? extends java.lang.Object> mediaMetaData) {
            this.mediaMetaData = mediaMetaData;
            return this;
        }

        /**
         * Sets the value of {@link UploadMediaProps#getPostProcessConfig}
         * @param postProcessConfig Property postProcessConfig: Type = video || audio There is a post-upload processing action.
         *                          ProcessType Value: Workflow.
         * @return {@code this}
         */
        public Builder postProcessConfig(com.aliyun.ros.cdk.core.IResolvable postProcessConfig) {
            this.postProcessConfig = postProcessConfig;
            return this;
        }

        /**
         * Sets the value of {@link UploadMediaProps#getPostProcessConfig}
         * @param postProcessConfig Property postProcessConfig: Type = video || audio There is a post-upload processing action.
         *                          ProcessType Value: Workflow.
         * @return {@code this}
         */
        public Builder postProcessConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> postProcessConfig) {
            this.postProcessConfig = postProcessConfig;
            return this;
        }

        /**
         * Sets the value of {@link UploadMediaProps#getUploadTargetConfig}
         * @param uploadTargetConfig Property uploadTargetConfig: The destination storage address.
         *                           Set StorageType to oss.
         *                           Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
         * @return {@code this}
         */
        public Builder uploadTargetConfig(com.aliyun.ros.cdk.core.IResolvable uploadTargetConfig) {
            this.uploadTargetConfig = uploadTargetConfig;
            return this;
        }

        /**
         * Sets the value of {@link UploadMediaProps#getUploadTargetConfig}
         * @param uploadTargetConfig Property uploadTargetConfig: The destination storage address.
         *                           Set StorageType to oss.
         *                           Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
         * @return {@code this}
         */
        public Builder uploadTargetConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> uploadTargetConfig) {
            this.uploadTargetConfig = uploadTargetConfig;
            return this;
        }

        /**
         * Sets the value of {@link UploadMediaProps#getUserData}
         * @param userData Property userData: The user data.
         *                 The value must be a JSON string. You can configure settings such as message callbacks.
         * @return {@code this}
         */
        public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link UploadMediaProps#getUserData}
         * @param userData Property userData: The user data.
         *                 The value must be a JSON string. You can configure settings such as message callbacks.
         * @return {@code this}
         */
        public Builder userData(java.util.Map<java.lang.String, ? extends java.lang.Object> userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UploadMediaProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UploadMediaProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UploadMediaProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UploadMediaProps {
        private final java.lang.Object appId;
        private final java.lang.Object entityId;
        private final java.lang.Object fileInfo;
        private final java.lang.Object mediaMetaData;
        private final java.lang.Object postProcessConfig;
        private final java.lang.Object uploadTargetConfig;
        private final java.lang.Object userData;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appId = software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.entityId = software.amazon.jsii.Kernel.get(this, "entityId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fileInfo = software.amazon.jsii.Kernel.get(this, "fileInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mediaMetaData = software.amazon.jsii.Kernel.get(this, "mediaMetaData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.postProcessConfig = software.amazon.jsii.Kernel.get(this, "postProcessConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uploadTargetConfig = software.amazon.jsii.Kernel.get(this, "uploadTargetConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appId = builder.appId;
            this.entityId = builder.entityId;
            this.fileInfo = builder.fileInfo;
            this.mediaMetaData = builder.mediaMetaData;
            this.postProcessConfig = builder.postProcessConfig;
            this.uploadTargetConfig = builder.uploadTargetConfig;
            this.userData = builder.userData;
        }

        @Override
        public final java.lang.Object getAppId() {
            return this.appId;
        }

        @Override
        public final java.lang.Object getEntityId() {
            return this.entityId;
        }

        @Override
        public final java.lang.Object getFileInfo() {
            return this.fileInfo;
        }

        @Override
        public final java.lang.Object getMediaMetaData() {
            return this.mediaMetaData;
        }

        @Override
        public final java.lang.Object getPostProcessConfig() {
            return this.postProcessConfig;
        }

        @Override
        public final java.lang.Object getUploadTargetConfig() {
            return this.uploadTargetConfig;
        }

        @Override
        public final java.lang.Object getUserData() {
            return this.userData;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAppId() != null) {
                data.set("appId", om.valueToTree(this.getAppId()));
            }
            if (this.getEntityId() != null) {
                data.set("entityId", om.valueToTree(this.getEntityId()));
            }
            if (this.getFileInfo() != null) {
                data.set("fileInfo", om.valueToTree(this.getFileInfo()));
            }
            if (this.getMediaMetaData() != null) {
                data.set("mediaMetaData", om.valueToTree(this.getMediaMetaData()));
            }
            if (this.getPostProcessConfig() != null) {
                data.set("postProcessConfig", om.valueToTree(this.getPostProcessConfig()));
            }
            if (this.getUploadTargetConfig() != null) {
                data.set("uploadTargetConfig", om.valueToTree(this.getUploadTargetConfig()));
            }
            if (this.getUserData() != null) {
                data.set("userData", om.valueToTree(this.getUserData()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ice.UploadMediaProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UploadMediaProps.Jsii$Proxy that = (UploadMediaProps.Jsii$Proxy) o;

            if (this.appId != null ? !this.appId.equals(that.appId) : that.appId != null) return false;
            if (this.entityId != null ? !this.entityId.equals(that.entityId) : that.entityId != null) return false;
            if (this.fileInfo != null ? !this.fileInfo.equals(that.fileInfo) : that.fileInfo != null) return false;
            if (this.mediaMetaData != null ? !this.mediaMetaData.equals(that.mediaMetaData) : that.mediaMetaData != null) return false;
            if (this.postProcessConfig != null ? !this.postProcessConfig.equals(that.postProcessConfig) : that.postProcessConfig != null) return false;
            if (this.uploadTargetConfig != null ? !this.uploadTargetConfig.equals(that.uploadTargetConfig) : that.uploadTargetConfig != null) return false;
            return this.userData != null ? this.userData.equals(that.userData) : that.userData == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appId != null ? this.appId.hashCode() : 0;
            result = 31 * result + (this.entityId != null ? this.entityId.hashCode() : 0);
            result = 31 * result + (this.fileInfo != null ? this.fileInfo.hashCode() : 0);
            result = 31 * result + (this.mediaMetaData != null ? this.mediaMetaData.hashCode() : 0);
            result = 31 * result + (this.postProcessConfig != null ? this.postProcessConfig.hashCode() : 0);
            result = 31 * result + (this.uploadTargetConfig != null ? this.uploadTargetConfig.hashCode() : 0);
            result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
            return result;
        }
    }
}
