package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::CustomCheckStandardPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.458Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.CustomCheckStandardPolicy")
public class CustomCheckStandardPolicy extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.ICustomCheckStandardPolicy {

    protected CustomCheckStandardPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CustomCheckStandardPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public CustomCheckStandardPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.CustomCheckStandardPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public CustomCheckStandardPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.CustomCheckStandardPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute PolicyId: The ID of the custom check policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.CustomCheckStandardPolicyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.CustomCheckStandardPolicyProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.CustomCheckStandardPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.CustomCheckStandardPolicy> {
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
        private final com.aliyun.ros.cdk.threatdetection.CustomCheckStandardPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.CustomCheckStandardPolicyProps.Builder();
        }

        /**
         * Property policyShowName: The name of the custom policy.
         * <p>
         * @return {@code this}
         * @param policyShowName Property policyShowName: The name of the custom policy. This parameter is required.
         */
        public Builder policyShowName(final java.lang.String policyShowName) {
            this.props.policyShowName(policyShowName);
            return this;
        }
        /**
         * Property policyShowName: The name of the custom policy.
         * <p>
         * @return {@code this}
         * @param policyShowName Property policyShowName: The name of the custom policy. This parameter is required.
         */
        public Builder policyShowName(final com.aliyun.ros.cdk.core.IResolvable policyShowName) {
            this.props.policyShowName(policyShowName);
            return this;
        }

        /**
         * Property policyType: The category type of the custom check policy: - STANDARD: standard.
         * <p>
         * <ul>
         * <li>REQUIREMENT: requirement.</li>
         * <li>SECTION: section.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param policyType Property policyType: The category type of the custom check policy: - STANDARD: standard. This parameter is required.
         */
        public Builder policyType(final java.lang.String policyType) {
            this.props.policyType(policyType);
            return this;
        }
        /**
         * Property policyType: The category type of the custom check policy: - STANDARD: standard.
         * <p>
         * <ul>
         * <li>REQUIREMENT: requirement.</li>
         * <li>SECTION: section.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param policyType Property policyType: The category type of the custom check policy: - STANDARD: standard. This parameter is required.
         */
        public Builder policyType(final com.aliyun.ros.cdk.core.IResolvable policyType) {
            this.props.policyType(policyType);
            return this;
        }

        /**
         * Property dependentPolicyId: The ID of the parent policy.
         * <p>
         * (Dependency order from low to high: Section -&gt; Requirement -&gt; Standard)
         * <p>
         * @return {@code this}
         * @param dependentPolicyId Property dependentPolicyId: The ID of the parent policy. This parameter is required.
         */
        public Builder dependentPolicyId(final java.lang.Number dependentPolicyId) {
            this.props.dependentPolicyId(dependentPolicyId);
            return this;
        }
        /**
         * Property dependentPolicyId: The ID of the parent policy.
         * <p>
         * (Dependency order from low to high: Section -&gt; Requirement -&gt; Standard)
         * <p>
         * @return {@code this}
         * @param dependentPolicyId Property dependentPolicyId: The ID of the parent policy. This parameter is required.
         */
        public Builder dependentPolicyId(final com.aliyun.ros.cdk.core.IResolvable dependentPolicyId) {
            this.props.dependentPolicyId(dependentPolicyId);
            return this;
        }

        /**
         * Property type: The category name of the associated policy (required when PolicyType is STANDARD): - AISPM: AI Security Posture Management (AISPM).
         * <p>
         * <ul>
         * <li>IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).</li>
         * <li>RISK: Security Risk.</li>
         * <li>COMPLIANCE: Compliance Risk.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param type Property type: The category name of the associated policy (required when PolicyType is STANDARD): - AISPM: AI Security Posture Management (AISPM). This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The category name of the associated policy (required when PolicyType is STANDARD): - AISPM: AI Security Posture Management (AISPM).
         * <p>
         * <ul>
         * <li>IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).</li>
         * <li>RISK: Security Risk.</li>
         * <li>COMPLIANCE: Compliance Risk.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param type Property type: The category name of the associated policy (required when PolicyType is STANDARD): - AISPM: AI Security Posture Management (AISPM). This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.CustomCheckStandardPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.CustomCheckStandardPolicy build() {
            return new com.aliyun.ros.cdk.threatdetection.CustomCheckStandardPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
