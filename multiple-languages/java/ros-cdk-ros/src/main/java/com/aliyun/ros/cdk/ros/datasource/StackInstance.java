package com.aliyun.ros.cdk.ros.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ROS::StackInstance</code>, which is used to query the information about a stack instance that is associated with a stack group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:30.462Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.datasource.StackInstance")
public class StackInstance extends com.aliyun.ros.cdk.core.Resource {

    protected StackInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected StackInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public StackInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.datasource.StackInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public StackInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.datasource.StackInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccountId: The account id of the stack.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccountId() {
        return software.amazon.jsii.Kernel.get(this, "attrAccountId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DriftDetectionTime: The time when the resource stack group last successfully completed deviation detection.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDriftDetectionTime() {
        return software.amazon.jsii.Kernel.get(this, "attrDriftDetectionTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Outputs: The outputs of the stack instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOutputs() {
        return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ParameterOverrides: Override parameter list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrParameterOverrides() {
        return software.amazon.jsii.Kernel.get(this, "attrParameterOverrides", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RdFolderId: The resource folder ID of the resource directory.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRdFolderId() {
        return software.amazon.jsii.Kernel.get(this, "attrRdFolderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RegionId: The region id of the stack.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute StackDriftStatus: The status of the last successful deviation detection of the resource stack group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStackDriftStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStackDriftStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute StackGroupId: The resource stack group ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStackGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrStackGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute StackGroupName: The resource stack group name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStackGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrStackGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute StackId: The stack id of stack instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStackId() {
        return software.amazon.jsii.Kernel.get(this, "attrStackId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Status: Resource stack status.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute StatusReason: Status reason description.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatusReason() {
        return software.amazon.jsii.Kernel.get(this, "attrStatusReason", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.datasource.StackInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.datasource.StackInstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.datasource.StackInstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.datasource.StackInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.datasource.StackInstance> {
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
        private final com.aliyun.ros.cdk.ros.datasource.StackInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ros.datasource.StackInstanceProps.Builder();
        }

        /**
         * Property stackGroupName: Resource stack group name.
         * <p>
         * Names are unique within a single region.
         * The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
         * <p>
         * @return {@code this}
         * @param stackGroupName Property stackGroupName: Resource stack group name. This parameter is required.
         */
        public Builder stackGroupName(final java.lang.String stackGroupName) {
            this.props.stackGroupName(stackGroupName);
            return this;
        }
        /**
         * Property stackGroupName: Resource stack group name.
         * <p>
         * Names are unique within a single region.
         * The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
         * <p>
         * @return {@code this}
         * @param stackGroupName Property stackGroupName: Resource stack group name. This parameter is required.
         */
        public Builder stackGroupName(final com.aliyun.ros.cdk.core.IResolvable stackGroupName) {
            this.props.stackGroupName(stackGroupName);
            return this;
        }

        /**
         * Property stackInstanceAccountId: The target account ID to which the resource stack belongs.
         * <p>
         * In the self-service management permission mode, the account is an Alibaba Cloud account.
         * In service management permission mode, this account is a member account of the resource directory.
         * <p>
         * @return {@code this}
         * @param stackInstanceAccountId Property stackInstanceAccountId: The target account ID to which the resource stack belongs. This parameter is required.
         */
        public Builder stackInstanceAccountId(final java.lang.String stackInstanceAccountId) {
            this.props.stackInstanceAccountId(stackInstanceAccountId);
            return this;
        }
        /**
         * Property stackInstanceAccountId: The target account ID to which the resource stack belongs.
         * <p>
         * In the self-service management permission mode, the account is an Alibaba Cloud account.
         * In service management permission mode, this account is a member account of the resource directory.
         * <p>
         * @return {@code this}
         * @param stackInstanceAccountId Property stackInstanceAccountId: The target account ID to which the resource stack belongs. This parameter is required.
         */
        public Builder stackInstanceAccountId(final com.aliyun.ros.cdk.core.IResolvable stackInstanceAccountId) {
            this.props.stackInstanceAccountId(stackInstanceAccountId);
            return this;
        }

        /**
         * Property stackInstanceRegionId: The region to which the resource stack belongs.
         * <p>
         * @return {@code this}
         * @param stackInstanceRegionId Property stackInstanceRegionId: The region to which the resource stack belongs. This parameter is required.
         */
        public Builder stackInstanceRegionId(final java.lang.String stackInstanceRegionId) {
            this.props.stackInstanceRegionId(stackInstanceRegionId);
            return this;
        }
        /**
         * Property stackInstanceRegionId: The region to which the resource stack belongs.
         * <p>
         * @return {@code this}
         * @param stackInstanceRegionId Property stackInstanceRegionId: The region to which the resource stack belongs. This parameter is required.
         */
        public Builder stackInstanceRegionId(final com.aliyun.ros.cdk.core.IResolvable stackInstanceRegionId) {
            this.props.stackInstanceRegionId(stackInstanceRegionId);
            return this;
        }

        /**
         * Property outputOption: Whether to return the Outputs parameter resource stack output list.
         * <p>
         * @return {@code this}
         * @param outputOption Property outputOption: Whether to return the Outputs parameter resource stack output list. This parameter is required.
         */
        public Builder outputOption(final java.lang.String outputOption) {
            this.props.outputOption(outputOption);
            return this;
        }
        /**
         * Property outputOption: Whether to return the Outputs parameter resource stack output list.
         * <p>
         * @return {@code this}
         * @param outputOption Property outputOption: Whether to return the Outputs parameter resource stack output list. This parameter is required.
         */
        public Builder outputOption(final com.aliyun.ros.cdk.core.IResolvable outputOption) {
            this.props.outputOption(outputOption);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ros.datasource.StackInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.datasource.StackInstance build() {
            return new com.aliyun.ros.cdk.ros.datasource.StackInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
