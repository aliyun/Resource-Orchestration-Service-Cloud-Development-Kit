package com.aliyun.ros.cdk.oos;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::OOS::DefaultPatchBaseline</code>, which is used to register a default patch baseline.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:17.054Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.DefaultPatchBaseline")
public class DefaultPatchBaseline extends com.aliyun.ros.cdk.core.Resource {

    protected DefaultPatchBaseline(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DefaultPatchBaseline(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DefaultPatchBaseline(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.DefaultPatchBaselineProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DefaultPatchBaseline(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.DefaultPatchBaselineProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApprovalRules() {
        return software.amazon.jsii.Kernel.get(this, "attrApprovalRules", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CreatedBy: The creator of the patch baseline.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreatedBy() {
        return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CreatedDate: The time when the patch baseline was created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreatedDate() {
        return software.amazon.jsii.Kernel.get(this, "attrCreatedDate", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Description: The description of the patch baseline.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OperationSystem: The type of the operating system.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOperationSystem() {
        return software.amazon.jsii.Kernel.get(this, "attrOperationSystem", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PatchBaselineId: The ID of the patch baseline.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPatchBaselineId() {
        return software.amazon.jsii.Kernel.get(this, "attrPatchBaselineId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PatchBaselineName: The name of the patch baseline.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPatchBaselineName() {
        return software.amazon.jsii.Kernel.get(this, "attrPatchBaselineName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ShareType: The share type of the patch baseline.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrShareType() {
        return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UpdatedBy: The user who last modified the patch baseline.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUpdatedBy() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdatedBy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UpdatedDate: The time when the patch baseline was last modified.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUpdatedDate() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdatedDate", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oos.DefaultPatchBaseline}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oos.DefaultPatchBaseline> {
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
        private final com.aliyun.ros.cdk.oos.DefaultPatchBaselineProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oos.DefaultPatchBaselineProps.Builder();
        }

        /**
         * Property patchBaselineName: The name of the patch baseline.
         * <p>
         * @return {@code this}
         * @param patchBaselineName Property patchBaselineName: The name of the patch baseline. This parameter is required.
         */
        public Builder patchBaselineName(final java.lang.String patchBaselineName) {
            this.props.patchBaselineName(patchBaselineName);
            return this;
        }
        /**
         * Property patchBaselineName: The name of the patch baseline.
         * <p>
         * @return {@code this}
         * @param patchBaselineName Property patchBaselineName: The name of the patch baseline. This parameter is required.
         */
        public Builder patchBaselineName(final com.aliyun.ros.cdk.core.IResolvable patchBaselineName) {
            this.props.patchBaselineName(patchBaselineName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oos.DefaultPatchBaseline}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.DefaultPatchBaseline build() {
            return new com.aliyun.ros.cdk.oos.DefaultPatchBaseline(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
