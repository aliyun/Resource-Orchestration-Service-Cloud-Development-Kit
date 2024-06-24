package com.aliyun.ros.cdk.cloudfw;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CLOUDFW::VpcFirewallControlPolicy</code>, which is used to add an access control policy to a specified policy group for a Virtual Private Cloud (VPC) firewall.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:04.940Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosVpcFirewallControlPolicy")
public class RosVpcFirewallControlPolicy extends com.aliyun.ros.cdk.core.RosResource {

    protected RosVpcFirewallControlPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosVpcFirewallControlPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cloudfw.RosVpcFirewallControlPolicy.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosVpcFirewallControlPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.RosVpcFirewallControlPolicyProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAclUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrAclUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAclAction() {
        return software.amazon.jsii.Kernel.get(this, "aclAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAclAction(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aclAction", java.util.Objects.requireNonNull(value, "aclAction is required"));
    }

    /**
     */
    public void setAclAction(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aclAction", java.util.Objects.requireNonNull(value, "aclAction is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getApplicationName() {
        return software.amazon.jsii.Kernel.get(this, "applicationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApplicationName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "applicationName", java.util.Objects.requireNonNull(value, "applicationName is required"));
    }

    /**
     */
    public void setApplicationName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "applicationName", java.util.Objects.requireNonNull(value, "applicationName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", java.util.Objects.requireNonNull(value, "description is required"));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", java.util.Objects.requireNonNull(value, "description is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDestination() {
        return software.amazon.jsii.Kernel.get(this, "destination", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestination(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destination", java.util.Objects.requireNonNull(value, "destination is required"));
    }

    /**
     */
    public void setDestination(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destination", java.util.Objects.requireNonNull(value, "destination is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDestinationType() {
        return software.amazon.jsii.Kernel.get(this, "destinationType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationType", java.util.Objects.requireNonNull(value, "destinationType is required"));
    }

    /**
     */
    public void setDestinationType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationType", java.util.Objects.requireNonNull(value, "destinationType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNewOrder() {
        return software.amazon.jsii.Kernel.get(this, "newOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNewOrder(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "newOrder", java.util.Objects.requireNonNull(value, "newOrder is required"));
    }

    /**
     */
    public void setNewOrder(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "newOrder", java.util.Objects.requireNonNull(value, "newOrder is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProto() {
        return software.amazon.jsii.Kernel.get(this, "proto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProto(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "proto", java.util.Objects.requireNonNull(value, "proto is required"));
    }

    /**
     */
    public void setProto(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "proto", java.util.Objects.requireNonNull(value, "proto is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSource() {
        return software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSource(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "source", java.util.Objects.requireNonNull(value, "source is required"));
    }

    /**
     */
    public void setSource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "source", java.util.Objects.requireNonNull(value, "source is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceType() {
        return software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceType", java.util.Objects.requireNonNull(value, "sourceType is required"));
    }

    /**
     */
    public void setSourceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceType", java.util.Objects.requireNonNull(value, "sourceType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpcFirewallId() {
        return software.amazon.jsii.Kernel.get(this, "vpcFirewallId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcFirewallId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcFirewallId", java.util.Objects.requireNonNull(value, "vpcFirewallId is required"));
    }

    /**
     */
    public void setVpcFirewallId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcFirewallId", java.util.Objects.requireNonNull(value, "vpcFirewallId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestPort() {
        return software.amazon.jsii.Kernel.get(this, "destPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestPort(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destPort", value);
    }

    /**
     */
    public void setDestPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestPortGroup() {
        return software.amazon.jsii.Kernel.get(this, "destPortGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestPortGroup(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destPortGroup", value);
    }

    /**
     */
    public void setDestPortGroup(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destPortGroup", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestPortType() {
        return software.amazon.jsii.Kernel.get(this, "destPortType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestPortType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destPortType", value);
    }

    /**
     */
    public void setDestPortType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destPortType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLang() {
        return software.amazon.jsii.Kernel.get(this, "lang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLang(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "lang", value);
    }

    /**
     */
    public void setLang(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "lang", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRegionId() {
        return software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRegionId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "regionId", value);
    }

    /**
     */
    public void setRegionId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "regionId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.RosVpcFirewallControlPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.RosVpcFirewallControlPolicy> {
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
        private final com.aliyun.ros.cdk.cloudfw.RosVpcFirewallControlPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.RosVpcFirewallControlPolicyProps.Builder();
        }

        /**
         * @return {@code this}
         * @param aclAction This parameter is required.
         */
        public Builder aclAction(final java.lang.String aclAction) {
            this.props.aclAction(aclAction);
            return this;
        }
        /**
         * @return {@code this}
         * @param aclAction This parameter is required.
         */
        public Builder aclAction(final com.aliyun.ros.cdk.core.IResolvable aclAction) {
            this.props.aclAction(aclAction);
            return this;
        }

        /**
         * @return {@code this}
         * @param applicationName This parameter is required.
         */
        public Builder applicationName(final java.lang.String applicationName) {
            this.props.applicationName(applicationName);
            return this;
        }
        /**
         * @return {@code this}
         * @param applicationName This parameter is required.
         */
        public Builder applicationName(final com.aliyun.ros.cdk.core.IResolvable applicationName) {
            this.props.applicationName(applicationName);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param destination This parameter is required.
         */
        public Builder destination(final java.lang.String destination) {
            this.props.destination(destination);
            return this;
        }
        /**
         * @return {@code this}
         * @param destination This parameter is required.
         */
        public Builder destination(final com.aliyun.ros.cdk.core.IResolvable destination) {
            this.props.destination(destination);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationType This parameter is required.
         */
        public Builder destinationType(final java.lang.String destinationType) {
            this.props.destinationType(destinationType);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationType This parameter is required.
         */
        public Builder destinationType(final com.aliyun.ros.cdk.core.IResolvable destinationType) {
            this.props.destinationType(destinationType);
            return this;
        }

        /**
         * @return {@code this}
         * @param newOrder This parameter is required.
         */
        public Builder newOrder(final java.lang.String newOrder) {
            this.props.newOrder(newOrder);
            return this;
        }
        /**
         * @return {@code this}
         * @param newOrder This parameter is required.
         */
        public Builder newOrder(final com.aliyun.ros.cdk.core.IResolvable newOrder) {
            this.props.newOrder(newOrder);
            return this;
        }

        /**
         * @return {@code this}
         * @param proto This parameter is required.
         */
        public Builder proto(final java.lang.String proto) {
            this.props.proto(proto);
            return this;
        }
        /**
         * @return {@code this}
         * @param proto This parameter is required.
         */
        public Builder proto(final com.aliyun.ros.cdk.core.IResolvable proto) {
            this.props.proto(proto);
            return this;
        }

        /**
         * @return {@code this}
         * @param source This parameter is required.
         */
        public Builder source(final java.lang.String source) {
            this.props.source(source);
            return this;
        }
        /**
         * @return {@code this}
         * @param source This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.core.IResolvable source) {
            this.props.source(source);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceType This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceType This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcFirewallId This parameter is required.
         */
        public Builder vpcFirewallId(final java.lang.String vpcFirewallId) {
            this.props.vpcFirewallId(vpcFirewallId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcFirewallId This parameter is required.
         */
        public Builder vpcFirewallId(final com.aliyun.ros.cdk.core.IResolvable vpcFirewallId) {
            this.props.vpcFirewallId(vpcFirewallId);
            return this;
        }

        /**
         * @return {@code this}
         * @param destPort This parameter is required.
         */
        public Builder destPort(final java.lang.String destPort) {
            this.props.destPort(destPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param destPort This parameter is required.
         */
        public Builder destPort(final com.aliyun.ros.cdk.core.IResolvable destPort) {
            this.props.destPort(destPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param destPortGroup This parameter is required.
         */
        public Builder destPortGroup(final java.lang.String destPortGroup) {
            this.props.destPortGroup(destPortGroup);
            return this;
        }
        /**
         * @return {@code this}
         * @param destPortGroup This parameter is required.
         */
        public Builder destPortGroup(final com.aliyun.ros.cdk.core.IResolvable destPortGroup) {
            this.props.destPortGroup(destPortGroup);
            return this;
        }

        /**
         * @return {@code this}
         * @param destPortType This parameter is required.
         */
        public Builder destPortType(final java.lang.String destPortType) {
            this.props.destPortType(destPortType);
            return this;
        }
        /**
         * @return {@code this}
         * @param destPortType This parameter is required.
         */
        public Builder destPortType(final com.aliyun.ros.cdk.core.IResolvable destPortType) {
            this.props.destPortType(destPortType);
            return this;
        }

        /**
         * @return {@code this}
         * @param lang This parameter is required.
         */
        public Builder lang(final java.lang.String lang) {
            this.props.lang(lang);
            return this;
        }
        /**
         * @return {@code this}
         * @param lang This parameter is required.
         */
        public Builder lang(final com.aliyun.ros.cdk.core.IResolvable lang) {
            this.props.lang(lang);
            return this;
        }

        /**
         * @return {@code this}
         * @param regionId This parameter is required.
         */
        public Builder regionId(final java.lang.String regionId) {
            this.props.regionId(regionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param regionId This parameter is required.
         */
        public Builder regionId(final com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.props.regionId(regionId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.RosVpcFirewallControlPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.RosVpcFirewallControlPolicy build() {
            return new com.aliyun.ros.cdk.cloudfw.RosVpcFirewallControlPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
