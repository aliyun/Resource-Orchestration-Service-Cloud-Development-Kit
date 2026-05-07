package com.aliyun.ros.cdk.threatdetection;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ThreatDetection::HoneypotNode</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.726Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosHoneypotNode")
public class RosHoneypotNode extends com.aliyun.ros.cdk.core.RosResource {

    protected RosHoneypotNode(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosHoneypotNode(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.threatdetection.RosHoneypotNode.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosHoneypotNode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.RosHoneypotNodeProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAllowHoneypotAccessInternet() {
        return software.amazon.jsii.Kernel.get(this, "attrAllowHoneypotAccessInternet", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAvailableProbeNum() {
        return software.amazon.jsii.Kernel.get(this, "attrAvailableProbeNum", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNodeId() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNodeName() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityGroupProbeIpList() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupProbeIpList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNodeName() {
        return software.amazon.jsii.Kernel.get(this, "nodeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNodeName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nodeName", java.util.Objects.requireNonNull(value, "nodeName is required"));
    }

    /**
     */
    public void setNodeName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nodeName", java.util.Objects.requireNonNull(value, "nodeName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAllowHoneypotAccessInternet() {
        return software.amazon.jsii.Kernel.get(this, "allowHoneypotAccessInternet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAllowHoneypotAccessInternet(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "allowHoneypotAccessInternet", value);
    }

    /**
     */
    public void setAllowHoneypotAccessInternet(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "allowHoneypotAccessInternet", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAvailableProbeNum() {
        return software.amazon.jsii.Kernel.get(this, "availableProbeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAvailableProbeNum(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "availableProbeNum", value);
    }

    /**
     */
    public void setAvailableProbeNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "availableProbeNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupProbeIpList() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupProbeIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupProbeIpList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupProbeIpList", value);
    }

    /**
     */
    public void setSecurityGroupProbeIpList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "securityGroupProbeIpList", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.RosHoneypotNode}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.RosHoneypotNode> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.threatdetection.RosHoneypotNodeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.RosHoneypotNodeProps.Builder();
        }

        /**
         * @return {@code this}
         * @param nodeName This parameter is required.
         */
        public Builder nodeName(final java.lang.String nodeName) {
            this.props.nodeName(nodeName);
            return this;
        }
        /**
         * @return {@code this}
         * @param nodeName This parameter is required.
         */
        public Builder nodeName(final com.aliyun.ros.cdk.core.IResolvable nodeName) {
            this.props.nodeName(nodeName);
            return this;
        }

        /**
         * @return {@code this}
         * @param allowHoneypotAccessInternet This parameter is required.
         */
        public Builder allowHoneypotAccessInternet(final java.lang.Boolean allowHoneypotAccessInternet) {
            this.props.allowHoneypotAccessInternet(allowHoneypotAccessInternet);
            return this;
        }
        /**
         * @return {@code this}
         * @param allowHoneypotAccessInternet This parameter is required.
         */
        public Builder allowHoneypotAccessInternet(final com.aliyun.ros.cdk.core.IResolvable allowHoneypotAccessInternet) {
            this.props.allowHoneypotAccessInternet(allowHoneypotAccessInternet);
            return this;
        }

        /**
         * @return {@code this}
         * @param availableProbeNum This parameter is required.
         */
        public Builder availableProbeNum(final java.lang.Number availableProbeNum) {
            this.props.availableProbeNum(availableProbeNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param availableProbeNum This parameter is required.
         */
        public Builder availableProbeNum(final com.aliyun.ros.cdk.core.IResolvable availableProbeNum) {
            this.props.availableProbeNum(availableProbeNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupProbeIpList This parameter is required.
         */
        public Builder securityGroupProbeIpList(final com.aliyun.ros.cdk.core.IResolvable securityGroupProbeIpList) {
            this.props.securityGroupProbeIpList(securityGroupProbeIpList);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupProbeIpList This parameter is required.
         */
        public Builder securityGroupProbeIpList(final java.util.List<? extends java.lang.Object> securityGroupProbeIpList) {
            this.props.securityGroupProbeIpList(securityGroupProbeIpList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.RosHoneypotNode}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.RosHoneypotNode build() {
            return new com.aliyun.ros.cdk.threatdetection.RosHoneypotNode(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
