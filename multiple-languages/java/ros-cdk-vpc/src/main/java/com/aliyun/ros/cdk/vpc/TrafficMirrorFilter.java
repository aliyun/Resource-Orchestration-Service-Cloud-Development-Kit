package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::TrafficMirrorFilter</code>, which is used to create a filter for traffic mirroring.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:43.202Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.TrafficMirrorFilter")
public class TrafficMirrorFilter extends com.aliyun.ros.cdk.core.Resource {

    protected TrafficMirrorFilter(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TrafficMirrorFilter(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public TrafficMirrorFilter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.TrafficMirrorFilterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public TrafficMirrorFilter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.TrafficMirrorFilterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public TrafficMirrorFilter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute EgressRules: Egress rules.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEgressRules() {
        return software.amazon.jsii.Kernel.get(this, "attrEgressRules", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IngressRules: Ingress rules.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIngressRules() {
        return software.amazon.jsii.Kernel.get(this, "attrIngressRules", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TrafficMirrorFilterDescription: The description of the filter.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTrafficMirrorFilterDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrTrafficMirrorFilterDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TrafficMirrorFilterId: The ID of the filter.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTrafficMirrorFilterId() {
        return software.amazon.jsii.Kernel.get(this, "attrTrafficMirrorFilterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TrafficMirrorFilterName: The name of the filter.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTrafficMirrorFilterName() {
        return software.amazon.jsii.Kernel.get(this, "attrTrafficMirrorFilterName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficMirrorFilterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.TrafficMirrorFilterProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficMirrorFilterProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.TrafficMirrorFilter}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.TrafficMirrorFilter> {
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
        private com.aliyun.ros.cdk.vpc.TrafficMirrorFilterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property egressRules: Egress rules.
         * <p>
         * @return {@code this}
         * @param egressRules Property egressRules: Egress rules. This parameter is required.
         */
        public Builder egressRules(final com.aliyun.ros.cdk.core.IResolvable egressRules) {
            this.props().egressRules(egressRules);
            return this;
        }
        /**
         * Property egressRules: Egress rules.
         * <p>
         * @return {@code this}
         * @param egressRules Property egressRules: Egress rules. This parameter is required.
         */
        public Builder egressRules(final java.util.List<? extends java.lang.Object> egressRules) {
            this.props().egressRules(egressRules);
            return this;
        }

        /**
         * Property ingressRules: Ingress rules.
         * <p>
         * @return {@code this}
         * @param ingressRules Property ingressRules: Ingress rules. This parameter is required.
         */
        public Builder ingressRules(final com.aliyun.ros.cdk.core.IResolvable ingressRules) {
            this.props().ingressRules(ingressRules);
            return this;
        }
        /**
         * Property ingressRules: Ingress rules.
         * <p>
         * @return {@code this}
         * @param ingressRules Property ingressRules: Ingress rules. This parameter is required.
         */
        public Builder ingressRules(final java.util.List<? extends java.lang.Object> ingressRules) {
            this.props().ingressRules(ingressRules);
            return this;
        }

        /**
         * Property trafficMirrorFilterDescription: The description of the filter.
         * <p>
         * The description must be 1 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param trafficMirrorFilterDescription Property trafficMirrorFilterDescription: The description of the filter. This parameter is required.
         */
        public Builder trafficMirrorFilterDescription(final java.lang.String trafficMirrorFilterDescription) {
            this.props().trafficMirrorFilterDescription(trafficMirrorFilterDescription);
            return this;
        }
        /**
         * Property trafficMirrorFilterDescription: The description of the filter.
         * <p>
         * The description must be 1 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param trafficMirrorFilterDescription Property trafficMirrorFilterDescription: The description of the filter. This parameter is required.
         */
        public Builder trafficMirrorFilterDescription(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorFilterDescription) {
            this.props().trafficMirrorFilterDescription(trafficMirrorFilterDescription);
            return this;
        }

        /**
         * Property trafficMirrorFilterName: The name of the filter.The name must be 1 to 128 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param trafficMirrorFilterName Property trafficMirrorFilterName: The name of the filter.The name must be 1 to 128 characters in length and cannot start with http:// or https://. This parameter is required.
         */
        public Builder trafficMirrorFilterName(final java.lang.String trafficMirrorFilterName) {
            this.props().trafficMirrorFilterName(trafficMirrorFilterName);
            return this;
        }
        /**
         * Property trafficMirrorFilterName: The name of the filter.The name must be 1 to 128 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param trafficMirrorFilterName Property trafficMirrorFilterName: The name of the filter.The name must be 1 to 128 characters in length and cannot start with http:// or https://. This parameter is required.
         */
        public Builder trafficMirrorFilterName(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorFilterName) {
            this.props().trafficMirrorFilterName(trafficMirrorFilterName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.TrafficMirrorFilter}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.TrafficMirrorFilter build() {
            return new com.aliyun.ros.cdk.vpc.TrafficMirrorFilter(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.TrafficMirrorFilterProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.TrafficMirrorFilterProps.Builder();
            }
            return this.props;
        }
    }
}
