package com.aliyun.ros.cdk.oos.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::OOS::PatchBaselines</code>, which is used to query patch baselines.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:17.075Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.datasource.PatchBaselines")
public class PatchBaselines extends com.aliyun.ros.cdk.core.Resource {

    protected PatchBaselines(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PatchBaselines(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public PatchBaselines(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oos.datasource.PatchBaselinesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public PatchBaselines(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oos.datasource.PatchBaselinesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public PatchBaselines(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute PatchBaselineNames: The list of patch baseline names.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPatchBaselineNames() {
        return software.amazon.jsii.Kernel.get(this, "attrPatchBaselineNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PatchBaselines: The list of patch baselines.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPatchBaselines() {
        return software.amazon.jsii.Kernel.get(this, "attrPatchBaselines", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oos.datasource.PatchBaselines}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oos.datasource.PatchBaselines> {
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
        private com.aliyun.ros.cdk.oos.datasource.PatchBaselinesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property operationSystem: Operating system type.
         * <p>
         * @return {@code this}
         * @param operationSystem Property operationSystem: Operating system type. This parameter is required.
         */
        public Builder operationSystem(final java.lang.String operationSystem) {
            this.props().operationSystem(operationSystem);
            return this;
        }
        /**
         * Property operationSystem: Operating system type.
         * <p>
         * @return {@code this}
         * @param operationSystem Property operationSystem: Operating system type. This parameter is required.
         */
        public Builder operationSystem(final com.aliyun.ros.cdk.core.IResolvable operationSystem) {
            this.props().operationSystem(operationSystem);
            return this;
        }

        /**
         * Property patchBaselineName: The name of the patch baseline.
         * <p>
         * @return {@code this}
         * @param patchBaselineName Property patchBaselineName: The name of the patch baseline. This parameter is required.
         */
        public Builder patchBaselineName(final java.lang.String patchBaselineName) {
            this.props().patchBaselineName(patchBaselineName);
            return this;
        }
        /**
         * Property patchBaselineName: The name of the patch baseline.
         * <p>
         * @return {@code this}
         * @param patchBaselineName Property patchBaselineName: The name of the patch baseline. This parameter is required.
         */
        public Builder patchBaselineName(final com.aliyun.ros.cdk.core.IResolvable patchBaselineName) {
            this.props().patchBaselineName(patchBaselineName);
            return this;
        }

        /**
         * Property shareType: Patch baseline sharing type.
         * <p>
         * @return {@code this}
         * @param shareType Property shareType: Patch baseline sharing type. This parameter is required.
         */
        public Builder shareType(final java.lang.String shareType) {
            this.props().shareType(shareType);
            return this;
        }
        /**
         * Property shareType: Patch baseline sharing type.
         * <p>
         * @return {@code this}
         * @param shareType Property shareType: Patch baseline sharing type. This parameter is required.
         */
        public Builder shareType(final com.aliyun.ros.cdk.core.IResolvable shareType) {
            this.props().shareType(shareType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oos.datasource.PatchBaselines}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.datasource.PatchBaselines build() {
            return new com.aliyun.ros.cdk.oos.datasource.PatchBaselines(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.oos.datasource.PatchBaselinesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.oos.datasource.PatchBaselinesProps.Builder();
            }
            return this.props;
        }
    }
}
