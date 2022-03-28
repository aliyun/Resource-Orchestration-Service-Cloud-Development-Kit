package com.aliyun.ros.cdk.resourcemanager;

/**
 * A ROS resource type:  `ALIYUN::ResourceManager::ControlPolicy`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:03.427Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.ControlPolicy")
public class ControlPolicy extends com.aliyun.ros.cdk.core.Resource {

    protected ControlPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ControlPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ResourceManager::ControlPolicy`.
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
    public ControlPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.ControlPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ResourceManager::ControlPolicy`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ControlPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.ControlPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AttachmentCount: AttachmentCount.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAttachmentCount() {
        return software.amazon.jsii.Kernel.get(this, "attrAttachmentCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ControlPolicyName: PolicyName.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrControlPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "attrControlPolicyName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Description: Description.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EffectScope: EffectScope.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEffectScope() {
        return software.amazon.jsii.Kernel.get(this, "attrEffectScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PolicyDocument: PolicyDocument.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPolicyDocument() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyDocument", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PolicyId: PolicyId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PolicyType: PolicyType.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPolicyType() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.resourcemanager.ControlPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.resourcemanager.ControlPolicy> {
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
        private final com.aliyun.ros.cdk.resourcemanager.ControlPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.resourcemanager.ControlPolicyProps.Builder();
        }

        /**
         * Property controlPolicyName: PolicyName.
         * <p>
         * @return {@code this}
         * @param controlPolicyName Property controlPolicyName: PolicyName. This parameter is required.
         */
        public Builder controlPolicyName(final java.lang.String controlPolicyName) {
            this.props.controlPolicyName(controlPolicyName);
            return this;
        }
        /**
         * Property controlPolicyName: PolicyName.
         * <p>
         * @return {@code this}
         * @param controlPolicyName Property controlPolicyName: PolicyName. This parameter is required.
         */
        public Builder controlPolicyName(final com.aliyun.ros.cdk.core.IResolvable controlPolicyName) {
            this.props.controlPolicyName(controlPolicyName);
            return this;
        }

        /**
         * Property effectScope: EffectScope.
         * <p>
         * @return {@code this}
         * @param effectScope Property effectScope: EffectScope. This parameter is required.
         */
        public Builder effectScope(final java.lang.String effectScope) {
            this.props.effectScope(effectScope);
            return this;
        }
        /**
         * Property effectScope: EffectScope.
         * <p>
         * @return {@code this}
         * @param effectScope Property effectScope: EffectScope. This parameter is required.
         */
        public Builder effectScope(final com.aliyun.ros.cdk.core.IResolvable effectScope) {
            this.props.effectScope(effectScope);
            return this;
        }

        /**
         * Property policyDocument: PolicyDocument.
         * <p>
         * @return {@code this}
         * @param policyDocument Property policyDocument: PolicyDocument. This parameter is required.
         */
        public Builder policyDocument(final java.lang.String policyDocument) {
            this.props.policyDocument(policyDocument);
            return this;
        }
        /**
         * Property policyDocument: PolicyDocument.
         * <p>
         * @return {@code this}
         * @param policyDocument Property policyDocument: PolicyDocument. This parameter is required.
         */
        public Builder policyDocument(final com.aliyun.ros.cdk.core.IResolvable policyDocument) {
            this.props.policyDocument(policyDocument);
            return this;
        }

        /**
         * Property description: Description.
         * <p>
         * @return {@code this}
         * @param description Property description: Description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description.
         * <p>
         * @return {@code this}
         * @param description Property description: Description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.resourcemanager.ControlPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.resourcemanager.ControlPolicy build() {
            return new com.aliyun.ros.cdk.resourcemanager.ControlPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
