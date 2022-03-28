package com.aliyun.ros.cdk.resourcemanager;

/**
 * A ROS template type:  `ALIYUN::ResourceManager::PolicyAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:03.441Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosPolicyAttachment")
public class RosPolicyAttachment extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPolicyAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPolicyAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.resourcemanager.RosPolicyAttachment.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ResourceManager::PolicyAttachment`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPolicyAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.RosPolicyAttachmentProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAttachDate() {
        return software.amazon.jsii.Kernel.get(this, "attrAttachDate", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPolicyType() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrincipalName() {
        return software.amazon.jsii.Kernel.get(this, "attrPrincipalName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrincipalType() {
        return software.amazon.jsii.Kernel.get(this, "attrPrincipalType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicyName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "policyName", java.util.Objects.requireNonNull(value, "policyName is required"));
    }

    /**
     */
    public void setPolicyName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policyName", java.util.Objects.requireNonNull(value, "policyName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPolicyType() {
        return software.amazon.jsii.Kernel.get(this, "policyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicyType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "policyType", java.util.Objects.requireNonNull(value, "policyType is required"));
    }

    /**
     */
    public void setPolicyType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policyType", java.util.Objects.requireNonNull(value, "policyType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPrincipalName() {
        return software.amazon.jsii.Kernel.get(this, "principalName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrincipalName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "principalName", java.util.Objects.requireNonNull(value, "principalName is required"));
    }

    /**
     */
    public void setPrincipalName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "principalName", java.util.Objects.requireNonNull(value, "principalName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPrincipalType() {
        return software.amazon.jsii.Kernel.get(this, "principalType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrincipalType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "principalType", java.util.Objects.requireNonNull(value, "principalType is required"));
    }

    /**
     */
    public void setPrincipalType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "principalType", java.util.Objects.requireNonNull(value, "principalType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", java.util.Objects.requireNonNull(value, "resourceGroupId is required"));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", java.util.Objects.requireNonNull(value, "resourceGroupId is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.resourcemanager.RosPolicyAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.resourcemanager.RosPolicyAttachment> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.resourcemanager.RosPolicyAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.resourcemanager.RosPolicyAttachmentProps.Builder();
        }

        /**
         * @return {@code this}
         * @param policyName This parameter is required.
         */
        public Builder policyName(final java.lang.String policyName) {
            this.props.policyName(policyName);
            return this;
        }
        /**
         * @return {@code this}
         * @param policyName This parameter is required.
         */
        public Builder policyName(final com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.props.policyName(policyName);
            return this;
        }

        /**
         * @return {@code this}
         * @param policyType This parameter is required.
         */
        public Builder policyType(final java.lang.String policyType) {
            this.props.policyType(policyType);
            return this;
        }
        /**
         * @return {@code this}
         * @param policyType This parameter is required.
         */
        public Builder policyType(final com.aliyun.ros.cdk.core.IResolvable policyType) {
            this.props.policyType(policyType);
            return this;
        }

        /**
         * @return {@code this}
         * @param principalName This parameter is required.
         */
        public Builder principalName(final java.lang.String principalName) {
            this.props.principalName(principalName);
            return this;
        }
        /**
         * @return {@code this}
         * @param principalName This parameter is required.
         */
        public Builder principalName(final com.aliyun.ros.cdk.core.IResolvable principalName) {
            this.props.principalName(principalName);
            return this;
        }

        /**
         * @return {@code this}
         * @param principalType This parameter is required.
         */
        public Builder principalType(final java.lang.String principalType) {
            this.props.principalType(principalType);
            return this;
        }
        /**
         * @return {@code this}
         * @param principalType This parameter is required.
         */
        public Builder principalType(final com.aliyun.ros.cdk.core.IResolvable principalType) {
            this.props.principalType(principalType);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.resourcemanager.RosPolicyAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.resourcemanager.RosPolicyAttachment build() {
            return new com.aliyun.ros.cdk.resourcemanager.RosPolicyAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
