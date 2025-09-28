package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::ScheduledPreloadJob</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.603Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.ScheduledPreloadJob")
public class ScheduledPreloadJob extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IScheduledPreloadJob {

    protected ScheduledPreloadJob(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScheduledPreloadJob(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ScheduledPreloadJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ScheduledPreloadJobProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ScheduledPreloadJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ScheduledPreloadJobProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The time when the task was created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Domains: The domain names to be prefetched.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomains() {
        return software.amazon.jsii.Kernel.get(this, "attrDomains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ErrorInfo: The error message.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrErrorInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrErrorInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FailedFileOss: OSS address of failed file.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFailedFileOss() {
        return software.amazon.jsii.Kernel.get(this, "attrFailedFileOss", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FileId: The ID of the URL list file, which can be used during downloads.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileId() {
        return software.amazon.jsii.Kernel.get(this, "attrFileId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InsertWay: The method to submit the URLs to be prefetched.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInsertWay() {
        return software.amazon.jsii.Kernel.get(this, "attrInsertWay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScheduledPreloadJobId: The ID of the prefetch task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduledPreloadJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScheduledPreloadJobName: The task name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadJobName() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduledPreloadJobName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteId: The site ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TaskSubmitted: The number of submitted prefetch tasks.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskSubmitted() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskSubmitted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TaskType: The task type.
     * <p>
     * Valid values: refresh and preload.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskType() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UrlCount: The total number of URLs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlCount() {
        return software.amazon.jsii.Kernel.get(this, "attrUrlCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UrlSubmitted: The number of submitted URLs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlSubmitted() {
        return software.amazon.jsii.Kernel.get(this, "attrUrlSubmitted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ScheduledPreloadJobProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.ScheduledPreloadJobProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.ScheduledPreloadJob}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.ScheduledPreloadJob> {
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
        private final com.aliyun.ros.cdk.esa.ScheduledPreloadJobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.ScheduledPreloadJobProps.Builder();
        }

        /**
         * Property insertWay: The method to submit the URLs to be prefetched.
         * <p>
         * @return {@code this}
         * @param insertWay Property insertWay: The method to submit the URLs to be prefetched. This parameter is required.
         */
        public Builder insertWay(final java.lang.String insertWay) {
            this.props.insertWay(insertWay);
            return this;
        }
        /**
         * Property insertWay: The method to submit the URLs to be prefetched.
         * <p>
         * @return {@code this}
         * @param insertWay Property insertWay: The method to submit the URLs to be prefetched. This parameter is required.
         */
        public Builder insertWay(final com.aliyun.ros.cdk.core.IResolvable insertWay) {
            this.props.insertWay(insertWay);
            return this;
        }

        /**
         * Property scheduledPreloadJobName: The name of the scheduled prefetch task.
         * <p>
         * @return {@code this}
         * @param scheduledPreloadJobName Property scheduledPreloadJobName: The name of the scheduled prefetch task. This parameter is required.
         */
        public Builder scheduledPreloadJobName(final java.lang.String scheduledPreloadJobName) {
            this.props.scheduledPreloadJobName(scheduledPreloadJobName);
            return this;
        }
        /**
         * Property scheduledPreloadJobName: The name of the scheduled prefetch task.
         * <p>
         * @return {@code this}
         * @param scheduledPreloadJobName Property scheduledPreloadJobName: The name of the scheduled prefetch task. This parameter is required.
         */
        public Builder scheduledPreloadJobName(final com.aliyun.ros.cdk.core.IResolvable scheduledPreloadJobName) {
            this.props.scheduledPreloadJobName(scheduledPreloadJobName);
            return this;
        }

        /**
         * Property siteId: The site ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: The site ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property ossUrl: Preheat OSS files regularly and fill in the OSS file address.
         * <p>
         * Note: The OSS file contains the URL that you need to warm up.
         * <p>
         * @return {@code this}
         * @param ossUrl Property ossUrl: Preheat OSS files regularly and fill in the OSS file address. This parameter is required.
         */
        public Builder ossUrl(final java.lang.String ossUrl) {
            this.props.ossUrl(ossUrl);
            return this;
        }
        /**
         * Property ossUrl: Preheat OSS files regularly and fill in the OSS file address.
         * <p>
         * Note: The OSS file contains the URL that you need to warm up.
         * <p>
         * @return {@code this}
         * @param ossUrl Property ossUrl: Preheat OSS files regularly and fill in the OSS file address. This parameter is required.
         */
        public Builder ossUrl(final com.aliyun.ros.cdk.core.IResolvable ossUrl) {
            this.props.ossUrl(ossUrl);
            return this;
        }

        /**
         * Property urlList: A list of URLs to be preheated, which is used when uploading a preheated file in the text box mode.
         * <p>
         * @return {@code this}
         * @param urlList Property urlList: A list of URLs to be preheated, which is used when uploading a preheated file in the text box mode. This parameter is required.
         */
        public Builder urlList(final com.aliyun.ros.cdk.core.IResolvable urlList) {
            this.props.urlList(urlList);
            return this;
        }
        /**
         * Property urlList: A list of URLs to be preheated, which is used when uploading a preheated file in the text box mode.
         * <p>
         * @return {@code this}
         * @param urlList Property urlList: A list of URLs to be preheated, which is used when uploading a preheated file in the text box mode. This parameter is required.
         */
        public Builder urlList(final java.util.List<? extends java.lang.Object> urlList) {
            this.props.urlList(urlList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.ScheduledPreloadJob}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.ScheduledPreloadJob build() {
            return new com.aliyun.ros.cdk.esa.ScheduledPreloadJob(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
