package com.aliyun.ros.cdk.mse;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MSE::Gateway</code>, which is used to add a gateway.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:31.681Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.Gateway")
public class Gateway extends com.aliyun.ros.cdk.core.Resource {

    protected Gateway(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Gateway(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Gateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.GatewayProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Gateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.GatewayProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BackupVSwitchId: VSwitchId For Backup.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBackupVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute GatewayUniqueId: Gateway unique identification.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGatewayUniqueId() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayUniqueId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Replica: Gateway Node Number.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReplica() {
        return software.amazon.jsii.Kernel.get(this, "attrReplica", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Spec: Gateway Node Specifications.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: VpcId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VSwitchId: VSwitchId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.GatewayProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mse.GatewayProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.GatewayProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mse.Gateway}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mse.Gateway> {
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
        private final com.aliyun.ros.cdk.mse.GatewayProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mse.GatewayProps.Builder();
        }

        /**
         * Property replica: Gateway Node Number.
         * <p>
         * @return {@code this}
         * @param replica Property replica: Gateway Node Number. This parameter is required.
         */
        public Builder replica(final java.lang.Number replica) {
            this.props.replica(replica);
            return this;
        }
        /**
         * Property replica: Gateway Node Number.
         * <p>
         * @return {@code this}
         * @param replica Property replica: Gateway Node Number. This parameter is required.
         */
        public Builder replica(final com.aliyun.ros.cdk.core.IResolvable replica) {
            this.props.replica(replica);
            return this;
        }

        /**
         * Property spec: Gateway Node Specifications.
         * <p>
         * @return {@code this}
         * @param spec Property spec: Gateway Node Specifications. This parameter is required.
         */
        public Builder spec(final java.lang.String spec) {
            this.props.spec(spec);
            return this;
        }
        /**
         * Property spec: Gateway Node Specifications.
         * <p>
         * @return {@code this}
         * @param spec Property spec: Gateway Node Specifications. This parameter is required.
         */
        public Builder spec(final com.aliyun.ros.cdk.core.IResolvable spec) {
            this.props.spec(spec);
            return this;
        }

        /**
         * Property vpcId: VpcId.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VpcId. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: VpcId.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VpcId. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: VSwitchId.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitchId. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: VSwitchId.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitchId. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property backupVSwitchId: VSwitchId For Backup.
         * <p>
         * @return {@code this}
         * @param backupVSwitchId Property backupVSwitchId: VSwitchId For Backup. This parameter is required.
         */
        public Builder backupVSwitchId(final java.lang.String backupVSwitchId) {
            this.props.backupVSwitchId(backupVSwitchId);
            return this;
        }
        /**
         * Property backupVSwitchId: VSwitchId For Backup.
         * <p>
         * @return {@code this}
         * @param backupVSwitchId Property backupVSwitchId: VSwitchId For Backup. This parameter is required.
         */
        public Builder backupVSwitchId(final com.aliyun.ros.cdk.core.IResolvable backupVSwitchId) {
            this.props.backupVSwitchId(backupVSwitchId);
            return this;
        }

        /**
         * Property enterpriseSecurityGroup:.
         * <p>
         * @return {@code this}
         * @param enterpriseSecurityGroup Property enterpriseSecurityGroup:. This parameter is required.
         */
        public Builder enterpriseSecurityGroup(final java.lang.String enterpriseSecurityGroup) {
            this.props.enterpriseSecurityGroup(enterpriseSecurityGroup);
            return this;
        }
        /**
         * Property enterpriseSecurityGroup:.
         * <p>
         * @return {@code this}
         * @param enterpriseSecurityGroup Property enterpriseSecurityGroup:. This parameter is required.
         */
        public Builder enterpriseSecurityGroup(final com.aliyun.ros.cdk.core.IResolvable enterpriseSecurityGroup) {
            this.props.enterpriseSecurityGroup(enterpriseSecurityGroup);
            return this;
        }

        /**
         * Property internetSlbSpec:.
         * <p>
         * @return {@code this}
         * @param internetSlbSpec Property internetSlbSpec:. This parameter is required.
         */
        public Builder internetSlbSpec(final java.lang.String internetSlbSpec) {
            this.props.internetSlbSpec(internetSlbSpec);
            return this;
        }
        /**
         * Property internetSlbSpec:.
         * <p>
         * @return {@code this}
         * @param internetSlbSpec Property internetSlbSpec:. This parameter is required.
         */
        public Builder internetSlbSpec(final com.aliyun.ros.cdk.core.IResolvable internetSlbSpec) {
            this.props.internetSlbSpec(internetSlbSpec);
            return this;
        }

        /**
         * Property name:.
         * <p>
         * @return {@code this}
         * @param name Property name:. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name:.
         * <p>
         * @return {@code this}
         * @param name Property name:. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property slbSpec:.
         * <p>
         * @return {@code this}
         * @param slbSpec Property slbSpec:. This parameter is required.
         */
        public Builder slbSpec(final java.lang.String slbSpec) {
            this.props.slbSpec(slbSpec);
            return this;
        }
        /**
         * Property slbSpec:.
         * <p>
         * @return {@code this}
         * @param slbSpec Property slbSpec:. This parameter is required.
         */
        public Builder slbSpec(final com.aliyun.ros.cdk.core.IResolvable slbSpec) {
            this.props.slbSpec(slbSpec);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mse.Gateway}.
         */
        @Override
        public com.aliyun.ros.cdk.mse.Gateway build() {
            return new com.aliyun.ros.cdk.mse.Gateway(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
