package com.aliyun.ros.cdk.slb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SLB::AccessLogsAddition</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:50.604Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.AccessLogsAddition")
public class AccessLogsAddition extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.slb.IAccessLogsAddition {

    protected AccessLogsAddition(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AccessLogsAddition(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AccessLogsAddition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.AccessLogsAdditionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AccessLogsAddition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.AccessLogsAdditionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.AccessLogsAdditionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.AccessLogsAdditionProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.AccessLogsAddition}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.AccessLogsAddition> {
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
        private final com.aliyun.ros.cdk.slb.AccessLogsAdditionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.slb.AccessLogsAdditionProps.Builder();
        }

        /**
         * Property loadBalancerId: The load balancer id.Only SLB Layer 7 load balancing (HTTP/HTTPS listening) supports the access log function.Prerequisites1. A SLB instance has been created. For details, see Creating and Managing CLB Instances.2. A virtual server group has been created. Backend servers have been added to the server group.3. HTTP or HTTPS listening has been configured for CLB. 4. You have enabled the log service. For details, see Activating the Log Service.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The load balancer id.Only SLB Layer 7 load balancing (HTTP/HTTPS listening) supports the access log function.Prerequisites1. A SLB instance has been created. For details, see Creating and Managing CLB Instances.2. A virtual server group has been created. Backend servers have been added to the server group.3. HTTP or HTTPS listening has been configured for CLB. 4. You have enabled the log service. For details, see Activating the Log Service. This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * Property loadBalancerId: The load balancer id.Only SLB Layer 7 load balancing (HTTP/HTTPS listening) supports the access log function.Prerequisites1. A SLB instance has been created. For details, see Creating and Managing CLB Instances.2. A virtual server group has been created. Backend servers have been added to the server group.3. HTTP or HTTPS listening has been configured for CLB. 4. You have enabled the log service. For details, see Activating the Log Service.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The load balancer id.Only SLB Layer 7 load balancing (HTTP/HTTPS listening) supports the access log function.Prerequisites1. A SLB instance has been created. For details, see Creating and Managing CLB Instances.2. A virtual server group has been created. Backend servers have been added to the server group.3. HTTP or HTTPS listening has been configured for CLB. 4. You have enabled the log service. For details, see Activating the Log Service. This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * Property logProject: The log project name.
         * <p>
         * @return {@code this}
         * @param logProject Property logProject: The log project name. This parameter is required.
         */
        public Builder logProject(final java.lang.String logProject) {
            this.props.logProject(logProject);
            return this;
        }
        /**
         * Property logProject: The log project name.
         * <p>
         * @return {@code this}
         * @param logProject Property logProject: The log project name. This parameter is required.
         */
        public Builder logProject(final com.aliyun.ros.cdk.core.IResolvable logProject) {
            this.props.logProject(logProject);
            return this;
        }

        /**
         * Property logStore: The log store name.
         * <p>
         * @return {@code this}
         * @param logStore Property logStore: The log store name. This parameter is required.
         */
        public Builder logStore(final java.lang.String logStore) {
            this.props.logStore(logStore);
            return this;
        }
        /**
         * Property logStore: The log store name.
         * <p>
         * @return {@code this}
         * @param logStore Property logStore: The log store name. This parameter is required.
         */
        public Builder logStore(final com.aliyun.ros.cdk.core.IResolvable logStore) {
            this.props.logStore(logStore);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.slb.AccessLogsAddition}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.AccessLogsAddition build() {
            return new com.aliyun.ros.cdk.slb.AccessLogsAddition(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
