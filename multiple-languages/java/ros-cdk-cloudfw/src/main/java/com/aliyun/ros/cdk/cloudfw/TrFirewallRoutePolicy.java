package com.aliyun.ros.cdk.cloudfw;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CLOUDFW::TrFirewallRoutePolicy</code>, which is used to create a routing policy for a virtual private cloud (VPC) firewall of a transit router.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.594Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.TrFirewallRoutePolicy")
public class TrFirewallRoutePolicy extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cloudfw.ITrFirewallRoutePolicy {

    protected TrFirewallRoutePolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TrFirewallRoutePolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public TrFirewallRoutePolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.TrFirewallRoutePolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public TrFirewallRoutePolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.TrFirewallRoutePolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute FirewallId: The instance ID of the VPC firewall.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFirewallId() {
        return software.amazon.jsii.Kernel.get(this, "attrFirewallId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TrFirewallRoutePolicyId: The ID of the routing policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrFirewallRoutePolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrTrFirewallRoutePolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.TrFirewallRoutePolicyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudfw.TrFirewallRoutePolicyProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.TrFirewallRoutePolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.TrFirewallRoutePolicy> {
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
        private final com.aliyun.ros.cdk.cloudfw.TrFirewallRoutePolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.TrFirewallRoutePolicyProps.Builder();
        }

        /**
         * Property firewallId: The instance ID of the VPC firewall.
         * <p>
         * @return {@code this}
         * @param firewallId Property firewallId: The instance ID of the VPC firewall. This parameter is required.
         */
        public Builder firewallId(final java.lang.String firewallId) {
            this.props.firewallId(firewallId);
            return this;
        }
        /**
         * Property firewallId: The instance ID of the VPC firewall.
         * <p>
         * @return {@code this}
         * @param firewallId Property firewallId: The instance ID of the VPC firewall. This parameter is required.
         */
        public Builder firewallId(final com.aliyun.ros.cdk.core.IResolvable firewallId) {
            this.props.firewallId(firewallId);
            return this;
        }

        /**
         * Property policyDescription: The description of the traffic redirection instance.
         * <p>
         * @return {@code this}
         * @param policyDescription Property policyDescription: The description of the traffic redirection instance. This parameter is required.
         */
        public Builder policyDescription(final java.lang.String policyDescription) {
            this.props.policyDescription(policyDescription);
            return this;
        }
        /**
         * Property policyDescription: The description of the traffic redirection instance.
         * <p>
         * @return {@code this}
         * @param policyDescription Property policyDescription: The description of the traffic redirection instance. This parameter is required.
         */
        public Builder policyDescription(final com.aliyun.ros.cdk.core.IResolvable policyDescription) {
            this.props.policyDescription(policyDescription);
            return this;
        }

        /**
         * Property policyName: The name of the traffic redirection instance.
         * <p>
         * @return {@code this}
         * @param policyName Property policyName: The name of the traffic redirection instance. This parameter is required.
         */
        public Builder policyName(final java.lang.String policyName) {
            this.props.policyName(policyName);
            return this;
        }
        /**
         * Property policyName: The name of the traffic redirection instance.
         * <p>
         * @return {@code this}
         * @param policyName Property policyName: The name of the traffic redirection instance. This parameter is required.
         */
        public Builder policyName(final com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.props.policyName(policyName);
            return this;
        }

        /**
         * Property policyType: The type of the traffic redirection scenario of the VPC firewall.
         * <p>
         * Valid values:
         * fullmesh: interconnected instances
         * one_to_one: instance to instance
         * end_to_end: instance to instances
         * <p>
         * @return {@code this}
         * @param policyType Property policyType: The type of the traffic redirection scenario of the VPC firewall. This parameter is required.
         */
        public Builder policyType(final java.lang.String policyType) {
            this.props.policyType(policyType);
            return this;
        }
        /**
         * Property policyType: The type of the traffic redirection scenario of the VPC firewall.
         * <p>
         * Valid values:
         * fullmesh: interconnected instances
         * one_to_one: instance to instance
         * end_to_end: instance to instances
         * <p>
         * @return {@code this}
         * @param policyType Property policyType: The type of the traffic redirection scenario of the VPC firewall. This parameter is required.
         */
        public Builder policyType(final com.aliyun.ros.cdk.core.IResolvable policyType) {
            this.props.policyType(policyType);
            return this;
        }

        /**
         * Property destCandidateList: The secondary traffic redirection instances.
         * <p>
         * @return {@code this}
         * @param destCandidateList Property destCandidateList: The secondary traffic redirection instances. This parameter is required.
         */
        public Builder destCandidateList(final com.aliyun.ros.cdk.core.IResolvable destCandidateList) {
            this.props.destCandidateList(destCandidateList);
            return this;
        }
        /**
         * Property destCandidateList: The secondary traffic redirection instances.
         * <p>
         * @return {@code this}
         * @param destCandidateList Property destCandidateList: The secondary traffic redirection instances. This parameter is required.
         */
        public Builder destCandidateList(final java.util.List<? extends java.lang.Object> destCandidateList) {
            this.props.destCandidateList(destCandidateList);
            return this;
        }

        /**
         * Property srcCandidateList: The primary traffic redirection instances.
         * <p>
         * @return {@code this}
         * @param srcCandidateList Property srcCandidateList: The primary traffic redirection instances. This parameter is required.
         */
        public Builder srcCandidateList(final com.aliyun.ros.cdk.core.IResolvable srcCandidateList) {
            this.props.srcCandidateList(srcCandidateList);
            return this;
        }
        /**
         * Property srcCandidateList: The primary traffic redirection instances.
         * <p>
         * @return {@code this}
         * @param srcCandidateList Property srcCandidateList: The primary traffic redirection instances. This parameter is required.
         */
        public Builder srcCandidateList(final java.util.List<? extends java.lang.Object> srcCandidateList) {
            this.props.srcCandidateList(srcCandidateList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.TrFirewallRoutePolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.TrFirewallRoutePolicy build() {
            return new com.aliyun.ros.cdk.cloudfw.TrFirewallRoutePolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
