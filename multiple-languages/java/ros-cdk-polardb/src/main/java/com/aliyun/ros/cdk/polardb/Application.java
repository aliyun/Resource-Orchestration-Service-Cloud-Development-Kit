package com.aliyun.ros.cdk.polardb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::POLARDB::Application</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:52.683Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.Application")
public class Application extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.polardb.IApplication {

    protected Application(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Application(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Application(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.ApplicationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Application(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.ApplicationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ApplicationId: The ID of the application.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplicationId() {
        return software.amazon.jsii.Kernel.get(this, "attrApplicationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.ApplicationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.ApplicationProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.Application}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.Application> {
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
        private final com.aliyun.ros.cdk.polardb.ApplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.ApplicationProps.Builder();
        }

        /**
         * Property applicationType: The type of the application.
         * <p>
         * This parameter is required.
         * <p>
         * @return {@code this}
         * @param applicationType Property applicationType: The type of the application. This parameter is required.
         */
        public Builder applicationType(final java.lang.String applicationType) {
            this.props.applicationType(applicationType);
            return this;
        }
        /**
         * Property applicationType: The type of the application.
         * <p>
         * This parameter is required.
         * <p>
         * @return {@code this}
         * @param applicationType Property applicationType: The type of the application. This parameter is required.
         */
        public Builder applicationType(final com.aliyun.ros.cdk.core.IResolvable applicationType) {
            this.props.applicationType(applicationType);
            return this;
        }

        /**
         * Property architecture: The architecture of the application.
         * <p>
         * This parameter is required.
         * <p>
         * @return {@code this}
         * @param architecture Property architecture: The architecture of the application. This parameter is required.
         */
        public Builder architecture(final java.lang.String architecture) {
            this.props.architecture(architecture);
            return this;
        }
        /**
         * Property architecture: The architecture of the application.
         * <p>
         * This parameter is required.
         * <p>
         * @return {@code this}
         * @param architecture Property architecture: The architecture of the application. This parameter is required.
         */
        public Builder architecture(final com.aliyun.ros.cdk.core.IResolvable architecture) {
            this.props.architecture(architecture);
            return this;
        }

        /**
         * Property dbClusterId: The ID of the database cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the database cluster. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: The ID of the database cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the database cluster. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property autoCreatePolarFs: Whether to auto create PolarFS.
         * <p>
         * @return {@code this}
         * @param autoCreatePolarFs Property autoCreatePolarFs: Whether to auto create PolarFS. This parameter is required.
         */
        public Builder autoCreatePolarFs(final java.lang.Boolean autoCreatePolarFs) {
            this.props.autoCreatePolarFs(autoCreatePolarFs);
            return this;
        }
        /**
         * Property autoCreatePolarFs: Whether to auto create PolarFS.
         * <p>
         * @return {@code this}
         * @param autoCreatePolarFs Property autoCreatePolarFs: Whether to auto create PolarFS. This parameter is required.
         */
        public Builder autoCreatePolarFs(final com.aliyun.ros.cdk.core.IResolvable autoCreatePolarFs) {
            this.props.autoCreatePolarFs(autoCreatePolarFs);
            return this;
        }

        /**
         * Property components: The list of components.
         * <p>
         * @return {@code this}
         * @param components Property components: The list of components. This parameter is required.
         */
        public Builder components(final com.aliyun.ros.cdk.core.IResolvable components) {
            this.props.components(components);
            return this;
        }
        /**
         * Property components: The list of components.
         * <p>
         * @return {@code this}
         * @param components Property components: The list of components. This parameter is required.
         */
        public Builder components(final java.util.List<? extends java.lang.Object> components) {
            this.props.components(components);
            return this;
        }

        /**
         * Property description: The description of the application.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the application. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the application.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the application. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property payType: The billing method of the cluster.
         * <p>
         * Valid values:
         * Postpaid: pay-as-you-go
         * Prepaid: subscription
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the cluster. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: The billing method of the cluster.
         * <p>
         * Valid values:
         * Postpaid: pay-as-you-go
         * Prepaid: subscription
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the cluster. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property period: The period of the application.
         * <p>
         * @return {@code this}
         * @param period Property period: The period of the application. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The period of the application.
         * <p>
         * @return {@code this}
         * @param period Property period: The period of the application. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property polarFsInstanceId: The ID of the PolarFS instance.
         * <p>
         * @return {@code this}
         * @param polarFsInstanceId Property polarFsInstanceId: The ID of the PolarFS instance. This parameter is required.
         */
        public Builder polarFsInstanceId(final java.lang.String polarFsInstanceId) {
            this.props.polarFsInstanceId(polarFsInstanceId);
            return this;
        }
        /**
         * Property polarFsInstanceId: The ID of the PolarFS instance.
         * <p>
         * @return {@code this}
         * @param polarFsInstanceId Property polarFsInstanceId: The ID of the PolarFS instance. This parameter is required.
         */
        public Builder polarFsInstanceId(final com.aliyun.ros.cdk.core.IResolvable polarFsInstanceId) {
            this.props.polarFsInstanceId(polarFsInstanceId);
            return this;
        }

        /**
         * Property securityGroupId: The ID of the security group.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: The ID of the security group.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property securityIpList: The security IP list of the component.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The security IP list of the component. This parameter is required.
         */
        public Builder securityIpList(final java.lang.String securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * Property securityIpList: The security IP list of the component.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The security IP list of the component. This parameter is required.
         */
        public Builder securityIpList(final com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardb.Application}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.Application build() {
            return new com.aliyun.ros.cdk.polardb.Application(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
