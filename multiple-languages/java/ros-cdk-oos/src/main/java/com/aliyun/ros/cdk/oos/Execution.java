package com.aliyun.ros.cdk.oos;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::OOS::Execution</code>, which is used to start an execution.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.375Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.Execution")
public class Execution extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.oos.IExecution {

    protected Execution(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Execution(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Execution(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oos.ExecutionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Execution(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oos.ExecutionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Execution(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCounters() {
        return software.amazon.jsii.Kernel.get(this, "attrCounters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.
     * <p>
     * You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}'
     * For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
     * You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurlCli() {
        return software.amazon.jsii.Kernel.get(this, "attrCurlCli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExecutionId: Execution ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExecutionId() {
        return software.amazon.jsii.Kernel.get(this, "attrExecutionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Outputs: Execution output.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutputs() {
        return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.
     * <p>
     * You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}'
     * For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPowerShellCurlCli() {
        return software.amazon.jsii.Kernel.get(this, "attrPowerShellCurlCli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Status: Execution status.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StatusMessage: Execution status information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusMessage() {
        return software.amazon.jsii.Kernel.get(this, "attrStatusMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.
     * <p>
     * You can notify approve to oos execution by adding --data-binary "{"data": {"NotifyType": "Approve"}}"
     * For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWindowsCurlCli() {
        return software.amazon.jsii.Kernel.get(this, "attrWindowsCurlCli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.ExecutionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.ExecutionProps.class));
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
        private com.aliyun.ros.cdk.oos.ExecutionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property description: The description of OOS Execution.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of OOS Execution. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: The description of OOS Execution.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of OOS Execution. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property loopMode: The loop mode of OOS Execution.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Automatic(Default): does not pause.</li>
         * <li>FirstBatchPause: The first batch of pauses.</li>
         * <li>EveryBatchPause: pause each batch.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param loopMode Property loopMode: The loop mode of OOS Execution. This parameter is required.
         */
        public Builder loopMode(final java.lang.String loopMode) {
            this.props().loopMode(loopMode);
            return this;
        }
        /**
         * Property loopMode: The loop mode of OOS Execution.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Automatic(Default): does not pause.</li>
         * <li>FirstBatchPause: The first batch of pauses.</li>
         * <li>EveryBatchPause: pause each batch.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param loopMode Property loopMode: The loop mode of OOS Execution. This parameter is required.
         */
        public Builder loopMode(final com.aliyun.ros.cdk.core.IResolvable loopMode) {
            this.props().loopMode(loopMode);
            return this;
        }

        /**
         * Property mode: Execution mode.
         * <p>
         * @return {@code this}
         * @param mode Property mode: Execution mode. This parameter is required.
         */
        public Builder mode(final java.lang.String mode) {
            this.props().mode(mode);
            return this;
        }
        /**
         * Property mode: Execution mode.
         * <p>
         * @return {@code this}
         * @param mode Property mode: Execution mode. This parameter is required.
         */
        public Builder mode(final com.aliyun.ros.cdk.core.IResolvable mode) {
            this.props().mode(mode);
            return this;
        }

        /**
         * Property parameters: Parameters for the execution of template.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: Parameters for the execution of template. This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props().parameters(parameters);
            return this;
        }
        /**
         * Property parameters: Parameters for the execution of template.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: Parameters for the execution of template. This parameter is required.
         */
        public Builder parameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.props().parameters(parameters);
            return this;
        }

        /**
         * Property parentExecutionId: Parent execution ID.
         * <p>
         * @return {@code this}
         * @param parentExecutionId Property parentExecutionId: Parent execution ID. This parameter is required.
         */
        public Builder parentExecutionId(final java.lang.String parentExecutionId) {
            this.props().parentExecutionId(parentExecutionId);
            return this;
        }
        /**
         * Property parentExecutionId: Parent execution ID.
         * <p>
         * @return {@code this}
         * @param parentExecutionId Property parentExecutionId: Parent execution ID. This parameter is required.
         */
        public Builder parentExecutionId(final com.aliyun.ros.cdk.core.IResolvable parentExecutionId) {
            this.props().parentExecutionId(parentExecutionId);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property resourceOptions: Resource options user by ROS.
         * <p>
         * @return {@code this}
         * @param resourceOptions Property resourceOptions: Resource options user by ROS. This parameter is required.
         */
        public Builder resourceOptions(final com.aliyun.ros.cdk.core.IResolvable resourceOptions) {
            this.props().resourceOptions(resourceOptions);
            return this;
        }
        /**
         * Property resourceOptions: Resource options user by ROS.
         * <p>
         * @return {@code this}
         * @param resourceOptions Property resourceOptions: Resource options user by ROS. This parameter is required.
         */
        public Builder resourceOptions(final com.aliyun.ros.cdk.oos.RosExecution.ResourceOptionsProperty resourceOptions) {
            this.props().resourceOptions(resourceOptions);
            return this;
        }

        /**
         * Property safetyCheck: Security check mode.
         * <p>
         * Allowed values:
         * <p>
         * <ul>
         * <li>Skip (default): This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.</li>
         * <li>ConfirmEveryHighRiskAction: This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param safetyCheck Property safetyCheck: Security check mode. This parameter is required.
         */
        public Builder safetyCheck(final java.lang.String safetyCheck) {
            this.props().safetyCheck(safetyCheck);
            return this;
        }
        /**
         * Property safetyCheck: Security check mode.
         * <p>
         * Allowed values:
         * <p>
         * <ul>
         * <li>Skip (default): This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.</li>
         * <li>ConfirmEveryHighRiskAction: This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param safetyCheck Property safetyCheck: Security check mode. This parameter is required.
         */
        public Builder safetyCheck(final com.aliyun.ros.cdk.core.IResolvable safetyCheck) {
            this.props().safetyCheck(safetyCheck);
            return this;
        }

        /**
         * Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tag value and the key mapping, the label of the key number can be up to 20. This parameter is required.
         */
        public Builder tags(final java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property templateContent: The content of the template in the JSON or YAML format.
         * <p>
         * This parameter is the same as the Content parameter that you can specify when you call the CreateTemplate operation. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
         * <p>
         * @return {@code this}
         * @param templateContent Property templateContent: The content of the template in the JSON or YAML format. This parameter is required.
         */
        public Builder templateContent(final java.lang.String templateContent) {
            this.props().templateContent(templateContent);
            return this;
        }
        /**
         * Property templateContent: The content of the template in the JSON or YAML format.
         * <p>
         * This parameter is the same as the Content parameter that you can specify when you call the CreateTemplate operation. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
         * <p>
         * @return {@code this}
         * @param templateContent Property templateContent: The content of the template in the JSON or YAML format. This parameter is required.
         */
        public Builder templateContent(final com.aliyun.ros.cdk.core.IResolvable templateContent) {
            this.props().templateContent(templateContent);
            return this;
        }

        /**
         * Property templateName: Template name.
         * <p>
         * Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
         * <p>
         * @return {@code this}
         * @param templateName Property templateName: Template name. This parameter is required.
         */
        public Builder templateName(final java.lang.String templateName) {
            this.props().templateName(templateName);
            return this;
        }
        /**
         * Property templateName: Template name.
         * <p>
         * Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
         * <p>
         * @return {@code this}
         * @param templateName Property templateName: Template name. This parameter is required.
         */
        public Builder templateName(final com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.props().templateName(templateName);
            return this;
        }

        /**
         * Property templateUrl: The Object Storage Service (OSS) URL of the object that stores the content of the Operation Orchestration Service (OOS) template.
         * <p>
         * The access control list (ACL) of the object must be public-read. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
         * <p>
         * @return {@code this}
         * @param templateUrl Property templateUrl: The Object Storage Service (OSS) URL of the object that stores the content of the Operation Orchestration Service (OOS) template. This parameter is required.
         */
        public Builder templateUrl(final java.lang.String templateUrl) {
            this.props().templateUrl(templateUrl);
            return this;
        }
        /**
         * Property templateUrl: The Object Storage Service (OSS) URL of the object that stores the content of the Operation Orchestration Service (OOS) template.
         * <p>
         * The access control list (ACL) of the object must be public-read. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
         * <p>
         * @return {@code this}
         * @param templateUrl Property templateUrl: The Object Storage Service (OSS) URL of the object that stores the content of the Operation Orchestration Service (OOS) template. This parameter is required.
         */
        public Builder templateUrl(final com.aliyun.ros.cdk.core.IResolvable templateUrl) {
            this.props().templateUrl(templateUrl);
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
            this.props().templateVersion(templateVersion);
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
            this.props().templateVersion(templateVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oos.Execution}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.Execution build() {
            return new com.aliyun.ros.cdk.oos.Execution(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.oos.ExecutionProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.oos.ExecutionProps.Builder();
            }
            return this.props;
        }
    }
}
