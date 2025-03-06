package com.aliyun.ros.cdk.paiplugin;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAIPlugin::Group</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.842Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paiplugin.$Module.class, fqn = "@alicloud/ros-cdk-paiplugin.Group")
public class Group extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.paiplugin.IGroup {

    protected Group(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Group(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Group(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paiplugin.GroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Group(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paiplugin.GroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Amount: The number of the user group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreatedTime: The creation time of the user group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreatedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Id: The ID of the user group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Name: The name of the user group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paiplugin.GroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.paiplugin.GroupProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.paiplugin.Group}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.paiplugin.Group> {
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
        private final com.aliyun.ros.cdk.paiplugin.GroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.paiplugin.GroupProps.Builder();
        }

        /**
         * Property name: The name of the user group.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the user group. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the user group.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the user group. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property source: Crowd source.
         * <p>
         * Valid values:
         * 0: Enter phone numbers.
         * 1: Single-column CSV File (Phone Numbers).
         * 2: Multi-column CSV File.
         * 3: MaxCompute Table.
         * 4: Algorithm.
         * <p>
         * @return {@code this}
         * @param source Property source: Crowd source. This parameter is required.
         */
        public Builder source(final java.lang.Number source) {
            this.props.source(source);
            return this;
        }
        /**
         * Property source: Crowd source.
         * <p>
         * Valid values:
         * 0: Enter phone numbers.
         * 1: Single-column CSV File (Phone Numbers).
         * 2: Multi-column CSV File.
         * 3: MaxCompute Table.
         * 4: Algorithm.
         * <p>
         * @return {@code this}
         * @param source Property source: Crowd source. This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.core.IResolvable source) {
            this.props.source(source);
            return this;
        }

        /**
         * Property algorithm: Association algorithm.
         * <p>
         * This must be specified when Source is 4(Algorithm).
         * <p>
         * @return {@code this}
         * @param algorithm Property algorithm: Association algorithm. This parameter is required.
         */
        public Builder algorithm(final java.lang.String algorithm) {
            this.props.algorithm(algorithm);
            return this;
        }
        /**
         * Property algorithm: Association algorithm.
         * <p>
         * This must be specified when Source is 4(Algorithm).
         * <p>
         * @return {@code this}
         * @param algorithm Property algorithm: Association algorithm. This parameter is required.
         */
        public Builder algorithm(final com.aliyun.ros.cdk.core.IResolvable algorithm) {
            this.props.algorithm(algorithm);
            return this;
        }

        /**
         * Property column: Mobile phone number column name.
         * <p>
         * The Source is 2(Multi-column CSV File) or 3(MaxCompute Table) needs to be specified when it contains mobile phone numbers.
         * <p>
         * @return {@code this}
         * @param column Property column: Mobile phone number column name. This parameter is required.
         */
        public Builder column(final java.lang.String column) {
            this.props.column(column);
            return this;
        }
        /**
         * Property column: Mobile phone number column name.
         * <p>
         * The Source is 2(Multi-column CSV File) or 3(MaxCompute Table) needs to be specified when it contains mobile phone numbers.
         * <p>
         * @return {@code this}
         * @param column Property column: Mobile phone number column name. This parameter is required.
         */
        public Builder column(final com.aliyun.ros.cdk.core.IResolvable column) {
            this.props.column(column);
            return this;
        }

        /**
         * Property filter: Filter condition.
         * <p>
         * This condition can be specified when Source is 3(MaxCompute Table).
         * <p>
         * @return {@code this}
         * @param filter Property filter: Filter condition. This parameter is required.
         */
        public Builder filter(final java.lang.String filter) {
            this.props.filter(filter);
            return this;
        }
        /**
         * Property filter: Filter condition.
         * <p>
         * This condition can be specified when Source is 3(MaxCompute Table).
         * <p>
         * @return {@code this}
         * @param filter Property filter: Filter condition. This parameter is required.
         */
        public Builder filter(final com.aliyun.ros.cdk.core.IResolvable filter) {
            this.props.filter(filter);
            return this;
        }

        /**
         * Property inferenceJobId: Prediction task ID.This condition can be specified when Source is 4(Algorithm).
         * <p>
         * @return {@code this}
         * @param inferenceJobId Property inferenceJobId: Prediction task ID.This condition can be specified when Source is 4(Algorithm). This parameter is required.
         */
        public Builder inferenceJobId(final java.lang.String inferenceJobId) {
            this.props.inferenceJobId(inferenceJobId);
            return this;
        }
        /**
         * Property inferenceJobId: Prediction task ID.This condition can be specified when Source is 4(Algorithm).
         * <p>
         * @return {@code this}
         * @param inferenceJobId Property inferenceJobId: Prediction task ID.This condition can be specified when Source is 4(Algorithm). This parameter is required.
         */
        public Builder inferenceJobId(final com.aliyun.ros.cdk.core.IResolvable inferenceJobId) {
            this.props.inferenceJobId(inferenceJobId);
            return this;
        }

        /**
         * Property phoneNumber: Whether to include mobile phone numbers.
         * <p>
         * People with mobile phone numbers can be used for reach plans.
         * <p>
         * @return {@code this}
         * @param phoneNumber Property phoneNumber: Whether to include mobile phone numbers. This parameter is required.
         */
        public Builder phoneNumber(final java.lang.String phoneNumber) {
            this.props.phoneNumber(phoneNumber);
            return this;
        }
        /**
         * Property phoneNumber: Whether to include mobile phone numbers.
         * <p>
         * People with mobile phone numbers can be used for reach plans.
         * <p>
         * @return {@code this}
         * @param phoneNumber Property phoneNumber: Whether to include mobile phone numbers. This parameter is required.
         */
        public Builder phoneNumber(final com.aliyun.ros.cdk.core.IResolvable phoneNumber) {
            this.props.phoneNumber(phoneNumber);
            return this;
        }

        /**
         * Property project: MaxCompute (ODPS) project name.
         * <p>
         * This parameter must be specified when Source is 3(MaxCompute Table).
         * <p>
         * @return {@code this}
         * @param project Property project: MaxCompute (ODPS) project name. This parameter is required.
         */
        public Builder project(final java.lang.String project) {
            this.props.project(project);
            return this;
        }
        /**
         * Property project: MaxCompute (ODPS) project name.
         * <p>
         * This parameter must be specified when Source is 3(MaxCompute Table).
         * <p>
         * @return {@code this}
         * @param project Property project: MaxCompute (ODPS) project name. This parameter is required.
         */
        public Builder project(final com.aliyun.ros.cdk.core.IResolvable project) {
            this.props.project(project);
            return this;
        }

        /**
         * Property remark: The notes of the user group.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The notes of the user group. This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * Property remark: The notes of the user group.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The notes of the user group. This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * Property table: MaxCompute (ODPS) table name.
         * <p>
         * This parameter must be specified when Source is 3(MaxCompute Table).
         * <p>
         * @return {@code this}
         * @param table Property table: MaxCompute (ODPS) table name. This parameter is required.
         */
        public Builder table(final java.lang.String table) {
            this.props.table(table);
            return this;
        }
        /**
         * Property table: MaxCompute (ODPS) table name.
         * <p>
         * This parameter must be specified when Source is 3(MaxCompute Table).
         * <p>
         * @return {@code this}
         * @param table Property table: MaxCompute (ODPS) table name. This parameter is required.
         */
        public Builder table(final com.aliyun.ros.cdk.core.IResolvable table) {
            this.props.table(table);
            return this;
        }

        /**
         * Property text: The text of the phone number.
         * <p>
         * This must be specified when Source is 0(Enter phone numbers).
         * <p>
         * @return {@code this}
         * @param text Property text: The text of the phone number. This parameter is required.
         */
        public Builder text(final java.lang.String text) {
            this.props.text(text);
            return this;
        }
        /**
         * Property text: The text of the phone number.
         * <p>
         * This must be specified when Source is 0(Enter phone numbers).
         * <p>
         * @return {@code this}
         * @param text Property text: The text of the phone number. This parameter is required.
         */
        public Builder text(final com.aliyun.ros.cdk.core.IResolvable text) {
            this.props.text(text);
            return this;
        }

        /**
         * Property uri: File address.
         * <p>
         * It needs to be specified when Source is 1(Single-column CSV File) or 2(Multi-column CSV File).
         * <p>
         * @return {@code this}
         * @param uri Property uri: File address. This parameter is required.
         */
        public Builder uri(final java.lang.String uri) {
            this.props.uri(uri);
            return this;
        }
        /**
         * Property uri: File address.
         * <p>
         * It needs to be specified when Source is 1(Single-column CSV File) or 2(Multi-column CSV File).
         * <p>
         * @return {@code this}
         * @param uri Property uri: File address. This parameter is required.
         */
        public Builder uri(final com.aliyun.ros.cdk.core.IResolvable uri) {
            this.props.uri(uri);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.paiplugin.Group}.
         */
        @Override
        public com.aliyun.ros.cdk.paiplugin.Group build() {
            return new com.aliyun.ros.cdk.paiplugin.Group(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
