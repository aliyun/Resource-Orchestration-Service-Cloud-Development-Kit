package com.aliyun.ros.cdk.asm;

/**
 * Properties for defining a `ALIYUN::ASM::ServiceMesh`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:14.465Z")
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
     * Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomizedZipkin() {
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
     * Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
     * <p>
     * Valid values: true and false. Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLocalityLoadBalancing() {
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
     * Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOutboundTrafficPolicy() {
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
        java.lang.Object apiServerPublicEip;
        java.lang.Object auditProject;
        java.lang.Object customizedZipkin;
        java.lang.Object enableAudit;
        java.lang.Object includeIpRanges;
        java.lang.Object istioVersion;
        java.lang.Object localityLoadBalancing;
        java.lang.Object name;
        java.lang.Object opa;
        java.lang.Object outboundTrafficPolicy;
        java.lang.Object pilotPublicEip;
        java.lang.Object proxy;
        java.lang.Object telemetry;
        java.lang.Object traceSampling;
        java.lang.Object tracing;

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
        private final java.lang.Object apiServerPublicEip;
        private final java.lang.Object auditProject;
        private final java.lang.Object customizedZipkin;
        private final java.lang.Object enableAudit;
        private final java.lang.Object includeIpRanges;
        private final java.lang.Object istioVersion;
        private final java.lang.Object localityLoadBalancing;
        private final java.lang.Object name;
        private final java.lang.Object opa;
        private final java.lang.Object outboundTrafficPolicy;
        private final java.lang.Object pilotPublicEip;
        private final java.lang.Object proxy;
        private final java.lang.Object telemetry;
        private final java.lang.Object traceSampling;
        private final java.lang.Object tracing;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitches = software.amazon.jsii.Kernel.get(this, "vSwitches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.apiServerPublicEip = software.amazon.jsii.Kernel.get(this, "apiServerPublicEip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.auditProject = software.amazon.jsii.Kernel.get(this, "auditProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customizedZipkin = software.amazon.jsii.Kernel.get(this, "customizedZipkin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAudit = software.amazon.jsii.Kernel.get(this, "enableAudit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.includeIpRanges = software.amazon.jsii.Kernel.get(this, "includeIpRanges", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.istioVersion = software.amazon.jsii.Kernel.get(this, "istioVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localityLoadBalancing = software.amazon.jsii.Kernel.get(this, "localityLoadBalancing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.opa = software.amazon.jsii.Kernel.get(this, "opa", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.outboundTrafficPolicy = software.amazon.jsii.Kernel.get(this, "outboundTrafficPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pilotPublicEip = software.amazon.jsii.Kernel.get(this, "pilotPublicEip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxy = software.amazon.jsii.Kernel.get(this, "proxy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.telemetry = software.amazon.jsii.Kernel.get(this, "telemetry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.traceSampling = software.amazon.jsii.Kernel.get(this, "traceSampling", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tracing = software.amazon.jsii.Kernel.get(this, "tracing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitches = java.util.Objects.requireNonNull(builder.vSwitches, "vSwitches is required");
            this.apiServerPublicEip = builder.apiServerPublicEip;
            this.auditProject = builder.auditProject;
            this.customizedZipkin = builder.customizedZipkin;
            this.enableAudit = builder.enableAudit;
            this.includeIpRanges = builder.includeIpRanges;
            this.istioVersion = builder.istioVersion;
            this.localityLoadBalancing = builder.localityLoadBalancing;
            this.name = builder.name;
            this.opa = builder.opa;
            this.outboundTrafficPolicy = builder.outboundTrafficPolicy;
            this.pilotPublicEip = builder.pilotPublicEip;
            this.proxy = builder.proxy;
            this.telemetry = builder.telemetry;
            this.traceSampling = builder.traceSampling;
            this.tracing = builder.tracing;
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
        public final java.lang.Object getApiServerPublicEip() {
            return this.apiServerPublicEip;
        }

        @Override
        public final java.lang.Object getAuditProject() {
            return this.auditProject;
        }

        @Override
        public final java.lang.Object getCustomizedZipkin() {
            return this.customizedZipkin;
        }

        @Override
        public final java.lang.Object getEnableAudit() {
            return this.enableAudit;
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
        public final java.lang.Object getLocalityLoadBalancing() {
            return this.localityLoadBalancing;
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
        public final java.lang.Object getOutboundTrafficPolicy() {
            return this.outboundTrafficPolicy;
        }

        @Override
        public final java.lang.Object getPilotPublicEip() {
            return this.pilotPublicEip;
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitches", om.valueToTree(this.getVSwitches()));
            if (this.getApiServerPublicEip() != null) {
                data.set("apiServerPublicEip", om.valueToTree(this.getApiServerPublicEip()));
            }
            if (this.getAuditProject() != null) {
                data.set("auditProject", om.valueToTree(this.getAuditProject()));
            }
            if (this.getCustomizedZipkin() != null) {
                data.set("customizedZipkin", om.valueToTree(this.getCustomizedZipkin()));
            }
            if (this.getEnableAudit() != null) {
                data.set("enableAudit", om.valueToTree(this.getEnableAudit()));
            }
            if (this.getIncludeIpRanges() != null) {
                data.set("includeIpRanges", om.valueToTree(this.getIncludeIpRanges()));
            }
            if (this.getIstioVersion() != null) {
                data.set("istioVersion", om.valueToTree(this.getIstioVersion()));
            }
            if (this.getLocalityLoadBalancing() != null) {
                data.set("localityLoadBalancing", om.valueToTree(this.getLocalityLoadBalancing()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getOpa() != null) {
                data.set("opa", om.valueToTree(this.getOpa()));
            }
            if (this.getOutboundTrafficPolicy() != null) {
                data.set("outboundTrafficPolicy", om.valueToTree(this.getOutboundTrafficPolicy()));
            }
            if (this.getPilotPublicEip() != null) {
                data.set("pilotPublicEip", om.valueToTree(this.getPilotPublicEip()));
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
            if (this.apiServerPublicEip != null ? !this.apiServerPublicEip.equals(that.apiServerPublicEip) : that.apiServerPublicEip != null) return false;
            if (this.auditProject != null ? !this.auditProject.equals(that.auditProject) : that.auditProject != null) return false;
            if (this.customizedZipkin != null ? !this.customizedZipkin.equals(that.customizedZipkin) : that.customizedZipkin != null) return false;
            if (this.enableAudit != null ? !this.enableAudit.equals(that.enableAudit) : that.enableAudit != null) return false;
            if (this.includeIpRanges != null ? !this.includeIpRanges.equals(that.includeIpRanges) : that.includeIpRanges != null) return false;
            if (this.istioVersion != null ? !this.istioVersion.equals(that.istioVersion) : that.istioVersion != null) return false;
            if (this.localityLoadBalancing != null ? !this.localityLoadBalancing.equals(that.localityLoadBalancing) : that.localityLoadBalancing != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.opa != null ? !this.opa.equals(that.opa) : that.opa != null) return false;
            if (this.outboundTrafficPolicy != null ? !this.outboundTrafficPolicy.equals(that.outboundTrafficPolicy) : that.outboundTrafficPolicy != null) return false;
            if (this.pilotPublicEip != null ? !this.pilotPublicEip.equals(that.pilotPublicEip) : that.pilotPublicEip != null) return false;
            if (this.proxy != null ? !this.proxy.equals(that.proxy) : that.proxy != null) return false;
            if (this.telemetry != null ? !this.telemetry.equals(that.telemetry) : that.telemetry != null) return false;
            if (this.traceSampling != null ? !this.traceSampling.equals(that.traceSampling) : that.traceSampling != null) return false;
            return this.tracing != null ? this.tracing.equals(that.tracing) : that.tracing == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vpcId.hashCode();
            result = 31 * result + (this.vSwitches.hashCode());
            result = 31 * result + (this.apiServerPublicEip != null ? this.apiServerPublicEip.hashCode() : 0);
            result = 31 * result + (this.auditProject != null ? this.auditProject.hashCode() : 0);
            result = 31 * result + (this.customizedZipkin != null ? this.customizedZipkin.hashCode() : 0);
            result = 31 * result + (this.enableAudit != null ? this.enableAudit.hashCode() : 0);
            result = 31 * result + (this.includeIpRanges != null ? this.includeIpRanges.hashCode() : 0);
            result = 31 * result + (this.istioVersion != null ? this.istioVersion.hashCode() : 0);
            result = 31 * result + (this.localityLoadBalancing != null ? this.localityLoadBalancing.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.opa != null ? this.opa.hashCode() : 0);
            result = 31 * result + (this.outboundTrafficPolicy != null ? this.outboundTrafficPolicy.hashCode() : 0);
            result = 31 * result + (this.pilotPublicEip != null ? this.pilotPublicEip.hashCode() : 0);
            result = 31 * result + (this.proxy != null ? this.proxy.hashCode() : 0);
            result = 31 * result + (this.telemetry != null ? this.telemetry.hashCode() : 0);
            result = 31 * result + (this.traceSampling != null ? this.traceSampling.hashCode() : 0);
            result = 31 * result + (this.tracing != null ? this.tracing.hashCode() : 0);
            return result;
        }
    }
}
