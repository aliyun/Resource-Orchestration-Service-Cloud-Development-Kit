package com.aliyun.ros.cdk.polardb.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::POLARDB::ParameterGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:59.118Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.datasource.ParameterGroup")
public class ParameterGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.polardb.datasource.IParameterGroup {

    protected ParameterGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ParameterGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ParameterGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.datasource.ParameterGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ParameterGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.datasource.ParameterGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The time when the parameter template was created.
     * <p>
     * The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbType: The type of the database engine.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbType() {
        return software.amazon.jsii.Kernel.get(this, "attrDbType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbVersion: The version of the database engine.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrDbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.
     * <p>
     * Valid values:
     * 0: A restart is not required.
     * 1: A restart is required.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrForceRestart() {
        return software.amazon.jsii.Kernel.get(this, "attrForceRestart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ParameterCounts: The number of parameters in the parameter template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterCounts() {
        return software.amazon.jsii.Kernel.get(this, "attrParameterCounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ParameterGroupDesc: The description of the parameter template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupDesc() {
        return software.amazon.jsii.Kernel.get(this, "attrParameterGroupDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ParameterGroupId: The ID of the parameter template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrParameterGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ParameterGroupName: The name of the parameter template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrParameterGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ParameterGroupType: The type of the parameter template.
     * <p>
     * Valid values:
     * 0: the default parameter template.
     * 1: a custom parameter template.
     * 2: an automatic backup parameter template. After you apply this type of template, the system automatically backs up the original parameter settings and saves the backup as a template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterGroupType() {
        return software.amazon.jsii.Kernel.get(this, "attrParameterGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Parameters: Details about the parameter templates.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters() {
        return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.datasource.ParameterGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.datasource.ParameterGroupProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.datasource.ParameterGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.datasource.ParameterGroup> {
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
        private final com.aliyun.ros.cdk.polardb.datasource.ParameterGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.datasource.ParameterGroupProps.Builder();
        }

        /**
         * Property parameterGroupId: The ID of the parameter template.
         * <p>
         * @return {@code this}
         * @param parameterGroupId Property parameterGroupId: The ID of the parameter template. This parameter is required.
         */
        public Builder parameterGroupId(final java.lang.String parameterGroupId) {
            this.props.parameterGroupId(parameterGroupId);
            return this;
        }
        /**
         * Property parameterGroupId: The ID of the parameter template.
         * <p>
         * @return {@code this}
         * @param parameterGroupId Property parameterGroupId: The ID of the parameter template. This parameter is required.
         */
        public Builder parameterGroupId(final com.aliyun.ros.cdk.core.IResolvable parameterGroupId) {
            this.props.parameterGroupId(parameterGroupId);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardb.datasource.ParameterGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.datasource.ParameterGroup build() {
            return new com.aliyun.ros.cdk.polardb.datasource.ParameterGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
