package com.aliyun.ros.cdk.sae;

/**
 * A ROS resource type:  <code>ALIYUN::SAE::SlbBinding</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:47.544Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.SlbBinding")
public class SlbBinding extends com.aliyun.ros.cdk.core.Resource {

    protected SlbBinding(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SlbBinding(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::SAE::SlbBinding</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public SlbBinding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.SlbBindingProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::SAE::SlbBinding</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public SlbBinding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.SlbBindingProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AppId: Successful application deployment target ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrChangeOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrChangeOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sae.SlbBinding}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sae.SlbBinding> {
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
        private final com.aliyun.ros.cdk.sae.SlbBindingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sae.SlbBindingProps.Builder();
        }

        /**
         * Property appId: Successful application deployment target ID.
         * <p>
         * @return {@code this}
         * @param appId Property appId: Successful application deployment target ID. This parameter is required.
         */
        public Builder appId(final java.lang.String appId) {
            this.props.appId(appId);
            return this;
        }
        /**
         * Property appId: Successful application deployment target ID.
         * <p>
         * @return {@code this}
         * @param appId Property appId: Successful application deployment target ID. This parameter is required.
         */
        public Builder appId(final com.aliyun.ros.cdk.core.IResolvable appId) {
            this.props.appId(appId);
            return this;
        }

        /**
         * Property internet: Binding public SLB.
         * <p>
         * For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
         * <p>
         * @return {@code this}
         * @param internet Property internet: Binding public SLB. This parameter is required.
         */
        public Builder internet(final java.lang.String internet) {
            this.props.internet(internet);
            return this;
        }
        /**
         * Property internet: Binding public SLB.
         * <p>
         * For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
         * <p>
         * @return {@code this}
         * @param internet Property internet: Binding public SLB. This parameter is required.
         */
        public Builder internet(final com.aliyun.ros.cdk.core.IResolvable internet) {
            this.props.internet(internet);
            return this;
        }

        /**
         * Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples.
         * <p>
         * @return {@code this}
         * @param internetSlbId Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples. This parameter is required.
         */
        public Builder internetSlbId(final java.lang.String internetSlbId) {
            this.props.internetSlbId(internetSlbId);
            return this;
        }
        /**
         * Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples.
         * <p>
         * @return {@code this}
         * @param internetSlbId Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples. This parameter is required.
         */
        public Builder internetSlbId(final com.aliyun.ros.cdk.core.IResolvable internetSlbId) {
            this.props.internetSlbId(internetSlbId);
            return this;
        }

        /**
         * Property intranet: Bind private SLB.
         * <p>
         * For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
         * <p>
         * @return {@code this}
         * @param intranet Property intranet: Bind private SLB. This parameter is required.
         */
        public Builder intranet(final java.lang.String intranet) {
            this.props.intranet(intranet);
            return this;
        }
        /**
         * Property intranet: Bind private SLB.
         * <p>
         * For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
         * <p>
         * @return {@code this}
         * @param intranet Property intranet: Bind private SLB. This parameter is required.
         */
        public Builder intranet(final com.aliyun.ros.cdk.core.IResolvable intranet) {
            this.props.intranet(intranet);
            return this;
        }

        /**
         * Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples.
         * <p>
         * @return {@code this}
         * @param intranetSlbId Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples. This parameter is required.
         */
        public Builder intranetSlbId(final java.lang.String intranetSlbId) {
            this.props.intranetSlbId(intranetSlbId);
            return this;
        }
        /**
         * Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples.
         * <p>
         * @return {@code this}
         * @param intranetSlbId Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples. This parameter is required.
         */
        public Builder intranetSlbId(final com.aliyun.ros.cdk.core.IResolvable intranetSlbId) {
            this.props.intranetSlbId(intranetSlbId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sae.SlbBinding}.
         */
        @Override
        public com.aliyun.ros.cdk.sae.SlbBinding build() {
            return new com.aliyun.ros.cdk.sae.SlbBinding(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
