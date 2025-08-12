package com.aliyun.ros.cdk.ice;

/**
 * Properties for defining a <code>MediaInfo</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-mediainfo
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.201Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ice.$Module.class, fqn = "@alicloud/ros-cdk-ice.MediaInfoProps")
@software.amazon.jsii.Jsii.Proxy(MediaInfoProps.Jsii$Proxy.class)
public interface MediaInfoProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property inputUrl: The URL of the media asset in another service.
     * <p>
     * The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
     * OSS URL in one of the following formats:
     * http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
     * oss://example-bucket/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
     * URL of an ApsaraVideo VOD media asset
     * vod://<em><strong>20b48fb04483915d4f2cd8ac</strong></em>*
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInputUrl();

    /**
     * Property businessType: The business type of the media asset.
     * <p>
     * Valid values:
     * subtitles
     * watermark
     * opening
     * ending
     * general
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBusinessType() {
        return null;
    }

    /**
     * Property cateId: The category ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCateId() {
        return null;
    }

    /**
     * Property coverUrl: The thumbnail URL of the media asset.
     * <p>
     * The value can be up to 128 bytes in length.
     * The value must be encoded in UTF-8.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCoverUrl() {
        return null;
    }

    /**
     * Property description: The description of the media asset.
     * <p>
     * The value can be up to 1,024 bytes in length.
     * The value must be encoded in UTF-8.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property mediaTags: The tags of the media asset.
     * <p>
     * Up to 16 tags are supported.
     * Separate multiple tags with commas (,).
     * Each tag can be up to 32 bytes in length.
     * The value must be encoded in UTF-8.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMediaTags() {
        return null;
    }

    /**
     * Property mediaType: The type of the media asset.
     * <p>
     * Valid values:
     * image
     * video
     * audio
     * text
     * We recommend that you specify this parameter based on your business requirements. If you set InputURL to an OSS URL, the media asset type can be automatically determined based on the file name extension. For more information
     * .
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMediaType() {
        return null;
    }

    /**
     * Property overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL.
     * <p>
     * Default value: false. Valid values:
     * <p>
     * <ul>
     * <li>true: If a media asset has been registered by using the same URL, the original media asset is deleted and the new media asset is registered.</li>
     * <li>false: If a media asset has been registered by using the same URL, the new media asset is not registered. A URL cannot be used to register multiple media assets.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOverwrite() {
        return null;
    }

    /**
     * Property referenceId: The custom ID.
     * <p>
     * The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReferenceId() {
        return null;
    }

    /**
     * Property registerConfig: The registration configurations.
     * <p>
     * By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
     * By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegisterConfig() {
        return null;
    }

    /**
     * Property smartTagTemplateId: The ID of the smart tagging template.
     * <p>
     * Valid values:
     * S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
     * S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
     * S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
     * After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSmartTagTemplateId() {
        return null;
    }

    /**
     * Property title: The title.
     * <p>
     * If you do not specify this parameter, a default title is automatically generated based on the date.
     * The value can be up to 128 bytes in length.
     * The value must be encoded in UTF-8.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTitle() {
        return null;
    }

    /**
     * Property userData: The user data.
     * <p>
     * You can specify a custom callback URL.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
        return null;
    }

    /**
     * Property workflowId: The workflow ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkflowId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link MediaInfoProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MediaInfoProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MediaInfoProps> {
        java.lang.Object inputUrl;
        java.lang.Object businessType;
        java.lang.Object cateId;
        java.lang.Object coverUrl;
        java.lang.Object description;
        java.lang.Object mediaTags;
        java.lang.Object mediaType;
        java.lang.Object overwrite;
        java.lang.Object referenceId;
        java.lang.Object registerConfig;
        java.lang.Object smartTagTemplateId;
        java.lang.Object title;
        java.lang.Object userData;
        java.lang.Object workflowId;

        /**
         * Sets the value of {@link MediaInfoProps#getInputUrl}
         * @param inputUrl Property inputUrl: The URL of the media asset in another service. This parameter is required.
         *                 The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
         *                 OSS URL in one of the following formats:
         *                 http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
         *                 oss://example-bucket/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
         *                 URL of an ApsaraVideo VOD media asset
         *                 vod://<em><strong>20b48fb04483915d4f2cd8ac</strong></em>*
         * @return {@code this}
         */
        public Builder inputUrl(java.lang.String inputUrl) {
            this.inputUrl = inputUrl;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getInputUrl}
         * @param inputUrl Property inputUrl: The URL of the media asset in another service. This parameter is required.
         *                 The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
         *                 OSS URL in one of the following formats:
         *                 http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
         *                 oss://example-bucket/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
         *                 URL of an ApsaraVideo VOD media asset
         *                 vod://<em><strong>20b48fb04483915d4f2cd8ac</strong></em>*
         * @return {@code this}
         */
        public Builder inputUrl(com.aliyun.ros.cdk.core.IResolvable inputUrl) {
            this.inputUrl = inputUrl;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getBusinessType}
         * @param businessType Property businessType: The business type of the media asset.
         *                     Valid values:
         *                     subtitles
         *                     watermark
         *                     opening
         *                     ending
         *                     general
         * @return {@code this}
         */
        public Builder businessType(java.lang.String businessType) {
            this.businessType = businessType;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getBusinessType}
         * @param businessType Property businessType: The business type of the media asset.
         *                     Valid values:
         *                     subtitles
         *                     watermark
         *                     opening
         *                     ending
         *                     general
         * @return {@code this}
         */
        public Builder businessType(com.aliyun.ros.cdk.core.IResolvable businessType) {
            this.businessType = businessType;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getCateId}
         * @param cateId Property cateId: The category ID.
         * @return {@code this}
         */
        public Builder cateId(java.lang.Number cateId) {
            this.cateId = cateId;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getCateId}
         * @param cateId Property cateId: The category ID.
         * @return {@code this}
         */
        public Builder cateId(com.aliyun.ros.cdk.core.IResolvable cateId) {
            this.cateId = cateId;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getCoverUrl}
         * @param coverUrl Property coverUrl: The thumbnail URL of the media asset.
         *                 The value can be up to 128 bytes in length.
         *                 The value must be encoded in UTF-8.
         * @return {@code this}
         */
        public Builder coverUrl(java.lang.String coverUrl) {
            this.coverUrl = coverUrl;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getCoverUrl}
         * @param coverUrl Property coverUrl: The thumbnail URL of the media asset.
         *                 The value can be up to 128 bytes in length.
         *                 The value must be encoded in UTF-8.
         * @return {@code this}
         */
        public Builder coverUrl(com.aliyun.ros.cdk.core.IResolvable coverUrl) {
            this.coverUrl = coverUrl;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getDescription}
         * @param description Property description: The description of the media asset.
         *                    The value can be up to 1,024 bytes in length.
         *                    The value must be encoded in UTF-8.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getDescription}
         * @param description Property description: The description of the media asset.
         *                    The value can be up to 1,024 bytes in length.
         *                    The value must be encoded in UTF-8.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getMediaTags}
         * @param mediaTags Property mediaTags: The tags of the media asset.
         *                  Up to 16 tags are supported.
         *                  Separate multiple tags with commas (,).
         *                  Each tag can be up to 32 bytes in length.
         *                  The value must be encoded in UTF-8.
         * @return {@code this}
         */
        public Builder mediaTags(com.aliyun.ros.cdk.core.IResolvable mediaTags) {
            this.mediaTags = mediaTags;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getMediaTags}
         * @param mediaTags Property mediaTags: The tags of the media asset.
         *                  Up to 16 tags are supported.
         *                  Separate multiple tags with commas (,).
         *                  Each tag can be up to 32 bytes in length.
         *                  The value must be encoded in UTF-8.
         * @return {@code this}
         */
        public Builder mediaTags(java.util.List<? extends java.lang.Object> mediaTags) {
            this.mediaTags = mediaTags;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getMediaType}
         * @param mediaType Property mediaType: The type of the media asset.
         *                  Valid values:
         *                  image
         *                  video
         *                  audio
         *                  text
         *                  We recommend that you specify this parameter based on your business requirements. If you set InputURL to an OSS URL, the media asset type can be automatically determined based on the file name extension. For more information
         *                  .
         * @return {@code this}
         */
        public Builder mediaType(java.lang.String mediaType) {
            this.mediaType = mediaType;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getMediaType}
         * @param mediaType Property mediaType: The type of the media asset.
         *                  Valid values:
         *                  image
         *                  video
         *                  audio
         *                  text
         *                  We recommend that you specify this parameter based on your business requirements. If you set InputURL to an OSS URL, the media asset type can be automatically determined based on the file name extension. For more information
         *                  .
         * @return {@code this}
         */
        public Builder mediaType(com.aliyun.ros.cdk.core.IResolvable mediaType) {
            this.mediaType = mediaType;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getOverwrite}
         * @param overwrite Property overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL.
         *                  Default value: false. Valid values:
         *                  <p>
         *                  <ul>
         *                  <li>true: If a media asset has been registered by using the same URL, the original media asset is deleted and the new media asset is registered.</li>
         *                  <li>false: If a media asset has been registered by using the same URL, the new media asset is not registered. A URL cannot be used to register multiple media assets.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder overwrite(java.lang.Boolean overwrite) {
            this.overwrite = overwrite;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getOverwrite}
         * @param overwrite Property overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL.
         *                  Default value: false. Valid values:
         *                  <p>
         *                  <ul>
         *                  <li>true: If a media asset has been registered by using the same URL, the original media asset is deleted and the new media asset is registered.</li>
         *                  <li>false: If a media asset has been registered by using the same URL, the new media asset is not registered. A URL cannot be used to register multiple media assets.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder overwrite(com.aliyun.ros.cdk.core.IResolvable overwrite) {
            this.overwrite = overwrite;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getReferenceId}
         * @param referenceId Property referenceId: The custom ID.
         *                    The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
         * @return {@code this}
         */
        public Builder referenceId(java.lang.String referenceId) {
            this.referenceId = referenceId;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getReferenceId}
         * @param referenceId Property referenceId: The custom ID.
         *                    The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
         * @return {@code this}
         */
        public Builder referenceId(com.aliyun.ros.cdk.core.IResolvable referenceId) {
            this.referenceId = referenceId;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getRegisterConfig}
         * @param registerConfig Property registerConfig: The registration configurations.
         *                       By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
         *                       By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
         * @return {@code this}
         */
        public Builder registerConfig(java.lang.String registerConfig) {
            this.registerConfig = registerConfig;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getRegisterConfig}
         * @param registerConfig Property registerConfig: The registration configurations.
         *                       By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
         *                       By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
         * @return {@code this}
         */
        public Builder registerConfig(com.aliyun.ros.cdk.core.IResolvable registerConfig) {
            this.registerConfig = registerConfig;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getSmartTagTemplateId}
         * @param smartTagTemplateId Property smartTagTemplateId: The ID of the smart tagging template.
         *                           Valid values:
         *                           S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
         *                           S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
         *                           S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
         *                           After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
         * @return {@code this}
         */
        public Builder smartTagTemplateId(java.lang.String smartTagTemplateId) {
            this.smartTagTemplateId = smartTagTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getSmartTagTemplateId}
         * @param smartTagTemplateId Property smartTagTemplateId: The ID of the smart tagging template.
         *                           Valid values:
         *                           S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
         *                           S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
         *                           S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
         *                           After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
         * @return {@code this}
         */
        public Builder smartTagTemplateId(com.aliyun.ros.cdk.core.IResolvable smartTagTemplateId) {
            this.smartTagTemplateId = smartTagTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getTitle}
         * @param title Property title: The title.
         *              If you do not specify this parameter, a default title is automatically generated based on the date.
         *              The value can be up to 128 bytes in length.
         *              The value must be encoded in UTF-8.
         * @return {@code this}
         */
        public Builder title(java.lang.String title) {
            this.title = title;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getTitle}
         * @param title Property title: The title.
         *              If you do not specify this parameter, a default title is automatically generated based on the date.
         *              The value can be up to 128 bytes in length.
         *              The value must be encoded in UTF-8.
         * @return {@code this}
         */
        public Builder title(com.aliyun.ros.cdk.core.IResolvable title) {
            this.title = title;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getUserData}
         * @param userData Property userData: The user data.
         *                 You can specify a custom callback URL.
         * @return {@code this}
         */
        public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getUserData}
         * @param userData Property userData: The user data.
         *                 You can specify a custom callback URL.
         * @return {@code this}
         */
        public Builder userData(java.util.Map<java.lang.String, ? extends java.lang.Object> userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getWorkflowId}
         * @param workflowId Property workflowId: The workflow ID.
         * @return {@code this}
         */
        public Builder workflowId(java.lang.String workflowId) {
            this.workflowId = workflowId;
            return this;
        }

        /**
         * Sets the value of {@link MediaInfoProps#getWorkflowId}
         * @param workflowId Property workflowId: The workflow ID.
         * @return {@code this}
         */
        public Builder workflowId(com.aliyun.ros.cdk.core.IResolvable workflowId) {
            this.workflowId = workflowId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MediaInfoProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MediaInfoProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MediaInfoProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MediaInfoProps {
        private final java.lang.Object inputUrl;
        private final java.lang.Object businessType;
        private final java.lang.Object cateId;
        private final java.lang.Object coverUrl;
        private final java.lang.Object description;
        private final java.lang.Object mediaTags;
        private final java.lang.Object mediaType;
        private final java.lang.Object overwrite;
        private final java.lang.Object referenceId;
        private final java.lang.Object registerConfig;
        private final java.lang.Object smartTagTemplateId;
        private final java.lang.Object title;
        private final java.lang.Object userData;
        private final java.lang.Object workflowId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.inputUrl = software.amazon.jsii.Kernel.get(this, "inputUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.businessType = software.amazon.jsii.Kernel.get(this, "businessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cateId = software.amazon.jsii.Kernel.get(this, "cateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coverUrl = software.amazon.jsii.Kernel.get(this, "coverUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mediaTags = software.amazon.jsii.Kernel.get(this, "mediaTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mediaType = software.amazon.jsii.Kernel.get(this, "mediaType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.overwrite = software.amazon.jsii.Kernel.get(this, "overwrite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.referenceId = software.amazon.jsii.Kernel.get(this, "referenceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.registerConfig = software.amazon.jsii.Kernel.get(this, "registerConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.smartTagTemplateId = software.amazon.jsii.Kernel.get(this, "smartTagTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.title = software.amazon.jsii.Kernel.get(this, "title", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workflowId = software.amazon.jsii.Kernel.get(this, "workflowId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.inputUrl = java.util.Objects.requireNonNull(builder.inputUrl, "inputUrl is required");
            this.businessType = builder.businessType;
            this.cateId = builder.cateId;
            this.coverUrl = builder.coverUrl;
            this.description = builder.description;
            this.mediaTags = builder.mediaTags;
            this.mediaType = builder.mediaType;
            this.overwrite = builder.overwrite;
            this.referenceId = builder.referenceId;
            this.registerConfig = builder.registerConfig;
            this.smartTagTemplateId = builder.smartTagTemplateId;
            this.title = builder.title;
            this.userData = builder.userData;
            this.workflowId = builder.workflowId;
        }

        @Override
        public final java.lang.Object getInputUrl() {
            return this.inputUrl;
        }

        @Override
        public final java.lang.Object getBusinessType() {
            return this.businessType;
        }

        @Override
        public final java.lang.Object getCateId() {
            return this.cateId;
        }

        @Override
        public final java.lang.Object getCoverUrl() {
            return this.coverUrl;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getMediaTags() {
            return this.mediaTags;
        }

        @Override
        public final java.lang.Object getMediaType() {
            return this.mediaType;
        }

        @Override
        public final java.lang.Object getOverwrite() {
            return this.overwrite;
        }

        @Override
        public final java.lang.Object getReferenceId() {
            return this.referenceId;
        }

        @Override
        public final java.lang.Object getRegisterConfig() {
            return this.registerConfig;
        }

        @Override
        public final java.lang.Object getSmartTagTemplateId() {
            return this.smartTagTemplateId;
        }

        @Override
        public final java.lang.Object getTitle() {
            return this.title;
        }

        @Override
        public final java.lang.Object getUserData() {
            return this.userData;
        }

        @Override
        public final java.lang.Object getWorkflowId() {
            return this.workflowId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("inputUrl", om.valueToTree(this.getInputUrl()));
            if (this.getBusinessType() != null) {
                data.set("businessType", om.valueToTree(this.getBusinessType()));
            }
            if (this.getCateId() != null) {
                data.set("cateId", om.valueToTree(this.getCateId()));
            }
            if (this.getCoverUrl() != null) {
                data.set("coverUrl", om.valueToTree(this.getCoverUrl()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getMediaTags() != null) {
                data.set("mediaTags", om.valueToTree(this.getMediaTags()));
            }
            if (this.getMediaType() != null) {
                data.set("mediaType", om.valueToTree(this.getMediaType()));
            }
            if (this.getOverwrite() != null) {
                data.set("overwrite", om.valueToTree(this.getOverwrite()));
            }
            if (this.getReferenceId() != null) {
                data.set("referenceId", om.valueToTree(this.getReferenceId()));
            }
            if (this.getRegisterConfig() != null) {
                data.set("registerConfig", om.valueToTree(this.getRegisterConfig()));
            }
            if (this.getSmartTagTemplateId() != null) {
                data.set("smartTagTemplateId", om.valueToTree(this.getSmartTagTemplateId()));
            }
            if (this.getTitle() != null) {
                data.set("title", om.valueToTree(this.getTitle()));
            }
            if (this.getUserData() != null) {
                data.set("userData", om.valueToTree(this.getUserData()));
            }
            if (this.getWorkflowId() != null) {
                data.set("workflowId", om.valueToTree(this.getWorkflowId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ice.MediaInfoProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MediaInfoProps.Jsii$Proxy that = (MediaInfoProps.Jsii$Proxy) o;

            if (!inputUrl.equals(that.inputUrl)) return false;
            if (this.businessType != null ? !this.businessType.equals(that.businessType) : that.businessType != null) return false;
            if (this.cateId != null ? !this.cateId.equals(that.cateId) : that.cateId != null) return false;
            if (this.coverUrl != null ? !this.coverUrl.equals(that.coverUrl) : that.coverUrl != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.mediaTags != null ? !this.mediaTags.equals(that.mediaTags) : that.mediaTags != null) return false;
            if (this.mediaType != null ? !this.mediaType.equals(that.mediaType) : that.mediaType != null) return false;
            if (this.overwrite != null ? !this.overwrite.equals(that.overwrite) : that.overwrite != null) return false;
            if (this.referenceId != null ? !this.referenceId.equals(that.referenceId) : that.referenceId != null) return false;
            if (this.registerConfig != null ? !this.registerConfig.equals(that.registerConfig) : that.registerConfig != null) return false;
            if (this.smartTagTemplateId != null ? !this.smartTagTemplateId.equals(that.smartTagTemplateId) : that.smartTagTemplateId != null) return false;
            if (this.title != null ? !this.title.equals(that.title) : that.title != null) return false;
            if (this.userData != null ? !this.userData.equals(that.userData) : that.userData != null) return false;
            return this.workflowId != null ? this.workflowId.equals(that.workflowId) : that.workflowId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.inputUrl.hashCode();
            result = 31 * result + (this.businessType != null ? this.businessType.hashCode() : 0);
            result = 31 * result + (this.cateId != null ? this.cateId.hashCode() : 0);
            result = 31 * result + (this.coverUrl != null ? this.coverUrl.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.mediaTags != null ? this.mediaTags.hashCode() : 0);
            result = 31 * result + (this.mediaType != null ? this.mediaType.hashCode() : 0);
            result = 31 * result + (this.overwrite != null ? this.overwrite.hashCode() : 0);
            result = 31 * result + (this.referenceId != null ? this.referenceId.hashCode() : 0);
            result = 31 * result + (this.registerConfig != null ? this.registerConfig.hashCode() : 0);
            result = 31 * result + (this.smartTagTemplateId != null ? this.smartTagTemplateId.hashCode() : 0);
            result = 31 * result + (this.title != null ? this.title.hashCode() : 0);
            result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
            result = 31 * result + (this.workflowId != null ? this.workflowId.hashCode() : 0);
            return result;
        }
    }
}
