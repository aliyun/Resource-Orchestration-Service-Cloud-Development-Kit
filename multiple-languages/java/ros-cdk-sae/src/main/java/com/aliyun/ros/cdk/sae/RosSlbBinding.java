package com.aliyun.ros.cdk.sae;

/**
 * A ROS template type:  `ALIYUN::SAE::SlbBinding`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:26.896Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosSlbBinding")
public class RosSlbBinding extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSlbBinding(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSlbBinding(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sae.RosSlbBinding.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::SAE::SlbBinding`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSlbBinding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.RosSlbBindingProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrChangeOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrChangeOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAppId() {
        return software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appId", java.util.Objects.requireNonNull(value, "appId is required"));
    }

    /**
     */
    public void setAppId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appId", java.util.Objects.requireNonNull(value, "appId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInternet() {
        return software.amazon.jsii.Kernel.get(this, "internet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInternet(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "internet", value);
    }

    /**
     */
    public void setInternet(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "internet", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInternetSlbId() {
        return software.amazon.jsii.Kernel.get(this, "internetSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInternetSlbId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "internetSlbId", value);
    }

    /**
     */
    public void setInternetSlbId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "internetSlbId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIntranet() {
        return software.amazon.jsii.Kernel.get(this, "intranet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIntranet(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "intranet", value);
    }

    /**
     */
    public void setIntranet(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "intranet", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIntranetSlbId() {
        return software.amazon.jsii.Kernel.get(this, "intranetSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIntranetSlbId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "intranetSlbId", value);
    }

    /**
     */
    public void setIntranetSlbId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "intranetSlbId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sae.RosSlbBinding}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sae.RosSlbBinding> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.sae.RosSlbBindingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sae.RosSlbBindingProps.Builder();
        }

        /**
         * @return {@code this}
         * @param appId This parameter is required.
         */
        public Builder appId(final java.lang.String appId) {
            this.props.appId(appId);
            return this;
        }
        /**
         * @return {@code this}
         * @param appId This parameter is required.
         */
        public Builder appId(final com.aliyun.ros.cdk.core.IResolvable appId) {
            this.props.appId(appId);
            return this;
        }

        /**
         * @return {@code this}
         * @param internet This parameter is required.
         */
        public Builder internet(final java.lang.String internet) {
            this.props.internet(internet);
            return this;
        }
        /**
         * @return {@code this}
         * @param internet This parameter is required.
         */
        public Builder internet(final com.aliyun.ros.cdk.core.IResolvable internet) {
            this.props.internet(internet);
            return this;
        }

        /**
         * @return {@code this}
         * @param internetSlbId This parameter is required.
         */
        public Builder internetSlbId(final java.lang.String internetSlbId) {
            this.props.internetSlbId(internetSlbId);
            return this;
        }
        /**
         * @return {@code this}
         * @param internetSlbId This parameter is required.
         */
        public Builder internetSlbId(final com.aliyun.ros.cdk.core.IResolvable internetSlbId) {
            this.props.internetSlbId(internetSlbId);
            return this;
        }

        /**
         * @return {@code this}
         * @param intranet This parameter is required.
         */
        public Builder intranet(final java.lang.String intranet) {
            this.props.intranet(intranet);
            return this;
        }
        /**
         * @return {@code this}
         * @param intranet This parameter is required.
         */
        public Builder intranet(final com.aliyun.ros.cdk.core.IResolvable intranet) {
            this.props.intranet(intranet);
            return this;
        }

        /**
         * @return {@code this}
         * @param intranetSlbId This parameter is required.
         */
        public Builder intranetSlbId(final java.lang.String intranetSlbId) {
            this.props.intranetSlbId(intranetSlbId);
            return this;
        }
        /**
         * @return {@code this}
         * @param intranetSlbId This parameter is required.
         */
        public Builder intranetSlbId(final com.aliyun.ros.cdk.core.IResolvable intranetSlbId) {
            this.props.intranetSlbId(intranetSlbId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sae.RosSlbBinding}.
         */
        @Override
        public com.aliyun.ros.cdk.sae.RosSlbBinding build() {
            return new com.aliyun.ros.cdk.sae.RosSlbBinding(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
