package com.aliyun.ros.cdk.ice;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ICE::MediaInfo</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.697Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ice.$Module.class, fqn = "@alicloud/ros-cdk-ice.MediaInfo")
public class MediaInfo extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ice.IMediaInfo {

    protected MediaInfo(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MediaInfo(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public MediaInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ice.MediaInfoProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public MediaInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ice.MediaInfoProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute MediaId: The ID of the media asset in IMS.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMediaId() {
        return software.amazon.jsii.Kernel.get(this, "attrMediaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ice.MediaInfoProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ice.MediaInfoProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ice.MediaInfo}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ice.MediaInfo> {
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
        private final com.aliyun.ros.cdk.ice.MediaInfoProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ice.MediaInfoProps.Builder();
        }

        /**
         * Property inputUrl: The URL of the media asset in another service.
         * <p>
         * The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
         * OSS URL in one of the following formats:
         * http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
         * oss://example-bucket/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
         * URL of an ApsaraVideo VOD media asset
         * vod://<em><strong>20b48fb04483915d4f2cd8ac</strong></em>*
         * <p>
         * @return {@code this}
         * @param inputUrl Property inputUrl: The URL of the media asset in another service. This parameter is required.
         */
        public Builder inputUrl(final java.lang.String inputUrl) {
            this.props.inputUrl(inputUrl);
            return this;
        }
        /**
         * Property inputUrl: The URL of the media asset in another service.
         * <p>
         * The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
         * OSS URL in one of the following formats:
         * http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
         * oss://example-bucket/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
         * URL of an ApsaraVideo VOD media asset
         * vod://<em><strong>20b48fb04483915d4f2cd8ac</strong></em>*
         * <p>
         * @return {@code this}
         * @param inputUrl Property inputUrl: The URL of the media asset in another service. This parameter is required.
         */
        public Builder inputUrl(final com.aliyun.ros.cdk.core.IResolvable inputUrl) {
            this.props.inputUrl(inputUrl);
            return this;
        }

        /**
         * Property businessType: The business type of the media asset.
         * <p>
         * Valid values:
         * subtitles
         * watermark
         * opening
         * ending
         * general
         * <p>
         * @return {@code this}
         * @param businessType Property businessType: The business type of the media asset. This parameter is required.
         */
        public Builder businessType(final java.lang.String businessType) {
            this.props.businessType(businessType);
            return this;
        }
        /**
         * Property businessType: The business type of the media asset.
         * <p>
         * Valid values:
         * subtitles
         * watermark
         * opening
         * ending
         * general
         * <p>
         * @return {@code this}
         * @param businessType Property businessType: The business type of the media asset. This parameter is required.
         */
        public Builder businessType(final com.aliyun.ros.cdk.core.IResolvable businessType) {
            this.props.businessType(businessType);
            return this;
        }

        /**
         * Property cateId: The category ID.
         * <p>
         * @return {@code this}
         * @param cateId Property cateId: The category ID. This parameter is required.
         */
        public Builder cateId(final java.lang.Number cateId) {
            this.props.cateId(cateId);
            return this;
        }
        /**
         * Property cateId: The category ID.
         * <p>
         * @return {@code this}
         * @param cateId Property cateId: The category ID. This parameter is required.
         */
        public Builder cateId(final com.aliyun.ros.cdk.core.IResolvable cateId) {
            this.props.cateId(cateId);
            return this;
        }

        /**
         * Property coverUrl: The thumbnail URL of the media asset.
         * <p>
         * The value can be up to 128 bytes in length.
         * The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param coverUrl Property coverUrl: The thumbnail URL of the media asset. This parameter is required.
         */
        public Builder coverUrl(final java.lang.String coverUrl) {
            this.props.coverUrl(coverUrl);
            return this;
        }
        /**
         * Property coverUrl: The thumbnail URL of the media asset.
         * <p>
         * The value can be up to 128 bytes in length.
         * The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param coverUrl Property coverUrl: The thumbnail URL of the media asset. This parameter is required.
         */
        public Builder coverUrl(final com.aliyun.ros.cdk.core.IResolvable coverUrl) {
            this.props.coverUrl(coverUrl);
            return this;
        }

        /**
         * Property description: The description of the media asset.
         * <p>
         * The value can be up to 1,024 bytes in length.
         * The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the media asset. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the media asset.
         * <p>
         * The value can be up to 1,024 bytes in length.
         * The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the media asset. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property mediaTags: The tags of the media asset.
         * <p>
         * Up to 16 tags are supported.
         * Separate multiple tags with commas (,).
         * Each tag can be up to 32 bytes in length.
         * The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param mediaTags Property mediaTags: The tags of the media asset. This parameter is required.
         */
        public Builder mediaTags(final com.aliyun.ros.cdk.core.IResolvable mediaTags) {
            this.props.mediaTags(mediaTags);
            return this;
        }
        /**
         * Property mediaTags: The tags of the media asset.
         * <p>
         * Up to 16 tags are supported.
         * Separate multiple tags with commas (,).
         * Each tag can be up to 32 bytes in length.
         * The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param mediaTags Property mediaTags: The tags of the media asset. This parameter is required.
         */
        public Builder mediaTags(final java.util.List<? extends java.lang.Object> mediaTags) {
            this.props.mediaTags(mediaTags);
            return this;
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
         * <p>
         * @return {@code this}
         * @param mediaType Property mediaType: The type of the media asset. This parameter is required.
         */
        public Builder mediaType(final java.lang.String mediaType) {
            this.props.mediaType(mediaType);
            return this;
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
         * <p>
         * @return {@code this}
         * @param mediaType Property mediaType: The type of the media asset. This parameter is required.
         */
        public Builder mediaType(final com.aliyun.ros.cdk.core.IResolvable mediaType) {
            this.props.mediaType(mediaType);
            return this;
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
         * <p>
         * @return {@code this}
         * @param overwrite Property overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL. This parameter is required.
         */
        public Builder overwrite(final java.lang.Boolean overwrite) {
            this.props.overwrite(overwrite);
            return this;
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
         * <p>
         * @return {@code this}
         * @param overwrite Property overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL. This parameter is required.
         */
        public Builder overwrite(final com.aliyun.ros.cdk.core.IResolvable overwrite) {
            this.props.overwrite(overwrite);
            return this;
        }

        /**
         * Property referenceId: The custom ID.
         * <p>
         * The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
         * <p>
         * @return {@code this}
         * @param referenceId Property referenceId: The custom ID. This parameter is required.
         */
        public Builder referenceId(final java.lang.String referenceId) {
            this.props.referenceId(referenceId);
            return this;
        }
        /**
         * Property referenceId: The custom ID.
         * <p>
         * The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
         * <p>
         * @return {@code this}
         * @param referenceId Property referenceId: The custom ID. This parameter is required.
         */
        public Builder referenceId(final com.aliyun.ros.cdk.core.IResolvable referenceId) {
            this.props.referenceId(referenceId);
            return this;
        }

        /**
         * Property registerConfig: The registration configurations.
         * <p>
         * By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
         * By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
         * <p>
         * @return {@code this}
         * @param registerConfig Property registerConfig: The registration configurations. This parameter is required.
         */
        public Builder registerConfig(final java.lang.String registerConfig) {
            this.props.registerConfig(registerConfig);
            return this;
        }
        /**
         * Property registerConfig: The registration configurations.
         * <p>
         * By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
         * By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
         * <p>
         * @return {@code this}
         * @param registerConfig Property registerConfig: The registration configurations. This parameter is required.
         */
        public Builder registerConfig(final com.aliyun.ros.cdk.core.IResolvable registerConfig) {
            this.props.registerConfig(registerConfig);
            return this;
        }

        /**
         * Property smartTagTemplateId: The ID of the smart tagging template.
         * <p>
         * Valid values:
         * S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
         * S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
         * S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
         * After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
         * <p>
         * @return {@code this}
         * @param smartTagTemplateId Property smartTagTemplateId: The ID of the smart tagging template. This parameter is required.
         */
        public Builder smartTagTemplateId(final java.lang.String smartTagTemplateId) {
            this.props.smartTagTemplateId(smartTagTemplateId);
            return this;
        }
        /**
         * Property smartTagTemplateId: The ID of the smart tagging template.
         * <p>
         * Valid values:
         * S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
         * S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
         * S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
         * After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
         * <p>
         * @return {@code this}
         * @param smartTagTemplateId Property smartTagTemplateId: The ID of the smart tagging template. This parameter is required.
         */
        public Builder smartTagTemplateId(final com.aliyun.ros.cdk.core.IResolvable smartTagTemplateId) {
            this.props.smartTagTemplateId(smartTagTemplateId);
            return this;
        }

        /**
         * Property title: The title.
         * <p>
         * If you do not specify this parameter, a default title is automatically generated based on the date.
         * The value can be up to 128 bytes in length.
         * The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param title Property title: The title. This parameter is required.
         */
        public Builder title(final java.lang.String title) {
            this.props.title(title);
            return this;
        }
        /**
         * Property title: The title.
         * <p>
         * If you do not specify this parameter, a default title is automatically generated based on the date.
         * The value can be up to 128 bytes in length.
         * The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param title Property title: The title. This parameter is required.
         */
        public Builder title(final com.aliyun.ros.cdk.core.IResolvable title) {
            this.props.title(title);
            return this;
        }

        /**
         * Property userData: The user data.
         * <p>
         * You can specify a custom callback URL.
         * <p>
         * @return {@code this}
         * @param userData Property userData: The user data. This parameter is required.
         */
        public Builder userData(final com.aliyun.ros.cdk.core.IResolvable userData) {
            this.props.userData(userData);
            return this;
        }
        /**
         * Property userData: The user data.
         * <p>
         * You can specify a custom callback URL.
         * <p>
         * @return {@code this}
         * @param userData Property userData: The user data. This parameter is required.
         */
        public Builder userData(final java.util.Map<java.lang.String, ? extends java.lang.Object> userData) {
            this.props.userData(userData);
            return this;
        }

        /**
         * Property workflowId: The workflow ID.
         * <p>
         * @return {@code this}
         * @param workflowId Property workflowId: The workflow ID. This parameter is required.
         */
        public Builder workflowId(final java.lang.String workflowId) {
            this.props.workflowId(workflowId);
            return this;
        }
        /**
         * Property workflowId: The workflow ID.
         * <p>
         * @return {@code this}
         * @param workflowId Property workflowId: The workflow ID. This parameter is required.
         */
        public Builder workflowId(final com.aliyun.ros.cdk.core.IResolvable workflowId) {
            this.props.workflowId(workflowId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ice.MediaInfo}.
         */
        @Override
        public com.aliyun.ros.cdk.ice.MediaInfo build() {
            return new com.aliyun.ros.cdk.ice.MediaInfo(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
