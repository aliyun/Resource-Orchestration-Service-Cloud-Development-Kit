package com.aliyun.ros.cdk.edas;

/**
 * A ROS resource type:  `ALIYUN::EDAS::K8sSlbBinding`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:25.670Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.K8sSlbBinding")
public class K8sSlbBinding extends com.aliyun.ros.cdk.core.Resource {

    protected K8sSlbBinding(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected K8sSlbBinding(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::EDAS::K8sSlbBinding`.
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
    public K8sSlbBinding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.K8sSlbBindingProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::EDAS::K8sSlbBinding`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public K8sSlbBinding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.K8sSlbBindingProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Address: The address of load balancer instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AppId: The ID of the application.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ChangeOrderId: The ID of the change process.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrChangeOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrChangeOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LoadBalancerId: The ID of load balancer instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LoadBalancerName: The name of load balancer instance defined in EDAS.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerName() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.edas.K8sSlbBinding}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.edas.K8sSlbBinding> {
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
        private final com.aliyun.ros.cdk.edas.K8sSlbBindingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.edas.K8sSlbBindingProps.Builder();
        }

        /**
         * Property appId: The ID of the application.
         * <p>
         * @return {@code this}
         * @param appId Property appId: The ID of the application. This parameter is required.
         */
        public Builder appId(final java.lang.String appId) {
            this.props.appId(appId);
            return this;
        }
        /**
         * Property appId: The ID of the application.
         * <p>
         * @return {@code this}
         * @param appId Property appId: The ID of the application. This parameter is required.
         */
        public Builder appId(final com.aliyun.ros.cdk.core.IResolvable appId) {
            this.props.appId(appId);
            return this;
        }

        /**
         * Property clusterId: The ID of the cluster.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The ID of the cluster. This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * Property clusterId: The ID of the cluster.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The ID of the cluster. This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * Property servicePortInfos: The information about the ports.
         * <p>
         * @return {@code this}
         * @param servicePortInfos Property servicePortInfos: The information about the ports. This parameter is required.
         */
        public Builder servicePortInfos(final com.aliyun.ros.cdk.core.IResolvable servicePortInfos) {
            this.props.servicePortInfos(servicePortInfos);
            return this;
        }
        /**
         * Property servicePortInfos: The information about the ports.
         * <p>
         * @return {@code this}
         * @param servicePortInfos Property servicePortInfos: The information about the ports. This parameter is required.
         */
        public Builder servicePortInfos(final java.util.List<? extends java.lang.Object> servicePortInfos) {
            this.props.servicePortInfos(servicePortInfos);
            return this;
        }

        /**
         * Property type: The type of the SLB instance.
         * <p>
         * Valid values: internet and intranet.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the SLB instance. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of the SLB instance.
         * <p>
         * Valid values: internet and intranet.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the SLB instance. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property loadBalancerId: The ID of the load balancer instance.
         * <p>
         * If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The ID of the load balancer instance. This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * Property loadBalancerId: The ID of the load balancer instance.
         * <p>
         * If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The ID of the load balancer instance. This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * Property scheduler: The scheduling algorithm.
         * <p>
         * Valid values:
         * wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
         * rr: Requests are distributed to backend servers in sequence.
         * Default value: rr
         * <p>
         * @return {@code this}
         * @param scheduler Property scheduler: The scheduling algorithm. This parameter is required.
         */
        public Builder scheduler(final java.lang.String scheduler) {
            this.props.scheduler(scheduler);
            return this;
        }
        /**
         * Property scheduler: The scheduling algorithm.
         * <p>
         * Valid values:
         * wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
         * rr: Requests are distributed to backend servers in sequence.
         * Default value: rr
         * <p>
         * @return {@code this}
         * @param scheduler Property scheduler: The scheduling algorithm. This parameter is required.
         */
        public Builder scheduler(final com.aliyun.ros.cdk.core.IResolvable scheduler) {
            this.props.scheduler(scheduler);
            return this;
        }

        /**
         * Property specification: The specification of the load balancer instance.
         * <p>
         * @return {@code this}
         * @param specification Property specification: The specification of the load balancer instance. This parameter is required.
         */
        public Builder specification(final java.lang.String specification) {
            this.props.specification(specification);
            return this;
        }
        /**
         * Property specification: The specification of the load balancer instance.
         * <p>
         * @return {@code this}
         * @param specification Property specification: The specification of the load balancer instance. This parameter is required.
         */
        public Builder specification(final com.aliyun.ros.cdk.core.IResolvable specification) {
            this.props.specification(specification);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.edas.K8sSlbBinding}.
         */
        @Override
        public com.aliyun.ros.cdk.edas.K8sSlbBinding build() {
            return new com.aliyun.ros.cdk.edas.K8sSlbBinding(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
