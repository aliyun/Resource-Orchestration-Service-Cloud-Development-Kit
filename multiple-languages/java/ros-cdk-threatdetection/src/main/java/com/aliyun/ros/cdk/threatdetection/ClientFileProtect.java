package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::ClientFileProtect</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.437Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.ClientFileProtect")
public class ClientFileProtect extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.IClientFileProtect {

    protected ClientFileProtect(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ClientFileProtect(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ClientFileProtect(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ClientFileProtectProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ClientFileProtect(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ClientFileProtectProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AlertLevel: The severity of alerts.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlertLevel() {
        return software.amazon.jsii.Kernel.get(this, "attrAlertLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FileOps: The operations that you want to perform on the files.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileOps() {
        return software.amazon.jsii.Kernel.get(this, "attrFileOps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FilePaths: The paths to the monitored files.
     * <p>
     * Wildcard characters are supported.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFilePaths() {
        return software.amazon.jsii.Kernel.get(this, "attrFilePaths", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Platform: The type of the operating system.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlatform() {
        return software.amazon.jsii.Kernel.get(this, "attrPlatform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProcPaths: The paths to the monitored processes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProcPaths() {
        return software.amazon.jsii.Kernel.get(this, "attrProcPaths", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleAction: The handling method of the rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleAction() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleId: The ID of the rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleName: The name of the rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SwitchId: The switch ID of the rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ClientFileProtectProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.ClientFileProtectProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.ClientFileProtect}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.ClientFileProtect> {
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
        private final com.aliyun.ros.cdk.threatdetection.ClientFileProtectProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.ClientFileProtectProps.Builder();
        }

        /**
         * Property fileOps: The operations that you want to perform on the files.
         * <p>
         * @return {@code this}
         * @param fileOps Property fileOps: The operations that you want to perform on the files. This parameter is required.
         */
        public Builder fileOps(final com.aliyun.ros.cdk.core.IResolvable fileOps) {
            this.props.fileOps(fileOps);
            return this;
        }
        /**
         * Property fileOps: The operations that you want to perform on the files.
         * <p>
         * @return {@code this}
         * @param fileOps Property fileOps: The operations that you want to perform on the files. This parameter is required.
         */
        public Builder fileOps(final java.util.List<? extends java.lang.Object> fileOps) {
            this.props.fileOps(fileOps);
            return this;
        }

        /**
         * Property filePaths: The paths to the monitored files.
         * <p>
         * Wildcard characters are supported.
         * <p>
         * @return {@code this}
         * @param filePaths Property filePaths: The paths to the monitored files. This parameter is required.
         */
        public Builder filePaths(final com.aliyun.ros.cdk.core.IResolvable filePaths) {
            this.props.filePaths(filePaths);
            return this;
        }
        /**
         * Property filePaths: The paths to the monitored files.
         * <p>
         * Wildcard characters are supported.
         * <p>
         * @return {@code this}
         * @param filePaths Property filePaths: The paths to the monitored files. This parameter is required.
         */
        public Builder filePaths(final java.util.List<? extends java.lang.Object> filePaths) {
            this.props.filePaths(filePaths);
            return this;
        }

        /**
         * Property procPaths: The paths to the monitored processes.
         * <p>
         * @return {@code this}
         * @param procPaths Property procPaths: The paths to the monitored processes. This parameter is required.
         */
        public Builder procPaths(final com.aliyun.ros.cdk.core.IResolvable procPaths) {
            this.props.procPaths(procPaths);
            return this;
        }
        /**
         * Property procPaths: The paths to the monitored processes.
         * <p>
         * @return {@code this}
         * @param procPaths Property procPaths: The paths to the monitored processes. This parameter is required.
         */
        public Builder procPaths(final java.util.List<? extends java.lang.Object> procPaths) {
            this.props.procPaths(procPaths);
            return this;
        }

        /**
         * Property ruleAction: The handling method of the rule.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>pass: allow</li>
         * <li>alert.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ruleAction Property ruleAction: The handling method of the rule. This parameter is required.
         */
        public Builder ruleAction(final java.lang.String ruleAction) {
            this.props.ruleAction(ruleAction);
            return this;
        }
        /**
         * Property ruleAction: The handling method of the rule.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>pass: allow</li>
         * <li>alert.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ruleAction Property ruleAction: The handling method of the rule. This parameter is required.
         */
        public Builder ruleAction(final com.aliyun.ros.cdk.core.IResolvable ruleAction) {
            this.props.ruleAction(ruleAction);
            return this;
        }

        /**
         * Property ruleName: The name of the rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the rule. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: The name of the rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the rule. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property alertLevel: The severity of alerts.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>0: does not generate alerts</li>
         * <li>1: sends notifications</li>
         * <li>2: suspicious</li>
         * <li>3: high-risk.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param alertLevel Property alertLevel: The severity of alerts. This parameter is required.
         */
        public Builder alertLevel(final java.lang.Number alertLevel) {
            this.props.alertLevel(alertLevel);
            return this;
        }
        /**
         * Property alertLevel: The severity of alerts.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>0: does not generate alerts</li>
         * <li>1: sends notifications</li>
         * <li>2: suspicious</li>
         * <li>3: high-risk.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param alertLevel Property alertLevel: The severity of alerts. This parameter is required.
         */
        public Builder alertLevel(final com.aliyun.ros.cdk.core.IResolvable alertLevel) {
            this.props.alertLevel(alertLevel);
            return this;
        }

        /**
         * Property platform: The type of the operating system.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>windows</strong>: Windows</li>
         * <li><strong>linux</strong>: Linux.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param platform Property platform: The type of the operating system. This parameter is required.
         */
        public Builder platform(final java.lang.String platform) {
            this.props.platform(platform);
            return this;
        }
        /**
         * Property platform: The type of the operating system.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>windows</strong>: Windows</li>
         * <li><strong>linux</strong>: Linux.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param platform Property platform: The type of the operating system. This parameter is required.
         */
        public Builder platform(final com.aliyun.ros.cdk.core.IResolvable platform) {
            this.props.platform(platform);
            return this;
        }

        /**
         * Property status: Rule status.
         * <p>
         * 1: Enabled
         * 0: Not enabled
         * <p>
         * @return {@code this}
         * @param status Property status: Rule status. This parameter is required.
         */
        public Builder status(final java.lang.Number status) {
            this.props.status(status);
            return this;
        }
        /**
         * Property status: Rule status.
         * <p>
         * 1: Enabled
         * 0: Not enabled
         * <p>
         * @return {@code this}
         * @param status Property status: Rule status. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * Property switchId: The switch ID of the rule.
         * <p>
         * @return {@code this}
         * @param switchId Property switchId: The switch ID of the rule. This parameter is required.
         */
        public Builder switchId(final java.lang.String switchId) {
            this.props.switchId(switchId);
            return this;
        }
        /**
         * Property switchId: The switch ID of the rule.
         * <p>
         * @return {@code this}
         * @param switchId Property switchId: The switch ID of the rule. This parameter is required.
         */
        public Builder switchId(final com.aliyun.ros.cdk.core.IResolvable switchId) {
            this.props.switchId(switchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.ClientFileProtect}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.ClientFileProtect build() {
            return new com.aliyun.ros.cdk.threatdetection.ClientFileProtect(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
