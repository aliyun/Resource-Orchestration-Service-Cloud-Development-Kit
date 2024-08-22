package com.aliyun.ros.cdk.arms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ARMS::DeliverTask</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:17.852Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.DeliverTask")
public class DeliverTask extends com.aliyun.ros.cdk.core.Resource {

    protected DeliverTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DeliverTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DeliverTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.DeliverTaskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DeliverTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.DeliverTaskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TaskId: The ID of the task.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.DeliverTaskProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.DeliverTaskProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.DeliverTaskProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.DeliverTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.DeliverTask> {
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
        private final com.aliyun.ros.cdk.arms.DeliverTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.arms.DeliverTaskProps.Builder();
        }

        /**
         * Property targetList: The list of the target.
         * <p>
         * @return {@code this}
         * @param targetList Property targetList: The list of the target. This parameter is required.
         */
        public Builder targetList(final com.aliyun.ros.cdk.core.IResolvable targetList) {
            this.props.targetList(targetList);
            return this;
        }
        /**
         * Property targetList: The list of the target.
         * <p>
         * @return {@code this}
         * @param targetList Property targetList: The list of the target. This parameter is required.
         */
        public Builder targetList(final java.util.List<? extends java.lang.Object> targetList) {
            this.props.targetList(targetList);
            return this;
        }

        /**
         * Property taskName: The name of the task.
         * <p>
         * @return {@code this}
         * @param taskName Property taskName: The name of the task. This parameter is required.
         */
        public Builder taskName(final java.lang.String taskName) {
            this.props.taskName(taskName);
            return this;
        }
        /**
         * Property taskName: The name of the task.
         * <p>
         * @return {@code this}
         * @param taskName Property taskName: The name of the task. This parameter is required.
         */
        public Builder taskName(final com.aliyun.ros.cdk.core.IResolvable taskName) {
            this.props.taskName(taskName);
            return this;
        }

        /**
         * Property dataSourceId: The ID of the data source.
         * <p>
         * @return {@code this}
         * @param dataSourceId Property dataSourceId: The ID of the data source. This parameter is required.
         */
        public Builder dataSourceId(final java.lang.String dataSourceId) {
            this.props.dataSourceId(dataSourceId);
            return this;
        }
        /**
         * Property dataSourceId: The ID of the data source.
         * <p>
         * @return {@code this}
         * @param dataSourceId Property dataSourceId: The ID of the data source. This parameter is required.
         */
        public Builder dataSourceId(final com.aliyun.ros.cdk.core.IResolvable dataSourceId) {
            this.props.dataSourceId(dataSourceId);
            return this;
        }

        /**
         * Property dataSourceName: The name of the data source.
         * <p>
         * @return {@code this}
         * @param dataSourceName Property dataSourceName: The name of the data source. This parameter is required.
         */
        public Builder dataSourceName(final java.lang.String dataSourceName) {
            this.props.dataSourceName(dataSourceName);
            return this;
        }
        /**
         * Property dataSourceName: The name of the data source.
         * <p>
         * @return {@code this}
         * @param dataSourceName Property dataSourceName: The name of the data source. This parameter is required.
         */
        public Builder dataSourceName(final com.aliyun.ros.cdk.core.IResolvable dataSourceName) {
            this.props.dataSourceName(dataSourceName);
            return this;
        }

        /**
         * Property externalLabel: The external label of the task.
         * <p>
         * @return {@code this}
         * @param externalLabel Property externalLabel: The external label of the task. This parameter is required.
         */
        public Builder externalLabel(final java.lang.String externalLabel) {
            this.props.externalLabel(externalLabel);
            return this;
        }
        /**
         * Property externalLabel: The external label of the task.
         * <p>
         * @return {@code this}
         * @param externalLabel Property externalLabel: The external label of the task. This parameter is required.
         */
        public Builder externalLabel(final com.aliyun.ros.cdk.core.IResolvable externalLabel) {
            this.props.externalLabel(externalLabel);
            return this;
        }

        /**
         * Property filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.
         * <p>
         * @return {@code this}
         * @param filterList Property filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver. This parameter is required.
         */
        public Builder filterList(final java.lang.String filterList) {
            this.props.filterList(filterList);
            return this;
        }
        /**
         * Property filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.
         * <p>
         * @return {@code this}
         * @param filterList Property filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver. This parameter is required.
         */
        public Builder filterList(final com.aliyun.ros.cdk.core.IResolvable filterList) {
            this.props.filterList(filterList);
            return this;
        }

        /**
         * Property filterType: Whether the data filtering adopts the whitelist mechanism.
         * <p>
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param filterType Property filterType: Whether the data filtering adopts the whitelist mechanism. This parameter is required.
         */
        public Builder filterType(final java.lang.Boolean filterType) {
            this.props.filterType(filterType);
            return this;
        }
        /**
         * Property filterType: Whether the data filtering adopts the whitelist mechanism.
         * <p>
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param filterType Property filterType: Whether the data filtering adopts the whitelist mechanism. This parameter is required.
         */
        public Builder filterType(final com.aliyun.ros.cdk.core.IResolvable filterType) {
            this.props.filterType(filterType);
            return this;
        }

        /**
         * Property taskDescription: The description of the task.
         * <p>
         * @return {@code this}
         * @param taskDescription Property taskDescription: The description of the task. This parameter is required.
         */
        public Builder taskDescription(final java.lang.String taskDescription) {
            this.props.taskDescription(taskDescription);
            return this;
        }
        /**
         * Property taskDescription: The description of the task.
         * <p>
         * @return {@code this}
         * @param taskDescription Property taskDescription: The description of the task. This parameter is required.
         */
        public Builder taskDescription(final com.aliyun.ros.cdk.core.IResolvable taskDescription) {
            this.props.taskDescription(taskDescription);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.DeliverTask}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.DeliverTask build() {
            return new com.aliyun.ros.cdk.arms.DeliverTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
