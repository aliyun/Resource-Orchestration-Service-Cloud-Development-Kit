package com.aliyun.ros.cdk.ice;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ICE::MediaInfo</code>, which is used to register a media asset in Intelligent Media Services (IMS).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.206Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ice.$Module.class, fqn = "@alicloud/ros-cdk-ice.RosMediaInfo")
public class RosMediaInfo extends com.aliyun.ros.cdk.core.RosResource {

    protected RosMediaInfo(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosMediaInfo(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ice.RosMediaInfo.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosMediaInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ice.RosMediaInfoProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMediaId() {
        return software.amazon.jsii.Kernel.get(this, "attrMediaId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInputUrl() {
        return software.amazon.jsii.Kernel.get(this, "inputUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInputUrl(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "inputUrl", java.util.Objects.requireNonNull(value, "inputUrl is required"));
    }

    /**
     */
    public void setInputUrl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "inputUrl", java.util.Objects.requireNonNull(value, "inputUrl is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBusinessType() {
        return software.amazon.jsii.Kernel.get(this, "businessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBusinessType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "businessType", value);
    }

    /**
     */
    public void setBusinessType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "businessType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCateId() {
        return software.amazon.jsii.Kernel.get(this, "cateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCateId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cateId", value);
    }

    /**
     */
    public void setCateId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cateId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCoverUrl() {
        return software.amazon.jsii.Kernel.get(this, "coverUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCoverUrl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "coverUrl", value);
    }

    /**
     */
    public void setCoverUrl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "coverUrl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMediaTags() {
        return software.amazon.jsii.Kernel.get(this, "mediaTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMediaTags(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mediaTags", value);
    }

    /**
     */
    public void setMediaTags(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "mediaTags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMediaType() {
        return software.amazon.jsii.Kernel.get(this, "mediaType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMediaType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mediaType", value);
    }

    /**
     */
    public void setMediaType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mediaType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOverwrite() {
        return software.amazon.jsii.Kernel.get(this, "overwrite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOverwrite(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "overwrite", value);
    }

    /**
     */
    public void setOverwrite(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "overwrite", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReferenceId() {
        return software.amazon.jsii.Kernel.get(this, "referenceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReferenceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "referenceId", value);
    }

    /**
     */
    public void setReferenceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "referenceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRegisterConfig() {
        return software.amazon.jsii.Kernel.get(this, "registerConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRegisterConfig(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "registerConfig", value);
    }

    /**
     */
    public void setRegisterConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "registerConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSmartTagTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "smartTagTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSmartTagTemplateId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "smartTagTemplateId", value);
    }

    /**
     */
    public void setSmartTagTemplateId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "smartTagTemplateId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTitle() {
        return software.amazon.jsii.Kernel.get(this, "title", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTitle(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "title", value);
    }

    /**
     */
    public void setTitle(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "title", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
        return software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserData(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userData", value);
    }

    /**
     */
    public void setUserData(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "userData", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkflowId() {
        return software.amazon.jsii.Kernel.get(this, "workflowId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkflowId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workflowId", value);
    }

    /**
     */
    public void setWorkflowId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workflowId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ice.RosMediaInfo}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ice.RosMediaInfo> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ice.RosMediaInfoProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ice.RosMediaInfoProps.Builder();
        }

        /**
         * @return {@code this}
         * @param inputUrl This parameter is required.
         */
        public Builder inputUrl(final java.lang.String inputUrl) {
            this.props.inputUrl(inputUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param inputUrl This parameter is required.
         */
        public Builder inputUrl(final com.aliyun.ros.cdk.core.IResolvable inputUrl) {
            this.props.inputUrl(inputUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param businessType This parameter is required.
         */
        public Builder businessType(final java.lang.String businessType) {
            this.props.businessType(businessType);
            return this;
        }
        /**
         * @return {@code this}
         * @param businessType This parameter is required.
         */
        public Builder businessType(final com.aliyun.ros.cdk.core.IResolvable businessType) {
            this.props.businessType(businessType);
            return this;
        }

        /**
         * @return {@code this}
         * @param cateId This parameter is required.
         */
        public Builder cateId(final java.lang.Number cateId) {
            this.props.cateId(cateId);
            return this;
        }
        /**
         * @return {@code this}
         * @param cateId This parameter is required.
         */
        public Builder cateId(final com.aliyun.ros.cdk.core.IResolvable cateId) {
            this.props.cateId(cateId);
            return this;
        }

        /**
         * @return {@code this}
         * @param coverUrl This parameter is required.
         */
        public Builder coverUrl(final java.lang.String coverUrl) {
            this.props.coverUrl(coverUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param coverUrl This parameter is required.
         */
        public Builder coverUrl(final com.aliyun.ros.cdk.core.IResolvable coverUrl) {
            this.props.coverUrl(coverUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param mediaTags This parameter is required.
         */
        public Builder mediaTags(final com.aliyun.ros.cdk.core.IResolvable mediaTags) {
            this.props.mediaTags(mediaTags);
            return this;
        }
        /**
         * @return {@code this}
         * @param mediaTags This parameter is required.
         */
        public Builder mediaTags(final java.util.List<? extends java.lang.Object> mediaTags) {
            this.props.mediaTags(mediaTags);
            return this;
        }

        /**
         * @return {@code this}
         * @param mediaType This parameter is required.
         */
        public Builder mediaType(final java.lang.String mediaType) {
            this.props.mediaType(mediaType);
            return this;
        }
        /**
         * @return {@code this}
         * @param mediaType This parameter is required.
         */
        public Builder mediaType(final com.aliyun.ros.cdk.core.IResolvable mediaType) {
            this.props.mediaType(mediaType);
            return this;
        }

        /**
         * @return {@code this}
         * @param overwrite This parameter is required.
         */
        public Builder overwrite(final java.lang.Boolean overwrite) {
            this.props.overwrite(overwrite);
            return this;
        }
        /**
         * @return {@code this}
         * @param overwrite This parameter is required.
         */
        public Builder overwrite(final com.aliyun.ros.cdk.core.IResolvable overwrite) {
            this.props.overwrite(overwrite);
            return this;
        }

        /**
         * @return {@code this}
         * @param referenceId This parameter is required.
         */
        public Builder referenceId(final java.lang.String referenceId) {
            this.props.referenceId(referenceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param referenceId This parameter is required.
         */
        public Builder referenceId(final com.aliyun.ros.cdk.core.IResolvable referenceId) {
            this.props.referenceId(referenceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param registerConfig This parameter is required.
         */
        public Builder registerConfig(final java.lang.String registerConfig) {
            this.props.registerConfig(registerConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param registerConfig This parameter is required.
         */
        public Builder registerConfig(final com.aliyun.ros.cdk.core.IResolvable registerConfig) {
            this.props.registerConfig(registerConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param smartTagTemplateId This parameter is required.
         */
        public Builder smartTagTemplateId(final java.lang.String smartTagTemplateId) {
            this.props.smartTagTemplateId(smartTagTemplateId);
            return this;
        }
        /**
         * @return {@code this}
         * @param smartTagTemplateId This parameter is required.
         */
        public Builder smartTagTemplateId(final com.aliyun.ros.cdk.core.IResolvable smartTagTemplateId) {
            this.props.smartTagTemplateId(smartTagTemplateId);
            return this;
        }

        /**
         * @return {@code this}
         * @param title This parameter is required.
         */
        public Builder title(final java.lang.String title) {
            this.props.title(title);
            return this;
        }
        /**
         * @return {@code this}
         * @param title This parameter is required.
         */
        public Builder title(final com.aliyun.ros.cdk.core.IResolvable title) {
            this.props.title(title);
            return this;
        }

        /**
         * @return {@code this}
         * @param userData This parameter is required.
         */
        public Builder userData(final com.aliyun.ros.cdk.core.IResolvable userData) {
            this.props.userData(userData);
            return this;
        }
        /**
         * @return {@code this}
         * @param userData This parameter is required.
         */
        public Builder userData(final java.util.Map<java.lang.String, ? extends java.lang.Object> userData) {
            this.props.userData(userData);
            return this;
        }

        /**
         * @return {@code this}
         * @param workflowId This parameter is required.
         */
        public Builder workflowId(final java.lang.String workflowId) {
            this.props.workflowId(workflowId);
            return this;
        }
        /**
         * @return {@code this}
         * @param workflowId This parameter is required.
         */
        public Builder workflowId(final com.aliyun.ros.cdk.core.IResolvable workflowId) {
            this.props.workflowId(workflowId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ice.RosMediaInfo}.
         */
        @Override
        public com.aliyun.ros.cdk.ice.RosMediaInfo build() {
            return new com.aliyun.ros.cdk.ice.RosMediaInfo(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
