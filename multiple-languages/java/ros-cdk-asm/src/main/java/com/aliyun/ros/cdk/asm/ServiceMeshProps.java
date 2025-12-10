package com.aliyun.ros.cdk.asm;

/**
 * Properties for defining a <code>ServiceMesh</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.905Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.asm.$Module.class, fqn = "@alicloud/ros-cdk-asm.ServiceMeshProps")
@software.amazon.jsii.Jsii.Proxy(ServiceMeshProps.Jsii$Proxy.class)
public interface ServiceMeshProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitches();

    /**
     * Property accessLogEnabled: Specifies whether to enable access logging.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessLogEnabled() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessLogFile() {
        return null;
    }

    /**
     * Property accessLogFormat: The format of access logs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessLogFormat() {
        return null;
    }

    /**
     * Property accessLogProject: The Log Service project for access logs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessLogProject() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessLogServiceEnabled() {
        return null;
    }

    /**
     * Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessLogServiceHost() {
        return null;
    }

    /**
     * Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessLogServicePort() {
        return null;
    }

    /**
     * Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding.
     * <p>
     * Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApiServerLoadBalancerSpec() {
        return null;
    }

    /**
     * Property apiServerPublicEip: Specifies whether to expose the API server to the Internet.
     * <p>
     * Valid values: true and false. Default value: false.
     * If you do not set this parameter, the API server of clusters added to the ASM instance
     * cannot be accessed from the Internet.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApiServerPublicEip() {
        return null;
    }

    /**
     * Property auditProject: The name of the Log Service project that is used for mesh audit.
     * <p>
     * Default value: mesh-log-{meshId}.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuditProject() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property autoRenewPeriod: ChargeType is a PrePay.
     * <p>
     * Indicates the automatic renewal time when purchasing a CLB of the year and month type. If the purchase is less than 1 year old, this parameter indicates how many months the auto-renewal will take. If the purchase is longer than 1 year, this parameter indicates how many years the automatic renewal will be made.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     * Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertChain() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property clusterSpec: Service grid instance specification, value: - standard: The standard version.
     * <p>
     * <ul>
     * <li>enterprise: Enterprise Edition</li>
     * <li>ultimate: ultimate.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterSpec() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfigSourceEnabled() {
        return null;
    }

    /**
     * Property configSourceNacosId: The Nacos ID for config source.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfigSourceNacosId() {
        return null;
    }

    /**
     * Property controlPlaneLogEnabled: Specifies whether to enable control plane logging.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getControlPlaneLogEnabled() {
        return null;
    }

    /**
     * Property controlPlaneLogProject: The Log Service project for control plane logs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getControlPlaneLogProject() {
        return null;
    }

    /**
     * Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value: - true: Enable data plane cluster Kubernetes API to access Istio resources. - false: Data plane cluster Kubernetes API is not enabled to access Istio resources. Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrAggregationEnabled() {
        return null;
    }

    /**
     * Property customizedPrometheus: Specifies whether to use a customized Prometheus system.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomizedPrometheus() {
        return null;
    }

    /**
     * Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomizedZipkin() {
        return null;
    }

    /**
     * Property dnsProxyingEnabled: Specifies whether to enable DNS proxying.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDnsProxyingEnabled() {
        return null;
    }

    /**
     * Property dubboFilterEnabled: Specifies whether to enable Dubbo filter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDubboFilterEnabled() {
        return null;
    }

    /**
     * Property edition: The edition of the ASM instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEdition() {
        return null;
    }

    /**
     * Property enableAcmg: Specifies whether to enable ACMG.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAcmg() {
        return null;
    }

    /**
     * Property enableAmbient: Specifies whether to enable ambient mode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAmbient() {
        return null;
    }

    /**
     * Property enableAudit: Specifies whether to enable the mesh audit feature.
     * <p>
     * To enable this feature, make sure
     * that you have activated Alibaba Cloud Log Service.
     * Valid values: true and false. Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAudit() {
        return null;
    }

    /**
     * Property enableCrHistory: Specifies whether to enable CR history.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableCrHistory() {
        return null;
    }

    /**
     * Property enableSdsServer: Specifies whether to enable SDS server.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSdsServer() {
        return null;
    }

    /**
     * Property excludeInboundPorts: The inbound ports to exclude from traffic management.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExcludeInboundPorts() {
        return null;
    }

    /**
     * Property excludeIpRanges: The IP ranges to exclude from traffic management.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExcludeIpRanges() {
        return null;
    }

    /**
     * Property excludeOutboundPorts: The outbound ports to exclude from traffic management.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExcludeOutboundPorts() {
        return null;
    }

    /**
     * Property existingCaCert: The existing CA certificate.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExistingCaCert() {
        return null;
    }

    /**
     * Property existingCaKey: The existing CA key.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExistingCaKey() {
        return null;
    }

    /**
     * Property existingCaType: The type of existing CA.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExistingCaType() {
        return null;
    }

    /**
     * Property existingRootCaCert: The existing root CA certificate.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExistingRootCaCert() {
        return null;
    }

    /**
     * Property existingRootCaKey: The existing root CA key.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExistingRootCaKey() {
        return null;
    }

    /**
     * Property filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFilterGatewayClusterConfig() {
        return null;
    }

    /**
     * Property gatewayApiEnabled: Specifies whether to enable Gateway API.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayApiEnabled() {
        return null;
    }

    /**
     * Property guestCluster: The guest cluster configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGuestCluster() {
        return null;
    }

    /**
     * Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied to access external services.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIncludeIpRanges() {
        return null;
    }

    /**
     * Property istioVersion: The Istio version of the ASM instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIstioVersion() {
        return null;
    }

    /**
     * Property kialiEnabled: Specifies whether to enable Kiali.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKialiEnabled() {
        return null;
    }

    /**
     * Property localityLbConf: The locality load balancing configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLocalityLbConf() {
        return null;
    }

    /**
     * Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
     * <p>
     * Valid values: true and false. Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLocalityLoadBalancing() {
        return null;
    }

    /**
     * Property mseEnabled: Specifies whether to enable MSE.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMseEnabled() {
        return null;
    }

    /**
     * Property multiBufferEnabled: Specifies whether to enable multi-buffer.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiBufferEnabled() {
        return null;
    }

    /**
     * Property multiBufferPollDelay: The poll delay for multi-buffer.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiBufferPollDelay() {
        return null;
    }

    /**
     * Property mysqlFilterEnabled: Specifies whether to enable MySQL filter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMysqlFilterEnabled() {
        return null;
    }

    /**
     * Property name: The name of the ASM instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property opa: OPA settings.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOpa() {
        return null;
    }

    /**
     * Property opaEnabled: Specifies whether to enable OPA.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOpaEnabled() {
        return null;
    }

    /**
     * Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOutboundTrafficPolicy() {
        return null;
    }

    /**
     * Property period: The subscription period.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property pilotLoadBalancerSpec: The specification for the pilot load balancer.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPilotLoadBalancerSpec() {
        return null;
    }

    /**
     * Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
     * <p>
     * Valid values: true and false. Default value: false.
     * If you do not set this parameter, only clusters in the same VPC as the ASM instance
     * can access Istio Pilot of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPilotPublicEip() {
        return null;
    }

    /**
     * Property playgroundScene: The playground scene configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPlaygroundScene() {
        return null;
    }

    /**
     * Property prometheusUrl: The URL for Prometheus.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrometheusUrl() {
        return null;
    }

    /**
     * Property proxy: Proxy settings.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxy() {
        return null;
    }

    /**
     * Property telemetry: Specifies whether to enable Prometheus monitoring.
     * <p>
     * We recommend that you use Application Real-Time Monitoring Service (ARMS).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTelemetry() {
        return null;
    }

    /**
     * Property traceSampling: The sampling percentage of tracing.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTraceSampling() {
        return null;
    }

    /**
     * Property tracing: Specifies whether to enable the tracing feature.
     * <p>
     * To enable this feature, make sure
     * that you have activated Alibaba Cloud Tracing Analysis.
     * Valid values: true and false. Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTracing() {
        return null;
    }

    /**
     * Property useExistingCa: Specifies whether to use an existing CA.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUseExistingCa() {
        return null;
    }

    /**
     * Property webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWebAssemblyFilterEnabled() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ServiceMeshProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ServiceMeshProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ServiceMeshProps> {
        java.lang.Object vpcId;
        java.lang.Object vSwitches;
        java.lang.Object accessLogEnabled;
        java.lang.Object accessLogFile;
        java.lang.Object accessLogFormat;
        java.lang.Object accessLogProject;
        java.lang.Object accessLogServiceEnabled;
        java.lang.Object accessLogServiceHost;
        java.lang.Object accessLogServicePort;
        java.lang.Object apiServerLoadBalancerSpec;
        java.lang.Object apiServerPublicEip;
        java.lang.Object auditProject;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewPeriod;
        java.lang.Object certChain;
        java.lang.Object chargeType;
        java.lang.Object clusterSpec;
        java.lang.Object configSourceEnabled;
        java.lang.Object configSourceNacosId;
        java.lang.Object controlPlaneLogEnabled;
        java.lang.Object controlPlaneLogProject;
        java.lang.Object crAggregationEnabled;
        java.lang.Object customizedPrometheus;
        java.lang.Object customizedZipkin;
        java.lang.Object dnsProxyingEnabled;
        java.lang.Object dubboFilterEnabled;
        java.lang.Object edition;
        java.lang.Object enableAcmg;
        java.lang.Object enableAmbient;
        java.lang.Object enableAudit;
        java.lang.Object enableCrHistory;
        java.lang.Object enableSdsServer;
        java.lang.Object excludeInboundPorts;
        java.lang.Object excludeIpRanges;
        java.lang.Object excludeOutboundPorts;
        java.lang.Object existingCaCert;
        java.lang.Object existingCaKey;
        java.lang.Object existingCaType;
        java.lang.Object existingRootCaCert;
        java.lang.Object existingRootCaKey;
        java.lang.Object filterGatewayClusterConfig;
        java.lang.Object gatewayApiEnabled;
        java.lang.Object guestCluster;
        java.lang.Object includeIpRanges;
        java.lang.Object istioVersion;
        java.lang.Object kialiEnabled;
        java.lang.Object localityLbConf;
        java.lang.Object localityLoadBalancing;
        java.lang.Object mseEnabled;
        java.lang.Object multiBufferEnabled;
        java.lang.Object multiBufferPollDelay;
        java.lang.Object mysqlFilterEnabled;
        java.lang.Object name;
        java.lang.Object opa;
        java.lang.Object opaEnabled;
        java.lang.Object outboundTrafficPolicy;
        java.lang.Object period;
        java.lang.Object pilotLoadBalancerSpec;
        java.lang.Object pilotPublicEip;
        java.lang.Object playgroundScene;
        java.lang.Object prometheusUrl;
        java.lang.Object proxy;
        java.lang.Object telemetry;
        java.lang.Object traceSampling;
        java.lang.Object tracing;
        java.lang.Object useExistingCa;
        java.lang.Object webAssemblyFilterEnabled;

        /**
         * Sets the value of {@link ServiceMeshProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getVSwitches}
         * @param vSwitches Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"]. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitches(java.util.List<? extends java.lang.Object> vSwitches) {
            this.vSwitches = vSwitches;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getVSwitches}
         * @param vSwitches Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"]. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitches(com.aliyun.ros.cdk.core.IResolvable vSwitches) {
            this.vSwitches = vSwitches;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAccessLogEnabled}
         * @param accessLogEnabled Property accessLogEnabled: Specifies whether to enable access logging.
         * @return {@code this}
         */
        public Builder accessLogEnabled(java.lang.Boolean accessLogEnabled) {
            this.accessLogEnabled = accessLogEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAccessLogEnabled}
         * @param accessLogEnabled Property accessLogEnabled: Specifies whether to enable access logging.
         * @return {@code this}
         */
        public Builder accessLogEnabled(com.aliyun.ros.cdk.core.IResolvable accessLogEnabled) {
            this.accessLogEnabled = accessLogEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAccessLogFile}
         * @param accessLogFile Property accessLogFile: Enable and disable access logs.
         *                      Value:
         *                      <p>
         *                      <ul>
         *                      <li>"" : Turn off access logs.</li>
         *                      <li>/dev/stdout: Enables access logging</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder accessLogFile(java.lang.String accessLogFile) {
            this.accessLogFile = accessLogFile;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAccessLogFile}
         * @param accessLogFile Property accessLogFile: Enable and disable access logs.
         *                      Value:
         *                      <p>
         *                      <ul>
         *                      <li>"" : Turn off access logs.</li>
         *                      <li>/dev/stdout: Enables access logging</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder accessLogFile(com.aliyun.ros.cdk.core.IResolvable accessLogFile) {
            this.accessLogFile = accessLogFile;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAccessLogFormat}
         * @param accessLogFormat Property accessLogFormat: The format of access logs.
         * @return {@code this}
         */
        public Builder accessLogFormat(java.lang.String accessLogFormat) {
            this.accessLogFormat = accessLogFormat;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAccessLogFormat}
         * @param accessLogFormat Property accessLogFormat: The format of access logs.
         * @return {@code this}
         */
        public Builder accessLogFormat(com.aliyun.ros.cdk.core.IResolvable accessLogFormat) {
            this.accessLogFormat = accessLogFormat;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAccessLogProject}
         * @param accessLogProject Property accessLogProject: The Log Service project for access logs.
         * @return {@code this}
         */
        public Builder accessLogProject(java.lang.String accessLogProject) {
            this.accessLogProject = accessLogProject;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAccessLogProject}
         * @param accessLogProject Property accessLogProject: The Log Service project for access logs.
         * @return {@code this}
         */
        public Builder accessLogProject(com.aliyun.ros.cdk.core.IResolvable accessLogProject) {
            this.accessLogProject = accessLogProject;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAccessLogServiceEnabled}
         * @param accessLogServiceEnabled Property accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled.
         *                                Value:
         *                                <p>
         *                                <ul>
         *                                <li>true: Enables Envoy's gRPC logging service.</li>
         *                                <li>false: Envoy's gRPC logging service is not enabled.
         *                                Default value: false</li>
         *                                </ul>
         * @return {@code this}
         */
        public Builder accessLogServiceEnabled(java.lang.Boolean accessLogServiceEnabled) {
            this.accessLogServiceEnabled = accessLogServiceEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAccessLogServiceEnabled}
         * @param accessLogServiceEnabled Property accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled.
         *                                Value:
         *                                <p>
         *                                <ul>
         *                                <li>true: Enables Envoy's gRPC logging service.</li>
         *                                <li>false: Envoy's gRPC logging service is not enabled.
         *                                Default value: false</li>
         *                                </ul>
         * @return {@code this}
         */
        public Builder accessLogServiceEnabled(com.aliyun.ros.cdk.core.IResolvable accessLogServiceEnabled) {
            this.accessLogServiceEnabled = accessLogServiceEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAccessLogServiceHost}
         * @param accessLogServiceHost Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.
         * @return {@code this}
         */
        public Builder accessLogServiceHost(java.lang.String accessLogServiceHost) {
            this.accessLogServiceHost = accessLogServiceHost;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAccessLogServiceHost}
         * @param accessLogServiceHost Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.
         * @return {@code this}
         */
        public Builder accessLogServiceHost(com.aliyun.ros.cdk.core.IResolvable accessLogServiceHost) {
            this.accessLogServiceHost = accessLogServiceHost;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAccessLogServicePort}
         * @param accessLogServicePort Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.
         * @return {@code this}
         */
        public Builder accessLogServicePort(java.lang.Number accessLogServicePort) {
            this.accessLogServicePort = accessLogServicePort;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAccessLogServicePort}
         * @param accessLogServicePort Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.
         * @return {@code this}
         */
        public Builder accessLogServicePort(com.aliyun.ros.cdk.core.IResolvable accessLogServicePort) {
            this.accessLogServicePort = accessLogServicePort;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getApiServerLoadBalancerSpec}
         * @param apiServerLoadBalancerSpec Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding.
         *                                  Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
         * @return {@code this}
         */
        public Builder apiServerLoadBalancerSpec(java.lang.String apiServerLoadBalancerSpec) {
            this.apiServerLoadBalancerSpec = apiServerLoadBalancerSpec;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getApiServerLoadBalancerSpec}
         * @param apiServerLoadBalancerSpec Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding.
         *                                  Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
         * @return {@code this}
         */
        public Builder apiServerLoadBalancerSpec(com.aliyun.ros.cdk.core.IResolvable apiServerLoadBalancerSpec) {
            this.apiServerLoadBalancerSpec = apiServerLoadBalancerSpec;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getApiServerPublicEip}
         * @param apiServerPublicEip Property apiServerPublicEip: Specifies whether to expose the API server to the Internet.
         *                           Valid values: true and false. Default value: false.
         *                           If you do not set this parameter, the API server of clusters added to the ASM instance
         *                           cannot be accessed from the Internet.
         * @return {@code this}
         */
        public Builder apiServerPublicEip(java.lang.Boolean apiServerPublicEip) {
            this.apiServerPublicEip = apiServerPublicEip;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getApiServerPublicEip}
         * @param apiServerPublicEip Property apiServerPublicEip: Specifies whether to expose the API server to the Internet.
         *                           Valid values: true and false. Default value: false.
         *                           If you do not set this parameter, the API server of clusters added to the ASM instance
         *                           cannot be accessed from the Internet.
         * @return {@code this}
         */
        public Builder apiServerPublicEip(com.aliyun.ros.cdk.core.IResolvable apiServerPublicEip) {
            this.apiServerPublicEip = apiServerPublicEip;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAuditProject}
         * @param auditProject Property auditProject: The name of the Log Service project that is used for mesh audit.
         *                     Default value: mesh-log-{meshId}.
         * @return {@code this}
         */
        public Builder auditProject(java.lang.String auditProject) {
            this.auditProject = auditProject;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAuditProject}
         * @param auditProject Property auditProject: The name of the Log Service project that is used for mesh audit.
         *                     Default value: mesh-log-{meshId}.
         * @return {@code this}
         */
        public Builder auditProject(com.aliyun.ros.cdk.core.IResolvable auditProject) {
            this.auditProject = auditProject;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAutoRenew}
         * @param autoRenew Property autoRenew: If CLB is annual and monthly, whether it will be automatically renewed.
         *                  Value:
         *                  <p>
         *                  <ul>
         *                  <li>true: Automatic renewal.</li>
         *                  <li>false: No automatic renewal.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAutoRenew}
         * @param autoRenew Property autoRenew: If CLB is annual and monthly, whether it will be automatically renewed.
         *                  Value:
         *                  <p>
         *                  <ul>
         *                  <li>true: Automatic renewal.</li>
         *                  <li>false: No automatic renewal.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: ChargeType is a PrePay.
         *                        Indicates the automatic renewal time when purchasing a CLB of the year and month type. If the purchase is less than 1 year old, this parameter indicates how many months the auto-renewal will take. If the purchase is longer than 1 year, this parameter indicates how many years the automatic renewal will be made.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: ChargeType is a PrePay.
         *                        Indicates the automatic renewal time when purchasing a CLB of the year and month type. If the purchase is less than 1 year old, this parameter indicates how many months the auto-renewal will take. If the purchase is longer than 1 year, this parameter indicates how many years the automatic renewal will be made.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getCertChain}
         * @param certChain Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates.
         * @return {@code this}
         */
        public Builder certChain(java.lang.String certChain) {
            this.certChain = certChain;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getCertChain}
         * @param certChain Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates.
         * @return {@code this}
         */
        public Builder certChain(com.aliyun.ros.cdk.core.IResolvable certChain) {
            this.certChain = certChain;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getChargeType}
         * @param chargeType Property chargeType: CLB payment type.
         *                   Value:
         *                   <p>
         *                   <ul>
         *                   <li>PayOnDemand: pay-as-you-go type</li>
         *                   <li>PrePay: Annual and monthly.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getChargeType}
         * @param chargeType Property chargeType: CLB payment type.
         *                   Value:
         *                   <p>
         *                   <ul>
         *                   <li>PayOnDemand: pay-as-you-go type</li>
         *                   <li>PrePay: Annual and monthly.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getClusterSpec}
         * @param clusterSpec Property clusterSpec: Service grid instance specification, value: - standard: The standard version.
         *                    <ul>
         *                    <li>enterprise: Enterprise Edition</li>
         *                    <li>ultimate: ultimate.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder clusterSpec(java.lang.String clusterSpec) {
            this.clusterSpec = clusterSpec;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getClusterSpec}
         * @param clusterSpec Property clusterSpec: Service grid instance specification, value: - standard: The standard version.
         *                    <ul>
         *                    <li>enterprise: Enterprise Edition</li>
         *                    <li>ultimate: ultimate.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder clusterSpec(com.aliyun.ros.cdk.core.IResolvable clusterSpec) {
            this.clusterSpec = clusterSpec;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getConfigSourceEnabled}
         * @param configSourceEnabled Property configSourceEnabled: Whether to enable an external service registry.
         *                            Value:
         *                            <p>
         *                            <ul>
         *                            <li>true: Enables the external service registry.</li>
         *                            <li>false: The external service registry is not enabled.
         *                            Default value: false</li>
         *                            </ul>
         * @return {@code this}
         */
        public Builder configSourceEnabled(java.lang.Boolean configSourceEnabled) {
            this.configSourceEnabled = configSourceEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getConfigSourceEnabled}
         * @param configSourceEnabled Property configSourceEnabled: Whether to enable an external service registry.
         *                            Value:
         *                            <p>
         *                            <ul>
         *                            <li>true: Enables the external service registry.</li>
         *                            <li>false: The external service registry is not enabled.
         *                            Default value: false</li>
         *                            </ul>
         * @return {@code this}
         */
        public Builder configSourceEnabled(com.aliyun.ros.cdk.core.IResolvable configSourceEnabled) {
            this.configSourceEnabled = configSourceEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getConfigSourceNacosId}
         * @param configSourceNacosId Property configSourceNacosId: The Nacos ID for config source.
         * @return {@code this}
         */
        public Builder configSourceNacosId(java.lang.String configSourceNacosId) {
            this.configSourceNacosId = configSourceNacosId;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getConfigSourceNacosId}
         * @param configSourceNacosId Property configSourceNacosId: The Nacos ID for config source.
         * @return {@code this}
         */
        public Builder configSourceNacosId(com.aliyun.ros.cdk.core.IResolvable configSourceNacosId) {
            this.configSourceNacosId = configSourceNacosId;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getControlPlaneLogEnabled}
         * @param controlPlaneLogEnabled Property controlPlaneLogEnabled: Specifies whether to enable control plane logging.
         * @return {@code this}
         */
        public Builder controlPlaneLogEnabled(java.lang.Boolean controlPlaneLogEnabled) {
            this.controlPlaneLogEnabled = controlPlaneLogEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getControlPlaneLogEnabled}
         * @param controlPlaneLogEnabled Property controlPlaneLogEnabled: Specifies whether to enable control plane logging.
         * @return {@code this}
         */
        public Builder controlPlaneLogEnabled(com.aliyun.ros.cdk.core.IResolvable controlPlaneLogEnabled) {
            this.controlPlaneLogEnabled = controlPlaneLogEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getControlPlaneLogProject}
         * @param controlPlaneLogProject Property controlPlaneLogProject: The Log Service project for control plane logs.
         * @return {@code this}
         */
        public Builder controlPlaneLogProject(java.lang.String controlPlaneLogProject) {
            this.controlPlaneLogProject = controlPlaneLogProject;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getControlPlaneLogProject}
         * @param controlPlaneLogProject Property controlPlaneLogProject: The Log Service project for control plane logs.
         * @return {@code this}
         */
        public Builder controlPlaneLogProject(com.aliyun.ros.cdk.core.IResolvable controlPlaneLogProject) {
            this.controlPlaneLogProject = controlPlaneLogProject;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getCrAggregationEnabled}
         * @param crAggregationEnabled Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value: - true: Enable data plane cluster Kubernetes API to access Istio resources. - false: Data plane cluster Kubernetes API is not enabled to access Istio resources. Default value: false.
         * @return {@code this}
         */
        public Builder crAggregationEnabled(java.lang.Boolean crAggregationEnabled) {
            this.crAggregationEnabled = crAggregationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getCrAggregationEnabled}
         * @param crAggregationEnabled Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value: - true: Enable data plane cluster Kubernetes API to access Istio resources. - false: Data plane cluster Kubernetes API is not enabled to access Istio resources. Default value: false.
         * @return {@code this}
         */
        public Builder crAggregationEnabled(com.aliyun.ros.cdk.core.IResolvable crAggregationEnabled) {
            this.crAggregationEnabled = crAggregationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getCustomizedPrometheus}
         * @param customizedPrometheus Property customizedPrometheus: Specifies whether to use a customized Prometheus system.
         * @return {@code this}
         */
        public Builder customizedPrometheus(java.lang.Boolean customizedPrometheus) {
            this.customizedPrometheus = customizedPrometheus;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getCustomizedPrometheus}
         * @param customizedPrometheus Property customizedPrometheus: Specifies whether to use a customized Prometheus system.
         * @return {@code this}
         */
        public Builder customizedPrometheus(com.aliyun.ros.cdk.core.IResolvable customizedPrometheus) {
            this.customizedPrometheus = customizedPrometheus;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getCustomizedZipkin}
         * @param customizedZipkin Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
         * @return {@code this}
         */
        public Builder customizedZipkin(java.lang.Boolean customizedZipkin) {
            this.customizedZipkin = customizedZipkin;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getCustomizedZipkin}
         * @param customizedZipkin Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
         * @return {@code this}
         */
        public Builder customizedZipkin(com.aliyun.ros.cdk.core.IResolvable customizedZipkin) {
            this.customizedZipkin = customizedZipkin;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getDnsProxyingEnabled}
         * @param dnsProxyingEnabled Property dnsProxyingEnabled: Specifies whether to enable DNS proxying.
         * @return {@code this}
         */
        public Builder dnsProxyingEnabled(java.lang.Boolean dnsProxyingEnabled) {
            this.dnsProxyingEnabled = dnsProxyingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getDnsProxyingEnabled}
         * @param dnsProxyingEnabled Property dnsProxyingEnabled: Specifies whether to enable DNS proxying.
         * @return {@code this}
         */
        public Builder dnsProxyingEnabled(com.aliyun.ros.cdk.core.IResolvable dnsProxyingEnabled) {
            this.dnsProxyingEnabled = dnsProxyingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getDubboFilterEnabled}
         * @param dubboFilterEnabled Property dubboFilterEnabled: Specifies whether to enable Dubbo filter.
         * @return {@code this}
         */
        public Builder dubboFilterEnabled(java.lang.Boolean dubboFilterEnabled) {
            this.dubboFilterEnabled = dubboFilterEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getDubboFilterEnabled}
         * @param dubboFilterEnabled Property dubboFilterEnabled: Specifies whether to enable Dubbo filter.
         * @return {@code this}
         */
        public Builder dubboFilterEnabled(com.aliyun.ros.cdk.core.IResolvable dubboFilterEnabled) {
            this.dubboFilterEnabled = dubboFilterEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getEdition}
         * @param edition Property edition: The edition of the ASM instance.
         * @return {@code this}
         */
        public Builder edition(java.lang.String edition) {
            this.edition = edition;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getEdition}
         * @param edition Property edition: The edition of the ASM instance.
         * @return {@code this}
         */
        public Builder edition(com.aliyun.ros.cdk.core.IResolvable edition) {
            this.edition = edition;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getEnableAcmg}
         * @param enableAcmg Property enableAcmg: Specifies whether to enable ACMG.
         * @return {@code this}
         */
        public Builder enableAcmg(java.lang.Boolean enableAcmg) {
            this.enableAcmg = enableAcmg;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getEnableAcmg}
         * @param enableAcmg Property enableAcmg: Specifies whether to enable ACMG.
         * @return {@code this}
         */
        public Builder enableAcmg(com.aliyun.ros.cdk.core.IResolvable enableAcmg) {
            this.enableAcmg = enableAcmg;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getEnableAmbient}
         * @param enableAmbient Property enableAmbient: Specifies whether to enable ambient mode.
         * @return {@code this}
         */
        public Builder enableAmbient(java.lang.Boolean enableAmbient) {
            this.enableAmbient = enableAmbient;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getEnableAmbient}
         * @param enableAmbient Property enableAmbient: Specifies whether to enable ambient mode.
         * @return {@code this}
         */
        public Builder enableAmbient(com.aliyun.ros.cdk.core.IResolvable enableAmbient) {
            this.enableAmbient = enableAmbient;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getEnableAudit}
         * @param enableAudit Property enableAudit: Specifies whether to enable the mesh audit feature.
         *                    To enable this feature, make sure
         *                    that you have activated Alibaba Cloud Log Service.
         *                    Valid values: true and false. Default value: false.
         * @return {@code this}
         */
        public Builder enableAudit(java.lang.Boolean enableAudit) {
            this.enableAudit = enableAudit;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getEnableAudit}
         * @param enableAudit Property enableAudit: Specifies whether to enable the mesh audit feature.
         *                    To enable this feature, make sure
         *                    that you have activated Alibaba Cloud Log Service.
         *                    Valid values: true and false. Default value: false.
         * @return {@code this}
         */
        public Builder enableAudit(com.aliyun.ros.cdk.core.IResolvable enableAudit) {
            this.enableAudit = enableAudit;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getEnableCrHistory}
         * @param enableCrHistory Property enableCrHistory: Specifies whether to enable CR history.
         * @return {@code this}
         */
        public Builder enableCrHistory(java.lang.Boolean enableCrHistory) {
            this.enableCrHistory = enableCrHistory;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getEnableCrHistory}
         * @param enableCrHistory Property enableCrHistory: Specifies whether to enable CR history.
         * @return {@code this}
         */
        public Builder enableCrHistory(com.aliyun.ros.cdk.core.IResolvable enableCrHistory) {
            this.enableCrHistory = enableCrHistory;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getEnableSdsServer}
         * @param enableSdsServer Property enableSdsServer: Specifies whether to enable SDS server.
         * @return {@code this}
         */
        public Builder enableSdsServer(java.lang.Boolean enableSdsServer) {
            this.enableSdsServer = enableSdsServer;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getEnableSdsServer}
         * @param enableSdsServer Property enableSdsServer: Specifies whether to enable SDS server.
         * @return {@code this}
         */
        public Builder enableSdsServer(com.aliyun.ros.cdk.core.IResolvable enableSdsServer) {
            this.enableSdsServer = enableSdsServer;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExcludeInboundPorts}
         * @param excludeInboundPorts Property excludeInboundPorts: The inbound ports to exclude from traffic management.
         * @return {@code this}
         */
        public Builder excludeInboundPorts(java.lang.String excludeInboundPorts) {
            this.excludeInboundPorts = excludeInboundPorts;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExcludeInboundPorts}
         * @param excludeInboundPorts Property excludeInboundPorts: The inbound ports to exclude from traffic management.
         * @return {@code this}
         */
        public Builder excludeInboundPorts(com.aliyun.ros.cdk.core.IResolvable excludeInboundPorts) {
            this.excludeInboundPorts = excludeInboundPorts;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExcludeIpRanges}
         * @param excludeIpRanges Property excludeIpRanges: The IP ranges to exclude from traffic management.
         * @return {@code this}
         */
        public Builder excludeIpRanges(java.lang.String excludeIpRanges) {
            this.excludeIpRanges = excludeIpRanges;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExcludeIpRanges}
         * @param excludeIpRanges Property excludeIpRanges: The IP ranges to exclude from traffic management.
         * @return {@code this}
         */
        public Builder excludeIpRanges(com.aliyun.ros.cdk.core.IResolvable excludeIpRanges) {
            this.excludeIpRanges = excludeIpRanges;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExcludeOutboundPorts}
         * @param excludeOutboundPorts Property excludeOutboundPorts: The outbound ports to exclude from traffic management.
         * @return {@code this}
         */
        public Builder excludeOutboundPorts(java.lang.String excludeOutboundPorts) {
            this.excludeOutboundPorts = excludeOutboundPorts;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExcludeOutboundPorts}
         * @param excludeOutboundPorts Property excludeOutboundPorts: The outbound ports to exclude from traffic management.
         * @return {@code this}
         */
        public Builder excludeOutboundPorts(com.aliyun.ros.cdk.core.IResolvable excludeOutboundPorts) {
            this.excludeOutboundPorts = excludeOutboundPorts;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExistingCaCert}
         * @param existingCaCert Property existingCaCert: The existing CA certificate.
         * @return {@code this}
         */
        public Builder existingCaCert(java.lang.String existingCaCert) {
            this.existingCaCert = existingCaCert;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExistingCaCert}
         * @param existingCaCert Property existingCaCert: The existing CA certificate.
         * @return {@code this}
         */
        public Builder existingCaCert(com.aliyun.ros.cdk.core.IResolvable existingCaCert) {
            this.existingCaCert = existingCaCert;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExistingCaKey}
         * @param existingCaKey Property existingCaKey: The existing CA key.
         * @return {@code this}
         */
        public Builder existingCaKey(java.lang.String existingCaKey) {
            this.existingCaKey = existingCaKey;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExistingCaKey}
         * @param existingCaKey Property existingCaKey: The existing CA key.
         * @return {@code this}
         */
        public Builder existingCaKey(com.aliyun.ros.cdk.core.IResolvable existingCaKey) {
            this.existingCaKey = existingCaKey;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExistingCaType}
         * @param existingCaType Property existingCaType: The type of existing CA.
         * @return {@code this}
         */
        public Builder existingCaType(java.lang.String existingCaType) {
            this.existingCaType = existingCaType;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExistingCaType}
         * @param existingCaType Property existingCaType: The type of existing CA.
         * @return {@code this}
         */
        public Builder existingCaType(com.aliyun.ros.cdk.core.IResolvable existingCaType) {
            this.existingCaType = existingCaType;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExistingRootCaCert}
         * @param existingRootCaCert Property existingRootCaCert: The existing root CA certificate.
         * @return {@code this}
         */
        public Builder existingRootCaCert(java.lang.String existingRootCaCert) {
            this.existingRootCaCert = existingRootCaCert;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExistingRootCaCert}
         * @param existingRootCaCert Property existingRootCaCert: The existing root CA certificate.
         * @return {@code this}
         */
        public Builder existingRootCaCert(com.aliyun.ros.cdk.core.IResolvable existingRootCaCert) {
            this.existingRootCaCert = existingRootCaCert;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExistingRootCaKey}
         * @param existingRootCaKey Property existingRootCaKey: The existing root CA key.
         * @return {@code this}
         */
        public Builder existingRootCaKey(java.lang.String existingRootCaKey) {
            this.existingRootCaKey = existingRootCaKey;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getExistingRootCaKey}
         * @param existingRootCaKey Property existingRootCaKey: The existing root CA key.
         * @return {@code this}
         */
        public Builder existingRootCaKey(com.aliyun.ros.cdk.core.IResolvable existingRootCaKey) {
            this.existingRootCaKey = existingRootCaKey;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getFilterGatewayClusterConfig}
         * @param filterGatewayClusterConfig Property filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration.
         * @return {@code this}
         */
        public Builder filterGatewayClusterConfig(java.lang.Boolean filterGatewayClusterConfig) {
            this.filterGatewayClusterConfig = filterGatewayClusterConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getFilterGatewayClusterConfig}
         * @param filterGatewayClusterConfig Property filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration.
         * @return {@code this}
         */
        public Builder filterGatewayClusterConfig(com.aliyun.ros.cdk.core.IResolvable filterGatewayClusterConfig) {
            this.filterGatewayClusterConfig = filterGatewayClusterConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getGatewayApiEnabled}
         * @param gatewayApiEnabled Property gatewayApiEnabled: Specifies whether to enable Gateway API.
         * @return {@code this}
         */
        public Builder gatewayApiEnabled(java.lang.Boolean gatewayApiEnabled) {
            this.gatewayApiEnabled = gatewayApiEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getGatewayApiEnabled}
         * @param gatewayApiEnabled Property gatewayApiEnabled: Specifies whether to enable Gateway API.
         * @return {@code this}
         */
        public Builder gatewayApiEnabled(com.aliyun.ros.cdk.core.IResolvable gatewayApiEnabled) {
            this.gatewayApiEnabled = gatewayApiEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getGuestCluster}
         * @param guestCluster Property guestCluster: The guest cluster configuration.
         * @return {@code this}
         */
        public Builder guestCluster(java.lang.String guestCluster) {
            this.guestCluster = guestCluster;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getGuestCluster}
         * @param guestCluster Property guestCluster: The guest cluster configuration.
         * @return {@code this}
         */
        public Builder guestCluster(com.aliyun.ros.cdk.core.IResolvable guestCluster) {
            this.guestCluster = guestCluster;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getIncludeIpRanges}
         * @param includeIpRanges Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied to access external services.
         * @return {@code this}
         */
        public Builder includeIpRanges(java.lang.String includeIpRanges) {
            this.includeIpRanges = includeIpRanges;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getIncludeIpRanges}
         * @param includeIpRanges Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied to access external services.
         * @return {@code this}
         */
        public Builder includeIpRanges(com.aliyun.ros.cdk.core.IResolvable includeIpRanges) {
            this.includeIpRanges = includeIpRanges;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getIstioVersion}
         * @param istioVersion Property istioVersion: The Istio version of the ASM instance.
         * @return {@code this}
         */
        public Builder istioVersion(java.lang.String istioVersion) {
            this.istioVersion = istioVersion;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getIstioVersion}
         * @param istioVersion Property istioVersion: The Istio version of the ASM instance.
         * @return {@code this}
         */
        public Builder istioVersion(com.aliyun.ros.cdk.core.IResolvable istioVersion) {
            this.istioVersion = istioVersion;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getKialiEnabled}
         * @param kialiEnabled Property kialiEnabled: Specifies whether to enable Kiali.
         * @return {@code this}
         */
        public Builder kialiEnabled(java.lang.Boolean kialiEnabled) {
            this.kialiEnabled = kialiEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getKialiEnabled}
         * @param kialiEnabled Property kialiEnabled: Specifies whether to enable Kiali.
         * @return {@code this}
         */
        public Builder kialiEnabled(com.aliyun.ros.cdk.core.IResolvable kialiEnabled) {
            this.kialiEnabled = kialiEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getLocalityLbConf}
         * @param localityLbConf Property localityLbConf: The locality load balancing configuration.
         * @return {@code this}
         */
        public Builder localityLbConf(java.lang.String localityLbConf) {
            this.localityLbConf = localityLbConf;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getLocalityLbConf}
         * @param localityLbConf Property localityLbConf: The locality load balancing configuration.
         * @return {@code this}
         */
        public Builder localityLbConf(com.aliyun.ros.cdk.core.IResolvable localityLbConf) {
            this.localityLbConf = localityLbConf;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getLocalityLoadBalancing}
         * @param localityLoadBalancing Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
         *                              Valid values: true and false. Default value: false.
         * @return {@code this}
         */
        public Builder localityLoadBalancing(java.lang.Boolean localityLoadBalancing) {
            this.localityLoadBalancing = localityLoadBalancing;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getLocalityLoadBalancing}
         * @param localityLoadBalancing Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
         *                              Valid values: true and false. Default value: false.
         * @return {@code this}
         */
        public Builder localityLoadBalancing(com.aliyun.ros.cdk.core.IResolvable localityLoadBalancing) {
            this.localityLoadBalancing = localityLoadBalancing;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getMseEnabled}
         * @param mseEnabled Property mseEnabled: Specifies whether to enable MSE.
         * @return {@code this}
         */
        public Builder mseEnabled(java.lang.Boolean mseEnabled) {
            this.mseEnabled = mseEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getMseEnabled}
         * @param mseEnabled Property mseEnabled: Specifies whether to enable MSE.
         * @return {@code this}
         */
        public Builder mseEnabled(com.aliyun.ros.cdk.core.IResolvable mseEnabled) {
            this.mseEnabled = mseEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getMultiBufferEnabled}
         * @param multiBufferEnabled Property multiBufferEnabled: Specifies whether to enable multi-buffer.
         * @return {@code this}
         */
        public Builder multiBufferEnabled(java.lang.Boolean multiBufferEnabled) {
            this.multiBufferEnabled = multiBufferEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getMultiBufferEnabled}
         * @param multiBufferEnabled Property multiBufferEnabled: Specifies whether to enable multi-buffer.
         * @return {@code this}
         */
        public Builder multiBufferEnabled(com.aliyun.ros.cdk.core.IResolvable multiBufferEnabled) {
            this.multiBufferEnabled = multiBufferEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getMultiBufferPollDelay}
         * @param multiBufferPollDelay Property multiBufferPollDelay: The poll delay for multi-buffer.
         * @return {@code this}
         */
        public Builder multiBufferPollDelay(java.lang.String multiBufferPollDelay) {
            this.multiBufferPollDelay = multiBufferPollDelay;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getMultiBufferPollDelay}
         * @param multiBufferPollDelay Property multiBufferPollDelay: The poll delay for multi-buffer.
         * @return {@code this}
         */
        public Builder multiBufferPollDelay(com.aliyun.ros.cdk.core.IResolvable multiBufferPollDelay) {
            this.multiBufferPollDelay = multiBufferPollDelay;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getMysqlFilterEnabled}
         * @param mysqlFilterEnabled Property mysqlFilterEnabled: Specifies whether to enable MySQL filter.
         * @return {@code this}
         */
        public Builder mysqlFilterEnabled(java.lang.Boolean mysqlFilterEnabled) {
            this.mysqlFilterEnabled = mysqlFilterEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getMysqlFilterEnabled}
         * @param mysqlFilterEnabled Property mysqlFilterEnabled: Specifies whether to enable MySQL filter.
         * @return {@code this}
         */
        public Builder mysqlFilterEnabled(com.aliyun.ros.cdk.core.IResolvable mysqlFilterEnabled) {
            this.mysqlFilterEnabled = mysqlFilterEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getName}
         * @param name Property name: The name of the ASM instance.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getName}
         * @param name Property name: The name of the ASM instance.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getOpa}
         * @param opa Property opa: OPA settings.
         * @return {@code this}
         */
        public Builder opa(com.aliyun.ros.cdk.core.IResolvable opa) {
            this.opa = opa;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getOpa}
         * @param opa Property opa: OPA settings.
         * @return {@code this}
         */
        public Builder opa(com.aliyun.ros.cdk.asm.RosServiceMesh.OPAProperty opa) {
            this.opa = opa;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getOpaEnabled}
         * @param opaEnabled Property opaEnabled: Specifies whether to enable OPA.
         * @return {@code this}
         */
        public Builder opaEnabled(java.lang.Boolean opaEnabled) {
            this.opaEnabled = opaEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getOpaEnabled}
         * @param opaEnabled Property opaEnabled: Specifies whether to enable OPA.
         * @return {@code this}
         */
        public Builder opaEnabled(com.aliyun.ros.cdk.core.IResolvable opaEnabled) {
            this.opaEnabled = opaEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getOutboundTrafficPolicy}
         * @param outboundTrafficPolicy Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
         * @return {@code this}
         */
        public Builder outboundTrafficPolicy(java.lang.String outboundTrafficPolicy) {
            this.outboundTrafficPolicy = outboundTrafficPolicy;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getOutboundTrafficPolicy}
         * @param outboundTrafficPolicy Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
         * @return {@code this}
         */
        public Builder outboundTrafficPolicy(com.aliyun.ros.cdk.core.IResolvable outboundTrafficPolicy) {
            this.outboundTrafficPolicy = outboundTrafficPolicy;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getPeriod}
         * @param period Property period: The subscription period.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getPeriod}
         * @param period Property period: The subscription period.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getPilotLoadBalancerSpec}
         * @param pilotLoadBalancerSpec Property pilotLoadBalancerSpec: The specification for the pilot load balancer.
         * @return {@code this}
         */
        public Builder pilotLoadBalancerSpec(java.lang.String pilotLoadBalancerSpec) {
            this.pilotLoadBalancerSpec = pilotLoadBalancerSpec;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getPilotLoadBalancerSpec}
         * @param pilotLoadBalancerSpec Property pilotLoadBalancerSpec: The specification for the pilot load balancer.
         * @return {@code this}
         */
        public Builder pilotLoadBalancerSpec(com.aliyun.ros.cdk.core.IResolvable pilotLoadBalancerSpec) {
            this.pilotLoadBalancerSpec = pilotLoadBalancerSpec;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getPilotPublicEip}
         * @param pilotPublicEip Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
         *                       Valid values: true and false. Default value: false.
         *                       If you do not set this parameter, only clusters in the same VPC as the ASM instance
         *                       can access Istio Pilot of the instance.
         * @return {@code this}
         */
        public Builder pilotPublicEip(java.lang.Boolean pilotPublicEip) {
            this.pilotPublicEip = pilotPublicEip;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getPilotPublicEip}
         * @param pilotPublicEip Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
         *                       Valid values: true and false. Default value: false.
         *                       If you do not set this parameter, only clusters in the same VPC as the ASM instance
         *                       can access Istio Pilot of the instance.
         * @return {@code this}
         */
        public Builder pilotPublicEip(com.aliyun.ros.cdk.core.IResolvable pilotPublicEip) {
            this.pilotPublicEip = pilotPublicEip;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getPlaygroundScene}
         * @param playgroundScene Property playgroundScene: The playground scene configuration.
         * @return {@code this}
         */
        public Builder playgroundScene(java.lang.String playgroundScene) {
            this.playgroundScene = playgroundScene;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getPlaygroundScene}
         * @param playgroundScene Property playgroundScene: The playground scene configuration.
         * @return {@code this}
         */
        public Builder playgroundScene(com.aliyun.ros.cdk.core.IResolvable playgroundScene) {
            this.playgroundScene = playgroundScene;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getPrometheusUrl}
         * @param prometheusUrl Property prometheusUrl: The URL for Prometheus.
         * @return {@code this}
         */
        public Builder prometheusUrl(java.lang.String prometheusUrl) {
            this.prometheusUrl = prometheusUrl;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getPrometheusUrl}
         * @param prometheusUrl Property prometheusUrl: The URL for Prometheus.
         * @return {@code this}
         */
        public Builder prometheusUrl(com.aliyun.ros.cdk.core.IResolvable prometheusUrl) {
            this.prometheusUrl = prometheusUrl;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getProxy}
         * @param proxy Property proxy: Proxy settings.
         * @return {@code this}
         */
        public Builder proxy(com.aliyun.ros.cdk.core.IResolvable proxy) {
            this.proxy = proxy;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getProxy}
         * @param proxy Property proxy: Proxy settings.
         * @return {@code this}
         */
        public Builder proxy(com.aliyun.ros.cdk.asm.RosServiceMesh.ProxyProperty proxy) {
            this.proxy = proxy;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getTelemetry}
         * @param telemetry Property telemetry: Specifies whether to enable Prometheus monitoring.
         *                  We recommend that you use Application Real-Time Monitoring Service (ARMS).
         * @return {@code this}
         */
        public Builder telemetry(java.lang.Boolean telemetry) {
            this.telemetry = telemetry;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getTelemetry}
         * @param telemetry Property telemetry: Specifies whether to enable Prometheus monitoring.
         *                  We recommend that you use Application Real-Time Monitoring Service (ARMS).
         * @return {@code this}
         */
        public Builder telemetry(com.aliyun.ros.cdk.core.IResolvable telemetry) {
            this.telemetry = telemetry;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getTraceSampling}
         * @param traceSampling Property traceSampling: The sampling percentage of tracing.
         * @return {@code this}
         */
        public Builder traceSampling(java.lang.Number traceSampling) {
            this.traceSampling = traceSampling;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getTraceSampling}
         * @param traceSampling Property traceSampling: The sampling percentage of tracing.
         * @return {@code this}
         */
        public Builder traceSampling(com.aliyun.ros.cdk.core.IResolvable traceSampling) {
            this.traceSampling = traceSampling;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getTracing}
         * @param tracing Property tracing: Specifies whether to enable the tracing feature.
         *                To enable this feature, make sure
         *                that you have activated Alibaba Cloud Tracing Analysis.
         *                Valid values: true and false. Default value: false.
         * @return {@code this}
         */
        public Builder tracing(java.lang.Boolean tracing) {
            this.tracing = tracing;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getTracing}
         * @param tracing Property tracing: Specifies whether to enable the tracing feature.
         *                To enable this feature, make sure
         *                that you have activated Alibaba Cloud Tracing Analysis.
         *                Valid values: true and false. Default value: false.
         * @return {@code this}
         */
        public Builder tracing(com.aliyun.ros.cdk.core.IResolvable tracing) {
            this.tracing = tracing;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getUseExistingCa}
         * @param useExistingCa Property useExistingCa: Specifies whether to use an existing CA.
         * @return {@code this}
         */
        public Builder useExistingCa(java.lang.Boolean useExistingCa) {
            this.useExistingCa = useExistingCa;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getUseExistingCa}
         * @param useExistingCa Property useExistingCa: Specifies whether to use an existing CA.
         * @return {@code this}
         */
        public Builder useExistingCa(com.aliyun.ros.cdk.core.IResolvable useExistingCa) {
            this.useExistingCa = useExistingCa;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getWebAssemblyFilterEnabled}
         * @param webAssemblyFilterEnabled Property webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter.
         * @return {@code this}
         */
        public Builder webAssemblyFilterEnabled(java.lang.Boolean webAssemblyFilterEnabled) {
            this.webAssemblyFilterEnabled = webAssemblyFilterEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServiceMeshProps#getWebAssemblyFilterEnabled}
         * @param webAssemblyFilterEnabled Property webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter.
         * @return {@code this}
         */
        public Builder webAssemblyFilterEnabled(com.aliyun.ros.cdk.core.IResolvable webAssemblyFilterEnabled) {
            this.webAssemblyFilterEnabled = webAssemblyFilterEnabled;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ServiceMeshProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ServiceMeshProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ServiceMeshProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServiceMeshProps {
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitches;
        private final java.lang.Object accessLogEnabled;
        private final java.lang.Object accessLogFile;
        private final java.lang.Object accessLogFormat;
        private final java.lang.Object accessLogProject;
        private final java.lang.Object accessLogServiceEnabled;
        private final java.lang.Object accessLogServiceHost;
        private final java.lang.Object accessLogServicePort;
        private final java.lang.Object apiServerLoadBalancerSpec;
        private final java.lang.Object apiServerPublicEip;
        private final java.lang.Object auditProject;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object certChain;
        private final java.lang.Object chargeType;
        private final java.lang.Object clusterSpec;
        private final java.lang.Object configSourceEnabled;
        private final java.lang.Object configSourceNacosId;
        private final java.lang.Object controlPlaneLogEnabled;
        private final java.lang.Object controlPlaneLogProject;
        private final java.lang.Object crAggregationEnabled;
        private final java.lang.Object customizedPrometheus;
        private final java.lang.Object customizedZipkin;
        private final java.lang.Object dnsProxyingEnabled;
        private final java.lang.Object dubboFilterEnabled;
        private final java.lang.Object edition;
        private final java.lang.Object enableAcmg;
        private final java.lang.Object enableAmbient;
        private final java.lang.Object enableAudit;
        private final java.lang.Object enableCrHistory;
        private final java.lang.Object enableSdsServer;
        private final java.lang.Object excludeInboundPorts;
        private final java.lang.Object excludeIpRanges;
        private final java.lang.Object excludeOutboundPorts;
        private final java.lang.Object existingCaCert;
        private final java.lang.Object existingCaKey;
        private final java.lang.Object existingCaType;
        private final java.lang.Object existingRootCaCert;
        private final java.lang.Object existingRootCaKey;
        private final java.lang.Object filterGatewayClusterConfig;
        private final java.lang.Object gatewayApiEnabled;
        private final java.lang.Object guestCluster;
        private final java.lang.Object includeIpRanges;
        private final java.lang.Object istioVersion;
        private final java.lang.Object kialiEnabled;
        private final java.lang.Object localityLbConf;
        private final java.lang.Object localityLoadBalancing;
        private final java.lang.Object mseEnabled;
        private final java.lang.Object multiBufferEnabled;
        private final java.lang.Object multiBufferPollDelay;
        private final java.lang.Object mysqlFilterEnabled;
        private final java.lang.Object name;
        private final java.lang.Object opa;
        private final java.lang.Object opaEnabled;
        private final java.lang.Object outboundTrafficPolicy;
        private final java.lang.Object period;
        private final java.lang.Object pilotLoadBalancerSpec;
        private final java.lang.Object pilotPublicEip;
        private final java.lang.Object playgroundScene;
        private final java.lang.Object prometheusUrl;
        private final java.lang.Object proxy;
        private final java.lang.Object telemetry;
        private final java.lang.Object traceSampling;
        private final java.lang.Object tracing;
        private final java.lang.Object useExistingCa;
        private final java.lang.Object webAssemblyFilterEnabled;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitches = software.amazon.jsii.Kernel.get(this, "vSwitches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessLogEnabled = software.amazon.jsii.Kernel.get(this, "accessLogEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessLogFile = software.amazon.jsii.Kernel.get(this, "accessLogFile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessLogFormat = software.amazon.jsii.Kernel.get(this, "accessLogFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessLogProject = software.amazon.jsii.Kernel.get(this, "accessLogProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessLogServiceEnabled = software.amazon.jsii.Kernel.get(this, "accessLogServiceEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessLogServiceHost = software.amazon.jsii.Kernel.get(this, "accessLogServiceHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessLogServicePort = software.amazon.jsii.Kernel.get(this, "accessLogServicePort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.apiServerLoadBalancerSpec = software.amazon.jsii.Kernel.get(this, "apiServerLoadBalancerSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.apiServerPublicEip = software.amazon.jsii.Kernel.get(this, "apiServerPublicEip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.auditProject = software.amazon.jsii.Kernel.get(this, "auditProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certChain = software.amazon.jsii.Kernel.get(this, "certChain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterSpec = software.amazon.jsii.Kernel.get(this, "clusterSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.configSourceEnabled = software.amazon.jsii.Kernel.get(this, "configSourceEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.configSourceNacosId = software.amazon.jsii.Kernel.get(this, "configSourceNacosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.controlPlaneLogEnabled = software.amazon.jsii.Kernel.get(this, "controlPlaneLogEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.controlPlaneLogProject = software.amazon.jsii.Kernel.get(this, "controlPlaneLogProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crAggregationEnabled = software.amazon.jsii.Kernel.get(this, "crAggregationEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customizedPrometheus = software.amazon.jsii.Kernel.get(this, "customizedPrometheus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customizedZipkin = software.amazon.jsii.Kernel.get(this, "customizedZipkin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dnsProxyingEnabled = software.amazon.jsii.Kernel.get(this, "dnsProxyingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dubboFilterEnabled = software.amazon.jsii.Kernel.get(this, "dubboFilterEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.edition = software.amazon.jsii.Kernel.get(this, "edition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAcmg = software.amazon.jsii.Kernel.get(this, "enableAcmg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAmbient = software.amazon.jsii.Kernel.get(this, "enableAmbient", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAudit = software.amazon.jsii.Kernel.get(this, "enableAudit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableCrHistory = software.amazon.jsii.Kernel.get(this, "enableCrHistory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableSdsServer = software.amazon.jsii.Kernel.get(this, "enableSdsServer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.excludeInboundPorts = software.amazon.jsii.Kernel.get(this, "excludeInboundPorts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.excludeIpRanges = software.amazon.jsii.Kernel.get(this, "excludeIpRanges", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.excludeOutboundPorts = software.amazon.jsii.Kernel.get(this, "excludeOutboundPorts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.existingCaCert = software.amazon.jsii.Kernel.get(this, "existingCaCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.existingCaKey = software.amazon.jsii.Kernel.get(this, "existingCaKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.existingCaType = software.amazon.jsii.Kernel.get(this, "existingCaType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.existingRootCaCert = software.amazon.jsii.Kernel.get(this, "existingRootCaCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.existingRootCaKey = software.amazon.jsii.Kernel.get(this, "existingRootCaKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.filterGatewayClusterConfig = software.amazon.jsii.Kernel.get(this, "filterGatewayClusterConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gatewayApiEnabled = software.amazon.jsii.Kernel.get(this, "gatewayApiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.guestCluster = software.amazon.jsii.Kernel.get(this, "guestCluster", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.includeIpRanges = software.amazon.jsii.Kernel.get(this, "includeIpRanges", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.istioVersion = software.amazon.jsii.Kernel.get(this, "istioVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kialiEnabled = software.amazon.jsii.Kernel.get(this, "kialiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localityLbConf = software.amazon.jsii.Kernel.get(this, "localityLbConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localityLoadBalancing = software.amazon.jsii.Kernel.get(this, "localityLoadBalancing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mseEnabled = software.amazon.jsii.Kernel.get(this, "mseEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiBufferEnabled = software.amazon.jsii.Kernel.get(this, "multiBufferEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiBufferPollDelay = software.amazon.jsii.Kernel.get(this, "multiBufferPollDelay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mysqlFilterEnabled = software.amazon.jsii.Kernel.get(this, "mysqlFilterEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.opa = software.amazon.jsii.Kernel.get(this, "opa", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.opaEnabled = software.amazon.jsii.Kernel.get(this, "opaEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.outboundTrafficPolicy = software.amazon.jsii.Kernel.get(this, "outboundTrafficPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pilotLoadBalancerSpec = software.amazon.jsii.Kernel.get(this, "pilotLoadBalancerSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pilotPublicEip = software.amazon.jsii.Kernel.get(this, "pilotPublicEip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.playgroundScene = software.amazon.jsii.Kernel.get(this, "playgroundScene", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.prometheusUrl = software.amazon.jsii.Kernel.get(this, "prometheusUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxy = software.amazon.jsii.Kernel.get(this, "proxy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.telemetry = software.amazon.jsii.Kernel.get(this, "telemetry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.traceSampling = software.amazon.jsii.Kernel.get(this, "traceSampling", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tracing = software.amazon.jsii.Kernel.get(this, "tracing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.useExistingCa = software.amazon.jsii.Kernel.get(this, "useExistingCa", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.webAssemblyFilterEnabled = software.amazon.jsii.Kernel.get(this, "webAssemblyFilterEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitches = java.util.Objects.requireNonNull(builder.vSwitches, "vSwitches is required");
            this.accessLogEnabled = builder.accessLogEnabled;
            this.accessLogFile = builder.accessLogFile;
            this.accessLogFormat = builder.accessLogFormat;
            this.accessLogProject = builder.accessLogProject;
            this.accessLogServiceEnabled = builder.accessLogServiceEnabled;
            this.accessLogServiceHost = builder.accessLogServiceHost;
            this.accessLogServicePort = builder.accessLogServicePort;
            this.apiServerLoadBalancerSpec = builder.apiServerLoadBalancerSpec;
            this.apiServerPublicEip = builder.apiServerPublicEip;
            this.auditProject = builder.auditProject;
            this.autoRenew = builder.autoRenew;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.certChain = builder.certChain;
            this.chargeType = builder.chargeType;
            this.clusterSpec = builder.clusterSpec;
            this.configSourceEnabled = builder.configSourceEnabled;
            this.configSourceNacosId = builder.configSourceNacosId;
            this.controlPlaneLogEnabled = builder.controlPlaneLogEnabled;
            this.controlPlaneLogProject = builder.controlPlaneLogProject;
            this.crAggregationEnabled = builder.crAggregationEnabled;
            this.customizedPrometheus = builder.customizedPrometheus;
            this.customizedZipkin = builder.customizedZipkin;
            this.dnsProxyingEnabled = builder.dnsProxyingEnabled;
            this.dubboFilterEnabled = builder.dubboFilterEnabled;
            this.edition = builder.edition;
            this.enableAcmg = builder.enableAcmg;
            this.enableAmbient = builder.enableAmbient;
            this.enableAudit = builder.enableAudit;
            this.enableCrHistory = builder.enableCrHistory;
            this.enableSdsServer = builder.enableSdsServer;
            this.excludeInboundPorts = builder.excludeInboundPorts;
            this.excludeIpRanges = builder.excludeIpRanges;
            this.excludeOutboundPorts = builder.excludeOutboundPorts;
            this.existingCaCert = builder.existingCaCert;
            this.existingCaKey = builder.existingCaKey;
            this.existingCaType = builder.existingCaType;
            this.existingRootCaCert = builder.existingRootCaCert;
            this.existingRootCaKey = builder.existingRootCaKey;
            this.filterGatewayClusterConfig = builder.filterGatewayClusterConfig;
            this.gatewayApiEnabled = builder.gatewayApiEnabled;
            this.guestCluster = builder.guestCluster;
            this.includeIpRanges = builder.includeIpRanges;
            this.istioVersion = builder.istioVersion;
            this.kialiEnabled = builder.kialiEnabled;
            this.localityLbConf = builder.localityLbConf;
            this.localityLoadBalancing = builder.localityLoadBalancing;
            this.mseEnabled = builder.mseEnabled;
            this.multiBufferEnabled = builder.multiBufferEnabled;
            this.multiBufferPollDelay = builder.multiBufferPollDelay;
            this.mysqlFilterEnabled = builder.mysqlFilterEnabled;
            this.name = builder.name;
            this.opa = builder.opa;
            this.opaEnabled = builder.opaEnabled;
            this.outboundTrafficPolicy = builder.outboundTrafficPolicy;
            this.period = builder.period;
            this.pilotLoadBalancerSpec = builder.pilotLoadBalancerSpec;
            this.pilotPublicEip = builder.pilotPublicEip;
            this.playgroundScene = builder.playgroundScene;
            this.prometheusUrl = builder.prometheusUrl;
            this.proxy = builder.proxy;
            this.telemetry = builder.telemetry;
            this.traceSampling = builder.traceSampling;
            this.tracing = builder.tracing;
            this.useExistingCa = builder.useExistingCa;
            this.webAssemblyFilterEnabled = builder.webAssemblyFilterEnabled;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitches() {
            return this.vSwitches;
        }

        @Override
        public final java.lang.Object getAccessLogEnabled() {
            return this.accessLogEnabled;
        }

        @Override
        public final java.lang.Object getAccessLogFile() {
            return this.accessLogFile;
        }

        @Override
        public final java.lang.Object getAccessLogFormat() {
            return this.accessLogFormat;
        }

        @Override
        public final java.lang.Object getAccessLogProject() {
            return this.accessLogProject;
        }

        @Override
        public final java.lang.Object getAccessLogServiceEnabled() {
            return this.accessLogServiceEnabled;
        }

        @Override
        public final java.lang.Object getAccessLogServiceHost() {
            return this.accessLogServiceHost;
        }

        @Override
        public final java.lang.Object getAccessLogServicePort() {
            return this.accessLogServicePort;
        }

        @Override
        public final java.lang.Object getApiServerLoadBalancerSpec() {
            return this.apiServerLoadBalancerSpec;
        }

        @Override
        public final java.lang.Object getApiServerPublicEip() {
            return this.apiServerPublicEip;
        }

        @Override
        public final java.lang.Object getAuditProject() {
            return this.auditProject;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getCertChain() {
            return this.certChain;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getClusterSpec() {
            return this.clusterSpec;
        }

        @Override
        public final java.lang.Object getConfigSourceEnabled() {
            return this.configSourceEnabled;
        }

        @Override
        public final java.lang.Object getConfigSourceNacosId() {
            return this.configSourceNacosId;
        }

        @Override
        public final java.lang.Object getControlPlaneLogEnabled() {
            return this.controlPlaneLogEnabled;
        }

        @Override
        public final java.lang.Object getControlPlaneLogProject() {
            return this.controlPlaneLogProject;
        }

        @Override
        public final java.lang.Object getCrAggregationEnabled() {
            return this.crAggregationEnabled;
        }

        @Override
        public final java.lang.Object getCustomizedPrometheus() {
            return this.customizedPrometheus;
        }

        @Override
        public final java.lang.Object getCustomizedZipkin() {
            return this.customizedZipkin;
        }

        @Override
        public final java.lang.Object getDnsProxyingEnabled() {
            return this.dnsProxyingEnabled;
        }

        @Override
        public final java.lang.Object getDubboFilterEnabled() {
            return this.dubboFilterEnabled;
        }

        @Override
        public final java.lang.Object getEdition() {
            return this.edition;
        }

        @Override
        public final java.lang.Object getEnableAcmg() {
            return this.enableAcmg;
        }

        @Override
        public final java.lang.Object getEnableAmbient() {
            return this.enableAmbient;
        }

        @Override
        public final java.lang.Object getEnableAudit() {
            return this.enableAudit;
        }

        @Override
        public final java.lang.Object getEnableCrHistory() {
            return this.enableCrHistory;
        }

        @Override
        public final java.lang.Object getEnableSdsServer() {
            return this.enableSdsServer;
        }

        @Override
        public final java.lang.Object getExcludeInboundPorts() {
            return this.excludeInboundPorts;
        }

        @Override
        public final java.lang.Object getExcludeIpRanges() {
            return this.excludeIpRanges;
        }

        @Override
        public final java.lang.Object getExcludeOutboundPorts() {
            return this.excludeOutboundPorts;
        }

        @Override
        public final java.lang.Object getExistingCaCert() {
            return this.existingCaCert;
        }

        @Override
        public final java.lang.Object getExistingCaKey() {
            return this.existingCaKey;
        }

        @Override
        public final java.lang.Object getExistingCaType() {
            return this.existingCaType;
        }

        @Override
        public final java.lang.Object getExistingRootCaCert() {
            return this.existingRootCaCert;
        }

        @Override
        public final java.lang.Object getExistingRootCaKey() {
            return this.existingRootCaKey;
        }

        @Override
        public final java.lang.Object getFilterGatewayClusterConfig() {
            return this.filterGatewayClusterConfig;
        }

        @Override
        public final java.lang.Object getGatewayApiEnabled() {
            return this.gatewayApiEnabled;
        }

        @Override
        public final java.lang.Object getGuestCluster() {
            return this.guestCluster;
        }

        @Override
        public final java.lang.Object getIncludeIpRanges() {
            return this.includeIpRanges;
        }

        @Override
        public final java.lang.Object getIstioVersion() {
            return this.istioVersion;
        }

        @Override
        public final java.lang.Object getKialiEnabled() {
            return this.kialiEnabled;
        }

        @Override
        public final java.lang.Object getLocalityLbConf() {
            return this.localityLbConf;
        }

        @Override
        public final java.lang.Object getLocalityLoadBalancing() {
            return this.localityLoadBalancing;
        }

        @Override
        public final java.lang.Object getMseEnabled() {
            return this.mseEnabled;
        }

        @Override
        public final java.lang.Object getMultiBufferEnabled() {
            return this.multiBufferEnabled;
        }

        @Override
        public final java.lang.Object getMultiBufferPollDelay() {
            return this.multiBufferPollDelay;
        }

        @Override
        public final java.lang.Object getMysqlFilterEnabled() {
            return this.mysqlFilterEnabled;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getOpa() {
            return this.opa;
        }

        @Override
        public final java.lang.Object getOpaEnabled() {
            return this.opaEnabled;
        }

        @Override
        public final java.lang.Object getOutboundTrafficPolicy() {
            return this.outboundTrafficPolicy;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPilotLoadBalancerSpec() {
            return this.pilotLoadBalancerSpec;
        }

        @Override
        public final java.lang.Object getPilotPublicEip() {
            return this.pilotPublicEip;
        }

        @Override
        public final java.lang.Object getPlaygroundScene() {
            return this.playgroundScene;
        }

        @Override
        public final java.lang.Object getPrometheusUrl() {
            return this.prometheusUrl;
        }

        @Override
        public final java.lang.Object getProxy() {
            return this.proxy;
        }

        @Override
        public final java.lang.Object getTelemetry() {
            return this.telemetry;
        }

        @Override
        public final java.lang.Object getTraceSampling() {
            return this.traceSampling;
        }

        @Override
        public final java.lang.Object getTracing() {
            return this.tracing;
        }

        @Override
        public final java.lang.Object getUseExistingCa() {
            return this.useExistingCa;
        }

        @Override
        public final java.lang.Object getWebAssemblyFilterEnabled() {
            return this.webAssemblyFilterEnabled;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitches", om.valueToTree(this.getVSwitches()));
            if (this.getAccessLogEnabled() != null) {
                data.set("accessLogEnabled", om.valueToTree(this.getAccessLogEnabled()));
            }
            if (this.getAccessLogFile() != null) {
                data.set("accessLogFile", om.valueToTree(this.getAccessLogFile()));
            }
            if (this.getAccessLogFormat() != null) {
                data.set("accessLogFormat", om.valueToTree(this.getAccessLogFormat()));
            }
            if (this.getAccessLogProject() != null) {
                data.set("accessLogProject", om.valueToTree(this.getAccessLogProject()));
            }
            if (this.getAccessLogServiceEnabled() != null) {
                data.set("accessLogServiceEnabled", om.valueToTree(this.getAccessLogServiceEnabled()));
            }
            if (this.getAccessLogServiceHost() != null) {
                data.set("accessLogServiceHost", om.valueToTree(this.getAccessLogServiceHost()));
            }
            if (this.getAccessLogServicePort() != null) {
                data.set("accessLogServicePort", om.valueToTree(this.getAccessLogServicePort()));
            }
            if (this.getApiServerLoadBalancerSpec() != null) {
                data.set("apiServerLoadBalancerSpec", om.valueToTree(this.getApiServerLoadBalancerSpec()));
            }
            if (this.getApiServerPublicEip() != null) {
                data.set("apiServerPublicEip", om.valueToTree(this.getApiServerPublicEip()));
            }
            if (this.getAuditProject() != null) {
                data.set("auditProject", om.valueToTree(this.getAuditProject()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getCertChain() != null) {
                data.set("certChain", om.valueToTree(this.getCertChain()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getClusterSpec() != null) {
                data.set("clusterSpec", om.valueToTree(this.getClusterSpec()));
            }
            if (this.getConfigSourceEnabled() != null) {
                data.set("configSourceEnabled", om.valueToTree(this.getConfigSourceEnabled()));
            }
            if (this.getConfigSourceNacosId() != null) {
                data.set("configSourceNacosId", om.valueToTree(this.getConfigSourceNacosId()));
            }
            if (this.getControlPlaneLogEnabled() != null) {
                data.set("controlPlaneLogEnabled", om.valueToTree(this.getControlPlaneLogEnabled()));
            }
            if (this.getControlPlaneLogProject() != null) {
                data.set("controlPlaneLogProject", om.valueToTree(this.getControlPlaneLogProject()));
            }
            if (this.getCrAggregationEnabled() != null) {
                data.set("crAggregationEnabled", om.valueToTree(this.getCrAggregationEnabled()));
            }
            if (this.getCustomizedPrometheus() != null) {
                data.set("customizedPrometheus", om.valueToTree(this.getCustomizedPrometheus()));
            }
            if (this.getCustomizedZipkin() != null) {
                data.set("customizedZipkin", om.valueToTree(this.getCustomizedZipkin()));
            }
            if (this.getDnsProxyingEnabled() != null) {
                data.set("dnsProxyingEnabled", om.valueToTree(this.getDnsProxyingEnabled()));
            }
            if (this.getDubboFilterEnabled() != null) {
                data.set("dubboFilterEnabled", om.valueToTree(this.getDubboFilterEnabled()));
            }
            if (this.getEdition() != null) {
                data.set("edition", om.valueToTree(this.getEdition()));
            }
            if (this.getEnableAcmg() != null) {
                data.set("enableAcmg", om.valueToTree(this.getEnableAcmg()));
            }
            if (this.getEnableAmbient() != null) {
                data.set("enableAmbient", om.valueToTree(this.getEnableAmbient()));
            }
            if (this.getEnableAudit() != null) {
                data.set("enableAudit", om.valueToTree(this.getEnableAudit()));
            }
            if (this.getEnableCrHistory() != null) {
                data.set("enableCrHistory", om.valueToTree(this.getEnableCrHistory()));
            }
            if (this.getEnableSdsServer() != null) {
                data.set("enableSdsServer", om.valueToTree(this.getEnableSdsServer()));
            }
            if (this.getExcludeInboundPorts() != null) {
                data.set("excludeInboundPorts", om.valueToTree(this.getExcludeInboundPorts()));
            }
            if (this.getExcludeIpRanges() != null) {
                data.set("excludeIpRanges", om.valueToTree(this.getExcludeIpRanges()));
            }
            if (this.getExcludeOutboundPorts() != null) {
                data.set("excludeOutboundPorts", om.valueToTree(this.getExcludeOutboundPorts()));
            }
            if (this.getExistingCaCert() != null) {
                data.set("existingCaCert", om.valueToTree(this.getExistingCaCert()));
            }
            if (this.getExistingCaKey() != null) {
                data.set("existingCaKey", om.valueToTree(this.getExistingCaKey()));
            }
            if (this.getExistingCaType() != null) {
                data.set("existingCaType", om.valueToTree(this.getExistingCaType()));
            }
            if (this.getExistingRootCaCert() != null) {
                data.set("existingRootCaCert", om.valueToTree(this.getExistingRootCaCert()));
            }
            if (this.getExistingRootCaKey() != null) {
                data.set("existingRootCaKey", om.valueToTree(this.getExistingRootCaKey()));
            }
            if (this.getFilterGatewayClusterConfig() != null) {
                data.set("filterGatewayClusterConfig", om.valueToTree(this.getFilterGatewayClusterConfig()));
            }
            if (this.getGatewayApiEnabled() != null) {
                data.set("gatewayApiEnabled", om.valueToTree(this.getGatewayApiEnabled()));
            }
            if (this.getGuestCluster() != null) {
                data.set("guestCluster", om.valueToTree(this.getGuestCluster()));
            }
            if (this.getIncludeIpRanges() != null) {
                data.set("includeIpRanges", om.valueToTree(this.getIncludeIpRanges()));
            }
            if (this.getIstioVersion() != null) {
                data.set("istioVersion", om.valueToTree(this.getIstioVersion()));
            }
            if (this.getKialiEnabled() != null) {
                data.set("kialiEnabled", om.valueToTree(this.getKialiEnabled()));
            }
            if (this.getLocalityLbConf() != null) {
                data.set("localityLbConf", om.valueToTree(this.getLocalityLbConf()));
            }
            if (this.getLocalityLoadBalancing() != null) {
                data.set("localityLoadBalancing", om.valueToTree(this.getLocalityLoadBalancing()));
            }
            if (this.getMseEnabled() != null) {
                data.set("mseEnabled", om.valueToTree(this.getMseEnabled()));
            }
            if (this.getMultiBufferEnabled() != null) {
                data.set("multiBufferEnabled", om.valueToTree(this.getMultiBufferEnabled()));
            }
            if (this.getMultiBufferPollDelay() != null) {
                data.set("multiBufferPollDelay", om.valueToTree(this.getMultiBufferPollDelay()));
            }
            if (this.getMysqlFilterEnabled() != null) {
                data.set("mysqlFilterEnabled", om.valueToTree(this.getMysqlFilterEnabled()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getOpa() != null) {
                data.set("opa", om.valueToTree(this.getOpa()));
            }
            if (this.getOpaEnabled() != null) {
                data.set("opaEnabled", om.valueToTree(this.getOpaEnabled()));
            }
            if (this.getOutboundTrafficPolicy() != null) {
                data.set("outboundTrafficPolicy", om.valueToTree(this.getOutboundTrafficPolicy()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPilotLoadBalancerSpec() != null) {
                data.set("pilotLoadBalancerSpec", om.valueToTree(this.getPilotLoadBalancerSpec()));
            }
            if (this.getPilotPublicEip() != null) {
                data.set("pilotPublicEip", om.valueToTree(this.getPilotPublicEip()));
            }
            if (this.getPlaygroundScene() != null) {
                data.set("playgroundScene", om.valueToTree(this.getPlaygroundScene()));
            }
            if (this.getPrometheusUrl() != null) {
                data.set("prometheusUrl", om.valueToTree(this.getPrometheusUrl()));
            }
            if (this.getProxy() != null) {
                data.set("proxy", om.valueToTree(this.getProxy()));
            }
            if (this.getTelemetry() != null) {
                data.set("telemetry", om.valueToTree(this.getTelemetry()));
            }
            if (this.getTraceSampling() != null) {
                data.set("traceSampling", om.valueToTree(this.getTraceSampling()));
            }
            if (this.getTracing() != null) {
                data.set("tracing", om.valueToTree(this.getTracing()));
            }
            if (this.getUseExistingCa() != null) {
                data.set("useExistingCa", om.valueToTree(this.getUseExistingCa()));
            }
            if (this.getWebAssemblyFilterEnabled() != null) {
                data.set("webAssemblyFilterEnabled", om.valueToTree(this.getWebAssemblyFilterEnabled()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-asm.ServiceMeshProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ServiceMeshProps.Jsii$Proxy that = (ServiceMeshProps.Jsii$Proxy) o;

            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitches.equals(that.vSwitches)) return false;
            if (this.accessLogEnabled != null ? !this.accessLogEnabled.equals(that.accessLogEnabled) : that.accessLogEnabled != null) return false;
            if (this.accessLogFile != null ? !this.accessLogFile.equals(that.accessLogFile) : that.accessLogFile != null) return false;
            if (this.accessLogFormat != null ? !this.accessLogFormat.equals(that.accessLogFormat) : that.accessLogFormat != null) return false;
            if (this.accessLogProject != null ? !this.accessLogProject.equals(that.accessLogProject) : that.accessLogProject != null) return false;
            if (this.accessLogServiceEnabled != null ? !this.accessLogServiceEnabled.equals(that.accessLogServiceEnabled) : that.accessLogServiceEnabled != null) return false;
            if (this.accessLogServiceHost != null ? !this.accessLogServiceHost.equals(that.accessLogServiceHost) : that.accessLogServiceHost != null) return false;
            if (this.accessLogServicePort != null ? !this.accessLogServicePort.equals(that.accessLogServicePort) : that.accessLogServicePort != null) return false;
            if (this.apiServerLoadBalancerSpec != null ? !this.apiServerLoadBalancerSpec.equals(that.apiServerLoadBalancerSpec) : that.apiServerLoadBalancerSpec != null) return false;
            if (this.apiServerPublicEip != null ? !this.apiServerPublicEip.equals(that.apiServerPublicEip) : that.apiServerPublicEip != null) return false;
            if (this.auditProject != null ? !this.auditProject.equals(that.auditProject) : that.auditProject != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.certChain != null ? !this.certChain.equals(that.certChain) : that.certChain != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.clusterSpec != null ? !this.clusterSpec.equals(that.clusterSpec) : that.clusterSpec != null) return false;
            if (this.configSourceEnabled != null ? !this.configSourceEnabled.equals(that.configSourceEnabled) : that.configSourceEnabled != null) return false;
            if (this.configSourceNacosId != null ? !this.configSourceNacosId.equals(that.configSourceNacosId) : that.configSourceNacosId != null) return false;
            if (this.controlPlaneLogEnabled != null ? !this.controlPlaneLogEnabled.equals(that.controlPlaneLogEnabled) : that.controlPlaneLogEnabled != null) return false;
            if (this.controlPlaneLogProject != null ? !this.controlPlaneLogProject.equals(that.controlPlaneLogProject) : that.controlPlaneLogProject != null) return false;
            if (this.crAggregationEnabled != null ? !this.crAggregationEnabled.equals(that.crAggregationEnabled) : that.crAggregationEnabled != null) return false;
            if (this.customizedPrometheus != null ? !this.customizedPrometheus.equals(that.customizedPrometheus) : that.customizedPrometheus != null) return false;
            if (this.customizedZipkin != null ? !this.customizedZipkin.equals(that.customizedZipkin) : that.customizedZipkin != null) return false;
            if (this.dnsProxyingEnabled != null ? !this.dnsProxyingEnabled.equals(that.dnsProxyingEnabled) : that.dnsProxyingEnabled != null) return false;
            if (this.dubboFilterEnabled != null ? !this.dubboFilterEnabled.equals(that.dubboFilterEnabled) : that.dubboFilterEnabled != null) return false;
            if (this.edition != null ? !this.edition.equals(that.edition) : that.edition != null) return false;
            if (this.enableAcmg != null ? !this.enableAcmg.equals(that.enableAcmg) : that.enableAcmg != null) return false;
            if (this.enableAmbient != null ? !this.enableAmbient.equals(that.enableAmbient) : that.enableAmbient != null) return false;
            if (this.enableAudit != null ? !this.enableAudit.equals(that.enableAudit) : that.enableAudit != null) return false;
            if (this.enableCrHistory != null ? !this.enableCrHistory.equals(that.enableCrHistory) : that.enableCrHistory != null) return false;
            if (this.enableSdsServer != null ? !this.enableSdsServer.equals(that.enableSdsServer) : that.enableSdsServer != null) return false;
            if (this.excludeInboundPorts != null ? !this.excludeInboundPorts.equals(that.excludeInboundPorts) : that.excludeInboundPorts != null) return false;
            if (this.excludeIpRanges != null ? !this.excludeIpRanges.equals(that.excludeIpRanges) : that.excludeIpRanges != null) return false;
            if (this.excludeOutboundPorts != null ? !this.excludeOutboundPorts.equals(that.excludeOutboundPorts) : that.excludeOutboundPorts != null) return false;
            if (this.existingCaCert != null ? !this.existingCaCert.equals(that.existingCaCert) : that.existingCaCert != null) return false;
            if (this.existingCaKey != null ? !this.existingCaKey.equals(that.existingCaKey) : that.existingCaKey != null) return false;
            if (this.existingCaType != null ? !this.existingCaType.equals(that.existingCaType) : that.existingCaType != null) return false;
            if (this.existingRootCaCert != null ? !this.existingRootCaCert.equals(that.existingRootCaCert) : that.existingRootCaCert != null) return false;
            if (this.existingRootCaKey != null ? !this.existingRootCaKey.equals(that.existingRootCaKey) : that.existingRootCaKey != null) return false;
            if (this.filterGatewayClusterConfig != null ? !this.filterGatewayClusterConfig.equals(that.filterGatewayClusterConfig) : that.filterGatewayClusterConfig != null) return false;
            if (this.gatewayApiEnabled != null ? !this.gatewayApiEnabled.equals(that.gatewayApiEnabled) : that.gatewayApiEnabled != null) return false;
            if (this.guestCluster != null ? !this.guestCluster.equals(that.guestCluster) : that.guestCluster != null) return false;
            if (this.includeIpRanges != null ? !this.includeIpRanges.equals(that.includeIpRanges) : that.includeIpRanges != null) return false;
            if (this.istioVersion != null ? !this.istioVersion.equals(that.istioVersion) : that.istioVersion != null) return false;
            if (this.kialiEnabled != null ? !this.kialiEnabled.equals(that.kialiEnabled) : that.kialiEnabled != null) return false;
            if (this.localityLbConf != null ? !this.localityLbConf.equals(that.localityLbConf) : that.localityLbConf != null) return false;
            if (this.localityLoadBalancing != null ? !this.localityLoadBalancing.equals(that.localityLoadBalancing) : that.localityLoadBalancing != null) return false;
            if (this.mseEnabled != null ? !this.mseEnabled.equals(that.mseEnabled) : that.mseEnabled != null) return false;
            if (this.multiBufferEnabled != null ? !this.multiBufferEnabled.equals(that.multiBufferEnabled) : that.multiBufferEnabled != null) return false;
            if (this.multiBufferPollDelay != null ? !this.multiBufferPollDelay.equals(that.multiBufferPollDelay) : that.multiBufferPollDelay != null) return false;
            if (this.mysqlFilterEnabled != null ? !this.mysqlFilterEnabled.equals(that.mysqlFilterEnabled) : that.mysqlFilterEnabled != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.opa != null ? !this.opa.equals(that.opa) : that.opa != null) return false;
            if (this.opaEnabled != null ? !this.opaEnabled.equals(that.opaEnabled) : that.opaEnabled != null) return false;
            if (this.outboundTrafficPolicy != null ? !this.outboundTrafficPolicy.equals(that.outboundTrafficPolicy) : that.outboundTrafficPolicy != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.pilotLoadBalancerSpec != null ? !this.pilotLoadBalancerSpec.equals(that.pilotLoadBalancerSpec) : that.pilotLoadBalancerSpec != null) return false;
            if (this.pilotPublicEip != null ? !this.pilotPublicEip.equals(that.pilotPublicEip) : that.pilotPublicEip != null) return false;
            if (this.playgroundScene != null ? !this.playgroundScene.equals(that.playgroundScene) : that.playgroundScene != null) return false;
            if (this.prometheusUrl != null ? !this.prometheusUrl.equals(that.prometheusUrl) : that.prometheusUrl != null) return false;
            if (this.proxy != null ? !this.proxy.equals(that.proxy) : that.proxy != null) return false;
            if (this.telemetry != null ? !this.telemetry.equals(that.telemetry) : that.telemetry != null) return false;
            if (this.traceSampling != null ? !this.traceSampling.equals(that.traceSampling) : that.traceSampling != null) return false;
            if (this.tracing != null ? !this.tracing.equals(that.tracing) : that.tracing != null) return false;
            if (this.useExistingCa != null ? !this.useExistingCa.equals(that.useExistingCa) : that.useExistingCa != null) return false;
            return this.webAssemblyFilterEnabled != null ? this.webAssemblyFilterEnabled.equals(that.webAssemblyFilterEnabled) : that.webAssemblyFilterEnabled == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vpcId.hashCode();
            result = 31 * result + (this.vSwitches.hashCode());
            result = 31 * result + (this.accessLogEnabled != null ? this.accessLogEnabled.hashCode() : 0);
            result = 31 * result + (this.accessLogFile != null ? this.accessLogFile.hashCode() : 0);
            result = 31 * result + (this.accessLogFormat != null ? this.accessLogFormat.hashCode() : 0);
            result = 31 * result + (this.accessLogProject != null ? this.accessLogProject.hashCode() : 0);
            result = 31 * result + (this.accessLogServiceEnabled != null ? this.accessLogServiceEnabled.hashCode() : 0);
            result = 31 * result + (this.accessLogServiceHost != null ? this.accessLogServiceHost.hashCode() : 0);
            result = 31 * result + (this.accessLogServicePort != null ? this.accessLogServicePort.hashCode() : 0);
            result = 31 * result + (this.apiServerLoadBalancerSpec != null ? this.apiServerLoadBalancerSpec.hashCode() : 0);
            result = 31 * result + (this.apiServerPublicEip != null ? this.apiServerPublicEip.hashCode() : 0);
            result = 31 * result + (this.auditProject != null ? this.auditProject.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.certChain != null ? this.certChain.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.clusterSpec != null ? this.clusterSpec.hashCode() : 0);
            result = 31 * result + (this.configSourceEnabled != null ? this.configSourceEnabled.hashCode() : 0);
            result = 31 * result + (this.configSourceNacosId != null ? this.configSourceNacosId.hashCode() : 0);
            result = 31 * result + (this.controlPlaneLogEnabled != null ? this.controlPlaneLogEnabled.hashCode() : 0);
            result = 31 * result + (this.controlPlaneLogProject != null ? this.controlPlaneLogProject.hashCode() : 0);
            result = 31 * result + (this.crAggregationEnabled != null ? this.crAggregationEnabled.hashCode() : 0);
            result = 31 * result + (this.customizedPrometheus != null ? this.customizedPrometheus.hashCode() : 0);
            result = 31 * result + (this.customizedZipkin != null ? this.customizedZipkin.hashCode() : 0);
            result = 31 * result + (this.dnsProxyingEnabled != null ? this.dnsProxyingEnabled.hashCode() : 0);
            result = 31 * result + (this.dubboFilterEnabled != null ? this.dubboFilterEnabled.hashCode() : 0);
            result = 31 * result + (this.edition != null ? this.edition.hashCode() : 0);
            result = 31 * result + (this.enableAcmg != null ? this.enableAcmg.hashCode() : 0);
            result = 31 * result + (this.enableAmbient != null ? this.enableAmbient.hashCode() : 0);
            result = 31 * result + (this.enableAudit != null ? this.enableAudit.hashCode() : 0);
            result = 31 * result + (this.enableCrHistory != null ? this.enableCrHistory.hashCode() : 0);
            result = 31 * result + (this.enableSdsServer != null ? this.enableSdsServer.hashCode() : 0);
            result = 31 * result + (this.excludeInboundPorts != null ? this.excludeInboundPorts.hashCode() : 0);
            result = 31 * result + (this.excludeIpRanges != null ? this.excludeIpRanges.hashCode() : 0);
            result = 31 * result + (this.excludeOutboundPorts != null ? this.excludeOutboundPorts.hashCode() : 0);
            result = 31 * result + (this.existingCaCert != null ? this.existingCaCert.hashCode() : 0);
            result = 31 * result + (this.existingCaKey != null ? this.existingCaKey.hashCode() : 0);
            result = 31 * result + (this.existingCaType != null ? this.existingCaType.hashCode() : 0);
            result = 31 * result + (this.existingRootCaCert != null ? this.existingRootCaCert.hashCode() : 0);
            result = 31 * result + (this.existingRootCaKey != null ? this.existingRootCaKey.hashCode() : 0);
            result = 31 * result + (this.filterGatewayClusterConfig != null ? this.filterGatewayClusterConfig.hashCode() : 0);
            result = 31 * result + (this.gatewayApiEnabled != null ? this.gatewayApiEnabled.hashCode() : 0);
            result = 31 * result + (this.guestCluster != null ? this.guestCluster.hashCode() : 0);
            result = 31 * result + (this.includeIpRanges != null ? this.includeIpRanges.hashCode() : 0);
            result = 31 * result + (this.istioVersion != null ? this.istioVersion.hashCode() : 0);
            result = 31 * result + (this.kialiEnabled != null ? this.kialiEnabled.hashCode() : 0);
            result = 31 * result + (this.localityLbConf != null ? this.localityLbConf.hashCode() : 0);
            result = 31 * result + (this.localityLoadBalancing != null ? this.localityLoadBalancing.hashCode() : 0);
            result = 31 * result + (this.mseEnabled != null ? this.mseEnabled.hashCode() : 0);
            result = 31 * result + (this.multiBufferEnabled != null ? this.multiBufferEnabled.hashCode() : 0);
            result = 31 * result + (this.multiBufferPollDelay != null ? this.multiBufferPollDelay.hashCode() : 0);
            result = 31 * result + (this.mysqlFilterEnabled != null ? this.mysqlFilterEnabled.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.opa != null ? this.opa.hashCode() : 0);
            result = 31 * result + (this.opaEnabled != null ? this.opaEnabled.hashCode() : 0);
            result = 31 * result + (this.outboundTrafficPolicy != null ? this.outboundTrafficPolicy.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.pilotLoadBalancerSpec != null ? this.pilotLoadBalancerSpec.hashCode() : 0);
            result = 31 * result + (this.pilotPublicEip != null ? this.pilotPublicEip.hashCode() : 0);
            result = 31 * result + (this.playgroundScene != null ? this.playgroundScene.hashCode() : 0);
            result = 31 * result + (this.prometheusUrl != null ? this.prometheusUrl.hashCode() : 0);
            result = 31 * result + (this.proxy != null ? this.proxy.hashCode() : 0);
            result = 31 * result + (this.telemetry != null ? this.telemetry.hashCode() : 0);
            result = 31 * result + (this.traceSampling != null ? this.traceSampling.hashCode() : 0);
            result = 31 * result + (this.tracing != null ? this.tracing.hashCode() : 0);
            result = 31 * result + (this.useExistingCa != null ? this.useExistingCa.hashCode() : 0);
            result = 31 * result + (this.webAssemblyFilterEnabled != null ? this.webAssemblyFilterEnabled.hashCode() : 0);
            return result;
        }
    }
}
