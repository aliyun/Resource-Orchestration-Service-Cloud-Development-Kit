package com.aliyun.ros.cdk.ddos;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DDoS::Policy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:13.878Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddos.$Module.class, fqn = "@alicloud/ros-cdk-ddos.Policy")
public class Policy extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ddos.IPolicy {

    protected Policy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Policy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Policy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddos.PolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Policy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddos.PolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Content: Configuration Content.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrContent() {
        return software.amazon.jsii.Kernel.get(this, "attrContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PolicyId: The ID of the policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PolicyName: The name of the policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Type: The type of the policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddos.PolicyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ddos.PolicyProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ddos.Policy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ddos.Policy> {
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
        private final com.aliyun.ros.cdk.ddos.PolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ddos.PolicyProps.Builder();
        }

        /**
         * Property policyName: The name of the policy.
         * <p>
         * @return {@code this}
         * @param policyName Property policyName: The name of the policy. This parameter is required.
         */
        public Builder policyName(final java.lang.String policyName) {
            this.props.policyName(policyName);
            return this;
        }
        /**
         * Property policyName: The name of the policy.
         * <p>
         * @return {@code this}
         * @param policyName Property policyName: The name of the policy. This parameter is required.
         */
        public Builder policyName(final com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.props.policyName(policyName);
            return this;
        }

        /**
         * Property type: The type of the policy.
         * <p>
         * Values:
         * <p>
         * <ul>
         * <li>default: Indicates the default protection strategy.</li>
         * <li>l3: Indicates the IP protection strategy.</li>
         * <li>l4: Indicates the port protection strategy.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the policy. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of the policy.
         * <p>
         * Values:
         * <p>
         * <ul>
         * <li>default: Indicates the default protection strategy.</li>
         * <li>l3: Indicates the IP protection strategy.</li>
         * <li>l4: Indicates the port protection strategy.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the policy. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property actionType: Operation type ActionType = 10 Modify policy name ActionType = 11 Modify whitelist and whitelist timeout ActionType = 12 modify add white high anti-back source network segment switch ActionType = 13 Modify the switch to discard ICMP ActionType = 20 Add black and white list ActionType = 21 Delete whitelist and whitelist ActionType = 22 Clear White List ActionType = 23 Clear the blacklist ActionType = 30 Modify Smart Switch ActionType = 31 Modify regional ban ActionType = 32 Modify Source Speed Limit Black ActionType = 34 Modifying Reflective Port Filtering ActionType = 40,41,42 Create, delete, and modify Port rules ActionType = 50,51,52 Create, delete, and modify fingerprint rules ActionType = 60 switch L4 protection ActionType = 61,62,63 Create, delete, and modify L4 rules.
         * <p>
         * @return {@code this}
         * @param actionType Property actionType: Operation type ActionType = 10 Modify policy name ActionType = 11 Modify whitelist and whitelist timeout ActionType = 12 modify add white high anti-back source network segment switch ActionType = 13 Modify the switch to discard ICMP ActionType = 20 Add black and white list ActionType = 21 Delete whitelist and whitelist ActionType = 22 Clear White List ActionType = 23 Clear the blacklist ActionType = 30 Modify Smart Switch ActionType = 31 Modify regional ban ActionType = 32 Modify Source Speed Limit Black ActionType = 34 Modifying Reflective Port Filtering ActionType = 40,41,42 Create, delete, and modify Port rules ActionType = 50,51,52 Create, delete, and modify fingerprint rules ActionType = 60 switch L4 protection ActionType = 61,62,63 Create, delete, and modify L4 rules. This parameter is required.
         */
        public Builder actionType(final java.lang.String actionType) {
            this.props.actionType(actionType);
            return this;
        }
        /**
         * Property actionType: Operation type ActionType = 10 Modify policy name ActionType = 11 Modify whitelist and whitelist timeout ActionType = 12 modify add white high anti-back source network segment switch ActionType = 13 Modify the switch to discard ICMP ActionType = 20 Add black and white list ActionType = 21 Delete whitelist and whitelist ActionType = 22 Clear White List ActionType = 23 Clear the blacklist ActionType = 30 Modify Smart Switch ActionType = 31 Modify regional ban ActionType = 32 Modify Source Speed Limit Black ActionType = 34 Modifying Reflective Port Filtering ActionType = 40,41,42 Create, delete, and modify Port rules ActionType = 50,51,52 Create, delete, and modify fingerprint rules ActionType = 60 switch L4 protection ActionType = 61,62,63 Create, delete, and modify L4 rules.
         * <p>
         * @return {@code this}
         * @param actionType Property actionType: Operation type ActionType = 10 Modify policy name ActionType = 11 Modify whitelist and whitelist timeout ActionType = 12 modify add white high anti-back source network segment switch ActionType = 13 Modify the switch to discard ICMP ActionType = 20 Add black and white list ActionType = 21 Delete whitelist and whitelist ActionType = 22 Clear White List ActionType = 23 Clear the blacklist ActionType = 30 Modify Smart Switch ActionType = 31 Modify regional ban ActionType = 32 Modify Source Speed Limit Black ActionType = 34 Modifying Reflective Port Filtering ActionType = 40,41,42 Create, delete, and modify Port rules ActionType = 50,51,52 Create, delete, and modify fingerprint rules ActionType = 60 switch L4 protection ActionType = 61,62,63 Create, delete, and modify L4 rules. This parameter is required.
         */
        public Builder actionType(final com.aliyun.ros.cdk.core.IResolvable actionType) {
            this.props.actionType(actionType);
            return this;
        }

        /**
         * Property blackIpList: Blacklist list.
         * <p>
         * @return {@code this}
         * @param blackIpList Property blackIpList: Blacklist list. This parameter is required.
         */
        public Builder blackIpList(final com.aliyun.ros.cdk.core.IResolvable blackIpList) {
            this.props.blackIpList(blackIpList);
            return this;
        }
        /**
         * Property blackIpList: Blacklist list.
         * <p>
         * @return {@code this}
         * @param blackIpList Property blackIpList: Blacklist list. This parameter is required.
         */
        public Builder blackIpList(final java.util.List<? extends java.lang.Object> blackIpList) {
            this.props.blackIpList(blackIpList);
            return this;
        }

        /**
         * Property content: Configuration Content.
         * <p>
         * @return {@code this}
         * @param content Property content: Configuration Content. This parameter is required.
         */
        public Builder content(final com.aliyun.ros.cdk.core.IResolvable content) {
            this.props.content(content);
            return this;
        }
        /**
         * Property content: Configuration Content.
         * <p>
         * @return {@code this}
         * @param content Property content: Configuration Content. This parameter is required.
         */
        public Builder content(final com.aliyun.ros.cdk.ddos.RosPolicy.ContentProperty content) {
            this.props.content(content);
            return this;
        }

        /**
         * Property whiteIpList: Whitelist IP list.
         * <p>
         * @return {@code this}
         * @param whiteIpList Property whiteIpList: Whitelist IP list. This parameter is required.
         */
        public Builder whiteIpList(final com.aliyun.ros.cdk.core.IResolvable whiteIpList) {
            this.props.whiteIpList(whiteIpList);
            return this;
        }
        /**
         * Property whiteIpList: Whitelist IP list.
         * <p>
         * @return {@code this}
         * @param whiteIpList Property whiteIpList: Whitelist IP list. This parameter is required.
         */
        public Builder whiteIpList(final java.util.List<? extends java.lang.Object> whiteIpList) {
            this.props.whiteIpList(whiteIpList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ddos.Policy}.
         */
        @Override
        public com.aliyun.ros.cdk.ddos.Policy build() {
            return new com.aliyun.ros.cdk.ddos.Policy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
