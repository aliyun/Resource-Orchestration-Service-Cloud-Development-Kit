package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::CustomScenePolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.354Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.CustomScenePolicy")
public class CustomScenePolicy extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.ICustomScenePolicy {

    protected CustomScenePolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CustomScenePolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public CustomScenePolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CustomScenePolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public CustomScenePolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CustomScenePolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The time when the policy takes effect.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CustomScenePolicyName: The name of the policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomScenePolicyName() {
        return software.amazon.jsii.Kernel.get(this, "attrCustomScenePolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EndTime: The time when the policy expires.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Objects: The IDs of websites associated.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrObjects() {
        return software.amazon.jsii.Kernel.get(this, "attrObjects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PolicyId: The Id of the Policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Template: The name of the policy template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplate() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CustomScenePolicyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.CustomScenePolicyProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.CustomScenePolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.CustomScenePolicy> {
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
        private final com.aliyun.ros.cdk.esa.CustomScenePolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.CustomScenePolicyProps.Builder();
        }

        /**
         * Property createTime: The time when the policy takes effect.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         * <p>
         * @return {@code this}
         * @param createTime Property createTime: The time when the policy takes effect. This parameter is required.
         */
        public Builder createTime(final java.lang.String createTime) {
            this.props.createTime(createTime);
            return this;
        }
        /**
         * Property createTime: The time when the policy takes effect.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         * <p>
         * @return {@code this}
         * @param createTime Property createTime: The time when the policy takes effect. This parameter is required.
         */
        public Builder createTime(final com.aliyun.ros.cdk.core.IResolvable createTime) {
            this.props.createTime(createTime);
            return this;
        }

        /**
         * Property customScenePolicyName: The policy name.
         * <p>
         * @return {@code this}
         * @param customScenePolicyName Property customScenePolicyName: The policy name. This parameter is required.
         */
        public Builder customScenePolicyName(final java.lang.String customScenePolicyName) {
            this.props.customScenePolicyName(customScenePolicyName);
            return this;
        }
        /**
         * Property customScenePolicyName: The policy name.
         * <p>
         * @return {@code this}
         * @param customScenePolicyName Property customScenePolicyName: The policy name. This parameter is required.
         */
        public Builder customScenePolicyName(final com.aliyun.ros.cdk.core.IResolvable customScenePolicyName) {
            this.props.customScenePolicyName(customScenePolicyName);
            return this;
        }

        /**
         * Property endTime: The time when the policy expires.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The time when the policy expires. This parameter is required.
         */
        public Builder endTime(final java.lang.String endTime) {
            this.props.endTime(endTime);
            return this;
        }
        /**
         * Property endTime: The time when the policy expires.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The time when the policy expires. This parameter is required.
         */
        public Builder endTime(final com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.props.endTime(endTime);
            return this;
        }

        /**
         * Property objects: The IDs of the websites that you want to associate with the policy.
         * <p>
         * Separate multiple IDs with commas (,).
         * <p>
         * @return {@code this}
         * @param objects Property objects: The IDs of the websites that you want to associate with the policy. This parameter is required.
         */
        public Builder objects(final java.lang.String objects) {
            this.props.objects(objects);
            return this;
        }
        /**
         * Property objects: The IDs of the websites that you want to associate with the policy.
         * <p>
         * Separate multiple IDs with commas (,).
         * <p>
         * @return {@code this}
         * @param objects Property objects: The IDs of the websites that you want to associate with the policy. This parameter is required.
         */
        public Builder objects(final com.aliyun.ros.cdk.core.IResolvable objects) {
            this.props.objects(objects);
            return this;
        }

        /**
         * Property template: The name of the policy template.
         * <p>
         * Valid value:
         * promotion: major events.
         * <p>
         * @return {@code this}
         * @param template Property template: The name of the policy template. This parameter is required.
         */
        public Builder template(final java.lang.String template) {
            this.props.template(template);
            return this;
        }
        /**
         * Property template: The name of the policy template.
         * <p>
         * Valid value:
         * promotion: major events.
         * <p>
         * @return {@code this}
         * @param template Property template: The name of the policy template. This parameter is required.
         */
        public Builder template(final com.aliyun.ros.cdk.core.IResolvable template) {
            this.props.template(template);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.CustomScenePolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.CustomScenePolicy build() {
            return new com.aliyun.ros.cdk.esa.CustomScenePolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
