package com.aliyun.ros.cdk.sae;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SAE::Ingress</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:29.403Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.Ingress")
public class Ingress extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.sae.IIngress {

    protected Ingress(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Ingress(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Ingress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.IngressProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Ingress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.IngressProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute IngressId: The ID of the routing rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIngressId() {
        return software.amazon.jsii.Kernel.get(this, "attrIngressId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.IngressProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sae.IngressProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.sae.Ingress}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sae.Ingress> {
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
        private final com.aliyun.ros.cdk.sae.IngressProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sae.IngressProps.Builder();
        }

        /**
         * Property defaultRule: The default forwarding rule.
         * <p>
         * You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application.
         * <p>
         * @return {@code this}
         * @param defaultRule Property defaultRule: The default forwarding rule. This parameter is required.
         */
        public Builder defaultRule(final com.aliyun.ros.cdk.core.IResolvable defaultRule) {
            this.props.defaultRule(defaultRule);
            return this;
        }
        /**
         * Property defaultRule: The default forwarding rule.
         * <p>
         * You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application.
         * <p>
         * @return {@code this}
         * @param defaultRule Property defaultRule: The default forwarding rule. This parameter is required.
         */
        public Builder defaultRule(final com.aliyun.ros.cdk.sae.RosIngress.DefaultRuleProperty defaultRule) {
            this.props.defaultRule(defaultRule);
            return this;
        }

        /**
         * Property description: The name of the routing rule.
         * <p>
         * @return {@code this}
         * @param description Property description: The name of the routing rule. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The name of the routing rule.
         * <p>
         * @return {@code this}
         * @param description Property description: The name of the routing rule. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property listenerPort: The listener port of the SLB instance.
         * <p>
         * You must specify a vacant port.
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: The listener port of the SLB instance. This parameter is required.
         */
        public Builder listenerPort(final java.lang.Number listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }
        /**
         * Property listenerPort: The listener port of the SLB instance.
         * <p>
         * You must specify a vacant port.
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: The listener port of the SLB instance. This parameter is required.
         */
        public Builder listenerPort(final com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }

        /**
         * Property namespaceId: The ID of the namespace to which the application belongs.
         * <p>
         * You can specify only one namespace ID each time you call this operation.
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: The ID of the namespace to which the application belongs. This parameter is required.
         */
        public Builder namespaceId(final java.lang.String namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }
        /**
         * Property namespaceId: The ID of the namespace to which the application belongs.
         * <p>
         * You can specify only one namespace ID each time you call this operation.
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: The ID of the namespace to which the application belongs. This parameter is required.
         */
        public Builder namespaceId(final com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }

        /**
         * Property rules: The forwarding rules.
         * <p>
         * You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path.
         * <p>
         * @return {@code this}
         * @param rules Property rules: The forwarding rules. This parameter is required.
         */
        public Builder rules(final com.aliyun.ros.cdk.core.IResolvable rules) {
            this.props.rules(rules);
            return this;
        }
        /**
         * Property rules: The forwarding rules.
         * <p>
         * You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path.
         * <p>
         * @return {@code this}
         * @param rules Property rules: The forwarding rules. This parameter is required.
         */
        public Builder rules(final java.util.List<? extends java.lang.Object> rules) {
            this.props.rules(rules);
            return this;
        }

        /**
         * Property slbId: The Server Load Balancer (SLB) instance that is used by the routing rule.
         * <p>
         * @return {@code this}
         * @param slbId Property slbId: The Server Load Balancer (SLB) instance that is used by the routing rule. This parameter is required.
         */
        public Builder slbId(final java.lang.String slbId) {
            this.props.slbId(slbId);
            return this;
        }
        /**
         * Property slbId: The Server Load Balancer (SLB) instance that is used by the routing rule.
         * <p>
         * @return {@code this}
         * @param slbId Property slbId: The Server Load Balancer (SLB) instance that is used by the routing rule. This parameter is required.
         */
        public Builder slbId(final com.aliyun.ros.cdk.core.IResolvable slbId) {
            this.props.slbId(slbId);
            return this;
        }

        /**
         * Property certId: The ID of the certificate that is associated with the Classic Load Balancer (CLB) instance.
         * <p>
         * If LoadBalanceType is set to clb, specify this parameter to configure a certificate for the HTTP listener.
         * <p>
         * @return {@code this}
         * @param certId Property certId: The ID of the certificate that is associated with the Classic Load Balancer (CLB) instance. This parameter is required.
         */
        public Builder certId(final java.lang.String certId) {
            this.props.certId(certId);
            return this;
        }
        /**
         * Property certId: The ID of the certificate that is associated with the Classic Load Balancer (CLB) instance.
         * <p>
         * If LoadBalanceType is set to clb, specify this parameter to configure a certificate for the HTTP listener.
         * <p>
         * @return {@code this}
         * @param certId Property certId: The ID of the certificate that is associated with the Classic Load Balancer (CLB) instance. This parameter is required.
         */
        public Builder certId(final com.aliyun.ros.cdk.core.IResolvable certId) {
            this.props.certId(certId);
            return this;
        }

        /**
         * Property certIds: The IDs of the certificates that are associated with the Application Load Balancer (ALB) instance.
         * <p>
         * @return {@code this}
         * @param certIds Property certIds: The IDs of the certificates that are associated with the Application Load Balancer (ALB) instance. This parameter is required.
         */
        public Builder certIds(final com.aliyun.ros.cdk.core.IResolvable certIds) {
            this.props.certIds(certIds);
            return this;
        }
        /**
         * Property certIds: The IDs of the certificates that are associated with the Application Load Balancer (ALB) instance.
         * <p>
         * @return {@code this}
         * @param certIds Property certIds: The IDs of the certificates that are associated with the Application Load Balancer (ALB) instance. This parameter is required.
         */
        public Builder certIds(final java.util.List<? extends java.lang.Object> certIds) {
            this.props.certIds(certIds);
            return this;
        }

        /**
         * Property listenerProtocol: The protocol that is used to forward requests.
         * <p>
         * @return {@code this}
         * @param listenerProtocol Property listenerProtocol: The protocol that is used to forward requests. This parameter is required.
         */
        public Builder listenerProtocol(final java.lang.String listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }
        /**
         * Property listenerProtocol: The protocol that is used to forward requests.
         * <p>
         * @return {@code this}
         * @param listenerProtocol Property listenerProtocol: The protocol that is used to forward requests. This parameter is required.
         */
        public Builder listenerProtocol(final com.aliyun.ros.cdk.core.IResolvable listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }

        /**
         * Property loadBalanceType: The type of the SLB instance based on the processing capabilities.
         * <p>
         * The instance type can be specified only when you create a routing rule. You cannot change the instance type when you update the routing rule.
         * <p>
         * @return {@code this}
         * @param loadBalanceType Property loadBalanceType: The type of the SLB instance based on the processing capabilities. This parameter is required.
         */
        public Builder loadBalanceType(final java.lang.String loadBalanceType) {
            this.props.loadBalanceType(loadBalanceType);
            return this;
        }
        /**
         * Property loadBalanceType: The type of the SLB instance based on the processing capabilities.
         * <p>
         * The instance type can be specified only when you create a routing rule. You cannot change the instance type when you update the routing rule.
         * <p>
         * @return {@code this}
         * @param loadBalanceType Property loadBalanceType: The type of the SLB instance based on the processing capabilities. This parameter is required.
         */
        public Builder loadBalanceType(final com.aliyun.ros.cdk.core.IResolvable loadBalanceType) {
            this.props.loadBalanceType(loadBalanceType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sae.Ingress}.
         */
        @Override
        public com.aliyun.ros.cdk.sae.Ingress build() {
            return new com.aliyun.ros.cdk.sae.Ingress(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
