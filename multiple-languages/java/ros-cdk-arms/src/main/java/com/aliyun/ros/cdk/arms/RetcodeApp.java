package com.aliyun.ros.cdk.arms;

/**
 * A ROS resource type:  <code>ALIYUN::ARMS::RetcodeApp</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:46.478Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RetcodeApp")
public class RetcodeApp extends com.aliyun.ros.cdk.core.Resource {

    protected RetcodeApp(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RetcodeApp(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ARMS::RetcodeApp</code>.
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
    public RetcodeApp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.RetcodeAppProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ARMS::RetcodeApp</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public RetcodeApp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.RetcodeAppProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AppId: The ID of the application for which you created the browser monitoring job.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Pid: The PID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPid() {
        return software.amazon.jsii.Kernel.get(this, "attrPid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.RetcodeApp}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.RetcodeApp> {
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
        private final com.aliyun.ros.cdk.arms.RetcodeAppProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.arms.RetcodeAppProps.Builder();
        }

        /**
         * Property regionId: Region ID.
         * <p>
         * Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
         * <p>
         * @return {@code this}
         * @param regionId Property regionId: Region ID. This parameter is required.
         */
        public Builder regionId(final java.lang.String regionId) {
            this.props.regionId(regionId);
            return this;
        }
        /**
         * Property regionId: Region ID.
         * <p>
         * Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
         * <p>
         * @return {@code this}
         * @param regionId Property regionId: Region ID. This parameter is required.
         */
        public Builder regionId(final com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.props.regionId(regionId);
            return this;
        }

        /**
         * Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
         * <p>
         * @return {@code this}
         * @param retcodeAppName Property retcodeAppName: The name of the application for which you want to create the browser monitoring job. This parameter is required.
         */
        public Builder retcodeAppName(final java.lang.String retcodeAppName) {
            this.props.retcodeAppName(retcodeAppName);
            return this;
        }
        /**
         * Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
         * <p>
         * @return {@code this}
         * @param retcodeAppName Property retcodeAppName: The name of the application for which you want to create the browser monitoring job. This parameter is required.
         */
        public Builder retcodeAppName(final com.aliyun.ros.cdk.core.IResolvable retcodeAppName) {
            this.props.retcodeAppName(retcodeAppName);
            return this;
        }

        /**
         * Property retcodeAppType: The type of the application for which you want to create the browser monitoring job.
         * <p>
         * Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
         * <p>
         * @return {@code this}
         * @param retcodeAppType Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. This parameter is required.
         */
        public Builder retcodeAppType(final java.lang.String retcodeAppType) {
            this.props.retcodeAppType(retcodeAppType);
            return this;
        }
        /**
         * Property retcodeAppType: The type of the application for which you want to create the browser monitoring job.
         * <p>
         * Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
         * <p>
         * @return {@code this}
         * @param retcodeAppType Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. This parameter is required.
         */
        public Builder retcodeAppType(final com.aliyun.ros.cdk.core.IResolvable retcodeAppType) {
            this.props.retcodeAppType(retcodeAppType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.RetcodeApp}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.RetcodeApp build() {
            return new com.aliyun.ros.cdk.arms.RetcodeApp(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
