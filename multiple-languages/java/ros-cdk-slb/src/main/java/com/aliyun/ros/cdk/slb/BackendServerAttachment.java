package com.aliyun.ros.cdk.slb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SLB::BackendServerAttachment</code>, which is used to attach backend servers to an SLB instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:09.280Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.BackendServerAttachment")
public class BackendServerAttachment extends com.aliyun.ros.cdk.core.Resource {

    protected BackendServerAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected BackendServerAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public BackendServerAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.BackendServerAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public BackendServerAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.BackendServerAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BackendServers: The collection of attached backend server.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBackendServers() {
        return software.amazon.jsii.Kernel.get(this, "attrBackendServers", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LoadBalancerId: The id of load balancer.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.BackendServerAttachmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.BackendServerAttachmentProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.BackendServerAttachmentProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.BackendServerAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.BackendServerAttachment> {
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
        private final com.aliyun.ros.cdk.slb.BackendServerAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.slb.BackendServerAttachmentProps.Builder();
        }

        /**
         * Property loadBalancerId: The id of load balancer.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The id of load balancer. This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * Property loadBalancerId: The id of load balancer.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The id of load balancer. This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
         * <p>
         * @return {@code this}
         * @param backendServerList Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored. This parameter is required.
         */
        public Builder backendServerList(final com.aliyun.ros.cdk.core.IResolvable backendServerList) {
            this.props.backendServerList(backendServerList);
            return this;
        }
        /**
         * Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
         * <p>
         * @return {@code this}
         * @param backendServerList Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored. This parameter is required.
         */
        public Builder backendServerList(final java.util.List<? extends java.lang.Object> backendServerList) {
            this.props.backendServerList(backendServerList);
            return this;
        }

        /**
         * Property backendServers: The list of ECS instance, which will attached to load balancer.
         * <p>
         * @return {@code this}
         * @param backendServers Property backendServers: The list of ECS instance, which will attached to load balancer. This parameter is required.
         */
        public Builder backendServers(final com.aliyun.ros.cdk.core.IResolvable backendServers) {
            this.props.backendServers(backendServers);
            return this;
        }
        /**
         * Property backendServers: The list of ECS instance, which will attached to load balancer.
         * <p>
         * @return {@code this}
         * @param backendServers Property backendServers: The list of ECS instance, which will attached to load balancer. This parameter is required.
         */
        public Builder backendServers(final java.util.List<? extends java.lang.Object> backendServers) {
            this.props.backendServers(backendServers);
            return this;
        }

        /**
         * Property backendServerWeightList: The comma delimited weight list.
         * <p>
         * If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
         * <p>
         * @return {@code this}
         * @param backendServerWeightList Property backendServerWeightList: The comma delimited weight list. This parameter is required.
         */
        public Builder backendServerWeightList(final java.util.List<? extends java.lang.Object> backendServerWeightList) {
            this.props.backendServerWeightList(backendServerWeightList);
            return this;
        }
        /**
         * Property backendServerWeightList: The comma delimited weight list.
         * <p>
         * If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
         * <p>
         * @return {@code this}
         * @param backendServerWeightList Property backendServerWeightList: The comma delimited weight list. This parameter is required.
         */
        public Builder backendServerWeightList(final com.aliyun.ros.cdk.core.IResolvable backendServerWeightList) {
            this.props.backendServerWeightList(backendServerWeightList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.slb.BackendServerAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.BackendServerAttachment build() {
            return new com.aliyun.ros.cdk.slb.BackendServerAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
