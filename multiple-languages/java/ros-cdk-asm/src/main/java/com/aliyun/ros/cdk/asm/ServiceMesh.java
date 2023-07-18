package com.aliyun.ros.cdk.asm;

/**
 * A ROS resource type:  <code>ALIYUN::ASM::ServiceMesh</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:27:59.892Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.asm.$Module.class, fqn = "@alicloud/ros-cdk-asm.ServiceMesh")
public class ServiceMesh extends com.aliyun.ros.cdk.core.Resource {

    protected ServiceMesh(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ServiceMesh(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ASM::ServiceMesh</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
     * Create a new <code>ALIYUN::ASM::ServiceMesh</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceMeshId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceMeshId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
