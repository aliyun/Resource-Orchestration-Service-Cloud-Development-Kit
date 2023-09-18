package com.aliyun.ros.cdk.pvtz;

/**
 * A ROS resource type:  <code>ALIYUN::PVTZ::Rule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:27.504Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.Rule")
public class Rule extends com.aliyun.ros.cdk.core.Resource {

    protected Rule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Rule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::PVTZ::Rule</code>.
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
    public Rule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.RuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::PVTZ::Rule</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Rule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.RuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The timestamp when the forwarding rule was created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpointId() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EndpointName: The name of the endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpointName() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ForwardIp: The information about each destination external server.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrForwardIp() {
        return software.amazon.jsii.Kernel.get(this, "attrForwardIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RuleName: The name of the forwarding rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Type: The type of the forwarding rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Vpcs: The information about each virtual private cloud (VPC) that is associated with the forwarding rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcs() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneName: The domain name that requires Domain Name System (DNS) traffic forwarding.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneName() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pvtz.Rule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pvtz.Rule> {
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
        private final com.aliyun.ros.cdk.pvtz.RuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pvtz.RuleProps.Builder();
        }

        /**
         * Property endpointId: The ID of the endpoint.
         * <p>
         * @return {@code this}
         * @param endpointId Property endpointId: The ID of the endpoint. This parameter is required.
         */
        public Builder endpointId(final java.lang.String endpointId) {
            this.props.endpointId(endpointId);
            return this;
        }
        /**
         * Property endpointId: The ID of the endpoint.
         * <p>
         * @return {@code this}
         * @param endpointId Property endpointId: The ID of the endpoint. This parameter is required.
         */
        public Builder endpointId(final com.aliyun.ros.cdk.core.IResolvable endpointId) {
            this.props.endpointId(endpointId);
            return this;
        }

        /**
         * Property forwardIp: The destination external server.
         * <p>
         * @return {@code this}
         * @param forwardIp Property forwardIp: The destination external server. This parameter is required.
         */
        public Builder forwardIp(final com.aliyun.ros.cdk.core.IResolvable forwardIp) {
            this.props.forwardIp(forwardIp);
            return this;
        }
        /**
         * Property forwardIp: The destination external server.
         * <p>
         * @return {@code this}
         * @param forwardIp Property forwardIp: The destination external server. This parameter is required.
         */
        public Builder forwardIp(final java.util.List<? extends java.lang.Object> forwardIp) {
            this.props.forwardIp(forwardIp);
            return this;
        }

        /**
         * Property ruleName: The name of the forwarding rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the forwarding rule. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: The name of the forwarding rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the forwarding rule. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property type: The type of the forwarding rule.
         * <p>
         * Valid value:
         * OUTBOUND: forwards Domain Name System (DNS) traffic to one or more external IP addresses.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the forwarding rule. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of the forwarding rule.
         * <p>
         * Valid value:
         * OUTBOUND: forwards Domain Name System (DNS) traffic to one or more external IP addresses.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the forwarding rule. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property zoneName: The domain name that requires DNS traffic forwarding.
         * <p>
         * @return {@code this}
         * @param zoneName Property zoneName: The domain name that requires DNS traffic forwarding. This parameter is required.
         */
        public Builder zoneName(final java.lang.String zoneName) {
            this.props.zoneName(zoneName);
            return this;
        }
        /**
         * Property zoneName: The domain name that requires DNS traffic forwarding.
         * <p>
         * @return {@code this}
         * @param zoneName Property zoneName: The domain name that requires DNS traffic forwarding. This parameter is required.
         */
        public Builder zoneName(final com.aliyun.ros.cdk.core.IResolvable zoneName) {
            this.props.zoneName(zoneName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pvtz.Rule}.
         */
        @Override
        public com.aliyun.ros.cdk.pvtz.Rule build() {
            return new com.aliyun.ros.cdk.pvtz.Rule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
