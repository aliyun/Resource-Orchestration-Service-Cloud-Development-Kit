package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a <code>AutoEnableService</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-autoenableservice
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:35.039Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.AutoEnableServiceProps")
@software.amazon.jsii.Jsii.Proxy(AutoEnableServiceProps.Jsii$Proxy.class)
public interface AutoEnableServiceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property serviceName: Which service to enable.
     * <p>
     * Valid values:
     * AHAS: Application High Availability Service
     * ARMS: Realtime Monitoring Service
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
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceName();

    /**
     * @return a {@link Builder} of {@link AutoEnableServiceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AutoEnableServiceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AutoEnableServiceProps> {
        java.lang.Object serviceName;

        /**
         * Sets the value of {@link AutoEnableServiceProps#getServiceName}
         * @param serviceName Property serviceName: Which service to enable. This parameter is required.
         *                    Valid values:
         *                    AHAS: Application High Availability Service
         *                    ARMS: Realtime Monitoring Service
         *                    ApiGateway: API Gateway
         *                    BatchCompute: Batch Compute
         *                    BrainIndustrial: Brain Industrial
         *                    CloudStorageGateway: Cloud Storage Gateway
         *                    CMS: Cloud Monitor Service
         *                    CR: Container Registry
         *                    CS: Container Service
         *                    DataHub: Data Hub
         *                    DataWorks: DataWorks
         *                    DCDN: Dynamic Route for CDN
         *                    EDAS: Enterprise Distributed Application Service
         *                    EMAS: Enterprise Mobile Application Studio
         *                    FC: Function Compute
         *                    FNF: Serverless Workflow
         *                    MaxCompute: MaxCompute
         *                    NAS: Network Attached Storage
         *                    MNS: Message Service (MNS)
         *                    HBR: Hybrid Backup Recovery
         *                    IMM: Intelligent Media Management
         *                    IOT: IoT Platform
         *                    KMS: Key Management Service
         *                    NLP: Natural Language Processing
         *                    OSS: Object Storage Service
         *                    OTS: Table Store
         *                    PrivateLink: Private Link
         *                    PrivateZone: Private Zone
         *                    RocketMQ: RocketMQ
         *                    SAE: Serverless App Engine
         *                    SLS: Log Service
         *                    TrafficMirror: VPC Traffic Mirroring
         *                    VS: Video Surveillance
         *                    Xtrace: Tracing Anlaysis
         *                    CDN: Content Delivery Network
         *                    CDT: Cloud Data Transfer
         *                    CDTCb: Cloud Data Transfer for Cross Border
         *                    TransitRouter: Cen Transit Router
         *                    PAI: Platform of Artificial Intelligence
         *                    Config: Cloud Config
         *                    TrustedService/ROS: Trusted Service for ROS
         *                    CloudSSO: Cloud SSO
         *                    ControlPolicy: Control Policy
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link AutoEnableServiceProps#getServiceName}
         * @param serviceName Property serviceName: Which service to enable. This parameter is required.
         *                    Valid values:
         *                    AHAS: Application High Availability Service
         *                    ARMS: Realtime Monitoring Service
         *                    ApiGateway: API Gateway
         *                    BatchCompute: Batch Compute
         *                    BrainIndustrial: Brain Industrial
         *                    CloudStorageGateway: Cloud Storage Gateway
         *                    CMS: Cloud Monitor Service
         *                    CR: Container Registry
         *                    CS: Container Service
         *                    DataHub: Data Hub
         *                    DataWorks: DataWorks
         *                    DCDN: Dynamic Route for CDN
         *                    EDAS: Enterprise Distributed Application Service
         *                    EMAS: Enterprise Mobile Application Studio
         *                    FC: Function Compute
         *                    FNF: Serverless Workflow
         *                    MaxCompute: MaxCompute
         *                    NAS: Network Attached Storage
         *                    MNS: Message Service (MNS)
         *                    HBR: Hybrid Backup Recovery
         *                    IMM: Intelligent Media Management
         *                    IOT: IoT Platform
         *                    KMS: Key Management Service
         *                    NLP: Natural Language Processing
         *                    OSS: Object Storage Service
         *                    OTS: Table Store
         *                    PrivateLink: Private Link
         *                    PrivateZone: Private Zone
         *                    RocketMQ: RocketMQ
         *                    SAE: Serverless App Engine
         *                    SLS: Log Service
         *                    TrafficMirror: VPC Traffic Mirroring
         *                    VS: Video Surveillance
         *                    Xtrace: Tracing Anlaysis
         *                    CDN: Content Delivery Network
         *                    CDT: Cloud Data Transfer
         *                    CDTCb: Cloud Data Transfer for Cross Border
         *                    TransitRouter: Cen Transit Router
         *                    PAI: Platform of Artificial Intelligence
         *                    Config: Cloud Config
         *                    TrustedService/ROS: Trusted Service for ROS
         *                    CloudSSO: Cloud SSO
         *                    ControlPolicy: Control Policy
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AutoEnableServiceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AutoEnableServiceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AutoEnableServiceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AutoEnableServiceProps {
        private final java.lang.Object serviceName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.serviceName = java.util.Objects.requireNonNull(builder.serviceName, "serviceName is required");
        }

        @Override
        public final java.lang.Object getServiceName() {
            return this.serviceName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("serviceName", om.valueToTree(this.getServiceName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.AutoEnableServiceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AutoEnableServiceProps.Jsii$Proxy that = (AutoEnableServiceProps.Jsii$Proxy) o;

            return this.serviceName.equals(that.serviceName);
        }

        @Override
        public final int hashCode() {
            int result = this.serviceName.hashCode();
            return result;
        }
    }
}
