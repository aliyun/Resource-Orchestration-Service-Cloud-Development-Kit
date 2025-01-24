package com.aliyun.ros.cdk.ice;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ICE::UploadMedia</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:40.885Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ice.$Module.class, fqn = "@alicloud/ros-cdk-ice.UploadMedia")
public class UploadMedia extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ice.IUploadMedia {

    protected UploadMedia(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected UploadMedia(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public UploadMedia(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ice.UploadMediaProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public UploadMedia(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ice.UploadMediaProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public UploadMedia(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute FileURL: The OSS URL of the file.
     * <p>
     * The URL does not contain the information used for authentication.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrFileUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MediaId: The ID of the media asset.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMediaId() {
        return software.amazon.jsii.Kernel.get(this, "attrMediaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MediaURL: The URL of the media asset.
     * <p>
     * Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMediaUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrMediaUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UploadAddress: The upload URL.
     * <p>
     * Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUploadAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrUploadAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UploadAuth: The upload credential.
     * <p>
     * Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUploadAuth() {
        return software.amazon.jsii.Kernel.get(this, "attrUploadAuth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ice.UploadMediaProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ice.UploadMediaProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ice.UploadMedia}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ice.UploadMedia> {
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
        private com.aliyun.ros.cdk.ice.UploadMediaProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property appId: The application ID.
         * <p>
         * Default value: app-1000000.
         * <p>
         * @return {@code this}
         * @param appId Property appId: The application ID. This parameter is required.
         */
        public Builder appId(final java.lang.String appId) {
            this.props().appId(appId);
            return this;
        }
        /**
         * Property appId: The application ID.
         * <p>
         * Default value: app-1000000.
         * <p>
         * @return {@code this}
         * @param appId Property appId: The application ID. This parameter is required.
         */
        public Builder appId(final com.aliyun.ros.cdk.core.IResolvable appId) {
            this.props().appId(appId);
            return this;
        }

        /**
         * Property entityId: The entity ID.
         * <p>
         * You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
         * <p>
         * @return {@code this}
         * @param entityId Property entityId: The entity ID. This parameter is required.
         */
        public Builder entityId(final java.lang.String entityId) {
            this.props().entityId(entityId);
            return this;
        }
        /**
         * Property entityId: The entity ID.
         * <p>
         * You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
         * <p>
         * @return {@code this}
         * @param entityId Property entityId: The entity ID. This parameter is required.
         */
        public Builder entityId(final com.aliyun.ros.cdk.core.IResolvable entityId) {
            this.props().entityId(entityId);
            return this;
        }

        /**
         * Property fileInfo: The file information, which is in the JSON format and contains the following fields: Type: required.
         * <p>
         * The file type. Valid values: video, image, audio, text, and other.
         * Name: required. The file name without the extension.
         * Size: optional. The file size.
         * Ext: required. The file name extension.
         * <p>
         * @return {@code this}
         * @param fileInfo Property fileInfo: The file information, which is in the JSON format and contains the following fields: Type: required. This parameter is required.
         */
        public Builder fileInfo(final com.aliyun.ros.cdk.core.IResolvable fileInfo) {
            this.props().fileInfo(fileInfo);
            return this;
        }
        /**
         * Property fileInfo: The file information, which is in the JSON format and contains the following fields: Type: required.
         * <p>
         * The file type. Valid values: video, image, audio, text, and other.
         * Name: required. The file name without the extension.
         * Size: optional. The file size.
         * Ext: required. The file name extension.
         * <p>
         * @return {@code this}
         * @param fileInfo Property fileInfo: The file information, which is in the JSON format and contains the following fields: Type: required. This parameter is required.
         */
        public Builder fileInfo(final java.util.Map<java.lang.String, ? extends java.lang.Object> fileInfo) {
            this.props().fileInfo(fileInfo);
            return this;
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
         * <p>
         * @return {@code this}
         * @param mediaMetaData Property mediaMetaData: The metadata of the media asset, which is a JSON string that contains the following fields: Title: required. This parameter is required.
         */
        public Builder mediaMetaData(final com.aliyun.ros.cdk.core.IResolvable mediaMetaData) {
            this.props().mediaMetaData(mediaMetaData);
            return this;
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
         * <p>
         * @return {@code this}
         * @param mediaMetaData Property mediaMetaData: The metadata of the media asset, which is a JSON string that contains the following fields: Title: required. This parameter is required.
         */
        public Builder mediaMetaData(final java.util.Map<java.lang.String, ? extends java.lang.Object> mediaMetaData) {
            this.props().mediaMetaData(mediaMetaData);
            return this;
        }

        /**
         * Property postProcessConfig: Type = video || audio There is a post-upload processing action.
         * <p>
         * ProcessType Value: Workflow.
         * <p>
         * @return {@code this}
         * @param postProcessConfig Property postProcessConfig: Type = video || audio There is a post-upload processing action. This parameter is required.
         */
        public Builder postProcessConfig(final com.aliyun.ros.cdk.core.IResolvable postProcessConfig) {
            this.props().postProcessConfig(postProcessConfig);
            return this;
        }
        /**
         * Property postProcessConfig: Type = video || audio There is a post-upload processing action.
         * <p>
         * ProcessType Value: Workflow.
         * <p>
         * @return {@code this}
         * @param postProcessConfig Property postProcessConfig: Type = video || audio There is a post-upload processing action. This parameter is required.
         */
        public Builder postProcessConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> postProcessConfig) {
            this.props().postProcessConfig(postProcessConfig);
            return this;
        }

        /**
         * Property uploadTargetConfig: The destination storage address.
         * <p>
         * Set StorageType to oss.
         * Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
         * <p>
         * @return {@code this}
         * @param uploadTargetConfig Property uploadTargetConfig: The destination storage address. This parameter is required.
         */
        public Builder uploadTargetConfig(final com.aliyun.ros.cdk.core.IResolvable uploadTargetConfig) {
            this.props().uploadTargetConfig(uploadTargetConfig);
            return this;
        }
        /**
         * Property uploadTargetConfig: The destination storage address.
         * <p>
         * Set StorageType to oss.
         * Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
         * <p>
         * @return {@code this}
         * @param uploadTargetConfig Property uploadTargetConfig: The destination storage address. This parameter is required.
         */
        public Builder uploadTargetConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> uploadTargetConfig) {
            this.props().uploadTargetConfig(uploadTargetConfig);
            return this;
        }

        /**
         * Property userData: The user data.
         * <p>
         * The value must be a JSON string. You can configure settings such as message callbacks.
         * <p>
         * @return {@code this}
         * @param userData Property userData: The user data. This parameter is required.
         */
        public Builder userData(final com.aliyun.ros.cdk.core.IResolvable userData) {
            this.props().userData(userData);
            return this;
        }
        /**
         * Property userData: The user data.
         * <p>
         * The value must be a JSON string. You can configure settings such as message callbacks.
         * <p>
         * @return {@code this}
         * @param userData Property userData: The user data. This parameter is required.
         */
        public Builder userData(final java.util.Map<java.lang.String, ? extends java.lang.Object> userData) {
            this.props().userData(userData);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ice.UploadMedia}.
         */
        @Override
        public com.aliyun.ros.cdk.ice.UploadMedia build() {
            return new com.aliyun.ros.cdk.ice.UploadMedia(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ice.UploadMediaProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ice.UploadMediaProps.Builder();
            }
            return this.props;
        }
    }
}
