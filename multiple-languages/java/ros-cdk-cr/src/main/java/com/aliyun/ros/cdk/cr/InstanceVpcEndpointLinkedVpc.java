package com.aliyun.ros.cdk.cr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CR::InstanceVpcEndpointLinkedVpc</code>, which is used to associate a virtual private cloud (VPC) with a Container Registry instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:14.517Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.InstanceVpcEndpointLinkedVpc")
public class InstanceVpcEndpointLinkedVpc extends com.aliyun.ros.cdk.core.Resource {

    protected InstanceVpcEndpointLinkedVpc(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected InstanceVpcEndpointLinkedVpc(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public InstanceVpcEndpointLinkedVpc(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.InstanceVpcEndpointLinkedVpcProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public InstanceVpcEndpointLinkedVpc(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.InstanceVpcEndpointLinkedVpcProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: The ID of the vpc.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VswitchId: The ID of the vswitch.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVswitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVswitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cr.InstanceVpcEndpointLinkedVpc}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cr.InstanceVpcEndpointLinkedVpc> {
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
        private final com.aliyun.ros.cdk.cr.InstanceVpcEndpointLinkedVpcProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cr.InstanceVpcEndpointLinkedVpcProps.Builder();
        }

        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property vpcId: The ID of the vpc.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the vpc. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the vpc.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the vpc. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vswitchId: The ID of the vswitch.
         * <p>
         * @return {@code this}
         * @param vswitchId Property vswitchId: The ID of the vswitch. This parameter is required.
         */
        public Builder vswitchId(final java.lang.String vswitchId) {
            this.props.vswitchId(vswitchId);
            return this;
        }
        /**
         * Property vswitchId: The ID of the vswitch.
         * <p>
         * @return {@code this}
         * @param vswitchId Property vswitchId: The ID of the vswitch. This parameter is required.
         */
        public Builder vswitchId(final com.aliyun.ros.cdk.core.IResolvable vswitchId) {
            this.props.vswitchId(vswitchId);
            return this;
        }

        /**
         * Property enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records.
         * <p>
         * If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added.
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong>: Automatically creates a Privatezone record.</li>
         * <li><strong>false</strong> (default): Do not automatically create Privatezone records.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enableCreateDnsRecordInPvzt Property enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records. This parameter is required.
         */
        public Builder enableCreateDnsRecordInPvzt(final java.lang.Boolean enableCreateDnsRecordInPvzt) {
            this.props.enableCreateDnsRecordInPvzt(enableCreateDnsRecordInPvzt);
            return this;
        }
        /**
         * Property enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records.
         * <p>
         * If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added.
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong>: Automatically creates a Privatezone record.</li>
         * <li><strong>false</strong> (default): Do not automatically create Privatezone records.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enableCreateDnsRecordInPvzt Property enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records. This parameter is required.
         */
        public Builder enableCreateDnsRecordInPvzt(final com.aliyun.ros.cdk.core.IResolvable enableCreateDnsRecordInPvzt) {
            this.props.enableCreateDnsRecordInPvzt(enableCreateDnsRecordInPvzt);
            return this;
        }

        /**
         * Property moduleName: The name of the module in the instance for which a whitelist is configured.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>Registry</strong> (default): Access the image repository.</li>
         * <li><strong>Chart</strong>: Access Helm Chart.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param moduleName Property moduleName: The name of the module in the instance for which a whitelist is configured. This parameter is required.
         */
        public Builder moduleName(final java.lang.String moduleName) {
            this.props.moduleName(moduleName);
            return this;
        }
        /**
         * Property moduleName: The name of the module in the instance for which a whitelist is configured.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>Registry</strong> (default): Access the image repository.</li>
         * <li><strong>Chart</strong>: Access Helm Chart.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param moduleName Property moduleName: The name of the module in the instance for which a whitelist is configured. This parameter is required.
         */
        public Builder moduleName(final com.aliyun.ros.cdk.core.IResolvable moduleName) {
            this.props.moduleName(moduleName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cr.InstanceVpcEndpointLinkedVpc}.
         */
        @Override
        public com.aliyun.ros.cdk.cr.InstanceVpcEndpointLinkedVpc build() {
            return new com.aliyun.ros.cdk.cr.InstanceVpcEndpointLinkedVpc(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
