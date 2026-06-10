package com.aliyun.ros.cdk.cloudstoragegateway;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CloudStorageGateway::GatewayLogging</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:55:20.329Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudstoragegateway.$Module.class, fqn = "@alicloud/ros-cdk-cloudstoragegateway.GatewayLogging")
public class GatewayLogging extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cloudstoragegateway.IGatewayLogging {

    protected GatewayLogging(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected GatewayLogging(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public GatewayLogging(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudstoragegateway.GatewayLoggingProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public GatewayLogging(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudstoragegateway.GatewayLoggingProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudstoragegateway.GatewayLoggingProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudstoragegateway.GatewayLoggingProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudstoragegateway.GatewayLogging}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudstoragegateway.GatewayLogging> {
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
        private final com.aliyun.ros.cdk.cloudstoragegateway.GatewayLoggingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudstoragegateway.GatewayLoggingProps.Builder();
        }

        /**
         * Property gatewayId: The ID of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayId Property gatewayId: The ID of the gateway. This parameter is required.
         */
        public Builder gatewayId(final java.lang.String gatewayId) {
            this.props.gatewayId(gatewayId);
            return this;
        }
        /**
         * Property gatewayId: The ID of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayId Property gatewayId: The ID of the gateway. This parameter is required.
         */
        public Builder gatewayId(final com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.props.gatewayId(gatewayId);
            return this;
        }

        /**
         * Property slsLogstore: The name of the SLS log store.
         * <p>
         * @return {@code this}
         * @param slsLogstore Property slsLogstore: The name of the SLS log store. This parameter is required.
         */
        public Builder slsLogstore(final java.lang.String slsLogstore) {
            this.props.slsLogstore(slsLogstore);
            return this;
        }
        /**
         * Property slsLogstore: The name of the SLS log store.
         * <p>
         * @return {@code this}
         * @param slsLogstore Property slsLogstore: The name of the SLS log store. This parameter is required.
         */
        public Builder slsLogstore(final com.aliyun.ros.cdk.core.IResolvable slsLogstore) {
            this.props.slsLogstore(slsLogstore);
            return this;
        }

        /**
         * Property slsProject: The name of the SLS project.
         * <p>
         * @return {@code this}
         * @param slsProject Property slsProject: The name of the SLS project. This parameter is required.
         */
        public Builder slsProject(final java.lang.String slsProject) {
            this.props.slsProject(slsProject);
            return this;
        }
        /**
         * Property slsProject: The name of the SLS project.
         * <p>
         * @return {@code this}
         * @param slsProject Property slsProject: The name of the SLS project. This parameter is required.
         */
        public Builder slsProject(final com.aliyun.ros.cdk.core.IResolvable slsProject) {
            this.props.slsProject(slsProject);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudstoragegateway.GatewayLogging}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudstoragegateway.GatewayLogging build() {
            return new com.aliyun.ros.cdk.cloudstoragegateway.GatewayLogging(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
