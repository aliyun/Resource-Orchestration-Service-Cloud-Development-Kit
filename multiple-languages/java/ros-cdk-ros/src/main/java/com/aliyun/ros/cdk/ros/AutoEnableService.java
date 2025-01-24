package com.aliyun.ros.cdk.ros;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ROS::AutoEnableService</code>, which is used to automatically activate an Alibaba Cloud service or feature.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:43.831Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.AutoEnableService")
public class AutoEnableService extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ros.IAutoEnableService {

    protected AutoEnableService(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AutoEnableService(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AutoEnableService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.AutoEnableServiceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AutoEnableService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.AutoEnableServiceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.AutoEnableServiceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.AutoEnableServiceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.AutoEnableService}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.AutoEnableService> {
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
        private final com.aliyun.ros.cdk.ros.AutoEnableServiceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ros.AutoEnableServiceProps.Builder();
        }

        /**
         * Property serviceName: Which service to enable.
         * <p>
         * Valid values:
         * AHAS: Application High Availability Service
         * ARMS: Realtime Monitoring Service
         * ARMS/App: Application Monitoring: Basic Edition
         * ARMS/Web: Front End Monitoring: Basic Edition
         * ARMS/PrometheusMonitor: Prometheus Monitoring: Expert Edition
         * ARMS/SyntheticPost: Cloud Dial Test: Expert Edition (pay as you go)
         * ApiGateway: API Gateway
         * BatchCompute: Batch Compute
         * BrainIndustrial: Brain Industrial
         * CloudStorageGateway: Cloud Storage Gateway
         * CMS: Cloud Monitor Service
         * CR: Container Registry
         * CS: Container Service
         * DataHub: Data Hub
         * DataWorks: DataWorks
         * DCDN: Dynamic Route for CDN
         * EDAS: Enterprise Distributed Application Service
         * EMAS: Enterprise Mobile Application Studio
         * FC: Function Compute
         * FNF: Serverless Workflow
         * MaxCompute: MaxCompute
         * NAS: Network Attached Storage
         * MNS: Message Service (MNS)
         * HBR: Hybrid Backup Recovery
         * IMM: Intelligent Media Management
         * IOT: IoT Platform
         * KMS: Key Management Service
         * NLP: Natural Language Processing
         * OSS: Object Storage Service
         * OTS: Table Store
         * PrivateLink: Private Link
         * PrivateZone: Private Zone
         * RocketMQ: RocketMQ
         * SAE: Serverless App Engine
         * SLS: Log Service
         * TrafficMirror: VPC Traffic Mirroring
         * VS: Video Surveillance
         * Xtrace: Tracing Anlaysis
         * CDN: Content Delivery Network
         * CDT: Cloud Data Transfer
         * CDTCb: Cloud Data Transfer for Cross Border
         * TransitRouter: Cen Transit Router
         * PAI: Platform of Artificial Intelligence
         * Config: Cloud Config
         * TrustedService/ROS: Trusted Service for ROS
         * CloudSSO: Cloud SSO
         * ControlPolicy: Control Policy
         * DSC: Data Security Center Free Edition Service
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Which service to enable. This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }
        /**
         * Property serviceName: Which service to enable.
         * <p>
         * Valid values:
         * AHAS: Application High Availability Service
         * ARMS: Realtime Monitoring Service
         * ARMS/App: Application Monitoring: Basic Edition
         * ARMS/Web: Front End Monitoring: Basic Edition
         * ARMS/PrometheusMonitor: Prometheus Monitoring: Expert Edition
         * ARMS/SyntheticPost: Cloud Dial Test: Expert Edition (pay as you go)
         * ApiGateway: API Gateway
         * BatchCompute: Batch Compute
         * BrainIndustrial: Brain Industrial
         * CloudStorageGateway: Cloud Storage Gateway
         * CMS: Cloud Monitor Service
         * CR: Container Registry
         * CS: Container Service
         * DataHub: Data Hub
         * DataWorks: DataWorks
         * DCDN: Dynamic Route for CDN
         * EDAS: Enterprise Distributed Application Service
         * EMAS: Enterprise Mobile Application Studio
         * FC: Function Compute
         * FNF: Serverless Workflow
         * MaxCompute: MaxCompute
         * NAS: Network Attached Storage
         * MNS: Message Service (MNS)
         * HBR: Hybrid Backup Recovery
         * IMM: Intelligent Media Management
         * IOT: IoT Platform
         * KMS: Key Management Service
         * NLP: Natural Language Processing
         * OSS: Object Storage Service
         * OTS: Table Store
         * PrivateLink: Private Link
         * PrivateZone: Private Zone
         * RocketMQ: RocketMQ
         * SAE: Serverless App Engine
         * SLS: Log Service
         * TrafficMirror: VPC Traffic Mirroring
         * VS: Video Surveillance
         * Xtrace: Tracing Anlaysis
         * CDN: Content Delivery Network
         * CDT: Cloud Data Transfer
         * CDTCb: Cloud Data Transfer for Cross Border
         * TransitRouter: Cen Transit Router
         * PAI: Platform of Artificial Intelligence
         * Config: Cloud Config
         * TrustedService/ROS: Trusted Service for ROS
         * CloudSSO: Cloud SSO
         * ControlPolicy: Control Policy
         * DSC: Data Security Center Free Edition Service
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Which service to enable. This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ros.AutoEnableService}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.AutoEnableService build() {
            return new com.aliyun.ros.cdk.ros.AutoEnableService(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
