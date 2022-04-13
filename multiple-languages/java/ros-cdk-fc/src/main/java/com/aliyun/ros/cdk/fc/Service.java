package com.aliyun.ros.cdk.fc;

/**
 * A ROS resource type:  `ALIYUN::FC::Service`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:15.101Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.Service")
public class Service extends com.aliyun.ros.cdk.core.Resource {

    protected Service(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Service(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::FC::Service`.
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
    public Service(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.ServiceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::FC::Service`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Service(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.ServiceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InternetAccess: Whether enable Internet access.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternetAccess() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetAccess", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LogProject: Log project of service.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLogProject() {
        return software.amazon.jsii.Kernel.get(this, "attrLogProject", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Logstore: Log store of service.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLogstore() {
        return software.amazon.jsii.Kernel.get(this, "attrLogstore", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Role: Role of service.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRole() {
        return software.amazon.jsii.Kernel.get(this, "attrRole", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceId: The service ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceName: The service name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Tags: Tags of service.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: VPC ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.Service}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.Service> {
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
        private final com.aliyun.ros.cdk.fc.ServiceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc.ServiceProps.Builder();
        }

        /**
         * Property serviceName: Service name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }
        /**
         * Property serviceName: Service name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * Property description: Service description.
         * <p>
         * @return {@code this}
         * @param description Property description: Service description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Service description.
         * <p>
         * @return {@code this}
         * @param description Property description: Service description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property internetAccess: Set it to true to enable Internet access.
         * <p>
         * @return {@code this}
         * @param internetAccess Property internetAccess: Set it to true to enable Internet access. This parameter is required.
         */
        public Builder internetAccess(final java.lang.Boolean internetAccess) {
            this.props.internetAccess(internetAccess);
            return this;
        }
        /**
         * Property internetAccess: Set it to true to enable Internet access.
         * <p>
         * @return {@code this}
         * @param internetAccess Property internetAccess: Set it to true to enable Internet access. This parameter is required.
         */
        public Builder internetAccess(final com.aliyun.ros.cdk.core.IResolvable internetAccess) {
            this.props.internetAccess(internetAccess);
            return this;
        }

        /**
         * Property logConfig: Log configuration.
         * <p>
         * Function Compute pushes function execution logs to the configured log store.
         * <p>
         * @return {@code this}
         * @param logConfig Property logConfig: Log configuration. This parameter is required.
         */
        public Builder logConfig(final com.aliyun.ros.cdk.core.IResolvable logConfig) {
            this.props.logConfig(logConfig);
            return this;
        }
        /**
         * Property logConfig: Log configuration.
         * <p>
         * Function Compute pushes function execution logs to the configured log store.
         * <p>
         * @return {@code this}
         * @param logConfig Property logConfig: Log configuration. This parameter is required.
         */
        public Builder logConfig(final com.aliyun.ros.cdk.fc.RosService.LogConfigProperty logConfig) {
            this.props.logConfig(logConfig);
            return this;
        }

        /**
         * Property nasConfig: NAS configuration.
         * <p>
         * Function Compute uses a specified NAS configured on the service.
         * <p>
         * @return {@code this}
         * @param nasConfig Property nasConfig: NAS configuration. This parameter is required.
         */
        public Builder nasConfig(final com.aliyun.ros.cdk.core.IResolvable nasConfig) {
            this.props.nasConfig(nasConfig);
            return this;
        }
        /**
         * Property nasConfig: NAS configuration.
         * <p>
         * Function Compute uses a specified NAS configured on the service.
         * <p>
         * @return {@code this}
         * @param nasConfig Property nasConfig: NAS configuration. This parameter is required.
         */
        public Builder nasConfig(final com.aliyun.ros.cdk.fc.RosService.NasConfigProperty nasConfig) {
            this.props.nasConfig(nasConfig);
            return this;
        }

        /**
         * Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store.
         * <p>
         * The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
         * <p>
         * @return {@code this}
         * @param role Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. This parameter is required.
         */
        public Builder role(final java.lang.String role) {
            this.props.role(role);
            return this;
        }
        /**
         * Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store.
         * <p>
         * The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
         * <p>
         * @return {@code this}
         * @param role Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. This parameter is required.
         */
        public Builder role(final com.aliyun.ros.cdk.core.IResolvable role) {
            this.props.role(role);
            return this;
        }

        /**
         * Property tags: Tags to attach to service.
         * <p>
         * Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to service. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.fc.RosService.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property tracingConfig: The Tracing Analysis configuration.
         * <p>
         * After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
         * <p>
         * @return {@code this}
         * @param tracingConfig Property tracingConfig: The Tracing Analysis configuration. This parameter is required.
         */
        public Builder tracingConfig(final com.aliyun.ros.cdk.core.IResolvable tracingConfig) {
            this.props.tracingConfig(tracingConfig);
            return this;
        }
        /**
         * Property tracingConfig: The Tracing Analysis configuration.
         * <p>
         * After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
         * <p>
         * @return {@code this}
         * @param tracingConfig Property tracingConfig: The Tracing Analysis configuration. This parameter is required.
         */
        public Builder tracingConfig(final com.aliyun.ros.cdk.fc.RosService.TracingConfigProperty tracingConfig) {
            this.props.tracingConfig(tracingConfig);
            return this;
        }

        /**
         * Property vpcBindings: Function Invocation only by Specified VPCs.
         * <p>
         * By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
         * <p>
         * @return {@code this}
         * @param vpcBindings Property vpcBindings: Function Invocation only by Specified VPCs. This parameter is required.
         */
        public Builder vpcBindings(final com.aliyun.ros.cdk.core.IResolvable vpcBindings) {
            this.props.vpcBindings(vpcBindings);
            return this;
        }
        /**
         * Property vpcBindings: Function Invocation only by Specified VPCs.
         * <p>
         * By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
         * <p>
         * @return {@code this}
         * @param vpcBindings Property vpcBindings: Function Invocation only by Specified VPCs. This parameter is required.
         */
        public Builder vpcBindings(final java.util.List<? extends java.lang.Object> vpcBindings) {
            this.props.vpcBindings(vpcBindings);
            return this;
        }

        /**
         * Property vpcConfig: VPC configuration.
         * <p>
         * Function Compute uses the config to setup ENI in the specific VPC.
         * <p>
         * @return {@code this}
         * @param vpcConfig Property vpcConfig: VPC configuration. This parameter is required.
         */
        public Builder vpcConfig(final com.aliyun.ros.cdk.core.IResolvable vpcConfig) {
            this.props.vpcConfig(vpcConfig);
            return this;
        }
        /**
         * Property vpcConfig: VPC configuration.
         * <p>
         * Function Compute uses the config to setup ENI in the specific VPC.
         * <p>
         * @return {@code this}
         * @param vpcConfig Property vpcConfig: VPC configuration. This parameter is required.
         */
        public Builder vpcConfig(final com.aliyun.ros.cdk.fc.RosService.VpcConfigProperty vpcConfig) {
            this.props.vpcConfig(vpcConfig);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.fc.Service}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.Service build() {
            return new com.aliyun.ros.cdk.fc.Service(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
