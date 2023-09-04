package com.aliyun.ros.cdk.mse;

/**
 * A ROS template type:  <code>ALIYUN::MSE::Gateway</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:38.401Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGateway")
public class RosGateway extends com.aliyun.ros.cdk.core.RosResource {

    protected RosGateway(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosGateway(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.mse.RosGateway.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::MSE::Gateway</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.RosGatewayProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBackupVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGatewayUniqueId() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayUniqueId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReplica() {
        return software.amazon.jsii.Kernel.get(this, "attrReplica", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getReplica() {
        return software.amazon.jsii.Kernel.get(this, "replica", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReplica(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "replica", java.util.Objects.requireNonNull(value, "replica is required"));
    }

    /**
     */
    public void setReplica(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "replica", java.util.Objects.requireNonNull(value, "replica is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSpec() {
        return software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpec(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spec", java.util.Objects.requireNonNull(value, "spec is required"));
    }

    /**
     */
    public void setSpec(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spec", java.util.Objects.requireNonNull(value, "spec is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", java.util.Objects.requireNonNull(value, "vSwitchId is required"));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", java.util.Objects.requireNonNull(value, "vSwitchId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackupVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "backupVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupVSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "backupVSwitchId", value);
    }

    /**
     */
    public void setBackupVSwitchId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupVSwitchId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnterpriseSecurityGroup() {
        return software.amazon.jsii.Kernel.get(this, "enterpriseSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnterpriseSecurityGroup(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "enterpriseSecurityGroup", value);
    }

    /**
     */
    public void setEnterpriseSecurityGroup(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enterpriseSecurityGroup", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInternetSlbSpec() {
        return software.amazon.jsii.Kernel.get(this, "internetSlbSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInternetSlbSpec(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "internetSlbSpec", value);
    }

    /**
     */
    public void setInternetSlbSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "internetSlbSpec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSlbSpec() {
        return software.amazon.jsii.Kernel.get(this, "slbSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSlbSpec(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "slbSpec", value);
    }

    /**
     */
    public void setSlbSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "slbSpec", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mse.RosGateway}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mse.RosGateway> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.mse.RosGatewayProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mse.RosGatewayProps.Builder();
        }

        /**
         * @return {@code this}
         * @param replica This parameter is required.
         */
        public Builder replica(final java.lang.Number replica) {
            this.props.replica(replica);
            return this;
        }
        /**
         * @return {@code this}
         * @param replica This parameter is required.
         */
        public Builder replica(final com.aliyun.ros.cdk.core.IResolvable replica) {
            this.props.replica(replica);
            return this;
        }

        /**
         * @return {@code this}
         * @param spec This parameter is required.
         */
        public Builder spec(final java.lang.String spec) {
            this.props.spec(spec);
            return this;
        }
        /**
         * @return {@code this}
         * @param spec This parameter is required.
         */
        public Builder spec(final com.aliyun.ros.cdk.core.IResolvable spec) {
            this.props.spec(spec);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param backupVSwitchId This parameter is required.
         */
        public Builder backupVSwitchId(final java.lang.String backupVSwitchId) {
            this.props.backupVSwitchId(backupVSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupVSwitchId This parameter is required.
         */
        public Builder backupVSwitchId(final com.aliyun.ros.cdk.core.IResolvable backupVSwitchId) {
            this.props.backupVSwitchId(backupVSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param enterpriseSecurityGroup This parameter is required.
         */
        public Builder enterpriseSecurityGroup(final java.lang.String enterpriseSecurityGroup) {
            this.props.enterpriseSecurityGroup(enterpriseSecurityGroup);
            return this;
        }
        /**
         * @return {@code this}
         * @param enterpriseSecurityGroup This parameter is required.
         */
        public Builder enterpriseSecurityGroup(final com.aliyun.ros.cdk.core.IResolvable enterpriseSecurityGroup) {
            this.props.enterpriseSecurityGroup(enterpriseSecurityGroup);
            return this;
        }

        /**
         * @return {@code this}
         * @param internetSlbSpec This parameter is required.
         */
        public Builder internetSlbSpec(final java.lang.String internetSlbSpec) {
            this.props.internetSlbSpec(internetSlbSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param internetSlbSpec This parameter is required.
         */
        public Builder internetSlbSpec(final com.aliyun.ros.cdk.core.IResolvable internetSlbSpec) {
            this.props.internetSlbSpec(internetSlbSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param slbSpec This parameter is required.
         */
        public Builder slbSpec(final java.lang.String slbSpec) {
            this.props.slbSpec(slbSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param slbSpec This parameter is required.
         */
        public Builder slbSpec(final com.aliyun.ros.cdk.core.IResolvable slbSpec) {
            this.props.slbSpec(slbSpec);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mse.RosGateway}.
         */
        @Override
        public com.aliyun.ros.cdk.mse.RosGateway build() {
            return new com.aliyun.ros.cdk.mse.RosGateway(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
