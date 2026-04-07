package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::HoneypotNode</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.540Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.HoneypotNode")
public class HoneypotNode extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.IHoneypotNode {

    protected HoneypotNode(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected HoneypotNode(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public HoneypotNode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotNodeProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public HoneypotNode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotNodeProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AllowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowHoneypotAccessInternet() {
        return software.amazon.jsii.Kernel.get(this, "attrAllowHoneypotAccessInternet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AvailableProbeNum: The number of available probes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAvailableProbeNum() {
        return software.amazon.jsii.Kernel.get(this, "attrAvailableProbeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The time when the management node was created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NodeId: Honeypot management node id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeId() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NodeName: The name of the management node.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeName() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupProbeIpList() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupProbeIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotNodeProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.HoneypotNodeProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.HoneypotNode}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.HoneypotNode> {
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
        private final com.aliyun.ros.cdk.threatdetection.HoneypotNodeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.HoneypotNodeProps.Builder();
        }

        /**
         * Property nodeName: The name of the management node.
         * <p>
         * @return {@code this}
         * @param nodeName Property nodeName: The name of the management node. This parameter is required.
         */
        public Builder nodeName(final java.lang.String nodeName) {
            this.props.nodeName(nodeName);
            return this;
        }
        /**
         * Property nodeName: The name of the management node.
         * <p>
         * @return {@code this}
         * @param nodeName Property nodeName: The name of the management node. This parameter is required.
         */
        public Builder nodeName(final com.aliyun.ros.cdk.core.IResolvable nodeName) {
            this.props.nodeName(nodeName);
            return this;
        }

        /**
         * Property allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong>: allows honeypots to access the Internet.</li>
         * <li><strong>false</strong>: does not allow honeypots to access the Internet.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param allowHoneypotAccessInternet Property allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet. This parameter is required.
         */
        public Builder allowHoneypotAccessInternet(final java.lang.Boolean allowHoneypotAccessInternet) {
            this.props.allowHoneypotAccessInternet(allowHoneypotAccessInternet);
            return this;
        }
        /**
         * Property allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong>: allows honeypots to access the Internet.</li>
         * <li><strong>false</strong>: does not allow honeypots to access the Internet.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param allowHoneypotAccessInternet Property allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet. This parameter is required.
         */
        public Builder allowHoneypotAccessInternet(final com.aliyun.ros.cdk.core.IResolvable allowHoneypotAccessInternet) {
            this.props.allowHoneypotAccessInternet(allowHoneypotAccessInternet);
            return this;
        }

        /**
         * Property availableProbeNum: The number of available probes.
         * <p>
         * @return {@code this}
         * @param availableProbeNum Property availableProbeNum: The number of available probes. This parameter is required.
         */
        public Builder availableProbeNum(final java.lang.Number availableProbeNum) {
            this.props.availableProbeNum(availableProbeNum);
            return this;
        }
        /**
         * Property availableProbeNum: The number of available probes.
         * <p>
         * @return {@code this}
         * @param availableProbeNum Property availableProbeNum: The number of available probes. This parameter is required.
         */
        public Builder availableProbeNum(final com.aliyun.ros.cdk.core.IResolvable availableProbeNum) {
            this.props.availableProbeNum(availableProbeNum);
            return this;
        }

        /**
         * Property securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
         * <p>
         * @return {@code this}
         * @param securityGroupProbeIpList Property securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node. This parameter is required.
         */
        public Builder securityGroupProbeIpList(final com.aliyun.ros.cdk.core.IResolvable securityGroupProbeIpList) {
            this.props.securityGroupProbeIpList(securityGroupProbeIpList);
            return this;
        }
        /**
         * Property securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
         * <p>
         * @return {@code this}
         * @param securityGroupProbeIpList Property securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node. This parameter is required.
         */
        public Builder securityGroupProbeIpList(final java.util.List<? extends java.lang.Object> securityGroupProbeIpList) {
            this.props.securityGroupProbeIpList(securityGroupProbeIpList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.HoneypotNode}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.HoneypotNode build() {
            return new com.aliyun.ros.cdk.threatdetection.HoneypotNode(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
