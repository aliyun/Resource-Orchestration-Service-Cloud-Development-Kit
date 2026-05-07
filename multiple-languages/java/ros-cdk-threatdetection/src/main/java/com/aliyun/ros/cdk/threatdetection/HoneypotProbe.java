package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::HoneypotProbe</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.630Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.HoneypotProbe")
public class HoneypotProbe extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.IHoneypotProbe {

    protected HoneypotProbe(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected HoneypotProbe(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public HoneypotProbe(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotProbeProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public HoneypotProbe(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotProbeProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArp() {
        return software.amazon.jsii.Kernel.get(this, "attrArp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ControlNodeId: The ID of the management node.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrControlNodeId() {
        return software.amazon.jsii.Kernel.get(this, "attrControlNodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DisplayName: The name of the probe.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HoneypotBindList: The configuration of the probe.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotBindList() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotBindList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HoneypotProbeId: The ID of the probe.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotProbeId() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotProbeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Ping: Specifies whether to enable ping scan.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPing() {
        return software.amazon.jsii.Kernel.get(this, "attrPing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProbeType: The type of the probe.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProbeType() {
        return software.amazon.jsii.Kernel.get(this, "attrProbeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProbeVersion: The version of the probe.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProbeVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrProbeVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceIpList: Listen to the IP address list.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceIpList() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Uuid: The UUID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: The ID of the VPC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotProbeProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.HoneypotProbeProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.HoneypotProbe}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.HoneypotProbe> {
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
        private final com.aliyun.ros.cdk.threatdetection.HoneypotProbeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.HoneypotProbeProps.Builder();
        }

        /**
         * Property controlNodeId: The ID of the management node.
         * <p>
         * <blockquote>
         * <p>
         * You can call the <a href="~~ListHoneypotNode~~">ListHoneypotNode</a> operation to query the IDs of management nodes.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param controlNodeId Property controlNodeId: The ID of the management node. This parameter is required.
         */
        public Builder controlNodeId(final java.lang.String controlNodeId) {
            this.props.controlNodeId(controlNodeId);
            return this;
        }
        /**
         * Property controlNodeId: The ID of the management node.
         * <p>
         * <blockquote>
         * <p>
         * You can call the <a href="~~ListHoneypotNode~~">ListHoneypotNode</a> operation to query the IDs of management nodes.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param controlNodeId Property controlNodeId: The ID of the management node. This parameter is required.
         */
        public Builder controlNodeId(final com.aliyun.ros.cdk.core.IResolvable controlNodeId) {
            this.props.controlNodeId(controlNodeId);
            return this;
        }

        /**
         * Property displayName: The name of the probe.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: The name of the probe. This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * Property displayName: The name of the probe.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: The name of the probe. This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * Property probeType: The type of the probe.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>host_probe</strong>: host probe</li>
         * <li><strong>vpc_black_hole_probe</strong>: virtual private cloud (VPC) probe.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param probeType Property probeType: The type of the probe. This parameter is required.
         */
        public Builder probeType(final java.lang.String probeType) {
            this.props.probeType(probeType);
            return this;
        }
        /**
         * Property probeType: The type of the probe.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>host_probe</strong>: host probe</li>
         * <li><strong>vpc_black_hole_probe</strong>: virtual private cloud (VPC) probe.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param probeType Property probeType: The type of the probe. This parameter is required.
         */
        public Builder probeType(final com.aliyun.ros.cdk.core.IResolvable probeType) {
            this.props.probeType(probeType);
            return this;
        }

        /**
         * Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong>: yes</li>
         * <li><strong>false</strong>: no.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param arp Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing. This parameter is required.
         */
        public Builder arp(final java.lang.Boolean arp) {
            this.props.arp(arp);
            return this;
        }
        /**
         * Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong>: yes</li>
         * <li><strong>false</strong>: no.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param arp Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing. This parameter is required.
         */
        public Builder arp(final com.aliyun.ros.cdk.core.IResolvable arp) {
            this.props.arp(arp);
            return this;
        }

        /**
         * Property businessGroupId: Business grouping.
         * <p>
         * @return {@code this}
         * @param businessGroupId Property businessGroupId: Business grouping. This parameter is required.
         */
        public Builder businessGroupId(final java.lang.String businessGroupId) {
            this.props.businessGroupId(businessGroupId);
            return this;
        }
        /**
         * Property businessGroupId: Business grouping.
         * <p>
         * @return {@code this}
         * @param businessGroupId Property businessGroupId: Business grouping. This parameter is required.
         */
        public Builder businessGroupId(final com.aliyun.ros.cdk.core.IResolvable businessGroupId) {
            this.props.businessGroupId(businessGroupId);
            return this;
        }

        /**
         * Property honeypotBindList: The configuration of the probe.
         * <p>
         * @return {@code this}
         * @param honeypotBindList Property honeypotBindList: The configuration of the probe. This parameter is required.
         */
        public Builder honeypotBindList(final com.aliyun.ros.cdk.core.IResolvable honeypotBindList) {
            this.props.honeypotBindList(honeypotBindList);
            return this;
        }
        /**
         * Property honeypotBindList: The configuration of the probe.
         * <p>
         * @return {@code this}
         * @param honeypotBindList Property honeypotBindList: The configuration of the probe. This parameter is required.
         */
        public Builder honeypotBindList(final java.util.List<? extends java.lang.Object> honeypotBindList) {
            this.props.honeypotBindList(honeypotBindList);
            return this;
        }

        /**
         * Property ping: Specifies whether to enable ping scan.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong>: yes</li>
         * <li><strong>false</strong>: no.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ping Property ping: Specifies whether to enable ping scan. This parameter is required.
         */
        public Builder ping(final java.lang.Boolean ping) {
            this.props.ping(ping);
            return this;
        }
        /**
         * Property ping: Specifies whether to enable ping scan.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong>: yes</li>
         * <li><strong>false</strong>: no.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ping Property ping: Specifies whether to enable ping scan. This parameter is required.
         */
        public Builder ping(final com.aliyun.ros.cdk.core.IResolvable ping) {
            this.props.ping(ping);
            return this;
        }

        /**
         * Property probeVersion: The version of the probe.
         * <p>
         * @return {@code this}
         * @param probeVersion Property probeVersion: The version of the probe. This parameter is required.
         */
        public Builder probeVersion(final java.lang.String probeVersion) {
            this.props.probeVersion(probeVersion);
            return this;
        }
        /**
         * Property probeVersion: The version of the probe.
         * <p>
         * @return {@code this}
         * @param probeVersion Property probeVersion: The version of the probe. This parameter is required.
         */
        public Builder probeVersion(final com.aliyun.ros.cdk.core.IResolvable probeVersion) {
            this.props.probeVersion(probeVersion);
            return this;
        }

        /**
         * Property proxyIp: The IP address of the proxy.
         * <p>
         * @return {@code this}
         * @param proxyIp Property proxyIp: The IP address of the proxy. This parameter is required.
         */
        public Builder proxyIp(final java.lang.String proxyIp) {
            this.props.proxyIp(proxyIp);
            return this;
        }
        /**
         * Property proxyIp: The IP address of the proxy.
         * <p>
         * @return {@code this}
         * @param proxyIp Property proxyIp: The IP address of the proxy. This parameter is required.
         */
        public Builder proxyIp(final com.aliyun.ros.cdk.core.IResolvable proxyIp) {
            this.props.proxyIp(proxyIp);
            return this;
        }

        /**
         * Property serviceIpList: Listen to the IP address list.
         * <p>
         * @return {@code this}
         * @param serviceIpList Property serviceIpList: Listen to the IP address list. This parameter is required.
         */
        public Builder serviceIpList(final com.aliyun.ros.cdk.core.IResolvable serviceIpList) {
            this.props.serviceIpList(serviceIpList);
            return this;
        }
        /**
         * Property serviceIpList: Listen to the IP address list.
         * <p>
         * @return {@code this}
         * @param serviceIpList Property serviceIpList: Listen to the IP address list. This parameter is required.
         */
        public Builder serviceIpList(final java.util.List<? extends java.lang.Object> serviceIpList) {
            this.props.serviceIpList(serviceIpList);
            return this;
        }

        /**
         * Property uuid: The UUID of the instance.
         * <p>
         * <blockquote>
         * <p>
         * If <strong>ProbeType</strong> is set to <strong>host_probe</strong>, this parameter is required.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param uuid Property uuid: The UUID of the instance. This parameter is required.
         */
        public Builder uuid(final java.lang.String uuid) {
            this.props.uuid(uuid);
            return this;
        }
        /**
         * Property uuid: The UUID of the instance.
         * <p>
         * <blockquote>
         * <p>
         * If <strong>ProbeType</strong> is set to <strong>host_probe</strong>, this parameter is required.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param uuid Property uuid: The UUID of the instance. This parameter is required.
         */
        public Builder uuid(final com.aliyun.ros.cdk.core.IResolvable uuid) {
            this.props.uuid(uuid);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * <blockquote>
         * <p>
         * <strong>ProbeType</strong> is <strong>vpc_Black _hole_probe</strong>. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
         * <p>
         * </blockquote>
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
         * <blockquote>
         * <p>
         * <strong>ProbeType</strong> is <strong>vpc_Black _hole_probe</strong>. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.HoneypotProbe}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.HoneypotProbe build() {
            return new com.aliyun.ros.cdk.threatdetection.HoneypotProbe(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
