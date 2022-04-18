package com.aliyun.ros.cdk.oos;

/**
 * A ROS resource type:  `ALIYUN::OOS::Execution`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:26.440Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.Execution")
public class Execution extends com.aliyun.ros.cdk.core.Resource {

    protected Execution(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Execution(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::OOS::Execution`.
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
    public Execution(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.ExecutionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::OOS::Execution`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Execution(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.ExecutionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCounters() {
        return software.amazon.jsii.Kernel.get(this, "attrCounters", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.
     * <p>
     * You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}'
     * For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
     * You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCurlCli() {
        return software.amazon.jsii.Kernel.get(this, "attrCurlCli", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ExecutionId: Execution ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExecutionId() {
        return software.amazon.jsii.Kernel.get(this, "attrExecutionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Outputs: Execution output.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOutputs() {
        return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.
     * <p>
     * You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}'
     * For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPowerShellCurlCli() {
        return software.amazon.jsii.Kernel.get(this, "attrPowerShellCurlCli", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Status: Execution status.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute StatusMessage: Execution status information.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatusMessage() {
        return software.amazon.jsii.Kernel.get(this, "attrStatusMessage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.
     * <p>
     * You can notify approve to oos execution by adding --data-binary "{"data": {"NotifyType": "Approve"}}"
     * For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWindowsCurlCli() {
        return software.amazon.jsii.Kernel.get(this, "attrWindowsCurlCli", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oos.Execution}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oos.Execution> {
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
        private final com.aliyun.ros.cdk.oos.ExecutionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oos.ExecutionProps.Builder();
        }

        /**
         * Property templateName: Template name.
         * <p>
         * Content is limited to letters, numbers, underlined, underline, the length of 200 characters, and can not begin to ALIYUN, ACS, ALIBABA.
         * <p>
         * @return {@code this}
         * @param templateName Property templateName: Template name. This parameter is required.
         */
        public Builder templateName(final java.lang.String templateName) {
            this.props.templateName(templateName);
            return this;
        }
        /**
         * Property templateName: Template name.
         * <p>
         * Content is limited to letters, numbers, underlined, underline, the length of 200 characters, and can not begin to ALIYUN, ACS, ALIBABA.
         * <p>
         * @return {@code this}
         * @param templateName Property templateName: Template name. This parameter is required.
         */
        public Builder templateName(final com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.props.templateName(templateName);
            return this;
        }

        /**
         * Property mode: Execution mode.
         * <p>
         * @return {@code this}
         * @param mode Property mode: Execution mode. This parameter is required.
         */
        public Builder mode(final java.lang.String mode) {
            this.props.mode(mode);
            return this;
        }
        /**
         * Property mode: Execution mode.
         * <p>
         * @return {@code this}
         * @param mode Property mode: Execution mode. This parameter is required.
         */
        public Builder mode(final com.aliyun.ros.cdk.core.IResolvable mode) {
            this.props.mode(mode);
            return this;
        }

        /**
         * Property parameters: Parameters for the execution of template.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: Parameters for the execution of template. This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props.parameters(parameters);
            return this;
        }
        /**
         * Property parameters: Parameters for the execution of template.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: Parameters for the execution of template. This parameter is required.
         */
        public Builder parameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.props.parameters(parameters);
            return this;
        }

        /**
         * Property parentExecutionId: Parent execution ID.
         * <p>
         * @return {@code this}
         * @param parentExecutionId Property parentExecutionId: Parent execution ID. This parameter is required.
         */
        public Builder parentExecutionId(final java.lang.String parentExecutionId) {
            this.props.parentExecutionId(parentExecutionId);
            return this;
        }
        /**
         * Property parentExecutionId: Parent execution ID.
         * <p>
         * @return {@code this}
         * @param parentExecutionId Property parentExecutionId: Parent execution ID. This parameter is required.
         */
        public Builder parentExecutionId(final com.aliyun.ros.cdk.core.IResolvable parentExecutionId) {
            this.props.parentExecutionId(parentExecutionId);
            return this;
        }

        /**
         * Property resourceOptions: Resource options user by ROS.
         * <p>
         * @return {@code this}
         * @param resourceOptions Property resourceOptions: Resource options user by ROS. This parameter is required.
         */
        public Builder resourceOptions(final com.aliyun.ros.cdk.core.IResolvable resourceOptions) {
            this.props.resourceOptions(resourceOptions);
            return this;
        }
        /**
         * Property resourceOptions: Resource options user by ROS.
         * <p>
         * @return {@code this}
         * @param resourceOptions Property resourceOptions: Resource options user by ROS. This parameter is required.
         */
        public Builder resourceOptions(final com.aliyun.ros.cdk.oos.RosExecution.ResourceOptionsProperty resourceOptions) {
            this.props.resourceOptions(resourceOptions);
            return this;
        }

        /**
         * Property safetyCheck: Security check mode.
         * <p>
         * Allowed values:
         * <p>
         * <ul>
         * <li>Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.</li>
         * <li>ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param safetyCheck Property safetyCheck: Security check mode. This parameter is required.
         */
        public Builder safetyCheck(final java.lang.String safetyCheck) {
            this.props.safetyCheck(safetyCheck);
            return this;
        }
        /**
         * Property safetyCheck: Security check mode.
         * <p>
         * Allowed values:
         * <p>
         * <ul>
         * <li>Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.</li>
         * <li>ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param safetyCheck Property safetyCheck: Security check mode. This parameter is required.
         */
        public Builder safetyCheck(final com.aliyun.ros.cdk.core.IResolvable safetyCheck) {
            this.props.safetyCheck(safetyCheck);
            return this;
        }

        /**
         * Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tag value and the key mapping, the label of the key number can be up to 20. This parameter is required.
         */
        public Builder tags(final java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property templateVersion: Version number of template.
         * <p>
         * Default to the latest version.
         * <p>
         * @return {@code this}
         * @param templateVersion Property templateVersion: Version number of template. This parameter is required.
         */
        public Builder templateVersion(final java.lang.String templateVersion) {
            this.props.templateVersion(templateVersion);
            return this;
        }
        /**
         * Property templateVersion: Version number of template.
         * <p>
         * Default to the latest version.
         * <p>
         * @return {@code this}
         * @param templateVersion Property templateVersion: Version number of template. This parameter is required.
         */
        public Builder templateVersion(final com.aliyun.ros.cdk.core.IResolvable templateVersion) {
            this.props.templateVersion(templateVersion);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.oos.Execution}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.Execution build() {
            return new com.aliyun.ros.cdk.oos.Execution(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
