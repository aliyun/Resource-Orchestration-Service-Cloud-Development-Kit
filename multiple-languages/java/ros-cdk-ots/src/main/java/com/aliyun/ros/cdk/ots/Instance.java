package com.aliyun.ros.cdk.ots;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::OTS::Instance</code>, which is used to create a Tablestore instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.490Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ots.IInstance {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceName: Instance name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrivateEndpoint: Private endpoint.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicEndpoint: Public endpoint.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcEndpoint: Vpc endpoint.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ots.InstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ots.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ots.Instance> {
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
        private final com.aliyun.ros.cdk.ots.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ots.InstanceProps.Builder();
        }

        /**
         * Property instanceName: The name of the instance.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of the instance.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property clusterType: Cluster type, the default is SSD.
         * <p>
         * This parameter specifies the specification of the ots instance.
         * When the value is SSD, the ots instance is a high-performance instance.
         * When the value is Hybid, the ots instance is a capacity instance
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: Cluster type, the default is SSD. This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }
        /**
         * Property clusterType: Cluster type, the default is SSD.
         * <p>
         * This parameter specifies the specification of the ots instance.
         * When the value is SSD, the ots instance is a high-performance instance.
         * When the value is Hybid, the ots instance is a capacity instance
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: Cluster type, the default is SSD. This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * Property description: Instance description.
         * <p>
         * @return {@code this}
         * @param description Property description: Instance description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Instance description.
         * <p>
         * @return {@code this}
         * @param description Property description: Instance description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property network: Instance network type, default is NORMAL.
         * <p>
         * @return {@code this}
         * @param network Property network: Instance network type, default is NORMAL. This parameter is required.
         */
        public Builder network(final java.lang.String network) {
            this.props.network(network);
            return this;
        }
        /**
         * Property network: Instance network type, default is NORMAL.
         * <p>
         * @return {@code this}
         * @param network Property network: Instance network type, default is NORMAL. This parameter is required.
         */
        public Builder network(final com.aliyun.ros.cdk.core.IResolvable network) {
            this.props.network(network);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ots.RosInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ots.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.ots.Instance build() {
            return new com.aliyun.ros.cdk.ots.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
