package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::AttackPathSensitiveAssetConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.427Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.AttackPathSensitiveAssetConfig")
public class AttackPathSensitiveAssetConfig extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.IAttackPathSensitiveAssetConfig {

    protected AttackPathSensitiveAssetConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AttackPathSensitiveAssetConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AttackPathSensitiveAssetConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AttackPathSensitiveAssetConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AttackPathAssetList: The attack path sensitive asset configuration list.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathAssetList() {
        return software.amazon.jsii.Kernel.get(this, "attrAttackPathAssetList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AttackPathSensitiveAssetConfigId: Attack path sensitive asset configuration ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathSensitiveAssetConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrAttackPathSensitiveAssetConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfigProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfigProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfig> {
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
        private final com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfigProps.Builder();
        }

        /**
         * Property attackPathAssetList: The attack path sensitive asset configuration list.
         * <p>
         * @return {@code this}
         * @param attackPathAssetList Property attackPathAssetList: The attack path sensitive asset configuration list. This parameter is required.
         */
        public Builder attackPathAssetList(final com.aliyun.ros.cdk.core.IResolvable attackPathAssetList) {
            this.props.attackPathAssetList(attackPathAssetList);
            return this;
        }
        /**
         * Property attackPathAssetList: The attack path sensitive asset configuration list.
         * <p>
         * @return {@code this}
         * @param attackPathAssetList Property attackPathAssetList: The attack path sensitive asset configuration list. This parameter is required.
         */
        public Builder attackPathAssetList(final java.util.List<? extends java.lang.Object> attackPathAssetList) {
            this.props.attackPathAssetList(attackPathAssetList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfig build() {
            return new com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
