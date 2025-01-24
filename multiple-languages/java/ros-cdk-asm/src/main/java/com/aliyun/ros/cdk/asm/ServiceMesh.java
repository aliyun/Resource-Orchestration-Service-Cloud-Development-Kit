package com.aliyun.ros.cdk.asm;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ASM::ServiceMesh</code>, which is used to create a Service Mesh (ASM) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:35.143Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.asm.$Module.class, fqn = "@alicloud/ros-cdk-asm.ServiceMesh")
public class ServiceMesh extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.asm.IServiceMesh {

    protected ServiceMesh(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ServiceMesh(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ServiceMesh(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.asm.ServiceMeshProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ServiceMesh(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.asm.ServiceMeshProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ServiceMeshId: The ID of the ASM instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceMeshId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceMeshId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.asm.ServiceMeshProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.asm.ServiceMeshProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.asm.ServiceMesh}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.asm.ServiceMesh> {
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
        private final com.aliyun.ros.cdk.asm.ServiceMeshProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.asm.ServiceMeshProps.Builder();
        }

        /**
         * Property vpcId: The ID of the virtual private cloud (VPC).
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the virtual private cloud (VPC).
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"].
         * <p>
         * @return {@code this}
         * @param vSwitches Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"]. This parameter is required.
         */
        public Builder vSwitches(final java.util.List<? extends java.lang.Object> vSwitches) {
            this.props.vSwitches(vSwitches);
            return this;
        }
        /**
         * Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"].
         * <p>
         * @return {@code this}
         * @param vSwitches Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"]. This parameter is required.
         */
        public Builder vSwitches(final com.aliyun.ros.cdk.core.IResolvable vSwitches) {
            this.props.vSwitches(vSwitches);
            return this;
        }

        /**
         * Property accessLogEnabled: Specifies whether to enable access logging.
         * <p>
         * @return {@code this}
         * @param accessLogEnabled Property accessLogEnabled: Specifies whether to enable access logging. This parameter is required.
         */
        public Builder accessLogEnabled(final java.lang.Boolean accessLogEnabled) {
            this.props.accessLogEnabled(accessLogEnabled);
            return this;
        }
        /**
         * Property accessLogEnabled: Specifies whether to enable access logging.
         * <p>
         * @return {@code this}
         * @param accessLogEnabled Property accessLogEnabled: Specifies whether to enable access logging. This parameter is required.
         */
        public Builder accessLogEnabled(final com.aliyun.ros.cdk.core.IResolvable accessLogEnabled) {
            this.props.accessLogEnabled(accessLogEnabled);
            return this;
        }

        /**
         * Property accessLogFile: Enable and disable access logs.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>"" : Turn off access logs.</li>
         * <li>/dev/stdout: Enables access logging</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accessLogFile Property accessLogFile: Enable and disable access logs. This parameter is required.
         */
        public Builder accessLogFile(final java.lang.String accessLogFile) {
            this.props.accessLogFile(accessLogFile);
            return this;
        }
        /**
         * Property accessLogFile: Enable and disable access logs.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>"" : Turn off access logs.</li>
         * <li>/dev/stdout: Enables access logging</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accessLogFile Property accessLogFile: Enable and disable access logs. This parameter is required.
         */
        public Builder accessLogFile(final com.aliyun.ros.cdk.core.IResolvable accessLogFile) {
            this.props.accessLogFile(accessLogFile);
            return this;
        }

        /**
         * Property accessLogFormat: The format of access logs.
         * <p>
         * @return {@code this}
         * @param accessLogFormat Property accessLogFormat: The format of access logs. This parameter is required.
         */
        public Builder accessLogFormat(final java.lang.String accessLogFormat) {
            this.props.accessLogFormat(accessLogFormat);
            return this;
        }
        /**
         * Property accessLogFormat: The format of access logs.
         * <p>
         * @return {@code this}
         * @param accessLogFormat Property accessLogFormat: The format of access logs. This parameter is required.
         */
        public Builder accessLogFormat(final com.aliyun.ros.cdk.core.IResolvable accessLogFormat) {
            this.props.accessLogFormat(accessLogFormat);
            return this;
        }

        /**
         * Property accessLogProject: The Log Service project for access logs.
         * <p>
         * @return {@code this}
         * @param accessLogProject Property accessLogProject: The Log Service project for access logs. This parameter is required.
         */
        public Builder accessLogProject(final java.lang.String accessLogProject) {
            this.props.accessLogProject(accessLogProject);
            return this;
        }
        /**
         * Property accessLogProject: The Log Service project for access logs.
         * <p>
         * @return {@code this}
         * @param accessLogProject Property accessLogProject: The Log Service project for access logs. This parameter is required.
         */
        public Builder accessLogProject(final com.aliyun.ros.cdk.core.IResolvable accessLogProject) {
            this.props.accessLogProject(accessLogProject);
            return this;
        }

        /**
         * Property accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>true: Enables Envoy's gRPC logging service.</li>
         * <li>false: Envoy's gRPC logging service is not enabled.
         * Default value: false</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accessLogServiceEnabled Property accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled. This parameter is required.
         */
        public Builder accessLogServiceEnabled(final java.lang.Boolean accessLogServiceEnabled) {
            this.props.accessLogServiceEnabled(accessLogServiceEnabled);
            return this;
        }
        /**
         * Property accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>true: Enables Envoy's gRPC logging service.</li>
         * <li>false: Envoy's gRPC logging service is not enabled.
         * Default value: false</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accessLogServiceEnabled Property accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled. This parameter is required.
         */
        public Builder accessLogServiceEnabled(final com.aliyun.ros.cdk.core.IResolvable accessLogServiceEnabled) {
            this.props.accessLogServiceEnabled(accessLogServiceEnabled);
            return this;
        }

        /**
         * Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.
         * <p>
         * @return {@code this}
         * @param accessLogServiceHost Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled. This parameter is required.
         */
        public Builder accessLogServiceHost(final java.lang.String accessLogServiceHost) {
            this.props.accessLogServiceHost(accessLogServiceHost);
            return this;
        }
        /**
         * Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.
         * <p>
         * @return {@code this}
         * @param accessLogServiceHost Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled. This parameter is required.
         */
        public Builder accessLogServiceHost(final com.aliyun.ros.cdk.core.IResolvable accessLogServiceHost) {
            this.props.accessLogServiceHost(accessLogServiceHost);
            return this;
        }

        /**
         * Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.
         * <p>
         * @return {@code this}
         * @param accessLogServicePort Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled. This parameter is required.
         */
        public Builder accessLogServicePort(final java.lang.Number accessLogServicePort) {
            this.props.accessLogServicePort(accessLogServicePort);
            return this;
        }
        /**
         * Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.
         * <p>
         * @return {@code this}
         * @param accessLogServicePort Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled. This parameter is required.
         */
        public Builder accessLogServicePort(final com.aliyun.ros.cdk.core.IResolvable accessLogServicePort) {
            this.props.accessLogServicePort(accessLogServicePort);
            return this;
        }

        /**
         * Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding.
         * <p>
         * Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
         * <p>
         * @return {@code this}
         * @param apiServerLoadBalancerSpec Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding. This parameter is required.
         */
        public Builder apiServerLoadBalancerSpec(final java.lang.String apiServerLoadBalancerSpec) {
            this.props.apiServerLoadBalancerSpec(apiServerLoadBalancerSpec);
            return this;
        }
        /**
         * Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding.
         * <p>
         * Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
         * <p>
         * @return {@code this}
         * @param apiServerLoadBalancerSpec Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding. This parameter is required.
         */
        public Builder apiServerLoadBalancerSpec(final com.aliyun.ros.cdk.core.IResolvable apiServerLoadBalancerSpec) {
            this.props.apiServerLoadBalancerSpec(apiServerLoadBalancerSpec);
            return this;
        }

        /**
         * Property apiServerPublicEip: Specifies whether to expose the API server to the Internet.
         * <p>
         * Valid values: true and false. Default value: false.
         * If you do not set this parameter, the API server of clusters added to the ASM instance
         * cannot be accessed from the Internet.
         * <p>
         * @return {@code this}
         * @param apiServerPublicEip Property apiServerPublicEip: Specifies whether to expose the API server to the Internet. This parameter is required.
         */
        public Builder apiServerPublicEip(final java.lang.Boolean apiServerPublicEip) {
            this.props.apiServerPublicEip(apiServerPublicEip);
            return this;
        }
        /**
         * Property apiServerPublicEip: Specifies whether to expose the API server to the Internet.
         * <p>
         * Valid values: true and false. Default value: false.
         * If you do not set this parameter, the API server of clusters added to the ASM instance
         * cannot be accessed from the Internet.
         * <p>
         * @return {@code this}
         * @param apiServerPublicEip Property apiServerPublicEip: Specifies whether to expose the API server to the Internet. This parameter is required.
         */
        public Builder apiServerPublicEip(final com.aliyun.ros.cdk.core.IResolvable apiServerPublicEip) {
            this.props.apiServerPublicEip(apiServerPublicEip);
            return this;
        }

        /**
         * Property auditProject: The name of the Log Service project that is used for mesh audit.
         * <p>
         * Default value: mesh-log-{meshId}.
         * <p>
         * @return {@code this}
         * @param auditProject Property auditProject: The name of the Log Service project that is used for mesh audit. This parameter is required.
         */
        public Builder auditProject(final java.lang.String auditProject) {
            this.props.auditProject(auditProject);
            return this;
        }
        /**
         * Property auditProject: The name of the Log Service project that is used for mesh audit.
         * <p>
         * Default value: mesh-log-{meshId}.
         * <p>
         * @return {@code this}
         * @param auditProject Property auditProject: The name of the Log Service project that is used for mesh audit. This parameter is required.
         */
        public Builder auditProject(final com.aliyun.ros.cdk.core.IResolvable auditProject) {
            this.props.auditProject(auditProject);
            return this;
        }

        /**
         * Property autoRenew: If CLB is annual and monthly, whether it will be automatically renewed.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>true: Automatic renewal.</li>
         * <li>false: No automatic renewal.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: If CLB is annual and monthly, whether it will be automatically renewed. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: If CLB is annual and monthly, whether it will be automatically renewed.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>true: Automatic renewal.</li>
         * <li>false: No automatic renewal.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: If CLB is annual and monthly, whether it will be automatically renewed. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property autoRenewPeriod: ChargeType is a PrePay.
         * <p>
         * Indicates the automatic renewal time when purchasing a CLB of the year and month type. If the purchase is less than 1 year old, this parameter indicates how many months the auto-renewal will take. If the purchase is longer than 1 year, this parameter indicates how many years the automatic renewal will be made.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: ChargeType is a PrePay. This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * Property autoRenewPeriod: ChargeType is a PrePay.
         * <p>
         * Indicates the automatic renewal time when purchasing a CLB of the year and month type. If the purchase is less than 1 year old, this parameter indicates how many months the auto-renewal will take. If the purchase is longer than 1 year, this parameter indicates how many years the automatic renewal will be made.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: ChargeType is a PrePay. This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates.
         * <p>
         * @return {@code this}
         * @param certChain Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates. This parameter is required.
         */
        public Builder certChain(final java.lang.String certChain) {
            this.props.certChain(certChain);
            return this;
        }
        /**
         * Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates.
         * <p>
         * @return {@code this}
         * @param certChain Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates. This parameter is required.
         */
        public Builder certChain(final com.aliyun.ros.cdk.core.IResolvable certChain) {
            this.props.certChain(certChain);
            return this;
        }

        /**
         * Property chargeType: CLB payment type.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>PayOnDemand: pay-as-you-go type</li>
         * <li>PrePay: Annual and monthly.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: CLB payment type. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: CLB payment type.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>PayOnDemand: pay-as-you-go type</li>
         * <li>PrePay: Annual and monthly.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: CLB payment type. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property clusterSpec: Service grid instance specification, value: - standard: The standard version.
         * <p>
         * <ul>
         * <li>enterprise: Enterprise Edition</li>
         * <li>ultimate: ultimate.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param clusterSpec Property clusterSpec: Service grid instance specification, value: - standard: The standard version. This parameter is required.
         */
        public Builder clusterSpec(final java.lang.String clusterSpec) {
            this.props.clusterSpec(clusterSpec);
            return this;
        }
        /**
         * Property clusterSpec: Service grid instance specification, value: - standard: The standard version.
         * <p>
         * <ul>
         * <li>enterprise: Enterprise Edition</li>
         * <li>ultimate: ultimate.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param clusterSpec Property clusterSpec: Service grid instance specification, value: - standard: The standard version. This parameter is required.
         */
        public Builder clusterSpec(final com.aliyun.ros.cdk.core.IResolvable clusterSpec) {
            this.props.clusterSpec(clusterSpec);
            return this;
        }

        /**
         * Property configSourceEnabled: Whether to enable an external service registry.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>true: Enables the external service registry.</li>
         * <li>false: The external service registry is not enabled.
         * Default value: false</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param configSourceEnabled Property configSourceEnabled: Whether to enable an external service registry. This parameter is required.
         */
        public Builder configSourceEnabled(final java.lang.Boolean configSourceEnabled) {
            this.props.configSourceEnabled(configSourceEnabled);
            return this;
        }
        /**
         * Property configSourceEnabled: Whether to enable an external service registry.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>true: Enables the external service registry.</li>
         * <li>false: The external service registry is not enabled.
         * Default value: false</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param configSourceEnabled Property configSourceEnabled: Whether to enable an external service registry. This parameter is required.
         */
        public Builder configSourceEnabled(final com.aliyun.ros.cdk.core.IResolvable configSourceEnabled) {
            this.props.configSourceEnabled(configSourceEnabled);
            return this;
        }

        /**
         * Property configSourceNacosId: The Nacos ID for config source.
         * <p>
         * @return {@code this}
         * @param configSourceNacosId Property configSourceNacosId: The Nacos ID for config source. This parameter is required.
         */
        public Builder configSourceNacosId(final java.lang.String configSourceNacosId) {
            this.props.configSourceNacosId(configSourceNacosId);
            return this;
        }
        /**
         * Property configSourceNacosId: The Nacos ID for config source.
         * <p>
         * @return {@code this}
         * @param configSourceNacosId Property configSourceNacosId: The Nacos ID for config source. This parameter is required.
         */
        public Builder configSourceNacosId(final com.aliyun.ros.cdk.core.IResolvable configSourceNacosId) {
            this.props.configSourceNacosId(configSourceNacosId);
            return this;
        }

        /**
         * Property controlPlaneLogEnabled: Specifies whether to enable control plane logging.
         * <p>
         * @return {@code this}
         * @param controlPlaneLogEnabled Property controlPlaneLogEnabled: Specifies whether to enable control plane logging. This parameter is required.
         */
        public Builder controlPlaneLogEnabled(final java.lang.Boolean controlPlaneLogEnabled) {
            this.props.controlPlaneLogEnabled(controlPlaneLogEnabled);
            return this;
        }
        /**
         * Property controlPlaneLogEnabled: Specifies whether to enable control plane logging.
         * <p>
         * @return {@code this}
         * @param controlPlaneLogEnabled Property controlPlaneLogEnabled: Specifies whether to enable control plane logging. This parameter is required.
         */
        public Builder controlPlaneLogEnabled(final com.aliyun.ros.cdk.core.IResolvable controlPlaneLogEnabled) {
            this.props.controlPlaneLogEnabled(controlPlaneLogEnabled);
            return this;
        }

        /**
         * Property controlPlaneLogProject: The Log Service project for control plane logs.
         * <p>
         * @return {@code this}
         * @param controlPlaneLogProject Property controlPlaneLogProject: The Log Service project for control plane logs. This parameter is required.
         */
        public Builder controlPlaneLogProject(final java.lang.String controlPlaneLogProject) {
            this.props.controlPlaneLogProject(controlPlaneLogProject);
            return this;
        }
        /**
         * Property controlPlaneLogProject: The Log Service project for control plane logs.
         * <p>
         * @return {@code this}
         * @param controlPlaneLogProject Property controlPlaneLogProject: The Log Service project for control plane logs. This parameter is required.
         */
        public Builder controlPlaneLogProject(final com.aliyun.ros.cdk.core.IResolvable controlPlaneLogProject) {
            this.props.controlPlaneLogProject(controlPlaneLogProject);
            return this;
        }

        /**
         * Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value: - true: Enable data plane cluster Kubernetes API to access Istio resources. - false: Data plane cluster Kubernetes API is not enabled to access Istio resources. Default value: false.
         * <p>
         * @return {@code this}
         * @param crAggregationEnabled Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value: - true: Enable data plane cluster Kubernetes API to access Istio resources. - false: Data plane cluster Kubernetes API is not enabled to access Istio resources. Default value: false. This parameter is required.
         */
        public Builder crAggregationEnabled(final java.lang.Boolean crAggregationEnabled) {
            this.props.crAggregationEnabled(crAggregationEnabled);
            return this;
        }
        /**
         * Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value: - true: Enable data plane cluster Kubernetes API to access Istio resources. - false: Data plane cluster Kubernetes API is not enabled to access Istio resources. Default value: false.
         * <p>
         * @return {@code this}
         * @param crAggregationEnabled Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value: - true: Enable data plane cluster Kubernetes API to access Istio resources. - false: Data plane cluster Kubernetes API is not enabled to access Istio resources. Default value: false. This parameter is required.
         */
        public Builder crAggregationEnabled(final com.aliyun.ros.cdk.core.IResolvable crAggregationEnabled) {
            this.props.crAggregationEnabled(crAggregationEnabled);
            return this;
        }

        /**
         * Property customizedPrometheus: Specifies whether to use a customized Prometheus system.
         * <p>
         * @return {@code this}
         * @param customizedPrometheus Property customizedPrometheus: Specifies whether to use a customized Prometheus system. This parameter is required.
         */
        public Builder customizedPrometheus(final java.lang.Boolean customizedPrometheus) {
            this.props.customizedPrometheus(customizedPrometheus);
            return this;
        }
        /**
         * Property customizedPrometheus: Specifies whether to use a customized Prometheus system.
         * <p>
         * @return {@code this}
         * @param customizedPrometheus Property customizedPrometheus: Specifies whether to use a customized Prometheus system. This parameter is required.
         */
        public Builder customizedPrometheus(final com.aliyun.ros.cdk.core.IResolvable customizedPrometheus) {
            this.props.customizedPrometheus(customizedPrometheus);
            return this;
        }

        /**
         * Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
         * <p>
         * @return {@code this}
         * @param customizedZipkin Property customizedZipkin: Specifies whether to use a user-created Zipkin system. This parameter is required.
         */
        public Builder customizedZipkin(final java.lang.Boolean customizedZipkin) {
            this.props.customizedZipkin(customizedZipkin);
            return this;
        }
        /**
         * Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
         * <p>
         * @return {@code this}
         * @param customizedZipkin Property customizedZipkin: Specifies whether to use a user-created Zipkin system. This parameter is required.
         */
        public Builder customizedZipkin(final com.aliyun.ros.cdk.core.IResolvable customizedZipkin) {
            this.props.customizedZipkin(customizedZipkin);
            return this;
        }

        /**
         * Property dnsProxyingEnabled: Specifies whether to enable DNS proxying.
         * <p>
         * @return {@code this}
         * @param dnsProxyingEnabled Property dnsProxyingEnabled: Specifies whether to enable DNS proxying. This parameter is required.
         */
        public Builder dnsProxyingEnabled(final java.lang.Boolean dnsProxyingEnabled) {
            this.props.dnsProxyingEnabled(dnsProxyingEnabled);
            return this;
        }
        /**
         * Property dnsProxyingEnabled: Specifies whether to enable DNS proxying.
         * <p>
         * @return {@code this}
         * @param dnsProxyingEnabled Property dnsProxyingEnabled: Specifies whether to enable DNS proxying. This parameter is required.
         */
        public Builder dnsProxyingEnabled(final com.aliyun.ros.cdk.core.IResolvable dnsProxyingEnabled) {
            this.props.dnsProxyingEnabled(dnsProxyingEnabled);
            return this;
        }

        /**
         * Property dubboFilterEnabled: Specifies whether to enable Dubbo filter.
         * <p>
         * @return {@code this}
         * @param dubboFilterEnabled Property dubboFilterEnabled: Specifies whether to enable Dubbo filter. This parameter is required.
         */
        public Builder dubboFilterEnabled(final java.lang.Boolean dubboFilterEnabled) {
            this.props.dubboFilterEnabled(dubboFilterEnabled);
            return this;
        }
        /**
         * Property dubboFilterEnabled: Specifies whether to enable Dubbo filter.
         * <p>
         * @return {@code this}
         * @param dubboFilterEnabled Property dubboFilterEnabled: Specifies whether to enable Dubbo filter. This parameter is required.
         */
        public Builder dubboFilterEnabled(final com.aliyun.ros.cdk.core.IResolvable dubboFilterEnabled) {
            this.props.dubboFilterEnabled(dubboFilterEnabled);
            return this;
        }

        /**
         * Property edition: The edition of the ASM instance.
         * <p>
         * @return {@code this}
         * @param edition Property edition: The edition of the ASM instance. This parameter is required.
         */
        public Builder edition(final java.lang.String edition) {
            this.props.edition(edition);
            return this;
        }
        /**
         * Property edition: The edition of the ASM instance.
         * <p>
         * @return {@code this}
         * @param edition Property edition: The edition of the ASM instance. This parameter is required.
         */
        public Builder edition(final com.aliyun.ros.cdk.core.IResolvable edition) {
            this.props.edition(edition);
            return this;
        }

        /**
         * Property enableAcmg: Specifies whether to enable ACMG.
         * <p>
         * @return {@code this}
         * @param enableAcmg Property enableAcmg: Specifies whether to enable ACMG. This parameter is required.
         */
        public Builder enableAcmg(final java.lang.Boolean enableAcmg) {
            this.props.enableAcmg(enableAcmg);
            return this;
        }
        /**
         * Property enableAcmg: Specifies whether to enable ACMG.
         * <p>
         * @return {@code this}
         * @param enableAcmg Property enableAcmg: Specifies whether to enable ACMG. This parameter is required.
         */
        public Builder enableAcmg(final com.aliyun.ros.cdk.core.IResolvable enableAcmg) {
            this.props.enableAcmg(enableAcmg);
            return this;
        }

        /**
         * Property enableAmbient: Specifies whether to enable ambient mode.
         * <p>
         * @return {@code this}
         * @param enableAmbient Property enableAmbient: Specifies whether to enable ambient mode. This parameter is required.
         */
        public Builder enableAmbient(final java.lang.Boolean enableAmbient) {
            this.props.enableAmbient(enableAmbient);
            return this;
        }
        /**
         * Property enableAmbient: Specifies whether to enable ambient mode.
         * <p>
         * @return {@code this}
         * @param enableAmbient Property enableAmbient: Specifies whether to enable ambient mode. This parameter is required.
         */
        public Builder enableAmbient(final com.aliyun.ros.cdk.core.IResolvable enableAmbient) {
            this.props.enableAmbient(enableAmbient);
            return this;
        }

        /**
         * Property enableAudit: Specifies whether to enable the mesh audit feature.
         * <p>
         * To enable this feature, make sure
         * that you have activated Alibaba Cloud Log Service.
         * Valid values: true and false. Default value: false.
         * <p>
         * @return {@code this}
         * @param enableAudit Property enableAudit: Specifies whether to enable the mesh audit feature. This parameter is required.
         */
        public Builder enableAudit(final java.lang.Boolean enableAudit) {
            this.props.enableAudit(enableAudit);
            return this;
        }
        /**
         * Property enableAudit: Specifies whether to enable the mesh audit feature.
         * <p>
         * To enable this feature, make sure
         * that you have activated Alibaba Cloud Log Service.
         * Valid values: true and false. Default value: false.
         * <p>
         * @return {@code this}
         * @param enableAudit Property enableAudit: Specifies whether to enable the mesh audit feature. This parameter is required.
         */
        public Builder enableAudit(final com.aliyun.ros.cdk.core.IResolvable enableAudit) {
            this.props.enableAudit(enableAudit);
            return this;
        }

        /**
         * Property enableCrHistory: Specifies whether to enable CR history.
         * <p>
         * @return {@code this}
         * @param enableCrHistory Property enableCrHistory: Specifies whether to enable CR history. This parameter is required.
         */
        public Builder enableCrHistory(final java.lang.Boolean enableCrHistory) {
            this.props.enableCrHistory(enableCrHistory);
            return this;
        }
        /**
         * Property enableCrHistory: Specifies whether to enable CR history.
         * <p>
         * @return {@code this}
         * @param enableCrHistory Property enableCrHistory: Specifies whether to enable CR history. This parameter is required.
         */
        public Builder enableCrHistory(final com.aliyun.ros.cdk.core.IResolvable enableCrHistory) {
            this.props.enableCrHistory(enableCrHistory);
            return this;
        }

        /**
         * Property enableSdsServer: Specifies whether to enable SDS server.
         * <p>
         * @return {@code this}
         * @param enableSdsServer Property enableSdsServer: Specifies whether to enable SDS server. This parameter is required.
         */
        public Builder enableSdsServer(final java.lang.Boolean enableSdsServer) {
            this.props.enableSdsServer(enableSdsServer);
            return this;
        }
        /**
         * Property enableSdsServer: Specifies whether to enable SDS server.
         * <p>
         * @return {@code this}
         * @param enableSdsServer Property enableSdsServer: Specifies whether to enable SDS server. This parameter is required.
         */
        public Builder enableSdsServer(final com.aliyun.ros.cdk.core.IResolvable enableSdsServer) {
            this.props.enableSdsServer(enableSdsServer);
            return this;
        }

        /**
         * Property excludeInboundPorts: The inbound ports to exclude from traffic management.
         * <p>
         * @return {@code this}
         * @param excludeInboundPorts Property excludeInboundPorts: The inbound ports to exclude from traffic management. This parameter is required.
         */
        public Builder excludeInboundPorts(final java.lang.String excludeInboundPorts) {
            this.props.excludeInboundPorts(excludeInboundPorts);
            return this;
        }
        /**
         * Property excludeInboundPorts: The inbound ports to exclude from traffic management.
         * <p>
         * @return {@code this}
         * @param excludeInboundPorts Property excludeInboundPorts: The inbound ports to exclude from traffic management. This parameter is required.
         */
        public Builder excludeInboundPorts(final com.aliyun.ros.cdk.core.IResolvable excludeInboundPorts) {
            this.props.excludeInboundPorts(excludeInboundPorts);
            return this;
        }

        /**
         * Property excludeIpRanges: The IP ranges to exclude from traffic management.
         * <p>
         * @return {@code this}
         * @param excludeIpRanges Property excludeIpRanges: The IP ranges to exclude from traffic management. This parameter is required.
         */
        public Builder excludeIpRanges(final java.lang.String excludeIpRanges) {
            this.props.excludeIpRanges(excludeIpRanges);
            return this;
        }
        /**
         * Property excludeIpRanges: The IP ranges to exclude from traffic management.
         * <p>
         * @return {@code this}
         * @param excludeIpRanges Property excludeIpRanges: The IP ranges to exclude from traffic management. This parameter is required.
         */
        public Builder excludeIpRanges(final com.aliyun.ros.cdk.core.IResolvable excludeIpRanges) {
            this.props.excludeIpRanges(excludeIpRanges);
            return this;
        }

        /**
         * Property excludeOutboundPorts: The outbound ports to exclude from traffic management.
         * <p>
         * @return {@code this}
         * @param excludeOutboundPorts Property excludeOutboundPorts: The outbound ports to exclude from traffic management. This parameter is required.
         */
        public Builder excludeOutboundPorts(final java.lang.String excludeOutboundPorts) {
            this.props.excludeOutboundPorts(excludeOutboundPorts);
            return this;
        }
        /**
         * Property excludeOutboundPorts: The outbound ports to exclude from traffic management.
         * <p>
         * @return {@code this}
         * @param excludeOutboundPorts Property excludeOutboundPorts: The outbound ports to exclude from traffic management. This parameter is required.
         */
        public Builder excludeOutboundPorts(final com.aliyun.ros.cdk.core.IResolvable excludeOutboundPorts) {
            this.props.excludeOutboundPorts(excludeOutboundPorts);
            return this;
        }

        /**
         * Property existingCaCert: The existing CA certificate.
         * <p>
         * @return {@code this}
         * @param existingCaCert Property existingCaCert: The existing CA certificate. This parameter is required.
         */
        public Builder existingCaCert(final java.lang.String existingCaCert) {
            this.props.existingCaCert(existingCaCert);
            return this;
        }
        /**
         * Property existingCaCert: The existing CA certificate.
         * <p>
         * @return {@code this}
         * @param existingCaCert Property existingCaCert: The existing CA certificate. This parameter is required.
         */
        public Builder existingCaCert(final com.aliyun.ros.cdk.core.IResolvable existingCaCert) {
            this.props.existingCaCert(existingCaCert);
            return this;
        }

        /**
         * Property existingCaKey: The existing CA key.
         * <p>
         * @return {@code this}
         * @param existingCaKey Property existingCaKey: The existing CA key. This parameter is required.
         */
        public Builder existingCaKey(final java.lang.String existingCaKey) {
            this.props.existingCaKey(existingCaKey);
            return this;
        }
        /**
         * Property existingCaKey: The existing CA key.
         * <p>
         * @return {@code this}
         * @param existingCaKey Property existingCaKey: The existing CA key. This parameter is required.
         */
        public Builder existingCaKey(final com.aliyun.ros.cdk.core.IResolvable existingCaKey) {
            this.props.existingCaKey(existingCaKey);
            return this;
        }

        /**
         * Property existingCaType: The type of existing CA.
         * <p>
         * @return {@code this}
         * @param existingCaType Property existingCaType: The type of existing CA. This parameter is required.
         */
        public Builder existingCaType(final java.lang.String existingCaType) {
            this.props.existingCaType(existingCaType);
            return this;
        }
        /**
         * Property existingCaType: The type of existing CA.
         * <p>
         * @return {@code this}
         * @param existingCaType Property existingCaType: The type of existing CA. This parameter is required.
         */
        public Builder existingCaType(final com.aliyun.ros.cdk.core.IResolvable existingCaType) {
            this.props.existingCaType(existingCaType);
            return this;
        }

        /**
         * Property existingRootCaCert: The existing root CA certificate.
         * <p>
         * @return {@code this}
         * @param existingRootCaCert Property existingRootCaCert: The existing root CA certificate. This parameter is required.
         */
        public Builder existingRootCaCert(final java.lang.String existingRootCaCert) {
            this.props.existingRootCaCert(existingRootCaCert);
            return this;
        }
        /**
         * Property existingRootCaCert: The existing root CA certificate.
         * <p>
         * @return {@code this}
         * @param existingRootCaCert Property existingRootCaCert: The existing root CA certificate. This parameter is required.
         */
        public Builder existingRootCaCert(final com.aliyun.ros.cdk.core.IResolvable existingRootCaCert) {
            this.props.existingRootCaCert(existingRootCaCert);
            return this;
        }

        /**
         * Property existingRootCaKey: The existing root CA key.
         * <p>
         * @return {@code this}
         * @param existingRootCaKey Property existingRootCaKey: The existing root CA key. This parameter is required.
         */
        public Builder existingRootCaKey(final java.lang.String existingRootCaKey) {
            this.props.existingRootCaKey(existingRootCaKey);
            return this;
        }
        /**
         * Property existingRootCaKey: The existing root CA key.
         * <p>
         * @return {@code this}
         * @param existingRootCaKey Property existingRootCaKey: The existing root CA key. This parameter is required.
         */
        public Builder existingRootCaKey(final com.aliyun.ros.cdk.core.IResolvable existingRootCaKey) {
            this.props.existingRootCaKey(existingRootCaKey);
            return this;
        }

        /**
         * Property filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration.
         * <p>
         * @return {@code this}
         * @param filterGatewayClusterConfig Property filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration. This parameter is required.
         */
        public Builder filterGatewayClusterConfig(final java.lang.Boolean filterGatewayClusterConfig) {
            this.props.filterGatewayClusterConfig(filterGatewayClusterConfig);
            return this;
        }
        /**
         * Property filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration.
         * <p>
         * @return {@code this}
         * @param filterGatewayClusterConfig Property filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration. This parameter is required.
         */
        public Builder filterGatewayClusterConfig(final com.aliyun.ros.cdk.core.IResolvable filterGatewayClusterConfig) {
            this.props.filterGatewayClusterConfig(filterGatewayClusterConfig);
            return this;
        }

        /**
         * Property gatewayApiEnabled: Specifies whether to enable Gateway API.
         * <p>
         * @return {@code this}
         * @param gatewayApiEnabled Property gatewayApiEnabled: Specifies whether to enable Gateway API. This parameter is required.
         */
        public Builder gatewayApiEnabled(final java.lang.Boolean gatewayApiEnabled) {
            this.props.gatewayApiEnabled(gatewayApiEnabled);
            return this;
        }
        /**
         * Property gatewayApiEnabled: Specifies whether to enable Gateway API.
         * <p>
         * @return {@code this}
         * @param gatewayApiEnabled Property gatewayApiEnabled: Specifies whether to enable Gateway API. This parameter is required.
         */
        public Builder gatewayApiEnabled(final com.aliyun.ros.cdk.core.IResolvable gatewayApiEnabled) {
            this.props.gatewayApiEnabled(gatewayApiEnabled);
            return this;
        }

        /**
         * Property guestCluster: The guest cluster configuration.
         * <p>
         * @return {@code this}
         * @param guestCluster Property guestCluster: The guest cluster configuration. This parameter is required.
         */
        public Builder guestCluster(final java.lang.String guestCluster) {
            this.props.guestCluster(guestCluster);
            return this;
        }
        /**
         * Property guestCluster: The guest cluster configuration.
         * <p>
         * @return {@code this}
         * @param guestCluster Property guestCluster: The guest cluster configuration. This parameter is required.
         */
        public Builder guestCluster(final com.aliyun.ros.cdk.core.IResolvable guestCluster) {
            this.props.guestCluster(guestCluster);
            return this;
        }

        /**
         * Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied to access external services.
         * <p>
         * @return {@code this}
         * @param includeIpRanges Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied to access external services. This parameter is required.
         */
        public Builder includeIpRanges(final java.lang.String includeIpRanges) {
            this.props.includeIpRanges(includeIpRanges);
            return this;
        }
        /**
         * Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied to access external services.
         * <p>
         * @return {@code this}
         * @param includeIpRanges Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied to access external services. This parameter is required.
         */
        public Builder includeIpRanges(final com.aliyun.ros.cdk.core.IResolvable includeIpRanges) {
            this.props.includeIpRanges(includeIpRanges);
            return this;
        }

        /**
         * Property istioVersion: The Istio version of the ASM instance.
         * <p>
         * @return {@code this}
         * @param istioVersion Property istioVersion: The Istio version of the ASM instance. This parameter is required.
         */
        public Builder istioVersion(final java.lang.String istioVersion) {
            this.props.istioVersion(istioVersion);
            return this;
        }
        /**
         * Property istioVersion: The Istio version of the ASM instance.
         * <p>
         * @return {@code this}
         * @param istioVersion Property istioVersion: The Istio version of the ASM instance. This parameter is required.
         */
        public Builder istioVersion(final com.aliyun.ros.cdk.core.IResolvable istioVersion) {
            this.props.istioVersion(istioVersion);
            return this;
        }

        /**
         * Property kialiEnabled: Specifies whether to enable Kiali.
         * <p>
         * @return {@code this}
         * @param kialiEnabled Property kialiEnabled: Specifies whether to enable Kiali. This parameter is required.
         */
        public Builder kialiEnabled(final java.lang.Boolean kialiEnabled) {
            this.props.kialiEnabled(kialiEnabled);
            return this;
        }
        /**
         * Property kialiEnabled: Specifies whether to enable Kiali.
         * <p>
         * @return {@code this}
         * @param kialiEnabled Property kialiEnabled: Specifies whether to enable Kiali. This parameter is required.
         */
        public Builder kialiEnabled(final com.aliyun.ros.cdk.core.IResolvable kialiEnabled) {
            this.props.kialiEnabled(kialiEnabled);
            return this;
        }

        /**
         * Property localityLbConf: The locality load balancing configuration.
         * <p>
         * @return {@code this}
         * @param localityLbConf Property localityLbConf: The locality load balancing configuration. This parameter is required.
         */
        public Builder localityLbConf(final java.lang.String localityLbConf) {
            this.props.localityLbConf(localityLbConf);
            return this;
        }
        /**
         * Property localityLbConf: The locality load balancing configuration.
         * <p>
         * @return {@code this}
         * @param localityLbConf Property localityLbConf: The locality load balancing configuration. This parameter is required.
         */
        public Builder localityLbConf(final com.aliyun.ros.cdk.core.IResolvable localityLbConf) {
            this.props.localityLbConf(localityLbConf);
            return this;
        }

        /**
         * Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
         * <p>
         * Valid values: true and false. Default value: false.
         * <p>
         * @return {@code this}
         * @param localityLoadBalancing Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance. This parameter is required.
         */
        public Builder localityLoadBalancing(final java.lang.Boolean localityLoadBalancing) {
            this.props.localityLoadBalancing(localityLoadBalancing);
            return this;
        }
        /**
         * Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
         * <p>
         * Valid values: true and false. Default value: false.
         * <p>
         * @return {@code this}
         * @param localityLoadBalancing Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance. This parameter is required.
         */
        public Builder localityLoadBalancing(final com.aliyun.ros.cdk.core.IResolvable localityLoadBalancing) {
            this.props.localityLoadBalancing(localityLoadBalancing);
            return this;
        }

        /**
         * Property mseEnabled: Specifies whether to enable MSE.
         * <p>
         * @return {@code this}
         * @param mseEnabled Property mseEnabled: Specifies whether to enable MSE. This parameter is required.
         */
        public Builder mseEnabled(final java.lang.Boolean mseEnabled) {
            this.props.mseEnabled(mseEnabled);
            return this;
        }
        /**
         * Property mseEnabled: Specifies whether to enable MSE.
         * <p>
         * @return {@code this}
         * @param mseEnabled Property mseEnabled: Specifies whether to enable MSE. This parameter is required.
         */
        public Builder mseEnabled(final com.aliyun.ros.cdk.core.IResolvable mseEnabled) {
            this.props.mseEnabled(mseEnabled);
            return this;
        }

        /**
         * Property multiBufferEnabled: Specifies whether to enable multi-buffer.
         * <p>
         * @return {@code this}
         * @param multiBufferEnabled Property multiBufferEnabled: Specifies whether to enable multi-buffer. This parameter is required.
         */
        public Builder multiBufferEnabled(final java.lang.Boolean multiBufferEnabled) {
            this.props.multiBufferEnabled(multiBufferEnabled);
            return this;
        }
        /**
         * Property multiBufferEnabled: Specifies whether to enable multi-buffer.
         * <p>
         * @return {@code this}
         * @param multiBufferEnabled Property multiBufferEnabled: Specifies whether to enable multi-buffer. This parameter is required.
         */
        public Builder multiBufferEnabled(final com.aliyun.ros.cdk.core.IResolvable multiBufferEnabled) {
            this.props.multiBufferEnabled(multiBufferEnabled);
            return this;
        }

        /**
         * Property multiBufferPollDelay: The poll delay for multi-buffer.
         * <p>
         * @return {@code this}
         * @param multiBufferPollDelay Property multiBufferPollDelay: The poll delay for multi-buffer. This parameter is required.
         */
        public Builder multiBufferPollDelay(final java.lang.String multiBufferPollDelay) {
            this.props.multiBufferPollDelay(multiBufferPollDelay);
            return this;
        }
        /**
         * Property multiBufferPollDelay: The poll delay for multi-buffer.
         * <p>
         * @return {@code this}
         * @param multiBufferPollDelay Property multiBufferPollDelay: The poll delay for multi-buffer. This parameter is required.
         */
        public Builder multiBufferPollDelay(final com.aliyun.ros.cdk.core.IResolvable multiBufferPollDelay) {
            this.props.multiBufferPollDelay(multiBufferPollDelay);
            return this;
        }

        /**
         * Property mysqlFilterEnabled: Specifies whether to enable MySQL filter.
         * <p>
         * @return {@code this}
         * @param mysqlFilterEnabled Property mysqlFilterEnabled: Specifies whether to enable MySQL filter. This parameter is required.
         */
        public Builder mysqlFilterEnabled(final java.lang.Boolean mysqlFilterEnabled) {
            this.props.mysqlFilterEnabled(mysqlFilterEnabled);
            return this;
        }
        /**
         * Property mysqlFilterEnabled: Specifies whether to enable MySQL filter.
         * <p>
         * @return {@code this}
         * @param mysqlFilterEnabled Property mysqlFilterEnabled: Specifies whether to enable MySQL filter. This parameter is required.
         */
        public Builder mysqlFilterEnabled(final com.aliyun.ros.cdk.core.IResolvable mysqlFilterEnabled) {
            this.props.mysqlFilterEnabled(mysqlFilterEnabled);
            return this;
        }

        /**
         * Property name: The name of the ASM instance.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the ASM instance. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the ASM instance.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the ASM instance. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property opa: OPA settings.
         * <p>
         * @return {@code this}
         * @param opa Property opa: OPA settings. This parameter is required.
         */
        public Builder opa(final com.aliyun.ros.cdk.core.IResolvable opa) {
            this.props.opa(opa);
            return this;
        }
        /**
         * Property opa: OPA settings.
         * <p>
         * @return {@code this}
         * @param opa Property opa: OPA settings. This parameter is required.
         */
        public Builder opa(final com.aliyun.ros.cdk.asm.RosServiceMesh.OPAProperty opa) {
            this.props.opa(opa);
            return this;
        }

        /**
         * Property opaEnabled: Specifies whether to enable OPA.
         * <p>
         * @return {@code this}
         * @param opaEnabled Property opaEnabled: Specifies whether to enable OPA. This parameter is required.
         */
        public Builder opaEnabled(final java.lang.Boolean opaEnabled) {
            this.props.opaEnabled(opaEnabled);
            return this;
        }
        /**
         * Property opaEnabled: Specifies whether to enable OPA.
         * <p>
         * @return {@code this}
         * @param opaEnabled Property opaEnabled: Specifies whether to enable OPA. This parameter is required.
         */
        public Builder opaEnabled(final com.aliyun.ros.cdk.core.IResolvable opaEnabled) {
            this.props.opaEnabled(opaEnabled);
            return this;
        }

        /**
         * Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
         * <p>
         * @return {@code this}
         * @param outboundTrafficPolicy Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance. This parameter is required.
         */
        public Builder outboundTrafficPolicy(final java.lang.String outboundTrafficPolicy) {
            this.props.outboundTrafficPolicy(outboundTrafficPolicy);
            return this;
        }
        /**
         * Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
         * <p>
         * @return {@code this}
         * @param outboundTrafficPolicy Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance. This parameter is required.
         */
        public Builder outboundTrafficPolicy(final com.aliyun.ros.cdk.core.IResolvable outboundTrafficPolicy) {
            this.props.outboundTrafficPolicy(outboundTrafficPolicy);
            return this;
        }

        /**
         * Property period: The subscription period.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription period.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property pilotLoadBalancerSpec: The specification for the pilot load balancer.
         * <p>
         * @return {@code this}
         * @param pilotLoadBalancerSpec Property pilotLoadBalancerSpec: The specification for the pilot load balancer. This parameter is required.
         */
        public Builder pilotLoadBalancerSpec(final java.lang.String pilotLoadBalancerSpec) {
            this.props.pilotLoadBalancerSpec(pilotLoadBalancerSpec);
            return this;
        }
        /**
         * Property pilotLoadBalancerSpec: The specification for the pilot load balancer.
         * <p>
         * @return {@code this}
         * @param pilotLoadBalancerSpec Property pilotLoadBalancerSpec: The specification for the pilot load balancer. This parameter is required.
         */
        public Builder pilotLoadBalancerSpec(final com.aliyun.ros.cdk.core.IResolvable pilotLoadBalancerSpec) {
            this.props.pilotLoadBalancerSpec(pilotLoadBalancerSpec);
            return this;
        }

        /**
         * Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
         * <p>
         * Valid values: true and false. Default value: false.
         * If you do not set this parameter, only clusters in the same VPC as the ASM instance
         * can access Istio Pilot of the instance.
         * <p>
         * @return {@code this}
         * @param pilotPublicEip Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet. This parameter is required.
         */
        public Builder pilotPublicEip(final java.lang.Boolean pilotPublicEip) {
            this.props.pilotPublicEip(pilotPublicEip);
            return this;
        }
        /**
         * Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
         * <p>
         * Valid values: true and false. Default value: false.
         * If you do not set this parameter, only clusters in the same VPC as the ASM instance
         * can access Istio Pilot of the instance.
         * <p>
         * @return {@code this}
         * @param pilotPublicEip Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet. This parameter is required.
         */
        public Builder pilotPublicEip(final com.aliyun.ros.cdk.core.IResolvable pilotPublicEip) {
            this.props.pilotPublicEip(pilotPublicEip);
            return this;
        }

        /**
         * Property playgroundScene: The playground scene configuration.
         * <p>
         * @return {@code this}
         * @param playgroundScene Property playgroundScene: The playground scene configuration. This parameter is required.
         */
        public Builder playgroundScene(final java.lang.String playgroundScene) {
            this.props.playgroundScene(playgroundScene);
            return this;
        }
        /**
         * Property playgroundScene: The playground scene configuration.
         * <p>
         * @return {@code this}
         * @param playgroundScene Property playgroundScene: The playground scene configuration. This parameter is required.
         */
        public Builder playgroundScene(final com.aliyun.ros.cdk.core.IResolvable playgroundScene) {
            this.props.playgroundScene(playgroundScene);
            return this;
        }

        /**
         * Property prometheusUrl: The URL for Prometheus.
         * <p>
         * @return {@code this}
         * @param prometheusUrl Property prometheusUrl: The URL for Prometheus. This parameter is required.
         */
        public Builder prometheusUrl(final java.lang.String prometheusUrl) {
            this.props.prometheusUrl(prometheusUrl);
            return this;
        }
        /**
         * Property prometheusUrl: The URL for Prometheus.
         * <p>
         * @return {@code this}
         * @param prometheusUrl Property prometheusUrl: The URL for Prometheus. This parameter is required.
         */
        public Builder prometheusUrl(final com.aliyun.ros.cdk.core.IResolvable prometheusUrl) {
            this.props.prometheusUrl(prometheusUrl);
            return this;
        }

        /**
         * Property proxy: Proxy settings.
         * <p>
         * @return {@code this}
         * @param proxy Property proxy: Proxy settings. This parameter is required.
         */
        public Builder proxy(final com.aliyun.ros.cdk.core.IResolvable proxy) {
            this.props.proxy(proxy);
            return this;
        }
        /**
         * Property proxy: Proxy settings.
         * <p>
         * @return {@code this}
         * @param proxy Property proxy: Proxy settings. This parameter is required.
         */
        public Builder proxy(final com.aliyun.ros.cdk.asm.RosServiceMesh.ProxyProperty proxy) {
            this.props.proxy(proxy);
            return this;
        }

        /**
         * Property telemetry: Specifies whether to enable Prometheus monitoring.
         * <p>
         * We recommend that you use Application Real-Time Monitoring Service (ARMS).
         * <p>
         * @return {@code this}
         * @param telemetry Property telemetry: Specifies whether to enable Prometheus monitoring. This parameter is required.
         */
        public Builder telemetry(final java.lang.Boolean telemetry) {
            this.props.telemetry(telemetry);
            return this;
        }
        /**
         * Property telemetry: Specifies whether to enable Prometheus monitoring.
         * <p>
         * We recommend that you use Application Real-Time Monitoring Service (ARMS).
         * <p>
         * @return {@code this}
         * @param telemetry Property telemetry: Specifies whether to enable Prometheus monitoring. This parameter is required.
         */
        public Builder telemetry(final com.aliyun.ros.cdk.core.IResolvable telemetry) {
            this.props.telemetry(telemetry);
            return this;
        }

        /**
         * Property traceSampling: The sampling percentage of tracing.
         * <p>
         * @return {@code this}
         * @param traceSampling Property traceSampling: The sampling percentage of tracing. This parameter is required.
         */
        public Builder traceSampling(final java.lang.Number traceSampling) {
            this.props.traceSampling(traceSampling);
            return this;
        }
        /**
         * Property traceSampling: The sampling percentage of tracing.
         * <p>
         * @return {@code this}
         * @param traceSampling Property traceSampling: The sampling percentage of tracing. This parameter is required.
         */
        public Builder traceSampling(final com.aliyun.ros.cdk.core.IResolvable traceSampling) {
            this.props.traceSampling(traceSampling);
            return this;
        }

        /**
         * Property tracing: Specifies whether to enable the tracing feature.
         * <p>
         * To enable this feature, make sure
         * that you have activated Alibaba Cloud Tracing Analysis.
         * Valid values: true and false. Default value: false.
         * <p>
         * @return {@code this}
         * @param tracing Property tracing: Specifies whether to enable the tracing feature. This parameter is required.
         */
        public Builder tracing(final java.lang.Boolean tracing) {
            this.props.tracing(tracing);
            return this;
        }
        /**
         * Property tracing: Specifies whether to enable the tracing feature.
         * <p>
         * To enable this feature, make sure
         * that you have activated Alibaba Cloud Tracing Analysis.
         * Valid values: true and false. Default value: false.
         * <p>
         * @return {@code this}
         * @param tracing Property tracing: Specifies whether to enable the tracing feature. This parameter is required.
         */
        public Builder tracing(final com.aliyun.ros.cdk.core.IResolvable tracing) {
            this.props.tracing(tracing);
            return this;
        }

        /**
         * Property useExistingCa: Specifies whether to use an existing CA.
         * <p>
         * @return {@code this}
         * @param useExistingCa Property useExistingCa: Specifies whether to use an existing CA. This parameter is required.
         */
        public Builder useExistingCa(final java.lang.Boolean useExistingCa) {
            this.props.useExistingCa(useExistingCa);
            return this;
        }
        /**
         * Property useExistingCa: Specifies whether to use an existing CA.
         * <p>
         * @return {@code this}
         * @param useExistingCa Property useExistingCa: Specifies whether to use an existing CA. This parameter is required.
         */
        public Builder useExistingCa(final com.aliyun.ros.cdk.core.IResolvable useExistingCa) {
            this.props.useExistingCa(useExistingCa);
            return this;
        }

        /**
         * Property webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter.
         * <p>
         * @return {@code this}
         * @param webAssemblyFilterEnabled Property webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter. This parameter is required.
         */
        public Builder webAssemblyFilterEnabled(final java.lang.Boolean webAssemblyFilterEnabled) {
            this.props.webAssemblyFilterEnabled(webAssemblyFilterEnabled);
            return this;
        }
        /**
         * Property webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter.
         * <p>
         * @return {@code this}
         * @param webAssemblyFilterEnabled Property webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter. This parameter is required.
         */
        public Builder webAssemblyFilterEnabled(final com.aliyun.ros.cdk.core.IResolvable webAssemblyFilterEnabled) {
            this.props.webAssemblyFilterEnabled(webAssemblyFilterEnabled);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.asm.ServiceMesh}.
         */
        @Override
        public com.aliyun.ros.cdk.asm.ServiceMesh build() {
            return new com.aliyun.ros.cdk.asm.ServiceMesh(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
