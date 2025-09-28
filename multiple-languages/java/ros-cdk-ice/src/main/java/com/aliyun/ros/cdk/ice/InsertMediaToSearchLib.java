package com.aliyun.ros.cdk.ice;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ICE::InsertMediaToSearchLib</code>, which is used to add a media asset to a search library.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.527Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ice.$Module.class, fqn = "@alicloud/ros-cdk-ice.InsertMediaToSearchLib")
public class InsertMediaToSearchLib extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ice.IInsertMediaToSearchLib {

    protected InsertMediaToSearchLib(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected InsertMediaToSearchLib(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public InsertMediaToSearchLib(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ice.InsertMediaToSearchLibProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public InsertMediaToSearchLib(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ice.InsertMediaToSearchLibProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute MediaId: The ID of the media asset.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMediaId() {
        return software.amazon.jsii.Kernel.get(this, "attrMediaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ice.InsertMediaToSearchLibProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ice.InsertMediaToSearchLibProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ice.InsertMediaToSearchLib}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ice.InsertMediaToSearchLib> {
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
        private final com.aliyun.ros.cdk.ice.InsertMediaToSearchLibProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ice.InsertMediaToSearchLibProps.Builder();
        }

        /**
         * Property input: The URL of the video, audio, or image file that you want to import to the search library.
         * <p>
         * Note: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail.
         * Specify an Object Storage Service (OSS) URL in the following format: oss://[Bucket name]/[File path]. For example, you can specify oss://[example-bucket-]/[object_path-].
         * Specify an HTTP URL in the following format: public endpoint. For example, you can specify http://example-test-****.mp4.
         * <p>
         * @return {@code this}
         * @param input Property input: The URL of the video, audio, or image file that you want to import to the search library. This parameter is required.
         */
        public Builder input(final java.lang.String input) {
            this.props.input(input);
            return this;
        }
        /**
         * Property input: The URL of the video, audio, or image file that you want to import to the search library.
         * <p>
         * Note: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail.
         * Specify an Object Storage Service (OSS) URL in the following format: oss://[Bucket name]/[File path]. For example, you can specify oss://[example-bucket-]/[object_path-].
         * Specify an HTTP URL in the following format: public endpoint. For example, you can specify http://example-test-****.mp4.
         * <p>
         * @return {@code this}
         * @param input Property input: The URL of the video, audio, or image file that you want to import to the search library. This parameter is required.
         */
        public Builder input(final com.aliyun.ros.cdk.core.IResolvable input) {
            this.props.input(input);
            return this;
        }

        /**
         * Property mediaId: The ID of the media asset.
         * <p>
         * Each media ID is unique. If you leave this parameter empty, a media ID is automatically generated for this parameter.
         * <p>
         * @return {@code this}
         * @param mediaId Property mediaId: The ID of the media asset. This parameter is required.
         */
        public Builder mediaId(final java.lang.String mediaId) {
            this.props.mediaId(mediaId);
            return this;
        }
        /**
         * Property mediaId: The ID of the media asset.
         * <p>
         * Each media ID is unique. If you leave this parameter empty, a media ID is automatically generated for this parameter.
         * <p>
         * @return {@code this}
         * @param mediaId Property mediaId: The ID of the media asset. This parameter is required.
         */
        public Builder mediaId(final com.aliyun.ros.cdk.core.IResolvable mediaId) {
            this.props.mediaId(mediaId);
            return this;
        }

        /**
         * Property mediaType: The type of the media asset.
         * <p>
         * Valid values:
         * video (default)
         * image
         * audio
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
         * video (default)
         * image
         * audio
         * <p>
         * @return {@code this}
         * @param mediaType Property mediaType: The type of the media asset. This parameter is required.
         */
        public Builder mediaType(final com.aliyun.ros.cdk.core.IResolvable mediaType) {
            this.props.mediaType(mediaType);
            return this;
        }

        /**
         * Property msgBody: The message body.
         * <p>
         * @return {@code this}
         * @param msgBody Property msgBody: The message body. This parameter is required.
         */
        public Builder msgBody(final com.aliyun.ros.cdk.core.IResolvable msgBody) {
            this.props.msgBody(msgBody);
            return this;
        }
        /**
         * Property msgBody: The message body.
         * <p>
         * @return {@code this}
         * @param msgBody Property msgBody: The message body. This parameter is required.
         */
        public Builder msgBody(final java.util.Map<java.lang.String, ? extends java.lang.Object> msgBody) {
            this.props.msgBody(msgBody);
            return this;
        }

        /**
         * Property searchLibName: The name of the search library.
         * <p>
         * Default value: ims-default-search-lib.
         * <p>
         * @return {@code this}
         * @param searchLibName Property searchLibName: The name of the search library. This parameter is required.
         */
        public Builder searchLibName(final java.lang.String searchLibName) {
            this.props.searchLibName(searchLibName);
            return this;
        }
        /**
         * Property searchLibName: The name of the search library.
         * <p>
         * Default value: ims-default-search-lib.
         * <p>
         * @return {@code this}
         * @param searchLibName Property searchLibName: The name of the search library. This parameter is required.
         */
        public Builder searchLibName(final com.aliyun.ros.cdk.core.IResolvable searchLibName) {
            this.props.searchLibName(searchLibName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ice.InsertMediaToSearchLib}.
         */
        @Override
        public com.aliyun.ros.cdk.ice.InsertMediaToSearchLib build() {
            return new com.aliyun.ros.cdk.ice.InsertMediaToSearchLib(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
