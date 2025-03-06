package com.aliyun.ros.cdk.cs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CS::ApplicationDeployment</code>, which is used to deploy an application.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.378Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ApplicationDeployment")
public class ApplicationDeployment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cs.IApplicationDeployment {

    protected ApplicationDeployment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ApplicationDeployment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ApplicationDeployment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ApplicationDeploymentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ApplicationDeployment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ApplicationDeploymentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TaskId: The task ID of the application deployment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ApplicationDeploymentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.ApplicationDeploymentProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.ApplicationDeployment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.ApplicationDeployment> {
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
        private final com.aliyun.ros.cdk.cs.ApplicationDeploymentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cs.ApplicationDeploymentProps.Builder();
        }

        /**
         * Property chartUrl: Helm chart package URL, must be a valid URL.
         * <p>
         * @return {@code this}
         * @param chartUrl Property chartUrl: Helm chart package URL, must be a valid URL. This parameter is required.
         */
        public Builder chartUrl(final java.lang.String chartUrl) {
            this.props.chartUrl(chartUrl);
            return this;
        }
        /**
         * Property chartUrl: Helm chart package URL, must be a valid URL.
         * <p>
         * @return {@code this}
         * @param chartUrl Property chartUrl: Helm chart package URL, must be a valid URL. This parameter is required.
         */
        public Builder chartUrl(final com.aliyun.ros.cdk.core.IResolvable chartUrl) {
            this.props.chartUrl(chartUrl);
            return this;
        }

        /**
         * Property clusterId: The cluster id of the deployed application.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The cluster id of the deployed application. This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * Property clusterId: The cluster id of the deployed application.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The cluster id of the deployed application. This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * Property name: Name of the deployed application.
         * <p>
         * @return {@code this}
         * @param name Property name: Name of the deployed application. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: Name of the deployed application.
         * <p>
         * @return {@code this}
         * @param name Property name: Name of the deployed application. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property namespace: Deployment namespace.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: Deployment namespace. This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * Property namespace: Deployment namespace.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: Deployment namespace. This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * Property type: Type of the deployed application, currently can only be helm.
         * <p>
         * @return {@code this}
         * @param type Property type: Type of the deployed application, currently can only be helm. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: Type of the deployed application, currently can only be helm.
         * <p>
         * @return {@code this}
         * @param type Property type: Type of the deployed application, currently can only be helm. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property values: Helm deployment parameters, a map that will be converted to YAML text.
         * <p>
         * @return {@code this}
         * @param values Property values: Helm deployment parameters, a map that will be converted to YAML text. This parameter is required.
         */
        public Builder values(final com.aliyun.ros.cdk.core.IResolvable values) {
            this.props.values(values);
            return this;
        }
        /**
         * Property values: Helm deployment parameters, a map that will be converted to YAML text.
         * <p>
         * @return {@code this}
         * @param values Property values: Helm deployment parameters, a map that will be converted to YAML text. This parameter is required.
         */
        public Builder values(final java.util.Map<java.lang.String, ? extends java.lang.Object> values) {
            this.props.values(values);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cs.ApplicationDeployment}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.ApplicationDeployment build() {
            return new com.aliyun.ros.cdk.cs.ApplicationDeployment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
